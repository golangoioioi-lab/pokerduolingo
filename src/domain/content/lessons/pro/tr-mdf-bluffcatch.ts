import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'tr-mdf-bluffcatch',
  blocks: [
    { t: 'h', text: 'まずやってみる：どこまで守る？' },
    {
      t: 'estimate',
      q: 'リバーでポット30bbに22.5bb（75%）を打たれた。レンジの何%以上でコールすべき（MDF）？',
      board: ['Qh', '9c', '5d', '2s', '7c'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 57,
      tolerance: 8,
      explain: 'MDF = ポット ÷ (ポット + ベット) = 30 ÷ 52.5 ≈ 57% です。これより多く降りると、相手はどんな2枚でもブラフして得をします。',
    },
    {
      t: 'formula',
      text: 'MDF = ポット ÷ (ポット + ベット)',
      note: '1つの手札ではなく、レンジのどこまでコールするかを決める数字',
    },
    { t: 'h', text: 'レンジを並べて線を引く' },
    {
      t: 'order',
      q: 'BBがリバーまで持ってきた手を、強い順にタップ。',
      board: ['Qh', '9c', '5d', '2s', '7c'],
      hands: [
        { label: 'KQ', cards: ['Ks', 'Qs'] },
        { label: 'QJ', cards: ['Qd', 'Jd'] },
        { label: 'T9', cards: ['Ts', '9s'] },
        { label: '66', cards: ['6h', '6s'] },
        { label: 'A5', cards: ['Ah', '5h'] },
      ],
      explain: 'トップペア（KQ > QJ）、2番目のペア（T9）、弱いペア（66 > A5）の順です。この順に上からコールしていきます。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'トップペア', hands: ['KQ', 'QJs', 'QTs'] },
        { label: '2番目のペア', hands: ['T9s', '98s', 'A9s'] },
        { label: '弱いペア', hands: ['66', '44', 'A5s'] },
      ],
      dead: ['Qh', '9c', '5d', '2s', '7c'],
      caption: 'BBのブラフキャッチャーの例（合計42コンボ）',
    },
    {
      t: 'p',
      text: '42コンボの57%は約24コンボ。トップペア18コンボと2番目のペア6コンボまでが**コールの線**で、残りはフォールドします。',
    },
    { t: 'h', text: 'MDFは「相手が理想的なとき」の基準' },
    {
      t: 'tree',
      root: 'ブラフキャッチャーで22.5bbにコール（ポット30bb）',
      options: [
        {
          label: '相手のブラフが30%',
          outcomes: [
            { label: 'ブラフに勝つ', prob: 0.3, value: 52.5 },
            { label: 'バリューに負ける', prob: 0.7, value: -22.5 },
          ],
        },
        {
          label: '相手のブラフが20%',
          outcomes: [
            { label: 'ブラフに勝つ', prob: 0.2, value: 52.5 },
            { label: 'バリューに負ける', prob: 0.8, value: -22.5 },
          ],
        },
        {
          label: '相手のブラフが40%',
          outcomes: [
            { label: 'ブラフに勝つ', prob: 0.4, value: 52.5 },
            { label: 'バリューに負ける', prob: 0.6, value: -22.5 },
          ],
        },
      ],
      caption: 'フォールドのEVは0。コールのEVは、ブラフ30%（必要勝率）でちょうど0',
    },
    {
      t: 'p',
      text: '少額のキャッシュゲームでは、リバーの大きなベットはバリューに偏りがちです。その相手には**線ぎりぎりの手は降りてよい**。よくブラフする相手には線を下げます。',
    },
    {
      t: 'estimate',
      q: 'リバーまで来たレンジが42コンボ、MDFが57%。何コンボ守るのが目安？',
      board: ['Qh', '9c', '5d', '2s', '7c'],
      min: 0,
      max: 42,
      step: 1,
      unit: 'コンボ',
      answer: 24,
      tolerance: 5,
      explain: '42 × 0.57 ≈ 24コンボ。強い手から数えて24コンボ目のあたりが線です。',
    },
    { t: 'h', text: 'もう一度やる' },
    {
      t: 'rapid',
      q: 'BBはT♦9♦（線の近く）。ポット30bbに22.5bb。コール？ フォールド？',
      choices: ['コール', 'フォールド'],
      items: [
        { cards: ['Td', '9d'], board: ['Qh', '9c', '5d', '2s', '7c'], text: '相手のブラフは約40%', answer: 0, why: '必要勝率30%を超えています。' },
        { cards: ['Td', '9d'], board: ['Qh', '9c', '5d', '2s', '7c'], text: '相手のブラフは約15%', answer: 1, why: '必要勝率30%に届きません。' },
        { cards: ['Td', '9d'], board: ['Qh', '9c', '5d', '2s', '7c'], text: '相手は大きく打つときほぼバリュー', answer: 1, why: 'ブラフ不足の相手には、線ぎりぎりの手は降ります。' },
        { cards: ['Td', '9d'], board: ['Qh', '9c', '5d', '2s', '7c'], text: '相手は外れたドローを全部打ってくる', answer: 0, why: 'ブラフが多い相手には線を下げてコールします。' },
        { cards: ['Td', '9d'], board: ['Qh', '9c', '5d', '2s', '7c'], text: '相手のブラフは約20%', answer: 1, why: 'コールするたびに平均7.5bbを失います。' },
      ],
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'MDFでレンジに線を引き、上から順にコールします。そのうえで、相手のブラフが多いか少ないかで線を上下させます。',
    },
  ],
};

export default lesson;
