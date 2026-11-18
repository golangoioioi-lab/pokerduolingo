import { describe, expect, it } from 'vitest';
import { GLOSSARY, splitTerms } from './glossary';

const ids = (s: string) => splitTerms(s).filter((x) => x.id).map((x) => `${x.text}:${x.id}`);

describe('glossary term detection', () => {
  it('prefers the longest match', () => {
    expect(ids('フラッシュドローがある')).toEqual(['フラッシュドロー:flush-draw']);
    expect(ids('ナッツフラッシュを狙う')).toEqual(['ナッツフラッシュ:nut-flush']);
  });
  it('splits katakana compounds into known terms', () => {
    expect(ids('オープンレンジ')).toEqual(['オープン:open', 'レンジ:range']);
  });
  it('respects Latin word boundaries and case', () => {
    expect(ids('COMBO')).toEqual([]);
    expect(ids('CO がオープン')).toEqual(['CO:co', 'オープン:open']);
    expect(ids('BB は 1bb を出す')).toEqual(['BB:bb', 'bb:bb-unit']);
    expect(ids('2.5bb にレイズ')).toEqual(['bb:bb-unit', 'レイズ:raise']);
  });
  it('keeps the original text intact', () => {
    const s = 'BTN が 2.5bb オープン、BB がコール。SPR は約18。';
    expect(splitTerms(s).map((x) => x.text).join('')).toBe(s);
  });
  it('has unique ids and no duplicate spellings', () => {
    expect(new Set(GLOSSARY.map((g) => g.id)).size).toBe(GLOSSARY.length);
    const spellings = GLOSSARY.flatMap((g) => [g.term, ...(g.aliases ?? [])]);
    expect(new Set(spellings).size).toBe(spellings.length);
  });
});
