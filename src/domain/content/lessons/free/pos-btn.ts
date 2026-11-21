import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pos-btn',
  blocks: [
    { t: 'h', text: 'いちばん広く開ける席' },
    { t: 'rapid', q: 'BTN（CO までフォールド）。オープンする？', choices: ['オープン', 'フォールド'], items: [
      { cards: ['Kh', '2h'], answer: 0, why: 'BTN ではスーテッドの K は全部開けます。' },
      { cards: ['7c', '2d'], answer: 1, why: 'どの席でもフォールドです。' },
      { cards: ['Ad', '2c'], answer: 0, why: 'BTN では A のオフスートも全部開けます。' },
      { cards: ['Ts', '8d'], answer: 0 },
      { cards: ['Qc', '7d'], answer: 1, why: 'Q7o は BTN でも弱すぎます。' },
      { cards: ['4s', '3s'], answer: 0 },
      { cards: ['Jh', '4c'], answer: 1, why: 'J4o はつながりもスートもありません。' },
      { cards: ['Qd', '5d'], answer: 0 },
      { cards: ['Td', '6c'], answer: 1, why: 'T6o は BTN でも外します。' },
      { cards: ['9h', '8s'], answer: 0 },
    ] },
    { t: 'p', text: 'BTN はフロップ以降、常に最後に動けます。後ろはブラインドの2人だけで、レンジは全体の **約49%** です。' },
    { t: 'seats', seats: [
      { pos: 'UTG', action: 'フォールド', folded: true },
      { pos: 'HJ', action: 'フォールド', folded: true },
      { pos: 'CO', action: 'フォールド', folded: true },
      { pos: 'BTN', hero: true, action: 'オープン 2.5bb', bet: 2.5, cards: ['7h', '6h'] },
      { pos: 'SB', action: '未行動', bet: 0.5 },
      { pos: 'BB', action: '未行動', bet: 1 },
    ], pot: 4, caption: '全員が降りた BTN。相手はブラインドの2人だけです。' },
    { t: 'h', text: '位置の価値' },
    { t: 'compare', left: { title: 'BTN で 76s', cards: ['7h', '6h'], points: ['最後に動ける', '相手を見てから決められる', 'ブラインドが降りれば 1.5bb'], verdict: 'good' }, right: { title: 'UTG で 76s', cards: ['7h', '6h'], points: ['後ろに5人いる', '先に動くので情報が少ない', '強い手に囲まれやすい'], verdict: 'bad' }, caption: '同じ手でも、席でプレイの価値が変わります。' },
    { t: 'range', spot: 'rfi-btn', caption: 'BTN のオープンレンジの目安。' },
    { t: 'odds', pot: 4, bet: 2.5, equity: 34, caption: 'CO のオープン（2.5bb）に BTN がコールする場面。必要勝率は約28%です。' },
    { t: 'estimate', q: 'BTN がオープンし、SB と BB が降りた。BTN が得るのは何bb？', min: 0, max: 5, step: 0.5, unit: 'bb', answer: 1.5, tolerance: 0.5, explain: 'SB の 0.5bb と BB の 1bb で合計 1.5bb です。' },
    { t: 'h', text: '位置を使って1ハンド' },
    { t: 'play', title: 'BTN で 76s', hero: 'BTN', heroCards: ['7h', '6h'], villain: 'BB', villainCards: ['Kd', '9c'], steps: [
      { street: 'プリフロップ', pot: 1.5, say: 'CO までフォールド。あなたは BTN で **7♥6♥**。', q: 'どうする？', options: [
        { label: '2.5bb オープン', good: true, why: 'スーテッドコネクターは BTN で開ける手です。' },
        { label: 'フォールド', good: false, why: '位置がある BTN では十分に開けられます。' },
      ] },
      { street: 'フロップ', board: ['8c', '5d', '2s'], pot: 5.5, say: 'BB だけがコール。BB はチェック。両端のストレートドローです。', q: 'どうする？', options: [
        { label: '2bb ベット', good: true, why: '相手を降ろすこともでき、コールされても 4 と 9 で完成します。' },
        { label: 'チェック', good: true, why: '位置があるので、無料でカードを見るのも悪くありません。' },
      ] },
      { street: 'ターン', board: ['Ks'], pot: 9.5, say: 'BB はコール。ターンは **K**。BB はまたチェック。', q: 'どうする？', options: [
        { label: 'チェックして次を見る', good: true, why: '最後に動けるので、追加を払わずにリバーを見られます。' },
        { label: 'オールイン', good: false, why: 'K は BB に当たりやすいカード。大きく打つ理由はありません。' },
      ] },
      { street: 'リバー', board: ['9h'], pot: 15.5, say: 'リバーは **9**。ストレート完成。BB が 6bb ベット。', q: 'どうする？', options: [
        { label: 'レイズ', good: true, why: 'ストレートは強い手。K や 9 を持つ相手から取れます。' },
        { label: 'コール', good: true, why: '勝てる手なので最低でもコールです。' },
        { label: 'フォールド', good: false, why: 'ストレートを降りる理由はありません。' },
      ] },
    ], outro: '位置があると、ターンで無料のカードを見られます。BTN が広く開けられる理由です。' },
    { t: 'paint', spot: 'rfi-btn', q: 'BTN でオープンする手を塗ってください。' },
  ],
};

export default lesson;
