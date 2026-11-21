import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'ss-calling-allin',
  blocks: [
    { t: 'h', text: 'オールインを受ける' },
    { t: 'p', text: 'BTN のスタックは20bb。手が強そうかではなく、数字で決めます。' },
    {
      t: 'play',
      title: 'BBでA♦T♣、20bbのオールインを受ける',
      hero: 'BB',
      heroCards: ['Ad', 'Tc'],
      villain: 'BTN',
      villainCards: ['Ks', 'Qs'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 21.5,
          say: 'BTN が20bbオールイン、SB はフォールド。あなたは BB で **A♦T♣**。コールにはあと19bbです。',
          q: 'BTN のレンジは約30%（22+・Ax・K9s+・KTo+・QTs+・QJo・JTs）。どうする？',
          options: [
            { label: 'コール', good: true, why: '必要勝率は約47%、このレンジへの勝率は約54%あります。' },
            { label: 'フォールド', good: false, why: '必要勝率を上回っているので、降りると利益を逃します。' },
          ],
        },
        { street: 'フロップ', board: ['Qd', '7c', '3h'], pot: 40.5, say: 'BTN は **K♠Q♠**。フロップで Q が落ちました。' },
        { street: 'ターン', board: ['9s'], pot: 40.5, say: 'ターンは **9♠**。' },
        { street: 'リバー', board: ['2c'], pot: 40.5, say: 'リバーは **2♣**。' },
      ],
      outro: '今回は負けました。それでもコールは平均で約+2.9bbの判断です。結果ではなく、勝率と必要勝率で判断します。',
    },
    { t: 'h', text: '必要勝率と比べる' },
    {
      t: 'odds',
      pot: 2.5,
      bet: 19,
      equity: 54,
      caption: 'ポット2.5bbにあと19bb。必要勝率は 19 ÷ 40.5 ≈ 47%。A♦T♣の勝率は約54%',
    },
    {
      t: 'equity',
      players: [
        { label: 'BB K♥J♦', cards: ['Kh', 'Jd'], pct: 43 },
        { label: 'BTNのオールインレンジ', pct: 57 },
      ],
      caption: 'KJoは見た目より弱い。レンジ内のAxやペアに負けやすい',
    },
    { t: 'p', text: 'A を持たない KJ は、Ax の多いレンジに不利です。77 のような中くらいのペアは、高いカード2枚に有利なのでコールできます。' },
    {
      t: 'rapid',
      q: 'BB で BTN の20bbオールイン（上の約30%レンジ）を受ける。必要勝率は約47%',
      choices: ['コール', 'フォールド'],
      items: [
        { cards: ['As', 'Kd'], answer: 0, why: '勝率は約63%あります。' },
        { cards: ['Kh', 'Jd'], answer: 1, why: '勝率は約42%。Ax に負けやすい手です。' },
        { cards: ['7c', '7d'], answer: 0, why: '勝率は約56%あります。' },
        { cards: ['Qd', 'Td'], answer: 1, why: '勝率は約42%です。' },
        { cards: ['5c', '5d'], answer: 0, why: '勝率は約52%あります。' },
        { cards: ['Ah', '5c'], answer: 1, why: '勝率は約42%。レンジ内の強い Ax に負けています。' },
        { cards: ['9c', '9d'], answer: 0, why: '勝率は約60%あります。' },
        { cards: ['Kd', 'Qc'], answer: 1, why: '勝率は約45%で、わずかに届きません。' },
        { cards: ['Th', '9h'], answer: 1, why: '勝率は約41%です。' },
        { cards: ['Ad', 'Tc'], answer: 0, why: '勝率は約54%あります。' },
      ],
    },
    {
      t: 'tree',
      root: 'BBがBTNの20bbオールインに対して',
      options: [
        { label: 'フォールド', ev: 0 },
        {
          label: 'A♦T♣でコール',
          outcomes: [
            { label: '勝つ', prob: 0.54, value: 21.5 },
            { label: '負ける', prob: 0.46, value: -19 },
          ],
        },
        {
          label: 'K♥J♦でコール',
          outcomes: [
            { label: '勝つ', prob: 0.43, value: 21.5 },
            { label: '負ける', prob: 0.57, value: -19 },
          ],
        },
      ],
      caption: '勝てば今のポット21.5bbを取り、負ければ追加の19bbを失う',
    },
    {
      t: 'estimate',
      q: '勝率54%のA♦T♣でコールしたときのEVは？（勝てば+21.5bb、負ければ−19bb）',
      hand: ['Ad', 'Tc'],
      min: -10,
      max: 10,
      step: 0.1,
      unit: 'bb',
      answer: 2.9,
      tolerance: 2.5,
      explain: '0.54 × 21.5 − 0.46 × 19 = 11.61 − 8.74 ≈ +2.9bb です。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'オールインへのコールは、必要勝率と相手のレンジへの勝率の比較で決めます。A を持たない高いカードは、広いレンジに意外と弱いことがあります。',
    },
    { t: 'try', text: 'エクイティ計算で、自分の手と相手のオールインレンジの勝率を確かめましょう。', tab: 'equity' },
  ],
};

export default lesson;
