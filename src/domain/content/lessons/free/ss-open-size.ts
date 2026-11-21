import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'ss-open-size',
  blocks: [
    { t: 'h', text: 'オープンしてオールインされる' },
    { t: 'p', text: '全員40bb。浅いスタックでは、オープンに3betオールインが返ってくることが増えます。' },
    {
      t: 'play',
      title: '40bb、COでK♦Q♣',
      hero: 'CO',
      heroCards: ['Kd', 'Qc'],
      villain: 'BTN',
      steps: [
        {
          street: 'プリフロップ',
          pot: 1.5,
          say: 'HJ までフォールド。あなたは CO で **K♦Q♣**、スタック40bb。',
          q: 'オープンのサイズは？',
          options: [
            { label: '2.2bb', good: true, why: 'オールインされて降りるときの損が小さく済みます。' },
            { label: '3bb', good: false, why: '降りるときに失う額が増えます。フォールド率はほとんど変わりません。' },
          ],
        },
        {
          street: 'プリフロップ',
          pot: 43.7,
          say: 'BTN が40bbオールイン。ブラインドは降りました。コールにはあと37.8bbが必要です。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: false, why: 'BTN のオールインレンジに対して KQo の勝率は約31%。必要な約46%に届きません。' },
            { label: 'フォールド', good: true, why: '失うのは2.2bbだけ。小さく開いた分、損も小さく済みます。' },
          ],
        },
      ],
      outro: 'オープンする前に、オールインされたらコールするか降りるかを決めておきます。降りる手が多いほど、オープンは小さい方が有利です。',
    },
    { t: 'h', text: 'サイズで変わる損' },
    {
      t: 'tree',
      root: 'BTNから40bbでオープン。後ろが降りる確率を60%とすると',
      options: [
        {
          label: '2.2bbオープン',
          outcomes: [
            { label: '全員フォールド', prob: 0.6, value: 1.5 },
            { label: 'オールインされて降りる', prob: 0.1, value: -2.2 },
            { label: 'コールされてポストフロップ', prob: 0.3, value: 0 },
          ],
        },
        {
          label: '3bbオープン',
          outcomes: [
            { label: '全員フォールド', prob: 0.6, value: 1.5 },
            { label: 'オールインされて降りる', prob: 0.1, value: -3 },
            { label: 'コールされてポストフロップ', prob: 0.3, value: 0 },
          ],
        },
      ],
      caption: 'フォールド率は同じと仮定。コール後のEVは0とした単純比較',
    },
    {
      t: 'estimate',
      q: '2.2bbのオープンで1.5bbのブラインドを取りにいく。必要なフォールド率は？',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 59,
      tolerance: 8,
      explain: '2.2 ÷ (2.2 + 1.5) = 2.2 ÷ 3.7 ≈ 59% です。3bbなら 3 ÷ 4.5 ≈ 67% 必要です。',
    },
    {
      t: 'odds',
      pot: 5.9,
      bet: 37.8,
      equity: 45,
      caption: '2.2bbオープンに40bbオールイン。ポット5.9bbにあと37.8bbで、必要勝率は約46%',
    },
    {
      t: 'estimate',
      q: '2.2bbのオープンに40bbのオールイン（コール後のポットは81.5bb）。コールに必要な勝率は？',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 46,
      tolerance: 8,
      explain: '追加は37.8bb、コール後のポットは81.5bb。37.8 ÷ 81.5 ≈ 46% です。',
    },
    { t: 'h', text: 'コールする手を決めておく' },
    {
      t: 'rapid',
      q: '2.2bbオープンに40bbオールイン（相手は TT+・AQ+・AJs・KQs・A5s・A4s）。必要勝率は約46%',
      choices: ['コール', 'フォールド'],
      items: [
        { cards: ['Ah', 'Ac'], answer: 0 },
        { cards: ['Kd', 'Qc'], answer: 1, why: '勝率は約31%です。' },
        { cards: ['Qh', 'Qs'], answer: 0, why: '勝率は約58%あります。' },
        { cards: ['9h', '9c'], answer: 1, why: '勝率は約42%で、わずかに足りません。' },
        { cards: ['Ah', 'Kc'], answer: 0, why: '勝率は約54%あります。' },
        { cards: ['Ad', 'Jc'], answer: 1, why: '勝率は約34%です。' },
        { cards: ['Jh', 'Jc'], answer: 0, why: '勝率は約50%あります。' },
        { cards: ['Ah', 'Qc'], answer: 1, why: '勝率は約42%。AK や大きいペアに負けています。' },
        { cards: ['Kh', 'Kc'], answer: 0 },
        { cards: ['Kh', 'Jh'], answer: 1, why: '勝率は約34%です。' },
      ],
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: '40bb以下のオープンは2〜2.2bb。オールインにコールするのは、必要勝率を超える一部の強い手だけです。',
    },
  ],
};

export default lesson;
