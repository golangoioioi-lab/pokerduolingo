import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'rb-pot-odds',
  blocks: [
    { t: 'h', text: 'まず感覚で答える' },
    {
      t: 'estimate',
      q: 'ポット 10bb に相手が 5bb ベット。コールが得になるのは、勝率が何%以上のとき？',
      min: 0, max: 60, step: 1, unit: '%', answer: 25, tolerance: 3,
      explain: '5 ÷（10 + 5 + 5）= 25% です。',
    },
    { t: 'h', text: '必要勝率の求め方' },
    { t: 'formula', text: '必要勝率 = コール額 ÷（ポット + ベット + コール額）', note: 'ポット 10bb・ベット 5bb → 5 ÷ 20 = 25%' },
    {
      t: 'odds', pot: 10, bet: 5, equity: 35,
      caption: '払う 5bb は最終ポット 20bb の 25%。勝率 35%（目安）ならコールが得。',
    },
    {
      t: 'table',
      head: ['相手のベット', '必要勝率'],
      rows: [
        ['1/3 ポット', '20%'],
        ['1/2 ポット', '25%'],
        ['2/3 ポット', '約 29%'],
        ['ポットサイズ', '約 33%'],
        ['2倍ポット', '40%'],
      ],
    },
    { t: 'p', text: 'ベットが大きいほど必要勝率は上がります。1/2 ポットの 25% とポットサイズの 33% を覚えておくと便利です。' },
    {
      t: 'tree',
      root: 'ポット 10bb に 5bb のベット。勝率 35%（目安）',
      options: [
        { label: 'コール', outcomes: [{ label: '勝つ', prob: 0.35, value: 15 }, { label: '負ける', prob: 0.65, value: -5 }] },
        { label: 'フォールド', ev: 0 },
      ],
      caption: 'コールの EV は 0.35 × 15 − 0.65 × 5 = +2bb。',
    },
    { t: 'h', text: 'コールは得？' },
    {
      t: 'rapid',
      q: 'コールは得？ 損？',
      choices: ['得', '損'],
      items: [
        { text: 'ポット 10bb に 5bb・勝率 35%', answer: 0, why: '必要 25% を上回ります。' },
        { text: 'ポット 10bb に 10bb・勝率 25%', answer: 1, why: '必要は約 33% です。' },
        { text: 'ポット 20bb に 5bb・勝率 20%', answer: 0, why: '必要は 5 ÷ 30 で約 17% です。' },
        { text: 'ポット 10bb に 20bb・勝率 30%', answer: 1, why: '必要は 20 ÷ 50 = 40% です。' },
        { text: 'ポット 12bb に 4bb・勝率 15%', answer: 1, why: '必要は 4 ÷ 20 = 20% です。' },
        { text: 'ポット 6bb に 6bb・勝率 40%', answer: 0, why: '必要は約 33% です。' },
        { text: 'ポット 15bb に 15bb・勝率 30%', answer: 1, why: '必要は約 33% です。' },
      ],
    },
    {
      t: 'odds', pot: 10, bet: 10, equity: 30,
      caption: 'ポットサイズのベットは必要 33%。勝率 30%（目安）では少し足りない。',
    },
    { t: 'h', text: 'ドローで1ハンド' },
    {
      t: 'play',
      title: 'BB で 8♥7♥',
      hero: 'BB', heroCards: ['8h', '7h'], villain: 'BTN',
      steps: [
        {
          street: 'プリフロップ', pot: 4,
          say: 'BTN が 2.5bb にオープン、SB はフォールド。コールは追加 1.5bb。',
          q: '必要勝率は 1.5 ÷ 7 で約 21%。どうする？',
          options: [
            { label: 'コール', good: true, why: '87s は BTN 相手に 21% を十分上回ります。' },
            { label: 'フォールド', good: false, why: '安く参加できる、守るべき手です。' },
          ],
        },
        {
          street: 'フロップ', board: ['Ah', 'Kc', '2h'], pot: 5.5,
          say: 'フラッシュドロー（9アウツ）。あなたはチェック、BTN が 3bb ベット。',
          q: '必要勝率は 3 ÷ 11.5 で約 26%。勝率は約 35%（目安）。どうする？',
          options: [
            { label: 'コール', good: true, why: '35% が 26% を上回ります。' },
            { label: 'フォールド', good: false, why: '十分なオッズがあります。' },
          ],
        },
        {
          street: 'ターン', board: ['5c'], pot: 11.5,
          say: 'ターンは 5。届きませんでした。あなたはチェック、BTN がポットサイズの 11.5bb をベット。',
          q: '残り1枚で勝率は約 20%。必要は 33%。どうする？',
          options: [
            { label: 'フォールド', good: true, why: '20% では 33% に届きません。' },
            { label: 'コール', good: false, why: 'オッズが足りません。引いても 8 ハイのフラッシュでは負ける場合もあります。' },
          ],
        },
      ],
      outro: '同じドローでも、ベットの大きさと残りの枚数でコールの可否が変わります。',
    },
  ],
};

export default lesson;
