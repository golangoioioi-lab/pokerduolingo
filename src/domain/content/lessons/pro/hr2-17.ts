import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-17',
  blocks: [
    { t: 'p', text: '6人卓・全員 100bb。BTN が 2.5bb にオープンし、あなたは BB で J♣ T♣ をコールします。テーマは、大きなドローを「コールで追う」か「チェックレイズで攻める」かを、期待値で比べることです。' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: 'フォールド', folded: true },
        { pos: 'HJ', action: 'フォールド', folded: true },
        { pos: 'CO', action: 'フォールド', folded: true },
        { pos: 'BTN', action: '2.5bb オープン', bet: 2.5 },
        { pos: 'SB', action: 'フォールド', bet: 0.5, folded: true },
        { pos: 'BB', hero: true, action: 'コール', bet: 2.5, cards: ['Jc', 'Tc'] },
      ],
      pot: 5.5,
    },
    { t: 'h', text: 'フロップ：9♦ 8♠ 3♣' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['Jc', 'Tc'] }], board: ['9d', '8s', '3c'], caption: 'Q か 7 でストレートになる OESD に、クラブのバックドアフラッシュドロー。' },
    { t: 'p', text: 'ポットは 5.5bb、残りは 97.5bb。あなたがチェックし、BTN が 2bb（約36%）をベットしました。' },
    {
      t: 'quiz', q: 'あなたの選択は？',
      hand: ['Jc', 'Tc'], board: ['9d', '8s', '3c'],
      options: ['フォールド', 'コール', '97.5bb のオールイン'],
      answer: 1,
      explain: '必要勝率は 2 ÷（5.5 + 2 + 2）≒ 21%。OESD とバックドアのある JT はそれを大きく上回ります。オールインは BTN のペアを降ろすためだけに大きすぎるリスクです。安くコールして、ターンでドローが強くなるのを待ちます。',
    },
    { t: 'p', text: 'あなたはコール。ポットは 9.5bb、残りは 95.5bb です。ターンは 2♣ で、クラブが2枚に。フラッシュドローと OESD の両方を持つコンボドローになりました。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['Jc', 'Tc'] }], board: ['9d', '8s', '3c', '2c'] },
    {
      t: 'estimate', q: 'このコンボドローのアウツは何枚？',
      hand: ['Jc', 'Tc'], board: ['9d', '8s', '3c', '2c'],
      min: 0, max: 20, step: 1, unit: '枚', answer: 15, tolerance: 2,
      explain: 'クラブは残り 13 − 4 = 9 枚。ストレートの Q と 7 は 8 枚ですが、Q♣・7♣ はクラブで数えたので追加は 6 枚。合計 9 + 6 = 15 枚です。見えていない 44 枚のうち 15 枚なので、リバーで当たる確率は約 34% です。',
    },
    { t: 'p', text: 'あなたはチェック。BTN が 6.5bb（約68%）をベットしてきました。' },
    {
      t: 'estimate', q: 'BTN の 6.5bb をコールするのに必要な勝率は約何%？',
      hand: ['Jc', 'Tc'], board: ['9d', '8s', '3c', '2c'],
      min: 0, max: 60, step: 1, unit: '%', answer: 29, tolerance: 6,
      explain: 'コール前のポットは 9.5 + 6.5 = 16bb。払うのは 6.5bb なので 6.5 ÷ 22.5 ≒ 29% です。15アウツの勝率（約34%）はこれを上回ります。',
    },
    {
      t: 'quiz', q: 'あなたの選択は？',
      hand: ['Jc', 'Tc'], board: ['9d', '8s', '3c', '2c'],
      options: ['フォールド', 'コール', '20bb にチェックレイズ'],
      answer: 2,
      explain: 'チェックレイズなら、BTN の A ハイや弱いペア、外れたドローを降ろして今のポットをすぐ取れます。コールされても約 34% で当たり、大きくなったポットを取れます。コールでも利益はありますが、「降ろせる分」が上乗せされるチェックレイズの方が期待値は高くなります。',
    },
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
    { t: 'p', text: 'あなたは 20bb にチェックレイズ。BTN はフォールドし、あなたがポット 16bb を獲得しました。' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 5.5, actions: ['BTN 2.5bb オープン', 'BB（あなた）コール'] },
        { street: 'フロップ', board: ['9d', '8s', '3c'], pot: 5.5, actions: ['あなた チェック', 'BTN 2bb ベット', 'あなた コール'] },
        { street: 'ターン', board: ['2c'], pot: 9.5, actions: ['あなた チェック', 'BTN 6.5bb ベット', 'あなた 20bb にチェックレイズ', 'BTN フォールド'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    { t: 'tip', text: 'セミブラフは「降ろせる」と「当たる」の2つの勝ち方を持つベットです。アウツが多いドローほどレイズの期待値が上がります。ガットショットなど弱いドローでは同じことはできません。' },
  ],
};

export default lesson;
