import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'late-stage-steals',
  blocks: [
    { t: 'h', text: '20bb の BTN、どう返す？' },
    { t: 'play', title: 'リスチール', hero: 'BTN', heroCards: ['Ah', '9d'], villain: 'CO', steps: [
      { street: 'プリフロップ', pot: 4.7, say: '終盤、BBアンティ1bb。CO が 2.2bb でオープン。CO は終盤に広く開けるプレイヤーです。あなたは BTN で **20bb**。', q: 'A9o。どうする？', options: [
        { label: '3betオールイン', good: true, why: '広いオープンは降りる手が多く、コールされても A のぶん勝率が残ります。' },
        { label: 'コール', good: false, why: '20bb でコールすると、フロップ以降で主導権を握られます。' },
        { label: 'フォールド', good: false, why: '取りにいける大きなポットを見送ることになります。' }] },
      { street: 'プリフロップ', pot: 24.7, say: 'ブラインドは降り、CO もフォールド。4.7bb を獲得しました。' },
    ], outro: '後ろから広く開ける相手に、オールインで奪い返すのがリスチールです。' },
    { t: 'h', text: 'スチールとリスチール' },
    { t: 'p', text: '終盤はアンティで最初のポットが 2.5bb。BTN の 2.2bb オープンは、相手が約46.8%降りれば損益ゼロです。だから後ろの席は広く開けます。' },
    { t: 'list', items: ['CO・BTN・SB は 2〜2.2bb で広くオープン', '後ろが ICM を気にするミドルスタックなら、さらに広げる', '後ろに 15〜25bb でよく返してくる相手がいれば、広げすぎない'] },
    { t: 'p', text: 'リスチールに向くのは約15〜25bb。浅すぎると相手のコール価格が良くなり、深すぎると賭ける額が大きすぎます。' },
    { t: 'h', text: 'リスチールの損益' },
    { t: 'seats', seats: [{ pos: 'CO', action: 'オープン', bet: 2.2 }, { pos: 'BTN', hero: true, action: '3betオールイン', bet: 20 }, { pos: 'SB', folded: true }, { pos: 'BB', folded: true }], pot: 4.7, caption: '全員フォールドなら 4.7bb を獲得。コールされるとポットは 42.5bb。' },
    { t: 'tree', root: 'BTN 20bb 3betオールイン（COのフォールド率60%、コールされたときの勝率40%）', options: [{ label: 'フォールド', ev: 0 }, { label: '3betオールイン', outcomes: [{ label: 'COがフォールド', prob: 0.6, value: 4.7 }, { label: 'コールされて勝つ（0.4×40%）', prob: 0.16, value: 22.5 }, { label: 'コールされて負ける（0.4×60%）', prob: 0.24, value: -20 }], note: 'コールされたときだけなら約 -3bb' }], caption: '全体では約 +1.6bb。' },
    { t: 'estimate', q: '獲得ポット 4.7bb、20bb オールイン。コールされたら必ず負けるとして、損益ゼロになる CO のフォールド率は？', min: 0, max: 100, step: 5, unit: '%', answer: 81, tolerance: 12, explain: 'f × 4.7 − (1 − f) × 20 = 0 より f ≒ 0.81。実際はコールされても勝率があるので、もっと低くて済みます。' },
    { t: 'compare', left: { title: 'A9o：リスチール候補', cards: ['Ah', '9d'], verdict: 'good', points: ['コールされても勝率が残る', '強い Ax やハイペアに極端に負けにくい'] }, right: { title: '74s：向きにくい', cards: ['7h', '4h'], verdict: 'bad', points: ['コールされると大きく不利', '降ろす以外の利益が少ない'] }, caption: 'コールされたあとの勝率も考えて手を選ぶ。' },
    { t: 'quiz', q: 'BTN が 2bb でオープン。あなたは BB で 18bb。相手は終盤に広く開けるプレイヤーです。', hand: ['Ad', '8c'], options: ['コールしてフロップで判断する', '3betオールインを検討する', 'A8o は弱いので必ずフォールド', '4bb に小さく3betする'], answer: 1, explain: '18bb はリスチールに向いたスタックです。A8o はコールされても A のぶん勝率が残ります。' },
    { t: 'h', text: 'リスチールの手を選ぶ' },
    { t: 'rapid', q: '20bb。CO の広い 2.2bb オープンに、BTN から3betオールインする？（目安）', choices: ['オールイン', 'フォールド'], items: [
      { cards: ['As', 'Jd'], answer: 0 },
      { cards: ['7h', '4h'], answer: 1, why: 'コールされると大きく不利です。' },
      { cards: ['9c', '9h'], answer: 0 },
      { cards: ['Jd', '4c'], answer: 1 },
      { cards: ['Kh', 'Qh'], answer: 0 },
      { cards: ['5s', '3d'], answer: 1 },
      { cards: ['Ac', 'Td'], answer: 0, why: '広いオープンに対して Ax の上位は十分です。' },
      { cards: ['9d', '2s'], answer: 1 },
      { cards: ['8s', '8d'], answer: 0 },
      { cards: ['Qc', '5h'], answer: 1, why: '降ろす以外に勝ち筋が薄い手です。' },
    ] },
    { t: 'warn', text: 'UTG からタイトに開ける相手や、ICM の圧力が弱いビッグスタックはコールしやすいので注意します。' },
  ],
};

export default lesson;
