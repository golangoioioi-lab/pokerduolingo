import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-q-j-high',
  blocks: [
    {
      t: 'p',
      text: 'QやJが最高カードのボードは、A-highやK-highより有利さが少し小さくなります。BBのKxやAxがボードを上回れるからです。数字は、BTN対BBのSRPを簡易レンジで計算した目安です。',
    },
    { t: 'h', text: '代表的なボード' },
    {
      t: 'table',
      head: ['ボード', 'BTNのエクイティ（目安）', '性質'],
      rows: [
        ['Q♥7♦2♣', '約52%', 'ドライ'],
        ['Q♣T♦6♥', '約53%', 'ブロードウェイが少しつながる'],
        ['Q♠J♦5♣', '約53%', 'QJが絡み、ストレートドローが出る'],
        ['J♥8♦3♣', '約52%', 'ドライ'],
      ],
    },
    { t: 'h', text: 'AxとKxの扱い' },
    {
      t: 'p',
      text: 'Q-highでは、AxやKxは「ボードに当たらなくてもオーバーカードがある」手です。BTNもBBも多く持つので、ブラフの土台はあります。ただしトップペアのQxは、BTNがやや多く持ちます。',
    },
    {
      t: 'compare',
      left: {
        title: 'Q♥7♦2♣',
        board: ['Qh', '7d', '2c'],
        points: ['BTNはQxとAK、QQが豊富', 'BBのQxは少なめ', '小さなベットを高頻度で'],
        verdict: 'good',
      },
      right: {
        title: 'Q♠J♦5♣',
        board: ['Qs', 'Jd', '5c'],
        points: ['QJ・KT・T9などドローが出る', 'BBにもJTsなどが残る', 'サイズとチェックを混ぜる'],
        verdict: 'neutral',
      },
      caption: 'つながりがあるほど、小さな優位は薄まる。',
    },
    {
      t: 'equity',
      players: [{ label: 'BTNレンジ', pct: 52 }, { label: 'BBレンジ', pct: 48 }],
      board: ['Qh', '7d', '2c'],
      caption: 'Q♥7♦2♣ のレンジ対レンジ（目安）。',
    },
    { t: 'h', text: 'ドライなQ・Jボードの基本' },
    {
      t: 'p',
      text: 'ドライなQ72やJ83では、BTNは小さなベットを高い頻度で打ちます。QJ5やKQJのようにつながるほど、BBのドローが増え、BTNは慎重になります。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'QQ', hands: ['QQ'] },
        { label: 'QJ/QT', hands: ['QJ', 'QT'] },
      ],
      dead: ['Qs', 'Jd', '5c'],
      caption: 'Q♠J♦5♣ 上のQQとQJ・QTのコンボ数。',
    },
    {
      t: 'estimate',
      q: 'このボードで、QJ（スーテッドとオフスート合計）は何通り？（16通りから減ります）',
      board: ['Qs', 'Jd', '5c'],
      min: 0,
      max: 16,
      step: 1,
      unit: '通り',
      answer: 9,
      tolerance: 3,
      explain: 'Qは残り3枚、Jも残り3枚なので 3 × 3 = 9 通りです。',
    },
    {
      t: 'quiz',
      q: 'このボードで、BTNが慎重になる理由は？',
      board: ['Qs', 'Jd', '5c'],
      options: ['ボードにAがあるから', 'BBが全員降りるから', 'ポットが小さいから', 'ストレートドローなどBBにも当たる手が増えるから'],
      answer: 3,
      explain: 'ブロードウェイがつながり、BBのドローやペアが増えます。',
    },
    {
      t: 'quiz',
      q: 'このボードで、BTNに向く基本のCベットは？',
      board: ['Jh', '8d', '3c'],
      options: ['常にオールイン', '小さなベットを高頻度', '常にチェック', 'ポットの2倍'],
      answer: 1,
      explain: '小さな優位があるので、小さなサイズで広く打つのが基本です。',
    },
    {
      t: 'quiz',
      q: 'Q-highやJ-highのボードで、A-high・K-highより優位が小さい理由は？',
      options: ['QやJが弱いから', 'BBのAxやKxがボードを上回れるから', 'ボードが3枚だから', '位置が違うから'],
      answer: 1,
      explain: 'Q・Jの上にオーバーカードが多く、BBの広いレンジにも当たりやすいためです。',
    },
  ],
};

export default lesson;
