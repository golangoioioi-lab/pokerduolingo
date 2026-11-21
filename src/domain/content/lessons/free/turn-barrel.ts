import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'turn-barrel',
  blocks: [
    { t: 'h', text: 'まずやってみる：ターンでもう一発？' },
    { t: 'p', text: 'BTNオープン、BBコール。フロップ K♣9♦4♣ でBTNがCベットし、BBがコール。ターン2♥でBBはチェック。フロップに続けて打つのが**ダブルバレル**です。' },
    {
      t: 'rapid',
      q: 'BTNはターンでバレル？ チェック？',
      choices: ['バレル', 'チェック'],
      items: [
        { cards: ['As', 'Kd'], board: ['Kc', '9d', '4c', '2h'], answer: 0, why: 'トップペア・トップキッカー。9xやKの弱いキッカーから払ってもらえます。' },
        { cards: ['Qc', 'Jc'], board: ['Kc', '9d', '4c', '2h'], answer: 0, why: 'フラッシュドローとTのガットショット。降ろしても、当たっても勝てます。' },
        { cards: ['Td', 'Ts'], board: ['Kc', '9d', '4c', '2h'], answer: 1, why: '9xには勝っていますが、打つと9xが降りてKxだけが残ります。' },
        { cards: ['9s', '9h'], board: ['Kc', '9d', '4c', '2h'], answer: 0, why: 'セット。ドローの多いボードなので、打ってバリューを取ります。' },
        { cards: ['Ac', '5c'], board: ['Kc', '9d', '4c', '2h'], answer: 0, why: 'ナッツフラッシュドロー。3が来てもストレートです。' },
        { cards: ['8h', '7h'], board: ['Kc', '9d', '4c', '2h'], answer: 1, why: 'ペアもドローもなく、ブロッカーもありません。あきらめます。' },
        { cards: ['Kh', 'Qh'], board: ['Kc', '9d', '4c', '2h'], answer: 0, why: 'トップペア・良いキッカー。バリューで打ちます。' },
        { cards: ['7d', '7s'], board: ['Kc', '9d', '4c', '2h'], answer: 1, why: '打つと負けている手にしかコールされません。チェックでショーダウンを目指します。' },
      ],
    },
    { t: 'h', text: 'ターンカードは誰の味方か' },
    { t: 'p', text: 'ターンでは、そのカードでどちらのレンジが強くなったかを最初に見ます。' },
    {
      t: 'compare',
      left: {
        title: 'ターン A♠：BTNに有利',
        board: ['Qs', '8d', '3c', 'As'],
        verdict: 'good',
        points: ['BTNは AA・AK・AQ を多く持つ', 'BBの Q や 8 のペアは弱くなる'],
      },
      right: {
        title: 'ターン 8♥：BBに有利',
        board: ['Kc', '9d', '4c', '8h'],
        verdict: 'bad',
        points: ['JT・T7・76 がストレートドローになる', '98 などのツーペアも増える'],
      },
      caption: '同じCベットレンジでも、ターンカードで有利不利が入れ替わる。',
    },
    {
      t: 'quiz',
      q: 'フロップ K♣9♦4♣ でCベットがコールされた。BTNが最もバレルしやすいターンは？',
      board: ['Kc', '9d', '4c'],
      options: ['8♥', '5♣', 'A♦'],
      optionCards: [['8h'], ['5c'], ['Ad']],
      answer: 2,
      explain: 'A はBTNのレンジ（AA・AK・AQ）に多く、BBの9xや4xを弱くします。8♥はBBのストレートドローやツーペアを増やし、5♣はフラッシュを完成させます。',
    },
    { t: 'h', text: 'ブラフはエクイティのある手で' },
    { t: 'p', text: 'ブラフで続けるのは、ショーダウンで勝てず、外れても後から勝てる手です。' },
    {
      t: 'outs',
      q: 'A♥5♥。リバーでフラッシュになるカードを全部タップ。',
      hand: ['Ah', '5h'],
      board: ['Kh', '9h', '2c', '7d'],
      target: 'フラッシュ',
      explain: '残りのハートは9枚。46枚中9枚で、約20%です。',
    },
    {
      t: 'tree',
      root: 'ターンでフラッシュドロー（ポット20bb）',
      options: [
        {
          label: '15bbをベット',
          outcomes: [
            { label: '相手がフォールド', prob: 0.5, value: 20 },
            { label: 'コールされ、リバーで完成', prob: 0.1, value: 35 },
            { label: 'コールされ、外れる', prob: 0.4, value: -15 },
          ],
          note: 'フォールド率50%は仮定の目安',
        },
        {
          label: 'チェック',
          outcomes: [
            { label: 'リバーで完成して勝つ', prob: 0.2, value: 15 },
            { label: '勝てない', prob: 0.8, value: 0 },
          ],
        },
      ],
      caption: 'フォールドを取れる分、ベットのEVが高い（目安）。',
    },
    { t: 'h', text: 'もう一度やる' },
    {
      t: 'play',
      title: 'BTNで Q♥J♥',
      hero: 'BTN',
      heroCards: ['Qh', 'Jh'],
      villain: 'BB',
      villainCards: ['Tc', '9c'],
      steps: [
        {
          street: 'フロップ',
          board: ['Kh', '9h', '4c'],
          pot: 5.5,
          say: 'BTNでオープンし、BBがコール。BBはチェック。',
          q: 'フラッシュドローとガットショット。どうする？',
          options: [
            { label: '2bbベット', good: true, why: 'Kハイのボードは BTN に有利。ドローもあるので打てます。' },
            { label: 'チェック', good: true, why: 'チェックしてカードを見るのも成り立ちます。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2d'],
          pot: 9.5,
          say: 'BBがコール。ターン2♦はどちらにも関係のないカード。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '6bbバレル', good: true, why: 'ショーダウンでは勝てず、アウツは12枚前後。セミブラフの好例です。' },
            { label: 'チェック', good: false, why: 'Qハイではほぼ勝てません。フォールドを取る機会を逃します。' },
          ],
        },
        {
          street: 'リバー',
          board: ['Ts'],
          pot: 21.5,
          say: 'BBがコール。リバーT♠で9〜Kのストレートが完成。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '15bbベット', good: true, why: 'BBの9xやTxの2ペア、Kxから払ってもらえます。' },
            { label: 'チェック', good: false, why: '完成した手で打たないと、取れる額を逃します。' },
          ],
        },
      ],
      outro: 'BBはT9の2ペアでした。エクイティのある手で続けると、外れても降ろせて、当たれば大きく取れます。',
    },
    { t: 'tip', text: 'バレルの前に2つ確認します。①このカードは誰に有利か。②自分の手はバリューか、エクイティのあるブラフか。' },
  ],
};

export default lesson;
