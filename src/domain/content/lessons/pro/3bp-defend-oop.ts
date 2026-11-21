import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-defend-oop',
  blocks: [
    { t: 'h', text: 'まず直感で' },
    {
      t: 'rapid',
      q: 'UTG（OOPのコーラー）。チェック後、BTNの5.8bb c-betに続ける？',
      choices: ['続ける', '降りる'],
      items: [
        { cards: ['Qd', 'Qc'], board: ['Ks', '7d', '2c'], answer: 0 },
        { cards: ['7c', '7h'], board: ['Ks', '7d', '2c'], answer: 0, why: 'セット。チェックレイズも選択肢です。' },
        { cards: ['6h', '5h'], board: ['Ks', '7d', '2c'], answer: 1, why: 'ペアもドローもありません。' },
        { cards: ['8c', '8h'], board: ['Ks', '7d', '2c'], answer: 0, why: '必要勝率は約20%。7より上のペアは続けます。' },
        { cards: ['Ah', 'Kd'], board: ['Ks', '7d', '2c'], answer: 0 },
        { cards: ['5s', '4s'], board: ['Ks', '7d', '2c'], answer: 1, why: 'ガットショットもありません。' },
        { cards: ['Js', 'Jh'], board: ['Ks', '7d', '2c'], answer: 0 },
        { cards: ['Th', '9h'], board: ['Ks', '7d', '2c'], answer: 1, why: 'バックドア程度では足りません。' },
      ],
    },
    { t: 'h', text: '最も不利な立場' },
    {
      t: 'p',
      text: 'UTGがオープン、BTNが8bbに3bet、UTGがコール。UTGにはポジションもレンジ優位もありません。ほぼ全部の手でチェックから始めます。',
    },
    {
      t: 'pot',
      steps: [
        { label: '3betポット（BTN対UTG）', pot: 17.5, stack: 92 },
        { label: 'フロップ 5.8bet・コール', pot: 29.1, stack: 86.2 },
        { label: 'ターン 14.5bet・コール', pot: 58.1, stack: 71.7 },
      ],
      caption: 'ポット17.5bb、SPR 約5.3から始まります。',
    },
    {
      t: 'odds',
      pot: 17.5,
      bet: 5.8,
      equity: 25,
      caption: 'ポット17.5bbに5.8bb。必要勝率は約20%です。',
    },
    {
      t: 'p',
      text: 'チェックレイズは約10%以下（目安）。セットやツーペアなど強い手が中心です。',
    },
    {
      t: 'quiz',
      q: 'K♠7♦2♣でBTNがc-bet。チェックレイズに回しやすいのは、どちらの手？',
      options: ['7♣7♥（セット）', 'Q♦Q♣（ボードの下のペア）'],
      optionCards: [['7c', '7h'], ['Qd', 'Qc']],
      board: ['Ks', '7d', '2c'],
      answer: 0,
      explain: 'チェックレイズはセットなど強い手が中心です。QQはチェックコールで十分です。',
    },
    { t: 'h', text: '1ハンドで体験' },
    {
      t: 'play',
      title: 'UTGのQQ、3betされてOOP',
      hero: 'UTG',
      heroCards: ['Qd', 'Qc'],
      villain: 'BTN',
      villainCards: ['Ah', 'Js'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 12,
          say: 'あなたはUTGで **Q♦Q♣** を2.5bbでオープン。BTNが8bbに3bet。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'QQはコールで十分戦えます。' },
            { label: '4bet', good: true, why: '4betも有力です（目安で半々）。ここではコールで進みます。' },
            { label: 'フォールド', good: false, why: 'QQを降りるのは降りすぎです。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Ks', '7d', '2c'],
          pot: 17.5,
          say: 'ポット17.5bb。あなたが先に行動します。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: 'レンジ優位のない側は、チェックから始めます。' },
            { label: '12bbをドンクベット', good: false, why: 'BTNの強い手にだけコールされ、弱い手は降ります。' },
          ],
        },
        {
          street: 'フロップ',
          pot: 23.3,
          say: 'BTNが5.8bbをc-bet。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: '必要勝率は約20%。QQは十分です。' },
            { label: 'チェックレイズ', good: false, why: '降りるのは弱い手だけ。強い手にだけ続けられます。' },
            { label: 'フォールド', good: false, why: 'BTNはレンジ全体で小さく打ちます。QQは降りる手ではありません。' },
          ],
        },
        {
          street: 'ターン',
          board: ['4h'],
          pot: 29.1,
          say: 'あなたはチェック。BTNもチェックバック。',
        },
        {
          street: 'リバー',
          board: ['9s'],
          pot: 44.1,
          say: 'あなたはチェック。BTNが15bbをベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: '必要勝率は約25%。ターンのチェックで、BTNの強い手は減っています。' },
            { label: 'フォールド', good: false, why: 'この価格でQQを降りると、ブラフに搾取されます。' },
          ],
        },
      ],
      outro: 'BTNはAJのブラフでした。OOPのコーラーはチェックから始め、ブラフを捕まえる役に回ります。',
    },
  ],
};

export default lesson;
