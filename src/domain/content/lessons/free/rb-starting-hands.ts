import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'rb-starting-hands',
  blocks: [
    { t: 'h', text: '形を見分ける' },
    {
      t: 'rapid',
      q: 'スーテッド（同じスート）？ オフスート？',
      choices: ['スーテッド', 'オフスート'],
      items: [
        { cards: ['As', 'Ks'], answer: 0 },
        { cards: ['Ah', 'Kd'], answer: 1 },
        { cards: ['9h', '8h'], answer: 0 },
        { cards: ['Jc', '7d'], answer: 1 },
        { cards: ['5c', '4c'], answer: 0 },
        { cards: ['Ts', '2d'], answer: 1 },
      ],
    },
    { t: 'p', text: '手札は**ペア**・**スーテッド**（例 AKs）・**オフスート**（例 AKo）の3つの形に分かれ、全部で169種類です。' },
    {
      t: 'combos',
      groups: [
        { label: 'AA', hands: ['AA'] },
        { label: 'AKs', hands: ['AKs'] },
        { label: 'AKo', hands: ['AKo'] },
      ],
      caption: 'ペア6通り、スーテッド4通り、オフスート12通り。',
    },
    {
      t: 'estimate',
      q: 'A♥K♦（AKo）は何通りある？',
      hand: ['Ah', 'Kd'],
      min: 0, max: 20, step: 1, unit: '通り', answer: 12, tolerance: 0.5,
      explain: 'A が4枚 × K が3枚（同じスートを除く）= 12通りです。',
    },
    { t: 'h', text: '強い手はごく一部' },
    {
      t: 'combos',
      groups: [
        { label: '最強クラス', hands: ['AA', 'KK', 'QQ', 'JJ', 'AK'] },
        { label: 'プレイ可能', hands: ['TT', '99', 'AQs', 'KQs', 'JTs'] },
      ],
      caption: 'AA〜JJ と AK で40通り。全 1326 通りの約 3%。',
    },
    { t: 'p', text: '強い手は、高いペア・高いカード2枚・同じスート・つながり、のどれかを持っています。K2o のような弱い高カードは、強い手に負けやすい手です。' },
    {
      t: 'equity',
      players: [
        { label: 'AKs', cards: ['As', 'Ks'], pct: 46 },
        { label: 'QQ', cards: ['Qh', 'Qd'], pct: 54 },
      ],
      caption: 'AKs と QQ はほぼ互角（目安）。',
    },
    {
      t: 'quiz',
      q: '組み合わせ（コンボ）が最も少ないのは？',
      options: ['AA', 'AKs', 'AKo'],
      optionCards: [['As', 'Ah'], ['As', 'Ks'], ['As', 'Kd']],
      answer: 1,
      explain: 'AA は6通り、AKs は4通り、AKo は12通りです。',
    },
    { t: 'h', text: 'レンジを塗ってみる' },
    {
      t: 'paint',
      spot: 'rfi-utg',
      q: 'UTG でオープンする手を塗ってください。高いペア、A のスーテッド、強いブロードウェイが中心です。',
      pass: 65,
    },
    { t: 'try', text: 'レンジ表で、席ごとにオープンする手を見比べましょう。', tab: 'ranges' },
  ],
};

export default lesson;
