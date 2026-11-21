import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'tr-thin-value',
  blocks: [
    { t: 'h', text: 'まずやってみる：K♥J♦はどのくらい強い？' },
    {
      t: 'p',
      text: 'フロップ K♣8♦4♠ でBTNがベット、BBコール。ターン2♥は両者チェック。リバー9♠でBBがチェック、ポットは9.5bb。あなたはBTNでK♥J♦です。',
    },
    {
      t: 'order',
      q: 'BBがコールしてきそうな手とあなたの手を、強い順にタップ。',
      board: ['Kc', '8d', '4s', '2h', '9s'],
      hands: [
        { label: 'あなた', cards: ['Kh', 'Jd'] },
        { label: 'KQ', cards: ['Ks', 'Qh'] },
        { label: 'KT', cards: ['Kd', 'Ts'] },
        { label: '98', cards: ['9h', '8h'] },
        { label: 'A8', cards: ['Ac', '8c'] },
      ],
      explain: '98の2ペア > KQ > あなたのKJ > KT > A8。トップペアの弱めのキッカーは、コールする手の真ん中にいます。',
    },
    { t: 'h', text: '基準は「コールされたとき」' },
    {
      t: 'p',
      text: '**コールしてくる手の50%より多くに勝っていれば打つ**。降りる手は、打っても打たなくても自分が勝つので計算に入りません。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'コールしてくる、より強い手', hands: ['KQ', 'K9s', 'K8s', '98s'] },
        { label: 'コールしてくる、より弱い手', hands: ['KT', 'K7s', 'K6s', 'A8s', 'Q8s', '87s'] },
      ],
      dead: ['Kc', '8d', '4s', '2h', '9s', 'Kh', 'Jd'],
      caption: 'BBはAKや強い2ペア・セットの多くを別のアクションにしている前提',
    },
    {
      t: 'estimate',
      q: 'より強い手12コンボ、より弱い手21コンボがコールしてくる。コールされたときに勝つ確率は？',
      hand: ['Kh', 'Jd'],
      board: ['Kc', '8d', '4s', '2h', '9s'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 64,
      tolerance: 10,
      explain: '21 ÷ (12 + 21) ≈ 64% です。50%を超えているのでバリューベットできます。',
    },
    {
      t: 'estimate',
      q: 'あなたがK♥J♦を持つとき、BBのKQは何コンボ残っている？',
      hand: ['Kh', 'Jd'],
      board: ['Kc', '8d', '4s', '2h', '9s'],
      min: 0,
      max: 16,
      step: 1,
      unit: 'コンボ',
      answer: 8,
      tolerance: 2,
      explain: 'K♣はボード、K♥はあなたの手札なので、Kは2枚。2 × 4 = 8コンボです。自分のKが相手の強い手を減らしています。',
    },
    { t: 'h', text: 'EVで比べる' },
    {
      t: 'tree',
      root: 'BTNがK♥J♦、リバー（ポット9.5bb）',
      options: [
        {
          label: '3bbベット（約1/3）',
          outcomes: [
            { label: 'BBの弱い手が降りる', prob: 0.4, value: 9.5 },
            { label: 'より弱い手がコール', prob: 0.38, value: 12.5 },
            { label: 'より強い手がコール', prob: 0.22, value: -3 },
          ],
        },
        {
          label: 'チェック',
          outcomes: [
            { label: 'ショーダウンで勝つ', prob: 0.78, value: 9.5 },
            { label: 'ショーダウンで負ける', prob: 0.22, value: 0 },
          ],
        },
      ],
      caption: '確率は目安。差は 3 ×（0.38 − 0.22）≈ 0.5bb',
    },
    {
      t: 'p',
      text: 'サイズは**1/4〜1/3ポット**。大きく打つほど弱い手が降り、強い手だけが残ります。チェックレイズされたら基本的に降ります。',
    },
    { t: 'h', text: 'もう一度やる' },
    {
      t: 'rapid',
      q: '同じリバーでBBがチェック。BTNはこの手でベット？ チェック？',
      choices: ['ベット', 'チェック'],
      items: [
        { cards: ['Kh', 'Jd'], board: ['Kc', '8d', '4s', '2h', '9s'], answer: 0, why: 'コールする手の約64%に勝つので、小さく打ちます。' },
        { cards: ['Kd', 'Qd'], board: ['Kc', '8d', '4s', '2h', '9s'], answer: 0, why: 'KJよりさらに強いトップペア。はっきりバリューです。' },
        { cards: ['9h', '9d'], board: ['Kc', '8d', '4s', '2h', '9s'], answer: 0, why: 'セット。Kxから払ってもらいます。' },
        { cards: ['8h', '7h'], board: ['Kc', '8d', '4s', '2h', '9s'], answer: 1, why: '2番目より下のペア。コールしてくるKxや9xに負けています。' },
        { cards: ['6h', '6d'], board: ['Kc', '8d', '4s', '2h', '9s'], answer: 1, why: 'コールしてくる手のほとんどに負けています。' },
        { cards: ['4h', '4c'], board: ['Kc', '8d', '4s', '2h', '9s'], answer: 0, why: 'セット。強いバリューです。' },
        { cards: ['Th', 'Tc'], board: ['Kc', '8d', '4s', '2h', '9s'], answer: 1, why: 'コールしてくるのはKxが中心で、TTは負けています。' },
      ],
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: '薄いバリューは「コールされたときに過半数に勝つか」で判断し、小さいサイズで打ちます。自分の手札が相手の強い手をどれだけ減らすかも数えます。',
    },
  ],
};

export default lesson;
