import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'float',
  blocks: [
    { t: 'h', text: 'まず判断してみる' },
    {
      t: 'rapid',
      q: 'CO のオープンに BTN でコール。K♥7♠3♦ で CO が 2bb の Cベット（ポット 6.5bb）。続ける？',
      choices: ['コール', 'フォールド'],
      items: [
        { cards: ['6s', '5s'], board: ['Kh', '7s', '3d'], answer: 0, why: '4 でストレート、スペードのバックドアもあります。' },
        { cards: ['Jc', '2d'], board: ['Kh', '7s', '3d'], answer: 1, why: 'ドローもバックドアもなく、ターンで打たれたら降りるしかありません。' },
        { cards: ['Qs', 'Js'], board: ['Kh', '7s', '3d'], answer: 0, why: 'T でガットショット、オーバーカードとバックドアもあります。' },
        { cards: ['Td', '4c'], board: ['Kh', '7s', '3d'], answer: 1 },
        { cards: ['5h', '4h'], board: ['Kh', '7s', '3d'], answer: 0, why: '6 でストレートになるガットショットです。' },
        { cards: ['8c', '2c'], board: ['Kh', '7s', '3d'], answer: 1 },
      ],
    },
    { t: 'p', text: 'IP で Cベットにコールし、後のストリートでポットを取りにいくのが**フロート**です。手の強さではなく、ポジションと相手の傾向を使います。' },
    { t: 'h', text: '安く付いていき、ターンで奪う' },
    {
      t: 'seats',
      seats: [
        { pos: 'CO', bet: 2, action: 'Cベット 2bb' },
        { pos: 'BTN', hero: true, bet: 2, action: 'コール（6♠5♠）' },
      ],
      pot: 6.5,
      board: ['Kh', '7s', '3d'],
      caption: 'ベット前のポットは 6.5bb。',
    },
    { t: 'odds', pot: 6.5, bet: 2, equity: 19, caption: '必要勝率は約19%。ガットショット＋バックドアでほぼ足ります（エクイティは目安）。' },
    {
      t: 'tree',
      root: 'ターンで CO がチェック。ポット 10.5bb に 5bb ベット',
      options: [
        { label: 'チェック', ev: 0 },
        {
          label: 'ベット（32% 降りる）',
          outcomes: [{ label: 'フォールド', prob: 0.322, value: 10.5 }, { label: 'コールされて負ける', prob: 0.678, value: -5 }],
          note: 'ほぼ損益なし',
        },
      ],
      caption: '損益分岐は 5 ÷ 15.5 ≈ 32%。ターンで諦めやすい相手なら超えられます。',
    },
    {
      t: 'warn',
      title: '機能しない相手',
      text: 'ターンでも打ち続ける相手、相手が2人以上、OOP では難しくなります。エクイティのない手のコールは、フロップの分をそのまま失います。',
    },
    {
      t: 'estimate',
      q: 'ポット 12bb のターンで相手がチェック。6bb のブラフが利益になるのに必要なフォールド率は？',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 33,
      tolerance: 8,
      explain: '6 ÷ (12 + 6) ≈ 33% です。',
    },
    { t: 'h', text: 'もう一度：フロートを最後まで' },
    {
      t: 'play',
      title: 'BTN の 65s でフロート',
      hero: 'BTN',
      heroCards: ['6s', '5s'],
      villain: 'CO',
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'CO が 2.5bb でオープン。あなたは BTN で **6♠5♠**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'IP でプレイできるスーテッドコネクターです。' },
            { label: 'コール', good: true, why: 'ポジションを活かして安くフロップを見ます。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Kh', '7s', '3d'],
          pot: 8.5,
          say: 'ブラインドはフォールド。フロップは **K♥7♠3♦**。CO が 2bb の Cベット。',
          q: '何もないがガットショット＋バックドア。どうする？',
          options: [
            { label: 'フォールド', good: false, why: '必要勝率 19% に近いエクイティがあり、ポジションもあります。' },
            { label: 'コール', good: true, why: 'フロート。ターンで相手が弱さを見せたら取りにいきます。' },
            { label: '7bb にレイズ', good: false, why: 'レイズも可能ですが、IP なら安く付いていく方が自然です。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2c'],
          pot: 10.5,
          say: 'ターンは **2♣**。CO はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: '6 ハイでは勝てません。降ろす好機を逃します。' },
            { label: '5bb ベット', good: true, why: 'CO の弱い手を降ろします。コールされても 4 でストレートです。' },
          ],
        },
      ],
      outro: 'CO はフォールド。ポジションがあれば、手が弱くてもポットを取れます。',
    },
    {
      t: 'quiz',
      q: 'ターン 2♣ で CO がチェック。フロートした BTN の一般的な対応は？',
      hand: ['6s', '5s'],
      board: ['Kh', '7s', '3d', '2c'],
      options: ['5bb 前後をベットしてポットを取りにいく', 'チェックバックして諦める'],
      answer: 0,
      explain: 'CO のチェックは弱さのサインです。コールされても 4 を引けばストレートです。',
    },
  ],
};

export default lesson;
