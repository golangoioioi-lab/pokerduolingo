import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr-08',
  blocks: [
    { t: 'p', text: '6人卓・全員 100bb。BTN が 2.5bb にオープン。SB のあなたは A♠ K♣ です。SB は常にポジションが不利（OOP）ですが、3bet で SPR を小さくすれば、その不利は軽くなります。' },
    { t: 'cards', hands: [{ label: 'あなた（SB）', cards: ['As', 'Kc'] }] },
    { t: 'h', text: 'プリフロップ' },
    {
      t: 'quiz',
      q: 'ここでの選択は？',
      hand: ['As', 'Kc'],
      options: ['コール', '11bb に 3bet', 'オールイン'],
      answer: 1,
      explain: 'SB からのコールは BB にスクイーズされる余地を残し、3人で OOP という最悪の形になりがちです。11bb 程度に 3bet すれば BB を降ろしてヘッズアップで主導権を持てます。AK は BTN の広いレンジに対して有利なのでバリューにもなります。100bb のオールインは AA・KK・QQ 以外を全部降ろします。',
    },
    { t: 'range', spot: 'sb-vs-btn', caption: 'SB は BTN に対して、コールをほとんど使わず 3bet かフォールドで戦うのが基本です。' },
    { t: 'p', text: '11bb に 3bet し、BB はフォールド、BTN がコール。ポットは 11 + 11 + 1 = 23bb、残りスタックは 89bb です。' },
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
      q: 'フロップ開始時の SPR（スタック ÷ ポット）は？',
      hand: ['As', 'Kc'],
      min: 0,
      max: 12,
      step: 0.5,
      answer: 4,
      tolerance: 1,
      explain: '89 ÷ 23 ≒ 3.9。ポットの約半分を3回打てば、リバーでちょうど全部入る深さです。',
    },
    { t: 'h', text: 'フロップ' },
    { t: 'p', text: 'トップペア・トップキッカー。あなたが先に行動します。' },
    {
      t: 'quiz',
      q: 'ここでの選択は？',
      hand: ['As', 'Kc'],
      board: ['Kh', '7s', '2d'],
      options: ['チェックして相手のベットを待つ', '8bb（約3分の1）をベット', '23bb（ポットサイズ）をベット'],
      answer: 1,
      explain: 'K72 レインボーは 3bet 側に有利なボードです。BTN のコールレンジには KQ・KJ・KT や小さいポケットペアなど、負けていてもコールしたい手が多くあります。小さく打てばそれらを残せます。チェックすると BTN が弱いペアでチェックバックして、OOP では取りこぼしが増えます。',
    },
    { t: 'p', text: '8bb をベットし、BTN がコール。ポットは 39bb です。' },
    { t: 'h', text: 'ターン' },
    { t: 'p', text: '9♣。ストレートドローができましたが、あなたの手はまだ強いままです。26bb（約67%）をベットし、BTN がコール。ポットは 91bb、残りスタックは 55bb です。' },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ', pot: 23, stack: 89 },
        { label: 'ターン', pot: 39, stack: 81 },
        { label: 'リバー', pot: 91, stack: 55 },
      ],
      caption: 'ベット前のポットと残りスタック。SPRは約3.9、約2.1、約0.6。',
    },
    { t: 'h', text: 'リバー' },
    { t: 'p', text: '3♥。ストレートもフラッシュも完成しません。ポット 91bb、残りスタック 55bb。' },
    {
      t: 'quiz',
      q: 'ここでの選択は？',
      hand: ['As', 'Kc'],
      board: ['Kh', '7s', '2d', '9c', '3h'],
      options: ['チェックしてコールで終える', '55bb のオールイン'],
      answer: 1,
      explain: '残りはポットの約60%。BTN がここまでコールしてきた KQ・KJ・KT は、この値段ならコールします（必要勝率は 55 ÷ 201 ≒ 27%）。チェックすると、BTN はそれらの K でチェックバックして、55bb 分のバリューを逃します。SPR が小さければ OOP でも迷う場面は残りません。',
    },
    { t: 'p', text: 'オールインに BTN は K♠ Q♦ でコール。キッカーの A が勝ち、201bb を獲得しました。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['As', 'Kc'] }, { label: 'BTN', cards: ['Ks', 'Qd'] }], board: ['Kh', '7s', '2d', '9c', '3h'] },
    { t: 'h', text: 'まとめ' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 1.5, actions: ['BTNが2.5bbにオープン', 'あなた（SB）が11bbに3ベット、BBフォールド、BTNコール'] },
        { street: 'フロップ', board: ['Kh', '7s', '2d'], pot: 23, actions: ['あなたが8bbベット、BTNコール'] },
        { street: 'ターン', board: ['9c'], pot: 39, actions: ['あなたが26bbベット、BTNコール'] },
        { street: 'リバー', board: ['3h'], pot: 91, actions: ['あなたが55bbオールイン、BTNコール'] },
        { street: 'ショーダウン', pot: 201, actions: ['BTNはK♠Q♦、あなたのA♠K♣が勝ち'] },
      ],
      caption: '3ベットでSPRを小さくしたので、OOPでも3ストリートでスタックが入った。',
    },
    {
      t: 'list',
      items: [
        'SB はコールより 3bet で戦い、ヘッズアップと主導権を確保する',
        '3bet で SPR を小さくすれば、OOP でも判断がシンプルになる',
        'SPR 約4なら、ポットの半分前後を3回打つ計画でスタックが入る',
      ],
    },
  ],
};

export default lesson;
