import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pf-draws',
  blocks: [
    { t: 'h', text: 'あと1枚を数える' },
    {
      t: 'outs',
      q: 'スペードが4枚。次の1枚でフラッシュになるカードを全部タップ。',
      hand: ['Qs', 'Js'],
      board: ['8s', '3s', 'Kd'],
      target: 'フラッシュ',
      explain: 'スペードは13枚。見えている4枚を引いて、残り **9枚** です。',
    },
    { t: 'p', text: 'あと1枚で役が完成する手を**ドロー**、完成させるカードを**アウツ**と呼びます。' },
    {
      t: 'outs',
      q: '9-8-7-6 と4つ続いています。ストレートになるカードは？',
      hand: ['9c', '8d'],
      board: ['7s', '6h', '2c'],
      target: 'ストレート',
      explain: '両端の T と 5 が4枚ずつで **8枚** です。',
    },
    {
      t: 'outs',
      q: 'ストレートとフラッシュの両方を狙えます。ストレート以上になるカードは？',
      hand: ['Jh', 'Th'],
      board: ['9h', '8c', '2h'],
      target: 'ストレート',
      explain: 'ハート9枚と、ハート以外の Q と 7 が3枚ずつ。合わせて **15枚** あります。',
    },
    { t: 'h', text: '完成する確率' },
    { t: 'p', text: 'リバーの1枚で完成する確率は、**アウツ × 2** が目安です（%）。フロップからリバーまで2枚見られるなら **× 4** です。' },
    {
      t: 'estimate',
      q: 'ターンでアウツ 9 枚。リバーで完成する確率は？',
      min: 0,
      max: 50,
      unit: '%',
      answer: 18,
      tolerance: 3,
      explain: '9 × 2 ＝ 18%。正確には 9 ÷ 46 で約20%です。',
    },
    {
      t: 'play',
      title: '安ければ追う、高ければ降りる',
      hero: 'BB',
      heroCards: ['Ts', '9s'],
      villain: 'BTN',
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'BTN が 2.5bb レイズ。あなたは BB で **T♠9♠** をコール。' },
        { street: 'フロップ', board: ['As', '6s', '2d'], pot: 5.5, say: 'スペードが4枚。あなたがチェックすると、BTN は 2bb ベット。', q: 'どうする？', options: [
          { label: 'コール', good: true, why: '2bb で 9.5bb を狙えます。2枚見られるので完成は約35%です。' },
          { label: 'フォールド', good: false, why: '払う額がとても小さい場面です。' },
        ] },
        { street: 'ターン', board: ['Kc'], pot: 9.5, say: 'ターンは K。あなたがチェックすると、BTN は 20bb の大きなベット。', q: 'どうする？', options: [
          { label: 'フォールド', good: true, why: '必要な勝率は約40%。リバー1枚で完成するのは約20%なので足りません。' },
          { label: 'コール', good: false, why: '20bb 払うには、完成の見込みが小さすぎます。' },
        ] },
      ],
      outro: '同じドローでも、払う額しだいでコールにもフォールドにもなります。',
    },
    {
      t: 'rapid',
      q: 'アウツは何枚？',
      choices: ['9枚', '8枚'],
      items: [
        { cards: ['Ah', '5h'], board: ['Kh', '9h', '2c'], answer: 0, why: 'フラッシュドローは 9 枚です。' },
        { cards: ['Jc', 'Td'], board: ['9s', '8h', '2c'], answer: 1, why: '両端が空いたストレートドローは 8 枚です。' },
        { cards: ['Kd', 'Qd'], board: ['7d', '3d', '2s'], answer: 0 },
        { cards: ['6c', '5d'], board: ['8s', '7h', 'Kc'], answer: 1 },
        { cards: ['8s', '7s'], board: ['Qs', '4s', 'Jd'], answer: 0 },
        { cards: ['Qh', 'Jc'], board: ['Ts', '9d', '3h'], answer: 1 },
      ],
    },
    { t: 'tip', title: 'ドローの目安', text: 'フラッシュドローは 9 枚、両端が空いたストレートドローは 8 枚。リバーで完成する確率はアウツ × 2、ターンとリバーの2枚ならアウツ × 4 が目安です。' },
  ],
};

export default lesson;
