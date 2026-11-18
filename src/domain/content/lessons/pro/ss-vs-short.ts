import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'ss-vs-short',
  blocks: [
    {
      t: 'p',
      text: '自分が100bbでも、相手が25bbなら、そのハンドは25bbの勝負です。賭けられる額は短い方のスタック（**有効スタック**）で決まるからです。このレッスンでは、深いスタックの側からショートスタックと戦う方法を考えます。',
    },
    { t: 'h', text: '3betする前にオールインへの答えを決める' },
    {
      t: 'seats',
      seats: [
        { pos: 'CO', action: '2.2bbオープン（25bb）', bet: 2.2 },
        { pos: 'BTN', hero: true, action: '7bbに3bet（100bb）', bet: 7 },
        { pos: 'SB', folded: true },
        { pos: 'BB', folded: true },
      ],
      pot: 10.7,
      caption: 'COが25bbのオールインで返してきたら？',
    },
    {
      t: 'odds',
      pot: 15.5,
      bet: 18,
      equity: 36,
      caption: 'COのオールインにあと18bb。必要勝率は 18 ÷ 51.5 ≈ 35%。K♦J♦の勝率は約36%',
    },
    {
      t: 'p',
      text: 'COのオールインレンジを 88+・AJs+・AQo+・KQs・A5s〜A4s とすると、必要勝率35%に対して各手の勝率は次のとおりです。',
    },
    {
      t: 'table',
      head: ['BTNの手', '勝率（目安）', '判断'],
      rows: [
        ['9♣9♦', '約45%', '3betしてコール'],
        ['A♥Q♣', '約43%', '3betしてコール'],
        ['K♦J♦', '約36%', 'ぎりぎりコール'],
        ['A♠5♠', '約35%', 'ぎりぎり'],
        ['7♥6♥', '約32%', '3betしない（コールかフォールド）'],
      ],
    },
    {
      t: 'p',
      text: '必要勝率が35%と低いので、3betした手の多くはオールインにコールすることになります。逆に言えば、**オールインされたら降りる手では3betしない**ことです。76sのような手は、3betせずにコールするか降ります。',
    },
    { t: 'h', text: 'ショートスタックに対する基本' },
    {
      t: 'compare',
      left: {
        title: 'やるべきこと',
        points: ['3betは、オールインにコールできる手で', '相手のオールインレンジが広ければコールを広げる', 'ポストフロップは有効スタックでSPRを考える'],
        verdict: 'good',
      },
      right: {
        title: '避けること',
        points: ['3betしてオールインに降りる', 'インプライドオッズを期待したコール', '自分のスタックの大きさで判断する'],
        verdict: 'bad',
      },
    },
    {
      t: 'quiz',
      q: '自分100bb、相手25bb。このハンドの有効スタックは？',
      options: ['25bb', '100bb', '62.5bb', '125bb'],
      answer: 0,
      explain: '賭けられるのは短い方のスタックまでなので、有効スタックは25bbです。',
    },
    {
      t: 'estimate',
      q: 'COの2.2bbに7bbで3bet、COが25bbオールイン。BTNの必要勝率は？',
      hand: ['Kd', 'Jd'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 35,
      tolerance: 8,
      explain: '追加は18bb、コール後のポットは 25 + 25 + 1.5 = 51.5bb。18 ÷ 51.5 ≈ 35% です。',
    },
    {
      t: 'quiz',
      q: '25bbのCOのオープンに対し、3betしてはいけない手は？（オールインされたら降りる手）',
      options: ['9♣9♦', 'A♥Q♣', '7♥6♥', 'A♠K♦'],
      optionCards: [['9c', '9d'], ['Ah', 'Qc'], ['7h', '6h'], ['As', 'Kd']],
      answer: 2,
      explain: '3betに対するオールインは必要勝率が低く、降りると7bbを捨てることになります。76sは勝率が約32%で、降りる予定の手では3betしません。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'ショートスタックとの勝負は有効スタックで考えます。3betする前に、オールインされたらコールするかを決めておきます。',
    },
  ],
};

export default lesson;
