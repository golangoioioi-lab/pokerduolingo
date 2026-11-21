import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'drill-ev-bluffs',
  blocks: [
    { t: 'h', text: 'このブラフのEVは？' },
    {
      t: 'rapid',
      q: 'コールされたら勝てない手でブラフ。EV は？',
      choices: ['プラス', 'マイナス'],
      items: [
        { text: 'ポット30・ブラフ20・50%降りる', answer: 0, why: '15 − 10 = +5bb。' },
        { text: 'ポット40・ブラフ40・40%降りる', answer: 1, why: '16 − 24 = −8bb。' },
        { text: 'ポット10・ブラフ5・40%降りる', answer: 0, why: '4 − 3 = +1bb。' },
        { text: 'ポット10・ブラフ20・60%降りる', answer: 1, why: '6 − 8 = −2bb。' },
        { text: 'ポット20・ブラフ10・25%降りる', answer: 1, why: '5 − 7.5 = −2.5bb。' },
        { text: 'ポット20・ブラフ20・60%降りる', answer: 0, why: '12 − 8 = +4bb。' },
      ],
    },
    { t: 'h', text: 'ブラフのEV' },
    { t: 'p', text: '降りたときに取れるポットと、コールされたときに失うベットの比較です。チェックして諦めるEVは0とします。' },
    {
      t: 'formula',
      text: 'ブラフのEV = フォールド率 × ポット −（1 − フォールド率）× ベット額',
      note: 'ポットはベット前の額。EV が0になるフォールド率が α = ベット ÷（ポット + ベット）',
    },
    {
      t: 'tree',
      root: 'リバー、ポット10bb。相手のフォールド率45%',
      options: [
        {
          label: '7bbでブラフ',
          outcomes: [
            { label: 'フォールド', prob: 0.45, value: 10 },
            { label: 'コールされる', prob: 0.55, value: -7 },
          ],
        },
        { label: 'チェックして諦める', ev: 0 },
      ],
      caption: '4.5 − 3.85 ≈ +0.65bb。α は 7 ÷ 17 ≈ 41% なので、わずかにプラスです。',
    },
    {
      t: 'tree',
      root: 'リバー、ポット10bb。オーバーベットで相手のフォールド率60%',
      options: [
        {
          label: '20bbでブラフ',
          outcomes: [
            { label: 'フォールド', prob: 0.6, value: 10 },
            { label: 'コールされる', prob: 0.4, value: -20 },
          ],
        },
        { label: 'チェックして諦める', ev: 0 },
      ],
      caption: '6 − 8 = −2bb。フォールド率が上がっても、α の約67%に届かなければマイナスです。',
    },
    { t: 'h', text: '練習問題' },
    {
      t: 'estimate',
      q: 'ポット30bbに20bbでブラフするとき、EVがちょうど0になるフォールド率は？',
      min: 0, max: 100, step: 1, unit: '%', answer: 40, tolerance: 3,
      explain: '20 ÷ 50 = 40%。67%や29%は分母の取り違えです。',
    },
    {
      t: 'quiz',
      q: 'ポット20bb、相手はサイズに関係なく50%降りるとします。10bbのブラフと20bbのブラフ、EVが高いのは？',
      options: ['10bb（+5bb）', '20bb（+5bb）', '同じ（どちらも+5bb）', 'どちらもマイナス'],
      answer: 0,
      explain: '10bb：+5bb。20bb：10 − 10 = 0bb。フォールド率が同じなら小さいサイズが得です。',
    },
    {
      t: 'estimate',
      q: 'ポット10bbに5bbのブラフを、相手が40%降りる場面で100回打ちました。合計の期待収支は？',
      min: -100, max: 300, step: 10, unit: 'bb', answer: 100, tolerance: 20,
      explain: '1回あたり 4 − 3 = +1bb。100回で +100bb です。',
    },
    { t: 'h', text: 'もう一度：サイズを選んで打つ' },
    {
      t: 'play',
      title: '外れたフラッシュドロー',
      hero: 'CO',
      heroCards: ['6h', '5h'],
      villain: 'BB',
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'CO で 2.5bb オープン、BB がコール。' },
        { street: 'フロップ', board: ['Qh', '8h', '3c'], pot: 11.5, say: 'BB チェック、あなたが 3bb ベット、BB コール。' },
        { street: 'ターン', board: ['2s'], pot: 19.5, say: 'BB チェック、あなたが 4bb ベット、BB コール。' },
        {
          street: 'リバー', board: ['7d'], pot: 19.5,
          say: 'フラッシュは外れ、6ハイ。BB はチェック。10bb なら40%、40bb なら55%降りると読みます。',
          q: 'どうする？',
          options: [
            { label: 'チェックして諦める', good: false, why: 'EV 0。10bb のブラフならプラスです。' },
            { label: '10bb でブラフ', good: true, why: '0.4 × 19.5 − 0.6 × 10 ≈ +1.8bb。α は約34%。' },
            { label: '40bb でブラフ', good: false, why: '0.55 × 19.5 − 0.45 × 40 ≈ −7.3bb。α は約67%です。' },
          ],
        },
      ],
      outro: '大きく打てば多く降りても、α がそれ以上に上がることがあります。サイズごとに EV を比べて選びます。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'ブラフのEV = 降りる確率 × ポット − コールされる確率 × ベット。同じフォールド率なら小さいサイズが得です。',
    },
  ],
};

export default lesson;
