import { describe, expect, it } from 'vitest';
import { comboCount, expandHand, optionEv, requiredEquity, validateDiagram } from './diagrams';

describe('diagram math', () => {
  it('required equity', () => {
    expect(requiredEquity(10, 5)).toBeCloseTo(25);
    expect(requiredEquity(100, 100)).toBeCloseTo(33.33, 1);
  });
  it('combos with blockers', () => {
    expect(expandHand('AKs')!.length).toBe(4);
    expect(expandHand('KA')).toBeNull();
    expect(comboCount(['AA', 'AK'])).toBe(22);
    expect(comboCount(['AA', 'KK', 'AK'], ['Ah'])).toBe(21);
    expect(comboCount(['22'], ['2s'])).toBe(3);
  });
  it('tree EV', () => {
    expect(optionEv({ outcomes: [{ prob: 0.3, value: 30 }, { prob: 0.7, value: -10 }] })).toBeCloseTo(2);
  });
  it('validation catches mistakes', () => {
    expect(validateDiagram({ t: 'equity', players: [{ label: 'a', pct: 50 }, { label: 'b', pct: 40 }] })).toHaveLength(1);
    expect(validateDiagram({ t: 'seats', seats: [{ pos: 'BB' }, { pos: 'UTG' }] })).toHaveLength(1);
    expect(validateDiagram({ t: 'compare', left: { title: 'a', cards: ['2s', '2s'], points: ['x'] }, right: { title: 'b', points: ['y'] } })).toHaveLength(1);
  });
});
