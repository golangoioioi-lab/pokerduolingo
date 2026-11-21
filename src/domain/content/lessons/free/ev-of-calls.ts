import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'ev-of-calls',
  blocks: [
    { t: 'h', text: 'コールは得か損か' },
    {
      t: 'rapid',
      q: 'リバーでベットされた。勝率はこれだけ。コールする？',
      choices: ['コール', 'フォールド'],
      items: [
        { text: 'ポット100・ベット50・勝率30%', answer: 0, why: '必要勝率は 50 ÷ 200 = 25%。足ります。' },
        { text: 'ポット100・ベット100・勝率25%', answer: 1, why: '必要勝率は 100 ÷ 300 ≈ 33%。足りません。' },
        { text: 'ポット60・ベット20・勝率25%', answer: 0, why: '必要勝率は 20 ÷ 100 = 20%。' },
        { text: 'ポット40・ベット40・勝率40%', answer: 0, why: '必要勝率は 40 ÷ 120 ≈ 33%。' },
        { text: 'ポット30・ベット30・勝率20%', answer: 1, why: '必要勝率は約33%。' },
        { text: 'ポット50・ベット25・勝率15%', answer: 1, why: '必要勝率は 25 ÷ 100 = 25%。' },
      ],
    },
    { t: 'h', text: 'コールのEVの式' },
    {
      t: 'formula',
      text: 'EV(コール) = エクイティ × (コール後のポット) − コール額',
      note: 'コール後のポット = 元のポット + 相手のベット + 自分のコール',
    },
    { t: 'p', text: 'フォールドのEVは0です。すでにポットに入れたチップは数えません。EVが0になる勝率が、ポットオッズの必要勝率です。' },
    { t: 'odds', pot: 100, bet: 50, equity: 30, caption: 'ポット100bbに50bb。必要勝率25%に対してエクイティ30%です。' },
    {
      t: 'tree',
      root: 'リバー ポット100bb に 50bb ベット',
      options: [
        { label: 'フォールド', ev: 0 },
        {
          label: 'コール（エクイティ30%）',
          outcomes: [{ label: '勝つ', prob: 0.3, value: 150 }, { label: '負ける', prob: 0.7, value: -50 }],
          note: '+10bb',
        },
      ],
      caption: '0.30 × 200 − 50 = +10bb。',
    },
    {
      t: 'estimate',
      q: 'リバーでポット60bb、相手が40bbベット。エクイティ30%のとき、コールのEVは？',
      min: -20, max: 20, step: 1, unit: 'bb', answer: 2, tolerance: 2,
      explain: 'コール後のポット = 60 + 40 + 40 = 140bb。EV = 0.30 × 140 − 40 = +2bb。わずかにプラスです。',
    },
    { t: 'h', text: 'フロップでオールインされたら' },
    { t: 'p', text: 'ポット20bbに相手が30bbのオールイン。相手はKQのトップペアです。まずアウツを数えます。' },
    {
      t: 'outs',
      q: 'フラッシュになるカードを全部タップ',
      hand: ['Ah', '5h'],
      board: ['Kh', '7h', '2c'],
      target: 'フラッシュ',
      explain: 'ハートは残り9枚。さらに A 3枚でも KQ に勝てるので、アウツは合計12枚です。',
    },
    { t: 'odds', pot: 20, bet: 30, equity: 45, caption: '12アウツを2枚で引く確率は約45%（目安）。必要勝率 37.5% を超えます。' },
    {
      t: 'estimate',
      q: 'このハンドのコールのEVは？（エクイティ45%、コール後のポット80bb）',
      hand: ['Ah', '5h'], board: ['Kh', '7h', '2c'],
      min: -20, max: 20, step: 1, unit: 'bb', answer: 6, tolerance: 3,
      explain: 'EV = 0.45 × 80 − 30 = +6bb。フラッシュだけ（約35%）なら 0.35 × 80 − 30 = −2bb。A の3枚でコールとフォールドが入れ替わります。',
    },
    {
      t: 'warn',
      title: 'オールインでないときは目安',
      text: 'この式が正確なのは、コール後に追加のベットがない場合です。',
    },
    { t: 'h', text: 'もう一度：ドローで払うか' },
    {
      t: 'play',
      title: 'BB でフラッシュドロー',
      hero: 'BB',
      heroCards: ['8h', '7h'],
      villain: 'BTN',
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: '有効スタック25bb。BTN が 2.5bb オープン、あなたは BB でコール。' },
        {
          street: 'フロップ', board: ['Kh', '9h', '2c'], pot: 7.5,
          say: 'フラッシュドロー（9アウツ）。チェックすると BTN が 2bb ベット。',
          q: 'コールの必要勝率は 2 ÷ 9.5 ≈ 21%。どうする？',
          options: [
            { label: 'コール', good: true, why: '2枚引ければ約35%。必要勝率21%を大きく超えます。' },
            { label: 'フォールド', good: false, why: '安い値段で約35%の勝率を捨てています。' },
          ],
        },
        {
          street: 'ターン', board: ['4d'], pot: 30,
          say: '外れ。BTN が残り20.5bb をオールイン。',
          q: '必要勝率は 20.5 ÷ 50.5 ≈ 41%。どうする？',
          options: [
            { label: 'コール', good: false, why: '残り1枚で引く確率は 9 ÷ 46 ≈ 20%。EV ≈ 0.20 × 50.5 − 20.5 ≈ −10bb。' },
            { label: 'フォールド', good: true, why: '勝率約20%では41%に届きません。' },
          ],
        },
      ],
      outro: '同じドローでも、値段しだいでコールにもフォールドにもなります。',
    },
    { t: 'try', text: 'エクイティ計算で、自分のハンドの勝率を確かめてからEVを計算してみよう', tab: 'equity' },
  ],
};

export default lesson;
