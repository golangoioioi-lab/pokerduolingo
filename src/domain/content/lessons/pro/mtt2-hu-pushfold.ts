import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'mtt2-hu-pushfold',
  blocks: [
    { t: 'h', text: 'HU・10bb で K2o' },
    {
      t: 'play',
      title: 'HU の SB で K2o',
      hero: 'SB',
      heroCards: ['Kc', '2d'],
      villain: 'BB',
      villainCards: ['Ah', '7s'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 2.5,
          say: 'HU、ブラインド0.5/1bb、BBアンティ1bb、有効スタック10bb。あなたは SB（BTN）で K2o。',
          q: 'どうする？',
          options: [
            { label: 'オールイン', good: true, why: 'BB が約27%でしかコールしないなら、約73%降りて +2.5bb。EV は約 +1.1bb です。' },
            { label: 'フォールド', good: false, why: '0.5bb を捨てるだけです。HU・10bb の K2o は押す手です。' },
          ],
        },
        { street: 'フロップ', board: ['Kd', '9h', '4c'], pot: 21, say: 'BB は **A♥7♠** でコール。フロップで K のペアができました。' },
        { street: 'ターン', board: ['6s'], pot: 21, say: 'ターンは 6。' },
        { street: 'リバー', board: ['2h'], pot: 21, say: 'リバーは 2。K と 2 のツーペアです。' },
      ],
      outro: 'コールされると K2o は約32%しか勝てません。それでも、降りてもらえる分が損を上回ります。',
    },
    { t: 'h', text: 'オールインの EV' },
    {
      t: 'tree',
      root: 'HU・10bb・SBでK2o。BB は 22+, A2+, K8s+, K9o+, QTs+, QJo, JTs（約27%）でコール（フォールドとの差、bb）',
      options: [
        {
          label: 'オールイン',
          outcomes: [
            { label: 'BBが降りる', prob: 0.73, value: 2.5 },
            { label: 'コールされて勝つ', prob: 0.087, value: 11.5 },
            { label: 'コールされて負ける', prob: 0.183, value: -9.5 },
          ],
        },
        { label: 'フォールド', ev: 0 },
      ],
      caption: 'フォールドすると SB の0.5bb を失うので、各値はそれとの差',
    },
    {
      t: 'estimate',
      q: 'BB が降りる確率が60%まで下がると（コール時の勝率32%は同じ）、オールインの EV は？',
      min: -3, max: 4, step: 0.1, unit: 'bb', answer: 0.4, tolerance: 0.8,
      explain: 'コールされる40%のうち勝ち0.128、負け0.272。0.6 × 2.5 + 0.128 × 11.5 − 0.272 × 9.5 ≒ +0.39bb。減りますが、まだプラスです。',
    },
    { t: 'h', text: 'BB は43%あればコール' },
    {
      t: 'odds',
      pot: 3,
      bet: 9,
      equity: 41,
      caption: 'BB は追加で9bb を払い、21bb のポットを争う。必要勝率は約43%。勝率41%は Q7o が SB の約半分のレンジに対する目安',
    },
    {
      t: 'quiz',
      q: 'SB が手の約半分でオールイン。BB のあなたはこの手（勝率は約41%）。どうしますか？',
      hand: ['Qd', '7c'],
      options: ['コールする', 'フォールドする（必要な約43%に少し足りない）'],
      answer: 1,
      explain: 'Q7o の約41%は、必要な約43%に少し足りません。A や K を含む手、ペア、強い Q は足ります。',
    },
    {
      t: 'compare',
      left: { title: 'HU・15bb', points: ['ポット2.5bb に15bb を賭ける', 'コールされたら必ず負けるとき、必要な降りる率 約85%', 'オールインは手の半分前後'], verdict: 'neutral' },
      right: { title: 'HU・5bb', points: ['ポット2.5bb に5bb を賭ける', '同じ条件で必要な降りる率 約64%', 'ほぼ全部の手でオールイン'], verdict: 'good' },
      caption: '浅いほど賭け額がポットに対して小さく、両者ともレンジが広がる（目安）',
    },
    { t: 'h', text: 'BB としてコールする？' },
    {
      t: 'rapid',
      q: 'HU・10bb・BBアンティ1bb。SB が手の約半分でオールイン。BB のあなたはコールする？（必要な勝率は約43%）',
      choices: ['コール', 'フォールド'],
      items: [
        { cards: ['Ac', '2d'], answer: 0, why: 'A2o は約50%勝てます。' },
        { cards: ['7c', '2d'], answer: 1, why: '約30%しか勝てません。' },
        { cards: ['Kh', '8d'], answer: 0, why: 'K8o は約49%です。' },
        { cards: ['Jc', '3d'], answer: 1, why: 'J3o は約35%で足りません。' },
        { cards: ['5c', '5d'], answer: 0, why: 'ペアは約54%あります。' },
        { cards: ['9c', '4d'], answer: 1, why: '約32%で足りません。' },
        { cards: ['Qh', '9h'], answer: 0, why: 'Q9s は約49%です。' },
        { cards: ['8c', '3d'], answer: 1, why: '約31%で足りません。' },
        { cards: ['Jc', '6d'], answer: 1, why: 'J6o は約36%で足りません。' },
      ],
    },
    { t: 'warn', text: '数字はアンティやレンジの前提で変わる目安です。正確な数字はプッシュ／フォールドの計算ツールで確認します。' },
  ],
};

export default lesson;
