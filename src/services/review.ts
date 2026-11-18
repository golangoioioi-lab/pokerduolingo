// Spaced repetition (Leitner boxes) over lesson quizzes.
// A quiz answered wrong comes back the same day; each correct review pushes it further out.
import { load, save } from './storage';

export interface ReviewCard {
  id: string; // `${lessonId}#${blockIndex}`
  lessonId: string;
  index: number;
  box: number; // 0..5
  due: number; // epoch ms
}

const KEY = 'hl.review.v1';
const DAY = 86400000;
/** Days until the next review for each box. */
export const INTERVALS = [0, 1, 3, 7, 16, 35];

const loadCards = () => load<Record<string, ReviewCard>>(KEY, {});

export function nextState(card: ReviewCard | undefined, correct: boolean, now: number, lessonId: string, index: number): ReviewCard {
  const id = `${lessonId}#${index}`;
  if (!correct) return { id, lessonId, index, box: 0, due: now };
  const box = Math.min(INTERVALS.length - 1, (card ? card.box : 0) + 1);
  return { id, lessonId, index, box, due: now + INTERVALS[box] * DAY };
}

export function recordQuiz(lessonId: string, index: number, correct: boolean, now = Date.now()) {
  const cards = loadCards();
  const id = `${lessonId}#${index}`;
  cards[id] = nextState(cards[id], correct, now, lessonId, index);
  save(KEY, cards);
}

export function dueCards(now = Date.now(), limit = 10): ReviewCard[] {
  return Object.values(loadCards())
    .filter((c) => c.due <= now)
    .sort((a, b) => a.box - b.box || a.due - b.due)
    .slice(0, limit);
}

export const dueCount = (now = Date.now()) => Object.values(loadCards()).filter((c) => c.due <= now).length;
