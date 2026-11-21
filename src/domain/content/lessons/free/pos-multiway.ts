import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pos-multiway',
  blocks: [
    { t: 'h', text: '3人以上で戦うとき' },
    { t: 'quiz', q: '3人のポット。チェックが回ってきた。Q♥J♦ でポットサイズのブラフはどう？', options: ['チェックする', 'ブラフでベットする'], answer: 0, explain: '相手2人を両方降ろす必要があります。各相手が60%で降りても、2人とも降りるのは 0.6 × 0.6 = 36% だけです。ガットショットだけなので、チェックして安くカードを見ます。', hand: ['Qh', 'Jd'], board: ['Kh', '8c', '3d'] },
    { t: 'p', text: 'ポットに3人以上が残っている状態を **マルチウェイ** と言います。人数が増えるほど、誰かが強い手を持っています。' },
    { t: 'seats', seats: [
      { pos: 'CO', action: 'オープン 2.5bb', bet: 2.5 },
      { pos: 'BTN', action: 'コール 2.5bb', bet: 2.5 },
      { pos: 'SB', action: 'フォールド', folded: true, bet: 0.5 },
      { pos: 'BB', hero: true, action: 'コール 1.5bb', bet: 2.5, cards: ['9d', '8d'] },
    ], pot: 8, caption: '3人でフロップを見る典型例。ポットは 2.5×3 + 0.5 = 8bb です。' },
    { t: 'h', text: 'ブラフが通りにくい' },
    { t: 'tree', root: 'フロップ。ポット 6bb に 4bb のブラフ（勝負手はない）。各相手が60%でフォールドすると仮定', options: [
      { label: '相手1人にブラフ', outcomes: [{ label: 'フォールド', prob: 0.6, value: 6 }, { label: 'コール', prob: 0.4, value: -4 }] },
      { label: '相手3人にブラフ', outcomes: [{ label: '全員フォールド（0.6の3乗）', prob: 0.216, value: 6 }, { label: '誰かがコール', prob: 0.784, value: -4 }] },
    ], caption: '1人なら +2.0bb、3人なら −1.84bb。人数が増えるとブラフの価値が大きく下がります。' },
    { t: 'estimate', q: '各相手が60%でフォールドすると仮定。3人全員が降りる確率は？', min: 0, max: 100, step: 1, unit: '%', answer: 22, tolerance: 5, explain: '0.6 × 0.6 × 0.6 = 0.216、つまり約22%です。' },
    { t: 'h', text: 'ナッツになる手を重視する' },
    { t: 'combos', groups: [
      { label: '価値が上がる', hands: ['AA', 'KK', 'QQ', 'AKs', 'AQs', 'JTs', 'T9s', '98s', '87s'] },
      { label: '価値が下がる', hands: ['AJo', 'KJo', 'QJo', 'A9o'] },
    ], caption: 'ワンペアの価値が下がり、フラッシュやストレートを作れる手の価値が上がります。' },
    { t: 'rapid', q: 'マルチウェイで、この手の価値は？', choices: ['上がる', '下がる'], items: [
      { cards: ['9h', '8h'], answer: 0 },
      { cards: ['Kd', 'Jc'], answer: 1, why: 'オフスートの絵札は支配されやすく、ナッツも作りにくい手です。' },
      { cards: ['As', '5s'], answer: 0, why: 'ナッツフラッシュを作れます。' },
      { cards: ['Ac', '9d'], answer: 1 },
      { cards: ['Jh', 'Th'], answer: 0 },
      { cards: ['Qs', 'Jh'], answer: 1 },
      { cards: ['Kc', 'Td'], answer: 1, why: 'K を当ててもキッカー負けしやすくなります。' },
      { cards: ['7s', '6s'], answer: 0 },
    ] },
    { t: 'h', text: '1ハンドやってみる' },
    { t: 'play', title: '3人ポットでセカンドペア', hero: 'BB', heroCards: ['9d', '8d'], villain: 'CO', steps: [
      { street: 'プリフロップ', pot: 6.5, say: 'CO が 2.5bb オープン、BTN がコール。あなたは BB で **9♦8♦**。', q: 'どうする？', options: [
        { label: 'コール', good: true, why: '追加 1.5bb で、3人ポットでも価値のあるスーテッドコネクターです。' },
        { label: 'フォールド', good: false, why: 'オッズが良く、マルチウェイで価値が上がる手です。' },
      ] },
      { street: 'フロップ', board: ['Kh', '8c', '3s'], pot: 18, say: 'セカンドペア。あなたはチェック。CO が 5bb ベット、BTN がコール。', q: 'どうする？', options: [
        { label: 'フォールド', good: true, why: 'ベットとコールが入りました。2人のどちらかに K がいる可能性が高い場面です。' },
        { label: 'コール', good: false, why: 'セカンドペアは2人を相手にするには弱すぎます。' },
        { label: 'レイズ', good: false, why: '2人を降ろすのは難しく、ブラフは通りません。' },
      ] },
    ], outro: 'マルチウェイでは、ワンペアで粘らず、強い手やナッツを狙える手で勝負します。' },
    { t: 'tip', text: '3人以上のポットでは C ベットの頻度を下げ、ベットするなら強い手か強いドローに絞ります。' },
  ],
};

export default lesson;
