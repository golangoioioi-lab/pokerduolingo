import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-spr-basics',
  blocks: [
    {
      t: 'p',
      text: '3betポットは、オープンに3betが入り、コールで終わったポットです。SRPよりポットが大きく、残りスタックが少ないので、フロップ以降の戦い方が変わります。その中心になるのが**SPR**（Stack-to-Pot Ratio）です。',
    },
    { t: 'h', text: 'SPRとは' },
    {
      t: 'formula',
      text: 'SPR = 有効スタック ÷ フロップ開始時のポット',
      note: '有効スタックは、フロップ時点で残っている自分と相手のうち小さいほうの額です。',
    },
    { t: 'p', text: 'SPRが小さいほど、少ないベットで全額が入ります。全額を入れる手の強さは、ポットの大きさではなくSPRで決まります。' },
    {
      t: 'pot',
      steps: [
        { label: 'SRP（BTN対BB）', pot: 5.5, stack: 97.5 },
        { label: '3betポット（CO対BTN）', pot: 17.5, stack: 92 },
        { label: '4betポット（CO対BTN）', pot: 41.5, stack: 80 },
      ],
      caption: 'SPRはSRPが約17.7、3betポットが約5.3、4betポットが約1.9。進むほど「あと一押し」の状態になります。',
    },
    { t: 'h', text: 'SPRで変わること' },
    {
      t: 'compare',
      left: {
        title: 'SRP（SPR 約18）',
        points: ['全額を入れるには3ストリートの大きなベットが必要', 'トップペアでは全額を入れにくい', 'ドローやインプライドオッズに価値がある'],
        verdict: 'neutral',
      },
      right: {
        title: '3betポット（SPR 約5）',
        points: ['フロップとターンのベットで全額に近づく', 'トップペアやオーバーペアで全額を入れやすい', 'インプライドオッズの価値は下がる'],
        verdict: 'good',
      },
    },
    { t: 'h', text: '例：3betポットの流れ' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 17.5, actions: ['COが2.5bbオープン', 'BTNが8bbに3bet', 'COがコール（ブラインドは降り）'] },
        { street: 'フロップ', board: ['Ks', '7d', '2c'], pot: 17.5, actions: ['COがチェック', 'BTN：5.8bbをc-bet', 'COがコール'] },
        { street: 'ターン', board: ['4h'], pot: 29.1, actions: ['COがチェック', 'BTN：残り86.2bbで次の判断'] },
      ],
      caption: 'フロップで約33%を打つだけで、SPRは約5.3から約3まで下がります。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: '3betポットはSPRが小さく、強いペアで全額を入れる場面が増えます。プリフロップの時点で「このポットでどこまで戦うか」を意識しておきましょう。',
    },
    {
      t: 'estimate',
      q: 'フロップ開始時のポットは17.5bb、有効スタックは92bbです。SPRはいくつ？',
      min: 0,
      max: 20,
      step: 0.5,
      answer: 5.3,
      tolerance: 1,
      explain: '92 ÷ 17.5 ≈ 5.26 なので約5.3です。',
    },
    {
      t: 'estimate',
      q: 'フロップで5.8bbのc-betがコールされ、ポットは29.1bb、残りは86.2bbです。SPRはいくつ？',
      min: 0,
      max: 10,
      step: 0.5,
      answer: 3,
      tolerance: 1,
      board: ['Ks', '7d', '2c'],
      explain: '86.2 ÷ 29.1 ≈ 2.96 なので約3.0です。',
    },
    {
      t: 'quiz',
      q: 'SPR約3のポット。全額を入れやすいのはどちらの手？',
      options: ['A♥K♦（トップペア・強いキッカー）', '9♣8♣（ペアなし）'],
      optionCards: [['Ah', 'Kd'], ['9c', '8c']],
      board: ['Ks', '7d', '2c'],
      answer: 0,
      explain: 'ポットに対して残りスタックが少ないので、トップペアでも全額を入れることになりやすくなります。ペアなしの手は、全額を入れる理由がありません。',
    },
    {
      t: 'quiz',
      q: 'SPRが小さくなると起こることは？',
      options: ['トップペアやオーバーペアで全額を入れやすくなる', 'ドローの価値が必ず上がる', 'ブラフが必ず通る', 'チェックしかできなくなる'],
      answer: 0,
      explain: 'ポットに対して残りスタックが少ないので、強いペアでも全額を入れることになりやすくなります。',
    },
  ],
};

export default lesson;
