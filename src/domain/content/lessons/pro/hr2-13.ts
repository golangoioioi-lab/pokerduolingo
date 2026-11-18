import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-13',
  blocks: [
    { t: 'p', text: '6人卓・全員 100bb。あなたは UTG で J♠ J♥ を持って 2.5bb にオープン。HJ と BB がコールし、3人でフロップへ進みます。JJ はオーバーカードが落ちると難しく、相手が2人いればなおさらです。' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', hero: true, action: '2.5bb オープン', bet: 2.5, cards: ['Js', 'Jh'] },
        { pos: 'HJ', action: 'コール', bet: 2.5 },
        { pos: 'CO', action: 'フォールド', folded: true },
        { pos: 'BTN', action: 'フォールド', folded: true },
        { pos: 'SB', action: 'フォールド', bet: 0.5, folded: true },
        { pos: 'BB', action: 'コール', bet: 2.5 },
      ],
      pot: 8,
      caption: 'ポストフロップでは BB の次、HJ の前に行動します。',
    },
    { t: 'h', text: 'フロップ：A♦ K♠ 7♣' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['Js', 'Jh'] }], board: ['Ad', 'Ks', '7c'], caption: 'オーバーカードが2枚。JJ はもうトップペアではありません。' },
    { t: 'p', text: 'ポットは 8bb、残りは 97.5bb。BB がチェックしました。HJ・BB どちらのレンジにも A や K を含む手が多く、どちらかが当たっている確率は高いです。' },
    {
      t: 'quiz', q: 'あなたの選択は？',
      hand: ['Js', 'Jh'], board: ['Ad', 'Ks', '7c'],
      options: ['3bb（約3分の1）でベット', '6bb（約4分の3）でベット', 'チェック'],
      answer: 2,
      explain: 'ベットしてコールされるのは A・K を持つ手ばかりで、JJ より弱い手は降りるだけです。2人同時に降ろすブラフも難しく、バリューにもなりません。ポットを小さく保ちます。',
    },
    { t: 'p', text: 'あなたはチェック。HJ が 5bb（約63%）をベットし、BB がコールしました。' },
    {
      t: 'estimate', q: 'あなたがコールするのに必要な勝率は約何%？',
      hand: ['Js', 'Jh'], board: ['Ad', 'Ks', '7c'],
      min: 0, max: 60, step: 1, unit: '%', answer: 22, tolerance: 5,
      explain: 'コールするとポットは 8 + 5 + 5 + 5 = 23bb。払うのは 5bb なので 5 ÷ 23 ≒ 22% です。BB のコールでポットが膨らんだ分、1対1より必要勝率は低くなっています。',
    },
    { t: 'odds', pot: 13, bet: 5, equity: 10, caption: 'ベット前のポットは、8bb に BB のコール 5bb を足した 13bb。JJ の勝率は目安で 10% 前後です。' },
    {
      t: 'quiz', q: 'あなたの選択は？',
      hand: ['Js', 'Jh'], board: ['Ad', 'Ks', '7c'],
      options: ['コール（オッズがよい）', 'フォールド', '18bb にチェックレイズ'],
      answer: 1,
      explain: '2人とも A か K、あるいはドローを持っている可能性が高い状況です。JJ が改善するのは残り2枚の J だけで、勝率は 22% に届きません。チェックレイズで降ろせる手も残っていません。',
    },
    { t: 'p', text: 'あなたはフォールド。失ったのはプリフロップの 2.5bb だけです。' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 8, actions: ['UTG（あなた）2.5bb オープン', 'HJ コール', 'BB コール'] },
        { street: 'フロップ', board: ['Ad', 'Ks', '7c'], pot: 8, actions: ['BB チェック', 'あなた チェック', 'HJ 5bb ベット', 'BB コール', 'あなた フォールド'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、フロップは開始時の額です。',
    },
    {
      t: 'compare',
      left: { title: 'ヘッズアップ（1人）', cards: ['Js', 'Jh'], board: ['Ad', 'Ks', '7c'], points: ['相手が A も K も持たないことは珍しくない', '小さいベットやチェックコールで粘れる'], verdict: 'neutral' },
      right: { title: 'マルチウェイ（2人）', cards: ['Js', 'Jh'], board: ['Ad', 'Ks', '7c'], points: ['どちらかが A か K を持つ確率が高い', 'ベットとコールが入ったら JJ はほぼ負け'], verdict: 'bad' },
      caption: '同じ JJ・同じボードでも、相手の人数で価値が大きく変わります。',
    },
    { t: 'tip', text: 'マルチウェイでオーバーカードが2枚落ち、ベットとコールが入ったら、JJ はほとんど価値が残っていません。2.5bb の損で済ませられれば十分です。' },
  ],
};

export default lesson;
