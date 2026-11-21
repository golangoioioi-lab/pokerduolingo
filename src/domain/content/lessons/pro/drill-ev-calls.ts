import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'drill-ev-calls',
  blocks: [
    { t: 'h', text: 'どれだけ得なコールか' },
    {
      t: 'outs',
      q: '相手は K♠K♦。リバーでフラッシュになるカードを全部タップ',
      hand: ['Ah', 'Qh'],
      board: ['Th', '6h', '2c', '3s'],
      target: 'フラッシュ',
      explain: 'ハート9枚。さらに A 3枚でも KK に勝てるので12アウツ、12 ÷ 44 ≈ 27% です。',
    },
    {
      t: 'tree',
      root: 'ポット20bbに相手が10bbベット（今のポット30bb）、勝率27%',
      options: [
        {
          label: 'コール',
          outcomes: [
            { label: '勝つ', prob: 0.27, value: 30 },
            { label: '負ける', prob: 0.73, value: -10 },
          ],
        },
        { label: 'フォールド', ev: 0 },
      ],
      caption: '0.27 × 30 − 0.73 × 10 ≈ +0.8bb。必要勝率25%をわずかに上回るぶんだけプラスです。',
    },
    { t: 'h', text: 'コールのEV' },
    { t: 'p', text: '必要勝率は「コールしてよいか」、EV は「どれだけ得か」を教えてくれます。ここではリバーまで追加のベットがない前提です。' },
    {
      t: 'formula',
      text: 'コールのEV = 勝率 × 今のポット −（1 − 勝率）× コール額',
      note: '今のポット = 元のポット + 相手のベット。「勝率 × コール後のポット − コール額」でも同じ',
    },
    {
      t: 'equity',
      players: [
        { label: 'あなた', cards: ['Ah', 'Qh'], pct: 27 },
        { label: '相手', cards: ['Ks', 'Kd'], pct: 73 },
      ],
      board: ['Th', '6h', '2c', '3s'],
      caption: 'ターンでナッツフラッシュドロー + A。12アウツで約27%。',
    },
    { t: 'h', text: '練習問題' },
    {
      t: 'estimate',
      q: 'ポット20bbに相手が10bbベット。勝率40%でコールしたときのEVは？',
      min: -20, max: 20, step: 1, unit: 'bb', answer: 6, tolerance: 2,
      explain: '今のポット30bb。0.4 × 30 − 0.6 × 10 = +6bb。+2bbは相手のベットを入れ忘れた計算です。',
    },
    {
      t: 'estimate',
      q: 'ポット50bbに相手が50bbベット。勝率25%でコールしたときのEVは？',
      min: -40, max: 40, step: 0.5, unit: 'bb', answer: -12.5, tolerance: 3,
      explain: '0.25 × 100 − 0.75 × 50 = −12.5bb。必要勝率33%に届きません。',
    },
    {
      t: 'estimate',
      q: 'リバー、ポット60bbに相手が40bbベット。あなたのブラフキャッチャーの勝率は35%です。コールのEVは？',
      min: -20, max: 40, step: 1, unit: 'bb', answer: 9, tolerance: 3,
      explain: '0.35 × 100 − 0.65 × 40 = 35 − 26 = +9bb。',
    },
    {
      t: 'quiz',
      q: 'どちらのコールのEVが大きい？　A：ポット10bbに10bbベット、勝率40%。B：ポット30bbに10bbベット、勝率25%。',
      options: ['B（+2.5bb）', 'A（+2bb）', '同じ', 'どちらもマイナス'],
      answer: 0,
      explain: 'A：0.4 × 20 − 0.6 × 10 = +2bb。B：0.25 × 40 − 0.75 × 10 = +2.5bb。勝率が低くても、値段が安ければ EV が大きくなります。',
    },
    { t: 'h', text: 'もう一度：EVの符号を即答' },
    {
      t: 'rapid',
      q: 'このコールの EV は？',
      choices: ['プラス', 'マイナス'],
      items: [
        { text: 'ポット20・ベット10・勝率40%', answer: 0, why: '+6bb。' },
        { text: 'ポット50・ベット50・勝率25%', answer: 1, why: '−12.5bb。' },
        { text: 'ポット60・ベット40・勝率35%', answer: 0, why: '+9bb。' },
        { text: 'ポット10・ベット10・勝率25%', answer: 1, why: '0.25 × 20 − 0.75 × 10 = −2.5bb。' },
        { text: 'ポット30・ベット10・勝率25%', answer: 0, why: '0.25 × 40 − 0.75 × 10 = +2.5bb。' },
        { text: 'ポット40・ベット30・勝率20%', answer: 1, why: '0.2 × 70 − 0.8 × 30 = −10bb。' },
      ],
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'コールのEV = 勝率 × 今のポット − 負ける確率 × コール額。かけ算2回と引き算1回です。',
    },
  ],
};

export default lesson;
