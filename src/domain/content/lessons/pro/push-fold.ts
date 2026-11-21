import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'push-fold',
  blocks: [
    { t: 'h', text: '10bb、押すか降りるか' },
    { t: 'rapid', q: '10bb、アンティあり。BTN で全員フォールド。オールインする？', choices: ['オールイン', 'フォールド'], items: [
      { cards: ['Ah', 'Jc'], answer: 0 },
      { cards: ['7d', '2c'], answer: 1, why: 'どの席でもフォールドです。' },
      { cards: ['9s', '9d'], answer: 0 },
      { cards: ['8h', '3c'], answer: 1, why: 'コールされると大きく不利で、BTN でも外します。' },
      { cards: ['Kd', 'Qc'], answer: 0 },
      { cards: ['9c', '4h'], answer: 1, why: '降ろす以外に勝ち筋がほとんどありません。' },
      { cards: ['As', '5s'], answer: 0, why: 'BTN の 10bb なら Ax はほぼ全部オールインです。' },
      { cards: ['Td', '3s'], answer: 1 },
    ] },
    { t: 'p', text: '約10〜12bb 以下では、プリフロップは「オールインかフォールド」に絞るのが基本です。BTN は後ろが2人だけなので、かなり広く押せます。' },
    { t: 'h', text: 'なぜオープンではなくオールインか' },
    { t: 'p', text: '10bb で 2.2bb オープンして3betオールインを受けると、弱い手でも降りられない価格になります。自分から押せば、降ろす力（フォールドエクイティ）を最大に使えます。' },
    { t: 'seats', seats: [{ pos: 'BTN', hero: true, action: 'オールイン', bet: 10 }, { pos: 'SB', folded: true }, { pos: 'BB', action: 'コールするか判断' }], pot: 2.5, caption: '最初のポットは 2.5bb（SB 0.5 + BB 1 + アンティ 1）。コールされるとポットは 21.5bb。' },
    { t: 'tree', root: 'BTN 10bb オールイン（BBのコール率30%、コールされたときの勝率35%）', options: [{ label: 'フォールド', ev: 0 }, { label: 'オールイン', outcomes: [{ label: '全員フォールド', prob: 0.7, value: 2.5 }, { label: 'コールされて勝つ（0.3×35%）', prob: 0.105, value: 11.5 }, { label: 'コールされて負ける（0.3×65%）', prob: 0.195, value: -10 }], note: 'フォールドエクイティがあるのでプラス' }], caption: 'コールされた場合だけなら約 -2.5bb でも、全体では約 +1.0bb。' },
    { t: 'estimate', q: '最初のポット 2.5bb、10bb オールイン。コールされたら必ず負けるとして、損益ゼロになる相手のフォールド率は？', min: 0, max: 100, step: 5, unit: '%', answer: 80, tolerance: 15, explain: 'f × 2.5 − (1 − f) × 10 = 0 より f = 0.8。実際はコールされても勝率があるので、必要なフォールド率はもっと低くなります。' },
    { t: 'h', text: 'ポジション別の目安' },
    { t: 'table', head: ['ポジション', '目安の広さ', 'ハンド例'], rows: [['UTG〜HJ', '約10〜15%', '55+、A8s+、ATo+、KTs+、QJs'], ['CO', '約20〜30%', '22+、A2s+、A7o+、K9s+、KJo+、QTs+、JTs'], ['BTN', '約35〜45%', '22+、Ax ほぼ全部、K5s+、KTo+、Q8s+、J8s+、T8s+、98s'], ['SB（BBと1対1）', '約50%以上', 'BTN よりさらに広い']] },
    { t: 'combos', groups: [{ label: 'UTG〜HJの目安', hands: ['55', '66', '77', '88', '99', 'TT', 'JJ', 'QQ', 'KK', 'AA', 'A8s', 'A9s', 'ATs', 'AJs', 'AQs', 'AKs', 'ATo', 'AJo', 'AQo', 'AKo', 'KTs', 'KJs', 'KQs', 'QJs'] }], caption: '約10bb・アンティありの目安。148コンボ、全体の約11%。後ろの人数が少ないほど広げます。' },
    { t: 'warn', text: '表は大まかな目安です。6〜7bb ならさらに広く、15bb 近くなら狭く。アンティがなければ全体的に狭くします。' },
    { t: 'quiz', q: '10bb、アンティあり、UTG。オールインしてよい手はどれ？', options: ['ATo', 'K6o', 'Q7o', '75o'], optionCards: [['Ad', 'Tc'], ['Kd', '6c'], ['Qh', '7s'], ['7d', '5c']], answer: 0, explain: 'UTG は後ろに5人いるので狭く押します。ATo は目安に入ります。ほかの3つは UTG では外します。' },
    { t: 'h', text: '8bb で押してみる' },
    { t: 'play', title: '8bb の BTN', hero: 'BTN', heroCards: ['Kh', '7h'], villain: 'BB', villainCards: ['Qs', 'Jc'], steps: [
      { street: 'プリフロップ', pot: 2.5, say: 'アンティあり。あなたは **8bb**。CO までフォールドして BTN に回ってきました。', q: 'どうする？', options: [
        { label: 'オールイン', good: true, why: '後ろは2人でポットも大きく、K7s は十分押せます。' },
        { label: 'もっと良い手を待つ', good: false, why: '待つと削られ、フォールドエクイティも失います。' },
        { label: '2bb オープン', good: false, why: '8bb では実質オールインと同じです。先に押すほうが得です。' }] },
      { street: 'フロップ', board: ['Qd', '8c', '3s'], pot: 17.5, say: 'BB が QJo でコール。フロップで BB に Q のペア。' },
      { street: 'ターン', board: ['7c'], pot: 17.5, say: 'ターンで 7 のペア。まだ届きません。' },
      { street: 'リバー', board: ['2d'], pot: 17.5, say: 'リバーは 2。' },
    ], outro: 'コールされて負けることもあります。全員が降りる分まで含めて、押す判断がプラスかどうかで評価します。' },
  ],
};

export default lesson;
