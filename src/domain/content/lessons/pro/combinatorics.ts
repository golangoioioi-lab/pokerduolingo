import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'combinatorics',
  blocks: [
    { t: 'h', text: 'そのハンドは何通り？' },
    {
      t: 'rapid',
      q: '相手がこのハンドを持つ組み合わせ（コンボ）は何通り？',
      choices: ['6通り', '4通り'],
      items: [
        { text: 'QQ', answer: 0, why: 'ペアは4枚から2枚を選ぶので 4 × 3 ÷ 2 = 6通り。' },
        { text: 'AKs', answer: 1, why: 'スーテッドはスートの数だけ、4通り。' },
        { text: '22', answer: 0, why: 'ペアは6通り。' },
        { text: '76s', answer: 1, why: 'スーテッドは4通り。' },
        { text: '99', answer: 0, why: 'ペアは6通り。' },
        { text: 'JTs', answer: 1, why: 'スーテッドは4通り。' },
      ],
    },
    { t: 'h', text: '基本のコンボ数' },
    { t: 'p', text: '2枚の手札の組み合わせは全部で1326通り。この「何通り」を**コンボ**と呼びます。' },
    {
      t: 'combos',
      groups: [
        { label: 'KK（6）', hands: ['KK'] },
        { label: 'AKs（4）', hands: ['AKs'] },
        { label: 'AKo（12）', hands: ['AKo'] },
      ],
      caption: 'ペア6、スーテッド4、オフスート12（4 × 4 − 4）。AK 全体は16です。',
    },
    { t: 'h', text: '見えているカードを引く' },
    { t: 'p', text: 'ボードや自分の手札にあるカードは、相手は持てません。そのぶんコンボが減ります。' },
    { t: 'formula', text: 'ペア = 残り枚数 × (残り枚数 − 1) ÷ 2', note: '違うランク2枚なら「1枚目の残り × 2枚目の残り」' },
    {
      t: 'combos',
      groups: [{ label: 'AK', hands: ['AK'] }, { label: '88', hands: ['88'] }],
      dead: ['As', '8d', '3c'],
      caption: 'ボード A♠8♦3♣ のとき、AK は12、88 は3コンボです。',
    },
    {
      t: 'estimate',
      q: 'ボードが A♠ 8♦ 3♣ のとき、相手のAKは何コンボ？',
      board: ['As', '8d', '3c'],
      min: 0, max: 16, step: 1, answer: 12, tolerance: 0.5,
      explain: 'A は残り3枚、K は4枚。3 × 4 = 12コンボです。',
    },
    {
      t: 'estimate',
      q: '同じボードで、自分が K♥ を持っているとき、相手のAKは何コンボ？',
      hand: ['Kh', 'Qc'], board: ['As', '8d', '3c'],
      min: 0, max: 16, step: 1, answer: 9, tolerance: 0.5,
      explain: 'A は残り3枚、K は自分の K♥ を除いて3枚。3 × 3 = 9コンボ。これが**ブロッカー**です。',
    },
    { t: 'h', text: '実例：コールするか数えて決める' },
    { t: 'p', text: 'リバーでポット100bbに100bbのベット。あなたはKQ。相手のバリューはセットとAK、ブラフはQJと仮定します。' },
    {
      t: 'combos',
      groups: [
        { label: 'バリュー（KK・TT・77・AK）', hands: ['KK', 'TT', '77', 'AK'] },
        { label: 'ブラフ（QJ）', hands: ['QJ'] },
      ],
      dead: ['Kd', 'Qd', 'Ks', 'Th', '7h', '2c', '3d'],
      caption: 'バリュー 1 + 3 + 3 + 8 = 15、ブラフ 12。あなたの K と Q で KK・AK・QJ が減っています。',
    },
    {
      t: 'quiz',
      q: 'バリュー15・ブラフ12コンボ。ポットサイズのベット（必要勝率33%）にコールしますか？',
      hand: ['Kd', 'Qd'], board: ['Ks', 'Th', '7h', '2c', '3d'],
      options: ['コール（勝率は約44%）', 'フォールド（勝率は約33%）', 'フォールド（ブラフより値が多い）'],
      answer: 0,
      explain: '勝率 = 12 ÷ 27 ≈ 44%。必要勝率33%を超えるので、EV ≈ 0.44 × 300 − 100 ≈ +33bb のコールです。',
    },
    {
      t: 'tree',
      root: 'リバー ポット100bb に 100bb ベット（あなたは KQ）',
      options: [
        { label: 'フォールド', ev: 0 },
        {
          label: 'コール',
          outcomes: [{ label: '勝つ（12/27）', prob: 0.444, value: 200 }, { label: '負ける（15/27）', prob: 0.556, value: -100 }],
          note: '約+33bb',
        },
      ],
      caption: 'ハンドの種類の数ではなく、コンボ数で比べます。',
    },
    { t: 'h', text: 'もう一度：ボードで減るペア' },
    {
      t: 'rapid',
      q: 'ボード A♠8♦3♣。相手のこのペアは何コンボ？',
      choices: ['3コンボ', '6コンボ'],
      items: [
        { text: '88', board: ['As', '8d', '3c'], answer: 0, why: '8 は残り3枚。3 × 2 ÷ 2 = 3。' },
        { text: 'KK', board: ['As', '8d', '3c'], answer: 1, why: 'K はボードにないので6のまま。' },
        { text: 'AA', board: ['As', '8d', '3c'], answer: 0, why: 'A は残り3枚で3コンボ。' },
        { text: 'QQ', board: ['As', '8d', '3c'], answer: 1, why: '減りません。' },
        { text: '33', board: ['As', '8d', '3c'], answer: 0, why: '3 は残り3枚で3コンボ。' },
        { text: '77', board: ['As', '8d', '3c'], answer: 1, why: '減りません。' },
      ],
    },
    { t: 'tip', text: 'ボードに1枚出たランクのペアは6→3、AK のような2ランクの手は16→12。この2つを覚えておけば暗算できます。' },
  ],
};

export default lesson;
