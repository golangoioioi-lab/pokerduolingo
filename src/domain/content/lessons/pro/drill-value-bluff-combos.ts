import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'drill-value-bluff-combos',
  blocks: [
    { t: 'h', text: 'ブラフにだけ勝てる手でコールするか' },
    {
      t: 'rapid',
      q: 'あなたはブラフにだけ勝てる手。相手のコンボ数とサイズはこう。コールする？',
      choices: ['コール', 'フォールド'],
      items: [
        { text: 'バリュー18・ブラフ8・ハーフポット', answer: 0, why: '勝率 8 ÷ 26 ≈ 31% > 必要25%。' },
        { text: 'バリュー18・ブラフ12・ポットベット', answer: 0, why: '12 ÷ 30 = 40% > 33%。' },
        { text: 'バリュー20・ブラフ4・ハーフポット', answer: 1, why: '4 ÷ 24 ≈ 17% < 25%。' },
        { text: 'バリュー10・ブラフ10・2倍ポット', answer: 0, why: '50% > 40%。' },
        { text: 'バリュー24・ブラフ6・ポットベット', answer: 1, why: '6 ÷ 30 = 20% < 33%。' },
        { text: 'バリュー30・ブラフ5・1/3ポット', answer: 1, why: '5 ÷ 35 ≈ 14% < 20%。' },
      ],
    },
    { t: 'h', text: '3ステップ' },
    {
      t: 'list',
      ordered: true,
      items: [
        '相手のバリューとブラフのコンボを数える（ボードと自分の手札を除く）',
        '勝率 = ブラフ ÷（バリュー + ブラフ）',
        '必要勝率と比べ、上回ればコール',
      ],
    },
    {
      t: 'p',
      text: '例：ボード K♠T♦4♥7♣2♠、あなたは A♥A♦。相手は3回ベットしてリバーでポットサイズ。バリューを KT・TT・44・77、ブラフを外れた QJs・J9s と読みます。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'バリュー（KT・TT・44・77）', hands: ['KT', 'TT', '44', '77'] },
        { label: 'ブラフ（QJs・J9s）', hands: ['QJs', 'J9s'] },
      ],
      dead: ['Ks', 'Td', '4h', '7c', '2s', 'Ah', 'Ad'],
      caption: 'バリュー18（KT 9 + TT 3 + 44 3 + 77 3）、ブラフ8。',
    },
    {
      t: 'odds',
      pot: 100,
      bet: 100,
      equity: 30.8,
      caption: '勝率は 8 ÷ 26 ≈ 31%。ポットサイズには約33%必要なので、わずかに足りません。',
    },
    { t: 'h', text: '練習問題' },
    {
      t: 'estimate',
      q: 'バリュー18コンボ・ブラフ8コンボ。あなたのブラフキャッチャー（AA）の勝率は？',
      hand: ['Ah', 'Ad'],
      board: ['Ks', 'Td', '4h', '7c', '2s'],
      min: 0, max: 100, step: 1, unit: '%', answer: 31, tolerance: 3,
      explain: '8 ÷ 26 ≈ 31%。44%は 8 ÷ 18 で、分母を間違えています。',
    },
    {
      t: 'estimate',
      q: '相手がブラフに Q9s（4コンボ）も使うと読めたとき、勝率は？',
      hand: ['Ah', 'Ad'],
      board: ['Ks', 'Td', '4h', '7c', '2s'],
      min: 0, max: 100, step: 1, unit: '%', answer: 40, tolerance: 3,
      explain: '12 ÷ 30 = 40%。33%を超えるのでコールに変わります。4コンボの読みで判断が逆になります。',
    },
    {
      t: 'estimate',
      q: 'あなたの手が J♥J♣ だったら、相手のブラフ（QJs・J9s）は何コンボになる？',
      hand: ['Jh', 'Jc'],
      board: ['Ks', 'Td', '4h', '7c', '2s'],
      min: 0, max: 10, step: 1, unit: 'コンボ', answer: 4, tolerance: 0.5,
      explain: 'ハートとクラブの組が消えて、それぞれ2コンボ。合計4。勝率は 4 ÷ 22 ≈ 18% まで下がります。',
    },
    {
      t: 'estimate',
      q: '相手がバリュー18コンボでリバーにポットサイズを賭けるとき、理論上ちょうどよいブラフの数は？',
      min: 0, max: 30, step: 1, unit: 'コンボ', answer: 9, tolerance: 1,
      explain: 'ポットサイズならブラフはレンジの3分の1（バリュー2 : ブラフ1）。18 ÷ 2 = 9コンボです。',
    },
    { t: 'h', text: 'もう一度：ブラフをブロックしていないか' },
    {
      t: 'rapid',
      q: 'ボード K♠T♦4♥7♣2♠。相手のブラフは QJs・J9s。この手はブラフキャッチャーに向いている？',
      choices: ['向いている', '向いていない'],
      items: [
        { cards: ['Ah', 'Ad'], board: ['Ks', 'Td', '4h', '7c', '2s'], answer: 0, why: 'ブラフを1つも減らしません。' },
        { cards: ['Jh', 'Jc'], board: ['Ks', 'Td', '4h', '7c', '2s'], answer: 1, why: 'J を2枚持ち、ブラフが半分に減ります。' },
        { cards: ['Ah', 'Kh'], board: ['Ks', 'Td', '4h', '7c', '2s'], answer: 0, why: 'ブラフを減らさず、むしろバリューの KT を減らします。' },
        { cards: ['Qh', 'Qc'], board: ['Ks', 'Td', '4h', '7c', '2s'], answer: 1, why: 'QJs のブラフを減らします。' },
        { cards: ['9h', '9c'], board: ['Ks', 'Td', '4h', '7c', '2s'], answer: 1, why: 'J9s のブラフを減らします。' },
        { cards: ['Ac', '3c'], board: ['Ks', 'Td', '4h', '7c', '2s'], answer: 0, why: 'A ハイでブラフには勝ち、ブラフも減らしません。' },
      ],
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: '「ブラフ ÷ 全体」と必要勝率を比べます。ブラフを減らす手より、バリューを減らす手がブラフキャッチャーに向いています。',
    },
  ],
};

export default lesson;
