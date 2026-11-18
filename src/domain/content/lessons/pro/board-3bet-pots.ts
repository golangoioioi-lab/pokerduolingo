import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-3bet-pots',
  blocks: [
    {
      t: 'p',
      text: '3betポットは、シングルレイズドポットよりポットが大きく、スタックが浅く（SPRが低く）なります。ボードの見方も少し変わります。',
    },
    { t: 'h', text: 'SPRの違い' },
    {
      t: 'pot',
      steps: [
        { label: 'SRP（BTN vs BB）', pot: 5.5, stack: 97.5 },
        { label: '3bet（SBが3bet、BTNコール）', pot: 21, stack: 90 },
      ],
      caption: 'SRPのSPRは約18、3betポットは約4。',
    },
    {
      t: 'p',
      text: 'SPRが4前後なので、トップペアでもスタックを入れやすくなります。「強い手がどちらに多いか」が重要です。',
    },
    { t: 'h', text: '3betした側の強み' },
    {
      t: 'p',
      text: '3betした側（SB）は、AA、KK、QQ、AKなどを多く持ちます。コーラー（BTN）は、3betしなかった手をコールしています。',
    },
    {
      t: 'combos',
      groups: [
        { label: '3betの代表', hands: ['AA', 'KK', 'QQ', 'AK'] },
        { label: 'コールの代表', hands: ['JJ', 'TT', '99', 'AQs', 'KQs', 'JTs'] },
      ],
      caption: '3betする側は強いペアとAKが中心、コーラーは中くらいのペアとスーテッドが中心。',
    },
    {
      t: 'p',
      text: 'A-high、K-high、Q-highのボードでは、3betした側にレンジアドバンテージとナッツアドバンテージの両方が出ます。小さなベットを高頻度で打てます。',
    },
    { t: 'h', text: '低いボードでの変化' },
    {
      t: 'p',
      text: '6♥5♦4♣ のような低くつながったボードでは、3betした側のオーバーペアは強いままです。ただしコーラーのスーテッドコネクターが当たりやすくなります。',
    },
    {
      t: 'compare',
      left: {
        title: 'A♠K♦4♣（高いボード）',
        board: ['As', 'Kd', '4c'],
        points: ['3betした側が大幅に有利', '小さなベットを高頻度で', 'コーラーはほぼコール'],
        verdict: 'good',
      },
      right: {
        title: '6♥5♦4♣（低いボード）',
        board: ['6h', '5d', '4c'],
        points: ['3betした側のオーバーペアは強い', 'コーラーにコネクターが多い', 'ベット頻度を落とす'],
        verdict: 'neutral',
      },
      caption: '3betポットでも、高いボードは3bet側、低いボードは拮抗する。',
    },
    {
      t: 'tip',
      text: '3betポットは、強いペアを持つ側がCベットの頻度を高く保てます。ただしSPRが低いので、1回のミスが大きく響きます。',
    },
    {
      t: 'estimate',
      q: '上の図の3betポット（ポット21bb、スタック90bb）のSPRは約いくつ？',
      min: 0,
      max: 20,
      step: 1,
      answer: 4,
      tolerance: 2,
      explain: '90 ÷ 21 ≈ 4.3 です。SRPの約18に比べて、スタックがはるかに浅くなります。',
    },
    {
      t: 'quiz',
      q: 'このボードで有利なのは？',
      board: ['As', 'Kd', '4c'],
      options: ['コーラー', '両者互角', '必ずBB', '3betした側'],
      answer: 3,
      explain: '3betした側はAAやAKなど、ボードに強く当たる手を多く持っています。',
    },
    {
      t: 'quiz',
      q: 'このボードで、すでにストレートが完成しているのはどれ？',
      board: ['6h', '5d', '4c'],
      options: ['7♠8♠', 'A♣K♣', 'Q♥Q♦', 'T♠9♠'],
      optionCards: [['7s', '8s'], ['Ac', 'Kc'], ['Qh', 'Qd'], ['Ts', '9s']],
      answer: 0,
      explain: '4-5-6-7-8 でストレートです。スーテッドコネクターを多く持つコーラーが、オーバーペアを上回ることがあります。',
    },
    {
      t: 'quiz',
      q: '3betポットのSPRは、SRPに比べて？',
      options: ['高くなる', '低くなる', '変わらない', '無限大になる'],
      answer: 1,
      explain: '3betでポットが大きくなる分、スタックが浅くなり、SPRは低くなります。',
    },
  ],
};

export default lesson;
