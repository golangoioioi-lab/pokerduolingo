import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-monotone',
  blocks: [
    { t: 'h', text: '誰が勝つ？' },
    {
      t: 'showdown',
      q: 'K♠7♠2♠ → 9♦ → 4♠。勝者をタップ',
      board: ['Ks', '7s', '2s', '9d', '4s'],
      players: [
        { label: 'KK', cards: ['Kh', 'Kd'] },
        { label: 'A♠5♦', cards: ['As', '5d'] },
        { label: 'Q♠J♦', cards: ['Qs', 'Jd'] },
      ],
      explain: 'ボードにスペードが4枚。スペード1枚でフラッシュになり、A♠を持つ手がナッツです。KKのセットはフラッシュに負けます。',
    },
    { t: 'h', text: 'スートとブロッカーが決め手' },
    {
      t: 'p',
      text: 'フロップで完成したフラッシュはスペード2枚のスーテッドだけで、意外に少数です。両者とも決め手が少なく、差は小さくなります（BTN対BBのSRP、目安）。',
    },
    {
      t: 'equity',
      players: [{ label: 'BTNレンジ', pct: 52 }, { label: 'BBレンジ', pct: 48 }],
      board: ['Ks', '7s', '2s'],
      caption: 'K♠7♠2♠ のレンジ対レンジ（目安）。',
    },
    {
      t: 'compare',
      left: { title: 'A♠を持つ手', cards: ['As', '5d'], board: ['Ks', '7s', '2s'], points: ['ナッツフラッシュのブロッカー', 'ブラフにも使いやすい'], verdict: 'good' },
      right: { title: 'スペードなし', cards: ['3d', '3c'], board: ['Ks', '7s', '2s'], points: ['フラッシュの見込みがない', 'ベットは控えめに'], verdict: 'bad' },
      caption: 'モノトーンでは、スートが手の価値を決める。',
    },
    {
      t: 'quiz',
      q: 'このボードで、すでにナッツフラッシュを持っているのはどれ？',
      board: ['Ks', '7s', '2s'],
      options: ['A♠5♠', 'A♥K♦', 'Q♠J♦', 'K♥K♦'],
      optionCards: [['As', '5s'], ['Ah', 'Kd'], ['Qs', 'Jd'], ['Kh', 'Kd']],
      answer: 0,
      explain: 'スペード2枚でAを含むA♠5♠がナッツ。Q♠J♦は1枚だけのドロー、KKはセットです。',
    },
    {
      t: 'quiz',
      q: 'このボードでBTNに向く戦略は？',
      board: ['Ks', '7s', '2s'],
      options: ['常に全額ベット', '小さなベット、頻度は控えめ', '必ずチェックレイズ', '常にフォールド'],
      answer: 1,
      explain: '決め手の少ないモノトーンでは、小さなサイズで頻度を絞って打ちます。',
    },
    { t: 'h', text: 'A♠1枚の価値' },
    {
      t: 'outs',
      q: 'A♠Q♦。次の1枚でフラッシュになるカードを全部タップ',
      hand: ['As', 'Qd'],
      board: ['Ks', '7s', '2s'],
      target: 'フラッシュ',
      explain: 'スペードは13枚、見えているのは4枚なので残り9枚。どれが落ちてもナッツフラッシュです。',
    },
    { t: 'tip', text: 'モノトーンでは「そのスートを持っているか」をまず確認。A♠1枚は、勝ち目とブロッカーの両方になります。' },
  ],
};

export default lesson;
