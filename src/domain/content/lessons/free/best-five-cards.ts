import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'best-five-cards',
  blocks: [
    { t: 'h', text: '手札を1枚だけ使う' },
    {
      t: 'pick5',
      q: '一番強い5枚をタップしてください。',
      hand: ['Qh', '3d'],
      board: ['Ah', 'Kh', '7h', '4h', '2c'],
      explain: 'ハートは Q♥ を足して5枚。A-K-Q-7-4 のフラッシュです。3♦ は使いません。',
    },
    { t: 'p', text: '7枚から一番強い5枚を選びます。手札は2枚・1枚・0枚のどれを使ってもかまいません。' },
    {
      t: 'compare',
      left: { title: 'Q♥ 3♦', cards: ['Qh', '3d'], board: ['Ah', 'Kh', '7h', '4h', '2c'], points: ['Q♥ の1枚だけ使う', 'A-K-Q-7-4 のフラッシュ'], verdict: 'good' },
      right: { title: 'A♦ A♣', cards: ['Ad', 'Ac'], board: ['Ah', 'Kh', '7h', '4h', '2c'], points: ['ハートがない', 'A のスリーカード止まり'], verdict: 'bad' },
      caption: 'ハートを1枚持っているだけでフラッシュ。AA より強くなります。',
    },
    { t: 'h', text: 'ボードをプレイする' },
    {
      t: 'showdown',
      q: '勝つのは？',
      board: ['Ts', 'Jh', 'Qd', 'Kc', 'Ad'],
      players: [
        { label: 'あなた', cards: ['2c', '2h'] },
        { label: '相手', cards: ['7s', '8s'] },
      ],
      explain: 'ボードの A ハイストレートがそのまま最強の5枚。どちらも手札を使わないので引き分けです。',
    },
    { t: 'h', text: 'カウンターフィット' },
    {
      t: 'compare',
      left: { title: '8♥ 7♥', cards: ['8h', '7h'], board: ['8c', '7d', '2s', 'Qc', 'Qd'], points: ['Q-Q-8-8 のツーペア', '7 のペアは使われない'], verdict: 'bad' },
      right: { title: 'A♠ 8♠', cards: ['As', '8s'], board: ['8c', '7d', '2s', 'Qc', 'Qd'], points: ['Q-Q-8-8 のツーペア', 'キッカー A'], verdict: 'good' },
      caption: 'ボードに Q のペアが落ちて、87 の 7 のペアが消えました。これをカウンターフィットと言います。',
    },
    {
      t: 'showdown',
      q: 'ボードがツーペア。勝つのは？',
      board: ['9c', '9d', '5s', '5h', 'Kd'],
      players: [
        { label: 'あなた', cards: ['Qs', 'Jc'] },
        { label: '相手', cards: ['Ac', '2h'] },
      ],
      explain: 'あなたの5枚は 9-9-5-5-K（ボードの K を使う）。相手は 9-9-5-5-A。キッカーの A が勝ちます。',
    },
    {
      t: 'list',
      items: [
        '使える手札は2枚まで。残りはボードから',
        'ボード 6-7-8-9 なら、5 より T を持つ人のストレートが上',
        'ボード 7-7-3-3-K だと、2-2 は5枚に入らない',
      ],
    },
    {
      t: 'pick5',
      q: 'もう一度。一番強い5枚は？',
      hand: ['3h', '3c'],
      board: ['Ah', 'Kh', '7h', '4h', '2c'],
      explain: '3♥ を1枚使って A-K-7-4-3 のフラッシュ。5 がないのでストレートにはなりません。',
    },
  ],
};

export default lesson;
