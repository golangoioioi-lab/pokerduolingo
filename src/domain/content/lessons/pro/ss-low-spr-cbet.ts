import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'ss-low-spr-cbet',
  blocks: [
    { t: 'h', text: '2回で全部入れる' },
    { t: 'p', text: 'スタック40bbの3betポット。ポット16.5bb、残り32.5bbでCベットします。' },
    {
      t: 'play',
      title: 'BTNでA♠Q♦、3betポット',
      hero: 'BTN',
      heroCards: ['As', 'Qd'],
      villain: 'CO',
      villainCards: ['Kc', 'Qc'],
      steps: [
        {
          street: 'フロップ',
          board: ['Qs', '8d', '3c'],
          pot: 16.5,
          say: 'CO の2.5bbオープンにあなたが7.5bbで3bet、CO がコール。CO はチェックしました。',
          q: 'トップペア・トップキッカー。どうする？',
          options: [
            { label: 'チェック', good: false, why: '弱い Q やドローから取れる機会を逃します。' },
            { label: '10bb（約60%）', good: true, why: 'コールされるとターンでちょうど約62%のオールインになります。' },
            { label: '5.5bb（1/3）', good: true, why: 'これも2回で全部入ります（僅差）。ターンはポットサイズのオールインになります。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2h'],
          pot: 36.5,
          say: '10bbに CO がコール。ターンは **2♥**。CO はまたチェック。残りは22.5bbです。',
          q: 'どうする？',
          options: [
            { label: '22.5bb オールイン', good: true, why: 'ポットの約62%。フロップと同じ圧力で全部入れます。' },
            { label: 'チェック', good: false, why: 'ここまで払った手から、最後の22.5bbを取り損ねます。' },
          ],
        },
        { street: 'リバー', board: ['7d'], pot: 81.5, say: 'CO がコール。リバーは **7♦**。ショーダウンです。' },
      ],
      outro: 'CO は K♣Q♣ でした。キッカーの差で勝ちです。等比サイズなら、2回とも同じ圧力で全部入ります。',
    },
    { t: 'h', text: '等比サイズ' },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 16.5, stack: 32.5 },
        { label: 'フロップ10bbにコール後', pot: 36.5, stack: 22.5 },
        { label: 'ターンのオールインにコール後', pot: 81.5, stack: 0 },
      ],
      caption: 'フロップで約60%、ターンで約62%。ほぼ同じ割合で2回打つとちょうど全部入る',
    },
    {
      t: 'compare',
      left: {
        title: 'フロップ 1/3（5.5bb）',
        points: ['ターンでポットサイズのオールイン', 'レンジ全体で打ちやすい'],
        verdict: 'neutral',
      },
      right: {
        title: 'フロップ 約60%（10bb）',
        points: ['ターンで約62%のオールイン', '強い手とドローで打つ'],
        verdict: 'neutral',
      },
      caption: 'どちらも2回で全部入る',
    },
    {
      t: 'estimate',
      q: 'ポット16.5bb、残り32.5bb。フロップで10bbを打ってコールされたら、ターンの残りスタックは？',
      board: ['Qs', '8d', '3c'],
      min: 0,
      max: 40,
      step: 0.5,
      unit: 'bb',
      answer: 22.5,
      tolerance: 5,
      explain: '32.5 − 10 = 22.5bb。ポットは 16.5 + 20 = 36.5bb です。',
    },
    { t: 'h', text: '守る側の覚悟' },
    {
      t: 'odds',
      pot: 36.5,
      bet: 22.5,
      equity: 30,
      caption: '必要勝率は 22.5 ÷ 81.5 ≈ 28%。勝率30%のドローでもコールできる',
    },
    {
      t: 'estimate',
      q: 'ターン。ポット36.5bbに22.5bbのオールイン。必要勝率は？',
      board: ['Qs', '8d', '3c', '2h'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 28,
      tolerance: 6,
      explain: '22.5 ÷ (36.5 + 45) = 22.5 ÷ 81.5 ≈ 28% です。フロップでコールした手の多くは、ターンでもコールすることになります。',
    },
    {
      t: 'rapid',
      q: 'ターンでポット36.5bbに22.5bbのオールイン（必要勝率 約28%）。あなたの勝率がこれなら？',
      choices: ['コール', 'フォールド'],
      items: [
        { text: '勝率 35%', answer: 0 },
        { text: '勝率 20%', answer: 1, why: '28%に届きません。' },
        { text: '勝率 30%', answer: 0 },
        { text: '勝率 45%', answer: 0 },
        { text: '勝率 9%（ガットショットだけ）', answer: 1, why: '28%に大きく届きません。フロップのコールから見直します。' },
        { text: '勝率 24%', answer: 1, why: 'わずかに届きません。' },
      ],
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: '低SPRでは「何回で全部入れるか」からサイズを決めます。守る側は、フロップのコールがターンのオールインにつながると考えます。',
    },
  ],
};

export default lesson;
