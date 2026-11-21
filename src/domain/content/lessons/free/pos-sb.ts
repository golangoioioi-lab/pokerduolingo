import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pos-sb',
  blocks: [
    { t: 'h', text: '全員が降りてきたら' },
    { t: 'rapid', q: 'SB（BTN までフォールド）。BB に 3bb でレイズする？', choices: ['レイズ', 'フォールド'], items: [
      { cards: ['Kh', '2h'], answer: 0 },
      { cards: ['Qd', '9c'], answer: 0, why: 'Q9o は相手が BB 1人なので開けられます。' },
      { cards: ['Kc', '5d'], answer: 1, why: 'K5o は SB では外します。位置がないぶん BTN より少し狭くします。' },
      { cards: ['Ad', '2s'], answer: 0 },
      { cards: ['Js', '5s'], answer: 1, why: 'J5s は SB では外します。' },
      { cards: ['Th', '7h'], answer: 0 },
      { cards: ['4c', '3c'], answer: 1, why: '43s は BTN では開けますが、SB では外します。' },
      { cards: ['Kh', '8d'], answer: 0 },
      { cards: ['9s', '4d'], answer: 1, why: 'どの席でもフォールドです。' },
      { cards: ['6d', '5d'], answer: 0 },
    ] },
    { t: 'p', text: '相手は BB 1人。ただし SB はフロップ以降ずっと先に動きます。そこで **3bb とやや大きめ** にレイズし、リンプはしません。' },
    { t: 'seats', seats: [
      { pos: 'UTG', action: 'フォールド', folded: true },
      { pos: 'HJ', action: 'フォールド', folded: true },
      { pos: 'CO', action: 'フォールド', folded: true },
      { pos: 'BTN', action: 'フォールド', folded: true },
      { pos: 'SB', hero: true, action: 'レイズ 3bb', bet: 3, cards: ['Kh', 'Td'] },
      { pos: 'BB', action: '未行動', bet: 1 },
    ], pot: 1.5, caption: '全員が降りた SB。相手は BB だけです。' },
    { t: 'odds', pot: 1.5, bet: 0.5, equity: 35, caption: 'リンプなら追加 0.5bb で必要勝率は20%。安く見えますが、BB にレイズされ、位置もないので勝率を実現しにくくなります。' },
    { t: 'range', spot: 'rfi-sb', caption: 'SB のオープンレンジの目安（約43%）。' },
    { t: 'h', text: 'BTN のオープンに対して' },
    { t: 'p', text: 'BTN が開けてきたら、後ろに BB がいて位置もありません。**3bet かフォールド** に分け、コールはしません。' },
    { t: 'range', spot: 'sb-vs-btn', caption: 'SB が BTN のオープンに 3bet する目安。' },
    { t: 'quiz', q: 'SB がコールだけで入るのが好まれにくい主な理由は？', options: ['フロップ以降ずっと位置がなく、BB もいるから', 'SB はブラインドを払っているから', 'コールは禁止されているから', 'ポットが小さすぎるから'], answer: 0, explain: 'SB はポストフロップで常に先に動きます。さらに後ろの BB にスクイーズされることもあります。' },
    { t: 'estimate', q: 'BTN が 2.5bb オープン。SB がコールするのに必要な勝率は？', min: 0, max: 60, step: 1, unit: '%', answer: 25, tolerance: 4, explain: 'ポットは 2.5 + 0.5 + 1 = 4bb、追加は 2bb。2 ÷（4 + 4）= 25%です。' },
    { t: 'quiz', q: 'BTN のオープンに対して、SB が 3bet のブラフに使いやすいのは？', options: ['A5s', 'K7o', 'T6o', '94o'], answer: 0, explain: 'A5s は A のブロッカーを持ち、コールされてもフラッシュやストレートの可能性があります。', optionCards: [['As', '5s'], ['Kh', '7d'], ['Tc', '6d'], ['9s', '4h']] },
    { t: 'h', text: 'もう一度判断する' },
    { t: 'rapid', q: 'BTN が 2.5bb オープン。SB で？', choices: ['3bet', 'フォールド'], items: [
      { cards: ['As', '5s'], answer: 0, why: 'A5s は 3bet のブラフ候補です。' },
      { cards: ['Kd', 'Qc'], answer: 0 },
      { cards: ['6h', '6c'], answer: 1, why: '66 はコールしたい手ですが、SB では降ります。' },
      { cards: ['Qh', 'Jh'], answer: 0 },
      { cards: ['Kh', 'Jc'], answer: 1, why: 'KJo は BTN の強い手に支配されやすく、SB では降ります。' },
      { cards: ['8s', '8d'], answer: 0 },
      { cards: ['Ac', '9d'], answer: 1, why: 'A9o は 3bet にもコールにも中途半端です。' },
      { cards: ['Ad', 'Jc'], answer: 0 },
      { cards: ['Kc', '9c'], answer: 1, why: 'K9s は SB では降ります。' },
    ] },
  ],
};

export default lesson;
