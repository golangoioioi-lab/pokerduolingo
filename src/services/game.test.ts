import { describe, expect, it } from 'vitest';
import { levelOf, levelStart, streakOf } from './game';
import { INTERVALS, nextState } from './review';
import { dayKey } from './access';

describe('levels', () => {
  it('thresholds grow: 0, 50, 150, 300', () => {
    expect([1, 2, 3, 4].map(levelStart)).toEqual([0, 50, 150, 300]);
  });
  it('places XP inside a level', () => {
    expect(levelOf(0)).toEqual({ level: 1, into: 0, span: 50 });
    expect(levelOf(49).level).toBe(1);
    expect(levelOf(50)).toEqual({ level: 2, into: 0, span: 100 });
    expect(levelOf(320)).toEqual({ level: 4, into: 20, span: 200 });
  });
});

describe('streak', () => {
  const now = new Date(2026, 10, 16, 12);
  const back = (n: number) => { const d = new Date(now); d.setDate(d.getDate() - n); return dayKey(d); };
  it('counts consecutive days including today', () => {
    expect(streakOf({ [back(0)]: 10, [back(1)]: 5, [back(2)]: 3, [back(4)]: 9 }, now)).toEqual({ count: 3, aliveToday: true });
  });
  it('stays alive until the end of today if yesterday counted', () => {
    expect(streakOf({ [back(1)]: 5, [back(2)]: 5 }, now)).toEqual({ count: 2, aliveToday: false });
  });
  it('breaks after a missed day', () => {
    expect(streakOf({ [back(2)]: 5 }, now).count).toBe(0);
  });
});

describe('spaced repetition', () => {
  const now = 1_000_000;
  it('wrong answers are due immediately in box 0', () => {
    expect(nextState(undefined, false, now, 'l', 3)).toMatchObject({ box: 0, due: now, id: 'l#3' });
  });
  it('correct answers climb boxes with longer intervals', () => {
    const a = nextState(undefined, true, now, 'l', 0);
    expect(a.box).toBe(1);
    expect(a.due).toBe(now + INTERVALS[1] * 86400000);
    const b = nextState(a, true, now, 'l', 0);
    expect(b.box).toBe(2);
    const top = nextState({ ...b, box: 5 }, true, now, 'l', 0);
    expect(top.box).toBe(5);
  });
  it('a miss resets to box 0', () => {
    expect(nextState({ id: 'l#0', lessonId: 'l', index: 0, box: 4, due: 0 }, false, now, 'l', 0).box).toBe(0);
  });
});
