import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'live-larger-sizings',
  blocks: [
    { t: 'h', text: '大きく？ 小さく？' },
    { t: 'rapid', q: 'この卓で、強い手のサイズは？', choices: ['大きめ', '小さめ'], items: [
      { text: '全員がよくコールしてくる', answer: 0 },
      { text: 'リンパーが3人いる', answer: 0, why: 'リンパー1人につき1bbほど足します。' },
      { text: 'タイトな上級者ばかりで、よく降りる', answer: 1, why: '降りる相手には、大きくしても払われません。' },
      { text: '弱いペアやドローでもコールしてくる', answer: 0 },
      { text: 'ブラインドがほとんど守らない', answer: 1 },
      { text: '2.5bb のオープンにブラインド全員が付いてくる', answer: 0 },
    ] },
    { t: 'p', text: 'ライブの相手は安くコールしたがります。サイズを上げて、強い手で稼ぎ、弱い手の参加コストを上げます。' },
    { t: 'h', text: 'プリフロップの目安' },
    { t: 'formula', text: 'オープン ＝ 4bb ＋ 1bb × リンパー数', note: 'リンパーがいなければ3〜5bb。卓の様子で調整します。' },
    { t: 'seats', seats: [{ pos: 'UTG', action: 'リンプ 1bb', bet: 1 }, { pos: 'HJ', action: 'リンプ 1bb', bet: 1 }, { pos: 'CO', action: 'フォールド', folded: true }, { pos: 'BTN', hero: true, action: '6bb にレイズ', bet: 6, cards: ['Ac', 'Qd'] }, { pos: 'SB', bet: 0.5 }, { pos: 'BB', bet: 1 }], pot: 9.5, caption: 'リンパー2人：4 ＋ 1 × 2 ＝ 6bb（$1/$2 なら$12）。' },
    { t: 'estimate', q: 'リンパー2人。BTN でこの手をレイズします。目安は何bb？', min: 0, max: 15, step: 1, unit: 'bb', answer: 6, tolerance: 1, explain: '4 ＋ 1 × 2 ＝ 6bb です。', hand: ['Ac', 'Qd'] },
    { t: 'h', text: 'SPR が下がる' },
    { t: 'pot', steps: [{ label: '2.5bb オープン→BB コール', pot: 5.5, stack: 97.5 }, { label: '5bb オープン→BB コール', pot: 10.5, stack: 95 }], caption: 'SPR は約18と約9。大きいオープンは、強いペアで最後まで戦いやすくします。' },
    { t: 'estimate', q: 'ポット10.5bb、残りスタック95bb。SPR は約いくつ？', min: 0, max: 30, step: 1, answer: 9, tolerance: 2, explain: '95 ÷ 10.5 ≈ 9 です。' },
    { t: 'p', text: 'フロップ以降もポットの50〜75%と大きめに打ちます。ブラフは減らします。' },
    { t: 'odds', pot: 10, bet: 5, equity: 35, caption: '半ポットなら必要勝率は25%。この値段なら、弱い手でもよく付いてきます。' },
    { t: 'h', text: 'やってみよう：リンパーを相手に' },
    { t: 'play', title: 'BTN で AQ、リンパー2人', hero: 'BTN', heroCards: ['Ac', 'Qd'], villain: 'UTG', villainCards: ['Qs', 'Jh'], steps: [
      { street: 'プリフロップ', pot: 3.5, say: 'UTG と HJ がリンプ。あなたは BTN で **A♣Q♦**。', q: 'どうする？', options: [
        { label: '6bb にレイズ', good: true, why: 'リンパー2人分を足したサイズです。' },
        { label: '2.5bb にレイズ', good: false, why: '安すぎて、全員が付いてきます。' },
        { label: 'リンプ', good: false, why: '強い手でポットを大きくする機会を逃します。' }] },
      { street: 'フロップ', board: ['Qc', '8d', '4s'], pot: 14.5, say: 'UTG だけがコール。HJ とブラインドは降りました。UTG はチェック。', q: 'トップペア。サイズは？', options: [
        { label: '10bb（約70%）', good: true, why: 'Q の弱いキッカーや8から、大きく取れます。' },
        { label: '3bb（約20%）', good: false, why: 'ドローに安く見せ、稼ぎも小さくなります。' }] },
      { street: 'ターン', board: ['2h'], pot: 34.5, say: 'UTG がコール。ターンは**2**。UTG はチェック。', q: 'どうする？', options: [
        { label: '22bb ほどベット', good: true, why: 'コールしたがる相手には、続けてバリューを取ります。' },
        { label: 'チェック', good: false, why: '払ってくれる相手に、稼ぐ機会を逃します。' }] },
      { street: 'リバー', board: ['9c'], pot: 78.5, say: 'UTG がコール。リバーは**9**。UTG はチェック。あなたもチェック。' },
    ], outro: 'コールの多い卓では、強い手のサイズを上げます。それだけで1ハンドの稼ぎが大きく変わります。' },
  ],
};

export default lesson;
