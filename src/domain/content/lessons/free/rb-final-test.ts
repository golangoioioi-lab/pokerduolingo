import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'rb-final-test',
  blocks: [
    { t: 'h', text: '役の強さ' },
    {
      t: 'order',
      q: '強い順にタップしてください。',
      hands: [
        { label: 'A', cards: ['9s', '8d', '7c', '6h', '5d'] },
        { label: 'B', cards: ['Kh', 'Jh', '8h', '5h', '2h'] },
        { label: 'C', cards: ['Js', 'Jd', 'Jc', '4s', '4d'] },
        { label: 'D', cards: ['Qs', 'Qd', '9c', '9h', '3c'] },
      ],
      explain: 'フルハウス → フラッシュ → ストレート → ツーペアの順です。',
    },
    {
      t: 'showdown',
      q: '勝つのは？',
      board: ['Ah', '7d', '2h', '4s', '9c'],
      players: [
        { label: 'AK', cards: ['Ac', 'Kd'] },
        { label: 'AQ', cards: ['As', 'Qc'] },
      ],
      explain: 'どちらも A のペア。キッカーの K が上です。',
    },
    { t: 'h', text: '席とポットオッズ' },
    {
      t: 'seats',
      seats: [
        { pos: 'CO', action: 'オープン', bet: 2.5 },
        { pos: 'BTN', action: 'フォールド', folded: true },
        { pos: 'SB', action: 'フォールド', folded: true },
        { pos: 'BB', hero: true, action: '判断中', bet: 1, cards: ['Kh', 'Jd'] },
      ],
      pot: 4,
      caption: 'ポットは 2.5 + 0.5 + 1 = 4bb。BB の追加コールは 1.5bb。',
    },
    {
      t: 'odds', pot: 4, bet: 1.5, equity: 35,
      caption: '必要勝率は 1.5 ÷ 7 で約 21%。勝率 35% は説明用の例。',
    },
    {
      t: 'play',
      title: 'BB で K♥J♦',
      hero: 'BB', heroCards: ['Kh', 'Jd'], villain: 'CO', villainCards: ['Qh', 'Jh'],
      steps: [
        {
          street: 'プリフロップ', pot: 4,
          say: 'CO が 2.5bb にオープン。BTN と SB はフォールド。',
          q: 'どうする？',
          options: [
            { label: 'コール（追加 1.5bb）', good: true, why: '必要勝率は約 21%。KJo は十分守れます。' },
            { label: 'フォールド', good: false, why: '安く参加できる手を降りすぎです。' },
          ],
        },
        {
          street: 'フロップ', board: ['Kc', '8h', '4s'], pot: 7.5,
          say: 'フロップは K-8-4。あなたはチェック、CO が 2bb ベット。',
          q: 'トップペア。どうする？',
          options: [
            { label: 'コール', good: true, why: '必要勝率は 2 ÷ 9.5 で約 21%。トップペアなら十分です。' },
            { label: 'フォールド', good: false, why: '小さいベットにトップペアを降りるのは早すぎます。' },
          ],
        },
        { street: 'ターン', board: ['7d'], pot: 9.5, say: 'ターンは 7。あなたがチェック、CO もチェック。' },
        {
          street: 'リバー', board: ['2c'], pot: 9.5,
          say: 'リバーは 2。あなたが先に行動します。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: 'CO はターンで諦めました。小さくベットしても構いません。' },
            { label: '9.5bb（ポット）ベット', good: false, why: '大きすぎます。強い K にしか払われません。' },
          ],
        },
      ],
      outro: 'BB での守り、ポットオッズ、ショーダウンまでを1ハンドで確認しました。',
    },
    { t: 'h', text: 'アウツと確率' },
    {
      t: 'outs',
      q: '次の1枚でフラッシュになるカードを全部タップしてください。',
      hand: ['Ah', '9h'],
      board: ['Kh', '7h', '2c'],
      target: 'フラッシュ',
      explain: 'ハートは残り9枚です。',
    },
    {
      t: 'estimate',
      q: 'フロップで9アウツ。リバーまでの勝率の目安は？',
      hand: ['Ah', '9h'],
      board: ['Kh', '7h', '2c'],
      min: 0, max: 80, step: 1, unit: '%', answer: 36, tolerance: 5,
      explain: '9 × 4 = 36% です。',
    },
    {
      t: 'estimate',
      q: 'A♥K♦（AKo）は何通りある？',
      hand: ['Ah', 'Kd'],
      min: 0, max: 20, step: 1, unit: '通り', answer: 12, tolerance: 0.5,
      explain: '4 × 3 = 12通りです。',
    },
    { t: 'tip', text: '間違えた分野は、そのレッスンに戻ってもう一度解いてみてください。' },

    {
      t: 'rapid',
      q: 'コールは得？ 損？',
      choices: ['得', '損'],
      items: [
        { text: 'ポット 20bb に 10bb・勝率 35%', answer: 0, why: '必要は 25% です。' },
        { text: 'ポット 10bb に 10bb・勝率 20%', answer: 1, why: '必要は約 33% です。' },
        { text: 'ポット 15bb に 5bb・勝率 25%', answer: 0, why: '必要は 5 ÷ 25 = 20% です。' },
        { text: 'ポット 8bb に 16bb・勝率 30%', answer: 1, why: '必要は 16 ÷ 40 = 40% です。' },
        { text: 'ポット 6bb に 2bb・勝率 25%', answer: 0, why: '必要は 2 ÷ 10 = 20% です。' },
      ],
    },
  ],
};

export default lesson;
