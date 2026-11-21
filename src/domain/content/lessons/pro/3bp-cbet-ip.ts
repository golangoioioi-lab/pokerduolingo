import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-cbet-ip',
  blocks: [
    { t: 'h', text: 'まず直感で' },
    {
      t: 'rapid',
      q: 'BTN（3bettor・IP）対CO。このフロップの打ち方は？',
      choices: ['小さく多く', '大きく少なく'],
      items: [
        { cards: ['Ks', '7d', '2c'], answer: 0 },
        { cards: ['Th', '9h', '6c'], answer: 1, why: 'つながったボードはコーラーにも強い手とドローが多くなります。' },
        { cards: ['As', '8d', '3c'], answer: 0 },
        { cards: ['9s', '8s', '7d'], answer: 1, why: 'COのスーテッドコネクターやペアに当たりやすいボードです。' },
        { cards: ['Ad', 'Kc', '4s'], answer: 0 },
        { cards: ['Jh', 'Th', '8c'], answer: 1, why: 'ストレートとフラッシュのドローが多いボードです。' },
        { cards: ['Qh', '5c', '2d'], answer: 0 },
        { cards: ['7c', '6c', '5d'], answer: 1, why: '3bettorのレンジにはほとんど当たりません。' },
      ],
    },
    { t: 'h', text: '小さく打てる理由' },
    {
      t: 'p',
      text: 'COはAA・KKの多くを4betに回すので、コールレンジの上限は低めです。3bettorはAA〜KKやAKを持つので、A・Kハイのドライなボードで大きく有利です。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'KK', hands: ['KK'] },
        { label: 'AK', hands: ['AK'] },
      ],
      dead: ['Ks', '7d', '2c'],
      caption: 'K♠7♦2♣での3bettorのKK・AK。KKは3コンボ、AKは12コンボ。',
    },
    {
      t: 'estimate',
      q: 'K♠7♦2♣で、AKは何コンボ残りますか？',
      min: 0,
      max: 16,
      step: 1,
      answer: 12,
      tolerance: 1,
      board: ['Ks', '7d', '2c'],
      explain: '16コンボから、K♠を使う4コンボが消えて12コンボです。',
    },
    {
      t: 'p',
      text: '高くてドライなボードは、約25〜33%のc-betを高頻度（目安6〜7割）で打ちます。つながったボードはサイズを約66%に上げ、頻度を下げます。',
    },
    {
      t: 'odds',
      pot: 17.5,
      bet: 5.8,
      equity: 20,
      caption: '約33%（5.8bb）のc-bet。コーラーの必要勝率は約20%です。',
    },
    {
      t: 'pot',
      steps: [
        { label: '3betポット（CO対BTN）', pot: 17.5, stack: 92 },
        { label: 'フロップ 5.8bet・コール', pot: 29.1, stack: 86.2 },
        { label: 'ターン 14.5bet・コール', pot: 58.1, stack: 71.7 },
      ],
      caption: '33%→50%と進めると、リバーのSPRは約1.2です。',
    },
    { t: 'h', text: 'ウェットなボードで体験' },
    {
      t: 'play',
      title: 'AQでT♥9♥6♣',
      hero: 'BTN',
      heroCards: ['Ah', 'Qc'],
      villain: 'CO',
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'COが2.5bbでオープン。あなたはBTNで **A♥Q♣**。',
          q: 'どうする？',
          options: [
            { label: '8bbに3bet', good: true, why: 'BTNのAQoはCOに対して3betが基本です。' },
            { label: 'フォールド', good: false, why: 'AQoはこの位置で十分強い手です。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Th', '9h', '6c'],
          pot: 17.5,
          say: 'COがコールしてチェック。あなたはAハイで、ハートのナッツフラッシュドローもあります。',
          q: 'どうする？',
          options: [
            { label: '5.8bb（約33%）', good: false, why: 'このボードでは小さいサイズの圧力が弱く、相手のドローに安く見せます。' },
            { label: '約11.5bb（約66%）', good: true, why: '強いドローは大きめに打ち、降りてもらう分と完成する分の両方で稼ぎます。' },
            { label: 'チェック', good: false, why: 'チェックも可能ですが、ナッツドローは打つ側に回すのが基本です。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2s'],
          pot: 40.5,
          say: 'COがコール。残り80.5bb（SPR 約2）。COはチェック。',
          q: 'どうする？',
          options: [
            { label: '約27bbをベット', good: true, why: 'ドローとAのオーバーカードで、セミブラフを続けられます。' },
            { label: 'チェック', good: true, why: '無料でリバーを見るのも有力です。ここは僅差です。' },
          ],
        },
      ],
      outro: 'ドライなボードは小さく多く、ウェットなボードは大きく手を選んで。ドローは打つ側に入れます。',
    },
  ],
};

export default lesson;
