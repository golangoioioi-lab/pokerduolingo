import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-two-tone',
  blocks: [
    { t: 'h', text: 'アウツを数える' },
    {
      t: 'outs',
      q: 'A♥5♥。次の1枚でフラッシュになるカードを全部タップ',
      hand: ['Ah', '5h'],
      board: ['Kh', '9h', '4c'],
      target: 'フラッシュ',
      explain: 'ハートは13枚、見えているのは4枚なので残り9枚です。',
    },
    { t: 'h', text: '動きのあるボード' },
    {
      t: 'p',
      text: '同じスートが2枚あるとフラッシュドローが出て、ターン以降に形勢が変わりやすくなります。ストレートドローが重なると、ペアのない手でも有利になります。',
    },
    {
      t: 'equity',
      players: [
        { label: 'A♥K♦', cards: ['Ah', 'Kd'], pct: 44 },
        { label: 'J♥T♥', cards: ['Jh', 'Th'], pct: 56 },
      ],
      board: ['Qh', '8h', '3c'],
      caption: 'オーバーカード2枚 対 フラッシュドロー＋ストレートドロー。ドローが有利。',
    },
    {
      t: 'compare',
      left: { title: 'ドライ（K♠7♦2♣）', board: ['Ks', '7d', '2c'], points: ['ドローが少ない', 'BTNは小さく高頻度'], verdict: 'good' },
      right: { title: 'ツートーン（K♥9♥4♣）', board: ['Kh', '9h', '4c'], points: ['フラッシュドローが出る', 'BTNはサイズと頻度を調整'], verdict: 'neutral' },
      caption: '動的なボードほど、ドローを持つ手が武器になる。',
    },
    {
      t: 'quiz',
      q: 'この手が持つドローは？',
      hand: ['Jh', 'Th'],
      board: ['Qh', '8h', '3c'],
      options: ['フラッシュドローとストレートドロー', '完成したフラッシュ', 'ドローなし', 'セット'],
      answer: 0,
      explain: 'ハート4枚でフラッシュドロー。9が出ればストレートも完成します。',
    },
    {
      t: 'odds',
      pot: 10,
      bet: 5,
      equity: 35,
      caption: 'フラッシュドロー（2枚で約35%）は、1/2ポットに必要な25%を満たす。',
    },
    {
      t: 'estimate',
      q: 'ポット10bbに5bbのベット。コールに必要な勝率は？',
      min: 0,
      max: 50,
      step: 1,
      unit: '%',
      answer: 25,
      tolerance: 4,
      explain: '5 ÷（10＋5＋5）＝25%。フラッシュドローなら足ります。',
    },
    { t: 'h', text: 'ドローの強さを見分ける' },
    {
      t: 'rapid',
      q: 'このドローは強い（8アウツ以上）？ 弱い？',
      choices: ['強い', '弱い'],
      items: [
        { cards: ['Jh', 'Th'], board: ['Qh', '8h', '3c'], answer: 0, why: 'フラッシュドロー＋ストレートドローで15アウツ前後です。' },
        { cards: ['Js', 'Ts'], board: ['Kh', '9h', '4c'], answer: 1, why: 'Qだけのガットショット（4アウツ）です。' },
        { cards: ['6h', '5h'], board: ['Jh', '8h', '3c'], answer: 0 },
        { cards: ['Qs', 'Js'], board: ['Th', '9h', '6c'], answer: 0, why: 'Kでも8でも完成するオープンエンド（8アウツ）です。' },
        { cards: ['Ac', 'Qc'], board: ['Kh', '9h', '4c'], answer: 1, why: 'バックドアのフラッシュがあるだけです。' },
        { cards: ['7c', '6c'], board: ['8h', '5h', '2d'], answer: 0 },
        { cards: ['Ks', 'Qd'], board: ['Jh', '8h', '3c'], answer: 1, why: 'ストレートにはTと9の2枚が必要です。' },
        { cards: ['Ah', '2h'], board: ['Th', '7h', '4c'], answer: 0 },
      ],
    },
  ],
};

export default lesson;
