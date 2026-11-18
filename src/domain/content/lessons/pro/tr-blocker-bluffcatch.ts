import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'tr-blocker-bluffcatch',
  blocks: [
    {
      t: 'p',
      text: 'MDFでコールの線を引くと、線の近くには強さがほぼ同じ手が並びます。そのどれを残すかを決めるのがブロッカーです。**相手のバリューを減らす手はコールに向く**。**相手のブラフを減らす手は向かない**。',
    },
    { t: 'h', text: '例：J♦8♣4♥2♠K♥' },
    {
      t: 'p',
      text: 'BBはチェックコールを続け、リバーK♥でBTNがポットサイズを打ちました。BTNのバリューはKJ・AJ・セット、ブラフは外れたストレートドロー（T9とQT）。BBの候補はJ♠T♠とJ♠5♠で、どちらもJのペアです。',
    },
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
      t: 'p',
      text: 'バリューはどちらも23コンボ。違いはブラフです。J♠T♠はTを持つのでブラフが24コンボに減り、J♠5♠は32コンボのままです。',
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
      text: '同じJのペアでも、キッカーが強いJ♠T♠の方がコールに向かないのは直感と逆です。リバーのブラフキャッチでは、キッカーよりブロッカーが勝敗を決めることが多くなります。',
    },
    { t: 'h', text: '相手のブラフが少ないと差が開く' },
    {
      t: 'p',
      text: 'BTNがT9とQTの半分しかブラフしないなら、J♠T♠は12 ÷ 35 ≈ 34%、J♠5♠は16 ÷ 39 ≈ 41%です。ポットサイズの必要勝率は約33%なので、J♠T♠はぎりぎり、J♠5♠ははっきりコールです。',
    },
    {
      t: 'odds',
      pot: 20,
      bet: 20,
      equity: 41,
      caption: 'J♠5♠の勝率は約41%（BTNがT9・QTの半分をブラフにする場合）',
    },
    { t: 'h', text: 'よくあるブロッカーの形' },
    {
      t: 'compare',
      left: {
        title: 'コールに向く',
        points: ['相手のバリュー（2ペア・セット）のカードを持つ', '外れたドローとは関係のないカードを持つ'],
        verdict: 'good',
      },
      right: {
        title: 'コールに向かない',
        points: ['外れたフラッシュドローと同じスートを持つ', '外れたストレートドローのカードを持つ'],
        verdict: 'bad',
      },
      caption: '強さが同じブラフキャッチャーの中で選ぶときの基準',
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
      explain: 'T♠をBBが持っているのでTは3枚。9は4枚すべて残っているので 3 × 4 = 12コンボです。',
    },
    {
      t: 'quiz',
      q: 'BTNはT9・QTのブラフを多く持ちます。ポットサイズのベットに対し、コールに最も向くのはどれ？',
      board: ['Jd', '8c', '4h', '2s', 'Kh'],
      options: ['J♠T♠', 'J♠5♠', 'J♠9♠', 'J♠Q♠'],
      optionCards: [['Js', 'Ts'], ['Js', '5s'], ['Js', '9s'], ['Js', 'Qs']],
      answer: 1,
      explain: 'J♠5♠は相手のブラフを何もブロックしません。T・9・Qを持つ手は、BTNのT9やQTを減らして、コール時の勝率を下げます。',
    },
    {
      t: 'estimate',
      q: 'BTNのバリュー23コンボ、ブラフ32コンボ。コールしたときの勝率は？',
      hand: ['Js', '5s'],
      board: ['Jd', '8c', '4h', '2s', 'Kh'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 58,
      tolerance: 8,
      explain: '32 ÷ (23 + 32) = 32 ÷ 55 ≈ 58% です。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'コールの線の近くでは、キッカーよりブロッカーで選びます。相手のバリューを減らす手を残し、相手のブラフを減らす手から降ります。',
    },
  ],
};

export default lesson;
