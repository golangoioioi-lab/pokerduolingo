import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'ss-facing-3bet',
  blocks: [
    {
      t: 'p',
      text: '40bbでオープンして3betされたら、選択肢はフォールド・コール・オールインの3つです。100bbのように「コールしてフロップで考える」余裕はあまりありません。',
    },
    { t: 'h', text: 'コールするとどうなるか' },
    {
      t: 'pot',
      steps: [
        { label: 'COが2.2bbでオープン', pot: 3.7, stack: 37.8 },
        { label: 'BTNが7bbに3bet→COコール', pot: 15.5, stack: 33 },
        { label: 'フロップでBTNが1/3ポット→コール', pot: 25.8, stack: 27.8 },
      ],
      caption: 'ブラインドは降りた場合。コールするとSPRは約2.1で、すぐにオールインの判断になる',
    },
    {
      t: 'p',
      text: 'コールすると、フロップで外れた手はほぼ降りるしかありません。AJのように当たればオールインでき、外れたら降りる手は、コールより「オールインかフォールド」で決める方がよいことが多くなります。',
    },
    { t: 'h', text: '3betレンジを数える' },
    {
      t: 'combos',
      groups: [
        { label: 'BTNのバリュー3bet', hands: ['AA', 'KK', 'QQ', 'AK'] },
        { label: 'BTNのブラフ3bet', hands: ['A5s', 'A4s', 'KJs', 'QJs', '76s', '65s'] },
      ],
      dead: ['As', 'Js'],
      caption: 'COがA♠J♠を持つとき。AとJのブロッカーでバリューもブラフも減る',
    },
    {
      t: 'p',
      text: 'バリュー27コンボ、ブラフ20コンボ。COがオールインすると、ブラフは降り、バリューはコールすると考えます。A♠J♠がQQ+・AKにコールされたときの勝率は約30%です。',
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
      caption: 'コールされたときの勝率は30%。BTNが降りれば +10.7bb、コールされて勝てば 81.5 − 37.8 = +43.7bb',
    },
    {
      t: 'p',
      text: 'BTNが60%降りれば約+1.1bb、40%しか降りなければ約−3.7bb。損益の分かれ目はおよそ56%です。上で数えたレンジはブラフが 20 ÷ 47 ≈ 43% しかないので、A♠J♠のオールインは損になります。この相手には降りる方がよく、オールインはブラフ3betがもっと多い相手（BTNやSBから広く3betする相手）に使います。',
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
      t: 'estimate',
      q: '40bbでオープン→3bet→コールすると、フロップ開始時のポットは15.5bb、残りは33bb。SPRは？',
      hand: ['As', 'Js'],
      min: 0,
      max: 12,
      step: 0.5,
      unit: '',
      answer: 2,
      tolerance: 1.5,
      explain: '33 ÷ 15.5 ≈ 2.1 です。',
    },
    {
      t: 'quiz',
      q: '3betにオールインで返すのが向かない相手は？',
      hand: ['As', 'Js'],
      options: ['バリューでしか3betしない相手', 'ブラフ3betが多い相手', 'よく降りる相手', '3betが広い相手'],
      answer: 0,
      explain: 'バリューばかりの相手は降りないので、オールインはコールされて不利な勝負になります。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: '40bbで3betされたら、コールより「オールインかフォールド」を先に考えます。相手のブラフ3betの量で判断が変わります。',
    },
  ],
};

export default lesson;
