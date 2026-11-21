import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-top-pair',
  blocks: [
    { t: 'h', text: 'まず直感で' },
    {
      t: 'showdown',
      q: 'ターンで全額のチェックレイズが入り、3人のうち誰が勝つ？（例）',
      board: ['As', '8d', '3c', '7h', '2s'],
      players: [
        { label: 'あなた', cards: ['Ah', 'Qc'] },
        { label: '相手A', cards: ['Ad', 'Js'] },
        { label: '相手B', cards: ['7c', '7s'] },
      ],
      explain: 'セットの7が勝ちます。AQはAJにはキッカーで勝ちますが、全額のチェックレイズはセットのような手に偏ります。',
    },
    { t: 'h', text: 'トップペアはどこまで行くか' },
    {
      t: 'p',
      text: 'SRPならバリューベットで終わる手ですが、3betポットはポットが大きく、相手のレンジも強めです。キッカーと相手の動きで、どこまで進むかを決めます。',
    },
    {
      t: 'equity',
      players: [
        { label: 'AQo', cards: ['Ah', 'Qc'], pct: 86 },
        { label: 'AJo', cards: ['Ad', 'Js'], pct: 14 },
      ],
      board: ['As', '8d', '3c'],
      caption: 'A♠8♦3♣でAQoはAJoに約86%。弱いキッカー側はJの3枚に頼るだけです。',
    },
    {
      t: 'pot',
      steps: [
        { label: '3betポット', pot: 17.5, stack: 92 },
        { label: 'フロップ 5.8bet・コール', pot: 29.1, stack: 86.2 },
        { label: 'ターン 14.5bet・コール', pot: 58.1, stack: 71.7 },
      ],
      caption: 'ターンまで進むとリバーのSPRは約1.2。ここが「全額か、降りるか」の分岐点です。',
    },
    { t: 'h', text: 'レイズされたとき' },
    {
      t: 'p',
      text: 'ターンで14.5bbを打ち、COが全額（86.2bb）にチェックレイズ。追加のコールは71.7bb、コール前のポットは129.8bbです。',
    },
    {
      t: 'odds',
      pot: 58.1,
      bet: 71.7,
      equity: 30,
      caption: 'ポット58.1bb＋相手の71.7bb分として入力。必要勝率は約36%です。',
    },
    {
      t: 'tree',
      root: 'ターンで全額のチェックレイズ。手はAQ（トップペア）',
      options: [
        {
          label: 'コール',
          outcomes: [
            { label: '勝つ（ブラフ・ドロー）', prob: 0.3, value: 129.8 },
            { label: '負ける', prob: 0.7, value: -71.7 },
          ],
          note: '勝率30%は必要勝率36%に届かない',
        },
        { label: 'フォールド', ev: 0, note: '入れた14.5bbは戻らない' },
      ],
      caption: '例示用の単純化です。相手の全額が強い手中心なら、トップペアでも降ります。',
    },
    {
      t: 'estimate',
      q: 'ポット129.8bbで71.7bbのコールを迫られました。必要勝率は？',
      min: 0,
      max: 70,
      step: 1,
      unit: '%',
      answer: 36,
      tolerance: 6,
      hand: ['Ah', 'Qc'],
      board: ['As', '8d', '3c', '7h'],
      explain: '71.7 ÷ (129.8 + 71.7) ≈ 36% です。',
    },
    { t: 'h', text: '1ハンドで体験' },
    {
      t: 'play',
      title: 'AQのトップペアでレイズを受ける',
      hero: 'BTN',
      heroCards: ['Ah', 'Qc'],
      villain: 'CO',
      steps: [
        {
          street: 'フロップ',
          board: ['As', '8d', '3c'],
          pot: 17.5,
          say: 'COのオープンに8bbで3betし、COがコール。COはチェック。',
          q: 'トップペア・強いキッカー。どうする？',
          options: [
            { label: '5.8bb（約33%）をベット', good: true, why: 'Axの弱いキッカーや下のペアから払ってもらえます。' },
            { label: '92bbオールイン', good: false, why: '負けている手はほとんどコールしません。' },
          ],
        },
        {
          street: 'ターン',
          board: ['7h'],
          pot: 29.1,
          say: 'COがコール。COはまたチェック。',
          q: 'どうする？',
          options: [
            { label: '14.5bb（半ポット）をベット', good: true, why: 'まだAJやATなどに勝っています。バリューを続けます。' },
            { label: 'チェック', good: false, why: 'チェックも可能ですが、払ってもらえる手を逃します。' },
          ],
        },
        {
          street: 'ターン',
          pot: 129.8,
          say: 'COが86.2bbの全額にチェックレイズ。',
          q: 'コール71.7bb、必要勝率は約36%。どうする？',
          options: [
            { label: 'フォールド', good: true, why: 'フロップ・ターンとコールしてからの全額は、セットやツーペアに偏ります。' },
            { label: 'コール', good: false, why: 'ドローも混ざるので僅差ですが、多くの相手では勝率が足りません。' },
          ],
        },
      ],
      outro: 'トップペアは「打ってバリューを取る手」です。ただし、受け身の相手からの全額レイズには降りる判断も持っておきます。',
    },
  ],
};

export default lesson;
