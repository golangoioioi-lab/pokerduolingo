import { evaluate } from './evaluator';
import type { Card } from './cards';

export type EquityPlayer =
  | { type: 'hand'; cards: [Card, Card] }
  | { type: 'range'; combos: [Card, Card, number][] }; // [c1, c2, weight 0..1]

export interface EquityRequest {
  players: EquityPlayer[];
  board: Card[];
  dead: Card[];
  iterations: number;
}

export interface EquityResult {
  equity: number[];
  win: number[];
  tie: number[];
  samples: number;
  exact: boolean;
  error?: string;
}

function choose(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  let r = 1;
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
  return Math.round(r);
}

const EXACT_LIMIT = 2_000_000;

export function calcEquity(
  req: EquityRequest,
  onProgress?: (r: EquityResult) => void,
): EquityResult {
  const n = req.players.length;
  const equity = new Float64Array(n);
  const win = new Float64Array(n);
  const tie = new Float64Array(n);
  const scores = new Int32Array(n);
  const hand = new Int32Array(7);
  const need = 5 - req.board.length;

  const fixedUsed = new Uint8Array(52);
  for (const c of [...req.board, ...req.dead]) fixedUsed[c] = 1;
  for (const p of req.players) {
    if (p.type === 'hand') {
      for (const c of p.cards) {
        if (fixedUsed[c]) return emptyResult(n, '同じカードが重複しています');
        fixedUsed[c] = 1;
      }
    }
  }

  // Drop range combos that clash with known cards.
  const ranges: ([Card, Card, number][] | null)[] = req.players.map((p) =>
    p.type === 'range' ? p.combos.filter(([a, b, w]) => w > 0 && !fixedUsed[a] && !fixedUsed[b]) : null,
  );
  for (const r of ranges) if (r && r.length === 0) return emptyResult(n, '有効なコンボがないレンジがあります');

  const holes: Card[][] = req.players.map((p) => (p.type === 'hand' ? [...p.cards] : [0, 0]));

  const score = () => {
    let best = -1;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      hand[5] = holes[i][0];
      hand[6] = holes[i][1];
      const s = evaluate(hand, 7);
      scores[i] = s;
      if (s > best) {
        best = s;
        cnt = 1;
      } else if (s === best) cnt++;
    }
    for (let i = 0; i < n; i++) {
      if (scores[i] === best) {
        equity[i] += 1 / cnt;
        if (cnt === 1) win[i]++;
        else tie[i]++;
      }
    }
  };

  const allHands = ranges.every((r) => r === null);
  const deck: Card[] = [];
  for (let c = 0; c < 52; c++) if (!fixedUsed[c]) deck.push(c);
  for (let i = 0; i < req.board.length; i++) hand[i] = req.board[i];

  // ---- Exact enumeration -------------------------------------------------
  if (allHands && choose(deck.length, need) <= EXACT_LIMIT) {
    let samples = 0;
    const rec = (start: number, depth: number) => {
      if (depth === 5) {
        score();
        samples++;
        return;
      }
      for (let i = start; i < deck.length; i++) {
        hand[depth] = deck[i];
        rec(i + 1, depth + 1);
      }
    };
    rec(0, req.board.length);
    return finish(equity, win, tie, samples, true);
  }

  // ---- Monte Carlo -------------------------------------------------------
  const used = new Uint8Array(52);
  const order = Array.from({ length: n }, (_, i) => i);
  let samples = 0;
  const progressEvery = Math.max(5000, Math.floor(req.iterations / 10));

  for (let it = 0; it < req.iterations; it++) {
    used.set(fixedUsed);
    // Random order so no range gets systematic priority on shared cards.
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = order[i];
      order[i] = order[j];
      order[j] = t;
    }
    let ok = true;
    for (const idx of order) {
      const r = ranges[idx];
      if (!r) continue;
      let picked = false;
      for (let tries = 0; tries < 200; tries++) {
        const [a, b, w] = r[Math.floor(Math.random() * r.length)];
        if (used[a] || used[b]) continue;
        if (w < 1 && Math.random() >= w) continue;
        holes[idx][0] = a;
        holes[idx][1] = b;
        used[a] = 1;
        used[b] = 1;
        picked = true;
        break;
      }
      if (!picked) {
        ok = false;
        break;
      }
    }
    if (!ok) continue;

    for (let d = req.board.length; d < 5; d++) {
      let c: number;
      do c = deck[Math.floor(Math.random() * deck.length)];
      while (used[c]);
      used[c] = 1;
      hand[d] = c;
    }
    score();
    samples++;
    if (onProgress && samples % progressEvery === 0) onProgress(finish(equity, win, tie, samples, false));
  }
  if (samples === 0) return emptyResult(n, 'カードの組み合わせが成立しません');
  return finish(equity, win, tie, samples, false);
}

function finish(e: Float64Array, w: Float64Array, t: Float64Array, samples: number, exact: boolean): EquityResult {
  const s = samples || 1;
  return {
    equity: Array.from(e, (x) => x / s),
    win: Array.from(w, (x) => x / s),
    tie: Array.from(t, (x) => x / s),
    samples,
    exact,
  };
}

function emptyResult(n: number, error: string): EquityResult {
  const z = Array(n).fill(0);
  return { equity: z, win: z, tie: z, samples: 0, exact: false, error };
}
