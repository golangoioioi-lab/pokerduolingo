import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'rb-blinds-pot',
  blocks: [
    { t: 'h', text: 'ポットを数えてみる' },
    {
      t: 'estimate',
      q: 'BTN が 2.5bb でオープンし、BB だけがコール。SB はフォールド。ポットは何 bb？',
      hand: ['Ts', '9s'],
      min: 0, max: 12, step: 0.5, unit: 'bb', answer: 5.5, tolerance: 0.5,
      explain: 'BTN 2.5 + BB 2.5 + SB が置いていった 0.5 = 5.5bb です。',
    },
    { t: 'p', text: 'SB は 0.5bb、BB は 1bb を最初に出します。金額は bb（ビッグブラインド何枚分か）で数えるので、レートが違っても同じ基準で考えられます。' },
    {
      t: 'seats',
      seats: [
        { pos: 'BTN', action: 'オープン', bet: 2.5 },
        { pos: 'SB', action: 'フォールド', folded: true, bet: 0.5 },
        { pos: 'BB', action: 'コール', bet: 2.5 },
      ],
      pot: 5.5,
      caption: '降りた SB の 0.5bb もポットに残ります。',
    },
    { t: 'h', text: 'ベットは「ポットの何割か」' },
    { t: 'formula', text: 'ベット比率 = ベット額 ÷ ポット', note: 'ポット 12bb に 6bb → 1/2 ポット' },
    {
      t: 'rapid',
      q: 'このベットは 1/2 ポット以上？',
      choices: ['以上', '未満'],
      items: [
        { text: 'ポット 10bb に 6bb', answer: 0 },
        { text: 'ポット 12bb に 4bb', answer: 1, why: '4 ÷ 12 = 1/3 ポットです。' },
        { text: 'ポット 20bb に 10bb', answer: 0, why: 'ちょうど 1/2 ポットです。' },
        { text: 'ポット 9bb に 3bb', answer: 1, why: '1/3 ポットです。' },
        { text: 'ポット 8bb に 8bb', answer: 0 },
        { text: 'ポット 30bb に 12bb', answer: 1, why: '12 ÷ 30 = 40% です。' },
        { text: 'ポット 5.5bb に 3bb', answer: 0 },
      ],
    },
    { t: 'h', text: 'ポットが育つとスタックが減る' },
    {
      t: 'pot',
      steps: [
        { label: 'プリフロップ後', pot: 5.5, stack: 97.5 },
        { label: 'フロップ 3bb→コール', pot: 11.5, stack: 94.5 },
        { label: 'ターン 8bb→コール', pot: 27.5, stack: 86.5 },
      ],
      caption: 'SPR（残りスタック ÷ ポット）がどんどん小さくなる。',
    },
    {
      t: 'estimate',
      q: 'スタック 100bb、ポット 25bb のときの SPR は？',
      min: 0, max: 10, step: 0.5, answer: 4, tolerance: 0.5,
      explain: '100 ÷ 25 = 4 です。',
    },

    {
      t: 'play',
      title: 'BTN で T♠9♠',
      hero: 'BTN', heroCards: ['Ts', '9s'], villain: 'BB', villainCards: ['6s', '5s'],
      steps: [
        {
          street: 'プリフロップ', pot: 1.5,
          say: 'CO までフォールド。ポットはブラインドの 1.5bb。',
          q: 'どうする？',
          options: [
            { label: '2.5bb レイズ', good: true, why: 'T9s は BTN のオープンレンジに入ります。' },
            { label: 'フォールド', good: false, why: 'BTN では十分参加できる手です。' },
          ],
        },
        {
          street: 'フロップ', board: ['Td', '6c', '2h'], pot: 5.5,
          say: 'BB がコールしてポットは 5.5bb。BB はチェック。',
          q: 'トップペア。約 1/2 ポットを打つなら？',
          options: [
            { label: '3bb', good: true, why: '3 ÷ 5.5 で約半分です。' },
            { label: '11bb', good: false, why: 'ポットの2倍です。大きすぎます。' },
          ],
        },
        {
          street: 'ターン', board: ['3s'], pot: 11.5,
          say: 'BB がコール。ポットは 5.5 + 3 + 3 = 11.5bb。BB はチェック。',
          q: '約 2/3 ポットを打つなら？',
          options: [
            { label: '8bb', good: true, why: '8 ÷ 11.5 で約 70%、ほぼ 2/3 です。' },
            { label: '3bb', good: false, why: '約 1/4 ポットです。' },
          ],
        },
        {
          street: 'リバー', board: ['Kd'], pot: 27.5,
          say: 'BB がコールしてポットは 27.5bb。リバーは K。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: 'K が落ちて T のペアは中くらいの強さ。ショーダウンで十分です。' },
            { label: 'オールイン（86.5bb）', good: false, why: 'ポットの3倍以上。強い手にしか払われません。' },
          ],
        },
      ],
      outro: 'ベットとコールのたびに、ポットは両者の賭けた分だけ増えます。',
    },
  ],
};

export default lesson;
