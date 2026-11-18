import type { Course } from '../domain/content/types';

/**
 * Lessons open one after another inside a course (finish one to open the next).
 * Every course's first lesson is always open, so experienced players can jump ahead.
 */
export function isUnlocked(course: Course, index: number, done: string[]): boolean {
  return index === 0 || done.includes(course.lessons[index - 1].id);
}

/** Horizontal offset (px) for the winding path, repeating every 8 nodes. */
const WAVE = [0, 44, 72, 44, 0, -44, -72, -44];
export const pathOffset = (i: number) => WAVE[i % WAVE.length];
