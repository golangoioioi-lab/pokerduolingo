// Learning-loop engine: XP, daily goal, streak, level and badges.
// Everything is device-local for now (synced fields can be added to Supabase later).
import { useEffect, useState } from 'react';
import { dayKey } from './access';
import { load, save } from './storage';

const XP_KEY = 'hl.xp.v1';
const GOAL_KEY = 'hl.goal.v1';
const BADGE_KEY = 'hl.badges.v1';
const COUNTER_KEY = 'hl.counters.v1';
const EVENT = 'hl:game';

export const XP = {
  lesson: 10,
  quizFirstTry: 2,
  perfectLesson: 5,
  practiceCorrect: 2,
  reviewCorrect: 3,
} as const;

export const GOALS = [
  { xp: 10, label: '気軽に', sub: '1日 約3分' },
  { xp: 20, label: 'ふつう', sub: '1日 約5分' },
  { xp: 30, label: 'しっかり', sub: '1日 約10分' },
  { xp: 50, label: '本気', sub: '1日 約15分' },
] as const;

interface XpStore { total: number; days: Record<string, number> }
interface Counters { lessons: number; practice: number; reviews: number; perfect: number }

const loadXp = () => load<XpStore>(XP_KEY, { total: 0, days: {} });
const loadCounters = () => load<Counters>(COUNTER_KEY, { lessons: 0, practice: 0, reviews: 0, perfect: 0 });

export const loadGoal = () => load<number>(GOAL_KEY, 20);
export function setGoal(xp: number) {
  save(GOAL_KEY, xp);
  emit();
}

// ---- level: level n needs 25·n·(n−1) total XP (0, 50, 150, 300, 500, ...) ----
export const levelStart = (n: number) => 25 * n * (n - 1);
export function levelOf(total: number) {
  let n = 1;
  while (total >= levelStart(n + 1)) n++;
  const from = levelStart(n);
  const to = levelStart(n + 1);
  return { level: n, into: total - from, span: to - from };
}

/** Consecutive days with any XP, ending today (or yesterday, if today has none yet). */
export function streakOf(days: Record<string, number>, now = new Date()): { count: number; aliveToday: boolean } {
  const d = new Date(now);
  const aliveToday = (days[dayKey(d)] ?? 0) > 0;
  if (!aliveToday) d.setDate(d.getDate() - 1);
  let count = 0;
  while ((days[dayKey(d)] ?? 0) > 0) { count++; d.setDate(d.getDate() - 1); }
  return { count, aliveToday };
}

// ---- badges ----
export interface Badge { id: string; title: string; sub: string; mark: string }
interface BadgeRule extends Badge { test: (s: GameState) => boolean }

const BADGE_RULES: BadgeRule[] = [
  { id: 'first-lesson', title: 'はじめの一歩', sub: 'レッスンを1つ完了', mark: '1', test: (s) => s.counters.lessons >= 1 },
  { id: 'lessons-10', title: '学びの習慣', sub: 'レッスンを10完了', mark: '10', test: (s) => s.counters.lessons >= 10 },
  { id: 'lessons-50', title: '研究家', sub: 'レッスンを50完了', mark: '50', test: (s) => s.counters.lessons >= 50 },
  { id: 'perfect-5', title: 'ノーミス', sub: '全問正解のレッスン5回', mark: '✓', test: (s) => s.counters.perfect >= 5 },
  { id: 'streak-3', title: '3日連続', sub: '3日続けて学習', mark: '3', test: (s) => s.streak >= 3 },
  { id: 'streak-7', title: '1週間', sub: '7日続けて学習', mark: '7', test: (s) => s.streak >= 7 },
  { id: 'streak-30', title: '1か月', sub: '30日続けて学習', mark: '30', test: (s) => s.streak >= 30 },
  { id: 'practice-100', title: '100ハンド', sub: '練習問題に100回回答', mark: '♠', test: (s) => s.counters.practice >= 100 },
  { id: 'practice-1000', title: '1000ハンド', sub: '練習問題に1000回回答', mark: '♣', test: (s) => s.counters.practice >= 1000 },
  { id: 'review-50', title: '復習の達人', sub: '復習で50問正解', mark: '↺', test: (s) => s.counters.reviews >= 50 },
  { id: 'level-10', title: 'レベル10', sub: 'レベル10に到達', mark: 'X', test: (s) => s.level >= 10 },
];
export const BADGES: Badge[] = BADGE_RULES.map(({ test: _t, ...b }) => b);

// ---- state ----
export interface GameState {
  total: number;
  today: number;
  goal: number;
  streak: number;
  aliveToday: boolean;
  level: number;
  levelInto: number;
  levelSpan: number;
  counters: Counters;
  badges: string[];
  /** XP per day for the last 7 days, oldest first. */
  week: { day: string; xp: number }[];
}

export function getGame(now = new Date()): GameState {
  const xp = loadXp();
  const lv = levelOf(xp.total);
  const st = streakOf(xp.days, now);
  const week = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(now);
    d.setDate(d.getDate() - (6 - i));
    return { day: dayKey(d), xp: xp.days[dayKey(d)] ?? 0 };
  });
  return {
    total: xp.total,
    today: xp.days[dayKey(now)] ?? 0,
    goal: loadGoal(),
    streak: st.count,
    aliveToday: st.aliveToday,
    level: lv.level,
    levelInto: lv.into,
    levelSpan: lv.span,
    counters: loadCounters(),
    badges: load<string[]>(BADGE_KEY, []),
    week,
  };
}

function emit() {
  window.dispatchEvent(new CustomEvent(EVENT));
}

export interface AwardResult { xp: number; newBadges: Badge[]; goalReached: boolean; levelUp: boolean }

/** Adds XP (and bumps a counter), then unlocks any badges now earned. */
export function award(xp: number, counter?: keyof Counters, by = 1): AwardResult {
  const before = getGame();
  const store = loadXp();
  const k = dayKey();
  store.total += xp;
  store.days[k] = (store.days[k] ?? 0) + xp;
  save(XP_KEY, store);
  if (counter) {
    const c = loadCounters();
    c[counter] += by;
    save(COUNTER_KEY, c);
  }
  const after = getGame();
  const owned = new Set(after.badges);
  const newBadges = BADGE_RULES.filter((r) => !owned.has(r.id) && r.test(after)).map(({ test: _t, ...b }) => b);
  if (newBadges.length) save(BADGE_KEY, [...after.badges, ...newBadges.map((b) => b.id)]);
  emit();
  return {
    xp,
    newBadges,
    goalReached: before.today < before.goal && after.today >= after.goal,
    levelUp: after.level > before.level,
  };
}

/** React hook: live game state, updated whenever XP or the goal changes. */
export function useGame(): GameState {
  const [s, setS] = useState(getGame);
  useEffect(() => {
    const on = () => setS(getGame());
    window.addEventListener(EVENT, on);
    window.addEventListener('focus', on);
    return () => { window.removeEventListener(EVENT, on); window.removeEventListener('focus', on); };
  }, []);
  return s;
}

/** Light haptic tap where supported (Android/Chrome); silently ignored elsewhere. */
export function haptic(pattern: number | number[] = 12) {
  try { navigator.vibrate?.(pattern); } catch { /* not supported */ }
}
