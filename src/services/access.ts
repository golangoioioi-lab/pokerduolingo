// Free vs Pro rules. Pure functions so they can be unit-tested.
// NOTE: the client only uses these to decide what to show. Real enforcement for paid
// content happens server-side (RLS on lesson_content), see docs/設計書.md §9.
import type { LessonMeta } from '../domain/content/types';
import type { Spot } from '../domain/poker/ranges';
import { load, save } from './storage';

export const FREE_DAILY_QUESTIONS = 30;
export const FREE_STATS_DAYS = 7;

export const canOpenLesson = (lesson: LessonMeta, isPro: boolean) => isPro || lesson.tier === 'free';

/** Free users practise opening spots only; facing-an-open spots are Pro. */
export const canPracticeSpot = (spot: Spot, isPro: boolean) => isPro || spot.kind === 'rfi';

export const canEditRanges = (isPro: boolean) => isPro;

// ---- daily question quota (free plan) ----
const QUOTA_KEY = 'hl.quota.v1';

export const dayKey = (d: Date = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export function remainingQuestions(isPro: boolean, now: Date = new Date()): number {
  if (isPro) return Infinity;
  const q = load<{ day: string; used: number }>(QUOTA_KEY, { day: '', used: 0 });
  const used = q.day === dayKey(now) ? q.used : 0;
  return Math.max(0, FREE_DAILY_QUESTIONS - used);
}

export function consumeQuestion(isPro: boolean, now: Date = new Date()) {
  if (isPro) return;
  const day = dayKey(now);
  const q = load<{ day: string; used: number }>(QUOTA_KEY, { day, used: 0 });
  save(QUOTA_KEY, { day, used: (q.day === day ? q.used : 0) + 1 });
}
