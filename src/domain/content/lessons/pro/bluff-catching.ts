import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'bluff-catching',
  blocks: [
    { t: 'h', text: 'まずやってみる：どちらでコールする？' },
    { t: 'p', text: 'フラッシュドローが外れたリバー。相手がポットサイズでベットしました。必要な勝率は33.3%です。' },
    {
      t: 'quiz',
      q: '同じトップペアでも、コールすべきなのはどちら？',
      board: ['Jh', 'Th', '5c', '3s', '2d'],
      options: ['J♣9♣', 'J♦9♥'],
      optionCards: [['Jc', '9c'], ['Jd', '9h']],
      answer: 0,
      explain: 'J♦9♥は9♥を持つため、相手のブラフ（外れたハートのドロー）が減ります。J♣9♣はハートを持たず、ブラフが全部残ります。',
    },
    { t: 'h', text: 'バリューを減らし、ブラフを残す手' },
    { t: 'p', text: '**ブラフキャッチャー**は、相手のブラフには勝ち、バリューには負ける手です。強さが同じなら、相手のブラフに使われるカードを持たない手でコールします。' },
    {
      t: 'compare',
      left: {
        title: '手A：J♣9♣',
        cards: ['Jc', '9c'],
        board: ['Jh', 'Th', '5c', '3s', '2d'],
        verdict: 'good',
        points: ['ハートなし。相手のブラフ13コンボが残る', 'ブラフの割合は38.2%'],
      },
      right: {
        title: '手B：J♦9♥',
        cards: ['Jd', '9h'],
        board: ['Jh', 'Th', '5c', '3s', '2d'],
        verdict: 'bad',
        points: ['9♥が相手のブラフ4コンボを消す', 'ブラフの割合は30.0%'],
      },
      caption: '相手のバリューは AJ・JT・JJ・TT・55 の21コンボ、ブラフは外れたハートのドロー13コンボと仮定。',
    },
    { t: 'odds', pot: 30, bet: 30, equity: 38.2, caption: '手A：ブラフ 13÷34 ≒ 38.2%。必要勝率33.3%を上回る。' },
    { t: 'odds', pot: 30, bet: 30, equity: 30, caption: '手B：ブラフ 9÷30 = 30%。必要勝率33.3%に届かない。' },
    {
      t: 'estimate',
      q: '手B（J♦9♥）から見た相手のブラフの割合は？（バリュー21、ブラフ9コンボ）',
      hand: ['Jd', '9h'],
      board: ['Jh', 'Th', '5c', '3s', '2d'],
      min: 0,
      max: 60,
      step: 1,
      unit: '%',
      answer: 30,
      tolerance: 5,
      explain: '9 ÷ (21 + 9) = 30%。ポットサイズに必要な33.3%に届きません。',
    },
    { t: 'h', text: 'もう一度やる' },
    {
      t: 'play',
      title: 'BBで J♣9♣',
      hero: 'BB',
      heroCards: ['Jc', '9c'],
      villain: 'BTN',
      villainCards: ['Qh', '9h'],
      steps: [
        {
          street: 'フロップ',
          board: ['Jh', 'Th', '5c'],
          pot: 7.5,
          say: 'BTNのオープンにコール。トップペア。あなたはチェックし、BTNが2bbベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'トップペア。BTNのドローや弱いペアに勝っています。' },
            { label: 'フォールド', good: false, why: 'トップペアで降りるのは早すぎます。' },
          ],
        },
        {
          street: 'ターン',
          board: ['3s'],
          pot: 14.5,
          say: 'ターン3♠。あなたはチェックし、BTNが5bbベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'ドローの多いボード。BTNのセミブラフにも勝っています。' },
            { label: 'フォールド', good: false, why: '勝っている手から降りることになります。' },
          ],
        },
        {
          street: 'リバー',
          board: ['2d'],
          pot: 39,
          say: 'リバー2♦でドローはすべて外れた。あなたはチェックし、BTNが19.5bb（ポットサイズ）ベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'ハートを持たないので、外れたドローのブラフが全部残ります。' },
            { label: 'フォールド', good: false, why: 'ブラフの割合が必要勝率を上回る想定です。' },
          ],
        },
      ],
      outro: 'BTNはQ♥9♥の外れたドロー。ブラフに使われるカードを持たない手は、良いブラフキャッチャーです。',
    },
    {
      t: 'rapid',
      q: 'ブラフキャッチャー。この状況でコール？',
      choices: ['コール', 'フォールド'],
      items: [
        { cards: ['Jc', '9c'], board: ['Jh', 'Th', '5c', '3s', '2d'], text: 'ポットサイズ（必要33%）', answer: 0, why: 'ブラフは38.2%。必要勝率を上回ります。' },
        { cards: ['Jd', '9h'], board: ['Jh', 'Th', '5c', '3s', '2d'], text: 'ポットサイズ（必要33%）', answer: 1, why: '9♥でブラフが減り30%。届きません。' },
        { cards: ['Jd', '9h'], board: ['Jh', 'Th', '5c', '3s', '2d'], text: 'ハーフポット（必要25%）', answer: 0, why: '30%は25%を上回ります。サイズで結論が変わります。' },
        { text: '2倍ポット（必要40%）。相手のブラフは35%', answer: 1, why: '大きいベットほど多くのブラフが必要です。' },
        { text: '1/3ポット（必要20%）。相手のブラフは22%', answer: 0, why: '小さいベットは少しのブラフでもコールが利益です。' },
      ],
    },
    { t: 'tip', text: '外れたドローが多いボードでは、そのスートを持っていない手をブラフキャッチャーに選びます。' },
  ],
};

export default lesson;
