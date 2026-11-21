import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'squeeze',
  blocks: [
    { t: 'h', text: 'まず判断してみる' },
    {
      t: 'rapid',
      q: 'CO が 2.5bb でオープン、BTN がコール。SB のあなたはスクイーズ（3bet）する？',
      choices: ['スクイーズ', 'フォールド'],
      items: [
        { cards: ['As', '5s'], answer: 0, why: 'A のブロッカーがあり、コールされてもフラッシュやホイールがあります。' },
        { cards: ['Kd', '8c'], answer: 1, why: 'ブロッカーもプレイアビリティもありません。' },
        { cards: ['Qh', 'Qc'], answer: 0 },
        { cards: ['7d', '2c'], answer: 1 },
        { cards: ['Ah', 'Kd'], answer: 0 },
        { cards: ['Jh', '4s'], answer: 1 },
        { cards: ['Kc', 'Tc'], answer: 0, why: 'KTs のようなスーテッドはブラフの候補です。' },
        { cards: ['Js', 'Jd'], answer: 0, why: 'SB からなら JJ もバリューで入れやすい手です。' },
        { cards: ['Qd', '7s'], answer: 1 },
      ],
    },
    { t: 'p', text: 'オープンとコールの後に3betするのが**スクイーズ**です。2人の間に挟み込むので、この名前がついています。' },
    {
      t: 'seats',
      seats: [
        { pos: 'CO', bet: 2.5, action: 'オープン' },
        { pos: 'BTN', bet: 2.5, action: 'コール' },
        { pos: 'SB', hero: true, bet: 13, action: 'スクイーズ' },
        { pos: 'BB', folded: true },
      ],
      pot: 19,
      caption: 'サイズは OOP の3bet 10bb ＋ コーラー1人分 2.5bb で約13bb。',
    },
    { t: 'h', text: 'なぜ通りやすいのか' },
    { t: 'p', text: 'ポットに**デッドマネー**が多く、コーラーのレンジは QQ+ や AK を含まない（**キャップ**されている）ことが多いからです。オープンした側も、後ろにコーラーがいるので中くらいの手で続けにくくなります。' },
    {
      t: 'tree',
      root: 'CO・BTN に SB から 13bb でスクイーズ（ポット 6.5bb、追加 12.5bb）',
      options: [
        { label: 'フォールド', ev: 0 },
        {
          label: 'ブラフでスクイーズ（66% 降りる）',
          outcomes: [{ label: '全員フォールド', prob: 0.66, value: 6.5 }, { label: 'コールされる', prob: 0.34, value: -12.5 }],
          note: 'ほぼ損益なし',
        },
      ],
      caption: '必要フォールド率は 12.5 ÷ 19 ≈ 66%。続けられた後の価値は 0 として単純化しています。',
    },
    {
      t: 'estimate',
      q: 'HJ 2.5bb オープン、BTN コール、SB フォールド。BB が 14bb にスクイーズ。ブラフが利益になるのに必要なフォールド率は？',
      min: 30,
      max: 90,
      step: 1,
      unit: '%',
      answer: 67,
      tolerance: 5,
      explain: 'ポットは 2.5 + 2.5 + 0.5 + 1 = 6.5bb、追加額は 13bb。13 ÷ 19.5 ≈ 67% です。',
    },
    {
      t: 'warn',
      title: 'コーラーの罠',
      text: 'AA や KK をあえてフラットする相手には、ブラフのスクイーズを減らします。',
    },
    { t: 'h', text: 'もう一度：SB からスクイーズ' },
    {
      t: 'play',
      title: 'SB で A4s をスクイーズ',
      hero: 'SB',
      heroCards: ['Ad', '4d'],
      villain: 'BTN',
      steps: [
        {
          street: 'プリフロップ',
          pot: 6.5,
          say: 'CO が 2.5bb でオープン、BTN がコール。あなたは SB で **A♦4♦**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'デッドマネーが多く、ブロッカーもある絶好の場面です。' },
            { label: 'コール', good: false, why: 'OOP で3人のポットになり、BB にもスクイーズされます。' },
            { label: '13bb にスクイーズ', good: true, why: 'A のブロッカーとスーテッドで、ブラフに最適です。' },
            { label: '7.5bb に3bet', good: false, why: '小さすぎると2人とも安く参加できます。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Qs', '7d', '2d'],
          pot: 29.5,
          say: 'CO はフォールド、BTN がコール。フロップは **Q♠7♦2♦**。ナッツフラッシュドローです。',
          q: 'あなたから。どうする？',
          options: [
            { label: 'チェック', good: false, why: 'チェックもありますが、主導権を持つ側として打つほうが降ろせる分得です（接戦）。' },
            { label: '10bb ベット', good: true, why: '3betポットでは小さめのベットで十分。ドローなので打つ価値が高いです。' },
          ],
        },
        {
          street: 'ターン',
          board: ['5c'],
          pot: 49.5,
          say: 'BTN がコール。ターンは **5♣**。3 でホイールのガットショットも加わりました。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: '残り 77bb。打てば相手の Q 以外の多くを降ろせます。' },
            { label: '33bb ベット', good: true, why: 'フラッシュドロー＋ガットショット。コールされても約4回に1回は完成するセミブラフです。' },
          ],
        },
      ],
      outro: 'BTN はフォールド。デッドマネーの多いポットを、ドロー付きのブラフで取れました。',
    },
    {
      t: 'quiz',
      q: 'スクイーズがブラフとして通りやすい主な理由は？',
      options: ['コールした人のレンジには強い手が少ないことが多い', 'コールした人は必ずポジションがない', 'スクイーズすると SPR が大きくなる'],
      answer: 0,
      explain: '強い手の多くは3betされるので、コーラーのレンジはキャップされています。スクイーズでポットが大きくなると SPR はむしろ小さくなります。',
    },
  ],
};

export default lesson;
