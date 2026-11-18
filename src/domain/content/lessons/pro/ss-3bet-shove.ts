import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'ss-3bet-shove',
  blocks: [
    {
      t: 'p',
      text: '30bb前後のスタックで相手のオープンに3betするなら、小さく3betするより**最初からオールイン**する方が多くの場面でよくなります。7bbに3betすると、4betオールインされたときに降りにくく、コールされてもSPRが2未満でほとんど動けないからです。',
    },
    { t: 'h', text: 'オールインのEV' },
    {
      t: 'p',
      text: 'COが2.2bbでオープン、BTNは30bb。ブラインドは毎回降りるとします。BTNがA♠5♠でオールインすると、リスクは30bb、取れるのは 2.2 + 1.5 = 3.7bb です。',
    },
    {
      t: 'equity',
      players: [
        { label: 'BTN A♠5♠', cards: ['As', '5s'], pct: 30 },
        { label: 'COのコールレンジ QQ+・AK', pct: 70 },
      ],
      caption: 'コールされたときの勝率は約30%',
    },
    {
      t: 'tree',
      root: 'BTNがA♠5♠で30bbオールイン',
      options: [
        { label: 'フォールド', ev: 0 },
        {
          label: 'オールイン',
          outcomes: [
            { label: 'COがフォールド', prob: 0.8, value: 3.7 },
            { label: 'コール→勝つ', prob: 0.06, value: 31.5 },
            { label: 'コール→負ける', prob: 0.14, value: -30 },
          ],
          note: 'コールされる20%のうち30%で勝つ',
        },
      ],
      caption: 'COのコール率20%は目安。勝てばポット61.5bbから自分の30bbを引いた31.5bbが利益',
    },
    {
      t: 'p',
      text: 'コールされると負けやすい手でも、相手が80%降りれば約0.65bbの利益になります。A5sのようにAを持つ手は、相手のAA・AKを減らすので、コールされる確率も下がります。',
    },
    { t: 'h', text: 'オールインする手の例' },
    {
      t: 'combos',
      groups: [
        { label: 'バリュー', hands: ['AA', 'KK', 'QQ', 'JJ', 'TT', 'AK', 'AQ', 'AJs', 'KQs'] },
        { label: 'ブロッカー付きのセミブラフ', hands: ['A5s', 'A4s'] },
      ],
      caption: '合計78コンボ（全体の約5.9%）。COオープンに対する30bbの目安',
    },
    {
      t: 'p',
      text: '相手のオープンが広いほど（BTNやSBのオープンに対するBBなど）、このレンジは広げられます。逆にUTGのタイトなオープンには狭くします。',
    },
    { t: 'h', text: 'オールインされた側' },
    {
      t: 'odds',
      pot: 5.9,
      bet: 27.8,
      equity: 42,
      caption: 'COは2.2bbを出しているので、あと27.8bb。99はBTNの上のオールインレンジ全体に対して勝率約42%',
    },
    {
      t: 'p',
      text: 'COに必要な勝率は 27.8 ÷ 61.5 ≈ 45% です。上のレンジに対しては、99でも約42%で届きません。COがコールするのは強いペアやAKが中心になります。',
    },
    {
      t: 'estimate',
      q: 'COの2.2bbオープンに、BTNがA♠5♠で30bbオールイン。全員降りたら、BTNが取れるのは？',
      hand: ['As', '5s'],
      min: 0,
      max: 10,
      step: 0.1,
      unit: 'bb',
      answer: 3.7,
      tolerance: 1,
      explain: 'COのオープン2.2bbとブラインド1.5bbの合計3.7bbです。',
    },
    {
      t: 'quiz',
      q: '30bbで小さい3betより3betオールインがよい理由は？',
      options: ['4betされたときに降りにくく、コール後も動けないから', 'オールインは必ず勝てるから', '小さい3betは禁止だから', '相手が必ずコールするから'],
      answer: 0,
      explain: '7bbの3betは30bbの約4分の1です。4betオールインされると降りにくく、コールされてもSPRが小さく動けません。最初から全部入れればフォールドエクイティを最大にできます。',
    },
    {
      t: 'quiz',
      q: 'COのオープンに30bbで3betオールインするブラフとして、最も向く手は？',
      options: ['A♠5♠', '7♦2♣', '9♥8♥', 'K♣T♦'],
      optionCards: [['As', '5s'], ['7d', '2c'], ['9h', '8h'], ['Kc', 'Td']],
      answer: 0,
      explain: 'Aを持つと相手のAA・AKのコンボが減り、コールされる確率が下がります。コールされても約30%の勝率があります。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: '30bb前後では3betはオールインが基本。バリューにA5sのようなブロッカー付きの手を少し混ぜます。',
    },
  ],
};

export default lesson;
