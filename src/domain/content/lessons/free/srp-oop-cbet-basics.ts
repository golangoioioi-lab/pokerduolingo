import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'srp-oop-cbet-basics',
  blocks: [
    { t: 'h', text: 'ポジションなしで打ってみる' },
    {
      t: 'play',
      title: 'CO で AQ、BTN にコールされる',
      hero: 'CO',
      heroCards: ['Ah', 'Qc'],
      villain: 'BTN',
      steps: [
        {
          street: 'プリフロップ',
          pot: 1.5,
          say: 'UTG と HJ がフォールド。あなたは CO で **A♥Q♣**。',
          q: 'どうする？',
          options: [
            { label: '2.5bb レイズ', good: true, why: 'AQo は CO で問題なくオープンできます。' },
            { label: 'リンプ', good: false, why: 'オープンはレイズで入るのが基本です。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Qd', '8c', '3s'],
          pot: 6.5,
          say: 'BTN がコール、ブラインドは降り。フロップは **Q♦8♣3♠**。あなたが先に行動します。',
          q: 'トップペア・トップキッカー。どうする？',
          options: [
            { label: '2bb（約30%）ベット', good: true, why: '弱い Q や 8、ドローから価値を取れます。' },
            { label: 'チェック', good: false, why: 'OOP ではチェックも増えますが、この手は打って価値を取る側です。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2h'],
          pot: 10.5,
          say: 'BTN がコール。ターンは **2♥**。ボードはほとんど変わりません。',
          q: 'どうする？',
          options: [
            { label: '約半ポット（5bb）ベット', good: true, why: 'KQ や QJ、8x などがまだ払ってくれます。' },
            { label: 'オールイン', good: false, why: '大きすぎると、もっと強い手にしかコールされません。' },
          ],
        },
      ],
      outro: '乾いた高いボードは、OOP でも打ちやすいボードです。強いトップペアは素直にバリューを取ります。',
    },
    { t: 'h', text: 'OOP では頻度が下がる' },
    {
      t: 'p',
      text: 'OOP は先に動くので情報が少なく、その後も相手に先に判断されます。同じボードでも IP より c-bet を減らし、チェックを混ぜます。CO対BTN全体では **4割前後**が目安です。',
    },
    {
      t: 'compare',
      left: {
        title: 'IP（BTN対BB）',
        board: ['Ks', '7d', '2c'],
        points: ['c-bet：7〜8割（目安）', 'サイズ：小'],
        verdict: 'good',
      },
      right: {
        title: 'OOP（CO対BTN）',
        board: ['Ks', '7d', '2c'],
        points: ['c-bet：5〜6割（目安）', 'サイズ：小〜中', 'チェックすると主導権を渡す'],
        verdict: 'neutral',
      },
      caption: '同じボードでも、位置がなければ頻度は落ちます。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'プリフロップ後', pot: 6.5, stack: 97.5 },
        { label: 'フロップ 2bet・コール後', pot: 10.5, stack: 95.5 },
        { label: 'ターン 5bet・コール後', pot: 20.5, stack: 90.5 },
      ],
      caption: 'CO 2.5bb、BTN コール、ブラインド降り。ポットは 6.5bb から始まります。',
    },
    {
      t: 'p',
      text: '打つのは**強い手**と**ドロー・バックドアのある手**。ミドルペアの弱いキッカーのような中くらいの手はチェックして安く見ます。チェックにも強い手を少し残すと、相手に好き勝手に打たれません。',
    },
    {
      t: 'quiz',
      q: 'CO が OOP でチェックを大きく増やすのはなぜ？',
      board: ['7h', '6h', '5c'],
      hand: ['Ac', 'Kd'],
      options: ['BTN のコールレンジに強い手が多いから', 'ポットが小さいから', 'A ハイは必ず勝つから', 'ルールで決まっているから'],
      answer: 0,
      explain: 'つながったボードでは、BTN のスーテッドコネクターや小さなペアがストレートやセットになりやすいです。',
    },
    { t: 'h', text: 'もう一度：打つ手と待つ手' },
    {
      t: 'rapid',
      q: 'CO（OOP）対BTN。この手でフロップは？',
      choices: ['ベット', 'チェック'],
      items: [
        { cards: ['Ah', 'Qc'], board: ['Qd', '8c', '3s'], answer: 0, why: '強いトップペアはバリューです。' },
        { cards: ['8h', '7h'], board: ['Qd', '8c', '3s'], answer: 1, why: 'ミドルペア弱キッカーは安く見ます。' },
        { cards: ['Jh', 'Th'], board: ['Qd', '8c', '3s'], answer: 0, why: 'ガットショットとバックドアがあり、ブラフに向きます。' },
        { cards: ['3d', '3h'], board: ['Qd', '8c', '3s'], answer: 0, why: 'セットはバリューです。' },
        { cards: ['5c', '5d'], board: ['Qd', '8c', '3s'], answer: 1, why: '降ろしたい手が少なく、チェックで十分です。' },
        { cards: ['Ac', 'Kd'], board: ['7h', '6h', '5c'], answer: 1, why: 'BTN に有利なボード。AK ハイはチェックが中心です。' },
        { cards: ['Qh', 'Qs'], board: ['Qd', '8c', '3s'], answer: 0, why: 'トップセット。迷わずバリューです。' },
      ],
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'OOP の c-bet は IP より少なめ。強い手とドローで打ち、中くらいの手はチェックします。',
    },
  ],
};

export default lesson;
