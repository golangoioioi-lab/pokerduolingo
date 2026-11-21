import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-03',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。CO のオープンに BTN で Q♠Q♥。3ベットポットで、リバーにちょうどオールインが残るサイズを組み立てます。' },
    {
      t: 'play',
      title: 'BTN で QQ、3ベットポット',
      hero: 'BTN',
      heroCards: ['Qs', 'Qh'],
      villain: 'CO',
      villainCards: ['Ah', 'Jh'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'CO が 2.5bb でオープン。あなたは BTN で **Q♠Q♥**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'QQ は CO のレンジに大きく有利です。' },
            { label: 'コール', good: false, why: 'ブラインドが安く参加でき、ポットも小さいままです。' },
            { label: '8bb に 3ベット', good: true, why: 'AJ・KQ・TT などからプリフロップで多くのチップを集めます。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Jc', '7d', '2s'],
          pot: 17.5,
          say: 'CO がコール。残りは 92bb（SPR 約5.3）。レインボーの乾いたボードで、CO はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'J や TT〜88 から取る機会を逃します。' },
            { label: '6bb（約1/3）ベット', good: true, why: '小さいサイズなら TT〜88・弱い J・A ハイまでコールしてくれます。' },
            { label: '14bb（約80%）ベット', good: false, why: '弱い手が降り、強い J やセットだけが残ります。' },
          ],
        },
        {
          street: 'ターン',
          board: ['5h'],
          pot: 29.5,
          say: 'CO がコールし、またチェック。5♥ はほぼ何も変えません。残りは 86bb。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'ポットが育たず、リバーでスタックを入れきれません。' },
            { label: '19bb（約2/3）ベット', good: true, why: 'J や TT からもう一度取り、リバーにポット1杯分の残りを作ります。' },
            { label: '86bb オールイン', good: false, why: 'ポットの約3倍。J の多くが降ります。' },
          ],
        },
        {
          street: 'リバー',
          board: ['3c'],
          pot: 67.5,
          say: 'CO がコールし、またチェック。残りは 67bb で、ポットとほぼ同じです。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: '2回コールした J や TT から取れる額を捨てます。' },
            { label: '25bb ベット', good: false, why: 'コールはされますが、残り 42bb を取り逃します。' },
            { label: '67bb オールイン', good: true, why: 'SPR 1 では、ここまで払った AJ・KJ・TT は降りにくくなっています。' },
          ],
        },
      ],
      outro: 'CO は A♥J♥ でコールし、201.5bb を獲得。小・中・ポット の順に並べると、3ストリートで自然に全額が入ります。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'p', text: '3ベットポットはフロップの時点でポットが大きく、SPR が小さくなります。小さいサイズから始めても、3ストリートで全額に届きます。' },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 17.5, stack: 92 },
        { label: 'ターン開始', pot: 29.5, stack: 86 },
        { label: 'リバー開始', pot: 67.5, stack: 67 },
      ],
      caption: 'SPR は 5.3 → 2.9 → 1.0。フロップ 3分の1、ターン 3分の2 で、リバーにポット1杯分のオールインが残ります。',
    },
    {
      t: 'estimate', q: 'リバー開始時の SPR（残りスタック ÷ ポット）はおよそ？',
      hand: ['Qs', 'Qh'], board: ['Jc', '7d', '2s', '5h', '3c'],
      min: 0, max: 5, step: 0.1, unit: '', answer: 1, tolerance: 0.5,
      explain: '67 ÷ 67.5 ≒ 1.0 です。SPR 1 は「ポットと同じ額を打てばオールイン」という意味です。',
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 17.5, actions: ['CO 2.5bb オープン', 'BTN（あなた）8bb に 3ベット', 'CO コール'] },
        { street: 'フロップ', board: ['Jc', '7d', '2s'], pot: 17.5, actions: ['CO チェック', 'あなた 6bb ベット', 'CO コール'] },
        { street: 'ターン', board: ['5h'], pot: 29.5, actions: ['CO チェック', 'あなた 19bb ベット', 'CO コール'] },
        { street: 'リバー', board: ['3c'], pot: 67.5, actions: ['CO チェック', 'あなた 67bb オールイン', 'CO コール'] },
        { street: 'ショーダウン', pot: 201.5, actions: ['QQ が AJ に勝ち、201.5bb を獲得'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    { t: 'h', text: 'もう一度：オールインか、通常のベットか' },
    {
      t: 'rapid',
      q: 'リバーで QQ。相手は J のペアで2回コールしてきた。どう打つ？',
      choices: ['オールイン', '通常サイズ（約2/3）'],
      items: [
        { cards: ['Qs', 'Qh'], board: ['Jc', '7d', '2s', '5h', '3c'], text: 'ポット 67bb・残り 67bb', answer: 0, why: '残りがポットと同じ。オールインがそのまま自然なサイズです。' },
        { cards: ['Qs', 'Qh'], board: ['Jc', '7d', '2s', '5h', '3c'], text: 'ポット 20bb・残り 90bb', answer: 1, why: '残りはポットの4.5倍。オールインでは J のペアがまず降ります。' },
        { cards: ['Qs', 'Qh'], board: ['Jc', '7d', '2s', '5h', '3c'], text: 'ポット 50bb・残り 30bb', answer: 0, why: '残りはポットの6割。2/3 を打てばほぼ全額です。' },
        { cards: ['Qs', 'Qh'], board: ['Jc', '7d', '2s', '5h', '3c'], text: 'ポット 30bb・残り 85bb', answer: 1, why: '残りはポットの約3倍。払える手が大きく減ります。' },
        { cards: ['Qs', 'Qh'], board: ['Jc', '7d', '2s', '5h', '3c'], text: 'ポット 100bb・残り 60bb', answer: 0, why: '残りはポットより小さく、オールインでも払ってもらえます。' },
        { cards: ['Qs', 'Qh'], board: ['Jc', '7d', '2s', '5h', '3c'], text: 'ポット 15bb・残り 95bb', answer: 1, why: 'ポットの6倍以上。オールインにはまず降ります。' },
        { cards: ['Qs', 'Qh'], board: ['Jc', '7d', '2s', '5h', '3c'], text: 'ポット 45bb・残り 48bb', answer: 0, why: 'SPR は約1。オールインが自然です。' },
      ],
    },
    { t: 'tip', text: 'フロップの時点で、3ストリートで全額を入れるサイズの並びを考えます。SPR 5 前後なら、小・中・ポット の順で届きます。' },
  ],
};

export default lesson;
