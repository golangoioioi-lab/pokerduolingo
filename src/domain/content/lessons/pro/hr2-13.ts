import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-13',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。UTG の JJ に2人がコールし、オーバーカードが2枚落ちた場面です。' },
    {
      t: 'play',
      title: 'UTG で J♠J♥',
      hero: 'UTG',
      heroCards: ['Js', 'Jh'],
      villain: 'HJ',
      steps: [
        { street: 'プリフロップ', pot: 8, say: 'あなたは UTG で **J♠J♥** を 2.5bb にオープン。HJ と BB がコールし、3人でフロップへ。' },
        {
          street: 'フロップ', board: ['Ad', 'Ks', '7c'], pot: 8,
          say: 'オーバーカードが2枚。BB がチェックし、あなたの番です。HJ はあなたの後に行動します。',
          q: 'どうする？',
          options: [
            { label: '3bb（約3分の1）でベット', good: false, why: 'コールするのは A・K を持つ手ばかりで、弱い手は降りるだけです。' },
            { label: '6bb（約4分の3）でベット', good: false, why: '2人同時に降ろすブラフは難しく、バリューにもなりません。' },
            { label: 'チェック', good: true, why: 'どちらかが A か K を持つ確率が高く、ポットを小さく保ちます。' },
          ],
        },
        {
          street: 'フロップ', pot: 18,
          say: 'HJ が 5bb をベットし、BB がコール。あなたが払うのは 5bb です。',
          q: 'どうする？',
          options: [
            { label: 'コール（オッズがよい）', good: false, why: '必要勝率は約22%。JJ が改善するのは残り2枚の J だけで、届きません。' },
            { label: 'フォールド', good: true, why: 'ベットとコールが入ったマルチウェイでは、JJ はほぼ負けています。' },
            { label: '18bb にチェックレイズ', good: false, why: '2人とも当たっている可能性が高く、降ろせる手が残っていません。' },
          ],
        },
      ],
      outro: '失ったのはプリフロップの 2.5bb だけ。これで済ませられれば十分です。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'odds', pot: 13, bet: 5, equity: 10, caption: 'ベット前のポットは 8bb ＋ BB のコール 5bb ＝ 13bb。JJ の勝率は目安で 10% 前後です。' },
    {
      t: 'estimate', q: 'あなたがコールするのに必要な勝率は約何%？',
      hand: ['Js', 'Jh'], board: ['Ad', 'Ks', '7c'],
      min: 0, max: 60, step: 1, unit: '%', answer: 22, tolerance: 5,
      explain: 'コール後のポットは 8 + 5 + 5 + 5 = 23bb。5 ÷ 23 ≒ 22% です。1対1より低くても、勝率 10% では足りません。',
    },
    {
      t: 'compare',
      left: { title: 'ヘッズアップ（1人）', cards: ['Js', 'Jh'], board: ['Ad', 'Ks', '7c'], points: ['相手が A も K も持たないことは珍しくない', '小さいベットやチェックコールで粘れる'], verdict: 'neutral' },
      right: { title: 'マルチウェイ（2人）', cards: ['Js', 'Jh'], board: ['Ad', 'Ks', '7c'], points: ['どちらかが A か K を持つ確率が高い', 'ベットとコールが入ったら JJ はほぼ負け'], verdict: 'bad' },
      caption: '同じ JJ・同じボードでも、相手の人数で価値が大きく変わります。',
    },
    { t: 'h', text: 'この手ならどうする？' },
    {
      t: 'rapid',
      q: '同じ 3人ポット。HJ が 5bb ベット、BB がコール。あなたの手なら？',
      choices: ['コール', 'フォールド'],
      items: [
        { cards: ['Ah', 'Qh'], board: ['Ad', 'Ks', '7c'], answer: 0, why: 'トップペア・良いキッカー。ベットした手の多くに勝てます。' },
        { cards: ['7h', '7s'], board: ['Ad', 'Ks', '7c'], answer: 0, why: 'セット。ほぼすべてに勝っています。' },
        { cards: ['Qs', 'Qh'], board: ['Ad', 'Ks', '7c'], answer: 1, why: 'JJ と同じく、A も K も上にあります。' },
        { cards: ['9c', '9d'], board: ['Ad', 'Ks', '7c'], answer: 1, why: '改善は残り2枚の 9 だけです。' },
        { cards: ['Kh', 'Kd'], board: ['Ad', 'Ks', '7c'], answer: 0, why: 'K のセット。A を持つ手から大きく取れます。' },
        { cards: ['Ts', '9s'], board: ['Ad', 'Ks', '7c'], answer: 1, why: 'ペアもまともなドローもありません。' },
      ],
    },
    { t: 'tip', text: 'マルチウェイでオーバーカードが2枚落ち、ベットとコールが入ったら、JJ はほとんど価値が残っていません。' },
  ],
};

export default lesson;
