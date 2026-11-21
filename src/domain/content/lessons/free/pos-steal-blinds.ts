import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pos-steal-blinds',
  blocks: [
    { t: 'h', text: 'ブラインドを取りに行く' },
    { t: 'play', title: 'BTN で K8s', hero: 'BTN', heroCards: ['Kh', '8h'], villain: 'BB', steps: [
      { street: 'プリフロップ', pot: 1.5, say: 'CO までフォールド。あなたは BTN で **K♥8♥**。ブラインドの2人はよく降りるタイプです。', q: 'どうする？', options: [
        { label: '2.5bb オープン', good: true, why: 'K8s は BTN のレンジに入り、ブラインドが降りやすいなら利益が増えます。' },
        { label: 'フォールド', good: false, why: '後ろは2人だけ。開けない理由はありません。' },
        { label: 'リンプ', good: false, why: 'リンプでは相手を降ろせません。' },
      ] },
      { street: 'プリフロップ', pot: 4, say: 'SB も BB もフォールド。あなたは 1.5bb を獲得しました。' },
    ], outro: 'このように、後ろの席から広めにオープンしてブラインドを取る戦略を **ブラインドスチール** と言います。' },
    { t: 'seats', seats: [
      { pos: 'UTG', action: 'フォールド', folded: true },
      { pos: 'HJ', action: 'フォールド', folded: true },
      { pos: 'CO', action: 'フォールド', folded: true },
      { pos: 'BTN', hero: true, action: 'オープン 2.5bb', bet: 2.5, cards: ['Kh', '8h'] },
      { pos: 'SB', action: '未行動', bet: 0.5 },
      { pos: 'BB', action: '未行動', bet: 1 },
    ], pot: 4, caption: '取りに行くのはブラインドの 1.5bb です。' },
    { t: 'h', text: '損益分岐' },
    { t: 'formula', text: '必要なフォールド率 = 2.5 ÷ (2.5 + 1.5) = 62.5%', note: 'コールされたら 2.5bb を失うと仮定した単純計算。2bb オープンなら 2 ÷ 3.5 ≈ 57%' },
    { t: 'tree', root: 'BTN で K8s を 2.5bb オープン。ブラインドが60%フォールドと仮定', options: [
      { label: 'オープンする', outcomes: [{ label: '2人ともフォールド', prob: 0.6, value: 1.5 }, { label: 'コールされる（平均損益）', prob: 0.4, value: -1 }], note: 'コールされたあとの平均損益を -1bb と仮定' },
      { label: 'フォールド', ev: 0 },
    ], caption: 'コールされても位置とエクイティがあるので、62.5%より低いフォールド率でも利益が出ます。' },
    { t: 'estimate', q: 'オープンサイズを 2bb に下げると、必要なフォールド率は？', min: 0, max: 100, step: 1, unit: '%', answer: 57, tolerance: 6, explain: '2 ÷（2 + 1.5）≈ 57%です。サイズを小さくするほど、必要なフォールド率は下がります。' },
    { t: 'h', text: '相手を選ぶ' },
    { t: 'p', text: 'よく降りるブラインドには広く、よく 3bet してくるブラインドには絞ります。' },
    { t: 'range', spot: 'rfi-btn', caption: 'BTN のスチールを含むオープンレンジ。' },
    { t: 'quiz', q: 'ブラインドスチールを広げてよいのは？', options: ['ブラインドがよくフォールドする相手のとき', '相手がよく 3bet するとき', 'どんな相手でも同じ', 'ブラインドが広く守るとき'], answer: 0, explain: 'ブラインドがフォールドしやすいほど、スチールの利益が大きくなります。' },
    { t: 'rapid', q: 'BTN のスチールを広げる？絞る？', choices: ['広げる', '絞る'], items: [
      { text: 'BB はタイトで、ほとんど守らない', answer: 0 },
      { text: 'BB がよく 3bet してくる', answer: 1, why: '3bet されると、弱い手は降りるしかありません。' },
      { text: 'SB も BB もすぐ降りる', answer: 0 },
      { text: 'BB が広く守り、フロップでよくチェックレイズする', answer: 1, why: 'コール後に戦いにくくなるので、弱い手を減らします。' },
      { text: 'SB がよく 3bet してくる', answer: 1 },
      { text: 'ブラインドが2人ともフォールド多めの新しい客', answer: 0 },
    ] },
  ],
};

export default lesson;
