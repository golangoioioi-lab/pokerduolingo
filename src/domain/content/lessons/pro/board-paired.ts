import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-paired',
  blocks: [
    { t: 'h', text: 'ペアボードで並べる' },
    {
      t: 'order',
      q: 'K♥5♦5♣ で強い順にタップ',
      board: ['Kh', '5d', '5c'],
      hands: [
        { label: '77', cards: ['7h', '7c'] },
        { label: 'A5s', cards: ['As', '5s'] },
        { label: 'KQ', cards: ['Kc', 'Qh'] },
        { label: 'KK', cards: ['Ks', 'Kd'] },
      ],
      explain: 'KKはフルハウス、A5はトリップス、KQはK・5のツーペア、77は7・5のツーペアです。5xを持つ組み合わせは少なく、強い手はまれです。',
    },
    { t: 'h', text: '強い役が出にくい' },
    {
      t: 'p',
      text: 'ペアボードではツーペアやセットが出にくく、レイザーのレンジ有利がそのまま通ります。K55なら、KxとオーバーペアをBTNが多く持ちます（BTN対BBのSRP、目安）。',
    },
    {
      t: 'combos',
      groups: [
        { label: '5x（トリップス）', hands: ['A5', 'K5', '65s', '54s'] },
        { label: 'ポケットペア', hands: ['AA', 'KK', 'QQ', 'JJ'] },
      ],
      dead: ['Kh', '5d', '5c'],
      caption: 'K♥5♦5♣ 上。5xは5が2枚消えて少ない。',
    },
    {
      t: 'equity',
      players: [{ label: 'BTNレンジ', pct: 54 }, { label: 'BBレンジ', pct: 46 }],
      board: ['Kh', '5d', '5c'],
      caption: 'K♥5♦5♣ のレンジ対レンジ（目安）。',
    },
    {
      t: 'estimate',
      q: 'このボードで、KKは何通り？（フルハウスになります）',
      board: ['Kh', '5d', '5c'],
      min: 0,
      max: 6,
      step: 1,
      unit: '通り',
      answer: 3,
      tolerance: 1,
      explain: 'K♥がボードにあるので残りのKは3枚。3通りしかありません。',
    },
    {
      t: 'compare',
      left: { title: '高いペアボード', board: ['Kh', '5d', '5c'], points: ['BTNのKxとオーバーペアが有利', '小さなベットを非常に高頻度'], verdict: 'good' },
      right: { title: '低いペアボード', board: ['7h', '7d', '2c'], points: ['BBの7xが増える', '差は小さく、頻度を落とす'], verdict: 'neutral' },
      caption: '高いペアボードのほうが、レイザーの優位が明確。',
    },
    {
      t: 'quiz',
      q: 'このボードで標準的なCベットは？',
      board: ['Kh', '5d', '5c'],
      options: ['全額ベット', 'ベットしない', 'チェックのみ', '小さなベットを非常に高い頻度で'],
      answer: 3,
      explain: 'BBのチェックレイズできる手がとても少ないので、安いサイズで広く打てます。',
    },
    { t: 'h', text: 'A-highで打ってみる' },
    {
      t: 'play',
      title: 'K♥5♦5♣ でAJ',
      hero: 'BTN',
      heroCards: ['Ad', 'Jd'],
      villain: 'BB',
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'BTNで **A♦J♦** を2.5bbオープン。BBがコールしました。' },
        {
          street: 'フロップ',
          board: ['Kh', '5d', '5c'],
          pot: 5.5,
          say: 'フロップは **K♥5♦5♣**。BBはチェック。',
          q: 'ペアなし。どうする？',
          options: [
            { label: '1.5bbベット', good: true, why: 'BBに強い手が少ないボード。安いサイズで弱い手を降ろせます。' },
            { label: 'チェック', good: false, why: 'チェックも少し混ぜますが、ここはレンジ全体で打ちやすいボードです。' },
          ],
        },
        {
          street: 'ターン',
          board: ['8c'],
          pot: 8.5,
          say: 'BBがコール。ターンは **8♣**。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: 'フロップでコールしたBBにはKxや5xが残り、もう降りにくい。A-highのショーダウン価値も残ります。' },
            { label: '6bbベット', good: false, why: '降ろしたい弱い手はフロップで降りています。' },
          ],
        },
      ],
      outro: 'ペアボードは小さく広く打つボード。ただし相手がコールしたら、2回目は手を選びます。',
    },
  ],
};

export default lesson;
