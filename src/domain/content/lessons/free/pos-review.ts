import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pos-review',
  blocks: [
    { t: 'h', text: '席ごとのオープン判断' },
    { t: 'rapid', q: '前の全員がフォールド。この席でオープンする？', choices: ['オープン', 'フォールド'], items: [
      { cards: ['Kc', 'Th'], text: 'UTG', answer: 1, why: 'KTo は UTG では外し、HJ から開けます。' },
      { cards: ['Kc', 'Th'], text: 'HJ', answer: 0 },
      { cards: ['Ad', '5c'], text: 'HJ', answer: 1, why: 'A5o は CO から開けます。' },
      { cards: ['Ad', '5c'], text: 'CO', answer: 0 },
      { cards: ['Qs', '5s'], text: 'CO', answer: 1, why: 'Q5s は BTN から開けます。' },
      { cards: ['Qs', '5s'], text: 'BTN', answer: 0 },
      { cards: ['4h', '3h'], text: 'BTN', answer: 0 },
      { cards: ['4h', '3h'], text: 'SB', answer: 1, why: '43s は位置のない SB では外します。' },
      { cards: ['Kd', '9c'], text: 'UTG', answer: 1, why: 'K9o は UTG では弱すぎます。' },
      { cards: ['Kd', '9c'], text: 'BTN', answer: 0 },
    ] },
    { t: 'p', text: 'ポジションは「後ろに何人いるか」と「フロップ以降に位置があるか」で決まります。' },
    { t: 'table', head: ['席', '後ろの人数', 'オープンの目安', '考え方'], rows: [
      ['UTG', '5人', '約18%', '強い手に絞る'],
      ['HJ', '4人', '約24%', '少し広げる'],
      ['CO', '3人', '約31%', 'スーテッドを増やす'],
      ['BTN', '2人', '約49%', '最も広く開ける'],
      ['SB', '1人', '約43%', 'レイズかフォールド'],
      ['BB', '0人', '—', '安く守り、3bet も混ぜる'],
    ] },
    { t: 'compare', left: { title: '位置がある席（BTN、CO）', points: ['広くオープンできる', 'コールドコールが成り立つ', 'ブラフも通しやすい'], verdict: 'good' }, right: { title: '位置がない席（SB、BB）', points: ['3bet か降りるかが基本', 'コールは安いときだけ', '先に動くので情報が少ない'], verdict: 'bad' }, caption: '位置の有無が、レンジの広さを決めます。' },
    { t: 'h', text: '状況別の整理' },
    { t: 'seats', seats: [
      { pos: 'UTG', action: 'フォールド', folded: true },
      { pos: 'HJ', action: 'フォールド', folded: true },
      { pos: 'CO', action: 'オープン 2.5bb', bet: 2.5 },
      { pos: 'BTN', action: 'コール 2.5bb', bet: 2.5 },
      { pos: 'SB', action: 'フォールド', folded: true, bet: 0.5 },
      { pos: 'BB', hero: true, action: 'スクイーズ？', bet: 1, cards: ['As', '3s'] },
    ], pot: 6.5, caption: 'オープンとコールの後ろ。スクイーズやコールの判断が求められます。' },
    { t: 'quiz', q: 'CO オープン、BTN コール。BB の A♠3♠ が大きめに 3bet する行動の名前は？', options: ['スクイーズ', 'コールドコール', 'スチール', 'リンプ'], answer: 0, explain: '2人が既にお金を出しているところへの 3bet をスクイーズと言います。', hand: ['As', '3s'] },
    { t: 'quiz', q: 'オープン頻度が広い順に並べたものは？', options: ['BTN > CO > HJ > UTG', 'UTG > HJ > CO > BTN', 'CO > BTN > UTG > HJ', 'HJ > CO > UTG > BTN'], answer: 0, explain: '後ろの人数が少ない席ほど、広く開けられます。' },
    { t: 'estimate', q: 'BB が BTN 2.5bb オープン（SB は降りた）にコールするのに必要な勝率は？', min: 0, max: 60, step: 1, unit: '%', answer: 21, tolerance: 4, explain: 'ポット 4bb に追加 1.5bb。1.5 ÷（4 + 3）≈ 21%です。' },
    { t: 'h', text: '仕上げ' },
    { t: 'paint', spot: 'rfi-sb', q: 'SB（全員フォールド）でレイズする手を塗ってください。' },
    { t: 'try', text: 'トレーニングで、席ごとのオープン判断を練習しましょう。', tab: 'train' },
  ],
};

export default lesson;
