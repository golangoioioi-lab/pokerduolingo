// Card = rank * 4 + suit.  rank: 0 = '2' ... 12 = 'A'.  suit: 0..3 (s, h, d, c)
export type Card = number;

export const RANKS = '23456789TJQKA';
export const SUITS = 'shdc';
export const SUIT_SYMBOLS = ['♠', '♥', '♦', '♣'];

export const rankOf = (c: Card) => c >> 2;
export const suitOf = (c: Card) => c & 3;
export const makeCard = (rank: number, suit: number): Card => rank * 4 + suit;

export function cardStr(c: Card): string {
  return RANKS[rankOf(c)] + SUITS[suitOf(c)];
}

export function parseCard(s: string): Card | null {
  if (s.length !== 2) return null;
  const r = RANKS.indexOf(s[0].toUpperCase());
  const su = SUITS.indexOf(s[1].toLowerCase());
  if (r < 0 || su < 0) return null;
  return makeCard(r, su);
}

export const FULL_DECK: Card[] = Array.from({ length: 52 }, (_, i) => i);

// ---- 169 starting-hand classes ----------------------------------------
// Grid layout: row / column index 0 = A ... 12 = 2.
// Upper-right triangle (row < col) = suited, lower-left = offsuit, diagonal = pairs.
export const gridRank = (idx: number) => 12 - idx;

export function gridLabel(row: number, col: number): string {
  const r1 = gridRank(row);
  const r2 = gridRank(col);
  if (row === col) return RANKS[r1] + RANKS[r1];
  if (row < col) return RANKS[r1] + RANKS[r2] + 's';
  return RANKS[r2] + RANKS[r1] + 'o';
}

export const ALL_HANDS: string[] = [];
for (let r = 0; r < 13; r++) for (let c = 0; c < 13; c++) ALL_HANDS.push(gridLabel(r, c));

export function labelFor(hi: number, lo: number, suited: boolean): string {
  if (hi === lo) return RANKS[hi] + RANKS[hi];
  const [a, b] = hi > lo ? [hi, lo] : [lo, hi];
  return RANKS[a] + RANKS[b] + (suited ? 's' : 'o');
}

export function comboLabel(a: Card, b: Card): string {
  return labelFor(rankOf(a), rankOf(b), suitOf(a) === suitOf(b));
}

/** Position of a hand label in the 13x13 grid. */
export function labelGridPos(label: string): [number, number] {
  const r1 = RANKS.indexOf(label[0]);
  const r2 = RANKS.indexOf(label[1]);
  const i1 = 12 - r1;
  const i2 = 12 - r2;
  if (label.length === 2) return [i1, i1];
  return label[2] === 's' ? [i1, i2] : [i2, i1];
}

const comboCache = new Map<string, [Card, Card][]>();

export function handCombos(label: string): [Card, Card][] {
  const cached = comboCache.get(label);
  if (cached) return cached;
  const r1 = RANKS.indexOf(label[0]);
  const r2 = RANKS.indexOf(label[1]);
  const out: [Card, Card][] = [];
  if (label.length === 2) {
    for (let s1 = 0; s1 < 4; s1++)
      for (let s2 = s1 + 1; s2 < 4; s2++) out.push([makeCard(r1, s1), makeCard(r1, s2)]);
  } else if (label[2] === 's') {
    for (let s = 0; s < 4; s++) out.push([makeCard(r1, s), makeCard(r2, s)]);
  } else {
    for (let s1 = 0; s1 < 4; s1++)
      for (let s2 = 0; s2 < 4; s2++) if (s1 !== s2) out.push([makeCard(r1, s1), makeCard(r2, s2)]);
  }
  comboCache.set(label, out);
  return out;
}

export function comboCount(label: string): number {
  return label.length === 2 ? 6 : label[2] === 's' ? 4 : 12;
}

export function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
