import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'rb-hand-ranks',
  blocks: [
    { t: 'h', text: 'まずは勝者を当てる' },
    {
      t: 'showdown',
      q: 'ボードは共通です。勝つのはどちら？',
      board: ['9h', '7h', '2h', 'Kc', '6s'],
      players: [
        { label: 'A♥4♥', cards: ['Ah', '4h'] },
        { label: '8♠5♦', cards: ['8s', '5d'] },
      ],
      explain: 'A♥4♥ はハート5枚でフラッシュ。8♠5♦ は 5-6-7-8-9 のストレート。フラッシュのほうが強い役です。',
    },
    { t: 'h', text: '強い順の10種類' },
    {
      t: 'table',
      head: ['順位', '役', '例'],
      rows: [
        ['1', 'ロイヤルフラッシュ', 'A K Q J T（同じスート）'],
        ['2', 'ストレートフラッシュ', '9 8 7 6 5（同じスート）'],
        ['3', 'フォーカード', '7 7 7 7 K'],
        ['4', 'フルハウス', 'K K K 4 4'],
        ['5', 'フラッシュ', '同じスート5枚'],
        ['6', 'ストレート', '5 6 7 8 9'],
        ['7', 'スリーカード', 'Q Q Q 8 3'],
        ['8', 'ツーペア', 'J J 5 5 A'],
        ['9', 'ワンペア', 'T T A 7 2'],
        ['10', 'ハイカード', 'A J 8 5 3（役なし）'],
      ],
    },
    { t: 'p', text: '**出にくい役ほど強い**と覚えます。フラッシュよりフルハウスのほうが出にくいので、フルハウスが上です。' },
    {
      t: 'order',
      q: '強い順にタップしてください。',
      hands: [
        { label: 'A', cards: ['Ah', 'Th', '7h', '4h', '2h'] },
        { label: 'B', cards: ['Ks', 'Kd', 'Kc', '4s', '4d'] },
        { label: 'C', cards: ['9s', '8d', '7c', '6h', '5d'] },
        { label: 'D', cards: ['Qs', 'Qd', 'Qc', '8c', '3d'] },
        { label: 'E', cards: ['Js', 'Jd', '5s', '5c', 'Ac'] },
      ],
      explain: 'フルハウス → フラッシュ → ストレート → スリーカード → ツーペアの順です。',
    },
    { t: 'h', text: 'ストレートの特例' },
    { t: 'p', text: 'A は「A 2 3 4 5」の一番小さいストレートにも使えます。「Q K A 2 3」のように端をまたぐ並びはストレートではありません。' },
    {
      t: 'compare',
      left: { title: 'ストレート', cards: ['9s', '8d'], board: ['7c', '6h', '5d', 'Kc', '2s'], points: ['数字が5つ連続', 'スートは混ざってよい'], verdict: 'neutral' },
      right: { title: 'フラッシュ', cards: ['Ah', '4h'], board: ['9h', '7h', '2h', 'Kc', 'Qd'], points: ['同じスートが5枚', 'ストレートより強い'], verdict: 'good' },
      caption: 'フラッシュはストレートより強い。',
    },
    {
      t: 'quiz',
      q: 'A♠2♦ でこのボード。ストレートですか？',
      hand: ['As', '2d'],
      board: ['3c', '4h', '5d', 'Kc', '9s'],
      options: ['ストレート（一番小さい）', 'ストレートではない', 'ツーペア'],
      answer: 0,
      explain: 'A は 2〜5 と組んで最小のストレート（ホイール）になります。',
    },
    { t: 'h', text: '同じ役ならキッカー' },
    { t: 'p', text: '同じ役なら、役のカードの大きさ、次に残りのカード（キッカー）で比べます。' },
    {
      t: 'equity',
      players: [
        { label: 'AK', cards: ['Ac', 'Kd'], pct: 87 },
        { label: 'AQ', cards: ['As', 'Qc'], pct: 13 },
      ],
      board: ['Ah', '7d', '2h'],
      caption: 'どちらも A のペア。キッカーの差で大きく差がつく（目安）。',
    },
    {
      t: 'showdown',
      q: 'リバーまで進みました。勝つのは？',
      board: ['Ah', '7d', '2h', '4s', '9c'],
      players: [
        { label: 'AK', cards: ['Ac', 'Kd'] },
        { label: 'AQ', cards: ['As', 'Qc'] },
      ],
      explain: 'どちらも A のワンペア。キッカーの K が Q より大きいので AK の勝ちです。',
    },
    { t: 'h', text: '7枚から最強の5枚' },
    {
      t: 'pick5',
      q: 'K♠K♦ を持っています。最強の5枚をタップしてください。',
      hand: ['Ks', 'Kd'],
      board: ['Kh', 'Qs', 'Qd', '2c', '7h'],
      explain: 'K 3枚と Q 2枚でフルハウスです。',
    },
  ],
};

export default lesson;
