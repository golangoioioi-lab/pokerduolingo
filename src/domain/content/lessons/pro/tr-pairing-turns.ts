import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'tr-pairing-turns',
  blocks: [
    { t: 'h', text: 'まずやってみる：ペアのボードで並べる' },
    {
      t: 'p',
      text: 'BTNオープン、BBコール。フロップ K♠8♦3♣ でBTNがベット、BBがコール。ターンは8♣でボードがペアになりました。',
    },
    {
      t: 'order',
      q: 'このボードで、強い順にタップ。',
      board: ['Ks', '8d', '3c', '8c'],
      hands: [
        { label: 'Q♥Q♦', cards: ['Qh', 'Qd'] },
        { label: 'K♥J♥', cards: ['Kh', 'Jh'] },
        { label: '9♥8♥', cards: ['9h', '8h'] },
        { label: '3♥3♦', cards: ['3h', '3d'] },
        { label: 'A♣5♣', cards: ['Ac', '5c'] },
      ],
      explain: '33はフルハウス、98はトリップス。ペアのボードでは、KJやQQも8のペアと合わせた2ペアになります。',
    },
    { t: 'h', text: 'トリップスは何コンボあるか' },
    {
      t: 'p',
      text: '残っている8は8♥と8♠の2枚だけ。トリップスは思ったより少なくなります。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'BBがフロップでコールしやすい8x', hands: ['98', '87s', '86s', 'T8s', 'J8s', 'Q8s'] },
        { label: 'BTNがオープンする8x（スーテッド中心）', hands: ['A8s', 'K8s', 'Q8s', 'J8s', 'T8s', '98s', '87s'] },
      ],
      dead: ['Ks', '8d', '3c', '8c'],
      caption: 'スーテッドの8xは8♥か8♠の2コンボだけ（K8sはK♠も使えないので1コンボ）',
    },
    {
      t: 'p',
      text: 'BBの8xは18コンボ、BTNは13コンボ。どちらもレンジの数パーセントです。このターンの本当の特徴は、**ドローが何も完成しない**ことです。',
    },
    {
      t: 'estimate',
      q: 'BBの98（スーテッドとオフスートの合計）は、あと何コンボ？',
      board: ['Ks', '8d', '3c', '8c'],
      min: 0,
      max: 16,
      step: 1,
      unit: 'コンボ',
      answer: 8,
      tolerance: 2,
      explain: '8は8♥と8♠の2枚、9は4枚すべて使えるので、2 × 4 = 8コンボです。',
    },
    { t: 'h', text: 'ベットした側：小さく広く' },
    {
      t: 'tree',
      root: 'BTNがK♥Q♦でターン8♣（ポット9.1bb）',
      options: [
        {
          label: '3bbベット（約1/3ポット）',
          outcomes: [
            { label: '弱い手が降りる', prob: 0.35, value: 9.1 },
            { label: 'より弱い手がコール', prob: 0.45, value: 12.1 },
            { label: 'より強い手がコール', prob: 0.2, value: -3 },
          ],
        },
        {
          label: 'チェック',
          outcomes: [
            { label: 'ショーダウンで勝つ', prob: 0.8, value: 9.1 },
            { label: 'ショーダウンで負ける', prob: 0.2, value: 0 },
          ],
        },
      ],
      caption: '確率は目安。コールする手は、弱い手（45%）が強い手（20%）より多い',
    },
    {
      t: 'p',
      text: 'フロップの優位は崩れず、相手のトリップスも少数です。**1/3前後で広く打つ**のが基本です。',
    },
    { t: 'h', text: 'もう一度やる：BBで守る' },
    {
      t: 'estimate',
      q: 'BBが9.1bbのポットに3bbのベットを受けた。コールに必要な勝率は？',
      board: ['Ks', '8d', '3c', '8c'],
      min: 0,
      max: 60,
      step: 1,
      unit: '%',
      answer: 20,
      tolerance: 5,
      explain: '3 ÷ (9.1 + 3 × 2) = 3 ÷ 15.1 ≈ 20% です。',
    },
    {
      t: 'rapid',
      q: 'BTNがターンで3bbをベット（ポット9.1bb）。BBはコール？ フォールド？',
      choices: ['コール', 'フォールド'],
      items: [
        { cards: ['Jc', '3d'], board: ['Ks', '8d', '3c', '8c'], answer: 0, why: '3のペア（ボードと合わせて2ペア）。必要勝率20%なら十分です。' },
        { cards: ['9h', '8h'], board: ['Ks', '8d', '3c', '8c'], answer: 0, why: 'トリップス。レイズより、コールでゆっくり育てるのが基本です。' },
        { cards: ['7h', '6h'], board: ['Ks', '8d', '3c', '8c'], answer: 1, why: '手札が絡むペアもドローもありません。' },
        { cards: ['Kd', '2d'], board: ['Ks', '8d', '3c', '8c'], answer: 0, why: 'Kのトップペア。降りる理由はありません。' },
        { cards: ['5d', '4d'], board: ['Ks', '8d', '3c', '8c'], answer: 1, why: 'ペアもストレートドローもない、5ハイです。' },
        { cards: ['6s', '6h'], board: ['Ks', '8d', '3c', '8c'], answer: 0, why: '6のペアは3xにも勝ちます。小さいベットなら続けます。' },
      ],
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'ペアのターンは、トリップスを数えると意外に少ないカードです。ベットした側は小さく広く、BBは降りすぎず、トリップスはコールで育てます。',
    },
  ],
};

export default lesson;
