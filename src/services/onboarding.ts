import { load, save } from './storage';

export type Level = 'new' | 'rules' | 'regular';

const ONBOARDED_KEY = 'hl.onboarded.v1';
const LEVEL_KEY = 'hl.level.v1';

export const LEVELS: { id: Level; title: string; sub: string; course: string }[] = [
  { id: 'new', title: 'はじめて', sub: 'ルールから知りたい', course: 'beginner' },
  { id: 'rules', title: 'ルールは分かる', sub: '勝ち方を学びたい', course: 'basic' },
  { id: 'regular', title: 'よく遊ぶ', sub: '戦略を深めたい', course: 'intermediate' },
];

export const isOnboarded = () => load<boolean>(ONBOARDED_KEY, false);
export const loadLevel = (): Level => load<Level>(LEVEL_KEY, 'new');

export function finishOnboarding(level: Level) {
  save(LEVEL_KEY, level);
  save(ONBOARDED_KEY, true);
}

/** The course to start from, given the chosen level. */
export const startCourseFor = (level: Level) => LEVELS.find((l) => l.id === level)?.course ?? 'beginner';
