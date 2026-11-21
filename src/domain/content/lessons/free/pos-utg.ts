import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pos-utg',
  blocks: [
    { t: 'h', text: 'まずは直感で' },
    { t: 'rapid', q: 'UTG（最初に動く席）。オープンする？', choices: ['オープン', 'フォールド'], items: [
      { cards: ['As', 'Kd'], answer: 0 },
      { cards: ['Kc', 'Th'], answer: 1, why: 'KTo は UTG では弱すぎます。AK や KQ に負けやすい手です。' },
      { cards: ['7h', '7d'], answer: 0 },
      { cards: ['Ah', '5h'], answer: 0, why: 'A5s はスーテッドの A。UTG でも開けます。' },
      { cards: ['Qd', 'Tc'], answer: 1, why: 'QTo は UTG では外します。' },
      { cards: ['9s', '8s'], answer: 0, why: '98s は UTG から開けるスーテッドコネクターです。' },
      { cards: ['Kh', '8h'], answer: 1, why: 'K8s は UTG では外し、HJ から加えます。' },
      { cards: ['Ac', 'Jd'], answer: 0 },
      { cards: ['5c', '4c'], answer: 1, why: '54s は UTG では外します。' },
      { cards: ['Ad', '9c'], answer: 1, why: 'A9o は UTG では弱いオフスートです。' },
    ] },
    { t: 'p', text: 'UTG の後ろには5人います。人数が多いほど、誰かが強い手を持っている確率が上がります。' },
    { t: 'seats', seats: [
      { pos: 'UTG', hero: true, action: 'オープン 2.5bb', bet: 2.5, cards: ['Ah', 'Qs'] },
      { pos: 'HJ', action: '未行動' },
      { pos: 'CO', action: '未行動' },
      { pos: 'BTN', action: '未行動' },
      { pos: 'SB', action: '未行動', bet: 0.5 },
      { pos: 'BB', action: '未行動', bet: 1 },
    ], pot: 4, caption: 'UTG は5人を残して行動し、フロップ以降もほとんど先に動きます。' },
    { t: 'h', text: 'なぜ狭くするのか' },
    { t: 'p', text: 'KTo のような手は、続けてくる相手の AK、KQ、AT に支配されます。UTG は強いペア、スーテッド、強いオフスートに絞ります。目安は全体の **約18%** です。' },
    { t: 'combos', groups: [
      { label: 'ペア（55+）', hands: ['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55'] },
      { label: 'スーテッド', hands: ['AKs', 'AQs', 'AJs', 'ATs', 'A5s', 'KQs', 'KJs', 'QJs', 'JTs', 'T9s', '98s'] },
      { label: 'オフスート', hands: ['AKo', 'AQo', 'AJo', 'ATo', 'KQo', 'KJo'] },
    ], caption: 'UTG の中心になる手。実際のレンジにはこれに A9s〜A2s や K9s なども加わります。' },
    { t: 'range', spot: 'rfi-utg', caption: 'UTG のオープンレンジの目安。' },
    { t: 'quiz', q: 'UTG で K♥T♦。オープンしますか？', options: ['フォールド。AK、KQ、AT に支配されやすい', 'オープンする。K が入っているから', 'オープンする。2枚とも絵札だから'], answer: 0, explain: 'KTo はペアを作っても上のキッカーに負けやすい手です。UTG ではフォールドします。', hand: ['Kh', 'Td'] },
    { t: 'quiz', q: 'UTG から開けやすいのはどれ？', options: ['AQs', 'KTo', '85o', 'J4o'], answer: 0, explain: 'AQs は後ろの強い手にも負けにくい手です。ほかの3つは UTG では外します。', optionCards: [['As', 'Qs'], ['Kd', 'Th'], ['8c', '5d'], ['Js', '4h']] },
    { t: 'estimate', q: 'UTG が 2.5bb オープンし、BB だけがコール（SB は降りた）。ポットは何bb？', min: 0, max: 12, step: 0.5, unit: 'bb', answer: 5.5, tolerance: 0.5, explain: '2.5 + 2.5 + SB の 0.5 = 5.5bb です。SB が降りても 0.5bb はポットに残ります。' },
    { t: 'h', text: '自分で塗ってみる' },
    { t: 'paint', spot: 'rfi-utg', q: 'UTG でオープンする手を塗ってください。' },
    { t: 'tip', text: 'サイズは 2.5bb が基本です。3bet されたら相手は強い手に偏るので、AA〜QQ と AK を中心に続けます。' },
  ],
};

export default lesson;
