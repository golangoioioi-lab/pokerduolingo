import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'bb-defense',
  blocks: [
    { t: 'h', text: 'まず判断してみる' },
    {
      t: 'rapid',
      q: 'BTN が 2.5bb でオープン、SB はフォールド。BB のあなたは続ける？（コールか3bet）',
      choices: ['ディフェンス', 'フォールド'],
      items: [
        { cards: ['7h', '6h'], answer: 0 },
        { cards: ['7s', '2d'], answer: 1, why: '72o は BTN の広いレンジにも勝ちにくい手です。' },
        { cards: ['5s', '5d'], answer: 0 },
        { cards: ['Qc', 'Td'], answer: 0, why: 'Q8o 以上のオフスートはディフェンスできます。' },
        { cards: ['8d', '3s'], answer: 1, why: 'つながりのないオフスートの弱い手です。' },
        { cards: ['Kh', '5h'], answer: 0, why: 'スーテッドの K はほぼすべて続けられます。' },
        { cards: ['Qs', '4d'], answer: 1, why: 'Q4o はフロップ以降に苦しみます。' },
        { cards: ['5c', '2c'], answer: 0, why: '必要勝率は約27%。スーテッドなら低いカードでも足ります。' },
        { cards: ['Td', '8c'], answer: 0 },
        { cards: ['Jh', '5c'], answer: 1 },
      ],
    },
    { t: 'p', text: 'BB はすでに 1bb を出しているので、**安くコール**できます。そのため他のどの席よりも広く守ります。' },
    { t: 'h', text: '必要勝率は約27%' },
    {
      t: 'seats',
      seats: [
        { pos: 'BTN', bet: 2.5, action: 'オープン' },
        { pos: 'SB', folded: true, action: 'フォールド' },
        { pos: 'BB', hero: true, bet: 1, action: 'あと1.5bb' },
      ],
      pot: 4,
      caption: 'あと 1.5bb でコールでき、コール後のポットは 5.5bb。',
    },
    {
      t: 'odds',
      pot: 2.5,
      bet: 1.5,
      equity: 32,
      caption: '1.5 ÷ 5.5 ≈ 27%（エクイティ 32% は例）。',
    },
    { t: 'p', text: 'ただし BB はフロップ以降ずっと先に行動するので、エクイティを全部は実現できません。つながりのない弱いオフスートは降ります。' },
    { t: 'range', spot: 'bb-vs-btn', caption: 'BB vs BTN オープン。半分以上のハンドで参加します。' },
    {
      t: 'compare',
      left: { title: 'BTN・SB のオープン', points: ['相手のレンジが広い', '最も広く守る'], verdict: 'good' },
      right: { title: 'UTG のオープン', points: ['相手のレンジが強い', '守りは狭く、3bet も強い手中心'], verdict: 'bad' },
    },
    {
      t: 'estimate',
      q: 'CO が 3bb でオープン、他はフォールド。BB がコールするのに必要な勝率は？',
      min: 10,
      max: 50,
      step: 1,
      unit: '%',
      answer: 31,
      tolerance: 4,
      explain: 'ポット 4.5bb にコール 2bb で 6.5bb。2 ÷ 6.5 ≈ 31%。サイズが大きいほど守りは狭くなります。',
    },
    { t: 'h', text: 'もう一度：守ったあとのハンド' },
    {
      t: 'play',
      title: 'BB で 76s を守る',
      hero: 'BB',
      heroCards: ['7s', '6s'],
      villain: 'BTN',
      villainCards: ['Ah', '8h'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'BTN が 2.5bb でオープン、SB はフォールド。あなたは BB で **7♠6♠**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: '必要勝率 27% を十分に超えるプレイアブルな手です。' },
            { label: 'コール', good: true, why: 'ストレートやフラッシュを作れる手。BB の基本の守りです。' },
            { label: '3bet', good: true, why: 'ときどき3betを混ぜるのも成り立ちます。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['8s', '5d', '2c'],
          pot: 7.5,
          say: 'BB がコール。フロップは **8♠5♦2♣**。あなたはチェック、BTN が 2bb をベット。',
          q: 'オープンエンドのストレートドロー。どうする？',
          options: [
            { label: 'フォールド', good: false, why: '必要勝率は約21%。ドローで十分足ります。' },
            { label: 'コール', good: true, why: '安い値段でストレートを狙えます。' },
            { label: 'チェックレイズ', good: true, why: 'セミブラフのレイズも成り立ちます。' },
          ],
        },
        {
          street: 'ターン',
          board: ['9h'],
          pot: 9.5,
          say: 'ターンは **9♥**。5-6-7-8-9 のストレート完成。あなたはチェック、BTN もチェック。',
        },
        {
          street: 'リバー',
          board: ['2d'],
          pot: 9.5,
          say: 'リバーは **2♦**。あなたから。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'BTN はターンでチェックしたので、リバーも打ってくれない可能性が高いです。' },
            { label: '6bb ベット', good: true, why: '8 や 9 のペアから払ってもらうバリューベットです。' },
          ],
        },
      ],
      outro: '安く守った手が、後のストリートで大きな手になります。',
    },
    {
      t: 'quiz',
      q: 'BTN が 2.5bb でオープン。BB でフォールドが妥当なのはどの手？',
      options: ['98s', '55', 'QTo', '72o'],
      optionCards: [['9h', '8h'], ['5s', '5d'], ['Qc', 'Td'], ['7s', '2d']],
      answer: 3,
      explain: '72o は BTN の広いレンジにも勝ちにくく、ポジションの不利もあるので降ります。',
    },
  ],
};

export default lesson;
