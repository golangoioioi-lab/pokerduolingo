import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'probe-bet',
  blocks: [
    { t: 'h', text: 'まず判断してみる' },
    {
      t: 'rapid',
      q: 'BB でディフェンス。フロップ T♠7♦3♣ は BTN もチェック。ターン 2♥ であなたから。ベットする？',
      choices: ['ベット', 'チェック'],
      items: [
        { cards: ['Th', '9h'], board: ['Ts', '7d', '3c', '2h'], answer: 0, why: 'トップペアは、弱い手が多い相手からバリューを取れます。' },
        { cards: ['9c', '8c'], board: ['Ts', '7d', '3c', '2h'], answer: 0, why: 'オープンエンドのセミブラフです。' },
        { cards: ['4h', '3h'], board: ['Ts', '7d', '3c', '2h'], answer: 1, why: '弱いペアはショーダウンバリューがあり、打つと強い手にしか払われません。' },
        { cards: ['5c', '4c'], board: ['Ts', '7d', '3c', '2h'], answer: 0, why: 'A か 6 でストレート。セミブラフに向きます。' },
        { cards: ['8h', '2s'], board: ['Ts', '7d', '3c', '2h'], answer: 1 },
        { cards: ['Jd', 'Td'], board: ['Ts', '7d', '3c', '2h'], answer: 0 },
        { cards: ['Kd', 'Qd'], board: ['Ts', '7d', '3c', '2h'], answer: 0, why: 'J でストレート、K や Q でもペア。オーバーカード付きのガットショットです。' },
      ],
    },
    { t: 'p', text: 'IP のレイザーがフロップをチェックで返したあと、OOP 側がターンで先に打つのが**プローブベット**です。' },
    { t: 'h', text: 'チェックバックしたレンジは上限が低い' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 5.5, actions: ['BTN 2.5bb にオープン', 'BB がコール'] },
        { street: 'フロップ', board: ['Ts', '7d', '3c'], pot: 5.5, actions: ['BB チェック', 'BTN もチェック'] },
        { street: 'ターン', board: ['2h'], pot: 5.5, actions: ['BB が 3.5bb プローブ'] },
      ],
    },
    {
      t: 'compare',
      left: { title: 'チェックバックしたレンジ', board: ['Ts', '7d', '3c'], points: ['強い手の多くは Cベットしている', '弱い・中くらいの手が多い'], verdict: 'bad' },
      right: { title: 'Cベットしたレンジ', board: ['Ts', '7d', '3c'], points: ['Tx・オーバーペア・セットを含む', '上限が高い'], verdict: 'good' },
      caption: '強い手が抜けて上限が下がったレンジを**キャップされたレンジ**と呼びます。',
    },
    { t: 'p', text: 'サイズはポットの 50〜75% が目安です。ターンで A や K など BTN に当たりやすいカードが落ちたら、頻度を下げます。' },
    { t: 'odds', pot: 5.5, bet: 3.5, equity: 30, caption: 'BB が 3.5bb をプローブ。BTN の必要勝率は 28%（エクイティ 30% は例）。' },
    {
      t: 'estimate',
      q: 'ポット 5.5bb のターンで BB が 3.5bb をプローブ。BTN がコールするのに必要な勝率は？',
      board: ['Ts', '7d', '3c', '2h'],
      min: 0,
      max: 60,
      step: 1,
      unit: '%',
      answer: 28,
      tolerance: 7,
      explain: '3.5 ÷ (5.5 + 3.5 + 3.5) = 28% です。',
    },
    { t: 'h', text: 'もう一度：ターンで先に打つ' },
    {
      t: 'play',
      title: 'BB の 98s でプローブ',
      hero: 'BB',
      heroCards: ['9c', '8c'],
      villain: 'BTN',
      villainCards: ['As', '7s'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'BTN が 2.5bb でオープン、SB はフォールド。あなたは BB で **9♣8♣**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'BB で守るべき手です。' },
            { label: 'コール', good: true, why: 'プレイアブルなスーテッドコネクターです。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Ts', '7d', '3c'],
          pot: 5.5,
          say: 'フロップは **T♠7♦3♣**。オープンエンドです。あなたから。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: 'まずはレイザーに打たせます。BB の基本です。' },
            { label: '4bb ベット', good: false, why: '先に打つ戦略もありますが、まずはチェックが基本です。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2h'],
          pot: 5.5,
          say: 'BTN もチェック。ターンは **2♥**。あなたから。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'チェックも可能ですが、キャップされた相手を降ろせる好機です（接戦）。' },
            { label: '3.5bb プローブ', good: true, why: '弱い手を降ろし、コールされても 8 枚のアウツがあります。' },
          ],
        },
        {
          street: 'リバー',
          board: ['6d'],
          pot: 12.5,
          say: 'BTN がコール。リバーは **6♦**。6-7-8-9-T のストレート完成。',
          q: 'あなたから。どうする？',
          options: [
            { label: 'チェック', good: false, why: '相手が打ってくれるとは限りません。' },
            { label: '9bb ベット', good: true, why: 'ターンでコールした 7x や Tx から取ります。' },
          ],
        },
      ],
      outro: '相手がフロップで弱さを見せたら、ターンで先に打ってポットを取りにいきます。',
    },
    {
      t: 'quiz',
      q: '「キャップされたレンジ」の意味として正しいのは？',
      options: ['強い手が抜けて、上限が低くなったレンジ', 'ブラフが1つも入っていないレンジ', 'オールインしか選択肢がないレンジ'],
      answer: 0,
      explain: '強い手を別の行動（Cベットや3bet）に回した結果、上限が下がったレンジです。',
    },
  ],
};

export default lesson;
