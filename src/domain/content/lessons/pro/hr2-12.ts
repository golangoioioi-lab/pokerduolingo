import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-12',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。オープンとコールの後の 3ベット（**スクイーズ**）で入ったポットを、最後まで打ち切れるかを見ます。' },
    {
      t: 'play',
      title: 'BTN で A♦Q♦',
      hero: 'BTN',
      heroCards: ['Ad', 'Qd'],
      villain: 'CO',
      villainCards: ['Kh', 'Qh'],
      steps: [
        {
          street: 'プリフロップ', pot: 6.5,
          say: 'HJ が 2.5bb にオープンし、CO がコール。あなたは BTN で **A♦Q♦**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'AQs は HJ と CO の両方に有利です。' },
            { label: 'コール', good: false, why: '4人でフロップに行くと、AQs の有利さが薄まります。' },
            { label: '11bb にスクイーズ', good: true, why: 'CO の上限は抑えられ、HJ も2人を相手に降りやすい場面です。' },
          ],
        },
        {
          street: 'フロップ', board: ['Qc', '8s', '3d'], pot: 26,
          say: 'HJ はフォールド、CO がコール。トップペア・トップキッカーで、CO はチェック。残りは 89bb。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: '弱い Q やポケットペアから取る機会を逃します。' },
            { label: '8bb（約3分の1）をベット', good: true, why: '乾いたボードなので小さく打ち、JJ・TT や KQ・QJ にもコールさせます。' },
            { label: '20bb（約4分の3）をベット', good: false, why: '守るドローがほとんどなく、弱い手を降ろすだけです。' },
          ],
        },
        {
          street: 'ターン', board: ['5h'], pot: 42,
          say: 'CO がコール。ターンは **5♥**、CO はまたチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: '負けている手から取る機会を1回失います。' },
            { label: '28bb（約3分の2）をベット', good: true, why: 'リバーで残りを全部入れられる大きさにポットを育てます。' },
          ],
        },
        {
          street: 'リバー', board: ['Js'], pot: 98,
          say: 'CO がコール。リバーは **J♠** で、CO はチェック。残りは 53bb、ポットの約半分です。',
          q: 'どうする？',
          options: [
            { label: 'チェック（QJ と JJ が怖い）', good: false, why: 'QJ・JJ はわずかなコンボで、負けている KQ・QT・TT がまだ多く残っています。' },
            { label: '53bb のオールイン', good: true, why: 'SPR 1 未満のトップペア・トップキッカーは全額を入れる手です。' },
          ],
        },
      ],
      outro: 'スクイーズポットは最初から浅く、トップペアで3回打てば全額に届きます。',
    },
    { t: 'h', text: '振り返り' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 26, actions: ['HJ 2.5bb オープン', 'CO コール', 'BTN（あなた）11bb にスクイーズ', 'HJ フォールド、CO コール'] },
        { street: 'フロップ', board: ['Qc', '8s', '3d'], pot: 26, actions: ['CO チェック', 'あなた 8bb ベット', 'CO コール'] },
        { street: 'ターン', board: ['5h'], pot: 42, actions: ['CO チェック', 'あなた 28bb ベット', 'CO コール'] },
        { street: 'リバー', board: ['Js'], pot: 98, actions: ['CO チェック', 'あなた 53bb オールイン', 'CO コール'] },
        { street: 'ショーダウン', pot: 204, actions: ['AQ が KQ にキッカーで勝つ'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。降りた HJ の 2.5bb もポットに残ります。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 26, stack: 89 },
        { label: 'ターン開始', pot: 42, stack: 81 },
        { label: 'リバー開始', pot: 98, stack: 53 },
      ],
      caption: 'SPR は 3.4 → 1.9 → 0.5。小さいベットから始めても全額に届きます。',
    },
    {
      t: 'estimate', q: 'フロップ開始時の SPR（残りスタック ÷ ポット）は？',
      hand: ['Ad', 'Qd'], board: ['Qc', '8s', '3d'],
      min: 0, max: 10, step: 0.5, answer: 3.5, tolerance: 1,
      explain: '89 ÷ 26 ≒ 3.4。通常の 3ベットポットより浅い数字です。',
    },
    { t: 'h', text: 'リバーで全額を入れる手は？' },
    {
      t: 'rapid',
      q: '同じリバー（ポット 98bb・残り 53bb）。CO がチェック。この手ならどうする？',
      choices: ['オールイン', 'チェック'],
      items: [
        { cards: ['As', 'Qh'], board: ['Qc', '8s', '3d', '5h', 'Js'], answer: 0, why: 'トップペア・トップキッカー。SPR 0.5 なら全額です。' },
        { cards: ['8h', '8c'], board: ['Qc', '8s', '3d', '5h', 'Js'], answer: 0, why: 'セットは迷わず全額です。' },
        { cards: ['Th', 'Tc'], board: ['Qc', '8s', '3d', '5h', 'Js'], answer: 1, why: '負けている手は降り、勝っている手だけがコールします。' },
        { cards: ['Qh', 'Jh'], board: ['Qc', '8s', '3d', '5h', 'Js'], answer: 0, why: 'ツーペア。KQ や Q9 からも払ってもらえます。' },
        { cards: ['9h', '9c'], board: ['Qc', '8s', '3d', '5h', 'Js'], answer: 1, why: 'Q の下のペアは、ショーダウンで勝てる相手を狙います。' },
        { cards: ['Kd', 'Qs'], board: ['Qc', '8s', '3d', '5h', 'Js'], answer: 0, why: 'K キッカーでも、QT・Q9 や TT・99 から払ってもらえます。' },
      ],
    },
    { t: 'tip', text: 'スクイーズポットはデッドマネーの分だけ SPR が小さくなります。トップペア以上なら、最初から全額を入れる前提でサイズを組みます。' },
  ],
};

export default lesson;
