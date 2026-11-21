import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'drill-combos-basic',
  blocks: [
    { t: 'h', text: 'ボードで減るコンボ' },
    {
      t: 'rapid',
      q: 'ボード K♥7♦2♣。相手のこのハンドは何コンボ？',
      choices: ['12コンボ', '16コンボ'],
      items: [
        { text: 'AK', board: ['Kh', '7d', '2c'], answer: 0, why: 'K が1枚見えているので 4 × 3 = 12。' },
        { text: 'AQ', board: ['Kh', '7d', '2c'], answer: 1, why: 'どちらも見えていないので 4 × 4 = 16。' },
        { text: 'A7', board: ['Kh', '7d', '2c'], answer: 0, why: '7 が1枚見えているので12。' },
        { text: 'QJ', board: ['Kh', '7d', '2c'], answer: 1, why: '減りません。' },
        { text: 'J2', board: ['Kh', '7d', '2c'], answer: 0, why: '2 が1枚見えているので12。' },
        { text: 'T9', board: ['Kh', '7d', '2c'], answer: 1, why: '減りません。' },
      ],
    },
    { t: 'h', text: '基本のコンボ数' },
    {
      t: 'table',
      head: ['ハンドの種類', 'コンボ数', '計算'],
      rows: [
        ['ポケットペア（AAなど）', '6', '4 × 3 ÷ 2'],
        ['スーテッド（AKsなど）', '4', 'スートが4種類'],
        ['オフスート（AKoなど）', '12', '4 × 4 − 4'],
        ['ペアでない手全体（AK）', '16', '4 × 4'],
      ],
    },
    { t: 'p', text: 'ボードに1枚出たランクは、ペアなら残り3枚から2枚で **3**、ペアでない手なら 3 × 4 = **12** に減ります。' },
    {
      t: 'combos',
      groups: [
        { label: 'AA', hands: ['AA'] },
        { label: 'KK', hands: ['KK'] },
        { label: 'AK', hands: ['AK'] },
      ],
      caption: 'ボードがないとき：AA 6、KK 6、AK 16。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'セット（KK・77・22）', hands: ['KK', '77', '22'] },
        { label: 'AK', hands: ['AK'] },
        { label: 'K7（ツーペア）', hands: ['K7'] },
      ],
      dead: ['Kh', '7d', '2c'],
      caption: 'ボード K♥7♦2♣：セットは各3で計9、AK は12、K7 は 3 × 3 = 9。',
    },
    { t: 'h', text: '練習問題' },
    {
      t: 'estimate',
      q: 'ボードがないとき、AKo（オフスート）のコンボ数は？',
      min: 0, max: 20, step: 1, unit: 'コンボ', answer: 12, tolerance: 0.5,
      explain: '16通りから同じスートの4通りを除いて12です。',
    },
    {
      t: 'estimate',
      q: 'ボード K♥ 7♦ 2♣。相手のKK（セット）は何コンボ？',
      board: ['Kh', '7d', '2c'],
      min: 0, max: 10, step: 1, unit: 'コンボ', answer: 3, tolerance: 0.5,
      explain: 'K は残り3枚。3 × 2 ÷ 2 = 3コンボです。',
    },
    {
      t: 'estimate',
      q: 'ボード K♥ 7♦ 2♣。セット（KK・77・22）は合計何コンボ？',
      board: ['Kh', '7d', '2c'],
      min: 0, max: 30, step: 1, unit: 'コンボ', answer: 9, tolerance: 1,
      explain: '各3コンボで 3 × 3 = 9。18は6のまま数えた数字です。',
    },
    {
      t: 'estimate',
      q: 'ボード K♥ 7♦ 2♣。ツーペア（K7・K2・72）は合計何コンボ？',
      board: ['Kh', '7d', '2c'],
      min: 0, max: 60, step: 1, unit: 'コンボ', answer: 27, tolerance: 2,
      explain: 'どれも 3 × 3 = 9コンボで、3種類で27。セットの9コンボよりずっと多くなります。',
    },
    { t: 'h', text: 'もう一度：セットかツーペアか' },
    {
      t: 'rapid',
      q: 'ボード K♥7♦2♣。相手のこのハンドは何コンボ？',
      choices: ['3コンボ', '9コンボ'],
      items: [
        { text: 'KK', board: ['Kh', '7d', '2c'], answer: 0, why: 'ペアで1枚見えているので3。' },
        { text: 'K7', board: ['Kh', '7d', '2c'], answer: 1, why: '両方のランクが3枚ずつで 3 × 3 = 9。' },
        { text: '77', board: ['Kh', '7d', '2c'], answer: 0, why: '3コンボ。' },
        { text: '72', board: ['Kh', '7d', '2c'], answer: 1, why: '3 × 3 = 9。' },
        { text: '22', board: ['Kh', '7d', '2c'], answer: 0, why: '3コンボ。' },
        { text: 'K2', board: ['Kh', '7d', '2c'], answer: 1, why: '3 × 3 = 9。' },
      ],
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'ボードに1枚出たランクは、ペアなら 6 → 3、ペアでない手なら 16 → 12。両方のランクが出ていれば 3 × 3 = 9 です。',
    },
  ],
};

export default lesson;
