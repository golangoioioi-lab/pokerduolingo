import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'equity-realization',
  blocks: [
    { t: 'h', text: 'まずやってみる：勝率どおりに稼げる？' },
    { t: 'p', text: '計算機の勝率は「2人ともリバーまで進む」前提の数字です。実際には途中で降りたり、完成して大きく勝ったりします。' },
    {
      t: 'rapid',
      q: 'BBでBTNのオープンにコール。勝率を実際の取り分にしやすい？',
      choices: ['しやすい', 'しにくい'],
      items: [
        { cards: ['7h', '6h'], answer: 0, why: 'ドローになりやすく、完成すれば大きく勝てます。' },
        { cards: ['Kd', '7c'], answer: 1, why: 'Kのペアでもキッカー負けしやすく、フロップで降りる場面が多い手です。' },
        { cards: ['As', '5s'], answer: 0, why: 'ナッツフラッシュやホイールを狙えます。' },
        { cards: ['Qs', '8d'], answer: 1, why: '離れたオフスートはプレイしにくい手です。' },
        { cards: ['Th', '9h'], answer: 0, why: 'ストレートとフラッシュの両方を狙えます。' },
        { cards: ['Jc', '4d'], answer: 1, why: 'ペアになっても弱く、ドローにもなりにくい手です。' },
        { text: '同じ手で、インポジションかつ自分が最後にレイズした', answer: 0, why: '後から行動でき、主導権もあるので実現しやすくなります。' },
        { text: '同じ手で、アウトオブポジションかつ相手が主導権を持つ', answer: 1, why: 'ベットに押されて降りる場面が増えます。' },
      ],
    },
    { t: 'h', text: '実現率（EQR）で補正する' },
    { t: 'p', text: '勝率のうち実際に取り分にできる割合を**エクイティ実現率（EQR）**と呼びます。' },
    { t: 'formula', text: '実現エクイティ ≒ エクイティ × EQR', note: 'EQRが100%を超えれば勝率以上に稼げる' },
    {
      t: 'compare',
      left: {
        title: 'K7o：実現しにくい',
        cards: ['Kd', '7c'],
        verdict: 'bad',
        points: ['ドミネイトされやすい', '勝つときは小さく、負けるときは大きい'],
      },
      right: {
        title: '76s：実現しやすい',
        cards: ['7h', '6h'],
        verdict: 'good',
        points: ['ドローになりやすい', '完成すれば大きく勝てる'],
      },
      caption: 'BBでBTNのオープンを受けたとき。',
    },
    { t: 'h', text: 'コール判断に入れる' },
    { t: 'p', text: 'BTNが2.5bbにオープンし、SBが降りました。BBは1.5bbを足してコールし、ポットは5.5bbになります。' },
    {
      t: 'estimate',
      q: 'BBのコールに必要な勝率は？（1.5bbを足して、コール後ポット5.5bb）',
      hand: ['Kd', 'Jc'],
      min: 0,
      max: 60,
      step: 1,
      unit: '%',
      answer: 27,
      tolerance: 5,
      explain: '1.5 ÷ 5.5 ≒ 27.3%です。',
    },
    {
      t: 'tree',
      root: 'BBで1.5bbを足してコール（コール後ポット5.5bb、エクイティ35%）',
      options: [
        { label: 'フォールド', ev: 0 },
        {
          label: 'コール（EQR 70%、実現24.5%）',
          outcomes: [
            { label: '取り分にできる', prob: 0.245, value: 4 },
            { label: '取りきれない', prob: 0.755, value: -1.5 },
          ],
          note: '必要勝率27.3%に届かない',
        },
        {
          label: 'コール（EQR 85%、実現29.75%）',
          outcomes: [
            { label: '取り分にできる', prob: 0.2975, value: 4 },
            { label: '取りきれない', prob: 0.7025, value: -1.5 },
          ],
          note: '必要勝率を上回る',
        },
      ],
      caption: '実現エクイティを勝つ確率に見立てた簡略計算。同じ35%でもEQRで結論が変わる。',
    },
    {
      t: 'estimate',
      q: 'エクイティ40%、EQR 75%。実現エクイティは？（必要勝率は27.3%）',
      hand: ['Ah', 'Td'],
      min: 0,
      max: 60,
      step: 1,
      unit: '%',
      answer: 30,
      tolerance: 5,
      explain: '40% × 75% = 30%。必要な27.3%を上回るので、コールできます。',
    },
    { t: 'h', text: 'もう一度やる' },
    {
      t: 'play',
      title: 'BBで 7♥6♥',
      hero: 'BB',
      heroCards: ['7h', '6h'],
      villain: 'BTN',
      villainCards: ['As', '8s'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'BTNが2.5bbでオープン、SBはフォールド。あなたはBBで 7♥6♥。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: '必要勝率は約27%。実現しやすい手なので十分です。' },
            { label: 'フォールド', good: false, why: 'スーテッドコネクターはBBで守りたい手です。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['8h', '5c', '2d'],
          pot: 7.5,
          say: 'フロップ 8♥5♣2♦ でオープンエンド。あなたはチェックし、BTNが2bbベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'アウツ8枚。必要勝率は約21%で、十分足ります。' },
            { label: 'チェックレイズ', good: true, why: 'セミブラフのレイズも有力です。' },
            { label: 'フォールド', good: false, why: '実現しやすいドローを捨てることになります。' },
          ],
        },
        { street: 'ターン', board: ['9c'], pot: 9.5, say: 'あなたはコール。ターン9♣でストレート完成。あなたはチェックし、BTNもチェック。' },
        {
          street: 'リバー',
          board: ['Ks'],
          pot: 9.5,
          say: 'リバーK♠。あなたが先に行動します。',
          q: 'どうする？',
          options: [
            { label: '6bbベット', good: true, why: 'BTNの8xや9xから払ってもらえます。' },
            { label: 'チェック', good: false, why: 'BTNはターンでチェックしており、打ってくれるとは限りません。' },
          ],
        },
      ],
      outro: 'BTNはA8でコール。完成すれば大きく勝てる手は、勝率以上に稼げます。',
    },
    { t: 'tip', text: 'インポジションで主導権を持つ手は、EQRが100%を超えることもあります。BTNのオープンレンジが広くても成り立つ理由の一つです。' },
  ],
};

export default lesson;
