import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pf-cards',
  blocks: [
    { t: 'h', text: 'まずはタップしてみる' },
    { t: 'p', text: '自分だけの手札2枚と、全員で使う場の5枚。この7枚から一番強い5枚を作った人が勝ちです。' },
    {
      t: 'showdown',
      q: '勝つのはどっち？ 直感でタップしてください。',
      board: ['Kd', '9s', '4c', '2s', '7h'],
      players: [{ label: 'あなた', cards: ['Kh', 'Kc'] }, { label: '相手', cards: ['Qh', 'Jd'] }],
      explain: 'あなたは K が3枚（スリーカード）。相手は何もそろっていません。',
    },
    {
      t: 'pick5',
      q: 'ハートが5枚あります。一番強い5枚をタップ。',
      hand: ['Ah', 'Kh'],
      board: ['Qh', '7h', '2h', '9c', '4d'],
      explain: '同じマークが5枚で**フラッシュ**です。',
    },
    { t: 'h', text: '役の順番' },
    { t: 'p', text: '役には強さの順番があります。上にあるほど出にくく、強い役です。' },
    {
      t: 'list',
      ordered: true,
      items: ['ロイヤルフラッシュ', 'ストレートフラッシュ', 'フォーカード（同じ数字4枚）', 'フルハウス（3枚＋2枚）', 'フラッシュ（同じマーク5枚）', 'ストレート（数字が5つ連続）', 'スリーカード（同じ数字3枚）', 'ツーペア', 'ワンペア', 'ハイカード（役なし）'],
    },
    {
      t: 'order',
      q: '強い順にタップしてください。',
      hands: [
        { label: 'ワンペア', cards: ['9s', '9d', 'Kc', '5h', '2d'] },
        { label: 'スリーカード', cards: ['7c', '7d', '7h', 'Ks', '3c'] },
        { label: 'フラッシュ', cards: ['As', 'Js', '8s', '6s', '3s'] },
        { label: 'フルハウス', cards: ['Qh', 'Qd', 'Qc', '4s', '4h'] },
      ],
      explain: 'フルハウス → フラッシュ → スリーカード → ワンペアの順です。',
    },
    {
      t: 'rapid',
      q: 'フラッシュ（同じマーク5枚）はできている？',
      choices: ['できている', 'できていない'],
      items: [
        { cards: ['Ah', '5h'], board: ['Kh', '9h', '2h', 'Jc', '3d'], answer: 0 },
        { cards: ['As', 'Kd'], board: ['Qs', '8s', '3s', '2h', '7c'], answer: 1, why: 'スペードは4枚。1枚足りません。' },
        { cards: ['7c', '6c'], board: ['Ac', 'Tc', '2c', 'Kd', 'Kh'], answer: 0 },
        { cards: ['Jd', 'Td'], board: ['9d', '8h', '7d', '2s', '3c'], answer: 1, why: 'ダイヤは4枚。こちらは数字が続く**ストレート**です。' },
        { cards: ['Qs', '2s'], board: ['Ks', '9s', '4s', '4d', 'Jh'], answer: 0 },
        { cards: ['Ac', 'Ad'], board: ['Ah', 'Kh', '7h', '3s', '2h'], answer: 1, why: 'ハートは4枚。A が3枚でスリーカードです。' },
      ],
    },
    {
      t: 'showdown',
      q: '3人で勝負。勝つのは誰？',
      board: ['Js', 'Td', '6c', '3h', '2s'],
      players: [{ label: 'あなた', cards: ['Jh', '4c'] }, { label: '相手A', cards: ['6d', '6h'] }, { label: '相手B', cards: ['Ac', 'Kc'] }],
      explain: '相手A は 6 が3枚でスリーカード。あなたの J のワンペアより強い役です。',
    },
    { t: 'tip', title: '7枚から5枚', text: '手札を2枚とも使わなくてもかまいません。7枚の中から一番強い5枚を選ぶ、とだけ覚えておけば十分です。' },
  ],
};

export default lesson;
