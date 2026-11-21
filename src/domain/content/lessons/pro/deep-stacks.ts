import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'deep-stacks',
  blocks: [
    { t: 'h', text: 'まずやってみる：200bbで価値が上がる手は？' },
    { t: 'p', text: 'スタックが100bbから200bbになると、完成したときに大きく勝てる手の価値が上がります。' },
    {
      t: 'rapid',
      q: '100bbから200bbになると、この手の価値は？',
      choices: ['上がる', '下がる'],
      items: [
        { cards: ['7h', '6h'], answer: 0, why: 'ストレートやフラッシュで大きなポットを取れます。' },
        { cards: ['Kd', 'Jc'], answer: 1, why: 'AKやKQにドミネイトされ、トップペアで大きく負けやすい手です。' },
        { cards: ['5s', '5d'], answer: 0, why: 'セットになったときの取り分が増えます。' },
        { cards: ['Ad', '9s'], answer: 1, why: 'Aのペアでもキッカー負けしやすい手です。' },
        { cards: ['As', '4s'], answer: 0, why: 'ナッツフラッシュとホイールを狙えます。' },
        { cards: ['Qh', 'Jd'], answer: 1, why: 'オフスートのブロードウェイはトップペアで止まりやすい手です。' },
        { cards: ['9c', '8c'], answer: 0, why: 'スーテッドコネクターは深いほど価値が上がります。' },
        { cards: ['Kh', 'Ts'], answer: 1, why: 'ドミネイトされやすいオフスートの手です。' },
      ],
    },
    { t: 'h', text: 'SPRが約2倍になる' },
    {
      t: 'pot',
      steps: [
        { label: '100bb シングルレイズ', pot: 5.5, stack: 97.5 },
        { label: '200bb シングルレイズ', pot: 5.5, stack: 197.5 },
        { label: '100bb 3ベット', pot: 23, stack: 89 },
        { label: '200bb 3ベット', pot: 23, stack: 189 },
      ],
      caption: 'BTNオープン・BBコールと、SBの11bbの3ベットにBTNがコール。スタックが2倍でSPRも約2倍。',
    },
    {
      t: 'estimate',
      q: '200bbで3ベットポット（ポット23bb、残り189bb）。フロップのSPRは？',
      min: 0,
      max: 20,
      step: 0.5,
      answer: 8,
      tolerance: 2,
      explain: '189 ÷ 23 ≒ 8.2。100bbのシングルレイズポットに近い感覚です（100bbなら約3.9）。',
    },
    {
      t: 'compare',
      left: {
        title: '100bb',
        cards: ['5s', '5d'],
        verdict: 'neutral',
        points: ['3ベットにコール後、残りは89bb', 'セットの取り返しは約10倍'],
      },
      right: {
        title: '200bb',
        cards: ['5s', '5d'],
        verdict: 'good',
        points: ['3ベットにコール後、残りは189bb', 'セットの取り返しは約22倍'],
      },
      caption: 'BTNでオープンし、SBの11bbの3ベットに8.5bbを足してコールする場面。',
    },
    {
      t: 'estimate',
      q: '200bbで55が3ベットにコール（8.5bb）。残り189bbは、コール額の何倍？',
      hand: ['5s', '5d'],
      min: 0,
      max: 40,
      step: 1,
      unit: '倍',
      answer: 22,
      tolerance: 6,
      explain: '189 ÷ 8.5 ≒ 22倍。100bb（約10倍）の2倍以上です。セットになるのは約8.5回に1回です。',
    },
    { t: 'h', text: '3ベット・4ベットの調整' },
    {
      t: 'list',
      items: [
        'アウトオブポジションの3ベットは大きめに',
        '4ベットブラフは慎重に。5ベットされてもスタックが残る',
        'QQやAKのスタックオフは慎重に。相手のオールインはAAとKKに寄りやすい',
      ],
    },
    { t: 'h', text: 'もう一度やる' },
    {
      t: 'play',
      title: '200bbで 5♠5♦',
      hero: 'BTN',
      heroCards: ['5s', '5d'],
      villain: 'SB',
      villainCards: ['Ah', 'Kh'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 14.5,
          say: '全員200bb。BTNで2.5bbにオープンし、SBが11bbに3ベット。BBはフォールド。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: '残りがコール額の約22倍。ポジションもあり、セットを狙えます。' },
            { label: 'フォールド', good: false, why: '深いスタックでは、インポジションの小さいペアは十分コールできます。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Kc', '5h', '2d'],
          pot: 31,
          say: 'フロップ K♣5♥2♦ でセット。SBが8bbベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'ドローの少ないボード。SBに打たせ続けられます。' },
            { label: 'レイズ', good: true, why: 'Kxから大きくポットを作るのも有力です。' },
            { label: 'フォールド', good: false, why: 'セットで降りる理由はありません。' },
          ],
        },
        { street: 'ターン', board: ['9s'], pot: 79, say: 'あなたはコール。ターン9♠でSBが20bbベットし、あなたはコール。' },
        {
          street: 'リバー',
          board: ['3c'],
          pot: 79,
          say: 'リバー3♣。SBはチェック。残りは161bb。',
          q: 'どうする？',
          options: [
            { label: '55bbベット', good: true, why: 'SBのAKやKQから大きく取れます。深いスタックの見返りです。' },
            { label: 'チェック', good: false, why: 'セットでチェックすると、Kxから取れる額を逃します。' },
          ],
        },
      ],
      outro: 'SBはAKでコール。小さいペアは、深いスタックでセットになったときに大きく取り返せます。',
    },
    { t: 'warn', text: '深いスタックでワンペアのまま3ストリート大きく打つと、より強い手にだけ払いがちです。ポットを大きくしすぎない判断が重要です。' },
  ],
};

export default lesson;
