import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'ss-3bet-shove',
  blocks: [
    { t: 'h', text: '30bbで3betする' },
    { t: 'p', text: 'あなたは BTN でスタック30bb。CO のオープンに、どう3betするかを試します。' },
    {
      t: 'play',
      title: '30bb、BTNでA♠5♠',
      hero: 'BTN',
      heroCards: ['As', '5s'],
      villain: 'CO',
      steps: [
        {
          street: 'プリフロップ',
          pot: 3.7,
          say: 'CO が2.2bbでオープン。あなたは BTN で **A♠5♠**、スタック30bb。',
          q: 'どうする？',
          options: [
            { label: '7bb に3bet', good: false, why: '4betオールインされると降りにくく、コールされてもSPRが2未満で動けません。' },
            { label: '30bb オールイン', good: true, why: 'フォールドエクイティを最大にできます。A を持つので相手の AA・AK も減ります。' },
            { label: 'コール', good: false, why: '浅いスタックでは、この手は先にオールインする方が得です。' },
          ],
        },
        {
          street: 'プリフロップ',
          pot: 33.7,
          say: 'CO はしばらく考えてフォールド。ブラインドも降りました。',
          q: 'このオールインで取れたのは？',
          options: [
            { label: '3.7bb', good: true, why: 'CO のオープン2.2bbとブラインド1.5bbの合計です。' },
            { label: '33.7bb', good: false, why: '自分の30bbは戻ってくるだけです。' },
          ],
        },
      ],
      outro: '取れる額は小さくても、相手が十分に降りれば利益になります。',
    },
    { t: 'h', text: 'オールインのEV' },
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
    { t: 'p', text: 'コールされると不利な手でも、相手が80%降りれば約0.65bbの利益になります。' },
    {
      t: 'combos',
      groups: [
        { label: 'バリュー', hands: ['AA', 'KK', 'QQ', 'JJ', 'TT', 'AK', 'AQ', 'AJs', 'KQs'] },
        { label: 'ブロッカー付きのセミブラフ', hands: ['A5s', 'A4s'] },
      ],
      caption: '合計78コンボ（全体の約5.9%）。COオープンに対する30bbの目安。相手のオープンが広いほど広げる',
    },
    {
      t: 'rapid',
      q: '30bb、COの2.2bbオープンに BTN で。上のレンジで答えてください',
      choices: ['オールイン', 'フォールド'],
      items: [
        { cards: ['Ah', 'Qd'], answer: 0 },
        { cards: ['9h', '8h'], answer: 1, why: 'A のブロッカーがなく、コールされると不利です。' },
        { cards: ['Kc', 'Qc'], answer: 0 },
        { cards: ['Ad', '4d'], answer: 0, why: 'A を持つセミブラフです。' },
        { cards: ['Kc', 'Td'], answer: 1, why: 'コールしてくる手にほとんど負けています。' },
        { cards: ['Th', 'Tc'], answer: 0 },
        { cards: ['7d', '2c'], answer: 1 },
        { cards: ['Ac', 'Jc'], answer: 0 },
        { cards: ['Qh', 'Jd'], answer: 1, why: 'このレンジには入りません。' },
      ],
    },
    { t: 'h', text: 'オールインされた側' },
    {
      t: 'odds',
      pot: 5.9,
      bet: 27.8,
      equity: 42,
      caption: 'COは2.2bbを出しているので、あと27.8bb。必要勝率は約45%。99は上のレンジ全体に約42%で届かない',
    },
    {
      t: 'estimate',
      q: 'COの2.2bbオープンに BTN が30bbオールイン。CO のコールに必要な勝率は？',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 45,
      tolerance: 6,
      explain: '追加は27.8bb、コール後のポットは61.5bb。27.8 ÷ 61.5 ≈ 45% です。CO がコールするのは強いペアや AK が中心になります。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: '30bb前後では3betはオールインが基本。バリューにA5sのようなブロッカー付きの手を少し混ぜます。',
    },
  ],
};

export default lesson;
