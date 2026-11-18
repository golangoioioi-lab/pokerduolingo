// Fast 5–7 card hand evaluator. Returns an integer score: higher is better.
// Layout: category << 20 | tie-break nibbles.

export const CATEGORY_NAMES = [
  'ハイカード',
  'ワンペア',
  'ツーペア',
  'スリーカード',
  'ストレート',
  'フラッシュ',
  'フルハウス',
  'フォーカード',
  'ストレートフラッシュ',
];

const rc = new Int32Array(13);
const sc = new Int32Array(4);
const sm = new Int32Array(4);

/** Highest rank of a straight contained in the rank bitmask, or -1. */
function straightHigh(mask: number): number {
  // Shift by 1 so bit 0 can hold the low ace (wheel).
  const ext = (mask << 1) | ((mask >> 12) & 1);
  for (let h = 13; h >= 4; h--) {
    if (((ext >> (h - 4)) & 0x1f) === 0x1f) return h - 1;
  }
  return -1;
}

/** Pack the top n ranks of a bitmask into nibbles (highest first). */
function topRanks(mask: number, n: number): number {
  let v = 0;
  let got = 0;
  for (let r = 12; r >= 0 && got < n; r--) {
    if (mask & (1 << r)) {
      v = (v << 4) | r;
      got++;
    }
  }
  return v;
}

export function evaluate(cards: ArrayLike<number>, len: number = cards.length): number {
  rc.fill(0);
  sc.fill(0);
  sm.fill(0);
  let mask = 0;
  for (let i = 0; i < len; i++) {
    const c = cards[i];
    const r = c >> 2;
    const s = c & 3;
    rc[r]++;
    sc[s]++;
    sm[s] |= 1 << r;
    mask |= 1 << r;
  }

  // With ≤7 cards a flush excludes quads / full house, so it can be checked first.
  for (let s = 0; s < 4; s++) {
    if (sc[s] >= 5) {
      const f = sm[s];
      const sf = straightHigh(f);
      if (sf >= 0) return (8 << 20) | sf;
      return (5 << 20) | topRanks(f, 5);
    }
  }

  let quad = -1;
  let t1 = -1;
  let t2 = -1;
  let p1 = -1;
  let p2 = -1;
  for (let r = 12; r >= 0; r--) {
    const n = rc[r];
    if (n === 4) quad = r;
    else if (n === 3) {
      if (t1 < 0) t1 = r;
      else if (t2 < 0) t2 = r;
    } else if (n === 2) {
      if (p1 < 0) p1 = r;
      else if (p2 < 0) p2 = r;
    }
  }

  if (quad >= 0) return (7 << 20) | (quad << 4) | topRanks(mask & ~(1 << quad), 1);
  if (t1 >= 0 && (t2 >= 0 || p1 >= 0)) return (6 << 20) | (t1 << 4) | Math.max(t2, p1);

  const st = straightHigh(mask);
  if (st >= 0) return (4 << 20) | st;

  if (t1 >= 0) return (3 << 20) | (t1 << 8) | topRanks(mask & ~(1 << t1), 2);
  if (p1 >= 0 && p2 >= 0)
    return (2 << 20) | (p1 << 8) | (p2 << 4) | topRanks(mask & ~(1 << p1) & ~(1 << p2), 1);
  if (p1 >= 0) return (1 << 20) | (p1 << 12) | topRanks(mask & ~(1 << p1), 3);
  return topRanks(mask, 5);
}

export const categoryOf = (score: number) => score >> 20;
