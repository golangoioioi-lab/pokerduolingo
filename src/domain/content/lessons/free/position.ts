import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'position',
  blocks: [
    { t: 'h', text: 'UTG で参加する？' },
    {
      t: 'rapid',
      q: '全員これから行動する UTG。オープンする？',
      choices: ['オープン', 'フォールド'],
      items: [
        { cards: ['As', 'Kd'], answer: 0 },
        { cards: ['7c', '2d'], answer: 1, why: 'どの席でもフォールドです。' },
        { cards: ['9h', '9d'], answer: 0 },
        { cards: ['Kc', '9d'], answer: 1, why: 'UTG ではオフスートの K9 は弱すぎます。' },
        { cards: ['Ah', '5h'], answer: 0, why: 'A のスーテッドは UTG でもオープンします。' },
        { cards: ['Jd', '4s'], answer: 1, why: '後ろに5人残る UTG では論外です。' },
        { cards: ['Tc', '9c'], answer: 0 },
        { cards: ['Kh', '7h'], answer: 1, why: 'K7s は UTG では足りません。BTN ならオープンします。' },
      ],
      pass: 75,
    },
    { t: 'p', text: 'UTG の後ろにはまだ5人います。誰かが強い手を持っている可能性が高いので、強い手に絞ります。' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: '最初に行動・最もタイト' },
        { pos: 'HJ', action: 'やや広く' },
        { pos: 'CO', action: '広く参加できる' },
        { pos: 'BTN', action: 'フロップ以降は最後' },
        { pos: 'SB', bet: 0.5, action: 'フロップ以降は最初' },
        { pos: 'BB', bet: 1, action: '安くコールできる' },
      ],
      pot: 1.5,
      caption: 'BTN に近いほど後から行動でき、参加できる手が広がります。',
    },
    { t: 'h', text: '後から動くと何がいい？' },
    {
      t: 'compare',
      left: { title: 'ポジションあり（後から）', points: ['相手の行動を見てから決める', 'チェックでポットを小さく保てる', '相手のチェックを見てブラフできる'], verdict: 'good' },
      right: { title: 'ポジションなし（先に）', points: ['相手の手が分からないまま決める', 'ベットすると強さが伝わる', 'より強い手が必要'], verdict: 'bad' },
      caption: '同じ手でも、行動する順番で有利さが変わります。',
    },
    { t: 'range', spot: 'rfi-utg', caption: 'UTG のオープンレンジ' },
    { t: 'range', spot: 'rfi-btn', caption: 'BTN のオープンレンジ。同じ「全員フォールド」でも、席でこれだけ違う' },
    { t: 'h', text: 'BTN で遊んでみる' },
    {
      t: 'play',
      title: 'BTN で AT',
      hero: 'BTN',
      heroCards: ['Ac', 'Td'],
      villain: 'BB',
      villainCards: ['8h', '8c'],
      steps: [
        {
          street: 'プリフロップ', pot: 1.5, say: 'CO までフォールド。あなたは BTN で **A♣T♦**。', q: 'どうする？',
          options: [
            { label: '2.5bb にレイズ', good: true, why: 'BTN なら AT は十分強い手です。' },
            { label: 'フォールド', good: false, why: '後ろはブラインドの2人だけ。広く参加できます。' },
          ],
        },
        {
          street: 'フロップ', board: ['9h', '6c', '2d'], pot: 5.5, say: 'BB がコール。ペアはできていません。BB はチェック。', q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: '後ろの席なので、無料でターンを見られます。' },
            { label: '2bb ベット', good: true, why: 'ベットも有力。僅差です。ここではチェックで進めます。' },
          ],
        },
        {
          street: 'ターン', board: ['Ts'], pot: 5.5, say: 'T が落ちて一番上のペア。BB はまたチェック。', q: 'どうする？',
          options: [
            { label: '4bb ベット', good: true, why: '相手のチェックを見て、弱いペアから取りにいきます。' },
            { label: 'チェック', good: false, why: '一番上のペアなので、ベットで価値を取ります。' },
          ],
        },
        {
          street: 'リバー', board: ['3c'], pot: 13.5, say: 'BB はコールし、リバーもチェック。', q: 'どうする？',
          options: [
            { label: '5bb ベット', good: true, why: '88 や 9x から払ってもらえます。' },
            { label: 'チェック', good: true, why: 'チェックも可。ここは僅差です。' },
          ],
        },
      ],
      outro: '毎回相手の行動を見てから決められました。これが BTN の強みです。',
    },
    {
      t: 'rapid',
      q: '今度は BTN。オープンする？',
      choices: ['オープン', 'フォールド'],
      items: [
        { cards: ['Kc', '8d'], answer: 0, why: 'BTN なら K8o もオープンします。' },
        { cards: ['Qh', '9s'], answer: 0 },
        { cards: ['7c', '2d'], answer: 1, why: 'BTN でも弱すぎます。' },
        { cards: ['5h', '3h'], answer: 0 },
        { cards: ['Td', '7c'], answer: 1, why: 'オフスートの T7 は BTN でも足りません。' },
        { cards: ['Ad', '2c'], answer: 0, why: 'BTN なら A のオフスートは全部オープンします。' },
        { cards: ['9h', '4d'], answer: 1 },
        { cards: ['Jc', '6c'], answer: 0 },
      ],
      pass: 75,
    },
  ],
};

export default lesson;
