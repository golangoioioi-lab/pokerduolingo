import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-cbet-ip',
  blocks: [
    {
      t: 'p',
      text: '3betした側がインポジションにいる場面です。COがオープンし、BTNが3bet、COがコールしてフロップに進みます。BTNは主導権もポジションも持つ、最も有利な形です。',
    },
    { t: 'h', text: 'なぜ小さく高頻度で打てるのか' },
    {
      t: 'p',
      text: 'COはAAやKKの多くを4betに回すので、コールレンジは上限が低く、ペアやスーテッドコネクターが中心です。BTNはAA〜KKやAKを含むので、AやKハイのボードで大きなレンジ優位があります。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'KK', hands: ['KK'] },
        { label: 'AK', hands: ['AK'] },
      ],
      dead: ['Ks', '7d', '2c'],
      caption: 'K♠7♦2♣で3bettorが持つKK・AKの例。KKは3コンボ、AKは12コンボ（K♠を除く）。',
    },
    {
      t: 'p',
      text: '高くてドライなボードでは、約25〜33%の小さなc-betを高頻度（目安：6〜7割）で打ちます。相手のレンジ全体に圧力をかけるのに、大きなサイズは必要ありません。',
    },
    {
      t: 'odds',
      pot: 17.5,
      bet: 5.8,
      equity: 20,
      caption: '約33%（5.8bb）のc-bet。コーラーの必要勝率は約20%。ほとんどのペアとドローが続ける価格です。',
    },
    { t: 'h', text: '大きいサイズに切り替えるとき' },
    {
      t: 'p',
      text: 'T♥9♥6♣のようなつながったボードでは、コーラーにも強い手が増えます。サイズを約66%に上げ、頻度を下げて、バリューとドロー中心に絞ります。',
    },
    {
      t: 'pot',
      steps: [
        { label: '3betポット（CO対BTN）', pot: 17.5, stack: 92 },
        { label: 'フロップ 5.8bet・コール', pot: 29.1, stack: 86.2 },
        { label: 'ターン 14.5bet・コール', pot: 58.1, stack: 71.7 },
      ],
      caption: '33%→50%の進め方。リバーのSPRは約1.2まで下がります。',
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 17.5, actions: ['COが2.5bbオープン', 'BTN（A♥Q♣）が8bbに3bet', 'COがコール'] },
        { street: 'フロップ', board: ['Ks', '7d', '2c'], pot: 17.5, actions: ['COがチェック', 'BTN：5.8bbをc-bet', 'COがフォールド'] },
      ],
      caption: '3betポットでも、小さなc-betで多くのポットが取れます。',
    },
    {
      t: 'tip',
      title: 'ポイント',
      text: 'IPの3bettorは、ドライなボードで小さく高頻度、ウェットなボードで大きく低頻度が基本です。数字は目安として、ボードごとに調整します。',
    },
    {
      t: 'quiz',
      q: 'BTN（3bettor）が小さなc-betを高頻度で打ちやすいのは、どちらのボード？',
      options: ['K♠7♦2♣', 'T♥9♥6♣'],
      optionCards: [['Ks', '7d', '2c'], ['Th', '9h', '6c']],
      answer: 0,
      explain: 'Kハイのドライなボードは3bettorのレンジ優位が大きく、小さなサイズで十分です。つながったボードはコーラーにも強い手が増えるので、サイズを上げて頻度を下げます。',
    },
    {
      t: 'estimate',
      q: 'K♠7♦2♣で、BTN（3bettor）のAKは何コンボ残りますか？',
      min: 0,
      max: 16,
      step: 1,
      answer: 12,
      tolerance: 1,
      board: ['Ks', '7d', '2c'],
      explain: 'AKは通常16コンボです。K♠を使う4コンボ（A♠K♠、A♥K♠、A♦K♠、A♣K♠）が消えるので12コンボです。',
    },
    {
      t: 'estimate',
      q: 'ポット17.5bbに5.8bbをc-bet。コーラーの必要勝率は？',
      min: 0,
      max: 60,
      step: 1,
      unit: '%',
      answer: 20,
      tolerance: 5,
      explain: '5.8 ÷ (17.5 + 11.6) = 5.8 ÷ 29.1 ≈ 20% です。',
    },
    {
      t: 'quiz',
      q: 'IPの3bettor（A♥Q♣）がT♥9♥6♣に出会いました。基本の方針は？',
      options: ['サイズを上げて頻度を下げる', 'サイズを下げて頻度を上げる', '常にチェック', '常にオールイン'],
      hand: ['Ah', 'Qc'],
      board: ['Th', '9h', '6c'],
      answer: 0,
      explain: 'コーラーにも強い手やドローが増えるため、手を選んで大きめのサイズで打ちます。',
    },
  ],
};

export default lesson;
