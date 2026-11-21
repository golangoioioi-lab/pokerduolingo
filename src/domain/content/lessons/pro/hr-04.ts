import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr-04',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。CO のオープンに BTN の Q♠Q♥ で 3bet します。SPR が小さい 3bet ポットで、オーバーペアをどう扱うかを試します。' },
    {
      t: 'play',
      title: '3bet ポットの QQ',
      hero: 'BTN',
      heroCards: ['Qs', 'Qh'],
      villain: 'CO',
      villainCards: ['Ad', 'Kd'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'CO が 2.5bb にオープン。あなたは BTN で **Q♠Q♥**。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: false, why: '強い手はポットを大きくして主導権を取ります。' },
            { label: '8bb に 3bet', good: true, why: 'QQ は 3bet でバリューを取る手です。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Jd', '7c', '3d'],
          pot: 17.5,
          say: 'ブラインドはフォールドし、CO がコール。オーバーペアで、ダイヤのドローもあるボード。CO はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'ドローにタダでカードを見せてしまいます。' },
            { label: '6bb（約3分の1）ベット', good: true, why: 'AJ・TT・ドローなど負けている手から払わせ、全部入る前提で進めます。' },
            { label: '92bb オールイン', good: false, why: '負けている手はほとんどコールしません。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2h'],
          pot: 128.5,
          say: 'CO がコール。2♥ のあと CO チェック、あなたが 13bb をベットすると、CO が 86bb のオールイン。',
          q: 'あと 73bb。どうする？',
          options: [
            { label: 'コール', good: true, why: 'CO のオールイン全体に対する勝率は約43%で、必要勝率36%を上回ります。' },
            { label: 'フォールド', good: false, why: 'セットだけでなくドローも多く、SPR 3未満で降りるのは大きなミスです。' },
          ],
        },
        {
          street: 'リバー',
          board: ['8c'],
          pot: 201.5,
          say: 'オールイン。リバーは 8♣。',
        },
      ],
      outro: 'CO は A♦K♦ のドロー。QQ が勝って 201.5bb を獲得しました。負けるのは約3回に1回で、長期的にもコールが利益です。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'p', text: '3bet ポットは SPR が小さく、オーバーペアは全部入る前提で進めます。オールインを受けたら、セットだけでなくドローも含めてコンボで数えます。' },
    {
      t: 'estimate',
      q: 'フロップ開始時の SPR（スタック 92bb ÷ ポット 17.5bb）は？',
      min: 0,
      max: 20,
      step: 0.5,
      answer: 5.5,
      tolerance: 1,
      explain: '92 ÷ 17.5 ≒ 5.3。シングルレイズポット（約18）の3分の1以下です。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ', pot: 17.5, stack: 92 },
        { label: 'ターン', pot: 29.5, stack: 86 },
      ],
      caption: '6bbのベットとコールでSPRは約5.3から約2.9に。',
    },
    {
      t: 'estimate',
      q: 'コールする追加額は 73bb、コール後のポットは 201.5bb。必要な勝率は？',
      hand: ['Qs', 'Qh'],
      board: ['Jd', '7c', '3d', '2h'],
      min: 0,
      max: 60,
      step: 1,
      unit: '%',
      answer: 36,
      tolerance: 5,
      explain: '73 ÷ 201.5 ≒ 36%。',
    },
    { t: 'equity', players: [{ label: 'あなた（QQ）', cards: ['Qs', 'Qh'], pct: 43 }, { label: 'COのオールインレンジ全体', pct: 57 }], board: ['Jd', '7c', '3d', '2h'], caption: 'セット6・J7s 2・ドロー10コンボの平均で約43%。必要勝率36%を上回る。' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 1.5, actions: ['COが2.5bbにオープン', 'あなた（BTN）が8bbに3ベット、COコール'] },
        { street: 'フロップ', board: ['Jd', '7c', '3d'], pot: 17.5, actions: ['COチェック', 'あなたが6bbベット、COコール'] },
        { street: 'ターン', board: ['2h'], pot: 29.5, actions: ['COチェック、あなたが13bbベット', 'COが86bbオールイン、あなたがコール'] },
        { street: 'リバー', board: ['8c'], pot: 201.5, actions: ['QQがそのまま勝ち'] },
      ],
    },
    { t: 'h', text: 'もう一度：オールインの中身' },
    {
      t: 'rapid',
      q: 'ターン J♦7♣3♦2♥。CO がこの手でオールイン。Q♠Q♥ の勝率は必要な36%を超える？',
      choices: ['超える', '超えない'],
      items: [
        { cards: ['7s', '7h'], board: ['Jd', '7c', '3d', '2h'], answer: 1, why: 'セットには約5%しかありません。' },
        { cards: ['Ad', 'Kd'], board: ['Jd', '7c', '3d', '2h'], answer: 0, why: '15アウツのドローでも、QQ が約66%です。' },
        { cards: ['Js', '7s'], board: ['Jd', '7c', '3d', '2h'], answer: 1, why: 'ツーペアには約18%。ボードの3か2が落ちたときだけ逆転します。' },
        { cards: ['9d', '8d'], board: ['Jd', '7c', '3d', '2h'], answer: 0, why: '12アウツのドローには約73%あります。' },
        { cards: ['3s', '3h'], board: ['Jd', '7c', '3d', '2h'], answer: 1, why: 'セットには約5%です。' },
        { cards: ['Ts', 'Tc'], board: ['Jd', '7c', '3d', '2h'], answer: 0, why: '下のペアには約95%です。' },
        { cards: ['6d', '5d'], board: ['Jd', '7c', '3d', '2h'], answer: 0, why: 'フラッシュドロー＋ガットショットでも約73%です。' },
        { cards: ['As', 'Js'], board: ['Jd', '7c', '3d', '2h'], answer: 0, why: 'J のトップペアには約89%です。' },
      ],
    },
    { t: 'tip', text: 'SPR 3未満のポットでは、オーバーペアはスタックを入れて構わない手です。降りるのは相手がセットしか持たない、かなり固いタイプのときだけです。' },
  ],
};

export default lesson;
