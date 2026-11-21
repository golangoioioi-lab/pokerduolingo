import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pos-co',
  blocks: [
    { t: 'h', text: '後ろは3人だけ' },
    { t: 'rapid', q: 'CO（UTG と HJ はフォールド）。オープンする？', choices: ['オープン', 'フォールド'], items: [
      { cards: ['Ah', '5c'], answer: 0, why: 'A5o は CO から開けます。' },
      { cards: ['Ks', '6s'], answer: 0, why: 'K6s のようなスーテッドの K は CO で加わります。' },
      { cards: ['5d', '4d'], answer: 0 },
      { cards: ['Kd', '8c'], answer: 1, why: 'K8o は BTN まで待ちます。' },
      { cards: ['Jh', 'Tc'], answer: 0 },
      { cards: ['Ac', '2d'], answer: 1, why: 'A2o は CO ではまだ外します。' },
      { cards: ['9h', '7h'], answer: 0 },
      { cards: ['Qs', '5s'], answer: 1, why: 'Q5s は BTN から開けます。' },
      { cards: ['9c', '8d'], answer: 1, why: '98o はオフスートなので CO では外します。' },
      { cards: ['Jd', '8d'], answer: 0 },
    ] },
    { t: 'p', text: 'CO の後ろは BTN、SB、BB の3人です。レンジは全体の **約31%** まで広がります。' },
    { t: 'seats', seats: [
      { pos: 'UTG', action: 'フォールド', folded: true },
      { pos: 'HJ', action: 'フォールド', folded: true },
      { pos: 'CO', hero: true, action: 'オープン 2.5bb', bet: 2.5, cards: ['Qh', 'Js'] },
      { pos: 'BTN', action: '未行動' },
      { pos: 'SB', action: '未行動', bet: 0.5 },
      { pos: 'BB', action: '未行動', bet: 1 },
    ], pot: 4, caption: '前の2人が降りた CO のオープン。' },
    { t: 'h', text: 'CO で広がる手' },
    { t: 'combos', groups: [
      { label: 'HJ までの中心', hands: ['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', 'AKs', 'AQs', 'AJs', 'ATs', 'KQs', 'KJs', 'QJs', 'JTs', 'AKo', 'AQo', 'KQo'] },
      { label: 'CO で加わる手', hands: ['K6s', 'K5s', 'K4s', 'Q8s', 'J8s', '97s', '86s', '75s', '54s', 'A8o', 'A7o', 'A5o', 'JTo'] },
    ], caption: 'スーテッドの手を増やし、オフスートは A と絵札を少し足します。' },
    { t: 'range', spot: 'rfi-co', caption: 'CO のオープンレンジの目安。' },
    { t: 'h', text: 'BTN という壁' },
    { t: 'p', text: 'CO の悩みは後ろの BTN です。3bet されるとこちらは位置がありません。強い手は続け、端の手は降ります。' },
    { t: 'range', spot: 'btn-vs-co', caption: 'BTN が CO のオープンに 3bet やコールをする目安。' },
    { t: 'quiz', q: 'BTN に 3bet された。降りやすいのはどれ？', options: ['J9s', 'AA', 'KK', 'AKs'], answer: 0, explain: 'J9s は 3bet されると続けにくい手です。強い手は 4bet やコールで続けます。', optionCards: [['Jh', '9h'], ['As', 'Ad'], ['Ks', 'Kd'], ['Ac', 'Kc']] },
    { t: 'estimate', q: 'CO のオープン頻度の目安は？（全ハンドに対する%）', min: 0, max: 60, step: 1, unit: '%', answer: 31, tolerance: 5, explain: 'CO は約31%です。HJ の約24%より広く、BTN の約49%より狭くなります。' },
    { t: 'h', text: '1ハンドやってみる' },
    { t: 'play', title: 'CO で J9s', hero: 'CO', heroCards: ['Jh', '9h'], villain: 'BTN', steps: [
      { street: 'プリフロップ', pot: 1.5, say: 'UTG と HJ がフォールド。あなたは CO で **J♥9♥**。', q: 'どうする？', options: [
        { label: '2.5bb オープン', good: true, why: 'J9s は CO のオープンレンジに入ります。' },
        { label: 'フォールド', good: false, why: '後ろは3人だけ。J9s は開けられる手です。' },
        { label: 'リンプ', good: false, why: '先に入るならレイズが基本です。' },
      ] },
      { street: 'プリフロップ', pot: 12, say: 'BTN が 8bb に 3bet。SB と BB はフォールド。', q: 'どうする？', options: [
        { label: 'フォールド', good: true, why: '位置がなく、相手は強い手に偏っています。J9s は降ります。' },
        { label: 'コール', good: false, why: '位置なしで 5.5bb を足すには弱すぎます。' },
        { label: '4bet', good: false, why: 'J9s は 4bet に向く手ではありません。' },
      ] },
    ], outro: 'CO は広く開けますが、BTN の 3bet には端の手から降ります。' },
    { t: 'paint', spot: 'rfi-co', q: 'CO でオープンする手を塗ってください。' },
  ],
};

export default lesson;
