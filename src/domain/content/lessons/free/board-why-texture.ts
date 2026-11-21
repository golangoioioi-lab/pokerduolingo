import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-why-texture',
  blocks: [
    { t: 'h', text: 'まず分けてみる' },
    {
      t: 'rapid',
      q: 'このフロップはドライ？ ウェット？',
      choices: ['ドライ', 'ウェット'],
      items: [
        { cards: ['Ks', '7d', '2c'], answer: 0 },
        { cards: ['9h', '8d', '7c'], answer: 1, why: '9-8-7 とつながり、ストレートやドローが多く出ます。' },
        { cards: ['As', '8c', '3h'], answer: 0 },
        { cards: ['Jh', 'Th', '8c'], answer: 1, why: 'つながりに加えて、ハート2枚でフラッシュドローもあります。' },
        { cards: ['Qd', '7h', '2s'], answer: 0 },
        { cards: ['9s', '6s', '3s'], answer: 1, why: '3枚とも同じスートで、フラッシュがすでに完成し得ます。' },
        { cards: ['Kd', '5h', '2s'], answer: 0 },
        { cards: ['7h', '6h', '5c'], answer: 1, why: 'つながりとフラッシュドローの両方があります。' },
      ],
    },
    {
      t: 'p',
      text: '数字が離れ、スートもばらばらなら**ドライ**。つながりや同じスートがあれば**ウェット**です。ボードの性質で、同じ手の価値が大きく変わります。',
    },
    {
      t: 'table',
      head: ['軸', '種類', '例'],
      rows: [
        ['最高カード', 'A-high / K-high / ミドル / ロー', 'A72、K83、T62、543'],
        ['つながり', 'ドライ / コネクテッド', 'K72、987'],
        ['スート', 'レインボー / ツートーン / モノトーン', 'A♠7♦2♣、K♥9♥4♣、9♠6♠3♠'],
        ['ペア', 'なし / ペアボード', 'K♠5♥5♦'],
      ],
    },
    {
      t: 'quiz',
      q: 'このボードは、どの分類に当てはまりますか。',
      board: ['As', '7d', '2c'],
      options: ['ローコネクテッド', 'A-high・ドライ・レインボー', 'モノトーン', 'ペアボード'],
      answer: 1,
      explain: 'Aが最高カードで、7と2は離れており、スートも3種類です。',
    },
    { t: 'h', text: 'ボードで有利な側が変わる' },
    {
      t: 'p',
      text: 'BTNがオープンしBBがコールした場面（6人卓100bb）の目安です。BTNは高いカードとペアが多く、BBは低いスーテッドも広く持ちます。',
    },
    {
      t: 'equity',
      players: [{ label: 'BTNレンジ', pct: 54 }, { label: 'BBレンジ', pct: 46 }],
      board: ['Ah', 'Kd', '4c'],
      caption: 'A♥K♦4♣。高いボードはBTNが有利（目安）。',
    },
    {
      t: 'equity',
      players: [{ label: 'BTNレンジ', pct: 50 }, { label: 'BBレンジ', pct: 50 }],
      board: ['7s', '6d', '5c'],
      caption: '7♠6♦5♣。低くつながるとほぼ互角（目安）。',
    },
    {
      t: 'quiz',
      q: '高いカードのボードがBTNに有利になりやすい主な理由は？',
      options: ['BTNのレンジに高いカードとペアが多いから', 'BTNのほうが幸運だから', 'ボードは常にBTNに有利だから', 'BBはフォールドするから'],
      answer: 0,
      explain: 'BTNはAx、Kx、高いポケットペアを多く持つので、高いボードに強く当たります。',
    },
    { t: 'h', text: 'ウェットなボードで並べ直す' },
    {
      t: 'order',
      q: '9♥8♦7♣ で強い順にタップ',
      board: ['9h', '8d', '7c'],
      hands: [
        { label: 'AA', cards: ['As', 'Ad'] },
        { label: 'JT', cards: ['Js', 'Tc'] },
        { label: '99', cards: ['9s', '9c'] },
        { label: 'AK', cards: ['Ah', 'Kc'] },
      ],
      explain: 'JTはストレート、99はセット。AAはワンペア、AKは何もありません。ウェットなボードでは、AAでも安心できません。',
    },
    { t: 'tip', text: 'ボードを見たら、まず「ドライかウェットか」「高いか低いか」を分けます。次のレッスンから、誰に有利かを考えます。' },
  ],
};

export default lesson;
