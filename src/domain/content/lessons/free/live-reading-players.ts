import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'live-reading-players',
  blocks: [
    { t: 'h', text: 'その情報、信じていい？' },
    { t: 'rapid', q: '相手を読むのに、この情報は？', choices: ['信頼しやすい', '信頼しにくい'], items: [
      { text: '手が震えている', answer: 1, why: '強い手でも弱い手でも、緊張すると震えます。' },
      { text: 'この1時間で半分のハンドに参加している', answer: 0 },
      { text: '目をそらした', answer: 1, why: 'どちらの意味にも取れるサインです。' },
      { text: 'ショーダウンで72oを見せた', answer: 0 },
      { text: '大きなレイズのとき、3回とも強い手だった', answer: 0 },
      { text: 'なんとなく強そうな雰囲気', answer: 1 },
      { text: '1回だけブラフを見た', answer: 1, why: '1回では偶然かもしれません。サンプルが小さすぎます。' },
    ] },
    { t: 'p', text: '表情や動作は、強いとも弱いとも取れます。信頼できるのは**実際のプレイの記録**です。' },
    { t: 'compare', left: { title: '信頼しにくい', points: ['手の震え、視線', 'チップの触り方', '雰囲気の印象'], verdict: 'bad' }, right: { title: '信頼しやすい', points: ['参加の頻度', '自分から賭けるか', 'ショーダウンで見せた手'], verdict: 'good' } },
    { t: 'h', text: '席ごとの傾向を覚える' },
    { t: 'p', text: '参加が多い人は弱い手も多く持ちます。参加が少ない人が動いたら、強い手が多いと考えます。' },
    { t: 'seats', seats: [{ pos: 'UTG', action: 'ほぼ毎回リンプ', bet: 1 }, { pos: 'HJ', action: 'ほとんど降りる', folded: true }, { pos: 'CO', action: '大きなレイズは強い手' }, { pos: 'BTN', hero: true, action: '観察して判断', cards: ['As', 'Jd'] }, { pos: 'SB', action: 'コール中心' }, { pos: 'BB', action: 'チェック', bet: 1 }], caption: '同じ卓でも、席ごとに傾向が違います。' },
    { t: 'estimate', q: '28ハンドのうち、ある相手が14ハンドに参加しました。参加率は何%？', min: 0, max: 100, step: 5, unit: '%', answer: 50, tolerance: 5, explain: '14 ÷ 28 ＝ 50%。かなりルーズです（多くの人は2〜3割が目安）。' },
    { t: 'quiz', q: '参加率50%の人が UTG からレイズしました。レンジはどう考える？', options: ['広い。弱い手も多く含む', '狭い。AA や KK だけ', '何も分からない', 'いつもブラフ'], answer: 0, explain: '参加が多い人は、前の席でも弱い手で入ってきます。' },
    { t: 'tip', text: 'メモを取らなくても、「参加が多い」「大きいレイズは強い」のような短い言葉で覚えておけば役に立ちます。' },
    { t: 'h', text: 'やってみよう：タイトな相手のレイズ' },
    { t: 'play', title: 'BTN で AJ', hero: 'BTN', heroCards: ['As', 'Jd'], villain: 'SB', steps: [
      { street: 'プリフロップ', pot: 1.5, say: 'CO まで全員フォールド。SB はこの1時間、ほとんど参加していない人です。', q: 'どうする？', options: [
        { label: '3bb にレイズ', good: true, why: 'AJ は BTN から十分オープンできます。' },
        { label: 'フォールド', good: false, why: 'BTN では強い部類です。' }] },
      { street: 'フロップ', board: ['Jc', '8s', '3d'], pot: 7, say: 'SB がコール、BB は降りました。SB はチェック。', q: 'トップペア。どうする？', options: [
        { label: '4bb ベット', good: true, why: '弱い J や8から払ってもらえます。' },
        { label: 'チェック', good: false, why: '価値を取る機会を逃します。' }] },
      { street: 'フロップ', pot: 25, say: 'SB が14bbにチェックレイズ。この人のレイズは、これまでいつも強い手でした。', q: 'どうする？', options: [
        { label: 'フォールドを考える', good: true, why: 'タイトな人のレイズは、セットやツーペアに偏ります。' },
        { label: 'オールイン', good: false, why: '負けている相手からしか払われません。' }] },
    ], outro: '見るのは表情ではなく、その人のプレイの記録です。普段降りる人の大きなレイズは、素直に強いと読みます。' },
  ],
};

export default lesson;
