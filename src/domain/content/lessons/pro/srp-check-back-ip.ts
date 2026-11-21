import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'srp-check-back-ip',
  blocks: [
    { t: 'h', text: '打たずに進んでみる' },
    {
      t: 'play',
      title: 'BTN で 7♦7♠、T-9-6',
      hero: 'BTN',
      heroCards: ['7d', '7s'],
      villain: 'BB',
      steps: [
        {
          street: 'フロップ',
          board: ['Th', '9h', '6c'],
          pot: 5.5,
          say: 'BTN オープン、BB コール。フロップは **T♥9♥6♣**。BB はチェック。',
          q: 'ミドルペア。どうする？',
          options: [
            { label: 'チェックバック', good: true, why: '打っても強い手にしかコールされず、弱い手は降りるだけです。' },
            { label: '約75%（4bb）ベット', good: false, why: 'レイズされると困り、降ろしたい手もほとんどいません。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2d'],
          pot: 5.5,
          say: 'ターンは **2♦**。BB はまたチェック。',
          q: 'どうする？',
          options: [
            { label: '約半ポット（2.75bb）ベット', good: true, why: '2回チェックした BB は弱く見え、A ハイや 6x から取れます。' },
            { label: 'チェック', good: true, why: '僅差です。ショーダウン重視でもう一度チェックも成り立ちます。' },
            { label: 'ポットの2倍', good: false, why: '大きすぎると強い手にしか呼ばれません。' },
          ],
        },
      ],
      outro: 'チェックバックは諦めではなく、ポットを小さく保ってショーダウンへ進む選択です。',
    },
    { t: 'h', text: 'チェックバックの理由' },
    {
      t: 'list',
      items: [
        '**ポットコントロール**：中くらいの手で大きなポットを作らない。',
        '**エクイティの実現**：レイズで降ろされるより、無料でカードを見る。',
        '**レンジの保護**：チェックにも強い手を混ぜ、狙われにくくする。',
      ],
    },
    {
      t: 'compare',
      left: {
        title: 'チェックバック向き',
        cards: ['7d', '7s'],
        board: ['Th', '9h', '6c'],
        points: ['ショーダウンバリューが少しある', '打つと強い手だけが残る'],
        verdict: 'good',
      },
      right: {
        title: 'ベット向き',
        cards: ['Ah', '5h'],
        board: ['Th', '9h', '6c'],
        points: ['ナッツフラッシュドロー', '降ろせて、呼ばれても勝ち目がある'],
        verdict: 'good',
      },
    },
    {
      t: 'tree',
      root: 'T♥9♥6♣、ポット5.5bb。7♦7♠で4.1bet（約75%）かチェックか',
      options: [
        {
          label: '4.1bbをベット',
          outcomes: [
            { label: '弱い手が降りる', prob: 0.35, value: 5.5 },
            { label: '強い手にコール・レイズされる', prob: 0.45, value: -4.1 },
            { label: '同程度の手にコールされ、後で勝つ', prob: 0.2, value: 6.0 },
          ],
        },
        { label: 'チェックバック', ev: 0.8, note: '安く見て、ショーダウンで一部勝つ' },
      ],
      caption: '数字は単純化した例です。降ろせる手が少なければ、チェックが有利になります。',
    },
    {
      t: 'estimate',
      q: 'このボードで、BTNのc-bet頻度の目安は？',
      board: ['Th', '9h', '6c'],
      min: 0,
      max: 100,
      step: 5,
      unit: '%',
      answer: 35,
      tolerance: 15,
      explain: 'BB にもストレートやドローが多く、3〜4割程度（目安）まで下がります。',
    },
    {
      t: 'quiz',
      q: 'T♥9♥6♣で、BTNがチェックバックに回しやすい手は？',
      board: ['Th', '9h', '6c'],
      options: ['A♥5♥', '9♣9♦', '7♦7♠', '8♦7♦'],
      optionCards: [['Ah', '5h'], ['9c', '9d'], ['7d', '7s'], ['8d', '7d']],
      answer: 2,
      explain: 'ミドルペアはチェックバック。ドロー、セット、ストレートはベットに回します。',
    },
    { t: 'h', text: 'もう一度：打つか、回すか' },
    {
      t: 'rapid',
      q: 'BTN（IP）、BB がチェック。フロップは？',
      choices: ['ベット', 'チェックバック'],
      items: [
        { cards: ['7d', '7s'], board: ['Th', '9h', '6c'], answer: 1, why: '中くらいの手。安く見ます。' },
        { cards: ['Ah', '5h'], board: ['Th', '9h', '6c'], answer: 0, why: 'ナッツドローはベットの代表です。' },
        { cards: ['9c', '9d'], board: ['Th', '9h', '6c'], answer: 0, why: 'セットはドローから料金を取ります。' },
        { cards: ['Ad', '5c'], board: ['Jh', '9h', '8c'], answer: 1, why: '当たりもドローもなく、降ろせる相手も少ないです。' },
        { cards: ['Kd', 'Td'], board: ['Th', '9h', '6c'], answer: 0, why: '強いトップペアは価値を取ります。' },
        { cards: ['6s', '6d'], board: ['8s', '7s', '6c'], answer: 0, why: 'セット。濡れたボードでは打ちます。' },
      ],
    },
  ],
};

export default lesson;
