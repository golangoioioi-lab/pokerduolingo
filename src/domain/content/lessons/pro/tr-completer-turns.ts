import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'tr-completer-turns',
  blocks: [
    { t: 'h', text: 'まずやってみる：9♦で打ち続ける？' },
    {
      t: 'p',
      text: 'BTNがオープン、BBがコール。フロップ J♥T♥4♣ でBTNがベットし、BBがコール。ターン9♦でストレートが完成し、BBはチェック。BTNの手札ごとに判断してください。',
    },
    {
      t: 'rapid',
      q: 'BTNはターンでベット？ チェック？',
      choices: ['ベット', 'チェック'],
      items: [
        { cards: ['As', 'Jc'], board: ['Jh', 'Th', '4c', '9d'], answer: 1, why: 'トップペアはストレートや2ペアに負けています。チェックで回します。' },
        { cards: ['Kc', 'Qc'], board: ['Jh', 'Th', '4c', '9d'], answer: 0, why: 'Kハイのストレート（ナッツ）。バリューで打ちます。' },
        { cards: ['Qs', '8s'], board: ['Jh', 'Th', '4c', '9d'], answer: 0, why: 'Qハイのストレート。バリューで打ちます。' },
        { cards: ['Ah', 'Kh'], board: ['Jh', 'Th', '4c', '9d'], answer: 0, why: 'ナッツフラッシュドロー＋Qでストレート。アウツの多いセミブラフです。' },
        { cards: ['As', 'Tc'], board: ['Jh', 'Th', '4c', '9d'], answer: 1, why: '2番目のペア。打っても降りるのは弱い手だけです。' },
        { cards: ['Js', 'Jd'], board: ['Jh', 'Th', '4c', '9d'], answer: 0, why: 'Jのセット。ドローの多いボードなので打ってポットを育てます。' },
        { cards: ['5s', '5d'], board: ['Jh', 'Th', '4c', '9d'], answer: 1, why: 'ほとんどの手に負けていて、ドローもありません。' },
      ],
    },
    { t: 'h', text: 'なぜコールした側に有利か' },
    {
      t: 'combos',
      groups: [{ label: '9♦で完成するストレート', hands: ['KQ', 'Q8', '87'] }],
      dead: ['Jh', 'Th', '4c', '9d'],
      caption: 'K・Q・8・7はボードにないので、各16コンボ、合計48コンボ',
    },
    {
      t: 'p',
      text: '大事なのは**割合**です。BTNは小さいCベットを幅広く打つので、何も当たっていない手も多く持ちます。BBのコールレンジは、ペアとドローに絞られています。',
    },
    {
      t: 'compare',
      left: {
        title: 'ベットを続ける',
        cards: ['As', 'Jc'],
        board: ['Jh', 'Th', '4c', '9d'],
        points: ['降りるのは弱い手だけ', 'レイズされたら降りるしかない'],
        verdict: 'bad',
      },
      right: {
        title: 'チェックで回す',
        cards: ['As', 'Jc'],
        board: ['Jh', 'Th', '4c', '9d'],
        points: ['ポットを小さく保つ', 'リバーでブラフを拾える', 'ブリックならリバーでバリューも'],
        verdict: 'good',
      },
      caption: 'BTNのA♠J♣：ターン9♦での選択',
    },
    {
      t: 'p',
      text: 'BTNが打つ手は強い手とドローに絞られ、**ポラライズ**します。サイズは2/3〜ポットと大きめが合います。',
    },
    {
      t: 'estimate',
      q: '9♦で完成するストレート（KQ・Q8・87）は合計何コンボ？',
      board: ['Jh', 'Th', '4c', '9d'],
      min: 0,
      max: 80,
      step: 4,
      unit: 'コンボ',
      answer: 48,
      tolerance: 8,
      explain: '3種類とも、ボードのカードとかぶらないので各16コンボ、合計48コンボです。',
    },
    {
      t: 'outs',
      q: 'BTNのA♥K♥。リバーでストレート以上になるカードを全部タップ。',
      hand: ['Ah', 'Kh'],
      board: ['Jh', 'Th', '4c', '9d'],
      target: 'ストレート',
      explain: 'ハート9枚と、ハート以外のQが3枚で12枚。ここまで引けるのでセミブラフに向きます。',
    },
    { t: 'h', text: 'もう一度やる：BBでリード' },
    {
      t: 'p',
      text: 'BBは有利なカードで、チェックせず先に打つ（リード）ことができます。BTNがトップペアでチェックバックすると、ポットが育たないからです。',
    },
    {
      t: 'play',
      title: 'BBでK♠Q♠',
      hero: 'BB',
      heroCards: ['Ks', 'Qs'],
      villain: 'BTN',
      villainCards: ['Ad', 'Jc'],
      steps: [
        {
          street: 'フロップ',
          board: ['Jh', 'Th', '4c'],
          pot: 5.5,
          say: 'BTNのオープンにコール。チェックするとBTNが1.8bbをベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'AかQでストレートのオープンエンド。安い値段で続けます。' },
            { label: 'フォールド', good: false, why: 'アウツが8枚あり、オーバーカードもあります。' },
          ],
        },
        {
          street: 'ターン',
          board: ['9d'],
          pot: 9.1,
          say: 'ターン9♦でKハイのストレートが完成。',
          q: 'どうする？',
          options: [
            { label: '6bbリード', good: true, why: 'BTNのトップペアはチェックバックしがち。先に打てばポットが育ちます。' },
            { label: 'チェック', good: true, why: 'チェックレイズ狙いも可。ただしBTNがチェックで回すとポットは育ちません。' },
          ],
        },
        {
          street: 'リバー',
          board: ['2s'],
          pot: 21.1,
          say: 'BTNがコール。リバーは2♠。',
          q: 'どうする？',
          options: [
            { label: '14bbベット', good: true, why: 'ナッツです。トップペアから払ってもらいます。' },
            { label: 'チェック', good: false, why: 'BTNのトップペアはチェックで返しやすく、取り逃がします。' },
          ],
        },
      ],
      outro: 'ドロー完成カードは、ドローを多く持つBBの味方。BBから先に打つ選択肢も覚えておきます。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'ドロー完成カードはコール側に有利です。ベットした側はトップペアのチェックを増やし、打つときは強い手とドローで大きめに。',
    },
  ],
};

export default lesson;
