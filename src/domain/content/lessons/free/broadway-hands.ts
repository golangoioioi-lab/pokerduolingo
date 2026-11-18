import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'broadway-hands',
  blocks: [
    {
      t: 'p',
      text: 'T・J・Q・K・A の5種類を「ブロードウェイ」と呼び、KQ・KJ・QJ・AJ・AT のように2枚ともブロードウェイのハンドをブロードウェイハンドと言います。見た目は強そうですが、相手のレンジ次第で価値が大きく変わります。',
    },
    { t: 'h', text: 'ドミネートの危険' },
    {
      t: 'p',
      text: 'KJ は、AK・KQ・AJ のように1枚を共有してもう1枚で上回られる形に弱く、ともにKのトップペアなら KQ が勝ちます。',
    },
    {
      t: 'cards',
      hands: [{ label: 'あなた', cards: ['Kd', 'Jc'] }, { label: '相手', cards: ['Ks', 'Qh'] }],
      board: ['Kh', '8c', '3d'],
      caption: '同じトップペアでもキッカー負け',
    },
    {
      t: 'equity',
      players: [{ label: 'K♦J♣', cards: ['Kd', 'Jc'], pct: 26 }, { label: 'K♠Q♥', cards: ['Ks', 'Qh'], pct: 74 }],
      caption: 'プリフロップの勝率。ドミネートされた KJ は約26%です。',
    },
    {
      t: 'p',
      text: 'ドミネートされると勝率は25〜30%ほど。トップペア同士は降りにくく、大きなポットで負けやすくなります。',
    },
    {
      t: 'equity',
      players: [{ label: 'K♦J♣', cards: ['Kd', 'Jc'], pct: 14 }, { label: 'K♠Q♥', cards: ['Ks', 'Qh'], pct: 86 }],
      board: ['Kh', '8c', '3d'],
      caption: 'どちらも K のトップペアになると、KJ は約14%まで落ちます。',
    },
    { t: 'h', text: '相手のレンジで価値が変わる' },
    {
      t: 'p',
      text: 'UTGのレンジには AK・AQ・KQ が多く、KJo でコールするとドミネートされた相手に何度もぶつかります。BTNのオープンにBBで守るときは、相手のレンジが広く KJo は十分に戦えます。',
    },
    {
      t: 'combos',
      groups: [{ label: 'AK', hands: ['AK'] }],
      dead: ['Ks', 'Qh'],
      caption: 'KQ を持つと、相手の AK は12コンボです。',
    },
    {
      t: 'table',
      head: ['ハンド', 'オープンの目安'],
      rows: [
        ['AQ・AJs・KQs', 'UTGからオープン'],
        ['AJo・KQo', 'UTGでもオープンすることが多い'],
        ['KJo・QJo・ATo', 'HJ〜CO以降が中心'],
        ['KTo・QTo・JTo', 'CO〜BTNが中心'],
      ],
    },
    { t: 'p', text: 'スーテッドはオフスートよりフラッシュの可能性があるぶん、1〜2段階早いポジションからオープンできます。' },
    { t: 'range', spot: 'rfi-co', caption: 'COオープン。KJo・QJo はこのあたりから参加する' },
    { t: 'h', text: 'フロップでの考え方' },
    {
      t: 'p',
      text: 'トップペアができても、相手も似たカードを持っています。たとえば QJ で Q-7-2 のトップペアなら、UTG相手には AQ・KQ に負けている可能性を意識し、強く打ち返されたら評価を下げます。',
    },
    {
      t: 'estimate',
      q: 'あなたは KQ。相手が AK を持つコンボは何通り？',
      hand: ['Ks', 'Qh'],
      min: 0,
      max: 20,
      step: 1,
      unit: 'コンボ',
      answer: 12,
      tolerance: 0.5,
      explain: 'Kは自分が1枚持っているので残り3枚、Aは4枚。4 × 3 = 12通りです。自分のKがブロッカーになり、16通りから減っています。',
    },
    {
      t: 'quiz',
      q: 'UTGが2.5bbにオープン。COのあなたは KJo。基本の選択は？',
      hand: ['Kd', 'Jc'],
      options: ['フォールド', 'コール', 'オールイン'],
      answer: 0,
      explain: 'UTGのレンジには AK・AQ・AJ・KQ など KJ をドミネートするハンドが多く含まれます。トップペアができても負けていることが多いので、フォールドが基本です。',
    },
    {
      t: 'quiz',
      q: 'ボードは K♥ 8♣ 3♦。K を持つ2つのハンドのうち、キッカーで勝っているのはどちら？',
      board: ['Kh', '8c', '3d'],
      options: ['K♦J♣', 'K♠Q♥'],
      optionCards: [['Kd', 'Jc'], ['Ks', 'Qh']],
      answer: 1,
      explain: 'どちらもKのトップペアですが、キッカーは Q が J より上。KQ の勝ちです。',
    },
    {
      t: 'estimate',
      q: 'プリフロップで KJ は KQ に対して、何%くらい勝てる？',
      hand: ['Kd', 'Jc'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 26,
      tolerance: 8,
      explain: 'ドミネートされた KJ は約26%です。25〜30%と覚えておきます。',
    },
    { t: 'try', text: 'オープンのトレーニングでブロードウェイの境界を練習する', tab: 'train' },
  ],
};

export default lesson;
