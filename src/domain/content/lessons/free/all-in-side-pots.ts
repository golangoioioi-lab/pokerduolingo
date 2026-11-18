import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'all-in-side-pots',
  blocks: [
    { t: 'p', text: 'チップが足りなくても、手持ちを全部出すオールインでハンドに参加し続けられます。ただし勝って受け取れるのは、自分が出した額に見合う分までです。' },
    { t: 'p', text: 'その上限を超えた分は別のポットに分けられます。これをサイドポットと呼び、最初の共通のポットをメインポットと呼びます。' },
    { t: 'h', text: '3人の例' },
    { t: 'p', text: 'プリフロップで A・B・C の3人がオールインになりました（ブラインドは省きます）。持ちチップは A が 20bb、B が 50bb、C が 100bb です。20bb しか出していない A は、相手が何bb出していても、1人から 20bb までしか受け取れません。' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: 'A オールイン', bet: 20 },
        { pos: 'HJ', action: 'B オールイン', bet: 50 },
        { pos: 'CO', action: 'C オールイン', bet: 100 },
      ],
      pot: 170,
      caption: '席の位置は関係ありません。出した額（bb）だけで分けます。',
    },
    {
      t: 'estimate',
      q: 'A も参加するメインポットは何 bb？',
      min: 0,
      max: 170,
      step: 5,
      unit: 'bb',
      answer: 60,
      tolerance: 10,
      explain: 'A が出した 20bb を上限に、3人が 20bb ずつ出した分がメインポットです。20 × 3 = 60bb。',
    },
    {
      t: 'compare',
      left: { title: 'メインポット 60bb', points: ['20bb × 3人', 'A・B・C が対象', '一番強い人が取る'], verdict: 'neutral' },
      right: { title: 'サイドポット 60bb', points: ['(50 − 20)bb × 2人', 'B・C だけが対象', 'A は参加できない'], verdict: 'neutral' },
      caption: 'C の残り 50bb は誰もコールできないので、そのまま C に返却されます。勝負の対象は合計 120bb です。',
    },
    {
      t: 'estimate',
      q: 'C に返却される（誰もコールできない）額は何 bb？',
      min: 0,
      max: 100,
      step: 5,
      unit: 'bb',
      answer: 50,
      tolerance: 10,
      explain: 'C が出した 100bb のうち、次に多い B の 50bb までしかコールされません。100 − 50 = 50bb が戻ります。',
    },
    { t: 'h', text: 'ショーダウン' },
    {
      t: 'cards',
      hands: [
        { label: 'A（20bb）', cards: ['8h', '8c'] },
        { label: 'B（50bb）', cards: ['Kd', 'Qd'] },
        { label: 'C（100bb）', cards: ['Ac', 'Kh'] },
      ],
      board: ['Ks', '8d', '4c', '2h', '9s'],
      caption: 'A は 8 のスリーカード。B と C は K のワンペアで、キッカーは C の A が上です。',
    },
    {
      t: 'quiz',
      q: 'メインポット 60bb（3人が対象）を取るのは？',
      board: ['Ks', '8d', '4c', '2h', '9s'],
      options: ['A（88）', 'B（KQ）', 'C（AK）'],
      optionCards: [['8h', '8c'], ['Kd', 'Qd'], ['Ac', 'Kh']],
      answer: 0,
      explain: '3人の中で一番強いのは 8 のスリーカードの A です。A は自分が出した 20bb 分のメインポットだけを取れます。',
    },
    {
      t: 'quiz',
      q: 'サイドポット 60bb（B と C だけが対象）を取るのは？',
      board: ['Ks', '8d', '4c', '2h', '9s'],
      options: ['B（KQ）', 'C（AK）'],
      optionCards: [['Kd', 'Qd'], ['Ac', 'Kh']],
      answer: 1,
      explain: 'A はサイドポットに参加していません。B と C はどちらも K のペアですが、キッカーが A の C が勝ち、60bb を取ります。',
    },
    {
      t: 'table',
      head: ['プレイヤー', '実際に出した額', '受け取った額', '収支'],
      rows: [['A', '20bb', '60bb', '+40bb'], ['B', '50bb', '0bb', '−50bb'], ['C', '50bb', '60bb', '+10bb']],
    },
    { t: 'tip', text: '収支を合計すると 40 − 50 + 10 = 0 になります。計算が合っているか確かめるときに使えます。' },
  ],
};

export default lesson;
