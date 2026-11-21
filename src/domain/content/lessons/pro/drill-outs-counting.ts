import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'drill-outs-counting',
  blocks: [
    { t: 'h', text: 'タップして数える' },
    {
      t: 'outs',
      q: '相手はトップペア。ストレート以上になるカードを全部タップ',
      hand: ['Jh', 'Th'],
      board: ['9c', '8d', '2s'],
      target: 'ストレート',
      explain: 'Q と 7 が4枚ずつで8枚。両面待ち（オープンエンド）です。',
    },
    { t: 'h', text: '基本のアウツ' },
    {
      t: 'table',
      head: ['ドロー', 'アウツ'],
      rows: [
        ['フラッシュドロー', '9'],
        ['オープンエンド（両面）', '8'],
        ['ガットショット', '4'],
        ['オーバーカード2枚（相手がペアのとき）', '6'],
        ['フラッシュ + オープンエンド', '15'],
        ['フラッシュ + ガットショット', '12'],
      ],
    },
    { t: 'p', text: 'ドローが重なるときは、両方に入るカードを1回だけ数えます。フラッシュ + オープンエンドは 9 + 8 − 2 = 15。' },
    {
      t: 'equity',
      players: [
        { label: 'あなた', cards: ['Jh', 'Th'], pct: 56 },
        { label: '相手', cards: ['As', 'Ad'], pct: 44 },
      ],
      board: ['9h', '8h', '2c'],
      caption: '15アウツならフロップで AA にも有利です（約56%、目安）。',
    },
    {
      t: 'equity',
      players: [
        { label: 'あなた', cards: ['9s', '8s'], pct: 32 },
        { label: '相手', cards: ['Ad', 'Td'], pct: 68 },
      ],
      board: ['Th', '7c', '2d'],
      caption: 'オープンエンドの8アウツ。トップペアに対して約32%（目安）。',
    },
    { t: 'h', text: '練習問題' },
    {
      t: 'outs',
      q: 'ストレート以上になるカードを全部タップ',
      hand: ['7h', '6h'],
      board: ['8h', '5c', '2h'],
      target: 'ストレート',
      explain: 'ハート9枚 + 4 と 9 の8枚。4♥ と 9♥ が重なるので 9 + 8 − 2 = 15枚です。',
    },
    {
      t: 'estimate',
      q: 'あなたは AK、相手は 7♠7♣（ペア）。逆転するアウツは何枚？',
      hand: ['As', 'Kd'],
      board: ['8c', '5d', '2h'],
      min: 0, max: 20, step: 1, unit: '枚', answer: 6, tolerance: 0.5,
      explain: 'A が3枚、K が3枚。3 + 3 = 6枚です。',
    },
    {
      t: 'outs',
      q: 'ストレート以上になるカードを全部タップ',
      hand: ['Kh', 'Qh'],
      board: ['Jh', '9h', '2c'],
      target: 'ストレート',
      explain: 'ハート9枚 + T の4枚。T♥ が重なるので 9 + 4 − 1 = 12枚です。',
    },
    { t: 'h', text: 'もう一度：セットを逆転するには' },
    {
      t: 'outs',
      q: '相手は 4♠4♣（セット）。フルハウス以上になるカードを全部タップ',
      hand: ['Ks', 'Qs'],
      board: ['Kd', 'Qc', '4h'],
      target: 'フルハウス',
      explain: '残りの K 2枚 + Q 2枚 = 4枚。K か Q のフルハウスなら、4 のフルハウスに勝てます。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: '「ドローごとに数える → 重なりを引く」の順で数えます。フラッシュとの重なりは、両面なら2枚、ガットショットなら1枚です。',
    },
  ],
};

export default lesson;
