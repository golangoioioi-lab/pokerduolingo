import { api, isSignedIn } from './backend';
import { load, save } from './storage';

const DONE_KEY = 'hl.lessonsDone.v1';

/** Two-way merge of completed lessons: union of this device and the server. */
export function mergeDone(local: string[], remote: string[]): { merged: string[]; toUpload: string[] } {
  const r = new Set(remote);
  const merged = [...new Set([...remote, ...local])];
  return { merged, toUpload: local.filter((id) => !r.has(id)) };
}

/** Runs after sign-in so progress made before creating an account is kept. */
export async function syncProgress() {
  if (!isSignedIn()) return;
  const res = await api<{ lessonIds: string[] }>('/progress');
  if (!res.ok || !res.data) return;
  const { merged, toUpload } = mergeDone(load<string[]>(DONE_KEY, []), res.data.lessonIds);
  save(DONE_KEY, merged);
  if (toUpload.length) await api('/progress', { method: 'POST', body: { lessonIds: toUpload } });
}

/** Records one completed lesson on the server (best effort). */
export async function pushDone(lessonId: string) {
  if (isSignedIn()) await api('/progress', { method: 'POST', body: { lessonIds: [lessonId] } });
}
