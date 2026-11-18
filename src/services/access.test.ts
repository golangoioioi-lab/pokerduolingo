import { describe, expect, it } from 'vitest';
import { canOpenLesson, canPracticeSpot, remainingQuestions, FREE_DAILY_QUESTIONS } from './access';
import { COURSES } from '../domain/content/catalog';
import { SPOTS } from '../domain/poker/ranges';

const lesson = (id: string) => COURSES.flatMap((c) => c.lessons).find((l) => l.id === id)!;

describe('access rules', () => {
  it('free users can open free lessons only', () => {
    expect(canOpenLesson(lesson('what-is-poker'), false)).toBe(true);
    expect(canOpenLesson(lesson('river'), false)).toBe(false);
    expect(canOpenLesson(lesson('river'), true)).toBe(true);
  });
  it('first lesson of intermediate and advanced is free', () => {
    for (const id of ['intermediate', 'advanced']) {
      const c = COURSES.find((x) => x.id === id)!;
      expect(c.lessons[0].tier).toBe('free');
      expect(c.lessons.slice(1).every((l) => l.tier === 'pro')).toBe(true);
    }
  });
  it('free users practise opening spots only', () => {
    for (const s of SPOTS) expect(canPracticeSpot(s, false)).toBe(s.kind === 'rfi');
    for (const s of SPOTS) expect(canPracticeSpot(s, true)).toBe(true);
  });
  it('daily quota', () => {
    expect(remainingQuestions(true)).toBe(Infinity);
    expect(remainingQuestions(false)).toBe(FREE_DAILY_QUESTIONS);
  });
});
