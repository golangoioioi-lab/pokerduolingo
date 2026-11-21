import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-4bet-pots',
  blocks: [
    { t: 'h', text: 'まず直感で' },
    {
      t: 'rapid',
      q: '4betポットのコーラー（SPR 約1.9）。相手の10bb c-betに続ける？',
      choices: ['続ける', '降りる'],
      items: [
        { cards: ['Kd', 'Qd'], board: ['Ks', '7d', '2c'], answer: 0 },
        { cards: ['Jh', 'Th'], board: ['Ks', '7d', '2c'], answer: 1, why: 'ペアもドローもありません。' },
        { cards: ['Ah', 'Kc'], board: ['Ks', '7d', '2c'], answer: 0 },
        { cards: ['7c', '7h'], board: ['Ks', '7d', '2c'], answer: 0 },
        { cards: ['6h', '5h'], board: ['Ks', '7d', '2c'], answer: 1, why: 'ペアもドローもありません。' },
        { cards: ['Qs', 'Qh'], board: ['Ks', '7d', '2c'], answer: 0, why: '必要勝率は約16%。ブラフに勝つQQは続けます。' },
        { cards: ['9c', '8c'], board: ['Ks', '7d', '2c'], answer: 1, why: 'ガットショットもない外れた手です。' },
        { cards: ['Ac', 'Kh'], board: ['Kd', '9h', '4s'], answer: 0 },
      ],
    },
    { t: 'h', text: '4betポットの数字' },
    {
      t: 'p',
      text: 'COが2.5bbでオープン、BTNが8bbに3bet、COが20bbに4bet、BTNがコール。ポットは41.5bb、残り80bbで、SPRは約1.9です。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'SRP', pot: 5.5, stack: 97.5 },
        { label: '3betポット', pot: 17.5, stack: 92 },
        { label: '4betポット', pot: 41.5, stack: 80 },
      ],
      caption: 'SPRは約18 → 約5 → 約2。4betポットはc-bet1回でスタックの大半が動きます。',
    },
    {
      t: 'estimate',
      q: '4betポット（ポット41.5bb、残り80bb）のSPRはいくつ？',
      min: 0,
      max: 10,
      step: 0.1,
      answer: 1.9,
      tolerance: 0.5,
      explain: '80 ÷ 41.5 ≈ 1.9 です。',
    },
    {
      t: 'odds',
      pot: 17.5,
      bet: 12,
      equity: 35,
      caption: 'BTNがCOの4bet（20bb）にコールするとき、追加は12bb。必要勝率は約29%です。',
    },
    {
      t: 'p',
      text: 'フロップでは「当たったら全額、外れたらフォールド」が基本です。4bettorはドライなボードで小さくc-betし、ブラフはA5sのようなブロッカー付きの手を選びます。',
    },
    { t: 'h', text: '1ハンドで体験' },
    {
      t: 'play',
      title: 'COでAKを4bet',
      hero: 'CO',
      heroCards: ['As', 'Kd'],
      villain: 'BTN',
      villainCards: ['Kc', 'Qc'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 12,
          say: 'あなたはCOで **A♠K♦** を2.5bbでオープン。BTNが8bbに3bet。',
          q: 'どうする？',
          options: [
            { label: '20bbに4bet', good: true, why: 'AKは4betでポットを大きくするのが基本です。' },
            { label: 'コール', good: false, why: 'コールも混ぜますが、基本は4betです。' },
            { label: 'フォールド', good: false, why: 'AKを降りるのは降りすぎです。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Kh', '7d', '2c'],
          pot: 41.5,
          say: 'BTNがコール。ポット41.5bb、SPR 約1.9。あなたが先に行動します。',
          q: 'トップペア・トップキッカー。どうする？',
          options: [
            { label: '10bbをc-bet', good: true, why: '小さく打てば、Kxやペアが続けてくれます。' },
            { label: '80bbオールイン', good: false, why: 'KQ以外の弱い手を降ろしてしまいます。' },
            { label: 'チェック', good: false, why: '悪くはありませんが、Kxから取れる分を逃しやすくなります。' },
          ],
        },
        {
          street: 'フロップ',
          pot: 131.5,
          say: 'BTNが残り80bbのオールイン。',
          q: 'コール70bb、必要勝率は約35%。どうする？',
          options: [
            { label: 'コール', good: true, why: 'SPR 約2のトップペア・トップキッカーは全額の手です。' },
            { label: 'フォールド', good: false, why: '4betポットでこの手を降りる理由はありません。' },
          ],
        },
        { street: 'ターン', board: ['5s'], pot: 201.5, say: '全額が入りました。ターンは5。' },
        { street: 'リバー', board: ['9h'], pot: 201.5, say: 'リバーは9。ショーダウンです。' },
      ],
      outro: 'BTNはKQでした。4betポットでは、当たった手で迷わず全額を入れます。',
    },
  ],
};

export default lesson;
