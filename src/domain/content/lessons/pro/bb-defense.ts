import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'bb-defense',
  blocks: [
    {
      t: 'p',
      text: 'BBはすでに1bbをポットに入れているので、相手のオープンに対して**安くコール**できます。そのため、他のポジションよりはるかに広くディフェンス（コールまたは3bet）します。',
    },
    { t: 'h', text: '必要勝率を計算してみる' },
    {
      t: 'p',
      text: 'BTNが2.5bbオープン、SBフォールド。ポットは 2.5 + 0.5 + 1 = 4bb。BBはあと **1.5bb** でコールでき、コール後のポットは 5.5bb です。',
    },
    {
      t: 'seats',
      seats: [
        { pos: 'BTN', bet: 2.5, action: 'オープン' },
        { pos: 'SB', folded: true, action: 'フォールド' },
        { pos: 'BB', hero: true, bet: 1, action: 'あと1.5bb' },
      ],
      pot: 4,
      caption: 'BB はすでに 1bb を出していて、あと 1.5bb でコールできます。',
    },
    { t: 'formula', text: '1.5 ÷ 5.5 ≒ 27%', note: 'たった27%の勝率でコールが正当化される' },
    {
      t: 'odds',
      pot: 2.5,
      bet: 1.5,
      equity: 32,
      caption: 'BTN の 2.5bb オープンに対して。必要勝率は約27%です（エクイティ32%は例）。',
    },
    {
      t: 'p',
      text: 'ほとんどのハンドは、BTNの広いオープンレンジに対して27%以上のエクイティがあります。ただしBBはフロップ以降ずっと先に行動するため、エクイティを100%実現できません。そこで**プレイアビリティの低い弱いオフスート**はフォールドします。',
    },
    { t: 'range', spot: 'bb-vs-btn', caption: 'BB vs BTNオープン。半分以上のハンドで参加する' },
    { t: 'h', text: 'オープンしたポジションで変わる' },
    {
      t: 'compare',
      left: { title: 'BTN・SB のオープン', points: ['相手のレンジが広い', '最も広くディフェンスする'], verdict: 'good' },
      right: { title: 'UTG のオープン', points: ['相手のレンジが強い', 'ディフェンスは狭く、3bet も強い手中心'], verdict: 'bad' },
      caption: 'オープンした位置とサイズで、ディフェンスの幅は変わります。',
    },
    {
      t: 'warn',
      title: 'よくあるミス',
      text: '「BBだからもったいない」と何でもコールするのも、「弱い手だから」とすぐフォールドするのもミスです。相手のポジションとサイズから必要勝率を考えましょう。',
    },
    {
      t: 'estimate',
      q: 'COが3bbでオープン、他はフォールド。BBがコールするのに必要な勝率は？（ポット = 3 + 0.5 + 1 = 4.5bb）',
      min: 10,
      max: 50,
      step: 1,
      unit: '%',
      answer: 31,
      tolerance: 4,
      explain: 'コール額は2bb、コール後のポットは6.5bb。2 ÷ 6.5 ≒ 31%。2.5bbオープンより必要勝率が上がるので、ディフェンスはやや狭くなります。',
    },
    {
      t: 'quiz',
      q: 'BTNが2.5bbでオープン、SBはフォールド。あなたはBBでこの手を持っています。どうする？',
      hand: ['7h', '6h'],
      options: ['コール', 'フォールド'],
      answer: 0,
      explain: '76sは必要勝率27%を十分に超え、ストレートやフラッシュを作れるプレイアブルな手です。BBでは迷わずディフェンスします。',
    },
    {
      t: 'quiz',
      q: 'BTNが2.5bbでオープン。BBでフォールドが妥当なのはどの手？',
      options: ['98s', '55', 'QTo', '72o'],
      optionCards: [['9h', '8h'], ['5s', '5d'], ['Qc', 'Td'], ['7s', '2d']],
      answer: 3,
      explain: '72oはBTNの広いレンジに対しても勝率が低く、フロップ以降も先に行動する不利があるため、フォールドします。他の3つはコールで十分戦えます。',
    },
    {
      t: 'estimate',
      q: 'SBが3bbでオープン（ポットは 3 + 1 = 4bb）。BBがコールするのに必要な勝率は？',
      min: 10,
      max: 50,
      step: 1,
      unit: '%',
      answer: 33,
      tolerance: 4,
      explain: 'コール額は 3 − 1 = 2bb、コール後のポットは 6bb。2 ÷ 6 ≒ 33% です。BTNの2.5bbオープン（27%）より必要勝率が上がります。',
    },
  ],
};

export default lesson;
