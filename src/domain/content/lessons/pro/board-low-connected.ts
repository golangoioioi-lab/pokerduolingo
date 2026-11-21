import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-low-connected',
  blocks: [
    { t: 'h', text: 'AAは何番目？' },
    {
      t: 'order',
      q: '7♠6♦5♣ で強い順にタップ',
      board: ['7s', '6d', '5c'],
      hands: [
        { label: 'AA', cards: ['Ah', 'Ac'] },
        { label: '84s', cards: ['8h', '4h'] },
        { label: '77', cards: ['7h', '7c'] },
        { label: '76s', cards: ['7d', '6s'] },
        { label: 'AK', cards: ['As', 'Kd'] },
      ],
      explain: '84はストレート、77はセット、76はツーペア。AAはその下です。BBのコネクターがBTNのオーバーペアを上回ります。',
    },
    { t: 'h', text: '両者のレンジが拮抗する' },
    {
      t: 'p',
      text: 'ストレート・セット・ツーペアの割合が両者でほぼ同じになります。BTNの強みのオーバーペアは、ここでは絶対ではありません（BTN対BBのSRP、目安）。',
    },
    {
      t: 'equity',
      players: [{ label: 'BTNレンジ', pct: 50 }, { label: 'BBレンジ', pct: 50 }],
      board: ['7s', '6d', '5c'],
      caption: '7♠6♦5♣ のレンジ対レンジ（目安）。ほぼ互角。',
    },
    {
      t: 'combos',
      groups: [
        { label: '76/65/87/54', hands: ['76s', '65s', '87s', '54s'] },
        { label: 'セット候補', hands: ['77', '66', '55'] },
      ],
      dead: ['7s', '6d', '5c'],
      caption: '7♠6♦5♣ 上のコンボ数。両者ともこれらを持つ。',
    },
    {
      t: 'estimate',
      q: 'このボードで、BTNレンジのエクイティ（目安）は何%？',
      board: ['7s', '6d', '5c'],
      min: 40,
      max: 60,
      step: 1,
      unit: '%',
      answer: 50,
      tolerance: 3,
      explain: '両者のレンジに当たり、ほぼ互角の約50%です。',
    },
    { t: 'h', text: '戦い方' },
    {
      t: 'compare',
      left: { title: 'BTN（IP）', points: ['Cベット頻度は低め', '強い手とドローで打つ', 'ポジションで実現力を確保'], verdict: 'neutral' },
      right: { title: 'BB（OOP）', points: ['チェックレイズが増える', 'ドローが多い', '位置の不利は残る'], verdict: 'neutral' },
      caption: '互角のボードでは、位置とドローの使い方が差になる。',
    },
    {
      t: 'quiz',
      q: 'このボードでBTNのCベット頻度は？',
      board: ['7s', '6d', '5c'],
      options: ['低めになる', '常に100%', '常に0%', '全額ベットのみ'],
      answer: 0,
      explain: 'レンジアドバンテージが小さいので、頻度を落とします。',
    },
    { t: 'h', text: 'BB側で打ってみる' },
    {
      t: 'play',
      title: 'BBで87sを守る',
      hero: 'BB',
      heroCards: ['8h', '7h'],
      villain: 'BTN',
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'BTNが2.5bbオープン。BBで **8♥7♥** をコールしました。' },
        {
          street: 'フロップ',
          board: ['7s', '6d', '5c'],
          pot: 5.5,
          say: 'フロップは **7♠6♦5♣**。トップペアとオープンエンドのストレートドローです。',
          q: '先に行動します。どうする？',
          options: [
            { label: 'チェック', good: true, why: 'BBはチェックから入るのが基本。BTNのベットに対してレイズできます。' },
            { label: 'オールイン', good: false, why: '大きすぎます。降ろしたい手しか降りません。' },
          ],
        },
        {
          street: 'フロップ',
          pot: 7.5,
          say: 'BTNが2bbベット。',
          q: 'どうする？',
          options: [
            { label: '8bbにチェックレイズ', good: true, why: 'ペア＋8アウツのドローは強く、オーバーペアにも勝ち目が十分。僅差でコールも可。' },
            { label: 'コール', good: true, why: '僅差。位置の不利はあるが、コールでも十分戦えます。' },
            { label: 'フォールド', good: false, why: 'このボードの上位の手です。降りる理由はありません。' },
          ],
        },
        { street: 'ターン', board: ['9d'], pot: 21.5, say: 'BTNがコール。ターン **9♦** でストレートが完成しました。' },
      ],
      outro: '低くつながったボードでは、BBのコネクターが主役になります。チェックレイズの機会が増えるのはこのためです。',
    },
  ],
};

export default lesson;
