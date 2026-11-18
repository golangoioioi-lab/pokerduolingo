import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'starting-hands',
  blocks: [
    {
      t: 'p',
      text: '2枚の手札の組み合わせは全部で**1326通り**ですが、スートの違いを無視すると**169種類**に分類できます。これを13×13のグリッドで表したものがレンジ表です。',
    },
    {
      t: 'table',
      head: ['種類', '例', '1種類あたりのコンボ数', '合計'],
      rows: [
        ['ポケットペア', 'AA, 77', '6', '13種 × 6 = 78'],
        ['スーテッド（s）', 'AKs, 76s', '4', '78種 × 4 = 312'],
        ['オフスート（o）', 'AKo, T9o', '12', '78種 × 12 = 936'],
      ],
    },
    { t: 'tip', title: 'グリッドの読み方', text: '対角線がペア、右上がスーテッド、左下がオフスートです。' },
    { t: 'range', spot: 'rfi-co', caption: 'COのオープンレンジ。右上（スーテッド）ほど広く参加しているのがわかる' },
    { t: 'h', text: 'ハンドの価値を決める3つの要素' },
    {
      t: 'list',
      items: [
        '**生の強さ**: AK、AQ など。トップペア＋良いキッカーを作りやすい',
        '**プレイアビリティ**: 76s、T9s など。フラッシュやストレートで大きなポットを勝てる',
        '**ドミネートされにくさ**: KJo は AK・AJ・KQ に負けていることが多い',
      ],
    },
    {
      t: 'compare',
      left: {
        title: 'A♠K♦',
        cards: ['As', 'Kd'],
        points: ['トップペア＋良いキッカーを作りやすい', 'AK に勝つ手は AA・KK だけ'],
        verdict: 'good',
      },
      right: {
        title: 'K♠J♦',
        cards: ['Ks', 'Jd'],
        points: ['AK・AJ・KQ に負けていることが多い', 'オフスートのブロードウェイは過大評価しやすい'],
        verdict: 'bad',
      },
      caption: '同じ K を含む手でも、ドミネートされやすさが違います。',
    },
    { t: 'h', text: 'コンボで考える' },
    {
      t: 'p',
      text: 'AA は6コンボ、AK は16コンボ（スーテッド4＋オフスート12）。何も情報がなければ AK は AA の**2.7倍**です。ボードに A が1枚落ちると、AA は3、AK は12に減ります。',
    },
    {
      t: 'combos',
      groups: [{ label: 'AA', hands: ['AA'] }, { label: 'AK', hands: ['AK'] }],
      caption: '何も見えていないとき、AA は6、AK は16コンボです。',
    },
    {
      t: 'combos',
      groups: [{ label: 'AA', hands: ['AA'] }, { label: 'AK', hands: ['AK'] }],
      dead: ['Ah'],
      caption: 'ボードに A♥ が1枚落ちると、AA は3、AK は12コンボに減ります。',
    },
    {
      t: 'estimate',
      q: 'この手（KQo）は何コンボ？',
      hand: ['Kd', 'Qc'],
      min: 0,
      max: 24,
      step: 1,
      unit: 'コンボ',
      answer: 12,
      tolerance: 0.5,
      explain: 'オフスートは 4 × 3 = 12コンボ。スーテッドの KQs は4コンボ、合わせて KQ は16コンボです。',
    },
    {
      t: 'estimate',
      q: 'ボードに A が1枚落ちた。相手が AA を持つコンボは何通り？（自分は A を持っていない）',
      board: ['As', '8d', '3c'],
      min: 0,
      max: 12,
      step: 1,
      unit: 'コンボ',
      answer: 3,
      tolerance: 0.5,
      explain: '残りのAは3枚。そこから2枚選ぶので3通りです。',
    },
    {
      t: 'quiz',
      q: '同じ K を含む手のうち、ドミネートされにくいのはどちら？',
      options: ['A♠K♦', 'K♠J♦'],
      optionCards: [['As', 'Kd'], ['Ks', 'Jd']],
      answer: 0,
      explain: 'AK に勝てるのは AA・KK だけで、引き分け以外ほとんど負けません。KJo は AK・KQ・AJ に負けやすい手です。',
    },
    {
      t: 'quiz',
      q: 'スーテッドが同じランクのオフスートより価値が高い主な理由は？',
      hand: ['9h', '8h'],
      options: ['勝率が10%以上高いから', 'フラッシュの可能性でプレイアビリティが上がるから', 'コンボ数が多いから'],
      answer: 1,
      explain: 'スーテッドとオフスートの勝率差はプリフロップで約3%程度ですが、フラッシュドローやバックドアによって「フロップ以降に続けられる場面」が増えるのが大きな価値です。',
    },
  ],
};

export default lesson;
