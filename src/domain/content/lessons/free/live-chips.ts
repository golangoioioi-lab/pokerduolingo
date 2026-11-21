import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'live-chips',
  blocks: [
    { t: 'h', text: 'チップを数えてみる' },
    { t: 'table', head: ['色（例）', '額面（例）'], rows: [['白', '$1'], ['赤', '$5'], ['緑', '$25'], ['黒', '$100']] },
    { t: 'rapid', q: '上の額面で、この計算は正しい？', choices: ['正しい', 'まちがい'], items: [
      { text: '黒1枚＋緑2枚＝$150', answer: 0 },
      { text: '赤4枚＝$25', answer: 1, why: '5 × 4 ＝ $20 です。' },
      { text: '緑4枚＝$100', answer: 0 },
      { text: '黒1枚＝緑5枚', answer: 1, why: '黒1枚は緑4枚（$100）です。' },
      { text: '赤5枚＝緑1枚', answer: 0 },
      { text: '緑3枚＋赤2枚＝$85', answer: 0 },
      { text: '黒2枚＝$250', answer: 1, why: '100 × 2 ＝ $200 です。' },
    ] },
    { t: 'p', text: '色と額面はルームごとに違います。座ったら最初に確認します。画面に数字は出ないので、ポットやベット額は自分で把握します。' },
    { t: 'h', text: 'スタックを整える' },
    { t: 'p', text: '同じ額面を20枚ずつ柱にして積みます。持ち金がすぐ分かり、ベット額も伝わります。' },
    { t: 'compare', left: { title: '整ったスタック', points: ['額面ごとに同じ高さ', '合計がすぐ分かる', '他人にも額が伝わる'], verdict: 'good' }, right: { title: 'バラバラのスタック', points: ['数えるのに時間がかかる', 'ベット額を間違えやすい', 'トラブルの原因'], verdict: 'bad' } },
    { t: 'quiz', q: 'ライブで座ったら、最初に確認すべきことは？', options: ['チップの色と額面', 'ディーラーの名前', '隣の人の手札', '他の卓のレート'], answer: 0, explain: 'ルームごとに色と額面が違うためです。' },
    { t: 'h', text: 'ポットオッズはオンラインと同じ' },
    { t: 'p', text: 'ポットの額が分からなければ、自分の番にディーラーへ確認します。相手のスタック額を聞くのも自然です。' },
    { t: 'odds', pot: 24, bet: 12, equity: 35, caption: 'ポット$24に$12のベット。必要勝率は25%。リバーまで見られるフラッシュドローなら約35%（目安）です。' },
    { t: 'estimate', q: 'ポット$24に$12のベット。コールに必要な勝率は？', min: 0, max: 60, step: 1, unit: '%', answer: 25, tolerance: 3, explain: '12 ÷（24 ＋ 12 ＋ 12）＝ 25%です。', hand: ['Ah', '9h'], board: ['Kh', '7h', '2c'] },
    { t: 'h', text: 'やってみよう：額を追う' },
    { t: 'play', title: 'BTN で A9s（$1/$2）', hero: 'BTN', heroCards: ['Ah', '9h'], villain: 'CO', villainCards: ['Ks', 'Jd'], steps: [
      { street: 'プリフロップ', pot: 1.5, say: 'CO が赤2枚（$10 ＝ 5bb）でオープン。あなたは BTN で **A♥9♥**。', q: 'どうする？', options: [
        { label: 'コール', good: true, why: 'スーテッドの A をポジションありで見られます。' },
        { label: 'フォールド', good: false, why: '後ろの位置なら十分に続けられる手です。' }] },
      { street: 'フロップ', board: ['Kh', '7h', '2c'], pot: 11.5, say: 'ブラインドは降りました。CO が $12（6bb）をベット。', q: 'ナッツフラッシュドロー。どうする？', options: [
        { label: 'コール', good: true, why: '必要勝率は約26%。A を引いても勝てることがあり、続ける価値があります。' },
        { label: 'フォールド', good: false, why: '強いドローを安く捨てることになります。' }] },
      { street: 'ターン', board: ['4h'], pot: 23.5, say: 'ターンは**4♥**。フラッシュ完成。CO はチェック。', q: 'どうする？', options: [
        { label: '緑と赤で$30（15bb）を一度に出してベット', good: true, why: '額を声に出すか、チップを一度で出します。K の相手から払ってもらえます。' },
        { label: 'チェック', good: false, why: '一番強い役で、稼ぐ機会を逃します。' }] },
      { street: 'リバー', board: ['Qs'], pot: 53.5, say: 'CO がコール。リバーは**Q**。お互いチェック。' },
    ], outro: 'チップの額面が分かれば、ポットとオッズを自分で追えます。' },
  ],
};

export default lesson;
