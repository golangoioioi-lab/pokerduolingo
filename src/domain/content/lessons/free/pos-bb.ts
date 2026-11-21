import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pos-bb',
  blocks: [
    { t: 'h', text: 'BTN のオープンを守る' },
    { t: 'rapid', q: 'BTN が 2.5bb オープン、SB はフォールド。BB で守る？', choices: ['守る', 'フォールド'], items: [
      { cards: ['Ts', '8s'], answer: 0, why: 'T8s はスーテッドで勝率を実現しやすい手です。' },
      { cards: ['Kd', '6c'], answer: 0, why: '追加は 1.5bb だけ。K6o でもコールで守れます。' },
      { cards: ['Jh', '7d'], answer: 1, why: 'J7o はつながりも弱く、位置もありません。' },
      { cards: ['8h', '7h'], answer: 0 },
      { cards: ['Kc', '3d'], answer: 1, why: 'K3o は K のキッカー負けが多く、降ります。' },
      { cards: ['Ah', '2c'], answer: 0 },
      { cards: ['9c', '6d'], answer: 1, why: '96o は守るには弱すぎます。' },
      { cards: ['Qs', 'Jd'], answer: 0 },
      { cards: ['5h', '3h'], answer: 0, why: 'スーテッドならかなり下の手まで守れます。' },
      { cards: ['8d', '5c'], answer: 1, why: '85o はフォールドです。' },
    ] },
    { t: 'p', text: 'BB はすでに 1bb を払っています。BTN の 2.5bb に対して、追加は **1.5bb** だけです。' },
    { t: 'seats', seats: [
      { pos: 'UTG', action: 'フォールド', folded: true },
      { pos: 'HJ', action: 'フォールド', folded: true },
      { pos: 'CO', action: 'フォールド', folded: true },
      { pos: 'BTN', action: 'オープン 2.5bb', bet: 2.5 },
      { pos: 'SB', action: 'フォールド', folded: true, bet: 0.5 },
      { pos: 'BB', hero: true, action: '判断', bet: 1, cards: ['Ts', '8s'] },
    ], pot: 4, caption: 'BTN のオープンに BB が直面する典型的な形。' },
    { t: 'h', text: '安い値段で守る' },
    { t: 'odds', pot: 4, bet: 1.5, equity: 38, caption: '必要勝率は 1.5 ÷（4 + 3）≈ 21%。位置がなくても、多くの手でコールの価値があります。' },
    { t: 'range', spot: 'bb-vs-btn', caption: 'BB が BTN のオープンに対して取る行動の目安。' },
    { t: 'p', text: 'コールだけだと BTN は開け放題になります。AQ+、JJ+ と A5s のようなブロッカー付きの手で **11bb 前後の 3bet** も混ぜます。前の席（UTG など）のオープンには守る範囲を絞ります。' },
    { t: 'estimate', q: 'BTN 2.5bb オープン、SB フォールド。BB がコールするのに必要な勝率は？', min: 0, max: 60, step: 1, unit: '%', answer: 21, tolerance: 4, explain: 'ポットは 4bb、追加は 1.5bb。1.5 ÷（4 + 3）≈ 21%です。' },
    { t: 'quiz', q: 'BB で BTN に 3bet するとき、手の選び方として良いのは？', options: ['強い手と、A5s のようなブロッカー付きの手を混ぜる', '弱い手だけを 3bet する', '3bet は一切しない', '常にオールインする'], answer: 0, explain: '強い手をバリューに、ブロッカー付きの手をブラフにしてレンジを組み立てます。' },
    { t: 'h', text: '1ハンドやってみる' },
    { t: 'play', title: 'BB で T8s を守る', hero: 'BB', heroCards: ['Ts', '8s'], villain: 'BTN', villainCards: ['Ah', 'Jd'], steps: [
      { street: 'プリフロップ', pot: 4, say: 'BTN が 2.5bb オープン、SB はフォールド。あなたは BB で **T♠8♠**。', q: 'どうする？', options: [
        { label: 'コール', good: true, why: '必要勝率は約21%。T8s は十分に守れます。' },
        { label: 'フォールド', good: false, why: '安く入れるのに、守れる手を捨てています。' },
      ] },
      { street: 'フロップ', board: ['Td', '6c', '2h'], pot: 7.5, say: 'トップペア。あなたがチェックし、BTN が 2bb ベット。', q: 'どうする？', options: [
        { label: 'コール', good: true, why: 'トップペアで続けます。BTN の広いレンジには、もっと弱い手が多くあります。' },
        { label: 'フォールド', good: false, why: 'トップペアを小さいベットで降りるのは早すぎます。' },
      ] },
      { street: 'ターン', board: ['4s'], pot: 9.5, say: 'ターンは **4**。2人ともチェック。' },
      { street: 'リバー', board: ['3d'], pot: 9.5, say: 'リバーは **3**。あなたがチェックし、BTN もチェック。' },
    ], outro: '安く守った手でも、当たれば勝てます。BB は広く、ただし手を選んで守ります。' },
    { t: 'tip', text: '「安いから何でもコール」は典型的なミスです。スーテッド、コネクター、A を含む手など、フロップ以降に戦いやすい手を優先します。' },
  ],
};

export default lesson;
