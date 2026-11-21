// Answers for the hands-on blocks are computed here from the hand evaluator, so a lesson
// can never mark the wrong card / winner / out as correct.
import type { Block, HandCategory } from './types';
import { FULL_DECK, cardStr, parseCard } from '../poker/cards';
import { CATEGORY_NAMES, categoryOf, evaluate } from '../poker/evaluator';
import { SPOTS, spotById } from '../poker/ranges';

export const HAND_CATEGORIES: HandCategory[] = ['ワンペア', 'ツーペア', 'スリーカード', 'ストレート', 'フラッシュ', 'フルハウス', 'フォーカード'];
export const categoryIndex = (c: HandCategory) => CATEGORY_NAMES.indexOf(c);

const nums = (cards: string[]) => cards.map((c) => parseCard(c) as number);

/** Score of the best 5-card hand from 5–7 cards. */
export const scoreOf = (cards: string[]) => evaluate(nums(cards));
export const handName = (score: number) => CATEGORY_NAMES[categoryOf(score)];

/** Best 5 of up to 7 cards: the score and every 5-card subset that reaches it. */
export function bestFive(cards: string[]): { score: number; sets: string[][] } {
  const n = cards.length;
  let best = -1;
  let sets: string[][] = [];
  const pick: number[] = [];
  const rec = (start: number) => {
    if (pick.length === 5) {
      const five = pick.map((i) => cards[i]);
      const s = scoreOf(five);
      if (s > best) { best = s; sets = [five]; } else if (s === best) sets.push(five);
      return;
    }
    for (let i = start; i < n; i++) { pick.push(i); rec(i + 1); pick.pop(); }
  };
  rec(0);
  return { score: best, sets };
}

/** True when the 5 picked cards make the best possible hand (any equivalent 5 is fine). */
export const isBestFive = (cards: string[], picked: string[]) =>
  picked.length === 5 && scoreOf(picked) === bestFive(cards).score;

/** Indices of the winning player(s) — more than one means a split pot. */
export function winners(board: string[], players: { cards: string[] }[]): number[] {
  const scores = players.map((p) => scoreOf([...p.cards, ...board]));
  const top = Math.max(...scores);
  return scores.flatMap((s, i) => (s === top ? [i] : []));
}

/** Unseen cards that make `target` or better (when the hand isn't there yet). */
export function outsOf(hand: string[], board: string[], target: HandCategory): string[] {
  const seen = new Set([...hand, ...board]);
  const t = categoryIndex(target);
  return FULL_DECK.map(cardStr).filter((c) => !seen.has(c) && categoryOf(scoreOf([...hand, ...board, c])) >= t);
}

/** Score for each hand (+ shared board). */
export const orderScores = (hands: { cards: string[] }[], board: string[] = []) => hands.map((h) => scoreOf([...h.cards, ...board]));

/** Is `order` (indices, strongest first) consistent with the scores? Ties may come in any order. */
export const isStrongestFirst = (scores: number[], order: number[]) =>
  order.length === scores.length && order.every((idx, k) => k === 0 || scores[order[k - 1]] >= scores[idx]);

/** Hands the chart opens at least half the time (the painting target). */
export function paintTarget(spot: string): Set<string> {
  const r = spotById(spot).defaultRange;
  return new Set(Object.entries(r).filter(([, f]) => f.raise >= 0.5).map(([h]) => h));
}

/** Overlap score in % (intersection / union). */
export function paintScore(target: Set<string>, painted: Set<string>): number {
  let inter = 0;
  for (const h of painted) if (target.has(h)) inter++;
  const union = target.size + painted.size - inter;
  return union ? Math.round((inter / union) * 100) : 100;
}

// ---------------------------------------------------------------- validation
function cardsOk(cards: string[], where: string, e: string[]) {
  for (const c of cards) if (parseCard(c) === null) e.push(`${where}: bad card "${c}"`);
  if (new Set(cards).size !== cards.length) e.push(`${where}: duplicate card in ${cards.join(' ')}`);
}

export function validateInteractive(b: Block): string[] {
  const e: string[] = [];
  switch (b.t) {
    case 'play': {
      if (b.heroCards.length !== 2) e.push('play: heroCards must be 2 cards');
      if (b.villainCards && b.villainCards.length !== 2) e.push('play: villainCards must be 2 cards');
      if (b.villain === b.hero) e.push('play: villain and hero are the same seat');
      const board = b.steps.flatMap((s) => s.board ?? []);
      if (board.length > 5) e.push('play: more than 5 board cards');
      cardsOk([...b.heroCards, ...(b.villainCards ?? []), ...board], 'play', e);
      if (b.villainCards && board.length !== 5) e.push('play: showdown (villainCards) needs all 5 board cards');
      if (b.steps.length < 2) e.push('play: need ≥2 steps');
      if (!b.steps.some((s) => s.options?.length)) e.push('play: at least one step needs a decision');
      for (const s of b.steps) {
        if (!s.say) e.push(`play: ${s.street} has no say`);
        if (!(s.pot >= 0)) e.push(`play: ${s.street} bad pot`);
        if (s.options) {
          if (s.options.length < 2) e.push(`play: ${s.street} needs ≥2 options`);
          if (!s.options.some((o) => o.good)) e.push(`play: ${s.street} has no good option`);
          if (!s.q) e.push(`play: ${s.street} options without q`);
        }
      }
      break;
    }
    case 'pick5':
      if (b.hand.length !== 2 || b.board.length !== 5) e.push('pick5: hand 2 + board 5');
      cardsOk([...b.hand, ...b.board], 'pick5', e);
      break;
    case 'showdown':
      if (b.board.length !== 5) e.push('showdown: board must be 5 cards');
      if (b.players.length < 2 || b.players.length > 4) e.push('showdown: 2–4 players');
      cardsOk([...b.players.flatMap((p) => p.cards), ...b.board], 'showdown', e);
      if (b.players.some((p) => p.cards.length !== 2)) e.push('showdown: each player 2 cards');
      break;
    case 'outs': {
      if (b.hand.length !== 2 || (b.board.length !== 3 && b.board.length !== 4)) e.push('outs: hand 2 + board 3 or 4');
      cardsOk([...b.hand, ...b.board], 'outs', e);
      if (!HAND_CATEGORIES.includes(b.target)) e.push(`outs: unknown target "${b.target}"`);
      else if (!e.length) {
        if (categoryOf(scoreOf([...b.hand, ...b.board])) >= categoryIndex(b.target)) e.push(`outs: hand already makes ${b.target}`);
        const n = outsOf(b.hand, b.board, b.target).length;
        if (n === 0 || n > 20) e.push(`outs: ${n} outs (keep 1–20)`);
      }
      break;
    }
    case 'order': {
      const board = b.board ?? [];
      if (b.hands.length < 3 || b.hands.length > 5) e.push('order: 3–5 hands');
      for (const h of b.hands) {
        if (h.cards.length + board.length < 5) e.push('order: each hand + board needs ≥5 cards');
        cardsOk([...h.cards, ...board], 'order', e);
      }
      if (!e.length && new Set(orderScores(b.hands, board)).size === 1) e.push('order: all hands tie');
      break;
    }
    case 'rapid':
      if (b.items.length < 4 || b.items.length > 15) e.push('rapid: 4–15 items');
      for (const it of b.items) {
        if (!it.cards && !it.text) e.push('rapid: item needs cards or text');
        cardsOk([...(it.cards ?? []), ...(it.board ?? [])], 'rapid', e);
      }
      break;
    case 'paint':
      if (!SPOTS.some((s) => s.id === b.spot && s.kind === 'rfi')) e.push(`paint: spot must be an rfi-* spot, got "${b.spot}"`);
      break;
  }
  return e;
}
