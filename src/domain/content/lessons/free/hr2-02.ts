import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-02',
  blocks: [
    { t: 'p', text: '6人卓・全員 100bb。BTN が 2.5bb にオープンし、あなたは BB で K♣ T♣ をコールしました。テーマは「ターンのチェックから、リバーのベットの中身を読む」ことです。' },
    { t: 'cards', hands: [{ label: 'あなた（BB）', cards: ['Kc', 'Tc'] }] },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: 'フォールド', folded: true },
        { pos: 'HJ', action: 'フォールド', folded: true },
        { pos: 'CO', action: 'フォールド', folded: true },
        { pos: 'BTN', action: '2.5bb オープン', bet: 2.5 },
        { pos: 'SB', action: 'フォールド', bet: 0.5, folded: true },
        { pos: 'BB', hero: true, action: 'コール', bet: 2.5, cards: ['Kc', 'Tc'] },
      ],
      pot: 5.5,
      caption: 'BTN のスチールに BB がディフェンス。BTN のレンジはとても広いです。',
    },
    { t: 'h', text: 'フロップ：T♦ 7♠ 3♥' },
    { t: 'p', text: 'ポットは 5.5bb。あなたはチェックし、BTN が 2bb をベットしました。' },
    {
      t: 'quiz', q: 'BTN の 2bb に対して、あなたの選択は？',
      hand: ['Kc', 'Tc'], board: ['Td', '7s', '3h'],
      options: ['フォールド', 'コール', '8bb にチェックレイズ'],
      answer: 1,
      explain: 'チェックレイズすると BTN の弱い手は降り、残るのは AT・TT・77 などあなたを上回る手ばかりになります。コールなら BTN はブラフを続けられ、あなたはそれを捕まえられます。乾いたボードのトップペアは、コールで相手のブラフを残すのが基本です。',
    },
    { t: 'h', text: 'ターン：4♣、BTN はチェック' },
    { t: 'p', text: 'ポットは 9.5bb。あなたがチェックし、BTN もチェックで回しました。AT・TT・77 のような強い手はターンでベットすることが多いので、BTN のレンジは **弱いペアや A ハイ、外れた手が中心** になりました。これを「キャップされた」と言います。' },
    { t: 'h', text: 'リバー：A♠' },
    { t: 'p', text: 'あなたはチェック。BTN は 7bb（ポットの約74%）をベットしてきました。' },
    {
      t: 'estimate', q: '7bb のベットをコールするのに必要な勝率は？',
      hand: ['Kc', 'Tc'], board: ['Td', '7s', '3h', '4c', 'As'],
      min: 0, max: 100, step: 1, unit: '%', answer: 30, tolerance: 5,
      explain: 'コールすると最終ポットは 9.5 + 7 + 7 = 23.5bb。払うのは 7bb なので 7 ÷ 23.5 ≒ 30% です。BTN のベットの 30% 以上がブラフならコールは得です。',
    },
    { t: 'odds', pot: 9.5, bet: 7, equity: 42, caption: '必要勝率は約30%。BTN のベットレンジに対するあなたの勝率は目安で 40% 前後です。' },
    {
      t: 'quiz', q: 'あなたの選択は？',
      hand: ['Kc', 'Tc'], board: ['Td', '7s', '3h', '4c', 'As'],
      options: ['フォールド（A に負けている）', 'コール'],
      answer: 1,
      explain: 'ターンのチェックで、AT・A7 のような強い A は減っています。残っているのは弱い A と、QJ・J9・K ハイのようにショーダウンで勝てない手です。A はブラフしやすいカードなので、リバーでベットに戻る手が多くなります。ブラフが 30% を超えると考えられるので、コールします。',
    },
    { t: 'p', text: 'コールすると、BTN は Q♠ J♠。あなたが 23.5bb のポットを獲得しました。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['Kc', 'Tc'] }, { label: 'BTN', cards: ['Qs', 'Js'] }], board: ['Td', '7s', '3h', '4c', 'As'], caption: 'BTN はフロップで打ち、ターンで止まり、リバーの A でブラフに戻りました。' },
    { t: 'h', text: '振り返り' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 5.5, actions: ['BTN 2.5bb オープン', 'BB（あなた）コール'] },
        { street: 'フロップ', board: ['Td', '7s', '3h'], pot: 5.5, actions: ['あなた チェック', 'BTN 2bb ベット', 'あなた コール'] },
        { street: 'ターン', board: ['4c'], pot: 9.5, actions: ['あなた チェック', 'BTN チェック'] },
        { street: 'リバー', board: ['As'], pot: 9.5, actions: ['あなた チェック', 'BTN 7bb ベット', 'あなた コール'] },
        { street: 'ショーダウン', pot: 23.5, actions: ['T のペアが Q ハイに勝つ'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    {
      t: 'list',
      items: [
        '乾いたボードのトップペアは、コールで相手のブラフを残す',
        '相手がターンでチェックしたら、強い手が減った（キャップされた）と考える',
        'キャップされたレンジのリバーベットは、ブラフの割合が高くなりやすい',
      ],
    },
    { t: 'tip', text: '「怖いカードが落ちたから降りる」ではなく、「その前の行動で相手の強い手は減っていないか」を確認しましょう。必要勝率 30% は、10回に3回勝てば足りる数字です。' },
  ],
};

export default lesson;
