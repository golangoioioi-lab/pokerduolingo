import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pos-hj',
  blocks: [
    { t: 'h', text: 'UTG より1人少ない' },
    { t: 'quiz', q: 'UTG では開けにくいが、HJ では開ける手はどれ？', options: ['K8s', 'KK', 'AQs', 'AKo'], answer: 0, explain: 'K8s は HJ から加わるスーテッドです。KK、AQs、AKo は UTG でも開けます。', optionCards: [['Kh', '8h'], ['Ks', 'Kd'], ['As', 'Qs'], ['Ac', 'Kh']] },
    { t: 'p', text: 'HJ の後ろは CO、BTN、SB、BB の4人です。1人減るだけで、レンジは全体の **約24%** まで広がります。' },
    { t: 'seats', seats: [
      { pos: 'UTG', action: 'フォールド', folded: true },
      { pos: 'HJ', hero: true, action: 'オープン 2.5bb', bet: 2.5, cards: ['Th', '9h'] },
      { pos: 'CO', action: '未行動' },
      { pos: 'BTN', action: '未行動' },
      { pos: 'SB', action: '未行動', bet: 0.5 },
      { pos: 'BB', action: '未行動', bet: 1 },
    ], pot: 4, caption: 'UTG が降りて、HJ が動く場面。後ろは4人です。' },
    { t: 'h', text: '何が加わるか' },
    { t: 'combos', groups: [
      { label: 'UTG から共通', hands: ['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', 'AKs', 'AQs', 'AJs', 'ATs', 'KQs', 'AKo', 'AQo', 'AJo', 'KQo'] },
      { label: 'HJ で加わる手', hands: ['44', '33', '22', 'K8s', 'K7s', 'T8s', '87s', '76s', '65s', 'A9o', 'KTo', 'QJo', 'QTo'] },
    ], caption: 'レンジは足し算で広がります。小さいペア、スーテッド、オフスートの絵札が増えます。' },
    { t: 'table', head: ['席', 'オープン頻度の目安'], rows: [['UTG', '約18%'], ['HJ', '約24%'], ['CO', '約31%'], ['BTN', '約49%']] },
    { t: 'p', text: '気をつけたいのは後ろの CO と BTN です。2人がよく 3bet するなら、端の手（54s、JTo など）を外します。' },
    { t: 'estimate', q: 'HJ のオープン頻度の目安は？（全ハンドに対する%）', min: 0, max: 60, step: 1, unit: '%', answer: 24, tolerance: 5, explain: 'HJ は約24%です。UTG 約18%、CO 約31%、BTN 約49%と、後ろが減るほど広がります。' },
    { t: 'h', text: 'もう一度判断する' },
    { t: 'rapid', q: 'HJ（UTG はフォールド）。オープンする？', choices: ['オープン', 'フォールド'], items: [
      { cards: ['2c', '2d'], answer: 0, why: 'HJ ではペアは全部開けます。' },
      { cards: ['Kd', '8d'], answer: 0 },
      { cards: ['Ah', '9c'], answer: 0, why: 'A9o は HJ から加わります。' },
      { cards: ['Ks', '9d'], answer: 1, why: 'K9o は HJ ではまだ外します。' },
      { cards: ['7s', '6s'], answer: 0 },
      { cards: ['Ac', '5d'], answer: 1, why: 'A5o は CO から。HJ では外します。' },
      { cards: ['Qh', '8h'], answer: 1, why: 'Q8s は CO から加わります。' },
      { cards: ['Kc', 'Th'], answer: 0, why: 'KTo は UTG では外しますが、HJ では開けます。' },
      { cards: ['9d', '8c'], answer: 1, why: '98o はオフスートなので BTN まで待ちます。' },
      { cards: ['Qd', 'Ts'], answer: 0 },
    ] },
    { t: 'paint', spot: 'rfi-hj', q: 'HJ でオープンする手を塗ってください。' },
    { t: 'try', text: 'レンジ表で UTG と HJ の違いを見比べましょう。', tab: 'ranges' },
  ],
};

export default lesson;
