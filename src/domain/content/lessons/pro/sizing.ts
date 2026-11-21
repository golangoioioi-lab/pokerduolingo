import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'sizing',
  blocks: [
    { t: 'h', text: 'まず選んでみる' },
    {
      t: 'rapid',
      q: 'BTN オープン、BB コール。BTN が Cベットするなら、小さく？大きく？',
      choices: ['小（約1/3）', '大（2/3以上）'],
      items: [
        { text: 'フロップ', board: ['Ks', '7d', '2c'], answer: 0, why: 'ドライで BTN が有利。小さく広く打ちます。' },
        { text: 'フロップ', board: ['9s', '8s', '6d'], answer: 1, why: 'ドローが多いので、値段を付けます。' },
        { text: 'フロップ', board: ['Ac', 'Kd', '5c'], answer: 0 },
        { text: 'フロップ', board: ['Kc', 'Kd', '5h'], answer: 0 },
        { text: 'フロップ', board: ['8h', '7h', '6d'], answer: 1 },
        { text: 'フロップ', board: ['Ah', '7c', '2d'], answer: 0 },
        { text: 'フロップ', board: ['Js', 'Ts', '4h'], answer: 1, why: 'ストレートとフラッシュのドローが多いボードです。' },
      ],
    },
    { t: 'p', text: 'サイズは「どんな手で打っているか（自分のレンジの形）」と「相手のレンジ」で決めます。' },
    { t: 'h', text: 'ポラライズは大きく、マージは小さく' },
    {
      t: 'compare',
      left: { title: 'ポラライズ（二極化）', points: ['とても強い手とブラフで打つ', '中間の手はチェック', '大きいサイズ'], verdict: 'neutral' },
      right: { title: 'マージ（統合）', points: ['強い手から中くらいの手まで広く打つ', '弱い手からも少しずつ取る', '小さいサイズ'], verdict: 'neutral' },
    },
    { t: 'p', text: '相手が最強の手を持っていない（**キャップ**されている）とき、ナッツを持てる側はオーバーベットで圧力をかけられます。' },
    {
      t: 'quiz',
      q: '「ナッツ級の手」と「ブラフ」で打ち、中くらいの手はチェック。合うサイズは？',
      options: ['小さいサイズ', '大きいサイズ', 'サイズは関係ない'],
      answer: 1,
      explain: '強い手で最大限取り、ブラフでは相手の中くらいの手を降ろせるからです。',
    },
    { t: 'h', text: '3回でオールインにする' },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 20, stack: 90 },
        { label: 'ターン開始（2/3ベット後）', pot: 46.7, stack: 76.7 },
        { label: 'リバー開始（2/3ベット後）', pot: 108.9, stack: 45.6 },
      ],
      caption: '3betポットの例。同じ割合で打ち続けると、リバーで自然にオールインできます（ジオメトリックサイズ）。',
    },
    {
      t: 'estimate',
      q: 'フロップのポットが 20bb。ポットの 2/3 をベットすると何 bb？',
      min: 0,
      max: 40,
      step: 0.5,
      unit: 'bb',
      answer: 13.3,
      tolerance: 3,
      explain: '20 × 2/3 ≈ 13.3bb。コールされるとポットは約 46.7bb になります。',
    },
    { t: 'h', text: 'もう一度：トップセットで取り切る' },
    {
      t: 'play',
      title: 'BTN の KK、ドローのあるボード',
      hero: 'BTN',
      heroCards: ['Kc', 'Kd'],
      villain: 'BB',
      villainCards: ['Ks', 'Qs'],
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'あなたは BTN で **K♣K♦** を 2.5bb オープン。BB がコール。' },
        {
          street: 'フロップ',
          board: ['Kh', '9s', '4s'],
          pot: 5.5,
          say: 'フロップは **K♥9♠4♠**。トップセット。BB はチェック。',
          q: 'どのサイズで打つ？',
          options: [
            { label: 'チェック', good: false, why: 'フラッシュドローに無料でカードを見せてしまいます。' },
            { label: '1.8bb（1/3）', good: false, why: '悪くはありませんが、ドローの多いボードでは安すぎます（接戦）。' },
            { label: '3.5bb（2/3）', good: true, why: 'ドローと K から、しっかり払ってもらいます。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2d'],
          pot: 12.5,
          say: 'BB がコール。ターンは **2♦**。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'ポットを大きくする機会を逃します。' },
            { label: '8.5bb（2/3）', good: true, why: '同じ割合で打ち続け、リバーで大きく取れる形にします。' },
          ],
        },
        {
          street: 'リバー',
          board: ['7c'],
          pot: 29.5,
          say: 'BB がコール。リバーは **7♣**。フラッシュは完成せず。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: '20bb（2/3）', good: true, why: 'トップペアなら払える額です。' },
            { label: 'オールイン（85.5bb）', good: false, why: 'ポットの約3倍。トップペアでも降りやすくなります。' },
            { label: 'チェック', good: false, why: '取れる額を大きく逃します。' },
          ],
        },
      ],
      outro: '強い手は、ストリートごとに同じ割合で打つとポットが大きく育ちます。',
    },
  ],
};

export default lesson;
