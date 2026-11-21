import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pf-bet-call',
  blocks: [
    { t: 'h', text: 'ベットの大きさ' },
    { t: 'p', text: '**ベット**は自分から先にチップを出すこと、**コール**は同じ額を出してついていくことです。' },
    {
      t: 'play',
      title: 'トップペアでベット',
      hero: 'CO',
      heroCards: ['As', 'Kd'],
      villain: 'BB',
      villainCards: ['Kh', '9h'],
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'あなたは CO で **A♠K♦**。2.5bb にレイズし、BB だけがコールしました。' },
        { street: 'フロップ', board: ['Ks', '7d', '2c'], pot: 5.5, say: 'K が出て、あなたは **K のペア**。BB はチェック。', q: 'どのくらいベットする？', options: [
          { label: '2bb ベット', good: true, why: '小さめなら、K9 や 7 のペアのような弱い手もついてきます。' },
          { label: 'オールイン（97.5bb）', good: false, why: '大きすぎると、あなたより弱い手はみんな降りてしまいます。' },
        ] },
        { street: 'ターン', board: ['4h'], pot: 9.5, say: 'BB はコール。ターンは 4。BB はまたチェック。', q: 'どうする？', options: [
          { label: '6bb ベット', good: true, why: 'まだ弱い K や 7 から払ってもらえます。' },
          { label: 'フォールド', good: false, why: '一番強い K のペアです。降りる理由はありません。' },
        ] },
        { street: 'リバー', board: ['8s'], pot: 21.5, say: 'BB はコール。リバーは 8。BB はチェック。', q: 'どうする？', options: [
          { label: '10bb ベット', good: true, why: 'もう一度払ってもらえる見込みがあります。' },
          { label: 'チェック', good: true, why: '見せ合いで勝てる手なので、ここで止めても悪くありません。' },
        ] },
      ],
      outro: 'K のペアどうしなら、次に大きい A を持つあなたの勝ち。勝てそうな手は、相手が払える大きさでベットします。',
    },
    { t: 'h', text: 'コールするかの決め方' },
    {
      t: 'odds',
      pot: 10,
      bet: 5,
      equity: 30,
      caption: 'ポット 10bb に相手が 5bb ベット。5bb 払って 20bb を取りにいくので、4回に1回勝てれば元が取れます。',
    },
    { t: 'p', text: 'ベットがポットの半分なら **25%**、ポットと同じ額なら **33%** 勝てればコールできる、が目安です。' },
    {
      t: 'rapid',
      q: 'コールに必要な勝率は？',
      choices: ['25%', '33%'],
      items: [
        { text: 'ポット 10bb に 5bb のベット', answer: 0 },
        { text: 'ポット 10bb に 10bb のベット', answer: 1 },
        { text: 'ポット 6bb に 3bb のベット', answer: 0, why: 'ポットの半分なので 25% です。' },
        { text: 'ポット 20bb に 20bb のベット', answer: 1, why: 'ポットと同じ額なので 33% です。' },
        { text: 'ポット 100bb に 50bb のベット', answer: 0 },
        { text: 'ポット 8bb に 8bb のベット', answer: 1 },
      ],
    },
    {
      t: 'play',
      title: 'ドローでついていく',
      hero: 'BB',
      heroCards: ['Jh', 'Th'],
      villain: 'BTN',
      villainCards: ['Ac', '9c'],
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'BTN が 2.5bb レイズ。あなたは BB で **J♥T♥** をコール。' },
        { street: 'フロップ', board: ['9h', '4h', '2c'], pot: 5.5, say: 'ハートが4枚。あなたがチェックすると、BTN は 3bb ベット。', q: 'どうする？', options: [
          { label: 'コール', good: true, why: 'ポットの半分ほどのベット。あと2枚のうちにフラッシュになる見込みが十分あります。' },
          { label: 'フォールド', good: false, why: '払う額に対して、完成の見込みが十分あります。' },
        ] },
        { street: 'ターン', board: ['Kd'], pot: 11.5, say: 'ターンは K。チェックすると BTN は 5bb ベット。必要な勝率は約23%です。', q: 'どうする？', options: [
          { label: 'コール', good: true, why: 'ハート9枚と Q 3枚で、約4回に1回完成します。必要な勝率に届きます。' },
          { label: 'フォールド', good: false, why: '完成率（約26%）が必要な勝率（約23%）を上回っています。' },
        ] },
        { street: 'リバー', board: ['Qs'], pot: 21.5, say: 'Q が来て K-Q-J-T-9 の**ストレート**が完成。あなたが先に話します。', q: 'どうする？', options: [
          { label: '14bb ベット', good: true, why: '完成した強い手です。9 のペアなどから払ってもらえます。' },
          { label: 'チェック', good: false, why: '相手もチェックすると、もらえるはずのチップを取りそこねます。' },
        ] },
      ],
      outro: 'BTN はコール。払う額が小さく、完成すれば勝てるなら、ドローでもついていけます。',
    },
    { t: 'tip', title: '払う額ともらえる額', text: 'コールするかは「いくら払って、いくら取れるか」で決めます。ポットの半分のベットなら 4回に1回、ポットと同じなら 3回に1回勝てれば十分です。' },
  ],
};

export default lesson;
