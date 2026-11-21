import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'opp-tight-passive',
  blocks: [
    { t: 'h', text: 'まず判断してみる' },
    {
      t: 'rapid',
      q: 'あなたは BTN。SB も BB もタイトパッシブ（よく降り、3betしない）。オープンする？',
      choices: ['オープン', 'フォールド'],
      items: [
        { cards: ['Jh', '7d'], answer: 0, why: 'ブラインドが降りる回数が多いので、弱めの手でもスチールが得になります。' },
        { cards: ['Qc', '5d'], answer: 0 },
        { cards: ['7s', '2d'], answer: 1, why: '広げるにも限度があります。コールされると勝ちにくい手です。' },
        { cards: ['Kh', '3c'], answer: 0 },
        { cards: ['Td', '6s'], answer: 0 },
        { cards: ['5c', '2h'], answer: 1 },
        { cards: ['9h', '8c'], answer: 0 },
        { cards: ['3s', '2c'], answer: 1 },
      ],
    },
    { t: 'p', text: '**タイトパッシブ**は参加が少なく、参加してもコール中心の相手です（VPIP 12〜18%、AF 1 前後）。大きく負けませんが、取れるポットを取り逃しています。' },
    { t: 'h', text: '弱点：降りる回数が多い' },
    {
      t: 'tree',
      root: 'BTN で弱めの手。ブラインドは2人ともタイトパッシブ',
      options: [
        {
          label: '2.5bb でオープン',
          outcomes: [
            { label: '2人とも降りる', prob: 0.7, value: 1.5 },
            { label: 'コールされてポストフロップへ（平均）', prob: 0.3, value: -1 },
          ],
          note: 'コール後の平均 −1bb は目安',
        },
        { label: 'フォールド', ev: 0 },
      ],
      caption: '0.7 × 1.5 − 0.3 × 1 = +0.75bb。コール後に多少負けてもスチールは得です。',
    },
    {
      t: 'estimate',
      q: '2人とも降りる確率が 60% に下がると、オープンの EV は何 bb？（コール後の平均は −1bb のまま）',
      min: -1,
      max: 2,
      step: 0.05,
      unit: 'bb',
      answer: 0.5,
      tolerance: 0.3,
      explain: '0.6 × 1.5 − 0.4 × 1 = +0.5bb です。',
    },
    { t: 'p', text: 'フロップでも、外れた手は素直に降ります。ポットの 1/3 程度の小さい Cベットを高い頻度で打てます。' },
    {
      t: 'quiz',
      q: 'タイトパッシブが小さい Cベットにコール。ターンで外れたあなたは？',
      hand: ['Qh', 'Jh'],
      board: ['Ks', '7d', '2c', '4s'],
      options: ['チェックして諦める', '大きくブラフを続ける'],
      answer: 0,
      explain: 'この相手がコールしたら何か持っています。ターン以降のブラフは控えます。',
    },
    { t: 'h', text: '相手が打ってきたら信じる' },
    {
      t: 'compare',
      left: { title: 'タイトパッシブがコール', points: ['何かしら当たっている', 'ブラフでの追撃は控える'], verdict: 'neutral' },
      right: { title: 'タイトパッシブがベット・レイズ', points: ['強い手が大半', 'ワンペアは降りる候補'], verdict: 'bad' },
    },
    { t: 'h', text: 'もう一度：小さく取り、引くところで引く' },
    {
      t: 'play',
      title: 'CO の KQ vs BB のタイトパッシブ',
      hero: 'CO',
      heroCards: ['Kd', 'Qc'],
      villain: 'BB',
      villainCards: ['7d', '6c'],
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'あなたは CO で **K♦Q♣** を 2.5bb オープン。BB（タイトパッシブ）がコール。' },
        {
          street: 'フロップ',
          board: ['Kh', '8d', '4c'],
          pot: 5.5,
          say: 'フロップは **K♥8♦4♣**。トップペア。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'この相手は自分から打たないので、取れる額を逃します。' },
            { label: '2bb ベット', good: true, why: '小さく打って、弱いペアやドローから取ります。' },
          ],
        },
        { street: 'ターン', board: ['7s'], pot: 9.5, say: 'BB がコール。ターンは **7♠**。BB はチェック。あなたは 6bb をベットし、BB がコール。' },
        {
          street: 'リバー',
          board: ['6h'],
          pot: 39.5,
          say: 'リバーは **6♥**。BB が初めて自分から 18bb をベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: false, why: '必要勝率は約31%ですが、この相手のこのベットにブラフはほとんどありません。' },
            { label: 'フォールド', good: true, why: '7・6 でストレートやツーペアが完成。普段打たない相手の大きなベットは強い手です。' },
          ],
        },
      ],
      outro: 'タイトパッシブには「小さく何度も取り、相手が打ってきたら引く」が基本です。',
    },
  ],
};

export default lesson;
