import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-02',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。BTN のオープンを BB で K♣T♣ コールし、ターンのチェックからリバーのベットの中身を読みます。' },
    {
      t: 'play',
      title: 'BB で KT、リバーの A',
      hero: 'BB',
      heroCards: ['Kc', 'Tc'],
      villain: 'BTN',
      villainCards: ['Qs', 'Js'],
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'BTN が 2.5bb でオープンし、SB はフォールド。あなたは BB でコールしました。' },
        {
          street: 'フロップ',
          board: ['Td', '7s', '3h'],
          pot: 7.5,
          say: 'トップペア。あなたはチェックし、BTN がポット 5.5bb に **2bb** ベット。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'トップペアは BTN の広いレンジに対して降りるには強すぎます。' },
            { label: 'コール', good: true, why: '乾いたボードのトップペアは、コールで BTN のブラフを残します。' },
            { label: '8bb にチェックレイズ', good: false, why: '弱い手が降り、AT・TT・77 など上回る手ばかりが残ります。' },
          ],
        },
        { street: 'ターン', board: ['4c'], pot: 9.5, say: 'あなたはチェック、BTN もチェック。AT・TT・77 のような強い手はターンで打つことが多いので、BTN の強い手は減りました。' },
        {
          street: 'リバー',
          board: ['As'],
          pot: 16.5,
          say: 'あなたはチェック。BTN がポット 9.5bb に **7bb** ベット。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'ターンのチェックで強い A は減っています。A はブラフしやすいカードです。' },
            { label: 'コール', good: true, why: '必要勝率は約30%。キャップされたレンジのベットはブラフがそれを超えやすいです。' },
          ],
        },
      ],
      outro: 'BTN は Q♠J♠ のブラフでした。フロップで打ち、ターンで止まり、A でブラフに戻った形です。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'p', text: '強い手が減ったレンジのリバーベットは、ブラフの割合が高くなりやすいです。' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 5.5, actions: ['BTN 2.5bb オープン', 'BB（あなた）コール'] },
        { street: 'フロップ', board: ['Td', '7s', '3h'], pot: 5.5, actions: ['あなた チェック', 'BTN 2bb ベット', 'あなた コール'] },
        { street: 'ターン', board: ['4c'], pot: 9.5, actions: ['あなた チェック', 'BTN チェック'] },
        { street: 'リバー', board: ['As'], pot: 9.5, actions: ['あなた チェック', 'BTN 7bb ベット', 'あなた コール'] },
        { street: 'ショーダウン', pot: 23.5, actions: ['T のペアが Q ハイに勝つ'] },
      ],
      caption: 'ターンで相手が止まると、強い手が減ったレンジ（キャップされたレンジ）になります。',
    },
    {
      t: 'estimate', q: '7bb のベットをコールするのに必要な勝率は？',
      hand: ['Kc', 'Tc'], board: ['Td', '7s', '3h', '4c', 'As'],
      min: 0, max: 100, step: 1, unit: '%', answer: 30, tolerance: 5,
      explain: 'コールすると最終ポットは 9.5 + 7 + 7 = 23.5bb。払うのは 7bb なので 7 ÷ 23.5 ≒ 30% です。',
    },
    { t: 'odds', pot: 9.5, bet: 7, equity: 42, caption: '必要勝率は約30%。BTN のベットレンジに対するあなたの勝率は目安で 40% 前後です。' },
    { t: 'h', text: 'もう一度：レンジはキャップされた？' },
    {
      t: 'rapid',
      q: 'この行動のあと、相手のレンジから強い手は減った（キャップされた）？',
      choices: ['減った', '減っていない'],
      items: [
        { text: 'BTN がターンでチェックして回した', answer: 0, why: '強い手はターンでも打つことが多いからです。' },
        { text: '相手がフロップ・ターンと続けてベットした', answer: 1, why: '強い手はそのまま残っています。' },
        { text: 'BB がオープンに 3ベットせずコールした', answer: 0, why: 'AA・KK の多くは 3ベットするので、コールレンジには少なくなります。' },
        { text: '相手がプリフロップで 4ベットした', answer: 1, why: '4ベットは強い手が中心です。' },
        { text: 'CO のオープンに BTN がコールだけした', answer: 0, why: 'AA・KK・AK は 3ベットされることが多いです。' },
        { text: '相手がフロップでチェックレイズした', answer: 1, why: 'チェックレイズにはセットや2ペアが含まれます。' },
        { text: '相手がリバーでポットより大きくベットした', answer: 1, why: '大きいベットはナッツ級の手を含みます。' },
        { text: '相手がフロップをチェックで回した', answer: 0, why: '強い手の多くはフロップで打ちます。' },
      ],
    },
    { t: 'tip', text: '「怖いカードが落ちたから降りる」ではなく、その前の行動で相手の強い手が減っていないかを確認します。必要勝率 30% は10回に3回勝てば足りる数字です。' },
  ],
};

export default lesson;
