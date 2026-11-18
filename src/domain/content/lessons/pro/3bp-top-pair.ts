import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-top-pair',
  blocks: [
    {
      t: 'p',
      text: '3betポットで最も判断が難しい手の一つがトップペアです。SRPならバリューベットして終わる手ですが、3betポットではポットが大きく、相手のレンジも強いので、どこまで進むかを慎重に決めます。',
    },
    { t: 'h', text: 'トップペアの価値はキッカーで決まる' },
    {
      t: 'p',
      text: '同じトップペアでも、キッカーで勝敗が決まります。AQやAJのようなトップペアは、AA・AK（キッカー勝ち）に負けやすい手です。',
    },
    {
      t: 'equity',
      players: [
        { label: 'AQo（トップペア）', cards: ['Ah', 'Qc'], pct: 86 },
        { label: 'AJo（トップペア・弱いキッカー）', cards: ['Ad', 'Js'], pct: 14 },
      ],
      board: ['As', '8d', '3c'],
      caption: 'A♠8♦3♣でAQoはAJoに対して約86%。弱いキッカー側は、Jを引く約3アウトに頼るだけです。',
    },
    { t: 'h', text: '3bettorのトップペア' },
    {
      t: 'p',
      text: '3bettorのAK・KQは、K♠7♦2♣でトップペアです。コーラーはAA・KKを4betに回すので、自分に勝つ手は少なめです。小さくベットして続けるのが基本です。',
    },
    {
      t: 'pot',
      steps: [
        { label: '3betポット', pot: 17.5, stack: 92 },
        { label: 'フロップ 5.8bet・コール', pot: 29.1, stack: 86.2 },
        { label: 'ターン 14.5bet・コール', pot: 58.1, stack: 71.7 },
      ],
      caption: 'ターンまで進めた時点で、リバーのSPRは約1.2。ここでトップペアは「全額を入れる」か「降りる」の分岐点になります。',
    },
    { t: 'h', text: 'レイズされたとき' },
    {
      t: 'p',
      text: 'ターン開始時のポットは29.1bb、残りは86.2bbです。BTNが14.5bbをベットし、COが全額（86.2bb）にチェックレイズしました。BTNの追加コール額は 86.2 − 14.5 = 71.7bb、コール前のポットは 29.1 + 14.5 + 86.2 = 129.8bb です。',
    },
    {
      t: 'odds',
      pot: 58.1,
      bet: 71.7,
      equity: 30,
      caption: 'コール前のポット129.8bbからコール額71.7bbを引いた58.1bbを入力。必要勝率は 71.7 ÷ 201.5 ≈ 36%。',
    },
    {
      t: 'tree',
      root: 'ターンで全額のレイズを受けた。手はトップペア（AQ）',
      options: [
        {
          label: 'コール',
          outcomes: [
            { label: '勝つ（相手がブラフ・ドロー）', prob: 0.3, value: 129.8 },
            { label: '負ける', prob: 0.7, value: -71.7 },
          ],
          note: '勝率30%だと必要勝率36%に届かない',
        },
        { label: 'フォールド', ev: 0, note: 'これ以上は失わない（すでに入れた14.5bbは戻らない）' },
      ],
      caption: '数値は例示用の単純化です。相手の全額が強い手中心でエクイティが約30%なら、トップペアでも降ります。',
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 17.5, actions: ['COが2.5bbオープン', 'BTN（A♥Q♣）が8bbに3bet', 'COがコール'] },
        { street: 'フロップ', board: ['As', '8d', '3c'], pot: 17.5, actions: ['COがチェック', 'BTN：5.8bbをc-bet', 'COがコール'] },
        { street: 'ターン', board: ['7h'], pot: 29.1, actions: ['COがチェック', 'BTN：14.5bbをベット', 'COが86.2bbにチェックレイズ（全額）'] },
      ],
      caption: 'COのチェックレイズ全額は、セットやツーペアなど強い手に偏ります。',
    },
    {
      t: 'quiz',
      q: 'あなたは3bettorのBTNでA♥Q♣。COがチェックしました。最も適した方針は？',
      options: ['小さくバリューベット', '全額をすぐに入れる', '必ずチェック', '必ずフォールド'],
      hand: ['Ah', 'Qc'],
      board: ['As', '8d', '3c'],
      answer: 0,
      explain: 'AQは強いキッカーのトップペアで、バリューが取れる手です。ただしSPRを意識して、小さく打って様子を見ます。',
    },
    {
      t: 'estimate',
      q: 'AQoはAJoに対して、A♠8♦3♣でおよそ何%勝ちますか？',
      min: 50,
      max: 100,
      step: 1,
      unit: '%',
      answer: 86,
      tolerance: 8,
      hand: ['Ah', 'Qc'],
      board: ['As', '8d', '3c'],
      explain: 'どちらもAのペアで、勝敗はキッカーで決まります。AJoが勝つのはJを引く3枚だけなので、AQoは約86%です。',
    },
    {
      t: 'estimate',
      q: 'ポット129.8bbで71.7bbの全額コールを迫られました。必要勝率は？',
      min: 0,
      max: 70,
      step: 1,
      unit: '%',
      answer: 36,
      tolerance: 6,
      hand: ['Ah', 'Qc'],
      board: ['As', '8d', '3c', '7h'],
      explain: '71.7 ÷ (129.8 + 71.7) = 71.7 ÷ 201.5 ≈ 36% です。相手の全額が強い手に偏るなら、この数字に届かないことも多くなります。',
    },
    {
      t: 'quiz',
      q: 'A♠8♦3♣。キッカーで強いのは、どちらのトップペア？',
      options: ['A♥Q♣', 'A♦J♠'],
      optionCards: [['Ah', 'Qc'], ['Ad', 'Js']],
      board: ['As', '8d', '3c'],
      answer: 0,
      explain: 'どちらもAのペアなので、キッカーのQとJで決まります。AQoが勝ち、AJoはJを引く3枚だけが頼りです。',
    },
  ],
};

export default lesson;
