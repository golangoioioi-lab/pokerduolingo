import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'ss-vs-short',
  blocks: [
    { t: 'h', text: '25bbの相手と戦う' },
    { t: 'p', text: 'あなたは100bb、CO は25bb。賭けられるのは短い方のスタック（**有効スタック**）までです。' },
    {
      t: 'play',
      title: 'BTNで9♣9♦、相手は25bb',
      hero: 'BTN',
      heroCards: ['9c', '9d'],
      villain: 'CO',
      villainCards: ['As', 'Qs'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 3.7,
          say: 'CO（25bb）が2.2bbでオープン。あなたは BTN で **9♣9♦**、スタック100bb。',
          q: 'どうする？',
          options: [
            { label: '7bb に3bet', good: true, why: 'オールインされてもコールできる手なので、3betしてよい手です。' },
            { label: 'コール', good: false, why: '悪くはありませんが、3betで先にポットを取りにいけます。' },
            { label: 'フォールド', good: false, why: '25bbの相手に対して99は十分強い手です。' },
          ],
        },
        {
          street: 'プリフロップ',
          pot: 33.5,
          say: 'CO が25bbオールイン。ブラインドは降りました。コールにはあと18bbです。',
          q: 'CO のレンジは 88+・AJs+・AQo+・KQs・A5s・A4s。どうする？',
          options: [
            { label: 'コール', good: true, why: '必要勝率は約35%、このレンジへの勝率は約45%あります。' },
            { label: 'フォールド', good: false, why: '3betした7bbを捨てることになります。降りるなら最初から3betしません。' },
          ],
        },
        { street: 'フロップ', board: ['7h', '4d', '2c'], pot: 51.5, say: 'CO は **A♠Q♠**。フロップは **7-4-2**。' },
        { street: 'ターン', board: ['Kc'], pot: 51.5, say: 'ターンは **K♣**。' },
        { street: 'リバー', board: ['3h'], pot: 51.5, say: 'リバーは **3♥**。' },
      ],
      outro: '3betする前に、オールインされたらコールするかを決めておきます。',
    },
    { t: 'h', text: 'オールインへの答え' },
    {
      t: 'odds',
      pot: 15.5,
      bet: 18,
      equity: 36,
      caption: 'COのオールインにあと18bb。必要勝率は 18 ÷ 51.5 ≈ 35%。K♦J♦の勝率は約36%',
    },
    {
      t: 'table',
      head: ['BTNの手', '勝率（目安）', '判断'],
      rows: [
        ['9♣9♦', '約45%', '3betしてコール'],
        ['A♥Q♣', '約42%', '3betしてコール'],
        ['K♦J♦', '約36%', 'ぎりぎりコール'],
        ['A♠5♠', '約35%', 'ぎりぎり'],
        ['7♥6♥', '約32%', '3betしない（コールかフォールド）'],
      ],
    },
    {
      t: 'estimate',
      q: 'COの2.2bbに7bbで3bet、COが25bbオールイン。BTNの必要勝率は？',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 35,
      tolerance: 8,
      explain: '追加は18bb、コール後のポットは 25 + 25 + 1.5 = 51.5bb。18 ÷ 51.5 ≈ 35% です。',
    },
    {
      t: 'rapid',
      q: '25bbのCOのオープン。オールインされてもコールできる手だけ3betします',
      choices: ['3bet', '3betしない'],
      items: [
        { cards: ['9c', '9d'], answer: 0, why: '勝率は約45%あります。' },
        { cards: ['7h', '6h'], answer: 1, why: '勝率は約32%。オールインされたら降りることになります。' },
        { cards: ['As', 'Kd'], answer: 0, why: '勝率は約52%あります。' },
        { cards: ['6h', '5h'], answer: 1, why: '勝率は約31%です。' },
        { cards: ['Jc', 'Jd'], answer: 0 },
        { cards: ['Ah', '9c'], answer: 1, why: '勝率は約32%。上の A に負けています。' },
        { cards: ['Ah', 'Qc'], answer: 0, why: '勝率は約42%あります。' },
        { cards: ['8h', '7h'], answer: 1, why: '勝率は約32%です。' },
      ],
    },
    {
      t: 'compare',
      left: {
        title: 'やるべきこと',
        points: ['3betは、オールインにコールできる手で', 'ポストフロップは有効スタックでSPRを考える'],
        verdict: 'good',
      },
      right: {
        title: '避けること',
        points: ['3betしてオールインに降りる', 'インプライドオッズを期待したコール'],
        verdict: 'bad',
      },
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'ショートスタックとの勝負は有効スタックで考えます。3betする前に、オールインされたらコールするかを決めておきます。',
    },
  ],
};

export default lesson;
