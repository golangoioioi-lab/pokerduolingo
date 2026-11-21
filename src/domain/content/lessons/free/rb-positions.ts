import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'rb-positions',
  blocks: [
    { t: 'h', text: 'UTG から入れる手は？' },
    {
      t: 'rapid',
      q: 'UTG（最初に行動する席）でオープンする？',
      choices: ['オープン', 'フォールド'],
      items: [
        { cards: ['As', 'Qs'], answer: 0 },
        { cards: ['Kd', '9c'], answer: 1, why: 'K9o は UTG では弱すぎます。' },
        { cards: ['8s', '8d'], answer: 0 },
        { cards: ['7h', '2c'], answer: 1, why: 'どの席でもフォールドです。' },
        { cards: ['Ah', 'Td'], answer: 0 },
        { cards: ['Qh', 'Td'], answer: 1, why: 'QTo は後ろの席なら開けますが、UTG では絞ります。' },
        { cards: ['Kh', 'Jc'], answer: 0 },
        { cards: ['Js', '4d'], answer: 1, why: '弱いオフスートです。' },
      ],
    },
    { t: 'p', text: 'UTG は後ろに5人が控えているので、強い手に絞ります。席の位置で、入れる手の広さが変わります。' },
    { t: 'h', text: '6人卓の6つの席' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: '最初に行動' },
        { pos: 'HJ' },
        { pos: 'CO' },
        { pos: 'BTN', action: '最後に行動' },
        { pos: 'SB', bet: 0.5 },
        { pos: 'BB', bet: 1 },
      ],
      caption: 'プリフロップは UTG から。フロップ以降は SB から行動し、BTN が最後。',
    },
    {
      t: 'table',
      head: ['席', '読み方', '特徴'],
      rows: [
        ['UTG', 'アンダー・ザ・ガン', '最初に行動。最も不利'],
        ['HJ', 'ハイジャック', '中間'],
        ['CO', 'カットオフ', 'ボタンの1つ前'],
        ['BTN', 'ボタン', 'フロップ以降は常に最後。最も有利'],
        ['SB', 'スモールブラインド', '0.5bb を払う'],
        ['BB', 'ビッグブラインド', '1bb を払う'],
      ],
    },
    { t: 'h', text: '後ろが有利な理由' },
    {
      t: 'compare',
      left: { title: 'BTN（後ろ）', points: ['相手の行動を見てから動ける', '広い手で参加できる'], verdict: 'good' },
      right: { title: 'UTG（前）', points: ['情報がない状態で動く', '強い手だけで参加する'], verdict: 'bad' },
      caption: '後ろに行動できる側を**インポジション（IP）**、先に動く側を**アウトオブポジション（OOP）**と言います。',
    },
    {
      t: 'estimate',
      q: 'BTN がオープンする手は、全ハンドの何%くらい？（このアプリのレンジ表の目安）',
      min: 0, max: 100, step: 5, unit: '%', answer: 48, tolerance: 8,
      explain: 'BTN は5割近くの手でオープンします。UTG は2割弱です。',
    },
    { t: 'h', text: 'BTN で1ハンド' },
    {
      t: 'play',
      title: 'BTN で A♥J♦',
      hero: 'BTN', heroCards: ['Ah', 'Jd'], villain: 'BB', villainCards: ['Qs', 'Js'],
      steps: [
        {
          street: 'プリフロップ', pot: 1.5,
          say: 'CO までフォールド。',
          q: 'どうする？',
          options: [
            { label: '2.5bb レイズ', good: true, why: 'AJo は BTN で十分強い手です。' },
            { label: 'フォールド', good: false, why: 'BTN では広くオープンできます。' },
          ],
        },
        {
          street: 'フロップ', board: ['Jc', '7s', '2d'], pot: 5.5,
          say: 'BB だけがコール。BB はチェック。あなたは最後に動けます。',
          q: 'トップペア。どうする？',
          options: [
            { label: '2bb ベット', good: true, why: '弱い J や 7 から払ってもらいます。' },
            { label: 'チェック', good: false, why: '悪くはありませんが、取れる額が減ります。' },
          ],
        },
        { street: 'ターン', board: ['4h'], pot: 9.5, say: 'BB がコール。ターンは 4。BB はチェック、あなたもチェック。' },
        {
          street: 'リバー', board: ['9c'], pot: 9.5,
          say: 'リバーは 9。BB はまたチェック。',
          q: '相手のチェックを見てから決められます。どうする？',
          options: [
            { label: '5bb ベット', good: true, why: '相手は弱気です。弱い J から払ってもらえます。' },
            { label: 'チェック', good: false, why: '勝てることは多いですが、取れる分を逃します。' },
          ],
        },
      ],
      outro: '後ろの席では、相手のチェックを見てから賭けるかどうか決められます。',
    },
    {
      t: 'rapid',
      q: 'BTN でオープンする？',
      choices: ['オープン', 'フォールド'],
      items: [
        { cards: ['Kd', '8c'], answer: 0 },
        { cards: ['6s', '5s'], answer: 0 },
        { cards: ['7h', '2c'], answer: 1, why: 'BTN でも最弱クラスです。' },
        { cards: ['Ah', '3c'], answer: 0 },
        { cards: ['4s', '4h'], answer: 0 },
        { cards: ['9d', '3c'], answer: 1, why: '弱いオフスートです。' },
        { cards: ['Ts', '8d'], answer: 0 },
        { cards: ['Qh', '5c'], answer: 1, why: 'Q5o はつながりもスートもありません。' },
      ],
    },
  ],
};

export default lesson;
