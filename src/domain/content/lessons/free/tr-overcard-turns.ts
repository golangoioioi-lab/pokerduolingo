import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'tr-overcard-turns',
  blocks: [
    { t: 'h', text: 'まずやってみる：A♠のターンで打つ？' },
    {
      t: 'p',
      text: 'BTNがオープン、BBがコール。フロップ 9♥6♣2♦ でBTNがベットし、BBがコール。ターンはA♠、BBはチェック。BTNの手札ごとに判断してください。',
    },
    {
      t: 'rapid',
      q: 'BTNはターンでバレル（ベット）？ チェック？',
      choices: ['バレル', 'チェック'],
      items: [
        { cards: ['Ac', 'Kc'], board: ['9h', '6c', '2d', 'As'], answer: 0, why: 'Aのトップペア・トップキッカー。バリューで打ちます。' },
        { cards: ['Kd', 'Qd'], board: ['9h', '6c', '2d', 'As'], answer: 0, why: 'ショーダウンでほぼ勝てません。BBの9xや6xを降ろすブラフに向きます。' },
        { cards: ['8h', '8d'], board: ['9h', '6c', '2d', 'As'], answer: 1, why: 'ショーダウンで勝てることがある手です。打つと強い手だけが残ります。' },
        { cards: ['Ah', '9c'], board: ['9h', '6c', '2d', 'As'], answer: 0, why: 'Aと9の2ペア。強いバリューです。' },
        { cards: ['7c', '7d'], board: ['9h', '6c', '2d', 'As'], answer: 1, why: '小さいペアはチェックで回してショーダウンを目指します。' },
        { cards: ['8s', '7s'], board: ['9h', '6c', '2d', 'As'], answer: 0, why: '5かTでストレートのオープンエンド。セミブラフで打てます。' },
        { cards: ['Td', 'Ts'], board: ['9h', '6c', '2d', 'As'], answer: 1, why: '9xや6xに勝っています。チェックしてショーダウンを目指します。' },
      ],
    },
    { t: 'h', text: 'なぜBTNに有利なのか' },
    {
      t: 'combos',
      groups: [
        { label: 'BTNに多く、BBは3betしがちなAx', hands: ['AK', 'AQ'] },
        { label: '両者とも持つAx（例）', hands: ['AJo', 'ATo', 'A5s', 'A4s', 'A3s'] },
      ],
      dead: ['9h', '6c', '2d', 'As'],
      caption: 'ボードにA♠があるので、Aを含む手は1コンボずつ減っている',
    },
    {
      t: 'p',
      text: 'AKとAQだけで24コンボ。BBはその多くを3betしているので、Aのペアを多く持つのはBTNです。BBの9xは2番手に下がりました。',
    },
    { t: 'h', text: 'ブラフは高いカードで' },
    {
      t: 'tree',
      root: 'BTNがK♦Q♦でターン A♠（ポット9.1bb）',
      options: [
        {
          label: 'チェック',
          outcomes: [
            { label: 'ショーダウンで勝つ', prob: 0.2, value: 9.1 },
            { label: '負ける・降りる', prob: 0.8, value: 0 },
          ],
          note: 'Kハイで勝てるのはまれ',
        },
        {
          label: '6bbベット（約2/3ポット）',
          outcomes: [
            { label: 'BBがフォールド', prob: 0.5, value: 9.1 },
            { label: 'コールされて勝つ', prob: 0.08, value: 15.1 },
            { label: 'コールされて負ける', prob: 0.42, value: -6 },
          ],
        },
      ],
      caption: '確率は目安。リバーでのやり取りは省いた単純計算',
    },
    {
      t: 'estimate',
      q: '9.1bbのポットに6bbのブラフ。利益になるのに必要なフォールド率は？',
      board: ['9h', '6c', '2d', 'As'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 40,
      tolerance: 6,
      explain: 'リスク ÷ (リスク + 取れるポット) = 6 ÷ (6 + 9.1) ≈ 40% です。',
    },
    {
      t: 'warn',
      title: 'Kのターンも同じとは限らない',
      text: 'BBはKQoやKJoを3betせずにコールすることが多く、Kのターンはそこまでレイザーに偏りません。そのランクをだれが多く持つかを毎回確かめます。',
    },
    { t: 'h', text: 'もう一度やる：BBで守る' },
    {
      t: 'estimate',
      q: 'BBが6bbのベットをコールするのに必要な勝率は？（ポット9.1bb）',
      board: ['9h', '6c', '2d', 'As'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 28,
      tolerance: 5,
      explain: '6 ÷ (9.1 + 6 + 6) ≈ 28% です。40%はBTNのブラフに必要なフォールド率で、別の数字です。',
    },
    {
      t: 'play',
      title: 'BBでQ♣9♣',
      hero: 'BB',
      heroCards: ['Qc', '9c'],
      villain: 'BTN',
      villainCards: ['Kd', 'Qd'],
      steps: [
        {
          street: 'フロップ',
          board: ['9h', '6c', '2d'],
          pot: 5.5,
          say: 'BTNのオープンにコール。フロップでトップペア。チェックするとBTNが1.8bbをベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'トップペアで十分に強い手です。' },
            { label: 'フォールド', good: false, why: 'トップペアを小さいベットで降りるのは降りすぎです。' },
          ],
        },
        {
          street: 'ターン',
          board: ['As'],
          pot: 9.1,
          say: 'ターンはA♠。チェックするとBTNが6bbをベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: '必要勝率は約28%。9xを全部降りると、BTNはどんな2枚でも打てます。' },
            { label: 'フォールド', good: false, why: 'Aが怖くても、BTNのブラフ（KQなど）は多く残っています。' },
          ],
        },
        { street: 'リバー', board: ['4s'], pot: 21.1, say: 'リバーは4♠。チェックすると、BTNもチェック。' },
      ],
      outro: 'BTNはK♦Q♦のブラフでした。9xを降りすぎないことで、ブラフからポットを取れます。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'オーバーカードは、そのランクの強い手をBBが3betで抜いているときにレイザーへ有利です。ブラフはショーダウンで勝てない高いカードで。BBは9xを降ろしすぎないようにします。',
    },
  ],
};

export default lesson;
