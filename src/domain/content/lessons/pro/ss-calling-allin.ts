import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'ss-calling-allin',
  blocks: [
    {
      t: 'p',
      text: '浅いスタックの相手からオールインされたら、判断は「必要勝率」と「相手のレンジに対する勝率」の比較だけです。手が強そうか弱そうかではなく、数字で決めます。',
    },
    { t: 'h', text: '必要勝率を出す' },
    {
      t: 'p',
      text: 'BTNが20bbでオールイン、SBフォールド。BBはあと19bbでコールできます。コール後のポットは 20 + 20 + 0.5 = 40.5bb です。',
    },
    {
      t: 'odds',
      pot: 2.5,
      bet: 19,
      equity: 54,
      caption: '必要勝率は 19 ÷ 40.5 ≈ 47%。A♦T♣の勝率は約54%',
    },
    { t: 'h', text: '相手のレンジに対する勝率' },
    {
      t: 'p',
      text: 'BTNの20bbオールインのレンジを、22+・A2+・K9s+・KTo+・QTs+・QJo・JTs（約30%）とします。BBの手ごとの勝率は次のとおりです。',
    },
    {
      t: 'table',
      head: ['BBの手', '勝率（目安）', '47%と比べて'],
      rows: [
        ['A♠K♦', '約64%', 'コール'],
        ['7♣7♦', '約56%', 'コール'],
        ['A♦T♣', '約54%', 'コール'],
        ['A♠9♣', '約50%', 'コール（わずかに得）'],
        ['K♥J♦', '約43%', 'フォールド'],
        ['Q♦T♦', '約42%', 'フォールド'],
      ],
    },
    {
      t: 'equity',
      players: [
        { label: 'BB K♥J♦', cards: ['Kh', 'Jd'], pct: 43 },
        { label: 'BTNのオールインレンジ', pct: 57 },
      ],
      caption: 'KJoは見た目より弱い。レンジ内のAxやペアに負けやすい',
    },
    {
      t: 'p',
      text: 'KJoは強そうに見えますが、BTNのレンジにはAxが多く、Aを持たないKJは不利です。一方、77のような中くらいのペアは、レンジ内の高いカード2枚に対して有利なので、コールできます。',
    },
    { t: 'h', text: 'EVで確かめる' },
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
      q: 'BTN 20bbオールイン、SBフォールド。BBのコールに必要な勝率は？',
      hand: ['Ad', 'Tc'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 47,
      tolerance: 8,
      explain: '追加は19bb、コール後のポットは40.5bb。19 ÷ 40.5 ≈ 47% です。',
    },
    {
      t: 'quiz',
      q: 'BTNの20bbオールイン（約30%のレンジ）に対し、フォールドが正解のハンドは？',
      options: ['A♠K♦', '7♣7♦', 'A♦T♣', 'K♥J♦'],
      optionCards: [['As', 'Kd'], ['7c', '7d'], ['Ad', 'Tc'], ['Kh', 'Jd']],
      answer: 3,
      explain: 'K♥J♦は見た目より弱く、BTNのレンジにはAxが多いので勝率は約43%で、必要勝率の47%に届きません。77はオーバーカード2枚に対して約55%あります。',
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
      text: 'オールインへのコールは、必要勝率と相手のレンジへの勝率の比較で決めます。高いカードでもAを持たない手は、広いレンジに意外と弱いことがあります。',
    },
    { t: 'try', text: 'エクイティ計算で、自分の手と相手のオールインレンジの勝率を確かめましょう。', tab: 'equity' },
  ],
};

export default lesson;
