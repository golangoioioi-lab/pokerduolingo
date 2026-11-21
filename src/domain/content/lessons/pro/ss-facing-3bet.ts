import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'ss-facing-3bet',
  blocks: [
    { t: 'h', text: '3betされてみる' },
    { t: 'p', text: '全員40bb。選択肢はフォールド・コール・オールインの3つです。' },
    {
      t: 'play',
      title: '40bb、COでA♠J♠',
      hero: 'CO',
      heroCards: ['As', 'Js'],
      villain: 'BTN',
      steps: [
        {
          street: 'プリフロップ',
          pot: 1.5,
          say: 'HJ までフォールド。あなたは CO で **A♠J♠**、スタック40bb。',
          q: 'どうする？',
          options: [
            { label: '2.2bb レイズ', good: true, why: 'CO から十分オープンできる手です。浅いスタックなので小さめに。' },
            { label: 'フォールド', good: false, why: 'AJs は CO のオープンレンジの上位です。' },
          ],
        },
        {
          street: 'プリフロップ',
          pot: 10.7,
          say: 'BTN が7bbに3bet。ブラインドは降りました。BTN はバリュー中心で、ブラフ3betは少なめの相手です。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: true, why: 'ブラフが約43%しかなく、オールインしても降りてもらえる回数が足りません。' },
            { label: 'コール', good: false, why: 'SPRは約2.1。外れたフロップではほぼ降りるしかなく、動けません。' },
            { label: '40bb オールイン', good: false, why: '損益の分かれ目は相手が約56%降りること。この相手では足りません。' },
          ],
        },
      ],
      outro: '40bbで3betされたら、コールより先に「オールインかフォールド」を考えます。決め手は相手のブラフ3betの量です。',
    },
    { t: 'h', text: 'コールすると動けない' },
    {
      t: 'pot',
      steps: [
        { label: 'COが2.2bbでオープン', pot: 3.7, stack: 37.8 },
        { label: 'BTNが7bbに3bet→COコール', pot: 15.5, stack: 33 },
        { label: 'フロップでBTNが1/3ポット→コール', pot: 25.8, stack: 27.8 },
      ],
      caption: 'ブラインドは降りた場合。コールするとSPRは約2.1で、すぐにオールインの判断になる',
    },
    { t: 'h', text: '3betレンジを数える' },
    {
      t: 'combos',
      groups: [
        { label: 'BTNのバリュー3bet', hands: ['AA', 'KK', 'QQ', 'AK'] },
        { label: 'BTNのブラフ3bet', hands: ['A5s', 'A4s', 'KJs', 'QJs', '76s', '65s'] },
      ],
      dead: ['As', 'Js'],
      caption: 'COがA♠J♠を持つとき。バリュー27コンボ、ブラフ20コンボ',
    },
    {
      t: 'estimate',
      q: 'COがA♠J♠を持つとき、BTNのAKは何コンボ残っている？',
      hand: ['As', 'Js'],
      min: 0,
      max: 16,
      step: 1,
      unit: 'コンボ',
      answer: 12,
      tolerance: 3,
      explain: 'A♠をCOが持っているのでAは3枚。Kは4枚。3 × 4 = 12コンボです。',
    },
    {
      t: 'tree',
      root: 'COがA♠J♠で40bbオールイン（BTNは7bbに3bet）',
      options: [
        { label: 'フォールド', ev: 0 },
        {
          label: 'オールイン（BTNが60%降りる）',
          outcomes: [
            { label: 'BTNがフォールド', prob: 0.6, value: 10.7 },
            { label: 'コール→勝つ', prob: 0.12, value: 43.7 },
            { label: 'コール→負ける', prob: 0.28, value: -37.8 },
          ],
        },
        {
          label: 'オールイン（BTNが40%降りる）',
          outcomes: [
            { label: 'BTNがフォールド', prob: 0.4, value: 10.7 },
            { label: 'コール→勝つ', prob: 0.18, value: 43.7 },
            { label: 'コール→負ける', prob: 0.42, value: -37.8 },
          ],
        },
      ],
      caption: 'QQ+・AKにコールされたときの勝率は約30%。損益の分かれ目はフォールド率およそ56%',
    },
    {
      t: 'rapid',
      q: 'A♠J♠で3betを受けた。相手のフォールド率がこれなら？（分かれ目は約56%）',
      choices: ['オールイン', 'フォールド'],
      items: [
        { cards: ['As', 'Js'], text: '相手は70%降りる', answer: 0 },
        { cards: ['As', 'Js'], text: '相手は45%降りる', answer: 1, why: '56%に届かないので損です。' },
        { cards: ['As', 'Js'], text: '相手は65%降りる', answer: 0 },
        { cards: ['As', 'Js'], text: 'バリューでしか3betしない相手', answer: 1, why: '降りないので、コールされて不利な勝負になります。' },
        { cards: ['As', 'Js'], text: 'BTN から広く3betする相手（75%降りる）', answer: 0 },
        { cards: ['As', 'Js'], text: '相手は30%降りる', answer: 1, why: 'ほとんどコールされ、約30%の勝率で勝負することになります。' },
      ],
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: '40bbで3betされたら、コールより「オールインかフォールド」を先に考えます。相手のブラフ3betの量で判断が変わります。',
    },
  ],
};

export default lesson;
