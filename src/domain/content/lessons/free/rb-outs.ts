import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'rb-outs',
  blocks: [
    { t: 'h', text: '助けのカードを探す' },
    {
      t: 'outs',
      q: '次の1枚でフラッシュになるカードを全部タップしてください。',
      hand: ['Ah', '9h'],
      board: ['Kh', '7h', '2c'],
      target: 'フラッシュ',
      explain: 'ハートは13枚。見えている4枚を除いて残り9枚。これが**アウツ**です。',
    },
    {
      t: 'table',
      head: ['ドロー', 'アウツ', 'フロップ→リバー（目安）'],
      rows: [
        ['フラッシュドロー', '9枚', '約 35%'],
        ['両面ストレートドロー', '8枚', '約 32%'],
        ['ガットショット', '4枚', '約 17%'],
      ],
    },
    { t: 'h', text: '2と4の法則' },
    { t: 'formula', text: '勝率 ≒ アウツ × 4（フロップ）、アウツ × 2（ターン）', note: '9アウツ → フロップ約 36%、ターン約 18%' },
    {
      t: 'equity',
      players: [
        { label: 'A♥9♥', cards: ['Ah', '9h'], pct: 45 },
        { label: 'K♠Q♦', cards: ['Ks', 'Qd'], pct: 55 },
      ],
      board: ['Kh', '7h', '2c'],
      caption: 'A を引いてもペアになるので、フラッシュドロー単体より高い（目安）。',
    },
    {
      t: 'outs',
      q: '次の1枚でストレートになるカードを全部タップしてください。',
      hand: ['8s', '7s'],
      board: ['9d', '6h', '2c'],
      target: 'ストレート',
      explain: '5 と T が各4枚で8枚。両面（オープンエンド）ストレートドローです。',
    },
    {
      t: 'estimate',
      q: 'フロップで8アウツ。リバーまでに完成する確率の目安は？',
      hand: ['8s', '7s'],
      board: ['9d', '6h', '2c'],
      min: 0, max: 60, step: 1, unit: '%', answer: 32, tolerance: 5,
      explain: '8 × 4 = 32% です。',
    },
    { t: 'h', text: 'ポットオッズと比べる' },
    {
      t: 'odds', pot: 10, bet: 5, equity: 35,
      caption: 'フラッシュドロー（約 35%）に 1/2 ポットのベット。必要 25% なのでコールできる。',
    },
    {
      t: 'estimate',
      q: 'ターンで9アウツ。リバーで完成する確率の目安は？',
      hand: ['Ah', '9h'],
      board: ['Kh', '7h', '2c', '4d'],
      min: 0, max: 40, step: 1, unit: '%', answer: 18, tolerance: 4,
      explain: 'ターンは × 2 で 9 × 2 = 18%（正確には 9 ÷ 46 ≒ 20%）です。',
    },
    {
      t: 'quiz',
      q: 'このボードで、アウツが最も多い手札は？',
      board: ['9h', '8h', '2c'],
      options: ['A♥5♥', '7♠6♠', 'K♦6♣', 'A♣K♦'],
      optionCards: [['Ah', '5h'], ['7s', '6s'], ['Kd', '6c'], ['Ac', 'Kd']],
      answer: 0,
      explain: 'フラッシュドロー9枚、両面8枚、オーバーカード2枚は最大6枚、ガットショット4枚です。',
    },

    {
      t: 'outs',
      q: '次の1枚でストレートになるカードは？',
      hand: ['Ts', '8d'],
      board: ['Kh', '9c', '6s'],
      target: 'ストレート',
      explain: '必要なのは 7 だけ。4枚のガットショット（中抜け）です。',
    },
  ],
};

export default lesson;
