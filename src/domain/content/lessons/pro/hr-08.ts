import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr-08',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。BTN のオープンに SB の A♠K♣。ポジションが不利（OOP）な SB で、3bet で SPR を小さくして戦います。' },
    {
      t: 'play',
      title: 'SB で AK を 3bet',
      hero: 'SB',
      heroCards: ['As', 'Kc'],
      villain: 'BTN',
      villainCards: ['Ks', 'Qd'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'BTN が 2.5bb にオープン。あなたは SB で **A♠K♣**。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: false, why: 'BB のスクイーズを招き、3人で OOP という最悪の形になりがちです。' },
            { label: '11bb に 3bet', good: true, why: 'BB を降ろしてヘッズアップで主導権を持ち、BTN の広いレンジからバリューも取れます。' },
            { label: 'オールイン', good: false, why: 'AA・KK・QQ 以外を全部降ろしてしまいます。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Kh', '7s', '2d'],
          pot: 23,
          say: 'BB はフォールド、BTN がコール。トップペア・トップキッカーで、あなたが先に行動します。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'BTN が弱いペアでチェックバックし、取りこぼしが増えます。' },
            { label: '8bb（約3分の1）ベット', good: true, why: 'KQ・KJ・小さいペアなど、負けていてもコールしたい手を残します。' },
            { label: '23bb（ポット）ベット', good: false, why: '負けている手が降りてしまいます。' },
          ],
        },
        {
          street: 'ターン',
          board: ['9c'],
          pot: 39,
          say: 'BTN がコール。9♣ でストレートドローができましたが、あなたの手はまだ強いままです。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'ドローにタダでカードを見せ、ポットも育ちません。' },
            { label: '26bb（約67%）ベット', good: true, why: 'リバーで残りがちょうど入る大きさにポットを育てます。' },
          ],
        },
        {
          street: 'リバー',
          board: ['3h'],
          pot: 91,
          say: 'BTN がコール。3♥ でストレートもフラッシュも完成しません。残りスタックは 55bb。',
          q: 'どうする？',
          options: [
            { label: 'チェックしてコールで終える', good: false, why: 'BTN は弱い K でチェックバックし、55bb 分のバリューを逃します。' },
            { label: '55bb のオールイン', good: true, why: '必要勝率は約27%で、ここまで来た KQ・KJ・KT はコールします。' },
          ],
        },
      ],
      outro: 'BTN は K♠Q♦ でコール。キッカーの A が勝ち、201bb を獲得しました。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'p', text: '3bet で SPR を約4にしたので、ポットの半分前後を3回打てばリバーでちょうど全部入りました。SPR が小さいと、OOP でも迷う場面が残りません。' },
    {
      t: 'seats',
      seats: [
        { pos: 'BTN', action: 'オープン→コール', bet: 11 },
        { pos: 'SB', hero: true, cards: ['As', 'Kc'], action: '3ベット', bet: 11 },
        { pos: 'BB', folded: true },
      ],
      pot: 23,
      caption: 'BTNの2.5bbオープンに、SBのあなたが11bbに3ベット。BTNがコール。',
    },
    {
      t: 'estimate',
      q: 'フロップ開始時の SPR（スタック 89bb ÷ ポット 23bb）は？',
      hand: ['As', 'Kc'],
      min: 0,
      max: 12,
      step: 0.5,
      answer: 4,
      tolerance: 1,
      explain: '89 ÷ 23 ≒ 3.9。シングルレイズポット（約18）よりずっと浅いです。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ', pot: 23, stack: 89 },
        { label: 'ターン', pot: 39, stack: 81 },
        { label: 'リバー', pot: 91, stack: 55 },
      ],
      caption: 'ベット前のポットと残りスタック。SPRは約3.9、約2.1、約0.6。',
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 1.5, actions: ['BTNが2.5bbにオープン', 'あなた（SB）が11bbに3ベット、BBフォールド、BTNコール'] },
        { street: 'フロップ', board: ['Kh', '7s', '2d'], pot: 23, actions: ['あなたが8bbベット、BTNコール'] },
        { street: 'ターン', board: ['9c'], pot: 39, actions: ['あなたが26bbベット、BTNコール'] },
        { street: 'リバー', board: ['3h'], pot: 91, actions: ['あなたが55bbオールイン、BTNコール'] },
        { street: 'ショーダウン', pot: 201, actions: ['BTNはK♠Q♦、あなたのA♠K♣が勝ち'] },
      ],
    },
    { t: 'h', text: 'もう一度：SB は 3bet かフォールド' },
    {
      t: 'rapid',
      q: 'BTN が 2.5bb にオープン。SB のあなたは？（コールは使わない）',
      choices: ['3bet', 'フォールド'],
      items: [
        { cards: ['Ac', 'Kd'], answer: 0 },
        { cards: ['7c', '2d'], answer: 1, why: 'どの席でもフォールドです。' },
        { cards: ['Qh', 'Qd'], answer: 0 },
        { cards: ['Ah', '5h'], answer: 0, why: 'A5s は A ブロッカー付きの 3bet ブラフです。' },
        { cards: ['Ks', '4d'], answer: 1, why: 'K4o は OOP で戦えません。' },
        { cards: ['Kd', 'Qc'], answer: 0, why: 'KQo は BTN の広いレンジに対して 3bet できます。' },
        { cards: ['Jc', '9d'], answer: 1, why: 'J9o は OOP で戦えません。' },
        { cards: ['Ad', 'Jc'], answer: 0, why: 'AJo は BTN の広いレンジに対してバリューになります。' },
        { cards: ['6s', '6c'], answer: 1, why: '66 は SB からは降ります。' },
        { cards: ['Qs', 'Ts'], answer: 0, why: 'QTs は 3bet に含めます。' },
      ],
    },
    { t: 'range', spot: 'sb-vs-btn', caption: 'SB vs BTN のレンジ。コールはほとんど使いません。' },
    { t: 'tip', text: 'SB はコールより 3bet で戦い、ヘッズアップと主導権を取ります。SPR が約4なら、ポットの半分前後を3回打つ計画でスタックが入ります。' },
  ],
};

export default lesson;
