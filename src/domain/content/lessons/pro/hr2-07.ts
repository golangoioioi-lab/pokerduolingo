import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-07',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。HJ で J♥T♥ をオープンし、BB だけがコール。チェックレイズを受けたドローの判断と、ナッツ完成後の取り方を見ます。' },
    {
      t: 'play',
      title: 'HJ で JTs、チェックレイズを受ける',
      hero: 'HJ',
      heroCards: ['Jh', 'Th'],
      villain: 'BB',
      villainCards: ['9h', '9c'],
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'あなたは 2.5bb でオープンし、BB だけがコールしました。' },
        {
          street: 'フロップ',
          board: ['9s', '8d', '2h'],
          pot: 14.5,
          say: 'Q か 7 でストレートのオープンエンド。BB のチェックに 2bb を打つと、BB が **7bb** にチェックレイズ。コールはあと 5bb です。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: '完成率 約32% は必要勝率 約26% を上回ります。' },
            { label: '5bb を足してコール', good: true, why: '値段が合い、当たれば BB のセットや2ペアから大きく取れます。' },
            { label: '97.5bb オールイン', good: false, why: 'セットや2ペアにしかコールされず、ドローの価値を自分から下げます。' },
          ],
        },
        {
          street: 'ターン',
          board: ['7c'],
          pot: 31.5,
          say: '7♣ で 7-8-9-T-J のナッツストレート。BB がポット 19.5bb に **12bb** ベット。',
          q: 'どうする？',
          options: [
            { label: 'コールしてリバーで考える', good: false, why: 'ボードがペアになるとセットや2ペアがフルハウスに逆転します。その前に入れておきます。' },
            { label: '34bb にレイズ', good: true, why: 'BB のセットや2ペアはレイズにもコールしやすく、今のうちにポットを大きくできます。' },
            { label: 'フォールド', good: false, why: 'ナッツを降りる理由はありません。' },
          ],
        },
        {
          street: 'リバー',
          board: ['3d'],
          pot: 87.5,
          say: '34bb にレイズし、BB がコール。3♦ でボードはペアにならず、ナッツのまま。BB はチェック。残りは 56.5bb。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: '払ってくれる手から取る機会を捨てます。' },
            { label: '25bb ベット', good: false, why: '残り 31.5bb を取る機会がなくなります。' },
            { label: '56.5bb オールイン', good: true, why: '残りはポットの約65%。ターンのレイズにコールした手はまず降りません。' },
          ],
        },
      ],
      outro: 'BB は 9♥9♣ のセットでコールし、あなたが 200.5bb を獲得。強い手でレイズしてくる相手ほど、当たったときに大きく払ってくれます。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'p', text: 'まず必要勝率とドローの完成率を比べます。ナッツ完成後は、ボードが変わる前にレイズでポットを大きくします。' },
    {
      t: 'estimate', q: 'ポット 5.5bb、あなたの 2bb に BB が 7bb にチェックレイズ。コールに必要な勝率は？',
      hand: ['Jh', 'Th'], board: ['9s', '8d', '2h'],
      min: 0, max: 100, step: 1, unit: '%', answer: 26, tolerance: 5,
      explain: 'コールすると最終ポットは 5.5 + 7 + 7 = 19.5bb。払うのは 5bb なので 5 ÷ 19.5 ≒ 26% です。',
    },
    { t: 'odds', pot: 9.5, bet: 5, equity: 32, caption: '必要勝率 約26% に対し、OESD のリバーまでの完成率は 約32%（目安）。' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 5.5, actions: ['HJ（あなた）2.5bb オープン', 'BB コール'] },
        { street: 'フロップ', board: ['9s', '8d', '2h'], pot: 5.5, actions: ['BB チェック', 'あなた 2bb ベット', 'BB 7bb にチェックレイズ', 'あなた コール'] },
        { street: 'ターン', board: ['7c'], pot: 19.5, actions: ['BB 12bb ベット', 'あなた 34bb にレイズ', 'BB コール'] },
        { street: 'リバー', board: ['3d'], pot: 87.5, actions: ['BB チェック', 'あなた 56.5bb オールイン', 'BB コール'] },
        { street: 'ショーダウン', pot: 200.5, actions: ['ストレートがセットに勝つ'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    { t: 'h', text: 'もう一度：このドローでコールできる？' },
    {
      t: 'rapid',
      q: '9♠8♦2♥ でチェックレイズを受けた（必要勝率 約26%）。リバーまでの完成率で決めると？',
      choices: ['コール', 'フォールド'],
      items: [
        { cards: ['Jh', 'Th'], board: ['9s', '8d', '2h'], answer: 0, why: 'Q か 7 のオープンエンド。8アウツで約32%です。' },
        { cards: ['Js', '7c'], board: ['9s', '8d', '2h'], answer: 1, why: 'T だけのガットショット。4アウツで約17%です。' },
        { cards: ['7d', '6d'], board: ['9s', '8d', '2h'], answer: 0, why: 'T か 5 のオープンエンド。8アウツで約32%です。' },
        { cards: ['Qh', 'Jc'], board: ['9s', '8d', '2h'], answer: 1, why: 'T だけのガットショット。約17%では足りません。' },
        { cards: ['Ts', '7s'], board: ['9s', '8d', '2h'], answer: 0, why: 'J か 6 のオープンエンドです。' },
        { cards: ['6c', '5c'], board: ['9s', '8d', '2h'], answer: 1, why: '7 だけのガットショットです。' },
        { cards: ['Ah', 'Kh'], board: ['9s', '8d', '2h'], answer: 1, why: 'オーバーカードだけでは、チェックレイズしてくる手に対して足りません。' },
        { cards: ['Tc', '7d'], board: ['9s', '8d', '2h'], answer: 0, why: 'J か 6 のオープンエンドです。' },
      ],
    },
    { t: 'tip', text: 'ドローでチェックレイズを受けたら、必要勝率と完成率を比べ、当たったときに取れる額も足して考えます。' },
  ],
};

export default lesson;
