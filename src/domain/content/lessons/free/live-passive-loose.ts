import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'live-passive-loose',
  blocks: [
    { t: 'h', text: 'コールステーションに打つ？' },
    { t: 'rapid', q: '何でもコールしてくる相手（コールステーション）に、あなたから打つ？', choices: ['ベット', 'チェック'], items: [
      { cards: ['Jd', '9h'], board: ['Jc', '8s', '3d'], answer: 0, why: 'キッカーが弱くても、もっと弱い手が払ってくれます。' },
      { cards: ['Kh', 'Qh'], board: ['9s', '5d', '2c'], answer: 1, why: '何もない手のブラフは、降りない相手には通りません。' },
      { cards: ['Ac', 'Kd'], board: ['Kh', '7c', '2s'], answer: 0 },
      { cards: ['6h', '5h'], board: ['Ks', 'Qd', '8c'], answer: 1, why: 'ブラフは打ちません。' },
      { cards: ['Th', '9h'], board: ['9s', '6d', '2c'], answer: 0, why: 'トップペアは薄くても価値があります。' },
      { cards: ['Qc', 'Jc'], board: ['Ah', '8d', '3s'], answer: 1 },
      { cards: ['8s', '8c'], board: ['Th', '5d', '2c'], answer: 0, why: 'もっと弱いペアや A ハイが付いてきます。' },
      { cards: ['Ad', 'Qs'], board: ['Kc', 'Jh', '4d'], answer: 1, why: 'まだペアもなく、ブラフは通りません。' },
    ] },
    { t: 'h', text: 'ブラフは減らす' },
    { t: 'p', text: 'ポット10bbに6bbのブラフなら、37.5%以上降りてもらう必要があります。コールステーションはそこまで降りません。' },
    { t: 'tree', root: 'ポット10bb。何もない手で6bbのブラフ', options: [{ label: '普通の相手（60%降りる）', outcomes: [{ label: 'フォールド', prob: 0.6, value: 10 }, { label: 'コール', prob: 0.4, value: -6 }] }, { label: 'コールステーション（20%降りる）', outcomes: [{ label: 'フォールド', prob: 0.2, value: 10 }, { label: 'コール', prob: 0.8, value: -6 }] }], caption: '＋3.6bb と −2.8bb。ブラフは相手を選びます。' },
    { t: 'estimate', q: 'ポット10bbに6bbのブラフ。損益分岐のフォールド率は？', min: 0, max: 100, step: 1, unit: '%', answer: 37.5, tolerance: 5, explain: '6 ÷（10 ＋ 6）＝ 37.5% です。' },
    { t: 'h', text: '薄いバリューを重ねる' },
    { t: 'p', text: '弱い手でも払ってくれるので、トップペアやセカンドペアでも積極的に打ちます。サイズも大きめで構いません。' },
    { t: 'equity', players: [{ label: 'あなた（AJ）', cards: ['As', 'Jd'], pct: 85 }, { label: '相手（J4）', cards: ['Jh', '4h'], pct: 15 }], board: ['Jc', '8s', '3d'], caption: '目安の数字。キッカーの差だけで大きく勝っています。' },
    { t: 'quiz', q: 'コールステーションにバリューベットするなら、サイズは？', options: ['大きめ（ポットの60〜75%）', 'とても小さく（10%）', 'いつもオールイン', 'サイズは関係ない'], answer: 0, explain: 'どうせコールしてくれる相手なので、強い手では大きめに取ります。' },
    { t: 'p', text: '一方で、**受け身の相手のレイズは強い**と考えます。ブラフをしないタイプだからです。' },
    { t: 'h', text: 'やってみよう：受け身の相手と1ハンド' },
    { t: 'play', title: 'CO で AJ、BB はコールステーション', hero: 'CO', heroCards: ['Ah', 'Jd'], villain: 'BB', steps: [
      { street: 'プリフロップ', pot: 1.5, say: 'UTG と HJ がフォールド。あなたは CO で **A♥J♦**。', q: 'どうする？', options: [
        { label: '3bb にレイズ', good: true, why: 'AJ は CO から十分オープンできます。' },
        { label: 'フォールド', good: false, why: '強い部類の手です。' }] },
      { street: 'フロップ', board: ['Jc', '8s', '3d'], pot: 6.5, say: 'BB がコール。BB はチェック。', q: 'トップペア。どうする？', options: [
        { label: '4bb ベット', good: true, why: '弱い J や8が払ってくれます。' },
        { label: 'チェック', good: false, why: '払ってくれる相手に打たないのは損です。' }] },
      { street: 'ターン', board: ['5h'], pot: 14.5, say: 'BB がコール。ターンは**5**。BB はチェック。', q: 'どうする？', options: [
        { label: '9bb ベット', good: true, why: 'まだ弱い手からコールが来ます。' },
        { label: 'チェック', good: false, why: '薄いバリューを取り逃がします。' }] },
      { street: 'リバー', board: ['Kd'], pot: 32.5, say: 'BB がコール。リバーは**K**。BB がチェック。あなたが15bbベットすると、BB が45bbにレイズ。', q: 'どうする？', options: [
        { label: 'フォールド', good: true, why: '受け身の相手のレイズは、ツーペア以上に偏ります。' },
        { label: 'オールイン', good: false, why: '負けている相手からは払われません。' }] },
    ], outro: '受け身の相手には、打つときは薄くても打ち、レイズされたら素直に降ります。' },
  ],
};

export default lesson;
