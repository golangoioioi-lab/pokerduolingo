import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'rfi',
  blocks: [
    { t: 'h', text: 'まず判定してみる' },
    {
      t: 'rapid',
      q: 'UTG（最初に行動する席）。オープンする？',
      choices: ['オープン', 'フォールド'],
      pass: 70,
      items: [
        { cards: ['Ah', 'Jd'], answer: 0 },
        { cards: ['Kc', 'Qd'], answer: 0 },
        { cards: ['Kh', 'Ts'], answer: 1, why: 'UTG のオフスート K は KJo 以上です。' },
        { cards: ['5s', '5d'], answer: 0 },
        { cards: ['As', '5s'], answer: 0, why: 'スーテッドの A は全部オープンです。' },
        { cards: ['Ad', '5c'], answer: 1, why: 'A5o はオフスート。UTG ではフォールドです。' },
        { cards: ['Th', '9h'], answer: 0 },
        { cards: ['9c', '7c'], answer: 1, why: 'UTG のスーテッドコネクターは 98s あたりまでです。' },
        { cards: ['Ks', '9s'], answer: 0 },
        { cards: ['Jd', '8d'], answer: 1, why: 'スーテッドの J は J9s 以上です。' },
        { cards: ['7h', '6c'], answer: 1, why: 'オフスートのコネクターはフォールドです。' },
      ],
    },
    {
      t: 'p',
      text: '前の全員がフォールドして、最初にレイズすることを **RFI（Raise First In）**、またはオープンと呼びます。選択は**レイズかフォールドの二択**です。',
    },
    {
      t: 'compare',
      left: { title: 'リンプ（コールで入る）', points: ['後ろからレイズされやすい', '主導権が取れない', 'ブラインドを獲得できない'], verdict: 'bad' },
      right: {
        title: 'レイズ（オープン）',
        points: ['全員降りればブラインドを獲得', '主導権を取り、Cベットしやすい'],
        verdict: 'good',
      },
      caption: '最初に入るときは、リンプではなくレイズかフォールドです。',
    },
    { t: 'h', text: '後ろの人数が減るほど広げる' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', folded: true, action: 'フォールド' },
        { pos: 'HJ', folded: true, action: 'フォールド' },
        { pos: 'CO', hero: true, bet: 2.5, action: 'RFI 2.5bb' },
        { pos: 'BTN' },
        { pos: 'SB', bet: 0.5 },
        { pos: 'BB', bet: 1 },
      ],
      pot: 4,
      caption: 'CO のオープン。後ろには3人。UTG なら5人残っているので、強い手にぶつかりやすくなります。',
    },
    {
      t: 'table',
      head: ['ポジション', '目安のオープン率', 'サイズ'],
      rows: [
        ['UTG', '約15〜18%', '2〜2.5bb'],
        ['HJ', '約19〜22%', '2〜2.5bb'],
        ['CO', '約25〜30%', '2〜2.5bb'],
        ['BTN', '約40〜50%', '2〜2.5bb'],
        ['SB', '約35〜45%', '3bb前後（BBとの1対1）'],
      ],
    },
    { t: 'range', spot: 'rfi-utg', caption: 'UTG オープン。一番狭いレンジです。' },
    { t: 'range', spot: 'rfi-btn', caption: 'BTN オープン。スーテッドの K・Q はほぼ全部、オフスートもかなり参加します。' },
    {
      t: 'quiz',
      q: 'CO で全員フォールド。K9o の基本の選択は？',
      hand: ['Kd', '9c'],
      options: ['リンプ（コール）', 'レイズとフォールドを混ぜる', '必ずオールイン'],
      answer: 1,
      explain: 'K9o は CO のレンジの境目で、このアプリでは50%でレイズします。リンプは選びません。',
    },
    {
      t: 'estimate',
      q: 'BTN が 2.5bb でオープン。SB はフォールド、BB がコール。フロップ前のポットは？',
      min: 0,
      max: 10,
      step: 0.5,
      unit: 'bb',
      answer: 5.5,
      tolerance: 0.25,
      explain: '2.5 + 2.5 + SB の0.5 = 5.5bb です。全員降りれば、BTN は1.5bb を獲得します。',
    },
    { t: 'h', text: '塗ってみる' },
    { t: 'paint', spot: 'rfi-hj', q: 'HJ のオープンレンジを塗ろう（UTG より少し広く、BTN よりずっと狭い）' },
    { t: 'try', text: 'オープンのスポットだけを集中練習する', tab: 'train' },
  ],
};

export default lesson;
