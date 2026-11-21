import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-q-j-high',
  blocks: [
    { t: 'h', text: 'ドライ？ つながり？' },
    {
      t: 'rapid',
      q: 'このQ・J-highのフロップは？',
      choices: ['ドライ', 'つながり'],
      items: [
        { cards: ['Qh', '7d', '2c'], answer: 0 },
        { cards: ['Qs', 'Jd', '5c'], answer: 1, why: 'QJが隣り合い、KT・T9などのドローが出ます。' },
        { cards: ['Jh', '8d', '3c'], answer: 0 },
        { cards: ['Kd', 'Qc', 'Jh'], answer: 1 },
        { cards: ['Qc', '8s', '3d'], answer: 0 },
        { cards: ['Jc', 'Ts', '4h'], answer: 1, why: 'JTがつながり、Q9・98・KQなどにドローがあります。' },
        { cards: ['Js', '6d', '2h'], answer: 0 },
        { cards: ['Qd', 'Th', '9s'], answer: 1 },
      ],
    },
    { t: 'h', text: 'A-highより優位が小さい' },
    {
      t: 'p',
      text: 'Q・Jの上にはAとKがあり、BBのAxやKxにも勝ち目が残ります。つながるほどBBのドローが増え、BTNの優位は薄まります（BTN対BBのSRP、目安）。',
    },
    {
      t: 'equity',
      players: [{ label: 'BTNレンジ', pct: 52 }, { label: 'BBレンジ', pct: 48 }],
      board: ['Qh', '7d', '2c'],
      caption: 'Q♥7♦2♣ のレンジ対レンジ（目安）。',
    },
    {
      t: 'compare',
      left: { title: 'Q♥7♦2♣', board: ['Qh', '7d', '2c'], points: ['BTNはQx・AK・QQが豊富', '小さなベットを高頻度で'], verdict: 'good' },
      right: { title: 'Q♠J♦5♣', board: ['Qs', 'Jd', '5c'], points: ['BBにJTs・KTsなどが残る', 'サイズとチェックを混ぜる'], verdict: 'neutral' },
      caption: 'つながりがあるほど、小さな優位は薄まる。',
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
      q: 'このボードで、QJは何通り？（16通りから減ります）',
      board: ['Qs', 'Jd', '5c'],
      min: 0,
      max: 16,
      step: 1,
      unit: '通り',
      answer: 9,
      tolerance: 2,
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
    { t: 'h', text: '中くらいのペアで打つ' },
    {
      t: 'play',
      title: 'Q♠J♦5♣ で99',
      hero: 'BTN',
      heroCards: ['9h', '9c'],
      villain: 'BB',
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'BTNで **9♥9♣** を2.5bbオープン。BBがコールしました。' },
        {
          street: 'フロップ',
          board: ['Qs', 'Jd', '5c'],
          pot: 5.5,
          say: 'フロップは **Q♠J♦5♣**。BBはチェック。',
          q: '99はボードの下のペア。どうする？',
          options: [
            { label: 'チェック', good: true, why: '打っても降りるのは弱い手だけで、ドローやQxに押し返されやすい。勝負の手を安く守ります。' },
            { label: '2bbベット', good: false, why: '目安では打つ頻度もありますが、チェックレイズされると困る手です。' },
          ],
        },
        {
          street: 'ターン',
          board: ['3d'],
          pot: 5.5,
          say: 'ターンは **3♦**。BBはまたチェック。',
          q: 'どうする？',
          options: [
            { label: '3bbベット', good: true, why: '僅差。BBは2回チェックして弱い手が多く、5xや弱いJxからの価値とドローへの守りになります。' },
            { label: 'チェック', good: true, why: '僅差。ショーダウンを目指す選択も十分です。' },
            { label: 'オールイン', good: false, why: '強い手にしかコールされません。' },
          ],
        },
      ],
      outro: 'つながったQ・J-highでは、BTNも全部は打ちません。中くらいのペアはチェックで守り、相手が弱さを見せたら小さく打ちます。',
    },
  ],
};

export default lesson;
