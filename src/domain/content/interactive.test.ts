import { describe, expect, it } from 'vitest';
import { bestFive, handName, isBestFive, isStrongestFirst, orderScores, outsOf, paintScore, paintTarget, validateInteractive, winners } from './interactive';

describe('hands-on engine', () => {
  it('best five of seven', () => {
    const cards = ['Ah', 'Kh', 'Qh', '7h', '2h', '2c', '2d'];
    const b = bestFive(cards);
    expect(handName(b.score)).toBe('フラッシュ');
    expect(isBestFive(cards, ['Ah', 'Kh', 'Qh', '7h', '2h'])).toBe(true);
    expect(isBestFive(cards, ['2h', '2c', '2d', 'Ah', 'Kh'])).toBe(false);
  });
  it('board plays → every equivalent five is accepted', () => {
    const cards = ['3c', '4d', 'As', 'Ks', 'Qs', 'Js', 'Ts'];
    expect(isBestFive(cards, ['As', 'Ks', 'Qs', 'Js', 'Ts'])).toBe(true);
  });
  it('winners and split pots', () => {
    const board = ['Ah', 'Kd', '7s', '7c', '2h'];
    expect(winners(board, [{ cards: ['Ac', 'Qd'] }, { cards: ['Kc', 'Kh'] }])).toEqual([1]);
    expect(winners(['As', 'Ks', 'Qs', 'Js', 'Ts'], [{ cards: ['2c', '3d'] }, { cards: ['4c', '5d'] }])).toEqual([0, 1]);
  });
  it('flush draw has 9 outs', () => {
    expect(outsOf(['Ah', 'Kh'], ['7h', '2h', 'Qc'], 'フラッシュ')).toHaveLength(9);
  });
  it('open-ended straight draw has 8 outs', () => {
    expect(outsOf(['9c', '8d'], ['7h', '6s', '2c'], 'ストレート')).toHaveLength(8);
  });
  it('order with ties', () => {
    const board = ['Ah', 'Kd', '7s', '4c', '2h'];
    const s = orderScores([{ cards: ['Ac', 'Qd'] }, { cards: ['7c', '7d'] }, { cards: ['3c', '5d'] }], board);
    expect(isStrongestFirst(s, [2, 1, 0])).toBe(true); // wheel > set > pair
    expect(isStrongestFirst(s, [1, 2, 0])).toBe(false);
  });
  it('paint score', () => {
    const t = paintTarget('rfi-utg');
    expect(t.has('AA')).toBe(true);
    expect(t.has('72o')).toBe(false);
    expect(paintScore(t, new Set(t))).toBe(100);
    expect(paintScore(t, new Set())).toBe(0);
  });
  it('validation catches bad blocks', () => {
    expect(validateInteractive({ t: 'outs', hand: ['Ah', 'Kh'], board: ['7h', '2h', 'Qh'], target: 'フラッシュ' })).not.toEqual([]);
    expect(validateInteractive({ t: 'paint', spot: 'bb-vs-btn' })).not.toEqual([]);
    expect(validateInteractive({
      t: 'play', hero: 'BTN', heroCards: ['Ah', 'Ah'],
      steps: [{ street: 'プリフロップ', pot: 1.5, say: 'x' }, { street: 'フロップ', pot: 6, say: 'y' }],
    }).length).toBeGreaterThan(0);
  });
});
