import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'tr-blocker-bluffcatch',
  blocks: [
    { t: 'h', text: 'まずやってみる：どのJでコールする？' },
    {
      t: 'p',
      text: 'BBはチェックコールを続け、リバーK♥でBTNがポットサイズを打ちました。BTNのバリューはKJ・AJ・セット、ブラフは外れたストレートドロー（T9とQT）です。',
    },
    {
      t: 'quiz',
      q: 'どれも同じJのペア。コールに最も向くのはどれ？',
      board: ['Jd', '8c', '4h', '2s', 'Kh'],
      options: ['J♠T♠', 'J♠5♠', 'J♠9♠', 'J♠Q♠'],
      optionCards: [['Js', 'Ts'], ['Js', '5s'], ['Js', '9s'], ['Js', 'Qs']],
      answer: 1,
      explain: 'J♠5♠は相手のブラフを何も減らしません。T・9・Qを持つ手は、BTNのT9やQTを減らし、コール時の勝率を下げます。',
    },
    { t: 'h', text: 'コンボで確かめる' },
    {
      t: 'combos',
      groups: [
        { label: 'BTNのバリュー', hands: ['KJ', 'AJ', '88', '44', 'KK'] },
        { label: 'BTNのブラフ', hands: ['T9', 'QT'] },
      ],
      dead: ['Jd', '8c', '4h', '2s', 'Kh', 'Js', 'Ts'],
      caption: 'BBがJ♠T♠を持つとき',
    },
    {
      t: 'combos',
      groups: [
        { label: 'BTNのバリュー', hands: ['KJ', 'AJ', '88', '44', 'KK'] },
        { label: 'BTNのブラフ', hands: ['T9', 'QT'] },
      ],
      dead: ['Jd', '8c', '4h', '2s', 'Kh', 'Js', '5s'],
      caption: 'BBがJ♠5♠を持つとき',
    },
    {
      t: 'table',
      head: ['BBの手', 'バリュー', 'ブラフ', 'コール時の勝率'],
      rows: [
        ['J♠T♠', '23', '24', '24 ÷ 47 ≈ 51%'],
        ['J♠5♠', '23', '32', '32 ÷ 55 ≈ 58%'],
      ],
    },
    {
      t: 'p',
      text: 'キッカーが強いJ♠T♠の方がコールに向かないのは、直感と逆です。リバーのブラフキャッチでは、キッカーより**ブロッカー**が勝敗を決めます。',
    },
    {
      t: 'estimate',
      q: 'BBがJ♠T♠を持つとき、BTNのT9は何コンボ残っている？',
      hand: ['Js', 'Ts'],
      board: ['Jd', '8c', '4h', '2s', 'Kh'],
      min: 0,
      max: 32,
      step: 1,
      unit: 'コンボ',
      answer: 12,
      tolerance: 3,
      explain: 'T♠をBBが持つのでTは3枚、9は4枚。3 × 4 = 12コンボです。',
    },
    { t: 'h', text: '相手のブラフが少ないと差が開く' },
    {
      t: 'p',
      text: 'BTNがT9とQTの半分しかブラフしないなら、J♠T♠は約34%、J♠5♠は約41%。必要勝率は約33%なので、J♠T♠はぎりぎり、J♠5♠ははっきりコールです。',
    },
    {
      t: 'compare',
      left: {
        title: 'コールに向く',
        points: ['相手のバリュー（2ペア・セット）のカードを持つ', '外れたドローと関係ないカードを持つ'],
        verdict: 'good',
      },
      right: {
        title: 'コールに向かない',
        points: ['外れたフラッシュドローと同じスートを持つ', '外れたストレートドローのカードを持つ'],
        verdict: 'bad',
      },
      caption: '強さが同じブラフキャッチャーの中で選ぶときの基準',
    },
    { t: 'h', text: 'もう一度やる' },
    {
      t: 'rapid',
      q: 'BTNのブラフはT9・QT。この手はコール向き？ フォールド向き？',
      choices: ['コール向き', 'フォールド向き'],
      items: [
        { cards: ['Js', '5s'], board: ['Jd', '8c', '4h', '2s', 'Kh'], answer: 0, why: 'ブラフを何も減らしません。' },
        { cards: ['Js', 'Ts'], board: ['Jd', '8c', '4h', '2s', 'Kh'], answer: 1, why: 'Tを持つので、T9とQTのブラフが減ります。' },
        { cards: ['Js', '9s'], board: ['Jd', '8c', '4h', '2s', 'Kh'], answer: 1, why: '9を持つので、T9のブラフが減ります。' },
        { cards: ['As', 'Js'], board: ['Jd', '8c', '4h', '2s', 'Kh'], answer: 0, why: 'Aを持つので、BTNのバリューのAJが減ります。' },
        { cards: ['Qs', 'Js'], board: ['Jd', '8c', '4h', '2s', 'Kh'], answer: 1, why: 'Qを持つので、QTのブラフが減ります。' },
        { cards: ['Js', '6s'], board: ['Jd', '8c', '4h', '2s', 'Kh'], answer: 0, why: '6はどのブラフとも関係ありません。' },
      ],
    },
    {
      t: 'play',
      title: 'BBでJ♠5♠',
      hero: 'BB',
      heroCards: ['Js', '5s'],
      villain: 'BTN',
      villainCards: ['Qc', 'Td'],
      steps: [
        { street: 'フロップ', board: ['Jd', '8c', '4h'], pot: 5.5, say: 'BTNのオープンにコール。フロップでJのペア。BTNの1.8bbにコール。' },
        { street: 'ターン', board: ['2s'], pot: 9.1, say: 'BTNが5.5bbをベット。コール。' },
        {
          street: 'リバー',
          board: ['Kh'],
          pot: 20.1,
          say: 'リバーK♥。BTNがポットサイズの20bbを打ちました。BTNには外れたストレートドローが多くあります。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: '5はブラフを何も減らしません。必要勝率約33%に対し、コールに向くJxです。' },
            { label: 'フォールド', good: false, why: 'ブラフを減らさないJxを降りると、守る量が足りなくなります。' },
          ],
        },
      ],
      outro: 'BTNはQTの外れたドローでした。ブロッカーで選んだJxが、ブラフを捕まえます。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'コールの線の近くでは、キッカーよりブロッカーで選びます。相手のバリューを減らす手を残し、相手のブラフを減らす手から降ります。',
    },
  ],
};

export default lesson;
