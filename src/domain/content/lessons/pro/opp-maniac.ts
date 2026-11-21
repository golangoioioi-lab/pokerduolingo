import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'opp-maniac',
  blocks: [
    { t: 'h', text: 'まず判断してみる' },
    {
      t: 'rapid',
      q: 'マニアック（VPIP 55%）が BTN から 4bb でオープン。BB のあなたは3betする？',
      choices: ['3bet', '3betしない'],
      items: [
        { cards: ['9s', '9c'], answer: 0, why: '広いレンジに大きく有利。ポットを大きくする価値があります。' },
        { cards: ['Ah', 'Jd'], answer: 0 },
        { cards: ['6h', '5h'], answer: 1, why: '普段は弱い手。大きなポットに付き合うと損をしやすいです。' },
        { cards: ['Kh', 'Kd'], answer: 0 },
        { cards: ['7c', '2d'], answer: 1 },
        { cards: ['Ad', 'Tc'], answer: 0, why: '相手の広いレンジに対して、AT も十分強い手です。' },
        { cards: ['4s', '3s'], answer: 1 },
        { cards: ['8s', '8d'], answer: 0 },
      ],
    },
    { t: 'p', text: '**マニアック**は LAG をさらに極端にした相手です（VPIP 50% 以上、AF 5 超も）。怖く見えますが、レンジの大半は弱い手です。' },
    {
      t: 'equity',
      players: [{ label: 'あなた 99', cards: ['9s', '9c'], pct: 64.5 }, { label: 'マニアックのレンジ（約50%）', pct: 35.5 }],
      caption: 'プリフロップのオールイン勝率（目安）。3回に1回は負けるので、振れ幅に備えます。',
    },
    { t: 'h', text: '自分から打たず、受けて取る' },
    { t: 'p', text: 'マニアックは放っておいても打ってきます。こちらがレイズすると弱い手が降りるので、強い手はチェックやコールで打たせます。' },
    {
      t: 'quiz',
      q: 'マニアック相手にフロップでセット。最も多く取れることが多い打ち方は？',
      hand: ['7s', '7d'],
      board: ['7h', 'Kd', '2c'],
      options: ['チェックやコールで相手に打たせる', 'すぐにオールイン', '最小のベットを打つ'],
      answer: 0,
      explain: 'マニアックは外れた手でも打ち続けます。大きく動くと弱い手が降りてしまいます。',
    },
    {
      t: 'odds',
      pot: 50.5,
      bet: 35,
      equity: 45,
      caption: 'リバー：ポット 50.5bb に 35bb。必要勝率は約29%（99 の勝率 45% はブラフの多さを踏まえた目安）。',
    },
    { t: 'h', text: 'もう一度：99 で受け続ける' },
    {
      t: 'play',
      title: 'BB の 99 vs BTN のマニアック',
      hero: 'BB',
      heroCards: ['9s', '9c'],
      villain: 'BTN',
      villainCards: ['Qh', '8h'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 5.5,
          say: 'マニアックが BTN から 4bb でオープン、SB はフォールド。あなたは BB で **9♠9♣**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: '相手の広いレンジに大きく有利な手です。' },
            { label: 'コール', good: true, why: 'ポットを小さめに保ち、ポストフロップで打たせます。' },
            { label: '3bet', good: true, why: 'これも良い選択です。広いレンジに対して有利です。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Td', '6c', '2h'],
          pot: 14.5,
          say: 'フロップは **T♦6♣2♥**。あなたはチェック、マニアックが 6bb をベット。',
          q: 'アンダーペア。どうする？',
          options: [
            { label: 'フォールド', good: false, why: '相手のレンジの大半に勝っています。' },
            { label: 'コール', good: true, why: '打たせ続けて、ブラフからも取ります。' },
            { label: 'レイズ', good: false, why: '外れた手が降り、強い手だけが残ります。' },
          ],
        },
        {
          street: 'ターン',
          board: ['4s'],
          pot: 35.5,
          say: 'ターンは **4♠**。あなたはチェック、マニアックが 15bb をベット。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'この相手のバレルにはブラフが多く含まれます。' },
            { label: 'コール', good: true, why: '必要勝率は約30%。十分に足ります。' },
          ],
        },
        {
          street: 'リバー',
          board: ['Kd'],
          pot: 85.5,
          say: 'リバーは **K♦**。あなたはチェック、マニアックが 35bb をベット。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: '怖いカードですが、相手は何でも打ってきます。' },
            { label: 'コール', good: true, why: '必要勝率は約29%。ブラフの多い相手にはコールです。' },
          ],
        },
      ],
      outro: 'マニアック相手のコツは我慢です。良い手で受け続けると、相手がポットを作ってくれます。',
    },
    {
      t: 'estimate',
      q: 'マニアックのレンジ（約50%）に対して、99 のプリフロップ勝率は約何%？',
      hand: ['9s', '9c'],
      min: 20,
      max: 90,
      step: 1,
      unit: '%',
      answer: 64,
      tolerance: 10,
      explain: '約64%です。大きく有利なので、ポットを大きくする価値があります。',
    },
  ],
};

export default lesson;
