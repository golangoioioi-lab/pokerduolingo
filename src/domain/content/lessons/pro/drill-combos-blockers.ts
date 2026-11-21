import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'drill-combos-blockers',
  blocks: [
    { t: 'h', text: '自分の手札で相手の手が減る' },
    {
      t: 'rapid',
      q: 'あなたは A♠K♦。相手のこのハンドのコンボは減る？',
      choices: ['減る', '減らない'],
      items: [
        { text: 'AA', answer: 0, why: 'A が1枚使われて 6 → 3。' },
        { text: 'QQ', answer: 1, why: 'Q は持っていません。' },
        { text: 'AK', answer: 0, why: '16 → 9。' },
        { text: 'KQ', answer: 0, why: 'K が1枚使われて 16 → 12。' },
        { text: 'JJ', answer: 1, why: '減りません。' },
        { text: 'A5s', answer: 0, why: 'A♠5♠ が作れず 4 → 3。' },
        { text: 'QJ', answer: 1, why: '減りません。' },
      ],
    },
    { t: 'h', text: '手札もデッドカード' },
    { t: 'p', text: 'ボードと同じく、自分の手札も相手は持てません。これが**ブロッカー**です。ランクごとに「残り何枚か」で数えます。' },
    {
      t: 'list',
      items: [
        'ペア：残り4枚 → 6、3枚 → 3、2枚 → 1',
        'ペアでない手：ランクAの残り × ランクBの残り',
      ],
    },
    {
      t: 'combos',
      groups: [
        { label: 'AA', hands: ['AA'] },
        { label: 'KK', hands: ['KK'] },
        { label: 'AK', hands: ['AK'] },
      ],
      dead: ['As', 'Kd'],
      caption: 'A♠K♦ を持つと：AA 3、KK 3、AK 9。28コンボが15コンボに減ります。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'KK（セット）', hands: ['KK'] },
        { label: 'AK', hands: ['AK'] },
        { label: 'K8（ツーペア）', hands: ['K8'] },
      ],
      dead: ['Kh', '8d', '3c', 'Kc', 'Jd'],
      caption: 'ボード K♥8♦3♣ で K♣J♦ を持つと：KK 1、AK 8、K8 6。',
    },
    { t: 'h', text: '練習問題' },
    {
      t: 'estimate',
      q: 'あなたは A♠K♦。相手のAKは何コンボ？',
      hand: ['As', 'Kd'],
      min: 0, max: 20, step: 1, unit: 'コンボ', answer: 9, tolerance: 0.5,
      explain: 'A 3枚 × K 3枚 = 9コンボ。片方だけ持つと12です。',
    },
    {
      t: 'quiz',
      q: 'あなたは Q♠Q♥。相手のレンジが QQ+ と AK のとき、合計何コンボ？',
      options: ['29', '34', '28', '23'],
      answer: 0,
      hand: ['Qs', 'Qh'],
      explain: 'AA 6 + KK 6 + QQ 1（Q♦Q♣ のみ）+ AK 16 = 29。何も持たないときは34です。',
    },
    {
      t: 'estimate',
      q: 'あなたは A♠K♦。相手のレンジが AA・KK・QQ・AK のとき、合計何コンボ？',
      hand: ['As', 'Kd'],
      min: 0, max: 40, step: 1, unit: 'コンボ', answer: 21, tolerance: 2,
      explain: 'AA 3 + KK 3 + QQ 6 + AK 9 = 21。何もないときの34から約4割減ります。',
    },
    {
      t: 'estimate',
      q: 'あなたは K♣J♦。相手の「KKとAK」は合計何コンボ？（Kを持っていなければ15コンボ）',
      hand: ['Kc', 'Jd'],
      board: ['Kh', '8d', '3c'],
      min: 0, max: 20, step: 1, unit: 'コンボ', answer: 9, tolerance: 1,
      explain: 'KK は K♠K♦ の1コンボ。AK は A 4枚 × K 2枚 = 8。合計9です。',
    },
    { t: 'h', text: 'もう一度：手札を変えて数える' },
    {
      t: 'rapid',
      q: 'あなたがこの手札のとき、相手の AA は何コンボ？',
      choices: ['3コンボ', '6コンボ'],
      items: [
        { cards: ['As', 'Kd'], answer: 0, why: 'A が1枚使われて3。' },
        { cards: ['Ks', 'Qd'], answer: 1, why: 'A を持っていないので6。' },
        { cards: ['Ac', '5c'], answer: 0, why: 'A を1枚持つので3。' },
        { cards: ['Qs', 'Qh'], answer: 1, why: '6のままです。' },
        { cards: ['Ad', 'Jd'], answer: 0, why: '3コンボ。' },
        { cards: ['Kh', 'Kc'], answer: 1, why: 'KK を持っても AA は減りません。' },
      ],
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'A を1枚持つと相手の AA は半分、AK は4分の3になります。この効果が 3bet やブラフ選びの根拠になります。',
    },
  ],
};

export default lesson;
