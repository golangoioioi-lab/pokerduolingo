import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'protection-bets',
  blocks: [
    { t: 'h', text: 'まずやってみる：TTで打つ？' },
    {
      t: 'play',
      title: 'BTNで T♥T♦',
      hero: 'BTN',
      heroCards: ['Th', 'Td'],
      villain: 'BB',
      steps: [
        {
          street: 'フロップ',
          board: ['8c', '5d', '2s'],
          pot: 5.5,
          say: 'BTNでオープンし、BBがコール。オーバーペア。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '2bbベット', good: true, why: 'AKやAQなどオーバーカードを安く降ろし、弱いペアからは払ってもらえます。' },
            { label: '6bbベット', good: false, why: '降ろしたい手は小さいベットでも降ります。大きく打つと強い手だけが残ります。' },
            { label: 'チェック', good: true, why: 'チェックも成り立ちますが、オーバーカードに無料でカードを見せます。' },
          ],
        },
        {
          street: 'ターン',
          board: ['Kh'],
          pot: 9.5,
          say: 'BBがコール。ターンK♥。オーバーカードが落ちた。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: 'BBのKxに抜かれた可能性があります。ポットを小さく保ちます。' },
            { label: '9bbベット', good: false, why: '降りるのは負けている手、払うのは勝っている手になりがちです。' },
          ],
        },
      ],
      outro: 'フロップで降ろせたはずのオーバーカードは、ターンで逆転してきます。これがプロテクションの価値です。',
    },
    { t: 'h', text: 'AKの25%を奪う' },
    { t: 'p', text: '相手がタダで次のカードを見れば逆転できる手を降ろし、そのエクイティを使わせないこと。これを**エクイティ・デナイ**（プロテクション）と呼びます。' },
    {
      t: 'equity',
      players: [
        { label: 'TT', cards: ['Th', 'Td'], pct: 75 },
        { label: 'AK', cards: ['Ac', 'Kd'], pct: 25 },
      ],
      board: ['8c', '5d', '2s'],
      caption: 'フロップでのエクイティの目安。AKはターンとリバーで約25%逆転する。',
    },
    {
      t: 'estimate',
      q: 'BBの A♣K♦ が TT を逆転するアウツは何枚？',
      hand: ['Ac', 'Kd'],
      board: ['8c', '5d', '2s'],
      min: 0,
      max: 12,
      step: 1,
      unit: '枚',
      answer: 6,
      tolerance: 1,
      explain: 'Aが3枚、Kが3枚の計6枚。2枚引けるので 6 × 4 = 約24%、ほぼ25%です。',
    },
    {
      t: 'estimate',
      q: 'ポット6bb。チェックしてAKにカードを見せると、AKが持つ取り分（25%）は何bb？',
      hand: ['Ac', 'Kd'],
      board: ['8c', '5d', '2s'],
      min: 0,
      max: 6,
      step: 0.5,
      unit: 'bb',
      answer: 1.5,
      tolerance: 1,
      explain: '6bb × 25% = 1.5bb。ベットでAKを降ろせれば、この取り分は自分のものになります。',
    },
    {
      t: 'compare',
      left: {
        title: '8-5-2 の TT：価値が大きい',
        cards: ['Th', 'Td'],
        board: ['8c', '5d', '2s'],
        verdict: 'good',
        points: ['オーバーカードに約25%逆転される', '小さいベットで降ろす価値がある'],
      },
      right: {
        title: 'K-7-2 の 77：価値が小さい',
        cards: ['7h', '7d'],
        board: ['Ks', '7c', '2d'],
        verdict: 'neutral',
        points: ['ほとんどのターンで逆転されない', 'デナイよりバリューを重視する'],
      },
      caption: 'プロテクションが効く手と効かない手。',
    },
    { t: 'warn', title: '大きく打てば守れるわけではない', text: '大きく打つと、弱い手が降りて強い手だけが残ります。デナイ目的なら、弱い手が降りる最小限のサイズで十分です。' },
    { t: 'h', text: 'もう一度やる' },
    {
      t: 'rapid',
      q: 'この手のプロテクションの価値は？',
      choices: ['大きい', '小さい'],
      items: [
        { cards: ['Th', 'Td'], board: ['8c', '5d', '2s'], answer: 0, why: 'オーバーカード2枚の手に約25%逆転されます。' },
        { cards: ['7h', '7d'], board: ['Ks', '7c', '2d'], answer: 1, why: 'セット。ほとんどのターンで逆転されません。' },
        { cards: ['Ks', 'Kd'], board: ['9h', '8h', '2c'], answer: 0, why: 'フラッシュドローやストレートドローに逆転されます。' },
        { cards: ['Ad', 'Ac'], board: ['As', 'Kd', '7c'], answer: 1, why: 'トップセットでドローもほぼありません。' },
        { cards: ['Jh', 'Jd'], board: ['7s', '4c', '2h'], answer: 0, why: 'Q・K・Aのオーバーカードが多く落ちます。' },
        { cards: ['Ah', 'Kh'], board: ['Ad', 'Kc', '3s'], answer: 1, why: 'トップ2ペア。逆転するカードがほとんどありません。' },
      ],
    },
    { t: 'tip', text: 'プロテクションが効くのは、自分が中くらいの強さで、相手の降りる手にエクイティが残っているときです。' },
  ],
};

export default lesson;
