import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'facing-3bet',
  blocks: [
    {
      t: 'p',
      text: 'オープンして3betされたとき、選択肢は4bet、コール、フォールドの3つです。オープンレンジの多くは続けられないので、降りる手が多くなるのは普通です。',
    },
    { t: 'p', text: 'ただし降りすぎると、相手はどんな手でも3betで利益を出せるようになります。' },
    { t: 'h', text: '降りすぎると3betが儲かる' },
    {
      t: 'p',
      text: 'COが2.5bbでオープンし、BTNが7.5bbに3bet。BTNは7.5bbを出して、ポットの4bb（CO 2.5bb＋ブラインド1.5bb）を取りにいきます。',
    },
    { t: 'formula', text: 'BTNの損益分岐 = 7.5 ÷ (4 + 7.5) ≈ 65%' },
    {
      t: 'p',
      text: 'COがオープンレンジの65%以上を降りるなら、BTNは手に関係なく3betだけで利益が出ます。「降りすぎない」ための目安です。',
    },
    { t: 'h', text: 'ポジションで変わる' },
    {
      t: 'compare',
      left: {
        title: 'CO オープン → BTN が3bet',
        points: ['CO はアウトオブポジション', 'コールは狭く、4bet かフォールドに寄せる'],
        verdict: 'bad',
      },
      right: {
        title: 'BTN オープン → SB/BB が3bet',
        points: ['BTN はインポジション', 'スーテッドやペアでコールを広げられる', '76s や 99 のようなプレイアブルな手'],
        verdict: 'good',
      },
    },
    {
      t: 'p',
      text: 'インポジションではエクイティを実現しやすいので、76sや99でコールできます。アウトオブポジションでは同じ手でも主導権を握られ、エクイティを活かしきれません。',
    },
    { t: 'h', text: 'ポットオッズで確認' },
    { t: 'p', text: 'BTNが2.5bbオープン、SBが10bbに3bet、BBはフォールド。BTNはあと7.5bbでコールできます。' },
    { t: 'formula', text: '必要勝率 = 7.5 ÷ (2.5 + 10 + 1 + 7.5) = 7.5 ÷ 21 ≈ 36%' },
    {
      t: 'odds',
      pot: 6,
      bet: 7.5,
      equity: 40,
      caption: 'BTN が SB の3betにコールする場合。必要勝率は約36%です（エクイティ40%は例）。',
    },
    {
      t: 'p',
      text: 'COオープンにBTNが7.5bbで3betなら、コール額5bbで必要勝率は約30%と安くなります。ただしCOはポジションがないため、コールできる手はそれほど増えません。',
    },
    {
      t: 'odds',
      pot: 6.5,
      bet: 5,
      equity: 32,
      caption: 'CO が BTN の3betにコールする場合。必要勝率は約30%（エクイティ32%は例）。',
    },
    { t: 'h', text: '手の分け方の例（BTNオープン vs SBの3bet）' },
    {
      t: 'table',
      head: ['行動', '手の例'],
      rows: [
        ['4bet', 'QQ+、AK、ブラフとしてA5s・A4s'],
        ['コール', 'JJ〜77、AQs〜ATs、KQs〜KTs、QJs、JTs、T9s〜65s、AQo'],
        ['フォールド', 'A9o以下、K9o以下などオフスートの弱い手、つながりの悪いスーテッド'],
      ],
    },
    { t: 'p', text: 'これは目安です。相手の3betが広ければコールと4betを増やし、タイトならAJo・KQoのような支配されやすい手から降ろします。' },
    { t: 'range', spot: 'rfi-btn', caption: 'BTNのオープンレンジ。3betされたとき、続けられるのはこの一部です' },
    {
      t: 'estimate',
      q: 'BTNが2.5bbオープン、BBが10bbに3bet、SBはフォールド済み。BTNがコールするのに必要な勝率は？',
      min: 10,
      max: 60,
      step: 1,
      unit: '%',
      answer: 37,
      tolerance: 4,
      explain: 'ポットは 2.5 + 10 + 0.5（SB）= 13bb。コール額は 10 − 2.5 = 7.5bb。7.5 ÷ (13 + 7.5) = 7.5 ÷ 20.5 ≈ 37% です。',
    },
    {
      t: 'quiz',
      q: 'BTNオープンにSBが3bet。BTNがコールする手として最も向いているのは？',
      options: ['76s', 'K8o', 'J5o', 'T3s'],
      optionCards: [['7h', '6h'], ['Kd', '8c'], ['Js', '5d'], ['Tc', '3c']],
      answer: 0,
      explain: '76sはストレートやフラッシュを作りやすく、インポジションでエクイティを実現しやすい手です。K8oは支配されやすく、J5oとT3sはプレイアビリティが低いのでフォールドします。',
    },
    {
      t: 'quiz',
      q: 'あなたはBTNで2.5bbオープン。SBが10bbに3betしました。この手をどうする？',
      hand: ['9h', '9s'],
      options: ['4bet', 'コール', 'フォールド'],
      answer: 1,
      explain: '99はJJ〜77のコールレンジに入ります。インポジションなのでセットやオーバーカードでエクイティを実現でき、4betするほど強くはありません。',
    },
    {
      t: 'estimate',
      q: 'COが2.5bbでオープンし、BTNが7.5bbに3bet（ブラインドはフォールド）。BTNの3betが手に関係なく儲かるには、COは何%以上降りればよい？',
      min: 30,
      max: 90,
      step: 1,
      unit: '%',
      answer: 65,
      tolerance: 5,
      explain: 'BTNの損益分岐は 7.5 ÷ (4 + 7.5) ≈ 65% です。',
    },
  ],
};

export default lesson;
