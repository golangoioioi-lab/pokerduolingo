import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bet',
  blocks: [
    { t: 'p', text: '相手のオープン（2bet）に対してさらにレイズすることを**3bet**と言います。目的は2つあります。' },
    {
      t: 'list',
      items: [
        '**バリュー3bet**: 強い手（QQ+、AK など）で、より大きなポットを作る',
        '**ブラフ3bet**: コールするには弱いが、フォールドさせたい手。降りてくれなくてもフロップで戦える手を選ぶ',
      ],
    },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', folded: true },
        { pos: 'HJ', folded: true },
        { pos: 'CO', bet: 2.5, action: 'オープン' },
        { pos: 'BTN', hero: true, bet: 7.5, action: '3bet（約3倍）' },
        { pos: 'SB', folded: true },
        { pos: 'BB', folded: true },
      ],
      pot: 11.5,
      caption: 'CO が 2.5bb でオープン、BTN（IP）が 7.5bb に3bet。',
    },
    { t: 'h', text: '良いブラフ3betの条件' },
    {
      t: 'list',
      items: [
        '**ブロッカー**: Aを持つと相手のAA・AK・AQが減り、4betされにくい（A5s、A4s）',
        '**プレイアビリティ**: コールされてもフラッシュやストレートで勝てる（スーテッド・コネクター）',
        '**コールするには微妙**: コールしても利益が薄い手をブラフに回す',
      ],
    },
    {
      t: 'combos',
      groups: [{ label: 'AA', hands: ['AA'] }, { label: 'AK', hands: ['AK'] }, { label: 'AQ', hands: ['AQ'] }],
      dead: ['As', '5s'],
      caption: 'A♠5♠ を持つと、相手の AA・AK・AQ は 38 から 27 コンボに減ります。',
    },
    { t: 'range', spot: 'btn-vs-co', caption: 'BTN vs COオープン。赤が3bet、緑がコール。A5s・A4sがブラフ3betに含まれている' },
    { t: 'h', text: 'リニア型とポラライズ型' },
    {
      t: 'compare',
      left: {
        title: 'リニア（直線的）',
        points: ['強い順に上から3betする', 'コールはあまりしない', 'SB vs BTN など、コールすると不利な場面'],
        verdict: 'neutral',
      },
      right: {
        title: 'ポラライズ（二極化）',
        points: ['非常に強い手とブラフで3bet', '中間の手はコールする', 'BTN vs CO、BB vs BTN など、コールも十分できる場面'],
        verdict: 'neutral',
      },
    },
    { t: 'h', text: '3betのサイズ' },
    {
      t: 'p',
      text: 'インポジションなら**オープンの約3倍**、アウトオブポジションなら**約3.5〜4倍**が目安です。ポジションがない側は、ポットを大きくして相手に有利な形で戦わせないようにします。',
    },
    {
      t: 'quiz',
      q: 'ブラフ3betの候補として最も適しているのは？',
      options: ['A5s', 'K7o', 'Q3o', '22'],
      optionCards: [['As', '5s'], ['Kd', '7c'], ['Qh', '3s'], ['2h', '2d']],
      answer: 0,
      explain: 'A5s は A のブロッカーで相手の強い手を減らし、コールされてもナッツフラッシュやホイールの可能性があります。K7o・Q3o はプレイアビリティが低く、22 はコールでセットを狙う方が向いています。',
    },
    {
      t: 'estimate',
      q: 'A♠5♠ を持っています。相手が持ちうる AA・AK・AQ は合計で何コンボ？（何も持たないときは 38）',
      hand: ['As', '5s'],
      min: 0,
      max: 40,
      step: 1,
      unit: 'コンボ',
      answer: 27,
      tolerance: 3,
      explain: 'Aを1枚持つと、AAは 6→3、AKは 16→12、AQは 16→12 になります。合計 3 + 12 + 12 = 27コンボです。',
    },
    {
      t: 'estimate',
      q: 'BTNが2.5bbでオープン。BBからアウトオブポジションで3betするとき、サイズの目安は？（約3.5〜4倍）',
      min: 5,
      max: 15,
      step: 0.5,
      unit: 'bb',
      answer: 9.5,
      tolerance: 1.5,
      explain: '2.5bb の 3.5〜4 倍で約 9〜10bb です。インポジションの約3倍（7.5bb）より大きくします。',
    },
    {
      t: 'quiz',
      q: 'ブラフ3betの目的として正しいのは？',
      options: ['相手をフォールドさせたい。降りなくてもフロップで戦える手を選ぶ', '必ずコールされるように小さく打つ', '弱い手ほどサイズを大きくする'],
      answer: 0,
      explain: 'ブラフ3betは、フォールドで利益を取りつつ、コールされても勝負できる手（ブロッカーやスーテッド）で行います。',
    },
  ],
};

export default lesson;
