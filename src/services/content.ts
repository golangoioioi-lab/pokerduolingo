import { COURSES } from '../domain/content/catalog';
import type { Block, Course, LessonBody, LessonMeta } from '../domain/content/types';
import { api, isDemoMode } from './backend';
import { pushDone } from './sync';
import { load, save } from './storage';

type Loader = () => Promise<{ default: LessonBody }>;

const freeLoaders = import.meta.glob<{ default: LessonBody }>('../domain/content/lessons/free/*.ts');

// Pro lesson bodies are bundled when paid plans are off (everything is free), or when
// VITE_BUNDLE_PRO_CONTENT is "true" (demo /
// development). Production builds set it to "false": the branch is removed at build
// time and Pro bodies are fetched from /api/lessons/:id, which checks the entitlement.
const proLoaders: Record<string, Loader> =
  import.meta.env.VITE_BUNDLE_PRO_CONTENT === 'true' || import.meta.env.VITE_PAID_PLANS !== 'true'
    ? import.meta.glob<{ default: LessonBody }>('../domain/content/lessons/pro/*.ts')
    : {};

const loaderFor = (tier: 'free' | 'pro', id: string): Loader | undefined =>
  (tier === 'free' ? freeLoaders : proLoaders)[`../domain/content/lessons/${tier}/${id}.ts`];

export const ALL_LESSONS: { course: Course; lesson: LessonMeta }[] = COURSES.flatMap((course) =>
  course.lessons.map((lesson) => ({ course, lesson })),
);

export function findLesson(id: string) {
  const i = ALL_LESSONS.findIndex((x) => x.lesson.id === id);
  if (i < 0) return null;
  return { ...ALL_LESSONS[i], next: ALL_LESSONS[i + 1] ?? null };
}

export async function getLessonBody(meta: LessonMeta): Promise<Block[]> {
  const local = loaderFor(meta.tier, meta.id);
  if (local) return (await local()).default.blocks;
  if (meta.tier === 'pro' && !isDemoMode) {
    const res = await api<{ blocks: Block[] }>(`/lessons/${encodeURIComponent(meta.id)}`);
    if (!res.ok || !res.data) throw new Error(res.status === 403 || res.status === 401 ? 'pro-required' : 'lesson-unavailable');
    return res.data.blocks;
  }
  throw new Error('lesson-unavailable');
}

// ---- progress (device-local; synced to `progress` table when signed in) ----
const DONE_KEY = 'hl.lessonsDone.v1';

export const loadDone = (): string[] => load<string[]>(DONE_KEY, []);

export async function markDone(id: string) {
  const d = loadDone();
  if (!d.includes(id)) save(DONE_KEY, [...d, id]);
  await pushDone(id);
}
