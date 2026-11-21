import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'all-in-side-pots',
  blocks: [
    { t: 'h', text: '3人がオールイン' },
    {
      t: 'showdown',
      q: '5枚開いた。3人の中で一番強いのは？',
      board: ['Ks', '8d', '4c', '2h', '9s'],
      players: [
        { label: 'A（20bb）', cards: ['8h', '8c'] },
        { label: 'B（50bb）', cards: ['Kd', 'Qd'] },
        { label: 'C（100bb）', cards: ['Ac', 'Kh'] },
      ],
      explain: 'A が 8 のスリーカードで一番強い手。でも A は 170bb 全部は取れません。',
    },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: 'A オールイン', bet: 20 },
        { pos: 'HJ', action: 'B オールイン', bet: 50 },
        { pos: 'CO', action: 'C オールイン', bet: 100 },
      ],
      pot: 170,
      caption: '持ちチップは A 20bb、B 50bb、C 100bb（ブラインドは省略）。',
    },
    { t: 'p', text: 'オールインした人が取れるのは、自分が出した額に見合う分まで。超えた分は別のポット（サイドポット）に分けます。' },
    {
      t: 'estimate',
      q: 'A も参加するメインポットは何 bb？',
      min: 0, max: 170, step: 5, unit: 'bb', answer: 60, tolerance: 10,
      explain: 'A が出した 20bb を上限に、3人が 20bb ずつ。20 × 3 = 60bb です。',
    },
    {
      t: 'compare',
      left: { title: 'メインポット 60bb', points: ['20bb × 3人', 'A・B・C が対象'], verdict: 'neutral' },
      right: { title: 'サイドポット 60bb', points: ['(50 − 20)bb × 2人', 'B・C だけが対象'], verdict: 'neutral' },
      caption: 'C の残り 50bb は誰もコールできないので C に戻ります。',
    },
    {
      t: 'estimate',
      q: 'C に戻る額は何 bb？',
      min: 0, max: 100, step: 5, unit: 'bb', answer: 50, tolerance: 10,
      explain: '次に多い B の 50bb までしかコールされません。100 − 50 = 50bb です。',
    },
    { t: 'h', text: 'サイドポットの勝者' },
    {
      t: 'showdown',
      q: 'サイドポット（B と C だけ）を取るのは？',
      board: ['Ks', '8d', '4c', '2h', '9s'],
      players: [
        { label: 'B', cards: ['Kd', 'Qd'] },
        { label: 'C', cards: ['Ac', 'Kh'] },
      ],
      explain: 'どちらも K のペア。キッカーが A の C が 60bb を取ります。',
    },
    {
      t: 'table',
      head: ['プレイヤー', '実際に出した額', '受け取った額', '収支'],
      rows: [['A', '20bb', '60bb', '+40bb'], ['B', '50bb', '0bb', '−50bb'], ['C', '50bb', '60bb', '+10bb']],
    },
    { t: 'tip', text: '収支の合計は 40 − 50 + 10 = 0。計算の確認に使えます。' },
    {
      t: 'showdown',
      q: 'リバーが Q だったら？ サイドポット（B と C だけ）を取るのは？',
      board: ['Ks', '8d', '4c', '2h', 'Qs'],
      players: [
        { label: 'B（50bb）', cards: ['Kd', 'Qd'] },
        { label: 'C（100bb）', cards: ['Ac', 'Kh'] },
      ],
      explain: 'B は K と Q のツーペアで C に勝ちます。メインポットは 8 のスリーカードの A のまま。A が 60bb、B が 60bb を取ります。',
    },
  ],
};

export default lesson;
