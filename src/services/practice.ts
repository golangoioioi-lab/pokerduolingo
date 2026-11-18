import { ALL_HANDS, comboCount, comboLabel, handCombos, labelGridPos, shuffle, type Card } from '../domain/poker/cards';
import { SPOTS, freqOf, spotById, type Action, type Freq, type RangeMap, type Spot } from '../domain/poker/ranges';
import { getSpotRange } from './customRanges';
import { load, save } from './storage';

export const CORRECT_THRESHOLD = 0.25;

export interface PracticeSettings {
  spots: string[];
  focus: boolean;
}

const KEY = 'hl.practiceSettings.v1';
export const loadPracticeSettings = () =>
  load<PracticeSettings>(KEY, { spots: SPOTS.map((s) => s.id), focus: true });
export const savePracticeSettings = (s: PracticeSettings) => save(KEY, s);

export interface Question {
  spot: Spot;
  range: RangeMap;
  cards: [Card, Card];
  label: string;
}

export function mainAction(f: Freq | undefined): Action {
  const r = f?.raise ?? 0;
  const c = f?.call ?? 0;
  const fold = 1 - r - c;
  if (r >= c && r >= fold) return 'raise';
  if (c >= fold) return 'call';
  return 'fold';
}

export const isCorrect = (f: Freq | undefined, a: Action) => freqOf(f, a) >= CORRECT_THRESHOLD;

function isBorder(label: string, range: RangeMap): boolean {
  const f = range[label];
  const fr = [f?.raise ?? 0, f?.call ?? 0, 1 - (f?.raise ?? 0) - (f?.call ?? 0)];
  if (Math.max(...fr) < 0.95) return true;
  const [r, c] = labelGridPos(label);
  const me = mainAction(f);
  for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    const nr = r + dr;
    const nc = c + dc;
    if (nr < 0 || nc < 0 || nr > 12 || nc > 12) continue;
    if (mainAction(range[ALL_HANDS[nr * 13 + nc]]) !== me) return true;
  }
  return false;
}

export function deal(spotIds: string[], focus: boolean): Question {
  const spot = spotById(spotIds[Math.floor(Math.random() * spotIds.length)]);
  const range = getSpotRange(spot.id);
  let label: string;
  if (focus) {
    const weights = ALL_HANDS.map((l) => comboCount(l) * (isBorder(l, range) ? 1 : 0.1));
    let x = Math.random() * weights.reduce((a, b) => a + b, 0);
    let i = 0;
    while (x > weights[i]) x -= weights[i++];
    label = ALL_HANDS[i];
  } else {
    const deck = shuffle(Array.from({ length: 52 }, (_, i) => i));
    label = comboLabel(deck[0], deck[1]);
  }
  const combos = handCombos(label);
  const cards = [...combos[Math.floor(Math.random() * combos.length)]].sort((a, b) => b - a) as [Card, Card];
  return { spot, range, cards, label };
}
