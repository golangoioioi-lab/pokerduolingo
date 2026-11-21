import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'srp-float-ip',
  blocks: [
    { t: 'h', text: 'ポジションで粘って、後で取る' },
    {
      t: 'play',
      title: 'BTN で A♠J♠、CO の c-bet を受ける',
      hero: 'BTN',
      heroCards: ['As', 'Js'],
      villain: 'CO',
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'CO が 2.5bb オープン。あなたは BTN で **A♠J♠**。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'ポジションがあり、コールで十分戦えます。' },
            { label: '3bet', good: true, why: 'これも標準です。今回はコールの流れで進めます。' },
            { label: 'フォールド', good: false, why: 'BTN で AJs は強い手です。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Qd', '6c', '2h'],
          pot: 6.5,
          say: 'ブラインドは降り。フロップは **Q♦6♣2♥**。CO が 2bb ベット。',
          q: 'A ハイ。どうする？',
          options: [
            { label: 'コール（フロート）', good: true, why: '安い料金で、A のオーバーカードとバックドアがあります。' },
            { label: 'フォールド', good: false, why: '必要勝率は約19%。ポジションもあり、降りるには惜しい手です。' },
          ],
        },
        {
          street: 'ターン',
          board: ['4s'],
          pot: 10.5,
          say: 'ターンは **4♠**。CO はチェック。',
          q: 'どうする？',
          options: [
            { label: '約半ポット（5bb）ベット', good: true, why: 'CO のチェックは弱さのサイン。取りに行きます。' },
            { label: 'チェック', good: false, why: '悪くはありませんが、取れるポットを逃しやすい場面です。' },
          ],
        },
      ],
      outro: 'フロートは「IP で安くコールし、相手がチェックしたら取る」戦略です。',
    },
    { t: 'h', text: '成り立つ条件' },
    {
      t: 'list',
      items: [
        '自分が **IP**（相手のチェックを見てから動ける）',
        '相手の c-bet が広く、ターンで諦めやすい',
        '自分にオーバーカードやバックドアがある',
      ],
    },
    {
      t: 'tree',
      root: 'CO が2bbをc-bet。BTN（A♠J♠）は Q♦6♣2♥ でフロートするか',
      options: [
        {
          label: 'コールしてターンで狙う',
          outcomes: [
            { label: 'ターンでチェックされ、ベットで降ろす', prob: 0.36, value: 8.5 },
            { label: 'ターンでチェックされ、ベットが通らない', prob: 0.24, value: -4 },
            { label: 'ターンでバレルされて降りる', prob: 0.4, value: -2 },
          ],
        },
        { label: 'フォールド', ev: 0 },
      ],
      caption: '数値は単純化した例です。相手がターンでチェックする頻度で収支が決まります。',
    },
    {
      t: 'compare',
      left: {
        title: 'フロート向き',
        cards: ['As', 'Js'],
        board: ['Qd', '6c', '2h'],
        points: ['A のオーバーカード', 'バックドアのストレートとフラッシュ'],
        verdict: 'good',
      },
      right: {
        title: 'フロート不向き',
        cards: ['9d', '3c'],
        board: ['Qd', '6c', '2h'],
        points: ['改善しても弱い', 'バレルされたら降りるだけ'],
        verdict: 'bad',
      },
    },
    {
      t: 'estimate',
      q: 'ポット6.5bbに2bbのc-bet。コールに必要な勝率は何%？',
      min: 0,
      max: 50,
      step: 1,
      unit: '%',
      answer: 19,
      tolerance: 4,
      explain: '2 ÷ (6.5 + 4) ≈ 19% です。料金が安いので、弱い手でもコールしやすくなります。',
    },
    {
      t: 'warn',
      text: 'ターンでも高い頻度で打ってくる相手には、フロートは控えます。',
    },
    { t: 'h', text: 'もう一度：フロートする手を選ぶ' },
    {
      t: 'rapid',
      q: 'BTN（IP）。CO が 2bb の c-bet。',
      choices: ['続ける', 'フォールド'],
      items: [
        { cards: ['As', 'Js'], board: ['Qd', '6c', '2h'], answer: 0, why: 'オーバーカードとバックドアがあります。' },
        { cards: ['9d', '3c'], board: ['Qd', '6c', '2h'], answer: 1, why: '改善しても弱く、粘る理由がありません。' },
        { cards: ['Kh', 'Th'], board: ['Qd', '6c', '2h'], answer: 0, why: 'K のオーバーカードとバックドアがあります。' },
        { cards: ['Ac', '5c'], board: ['Qd', '6c', '2h'], answer: 0, why: 'A とバックドアのフラッシュ・ストレートがあります。' },
        { cards: ['5s', '5h'], board: ['Qd', '6c', '2h'], answer: 0, why: '小さくてもペア。安い c-bet には続けます。' },
        { cards: ['7s', '3s'], board: ['Qd', '6c', '2h'], answer: 1, why: 'ほとんど勝ち目がありません。' },
      ],
    },
  ],
};

export default lesson;
