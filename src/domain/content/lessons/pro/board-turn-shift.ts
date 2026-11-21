import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-turn-shift',
  blocks: [
    { t: 'h', text: 'このターンは誰のカード？' },
    {
      t: 'rapid',
      q: 'BTN対BBのSRP。4枚目のカードはどちら寄り？',
      choices: ['BTN寄り', 'BB寄り'],
      items: [
        { cards: ['Kh'], board: ['As', '7d', '2c'], answer: 0, why: 'AK・KKなど、Kに当たる強い手はBTNに多くあります。' },
        { cards: ['7s'], board: ['8h', '6d', '2c'], answer: 1, why: '54・95でストレート、87・76でツーペア。BBのコネクターに当たります。' },
        { cards: ['As'], board: ['Qh', '7d', '2c'], answer: 0 },
        { cards: ['8h'], board: ['9s', '7d', '2c'], answer: 1, why: 'T6・65でストレート、98・87でツーペアです。' },
        { cards: ['Ah'], board: ['Ks', '7d', '2c'], answer: 0 },
        { cards: ['4h'], board: ['7s', '6d', '5c'], answer: 1, why: '8xと3xにストレートができます。低いコネクターはBBに多めです。' },
        { cards: ['Kd'], board: ['Js', '8d', '3c'], answer: 0 },
        { cards: ['6h'], board: ['9d', '8c', '3s'], answer: 1 },
      ],
    },
    { t: 'h', text: '1枚で優位が動く' },
    {
      t: 'p',
      text: '高いカードはAxやKx、強いペアを多く持つBTNに当たります。低くつながるカードは、BBのスーテッドコネクターを完成させます（目安）。',
    },
    {
      t: 'timeline',
      steps: [
        { street: 'フロップ', board: ['As', '7d', '2c'], pot: 5.5, actions: ['BB：チェック', 'BTN：2bbベット', 'BB：コール'] },
        { street: 'ターン', board: ['Kh'], pot: 9.5, actions: ['BB：チェック', 'BTN：ベット（BTN寄りのカード）'] },
      ],
      caption: '高いカードが落ち、BTNの優位がさらに広がる。',
    },
    {
      t: 'compare',
      left: { title: 'フロップ：K♥9♥4♣', board: ['Kh', '9h', '4c'], points: ['BTNがやや有利', '両者にフラッシュドロー'], verdict: 'neutral' },
      right: { title: 'ターン：2♥', board: ['Kh', '9h', '4c', '2h'], points: ['フラッシュを持つ側が強い', '持たない側はベットを減らす', 'A♥の価値が上がる'], verdict: 'neutral' },
      caption: 'スートのカードは、レンジの強さを一気に変える。',
    },
    {
      t: 'quiz',
      q: 'フロップは A♠7♦2♣。BTNの優位が最も増えるターンは？',
      board: ['As', '7d', '2c'],
      options: ['K♥', '5♥', '4♥', '3♥'],
      optionCards: [['Kh'], ['5h'], ['4h'], ['3h']],
      answer: 0,
      explain: 'KはAK・KKを多く持つBTNに当たります。5・4・3はBBの低いコネクターに少し当たります。',
    },
    {
      t: 'quiz',
      q: 'フラッシュが完成したこのターンで、ベットを減らすのは？',
      board: ['Kh', '9h', '4c', '2h'],
      options: ['フラッシュを持つ側', '全員', 'フラッシュをほとんど持たない側', '誰もいない'],
      answer: 2,
      explain: 'フラッシュを持たない側は強い手に競り負けるので、ベットを控えます。',
    },
    { t: 'h', text: 'BTN寄りのターンで打つ' },
    {
      t: 'play',
      title: 'A♠7♦2♣ → K♥ でAQ',
      hero: 'BTN',
      heroCards: ['Ah', 'Qc'],
      villain: 'BB',
      villainCards: ['Ad', 'Ts'],
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'BTNで **A♥Q♣** を2.5bbオープン。BBがコールしました。' },
        {
          street: 'フロップ',
          board: ['As', '7d', '2c'],
          pot: 5.5,
          say: 'フロップは **A♠7♦2♣**。BBはチェック。',
          q: 'トップペア。どうする？',
          options: [
            { label: '2bbベット', good: true, why: 'レンジ有利のボード。小さく打って弱いAxや7xから取ります。' },
            { label: 'チェック', good: false, why: '払ってくれる手が多く、価値を逃します。' },
          ],
        },
        {
          street: 'ターン',
          board: ['Kh'],
          pot: 9.5,
          say: 'BBがコール。ターンは **K♥**。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '6bbベット', good: true, why: 'BTN寄りのカード。AJ・ATなど弱いAxはまだ払います。' },
            { label: 'チェック', good: false, why: '有利が広がったターンです。価値を取りにいきます。' },
          ],
        },
        {
          street: 'リバー',
          board: ['9s'],
          pot: 21.5,
          say: 'BBがコール。リバーは **9♠**。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '11bbベット', good: true, why: 'キッカーの弱いAxからもう1回取れます。' },
            { label: 'チェック', good: false, why: 'AQは上位のAx。勝っている相手が多いので打ちます。' },
          ],
        },
      ],
      outro: 'BBは A♦T♠。ターンのKはBTN寄りのカードで、トップペアの価値をもう1回取れる場面でした。',
    },
  ],
};

export default lesson;
