import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-4bet-pots',
  blocks: [
    {
      t: 'p',
      text: '4betポットは、3betに対してさらにレイズが入り、コールで終わったポットです。SPRは約2以下まで下がり、フロップに来た時点でほぼスタックを入れる前提になります。頻度は少ないものの、間違えたときの損が大きいポットです。',
    },
    { t: 'h', text: '4betポットの数字' },
    {
      t: 'p',
      text: 'COが2.5bbオープン、BTNが8bbに3bet、COが20bbに4bet、BTNがコール。ブラインドは降りています。ポットは 20 + 20 + 1.5 = 41.5bb、残りは80bbで、SPRは約1.9です。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'SRP', pot: 5.5, stack: 97.5 },
        { label: '3betポット', pot: 17.5, stack: 92 },
        { label: '4betポット', pot: 41.5, stack: 80 },
      ],
      caption: 'SPRは約17.7 → 約5.3 → 約1.9。4betポットでは、フロップのc-bet1回でスタックの大半が動きます。',
    },
    { t: 'h', text: '4bet前の判断' },
    {
      t: 'p',
      text: 'BTNがCOの20bbの4betにコールするとき、追加で入れる額は12bb、ポットは 20 + 8 + 1.5 = 29.5bbです。必要勝率は 12 ÷ (29.5 + 12) ≈ 29% です。',
    },
    {
      t: 'odds',
      pot: 17.5,
      bet: 12,
      equity: 35,
      caption: '4bet後の総ポット29.5bbからコール額12bbを引いた17.5bbを入力。必要勝率は約29%。',
    },
    { t: 'h', text: 'フロップでの方針' },
    {
      t: 'list',
      items: [
        '**4bettor**：AA〜KKやAKが多いので、ドライなボードでは小さくc-betまたはチェック。ブラフはA5sなどの手で選んで打つ。',
        '**コーラー**：QQ・AKなど、ボードにヒットした手で続ける。ヒットしなければフォールド。',
        '**全額を入れる基準**：SPR2以下なら、トップペア以上でほぼコミット。',
      ],
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 41.5, actions: ['COが2.5bbオープン', 'BTNが8bbに3bet', 'COが20bbに4bet', 'BTNがコール'] },
        { street: 'フロップ', board: ['Ks', '7d', '2c'], pot: 41.5, actions: ['COがc-bet 10bb', 'BTNがフォールド'] },
      ],
      caption: '4betポットでも、ボードが4bettorに有利なら小さなc-betでポットを取れます。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: '4betポットは、プリフロップの段階でレンジの上限が高く、ポストフロップではほとんど迷いません。「ヒットしたら全額、外れたらフォールド」が基本です。',
    },
    {
      t: 'estimate',
      q: '4betポット（ポット41.5bb、残り80bb）のSPRはいくつ？',
      min: 0,
      max: 10,
      step: 0.1,
      answer: 1.9,
      tolerance: 0.5,
      explain: '80 ÷ 41.5 ≈ 1.93 なので約1.9です。',
    },
    {
      t: 'estimate',
      q: 'COの20bb 4betに対し、BTNは8bbから12bb追加してコールします。ポットは29.5bb。必要勝率は？',
      min: 0,
      max: 60,
      step: 1,
      unit: '%',
      answer: 29,
      tolerance: 5,
      explain: '12 ÷ (29.5 + 12) = 12 ÷ 41.5 ≈ 29% です。',
    },
    {
      t: 'quiz',
      q: '4betポットのコーラー（SPR約1.9）。K♠7♦2♣で相手が10bbをc-betしました。続けるのはどちらの手？',
      options: ['K♦Q♦（トップペア）', 'J♥T♥（ペアなし）'],
      optionCards: [['Kd', 'Qd'], ['Jh', 'Th']],
      board: ['Ks', '7d', '2c'],
      answer: 0,
      explain: '4betポットは「ヒットしたら全額、外れたらフォールド」です。SPRが低いのでトップペアは続け、ペアのない手は降ります。',
    },
    {
      t: 'quiz',
      q: 'あなたは4bettorでA♠5♠。K♠7♦2♣でBTNがチェックしました（ポット41.5bb）。基本の方針は？',
      options: ['約10bbの小さなc-betを打つ', 'ポットサイズの大きなベットを打つ', 'すぐオールインする', '必ずフォールドする'],
      hand: ['As', '5s'],
      board: ['Ks', '7d', '2c'],
      answer: 0,
      explain: 'ボードは4bettorに有利です。小さなc-betで多くのポットを取れます。A5sはAのブロッカーを持つので、ブラフとして向いています。',
    },
  ],
};

export default lesson;
