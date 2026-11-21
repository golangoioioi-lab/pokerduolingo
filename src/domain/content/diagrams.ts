// Pure math + validation for diagram blocks. The renderer shows computed numbers,
// so a lesson's text and its picture can never disagree.
import type { Block } from './types';
import { parseCard } from '../poker/cards';
import { validateInteractive } from './interactive';

export const RANKS = 'AKQJT98765432';
const SUITS = 'shdc';

/** Equity needed to call: bet / (pot + 2·bet), in % (pot = pot before the bet). */
export const requiredEquity = (pot: number, bet: number) => (bet / (pot + 2 * bet)) * 100;

export const spr = (pot: number, stack: number) => (pot > 0 ? stack / pot : Infinity);

export const optionEv = (o: { ev?: number; outcomes?: { prob: number; value: number }[] }) =>
  o.ev ?? (o.outcomes ?? []).reduce((a, x) => a + x.prob * x.value, 0);

/** "AA" | "AKs" | "AKo" | "AK" (= suited + offsuit) → concrete 2-card combos. */
export function expandHand(h: string): [string, string][] | null {
  const m = /^([AKQJT2-9])([AKQJT2-9])([so]?)$/.exec(h);
  if (!m) return null;
  const [, a, b, kind] = m;
  if (RANKS.indexOf(a) > RANKS.indexOf(b)) return null; // higher rank first
  const out: [string, string][] = [];
  if (a === b) {
    if (kind) return null;
    for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) out.push([a + SUITS[i], a + SUITS[j]]);
    return out;
  }
  for (const s1 of SUITS) for (const s2 of SUITS) {
    if (kind === 's' && s1 !== s2) continue;
    if (kind === 'o' && s1 === s2) continue;
    out.push([a + s1, b + s2]);
  }
  return out;
}

export const comboCount = (hands: string[], dead: string[] = []) =>
  hands.reduce((n, h) => n + (expandHand(h) ?? []).filter(([x, y]) => !dead.includes(x) && !dead.includes(y)).length, 0);

/** 13×13 grid cell label → row/col (row = first rank; suited above diagonal). */
export function gridCell(h: string): { r: number; c: number }[] {
  const m = /^([AKQJT2-9])([AKQJT2-9])([so]?)$/.exec(h);
  if (!m) return [];
  const i = RANKS.indexOf(m[1]), j = RANKS.indexOf(m[2]);
  if (i === j) return [{ r: i, c: i }];
  if (m[3] === 's') return [{ r: i, c: j }];
  if (m[3] === 'o') return [{ r: j, c: i }];
  return [{ r: i, c: j }, { r: j, c: i }];
}

const POS_ORDER = ['UTG', 'HJ', 'CO', 'BTN', 'SB', 'BB'];

function cardsOk(cards: string[], where: string, errs: string[]) {
  for (const c of cards) if (parseCard(c) === null) errs.push(`${where}: bad card "${c}"`);
  if (new Set(cards).size !== cards.length) errs.push(`${where}: duplicate card in ${cards.join(' ')}`);
}

/** Returns human-readable problems with a diagram block (empty = fine). Non-diagram blocks → []. */
export function validateDiagram(b: Block): string[] {
  const e: string[] = [];
  switch (b.t) {
    case 'pot':
      if (b.steps.length < 2) e.push('pot: need ≥2 steps');
      for (const s of b.steps) if (!(s.pot > 0) || !(s.stack >= 0)) e.push(`pot: bad numbers at ${s.label}`);
      break;
    case 'equity': {
      const sum = b.players.reduce((a, p) => a + p.pct, 0);
      if (b.players.length < 2 || b.players.length > 4) e.push('equity: 2–4 players');
      if (Math.abs(sum - 100) > 1) e.push(`equity: pct sums to ${sum}`);
      cardsOk([...b.players.flatMap((p) => p.cards ?? []), ...(b.board ?? [])], 'equity', e);
      if ((b.board?.length ?? 0) > 5) e.push('equity: board > 5');
      break;
    }
    case 'odds':
      if (!(b.pot > 0 && b.bet > 0)) e.push('odds: pot and bet must be > 0');
      if (!(b.equity >= 0 && b.equity <= 100)) e.push('odds: equity 0–100');
      break;
    case 'seats': {
      const idx = b.seats.map((s) => POS_ORDER.indexOf(s.pos));
      if (idx.some((i) => i < 0)) e.push('seats: unknown position');
      if (idx.some((i, k) => k > 0 && i <= idx[k - 1])) e.push('seats: positions must be unique and in UTG→BB order');
      if (b.seats.filter((s) => s.hero).length > 1) e.push('seats: at most one hero');
      cardsOk([...b.seats.flatMap((s) => s.cards ?? []), ...(b.board ?? [])], 'seats', e);
      break;
    }
    case 'combos':
      for (const g of b.groups) for (const h of g.hands) if (!expandHand(h)) e.push(`combos: bad hand "${h}" (write AKs / AKo / AK / QQ, higher rank first)`);
      cardsOk(b.dead ?? [], 'combos.dead', e);
      break;
    case 'timeline': {
      const board: string[] = [];
      for (const s of b.steps) {
        if (s.board) board.push(...s.board);
        if (s.actions.length === 0) e.push(`timeline: ${s.street} has no actions`);
      }
      cardsOk(board, 'timeline (all streets combined)', e);
      if (board.length > 5) e.push('timeline: more than 5 board cards');
      break;
    }
    case 'tree':
      if (b.options.length < 2) e.push('tree: need ≥2 options');
      for (const o of b.options) {
        if (o.ev === undefined && !o.outcomes?.length) e.push(`tree: "${o.label}" needs ev or outcomes`);
        if (o.outcomes) {
          const p = o.outcomes.reduce((a, x) => a + x.prob, 0);
          if (Math.abs(p - 1) > 0.011) e.push(`tree: "${o.label}" probs sum to ${p}`);
        }
      }
      break;
    case 'quiz':
      if (b.optionCards && b.optionCards.length !== b.options.length) e.push(`quiz "${b.q}": optionCards length must equal options length`);
      for (const oc of b.optionCards ?? []) cardsOk([...oc, ...(b.board ?? [])], `quiz "${b.q}" option`, e);
      cardsOk([...(b.hand ?? []), ...(b.board ?? [])], `quiz "${b.q}"`, e);
      break;
    case 'estimate':
      if (!(b.min < b.max) || b.answer < b.min || b.answer > b.max) e.push(`estimate "${b.q}": need min ≤ answer ≤ max`);
      if (!(b.tolerance > 0) || b.tolerance > (b.max - b.min) / 4) e.push(`estimate "${b.q}": tolerance must be > 0 and ≤ a quarter of the range`);
      cardsOk([...(b.hand ?? []), ...(b.board ?? [])], `estimate "${b.q}"`, e);
      break;
    case 'compare':
      for (const side of [b.left, b.right]) {
        cardsOk([...(side.cards ?? []), ...(side.board ?? [])], `compare "${side.title}"`, e);
        if (side.points.length === 0) e.push(`compare "${side.title}": no points`);
      }
      break;
    default:
      e.push(...validateInteractive(b));
  }
  return e;
}

export const DIAGRAM_TYPES = ['pot', 'equity', 'odds', 'seats', 'combos', 'timeline', 'tree', 'compare'] as const;
export const isDiagram = (b: Block) => (DIAGRAM_TYPES as readonly string[]).includes(b.t) || b.t === 'cards' || b.t === 'range';

/** Blocks the learner answers (count toward XP and spaced repetition). */
export const QUESTION_TYPES = ['quiz', 'estimate', 'play', 'pick5', 'showdown', 'outs', 'order', 'rapid', 'paint'] as const;
export type QuestionBlock = Extract<Block, { t: (typeof QUESTION_TYPES)[number] }>;
export const isQuestion = (b: Block): b is QuestionBlock => (QUESTION_TYPES as readonly string[]).includes(b.t);
/** Hands-on blocks (the learner plays / taps rather than picks an option). */
export const isHandsOn = (b: Block) => isQuestion(b) && b.t !== 'quiz' && b.t !== 'estimate';
