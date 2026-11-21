import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-17',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。BB で大きなドローを持ったとき、「コールで追う」か「チェックレイズで攻める」かを比べます。' },
    {
      t: 'play',
      title: 'BB で J♣T♣',
      hero: 'BB',
      heroCards: ['Jc', 'Tc'],
      villain: 'BTN',
      steps: [
        {
          street: 'フロップ', board: ['9d', '8s', '3c'], pot: 7.5,
          say: 'BTN の 2.5bb オープンに、あなたは BB で **J♣T♣** をコール。Q か 7 でストレートの OESD です。あなたのチェックに BTN が 2bb をベット。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: '必要勝率は約21%。OESD とバックドアはそれを大きく上回ります。' },
            { label: 'コール', good: true, why: '安くコールして、ターンでドローが強くなるのを待ちます。' },
            { label: '97.5bb のオールイン', good: false, why: 'BTN のペアを降ろすためだけには大きすぎるリスクです。' },
          ],
        },
        {
          street: 'ターン', board: ['2c'], pot: 16,
          say: 'ターンは **2♣**。フラッシュドローも加わったコンボドローです。あなたのチェックに BTN が 6.5bb をベット。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: '15アウツ・約34%は必要勝率 29% を上回ります。' },
            { label: 'コール', good: false, why: '利益はありますが、相手を降ろす分の上乗せがありません。' },
            { label: '20bb にチェックレイズ', good: true, why: 'A ハイや弱いペアを降ろして今すぐ取り、コールされても約34%で当たります。' },
          ],
        },
      ],
      outro: 'BTN はフォールドし、16bb を獲得。「降ろす」と「当たる」の2つの勝ち方があるのがセミブラフです。',
    },
    { t: 'h', text: '振り返り' },
    {
      t: 'tree',
      root: 'ターン、ポット 16bb（BTN の 6.5bb 込み）。15アウツのコンボドロー（数字は目安、リバーのベットは考えない）',
      options: [
        {
          label: '20bb にチェックレイズ',
          outcomes: [
            { label: 'BTN がフォールド', prob: 0.45, value: 16 },
            { label: 'コールされ、リバーで当たる', prob: 0.19, value: 29.5 },
            { label: 'コールされ、外れる', prob: 0.36, value: -20 },
          ],
          note: 'コールされた後の当たる確率は 34%（0.55 × 0.34 ≒ 0.19）',
        },
        {
          label: 'コール',
          outcomes: [
            { label: 'リバーで当たる', prob: 0.34, value: 16 },
            { label: '外れる', prob: 0.66, value: -6.5 },
          ],
        },
        { label: 'フォールド', ev: 0 },
      ],
      caption: 'チェックレイズは約 +5.6bb、コールは約 +1.2bb。降ろせる分が上乗せされます。',
    },
    { t: 'odds', pot: 9.5, bet: 6.5, equity: 34, caption: 'コールに必要な勝率は 6.5 ÷ 22.5 ≒ 29%。15アウツの約34%はこれを上回ります。' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 5.5, actions: ['BTN 2.5bb オープン', 'BB（あなた）コール'] },
        { street: 'フロップ', board: ['9d', '8s', '3c'], pot: 5.5, actions: ['あなた チェック', 'BTN 2bb ベット', 'あなた コール'] },
        { street: 'ターン', board: ['2c'], pot: 9.5, actions: ['あなた チェック', 'BTN 6.5bb ベット', 'あなた 20bb にチェックレイズ', 'BTN フォールド'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    { t: 'h', text: 'アウツを数える' },
    {
      t: 'outs',
      q: 'ターンの J♣T♣。ストレート以上になるリバーを全部タップ',
      hand: ['Jc', 'Tc'],
      board: ['9d', '8s', '3c', '2c'],
      target: 'ストレート',
      explain: 'クラブ 9 枚と、クラブ以外の Q・7 が 6 枚で合計 15 枚。44 枚中 15 枚なので約34%です。',
    },
    {
      t: 'estimate', q: 'BTN の 6.5bb をコールするのに必要な勝率は約何%？',
      hand: ['Jc', 'Tc'], board: ['9d', '8s', '3c', '2c'],
      min: 0, max: 60, step: 1, unit: '%', answer: 29, tolerance: 6,
      explain: 'コール前のポットは 9.5 + 6.5 = 16bb。6.5 ÷ 22.5 ≒ 29% です。',
    },
    { t: 'tip', text: 'アウツが多いドローほど、チェックレイズの期待値が上がります。ガットショットのような弱いドローでは同じことはできません。' },
  ],
};

export default lesson;
