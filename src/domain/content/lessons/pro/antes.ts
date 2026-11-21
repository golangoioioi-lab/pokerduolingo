import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'antes',
  blocks: [
    { t: 'h', text: 'アンティありの BTN' },
    { t: 'play', title: 'アンティありのスチール', hero: 'BTN', heroCards: ['Kd', '8c'], villain: 'BB', steps: [
      { street: 'プリフロップ', pot: 2.5, say: '500/1,000、BBアンティ1,000。あなたは BTN で 25bb。CO までフォールド。', q: 'K8o。どうする？', options: [
        { label: '2.2bb オープン', good: true, why: 'アンティでポットが大きく、BTN の K8o は十分オープンできます。' },
        { label: 'フォールド', good: false, why: '誰のものでもない 2.5bb を取りにいく価値があります。' },
        { label: 'リンプ', good: false, why: '降ろす力がなく、BB に安く参加されます。' }] },
      { street: 'プリフロップ', pot: 4.7, say: 'SB と BB はフォールド。2.5bb を獲得しました。' },
    ], outro: 'アンティがあると、全員が降りたときに取れる額が増えます。' },
    { t: 'p', text: 'よく使われるのは、BB の人が全員分をまとめて払う「BBアンティ」（多くは1bb）です。' },
    { t: 'compare', left: { title: 'アンティなし', verdict: 'neutral', points: ['最初のポットは 1.5bb', 'SB 0.5 + BB 1'] }, right: { title: 'BBアンティ 1bb', verdict: 'good', points: ['最初のポットは 2.5bb', 'SB 0.5 + BB 1 + アンティ 1', '約1.7倍'] }, caption: '取りにいく価値が上がるので、オープンもディフェンスも広くなる。' },
    { t: 'h', text: 'スチールの損益分岐' },
    { t: 'formula', text: '必要なフォールド率 = リスク ÷（リスク + 獲得できるポット）' },
    { t: 'tree', root: 'BTN 2.2bb スチール（相手が50%降りると仮定、フロップ以降は考えない）', options: [{ label: 'アンティなし', outcomes: [{ label: '全員フォールド', prob: 0.5, value: 1.5 }, { label: 'コールされる', prob: 0.5, value: -2.2 }], note: '損益分岐は約59.5%のフォールド' }, { label: 'BBアンティ 1bb', outcomes: [{ label: '全員フォールド', prob: 0.5, value: 2.5 }, { label: 'コールされる', prob: 0.5, value: -2.2 }], note: '損益分岐は約46.8%のフォールド' }], caption: '相手が半分降りるなら、アンティがあるときだけプラスになる。' },
    { t: 'estimate', q: 'BBアンティ 1bb。SB まで全員フォールドし、SB が 3bb にオープン（払い済みの 0.5bb を含む）。損益ゼロになる BB のフォールド率は？', min: 0, max: 100, step: 5, unit: '%', answer: 50, tolerance: 10, explain: '追加のリスクは 2.5bb、獲得できるポットは 2.5bb。2.5 ÷ (2.5 + 2.5) = 50% です。' },
    { t: 'h', text: 'BB のディフェンスも広がる' },
    { t: 'compare', left: { title: 'アンティなし', verdict: 'neutral', points: ['コール前のポット 4.0bb', 'コール額 1.5bb', '必要な勝率 27.3%'] }, right: { title: 'BBアンティ 1bb', verdict: 'good', points: ['コール前のポット 5.0bb', 'コール額 1.5bb', '必要な勝率 23.1%'] }, caption: 'BTN の 2.5bb オープンに対する BB のコール。' },
    { t: 'p', text: 'BB は安くコールできるので、より多くの手で守ります。オープン側はサイズを 2〜2.2bb に下げることが多くなります。' },
    { t: 'estimate', q: 'BBアンティ 1bb。BTN が 2bb にオープンし、SB はフォールド。BB のコールに必要な勝率は？', min: 0, max: 50, step: 1, unit: '%', answer: 18, tolerance: 4, explain: 'コール前のポットは 4.5bb、追加で払うのは 1bb。1 ÷ 5.5 ≒ 18.2% です。' },
    { t: 'h', text: 'まとめて判定' },
    { t: 'rapid', q: 'アンティの有無で比べると、この範囲は広い？ 狭い？', choices: ['広い', '狭い'], items: [
      { text: 'アンティあり：BTN のオープン', answer: 0 },
      { text: 'アンティなし：BTN のオープン', answer: 1, why: '取れるポットが 1.5bb と小さいので狭めます。' },
      { text: 'アンティあり：BB のディフェンス', answer: 0, why: 'コールの価格が良くなります。' },
      { text: 'アンティなし：10bb のオールイン', answer: 1, why: '降ろして取れるポットが小さくなります。' },
      { text: 'アンティあり：SB のスチール', answer: 0 },
      { text: 'アンティなし：BB のディフェンス', answer: 1 },
    ] },
  ],
};

export default lesson;
