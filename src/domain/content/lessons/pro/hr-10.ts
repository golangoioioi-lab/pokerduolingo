import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr-10',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。BTN で 7♥6♥ を持ち、ターンでもう一度ブラフを打つ「ダブルバレル」を、どのカードで打つかを考えます。' },
    {
      t: 'play',
      title: 'BTN で 76s のダブルバレル',
      hero: 'BTN',
      heroCards: ['7h', '6h'],
      villain: 'BB',
      steps: [
        {
          street: 'プリフロップ',
          pot: 1.5,
          say: 'CO までフォールド。あなたは BTN で **7♥6♥**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'BTN の 76s は十分なオープンハンドです。' },
            { label: '2.5bb にオープン', good: true, why: 'BTN からはスーテッドコネクターも広くオープンします。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Kh', '8c', '2d'],
          pot: 5.5,
          say: 'BB がコール。何もヒットしていませんが、ハートと 8 のバックドアがあります。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェックしてあきらめる', good: false, why: '76 はショーダウンでほぼ勝てず、チェックしても利益はほとんどありません。' },
            { label: '2bb（約3分の1）ベット', good: true, why: 'BTN に強い K が多いボード。何もない手を降ろし、コールされてもバックドアが残ります。' },
            { label: '6bb（ポット以上）ベット', good: false, why: '降りる手は小さいベットでも降り、損失だけが増えます。' },
          ],
        },
        {
          street: 'ターン',
          board: ['Ah'],
          pot: 9.5,
          say: 'BB がコール。A♥ でフラッシュドローになりました。強い A の多くは BB が 3bet しているので、A は BTN 側に多いカードです。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'フリーカードでも勝率は約20%で、降ろす利益を捨てます。' },
            { label: '6.5bb（約3分の2）ベット', good: true, why: '8x・2x・小さいペアは A でさらに苦しく、多くが降ります。外れても約20%の勝率が残ります。' },
          ],
        },
      ],
      outro: 'BB はフォールドし、9.5bb を獲得。自分の勝率が増え、相手のレンジに不利なカードで2発目を打ちました。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'p', text: 'BB が半分降りるなら、ベットの EV はチェックを上回ります。同じブラフでも、落ちるカードで価値が変わります。' },
    {
      t: 'estimate',
      q: 'ポット 9.5bb に 6.5bb のブラフ。BB が何%以上降りれば即利益？',
      hand: ['7h', '6h'],
      board: ['Kh', '8c', '2d', 'Ah'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 41,
      tolerance: 8,
      explain: '6.5 ÷（9.5 + 6.5）≒ 41%。',
    },
    {
      t: 'tree',
      root: 'ターン A♥：ポット9.5bbで6.5bbのブラフ（フラッシュの9アウツ、リバーの勝率約20%）',
      options: [
        { label: 'チェック', ev: 1.9, note: 'フリーカードを見ても勝率は約20%（9.5×20%）' },
        {
          label: '6.5bbをベット',
          outcomes: [
            { label: 'BBがフォールド（50%と仮定）', prob: 0.5, value: 9.5 },
            { label: 'コールされ、ハートを引く', prob: 0.098, value: 16 },
            { label: 'コールされ、外れる', prob: 0.402, value: -6.5 },
          ],
          note: '必要な降り率は約41%',
        },
      ],
      caption: 'BBが半分降りるなら、ベットのEVは約3.7bbでチェックを上回る。',
    },
    {
      t: 'compare',
      left: { title: 'ターン A♥：ベット', cards: ['7h', '6h'], board: ['Kh', '8c', '2d', 'Ah'], verdict: 'good', points: ['フラッシュドロー（9アウツ）ができる', 'A は BTN 側に多いカード', '8x・2x・小さいポケットペアが降りやすい'] },
      right: { title: 'ターン T♠：チェック', cards: ['7h', '6h'], board: ['Kh', '8c', '2d', 'Ts'], verdict: 'bad', points: ['あなたの勝率は増えない', 'KT・JT・T9・QJ などがヒットする', '降ろせる確率も下がる'] },
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 1.5, actions: ['あなた（BTN）が2.5bbにオープン', 'BBコール'] },
        { street: 'フロップ', board: ['Kh', '8c', '2d'], pot: 5.5, actions: ['BBチェック', 'あなたが2bbベット、BBコール'] },
        { street: 'ターン', board: ['Ah'], pot: 9.5, actions: ['BBチェック', 'あなたが6.5bbベット、BBフォールド'] },
      ],
    },
    { t: 'h', text: 'もう一度：打つカード、止めるカード' },
    {
      t: 'rapid',
      q: 'K♥8♣2♦ で C ベットがコールされた。ターンがこのカードなら、7♥6♥ で2発目を打つ？',
      choices: ['ベット', 'チェック'],
      items: [
        { cards: ['7h', '6h'], board: ['Kh', '8c', '2d', 'Ah'], answer: 0, why: 'フラッシュドローができ、A は BTN 側のカードです。' },
        { cards: ['7h', '6h'], board: ['Kh', '8c', '2d', 'Ts'], answer: 1, why: '勝率は増えず、KT・JT・T9 などがヒットします。' },
        { cards: ['7h', '6h'], board: ['Kh', '8c', '2d', '5h'], answer: 0, why: 'オープンエンドとフラッシュドローで15アウツあります。' },
        { cards: ['7h', '6h'], board: ['Kh', '8c', '2d', 'Qs'], answer: 1, why: '勝率は増えず、QJ・QT などがヒットします。' },
        { cards: ['7h', '6h'], board: ['Kh', '8c', '2d', '9h'], answer: 0, why: 'オープンエンドとフラッシュドローで15アウツあります。' },
        { cards: ['7h', '6h'], board: ['Kh', '8c', '2d', 'Jc'], answer: 1, why: '勝率は増えず、JT・QJ などがヒットします。' },
        { cards: ['7h', '6h'], board: ['Kh', '8c', '2d', '4h'], answer: 0, why: 'ガットショットとフラッシュドローで12アウツあります。' },
      ],
    },
    {
      t: 'outs',
      q: 'ターン 5♥。ストレート以上になるカードを全部タップ。',
      hand: ['7h', '6h'],
      board: ['Kh', '8c', '2d', '5h'],
      target: 'ストレート',
      explain: '4 と 9 が8枚、ハート9枚。重なる 4♥・9♥ を引いて15枚です。',
    },
    { t: 'tip', text: 'ターンのバレルは「自分の勝率が増える」「相手のレンジに不利」の両方がそろったカードで打ちます。相手のコールレンジにヒットするカードでは止めます。' },
  ],
};

export default lesson;
