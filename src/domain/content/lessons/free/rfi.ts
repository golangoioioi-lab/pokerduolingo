import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'rfi',
  blocks: [
    {
      t: 'p',
      text: '自分より前の全員がフォールドして回ってきた状況で、最初にレイズすることを **RFI（Raise First In）** やオープンと呼びます。この場面では**コール（リンプ）せず、レイズかフォールドの二択**が基本です。',
    },
    { t: 'h', text: 'なぜリンプしないのか' },
    {
      t: 'compare',
      left: { title: 'リンプ', points: ['後ろからアイソレートレイズされやすい', '主導権が取れない', 'ブラインドを獲得できない'], verdict: 'bad' },
      right: {
        title: 'レイズ（オープン）',
        points: ['全員フォールドでブラインドを獲得（フォールドエクイティ）', '主導権を取り、Cベットしやすい', '不利な状況を避けられる'],
        verdict: 'good',
      },
      caption: '最初に入るときは、リンプではなくレイズかフォールドです。',
    },
    { t: 'h', text: 'ポジションでレンジを広げる' },
    {
      t: 'p',
      text: '後ろに残る人数が少ないほど強い手にぶつかりにくく、ポジションも有利です。そのため **UTG → HJ → CO → BTN** の順にレンジが広がります。',
    },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', folded: true, action: 'フォールド' },
        { pos: 'HJ', folded: true, action: 'フォールド' },
        { pos: 'CO', hero: true, bet: 2.5, action: 'RFI 2.5bb' },
        { pos: 'BTN' },
        { pos: 'SB', bet: 0.5 },
        { pos: 'BB', bet: 1 },
      ],
      pot: 4,
      caption: '全員フォールドで回ってきた CO が 2.5bb でオープン。後ろに3人残っています。',
    },
    {
      t: 'table',
      head: ['ポジション', '目安のオープン率', 'サイズ'],
      rows: [
        ['UTG', '約15〜18%', '2〜2.5bb'],
        ['HJ', '約19〜22%', '2〜2.5bb'],
        ['CO', '約25〜30%', '2〜2.5bb'],
        ['BTN', '約40〜50%', '2〜2.5bb'],
        ['SB', '約35〜45%', '3bb前後（BBとの1対1）'],
      ],
    },
    { t: 'range', spot: 'rfi-hj', caption: 'HJオープン' },
    { t: 'range', spot: 'rfi-btn', caption: 'BTNオープン。Kx・Qxのスーテッドはほぼ全部、オフスートもかなり参加する' },
    { t: 'h', text: 'ボーダーラインのハンド' },
    {
      t: 'p',
      text: 'レンジの端のハンドで差がつきます。UTG での A5s はレイズ、A5o はフォールド。**スーテッドのA**は、ナッツフラッシュとホイールの可能性があり、相手の AA・AK を減らす（ブロッカー）ためオープンに向いています。',
    },
       {
      t: 'quiz',
      q: 'COで全員フォールド。K9o を持っている。基本の選択は？',
      hand: ['Kd', '9c'],
      options: ['リンプ（コール）', '状況によりレイズとフォールドを混ぜる', '必ずオールイン'],
      answer: 1,
      explain: 'K9o は CO のレンジのボーダーです。このアプリの簡易レンジでは50%でレイズ。リンプは選択肢に入れず、レイズかフォールドで考えます。',
    },
    {
      t: 'quiz',
      q: 'UTGで全員フォールド。オープンレイズに向いているのはどちら？',
      options: ['A♠5♠', 'A♦5♣'],
      optionCards: [['As', '5s'], ['Ad', '5c']],
      answer: 0,
      explain: 'A5s はナッツフラッシュとホイールの可能性があり、ブロッカーにもなるのでオープンできます。A5o はフォールドです。',
    },
    {
      t: 'estimate',
      q: 'BTNが2.5bbにオープンし、SBとBBがフォールド。BTNが獲得するブラインドは？',
      hand: ['Ks', 'Td'],
      min: 0,
      max: 4,
      step: 0.5,
      unit: 'bb',
      answer: 1.5,
      tolerance: 0.25,
      explain: 'SBの0.5bbとBBの1bbで合計1.5bbです。',
    },
    {
      t: 'estimate',
      q: 'BTNが2.5bbにオープン。SBはフォールド、BBがコール。フロップ前のポットは？',
      min: 0,
      max: 10,
      step: 0.5,
      unit: 'bb',
      answer: 5.5,
      tolerance: 0.25,
      explain: '2.5 + 2.5 + SBの0.5 = 5.5bbです。',
    },
    { t: 'try', text: 'オープンのスポットだけを集中練習する', tab: 'train' },
  ],
};

export default lesson;
