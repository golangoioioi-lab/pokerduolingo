import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pocket-pairs',
  blocks: [
    { t: 'h', text: 'スモールペアでセットを狙う' },
    {
      t: 'play',
      title: 'BTN で 4♠4♥',
      hero: 'BTN',
      heroCards: ['4s', '4h'],
      villain: 'CO',
      villainCards: ['Ah', 'Kd'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'CO が 2.5bb でオープン。あなたは BTN で **4♠4♥**。スタックは100bb。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'ポジションがあり、スタックも深い。セットを狙える条件です。' },
            { label: 'コール', good: true, why: 'コール額2.5bb に対し、残り約97bb。セットができれば大きく取れます。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['4c', '9d', '2h'],
          pot: 8.7,
          say: 'ブラインドはフォールド。フロップでセット完成。CO がポット6.5bbに **2.2bb** ベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: '乾いたボードなので、相手に打たせ続けるコールが有力です。' },
            { label: 'レイズ', good: true, why: 'これも有力。オーバーペアからは払ってもらえます。' },
            { label: 'フォールド', good: false, why: 'ほぼ最強の手です。' },
          ],
        },
        {
          street: 'ターン',
          board: ['Ks'],
          pot: 17.9,
          say: 'ターンは **K♠**。CO がポット10.9bbに **7bb** ベット。',
          q: 'どうする？',
          options: [
            { label: 'レイズ', good: true, why: 'K を持つ相手は払ってくれます。ポットを大きくします。' },
            { label: 'コール', good: true, why: '接戦。リバーでもう一度打たせる狙いも成り立ちます。' },
          ],
        },
        {
          street: 'リバー',
          board: ['7c'],
          pot: 50.9,
          say: 'あなたは 20bb にレイズし、CO がコール。リバーは **7♣**。CO はチェック。',
          q: 'どうする？',
          options: [
            { label: '大きくベット', good: true, why: 'トップペアからまだ取れます。' },
            { label: 'チェック', good: false, why: '取れる価値を逃します。' },
          ],
        },
      ],
      outro: '外れる回数のほうが多くても、当たったときに大きく取れればスモールペアのコールは利益になります。',
    },
    { t: 'h', text: '3つのグループ' },
    {
      t: 'table',
      head: ['グループ', '例', '主な勝ち方'],
      rows: [
        ['スモール', '22〜66', 'セットを作って大きく勝つ'],
        ['ミドル', '77〜TT', 'セットに加え、低いボードでのオーバーペア'],
        ['ハイ', 'JJ〜AA', 'ペアのままでも価値を取れる'],
      ],
    },
    {
      t: 'combos',
      groups: [
        { label: 'スモール（22〜66）', hands: ['22', '33', '44', '55', '66'] },
        { label: 'ミドル（77〜TT）', hands: ['77', '88', '99', 'TT'] },
        { label: 'ハイ（JJ〜AA）', hands: ['JJ', 'QQ', 'KK', 'AA'] },
      ],
      caption: 'ポケットペアは1種類あたり6コンボです。',
    },
    { t: 'h', text: 'セットマイニングの目安' },
    {
      t: 'estimate',
      q: 'ポケットペアがフロップでセット以上になる確率は？',
      hand: ['4s', '4h'],
      min: 0,
      max: 40,
      step: 1,
      unit: '%',
      answer: 12,
      tolerance: 3,
      explain: '約11.8%、およそ8.5回に1回です。',
    },
    {
      t: 'tree',
      root: '4♠4♥ でオープンにコール（3bb）',
      options: [
        { label: 'フォールド', ev: 0 },
        {
          label: 'コール（セット完成で平均22bb 取れる）',
          outcomes: [{ label: 'セット完成（約11.8%）', prob: 0.118, value: 22.4 }, { label: '外れ', prob: 0.882, value: -3 }],
          note: '収支はほぼゼロ',
        },
      ],
      caption: 'コール額の約7.5倍を取り返して損得なし。払ってもらえない回もあるので、実戦では15〜20倍のスタックを目安にします。',
    },
    { t: 'formula', text: '残りの有効スタック ≧ コール額 × 15〜20', note: 'セットだけを狙ってコールするときの目安' },
    {
      t: 'quiz',
      hand: ['3s', '3h'],
      q: '33 で 2.5bb にオープンし、相手が 10bb に3ベット。スタックは100bb。セット狙いのコールは目安を満たす？',
      options: ['満たす', '満たさない', 'スタックに関係なく必ずコール'],
      answer: 1,
      explain: '追加のコールは7.5bb。15倍で112.5bb 必要ですが、残りは90bb。フォールドが基本です。',
    },
    { t: 'h', text: 'ハイペアとオーバーカード' },
    {
      t: 'table',
      head: ['ハンド', '上のカード', 'フロップに1枚以上出る確率'],
      rows: [['KK', 'A（4枚）', '約23%'], ['QQ', 'A・K（8枚）', '約41%'], ['JJ', 'A・K・Q（12枚）', '約57%']],
    },
    {
      t: 'cards',
      hands: [{ label: 'あなた', cards: ['Qd', 'Qc'] }],
      board: ['As', '8h', '3d'],
      caption: 'A が落ちた QQ。強く打ち返されたら、ポットを大きくしすぎないようにします。',
    },
    {
      t: 'estimate',
      q: 'QQ のとき、フロップに A か K が1枚以上出る確率は？',
      hand: ['Qd', 'Qc'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 41,
      tolerance: 8,
      explain: '3枚とも A・K 以外になる確率は (42×41×40) ÷ (50×49×48) ≈ 58.6%。1 − 58.6% ≈ 41% です。',
    },
    { t: 'h', text: 'スピード判定' },
    {
      t: 'rapid',
      q: 'セット狙いだけでコールしてよい？（15〜20倍の目安）',
      choices: ['コール', 'フォールド'],
      items: [
        { text: 'コール2.5bb・残り97bb', answer: 0, why: '約39倍。十分です。' },
        { text: 'コール7.5bb・残り90bb', answer: 1, why: '12倍。足りません。' },
        { text: 'コール2bb・残り40bb', answer: 0, why: '20倍。目安を満たします。' },
        { text: 'コール5bb・残り50bb', answer: 1, why: '10倍。足りません。' },
        { text: 'コール1.5bb・残り98bb', answer: 0, why: '約65倍。十分です。' },
        { text: 'コール10bb・残り90bb', answer: 1, why: '9倍。足りません。' },
        { text: 'コール4bb・残り70bb', answer: 0, why: '17.5倍。目安の範囲です。' },
      ],
    },
    { t: 'try', text: 'レンジ表でポケットペアがどのポジションから参加しているかを見る', tab: 'ranges' },
  ],
};

export default lesson;
