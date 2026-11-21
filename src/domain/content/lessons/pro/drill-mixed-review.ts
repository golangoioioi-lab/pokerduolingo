import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'drill-mixed-review',
  blocks: [
    { t: 'h', text: '総合問題：まずは即答' },
    {
      t: 'rapid',
      q: 'どの式を使うかを自分で選んで判断します。コールする？（後で勝てる額は考えない）',
      choices: ['コール', 'フォールド'],
      items: [
        { text: 'ターン・9アウツ・ポット20にベット20', answer: 1, why: '約18〜20% < 必要勝率33%。' },
        { text: 'リバー・ポット45にベット30・勝率35%', answer: 0, why: '必要勝率 30 ÷ 105 ≈ 29%。' },
        { text: 'フロップでオールイン・15アウツ・ポット20にベット30', answer: 0, why: '2枚で約54% > 必要勝率 30 ÷ 80 = 37.5%。' },
        { text: 'リバー・相手はバリュー12・ブラフ12・ポットベット', answer: 0, why: '勝率50% > 33%。' },
        { text: 'リバー・相手はバリュー20・ブラフ5・ハーフポット', answer: 1, why: '勝率20% < 25%。' },
        { text: 'ターン・4アウツ・ポット30にベット15', answer: 1, why: '約8〜9% < 25%。' },
      ],
    },
    { t: 'h', text: '式の早見表' },
    {
      t: 'table',
      head: ['知りたいこと', '式'],
      rows: [
        ['コールの必要勝率', 'ベット ÷（ポット + 2 × ベット）'],
        ['MDF（守る割合）', 'ポット ÷（ポット + ベット）'],
        ['α（ブラフに必要なフォールド率）', 'ベット ÷（ポット + ベット）'],
        ['ドローの完成率', '1枚：アウツ × 2　2枚：アウツ × 4'],
        ['コールのEV', '勝率 × 今のポット − 負ける確率 × コール額'],
        ['ブラフのEV', 'フォールド率 × ポット − コールされる確率 × ベット'],
      ],
    },
    { t: 'p', text: '「ポット」はすべてベット前の額。3つの割合の式は、分母に何が入るかで見分けます。' },
    { t: 'odds', pot: 45, bet: 30, equity: 35, caption: 'リバー、ポット45bbに30bb。必要勝率は約29%。' },
    {
      t: 'combos',
      groups: [
        { label: 'A8', hands: ['A8'] },
        { label: 'A3', hands: ['A3'] },
      ],
      dead: ['Ah', '8d', '3c', 'Ad', 'Kd'],
      caption: 'ボード A♥8♦3♣、あなたは A♦K♦。相手のツーペア A8・A3 のコンボ数。',
    },
    {
      t: 'tree',
      root: 'ポット30bbに20bbでブラフ、相手のフォールド率35%',
      options: [
        {
          label: 'ブラフ',
          outcomes: [
            { label: 'フォールド', prob: 0.35, value: 30 },
            { label: 'コールされる', prob: 0.65, value: -20 },
          ],
        },
        { label: 'チェックして諦める', ev: 0 },
      ],
      caption: 'α は40%。35%では届かず、EV は −2.5bb です。',
    },
    { t: 'h', text: '練習問題' },
    {
      t: 'estimate',
      q: 'ポット45bbに30bbのベット。レンジ全体で守るべき割合（MDF）は？',
      min: 0, max: 100, step: 1, unit: '%', answer: 60, tolerance: 3,
      explain: '45 ÷ 75 = 60%。40%は α、29%は必要勝率。何を聞かれているかを確かめます。',
    },
    {
      t: 'estimate',
      q: 'あなたは A♦K♦。相手のツーペア（A8・A3）は合計何コンボ？',
      hand: ['Ad', 'Kd'],
      board: ['Ah', '8d', '3c'],
      min: 0, max: 30, step: 1, unit: 'コンボ', answer: 12, tolerance: 1,
      explain: 'A は残り2枚、8 と 3 は3枚ずつ。2 × 3 + 2 × 3 = 12。18はあなたの A♦ を除き忘れた数字です。',
    },
    {
      t: 'estimate',
      q: 'ポット30bbに20bbでブラフ。相手のフォールド率が35%のとき、EVは？',
      min: -20, max: 20, step: 0.5, unit: 'bb', answer: -2.5, tolerance: 2,
      explain: '10.5 − 13 = −2.5bb。',
    },
    { t: 'h', text: 'もう一度：1ハンドで全部使う' },
    {
      t: 'play',
      title: 'ドローを追って、外れたら',
      hero: 'BB',
      heroCards: ['Qh', 'Jh'],
      villain: 'BTN',
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'BTN が 2.5bb オープン。あなたは BB でコール。' },
        {
          street: 'フロップ', board: ['Kh', '9h', '2c'], pot: 7.5,
          say: 'フラッシュドロー＋ガットショット（T）。チェックすると BTN が 2bb ベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'アウツはハート9 + T 3枚 = 12。1枚でも約25%、必要勝率は 2 ÷ 9.5 ≈ 21%。' },
            { label: 'フォールド', good: false, why: '12アウツに対して値段が安すぎます。' },
          ],
        },
        { street: 'ターン', board: ['4s'], pot: 9.5, say: '外れ。2人ともチェック。' },
        {
          street: 'リバー', board: ['3d'], pot: 9.5,
          say: 'また外れて Q ハイ。あなたが先に動きます。6bb なら BTN は約45%降りると読みます。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'Q ハイではほぼ勝てません。' },
            { label: '6bb でブラフ', good: true, why: 'α = 6 ÷ 15.5 ≈ 39% < 45%。EV ≈ 0.45 × 9.5 − 0.55 × 6 ≈ +1bb。' },
            { label: '19bb でブラフ', good: false, why: 'α は約67%。同じ45%なら EV ≈ −6bb です。' },
          ],
        },
      ],
      outro: 'フロップはアウツと必要勝率、リバーは α と読み。1ハンドの中で何度も数字を使います。',
    },
    {
      t: 'tip',
      title: 'おつかれさまでした',
      text: '実戦では細かい数字より「およそ何%か」を素早く出せることが大切です。迷った場面は後で式に当てはめて確かめてください。',
    },
    { t: 'try', text: 'エクイティ計算で、自分のドローの勝率を確かめてみましょう。', tab: 'equity' },
  ],
};

export default lesson;
