import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'drill-pot-odds-basic',
  blocks: [
    { t: 'h', text: 'コールの値段を一瞬で' },
    {
      t: 'rapid',
      q: 'ベットされた。勝率はこれだけ。コールする？（直感でどうぞ）',
      choices: ['コール', 'フォールド'],
      items: [
        { text: 'ポット20・ベット10・勝率30%', answer: 0, why: '必要勝率は 10 ÷ 40 = 25%。' },
        { text: 'ポット10・ベット10・勝率25%', answer: 1, why: '必要勝率は 10 ÷ 30 ≈ 33%。' },
        { text: 'ポット30・ベット10・勝率25%', answer: 0, why: '必要勝率は 10 ÷ 50 = 20%。' },
        { text: 'ポット12・ベット9・勝率22%', answer: 1, why: '必要勝率は 9 ÷ 30 = 30%。' },
        { text: 'ポット8・ベット4・勝率20%', answer: 1, why: '必要勝率は 4 ÷ 16 = 25%。' },
        { text: 'ポット40・ベット20・勝率35%', answer: 0, why: '必要勝率は 20 ÷ 80 = 25%。' },
      ],
    },
    { t: 'h', text: '必要勝率の出し方' },
    { t: 'p', text: '「自分が払う額 ÷ コール後のポット」です。コール後のポットには、元のポット・相手のベット・自分のコールが入ります。' },
    {
      t: 'formula',
      text: '必要勝率 = コール額 ÷（元のポット + 相手のベット + コール額）',
      note: '例：ポット10bbに5bbなら 5 ÷ 20 = 25%',
    },
    { t: 'odds', pot: 10, bet: 5, equity: 30, caption: '必要勝率25%に対して勝率30%。コールは長期的にプラスです。' },
    { t: 'odds', pot: 10, bet: 10, equity: 30, caption: 'ポットサイズのベットだと必要勝率は約33%。同じ勝率30%では足りません。' },
    {
      t: 'warn',
      title: 'よくある間違い',
      text: '「ベット ÷ ポット」や「ベット ÷（ポット + ベット）」で計算するミス。自分のコール分もポットに入ります。',
    },
    { t: 'h', text: '練習問題' },
    {
      t: 'estimate',
      q: 'ポット20bbに相手が10bbをベットしました。コールに必要な勝率は？',
      min: 0, max: 100, step: 1, unit: '%', answer: 25, tolerance: 2,
      explain: '20 + 10 + 10 = 40bb。10 ÷ 40 = 25%。33%は自分のコールを入れ忘れた 10 ÷ 30 です。',
    },
    {
      t: 'estimate',
      q: 'ポット6bbに相手が6bb（ポットサイズ）をベット。必要勝率は？',
      min: 0, max: 100, step: 1, unit: '%', answer: 33, tolerance: 2,
      explain: '6 ÷ 18 ≈ 33%。ポットサイズには3回に1回勝てればよい、と覚えておくと便利です。',
    },
    {
      t: 'estimate',
      q: 'ポット30bbに相手が10bbをベット。必要勝率は？',
      min: 0, max: 100, step: 1, unit: '%', answer: 20, tolerance: 2,
      explain: '10 ÷ 50 = 20%。',
    },
    {
      t: 'estimate',
      q: 'ポット12bbに相手が9bbをベット。必要勝率は？',
      min: 0, max: 100, step: 1, unit: '%', answer: 30, tolerance: 2,
      explain: '9 ÷ 30 = 30%。75%はベットがポットの何割か（9 ÷ 12）で、必要勝率ではありません。',
    },
    { t: 'h', text: 'もう一度：1ハンドで使う' },
    {
      t: 'play',
      title: 'BB でトップペアを守る',
      hero: 'BB',
      heroCards: ['Ad', 'Qs'],
      villain: 'BTN',
      villainCards: ['Jh', 'Td'],
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'BTN が 2.5bb オープン。あなたは BB で **A♦Q♠** をコール。' },
        {
          street: 'フロップ', board: ['Qc', '8d', '4s'], pot: 7.5,
          say: 'トップペア。チェックすると BTN がポット5.5bbに 2bb ベット。',
          q: '必要勝率は？',
          options: [
            { label: '約21%', good: true, why: '2 ÷（5.5 + 2 + 2）= 2 ÷ 9.5 ≈ 21%。トップペアなら楽にコールです。' },
            { label: '約36%', good: false, why: '2 ÷ 5.5 は「ベット ÷ ポット」の間違いです。' },
          ],
        },
        {
          street: 'ターン', board: ['2h'], pot: 14.5,
          say: 'コール。ターンは 2。BTN がポット9.5bbに 5bb ベット。',
          q: '必要勝率は？',
          options: [
            { label: '約26%', good: true, why: '5 ÷ 19.5 ≈ 26%。' },
            { label: '約34%', good: false, why: '5 ÷ 14.5 は自分のコールを入れ忘れています。' },
          ],
        },
        {
          street: 'リバー', board: ['7c'], pot: 29.5,
          say: 'コール。リバーは 7。BTN がポット19.5bbに 10bb ベット。外れたドローのブラフも多いと読みます。',
          q: '必要勝率は約25%（10 ÷ 39.5）。どうする？',
          options: [
            { label: 'コール', good: true, why: '4回に1回勝てれば元が取れます。トップペアならそれ以上勝てます。' },
            { label: 'フォールド', good: false, why: '必要勝率25%の値段で、トップペアを降りるのはもったいないです。' },
          ],
        },
      ],
      outro: '相手は外れたストレートドローでした。「払う額 ÷ コール後のポット」を毎回出せば、迷いが減ります。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: '必要勝率 = コール額 ÷ コール後のポット。自分のコールをポットに入れることだけ忘れなければ、どんな額でも計算できます。',
    },
  ],
};

export default lesson;
