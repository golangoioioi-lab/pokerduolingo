import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-k-high',
  blocks: [
    { t: 'h', text: 'K-highで強いのは？' },
    {
      t: 'order',
      q: 'K♦T♠5♥ で強い順にタップ',
      board: ['Kd', 'Ts', '5h'],
      hands: [
        { label: 'KQ', cards: ['Kc', 'Qh'] },
        { label: 'TT', cards: ['Th', 'Tc'] },
        { label: 'QJ', cards: ['Qs', 'Js'] },
        { label: 'AK', cards: ['As', 'Ks'] },
      ],
      explain: 'TTはセット、AKとKQはトップペア（キッカーでAKが上）、QJはストレートドローだけです。BBのKTやTTが、BTNの優位を縮めます。',
    },
    { t: 'h', text: 'BBにもKxが残る' },
    {
      t: 'p',
      text: 'BBはK9sやKJsなどKxスーテッドを多くコールします。A-highより、BBのトップペアが多くなります（BTN対BBのSRP、目安）。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'KQ/KJ', hands: ['KQ', 'KJ'] },
        { label: 'KT/K9', hands: ['KT', 'K9'] },
        { label: 'KK', hands: ['KK'] },
      ],
      dead: ['Ks', '7d', '2c'],
      caption: 'K♠7♦2♣ 上のコンボ数。KKは3通りに減る。',
    },
    {
      t: 'equity',
      players: [{ label: 'BTNレンジ', pct: 52 }, { label: 'BBレンジ', pct: 48 }],
      board: ['Ks', '7d', '2c'],
      caption: 'K♠7♦2♣ のレンジ対レンジ（目安）。A-highより差が小さい。',
    },
    {
      t: 'compare',
      left: { title: 'K♠7♦2♣', board: ['Ks', '7d', '2c'], points: ['極端にドライ', '小さなCベットを高頻度で'], verdict: 'good' },
      right: { title: 'K♦T♠5♥', board: ['Kd', 'Ts', '5h'], points: ['BBにKTsなどが残る', 'サイズを少し使い分ける'], verdict: 'neutral' },
      caption: 'どちらもBTN有利だが、差は数ポイント。',
    },
    {
      t: 'quiz',
      q: 'このボードで、BTNの基本的な戦い方は？',
      board: ['Ks', '7d', '2c'],
      options: ['小さめのCベットを広く打つ', '常にチェック', '大きなベットだけ', '常にフォールド'],
      answer: 0,
      explain: 'BTN有利なボードです。ただしBBのトップペアが多い分、ブラフは少し控えめにします。',
    },
    {
      t: 'estimate',
      q: 'このボードで、KKは何通り？（6通りから減ります）',
      board: ['Ks', '7d', '2c'],
      min: 0,
      max: 6,
      step: 1,
      unit: '通り',
      answer: 3,
      tolerance: 1,
      explain: 'Kの1枚が場にあるので、残り3枚から2枚を選んで3通りです。',
    },
    { t: 'h', text: 'BBのコールレンジを想像する' },
    {
      t: 'rapid',
      q: 'BTNのオープンに対し、BBのコールレンジに多い？ 少ない？',
      choices: ['多い', '少ない'],
      items: [
        { cards: ['Ks', '9s'], answer: 0 },
        { cards: ['Ah', 'Ad'], answer: 1, why: 'AAはほぼ3betします。' },
        { cards: ['Kh', '5h'], answer: 0 },
        { cards: ['Kc', 'Kd'], answer: 1, why: 'KKもほぼ3betします。' },
        { cards: ['7c', '6c'], answer: 0 },
        { cards: ['As', 'Kd'], answer: 1, why: 'AKはBBでは3betが中心です。' },
        { cards: ['7d', '2c'], answer: 1, why: '弱すぎるのでフォールドします。' },
        { cards: ['Qh', 'Jh'], answer: 0 },
      ],
    },
    { t: 'tip', text: 'BBのコールレンジには「中くらいのKxスーテッド」が多く、強いペアとAKは少ない。これがK-highの読み方の土台です。' },
  ],
};

export default lesson;
