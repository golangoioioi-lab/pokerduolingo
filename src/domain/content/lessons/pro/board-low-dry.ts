import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-low-dry',
  blocks: [
    {
      t: 'p',
      text: '最高カードがT以下のドライなボードは、レイザーの優位が小さくなります。BTNのオーバーペアは強い一方、BBのペアやツーペアも増えるからです。数字は、BTN対BBのSRPを簡易レンジで計算した目安です。',
    },
    { t: 'h', text: '代表的なボード' },
    {
      t: 'table',
      head: ['ボード', 'BTNのエクイティ（目安）', '性質'],
      rows: [
        ['T♦6♣2♠', '約52%', 'ドライ'],
        ['9♠7♦2♣', '約52%', 'ドライ'],
        ['8♥6♦2♣', '約51%', 'ドライ、やや低い'],
      ],
    },
    { t: 'h', text: 'レイザーの強みとBBの強み' },
    {
      t: 'p',
      text: 'BTNは TT+、AK、AQ などのオーバーペアやオーバーカードで有利です。BBは 98s、87s、T9s などのコネクターを広く持ち、低いペアやツーペアにも当たります。',
    },
    {
      t: 'compare',
      left: { title: 'BTNの強み', points: ['TT〜AAのオーバーペア', 'AKなどのオーバーカード', '位置の優位'], verdict: 'good' },
      right: { title: 'BBの強み', points: ['低いペアとツーペア', '98sなどのスーテッドコネクター', '守る手の幅が広い'], verdict: 'neutral' },
      caption: 'エクイティ差は小さく、ベット頻度は下がる。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'オーバーペア', hands: ['AA', 'KK', 'QQ', 'JJ', 'TT'] },
        { label: '9x・7x', hands: ['98s', '97s', '76s', '65s'] },
      ],
      dead: ['9s', '7d', '2c'],
      caption: '9♠7♦2♣ 上。BTNはAA-TTのオーバーペア、BBは98s・97sなど。',
    },
    {
      t: 'equity',
      players: [{ label: 'BTNレンジ', pct: 52 }, { label: 'BBレンジ', pct: 48 }],
      board: ['9s', '7d', '2c'],
      caption: '9♠7♦2♣ のレンジ対レンジ（目安）。',
    },
    { t: 'h', text: '戦い方の目安' },
    {
      t: 'p',
      text: 'BTNは小さなベットを打ちますが、A-high・K-highより頻度は下がります。BBがチェックレイズしやすい手も増えるため、ブラフを減らし、チェックを混ぜます。',
    },
    {
      t: 'tip',
      title: '見るべきポイント',
      text: 'ボードが低いほど、レンジアドバンテージは「オーバーペアの数」に頼る形になります。ポケットペアが多い側が優位です。',
    },
    {
      t: 'quiz',
      q: 'このボードで、ボードより高い「オーバーペア」はどれ？',
      board: ['9s', '7d', '2c'],
      options: ['9♥8♥', '7♥6♥', 'Q♥Q♣', '6♣5♣'],
      optionCards: [['9h', '8h'], ['7h', '6h'], ['Qh', 'Qc'], ['6c', '5c']],
      answer: 2,
      explain: 'ポケットペアでボードのどの数字より高いのはQQだけです。他はトップペアやミドルペア、ドローです。',
    },
    {
      t: 'estimate',
      q: 'このボードで、AA・KK・QQ・JJ・TT（オーバーペア）は合計何通り？',
      board: ['9s', '7d', '2c'],
      min: 0,
      max: 60,
      step: 1,
      unit: '通り',
      answer: 30,
      tolerance: 6,
      explain: 'ボードにA〜Tは1枚もないので、各ペア6通り。5種類で 6 × 5 = 30 通りです。',
    },
    {
      t: 'quiz',
      q: 'ミドル〜ローのドライボードでBTNの優位が小さい主な理由は？',
      options: ['BBのペアやコネクターが当たりやすいから', 'BTNが弱くなるから', 'ボードが公平だから', 'BBが強くなるから'],
      answer: 0,
      explain: 'BBは広いレンジに低いペアやコネクターを含み、低いボードに当たりやすいためです。',
    },
    {
      t: 'quiz',
      q: 'このボードでのCベットは、A-highに比べて？',
      board: ['Td', '6c', '2s'],
      options: ['必ず増やす', '必ず全額', '変わらない', '頻度を下げ、チェックを混ぜる'],
      answer: 3,
      explain: 'レンジアドバンテージが小さいので、頻度を控えめにします。',
    },
  ],
};

export default lesson;
