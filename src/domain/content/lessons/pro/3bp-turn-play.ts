import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-turn-play',
  blocks: [
    { t: 'h', text: 'まず直感で' },
    {
      t: 'rapid',
      q: '3betポットのターン。COがチェック。BTN（3bettor）は打つ？',
      choices: ['ベット', 'チェック'],
      items: [
        { cards: ['Ah', 'Qc'], board: ['As', '7d', '2c', 'Kh'], answer: 0 },
        { cards: ['Jh', 'Jd'], board: ['As', '7d', '2c', 'Kh'], answer: 1, why: 'AとKのボードでJJは負けやすい手。チェックで守ります。' },
        { cards: ['Ad', 'Kc'], board: ['As', '7d', '2c', 'Kh'], answer: 0, why: 'ツーペア。強い手は打ちます。' },
        { cards: ['7h', '7c'], board: ['As', '7d', '2c', 'Kh'], answer: 0 },
        { cards: ['Ac', '5c'], board: ['As', '7d', '2c', 'Kh'], answer: 1, why: 'キッカーが弱いトップペアは、チェックでポットを守ります（目安）。' },
        { cards: ['Kc', 'Qd'], board: ['As', '7d', '2c', 'Kh'], answer: 1, why: 'セカンドペアはショーダウン狙いです。' },
        { cards: ['8s', '8h'], board: ['As', '7d', '2c', 'Kh'], answer: 1, why: '打っても、より強い手にしかコールされません。' },
      ],
    },
    { t: 'h', text: 'ターンのベットはリバーの準備' },
    {
      t: 'p',
      text: 'フロップでc-betがコールされると、ターンのSPRは約3。ターンのサイズが、リバーで入る額を決めます。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 17.5, stack: 92 },
        { label: 'ターン開始（5.8bet・コール）', pot: 29.1, stack: 86.2 },
        { label: 'リバー開始（14.5bet・コール）', pot: 58.1, stack: 71.7 },
      ],
      caption: 'ターンで半ポットを打つと、リバーのSPRは約1.2になります。',
    },
    {
      t: 'table',
      head: ['ターンのサイズ', 'ベット額', 'リバーのSPR'],
      rows: [
        ['約33%', '9.6bb', '約1.6'],
        ['約50%', '14.5bb', '約1.2'],
        ['約75%', '21.8bb', '約0.9'],
      ],
    },
    {
      t: 'p',
      text: '強い手は中サイズで打ち、リバーで全額を入れやすくします。ブラフも同じサイズで打ちます。中程度の手はチェックします。',
    },
    {
      t: 'odds',
      pot: 29.1,
      bet: 14.5,
      equity: 30,
      caption: 'ターンで半ポット（14.5bb）を受けたときの必要勝率は25%です。',
    },
    {
      t: 'estimate',
      q: 'ターンでポット29.1bbに14.5bbのベットを受けました。必要勝率は？',
      min: 0,
      max: 60,
      step: 1,
      unit: '%',
      answer: 25,
      tolerance: 5,
      explain: '14.5 ÷ (29.1 + 29) ≈ 25% です。',
    },
    { t: 'h', text: '1ハンドで体験' },
    {
      t: 'play',
      title: 'AQでターンとリバーを打つ',
      hero: 'BTN',
      heroCards: ['Ah', 'Qc'],
      villain: 'CO',
      villainCards: ['Ad', 'Td'],
      steps: [
        {
          street: 'フロップ',
          board: ['As', '7d', '2c'],
          pot: 17.5,
          say: 'COのオープンに8bbで3betし、COがコール。COはチェック。',
          q: 'どうする？',
          options: [
            { label: '5.8bb（約33%）をベット', good: true, why: 'Aハイのドライなボード。小さく打ちます。' },
            { label: 'チェック', good: false, why: 'トップペア・強いキッカーでバリューを逃します。' },
          ],
        },
        {
          street: 'ターン',
          board: ['Kh'],
          pot: 29.1,
          say: 'COがコール。COはチェック。SPR 約3。',
          q: 'どうする？',
          options: [
            { label: '14.5bb（半ポット）をベット', good: true, why: 'AJやATから払ってもらい、リバーで全額を入れやすくします。' },
            { label: 'チェック', good: false, why: '払ってもらえる手が多いので、打つほうが得です。' },
            { label: '86.2bbオールイン', good: false, why: '負けている手が降りてしまいます。' },
          ],
        },
        {
          street: 'リバー',
          board: ['4s'],
          pot: 58.1,
          say: 'COがコール。残り71.7bb。COはチェック。',
          q: 'どうする？',
          options: [
            { label: '約36bbをベット', good: true, why: 'Axの弱いキッカーから払ってもらえるサイズです。' },
            { label: 'チェック', good: false, why: '最後の1回のバリューを逃します。' },
          ],
        },
      ],
      outro: 'COはATで3回払いました。ターンを中サイズで打つと、リバーで自然に大きく取れます。',
    },
  ],
};

export default lesson;
