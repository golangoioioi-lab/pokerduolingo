import { describe, expect, it } from 'vitest';
import { evaluate, CATEGORY_NAMES } from './evaluator';
import { calcEquity } from './equity';
import { parseCard, comboCount, ALL_HANDS } from './cards';
import { parseRange, rangeToString, SPOTS } from './ranges';

const cards = (s: string) => s.split(' ').map((c) => parseCard(c)!);
const cat = (s: string) => CATEGORY_NAMES[evaluate(cards(s)) >> 20];

describe('evaluator', () => {
  it('classifies hands', () => {
    expect(cat('As 2d 3c 4h 5s Kd Kc')).toBe('ストレート');
    expect(cat('9h Th Jh Qh Kh 2c 2d')).toBe('ストレートフラッシュ');
    expect(cat('As Ad Ac Kh Kd 2c 3d')).toBe('フルハウス');
    expect(cat('As Ad Kc Kh Qd Qc 3d')).toBe('ツーペア');
    expect(cat('2h 7h 9h Jh Ah Kc Kd')).toBe('フラッシュ');
  });
  it('compares kickers', () => {
    const board = 'As 9d 8c 8h 3s';
    expect(evaluate(cards(`Ah Qd ${board}`))).toBeGreaterThan(evaluate(cards(`Ac Jd ${board}`)));
    const tie = 'As Kd 8c 8h 3s';
    expect(evaluate(cards(`Ah Qd ${tie}`))).toBe(evaluate(cards(`Ac Jd ${tie}`)));
  });
  it('wheel is the lowest straight', () => {
    expect(evaluate(cards('As 2d 3c 4h 5s 9d Tc'))).toBeLessThan(evaluate(cards('2s 3d 4c 5h 6s 9d Jc')));
  });
});

describe('equity (exact)', () => {
  const h = (a: string, b: string) => ({ type: 'hand' as const, cards: [parseCard(a)!, parseCard(b)!] as [number, number] });
  it('AA vs KK preflop ≈ 82.6%', () => {
    const r = calcEquity({ players: [h('As', 'Ah'), h('Ks', 'Kh')], board: [], dead: [], iterations: 0 });
    expect(r.exact).toBe(true);
    expect(r.equity[0]).toBeCloseTo(0.8264, 3);
  });
  it('flush draw on the flop vs top pair', () => {
    const r = calcEquity({ players: [h('Ah', 'Th'), h('Kc', 'Qd')], board: cards('Kh 8h 3c'), dead: [], iterations: 0 });
    expect(r.equity[0] + r.equity[1]).toBeCloseTo(1, 6);
    expect(r.equity[0]).toBeGreaterThan(0.4);
    expect(r.equity[0]).toBeLessThan(0.5);
  });
  it('rejects duplicate cards', () => {
    expect(calcEquity({ players: [h('As', 'Ah'), h('As', 'Kh')], board: [], dead: [], iterations: 0 }).error).toBeTruthy();
  });
});

describe('ranges', () => {
  it('parses notation', () => {
    expect(Object.keys(parseRange('K7o-K5o, A5s-A2s, 22-44, AK')).sort()).toEqual(
      ['22', '33', '44', 'A2s', 'A3s', 'A4s', 'A5s', 'AKo', 'AKs', 'K5o', 'K6o', 'K7o'].sort(),
    );
  });
  it('round-trips through text', () => {
    const s = '22+, A2s+, KTo+, K7o-K5o:0.5';
    expect(rangeToString(parseRange(s))).toBe(s);
  });
  it('has 1326 combos in total', () => {
    expect(ALL_HANDS.reduce((a, l) => a + comboCount(l), 0)).toBe(1326);
  });
  it('every spot range has valid frequencies', () => {
    for (const s of SPOTS) for (const f of Object.values(s.defaultRange)) {
      expect(f.raise + f.call).toBeLessThanOrEqual(1 + 1e-9);
      expect(f.raise).toBeGreaterThanOrEqual(0);
    }
  });
});
