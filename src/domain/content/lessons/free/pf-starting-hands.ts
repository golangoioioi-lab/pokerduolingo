import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pf-starting-hands',
  blocks: [
    { t: 'h', text: '参加する手を選ぶ' },
    {
      t: 'quiz',
      q: 'あなたは UTG（最初に決める席）。参加するならどれ？',
      options: ['AQo', 'J8o', 'T5s', 'K4o'],
      optionCards: [['Ac', 'Qd'], ['Jh', '8c'], ['Ts', '5s'], ['Kd', '4h']],
      answer: 0,
      explain: '高いカード2枚の AQ は、どの席からでも参加できる強い手です。',
    },
    { t: 'p', text: '最初に決める UTG では、後ろの5人に強い手がいるかもしれません。だから強い手だけで参加します。' },
    {
      t: 'rapid',
      q: 'UTG で 2.5bb にレイズして参加する？',
      choices: ['参加する', 'フォールド'],
      items: [
        { cards: ['As', 'Ad'], answer: 0 },
        { cards: ['7h', '2c'], answer: 1 },
        { cards: ['Ah', 'Kh'], answer: 0 },
        { cards: ['Jd', '4s'], answer: 1 },
        { cards: ['Tc', 'Td'], answer: 0 },
        { cards: ['9s', '3h'], answer: 1 },
        { cards: ['Ks', 'Jd'], answer: 0, why: 'K と J の高いカード2枚。UTG でも参加できます。' },
        { cards: ['Kc', '2d'], answer: 1, why: 'K があっても、もう1枚が小さすぎます。' },
        { cards: ['Qd', 'Qc'], answer: 0 },
        { cards: ['8h', '5d'], answer: 1 },
      ],
    },
    { t: 'h', text: 'BTN では広く' },
    { t: 'p', text: '前の全員がフォールドした BTN では、後ろはブラインドの2人だけ。参加できる手が4割ほどに広がります。' },
    { t: 'range', spot: 'rfi-btn', caption: 'BTN で参加する手（色の付いたマス）。上と左ほど強い手です。' },
    {
      t: 'paint',
      spot: 'rfi-btn',
      q: 'いま見た BTN の参加する手を、思い出しながら塗ってください。',
      pass: 60,
    },
    {
      t: 'rapid',
      q: 'BTN で 2.5bb にレイズして参加する？',
      choices: ['参加する', 'フォールド'],
      items: [
        { cards: ['Kh', 'Td'], answer: 0, why: 'BTN なら KT は十分に参加できます。' },
        { cards: ['9d', '2c'], answer: 1 },
        { cards: ['As', '2s'], answer: 0 },
        { cards: ['8c', '3h'], answer: 1 },
        { cards: ['7s', '6s'], answer: 0, why: '同じマークで続いた手は、BTN なら参加できます。' },
        { cards: ['Tc', '4d'], answer: 1 },
        { cards: ['5h', '5c'], answer: 0 },
        { cards: ['Js', '3d'], answer: 1 },
        { cards: ['Ad', '7c'], answer: 0, why: 'BTN では A があれば多くの手で参加します。' },
        { cards: ['6d', '2h'], answer: 1 },
      ],
    },
    { t: 'tip', title: '席で変わる', text: '同じ手でも、前の席ではフォールド、BTN では参加、ということがよくあります。迷ったら「前の席ほど強い手だけ」と覚えておきます。' },
  ],
};

export default lesson;
