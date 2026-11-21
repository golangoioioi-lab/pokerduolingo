import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pos-cold-call',
  blocks: [
    { t: 'h', text: '位置があるときのコール' },
    { t: 'rapid', q: 'HJ が 2.5bb オープン。BTN でコールする？', choices: ['コール', 'コールしない'], items: [
      { cards: ['Jh', 'Th'], answer: 0, why: 'JTs は位置があると戦いやすい手です。' },
      { cards: ['7h', '7d'], answer: 0, why: '中くらいのペアはコールでセットを狙います。' },
      { cards: ['As', 'Ad'], answer: 1, why: 'AA は 3bet してポットを大きくします。' },
      { cards: ['Kd', '4c'], answer: 1, why: 'K4o はフォールドです。' },
      { cards: ['Kh', 'Qh'], answer: 0 },
      { cards: ['9s', '8s'], answer: 0 },
      { cards: ['Ac', 'Kd'], answer: 1, why: 'AK は基本的に 3bet します。' },
      { cards: ['8s', '3d'], answer: 1, why: 'どの席でもフォールドです。' },
      { cards: ['Qd', 'Js'], answer: 0, why: 'QJs はスーテッドブロードウェイでコール向きです。' },
      { cards: ['Tc', '8d'], answer: 1, why: 'T8o はオフスートで弱く、フォールドです。' },
    ] },
    { t: 'p', text: 'ブラインドを払っていない席から、誰かのオープンにコールすることを **コールドコール** と言います。BTN や CO など、位置があるときに使います。' },
    { t: 'seats', seats: [
      { pos: 'UTG', action: 'フォールド', folded: true },
      { pos: 'HJ', action: 'オープン 2.5bb', bet: 2.5 },
      { pos: 'CO', action: 'フォールド', folded: true },
      { pos: 'BTN', hero: true, action: 'コールドコール 2.5bb', bet: 2.5, cards: ['Jh', 'Th'] },
      { pos: 'SB', action: '未行動', bet: 0.5 },
      { pos: 'BB', action: '未行動', bet: 1 },
    ], pot: 4, caption: 'HJ のオープンに、BTN がコールドコール。' },
    { t: 'h', text: '必要勝率と向く手' },
    { t: 'odds', pot: 4, bet: 2.5, equity: 32, caption: '必要勝率は約28%。位置があると実際の勝率を実現しやすくなります。' },
    { t: 'combos', groups: [
      { label: 'コールが中心', hands: ['JJ', 'TT', '99', '88', '77', '66', 'AQs', 'KQs', 'QJs', 'JTs', 'T9s', '98s'] },
      { label: '3bet が中心', hands: ['AA', 'KK', 'QQ', 'AKs', 'AKo'] },
    ], caption: '位置があるときの目安。相手の席と 3bet されやすさで調整します。' },
    { t: 'p', text: 'リスクは後ろの SB や BB からのスクイーズです。後ろがよく 3bet するならコールを減らします。SB や BB は位置がないので、コールの価値が下がります。' },
    { t: 'quiz', q: 'コールドコールで気をつけたいリスクは？', options: ['後ろからのスクイーズ', 'ボードが出ないこと', 'ブラインドが払えないこと', 'ポットが小さいこと'], answer: 0, explain: '後ろに 3bet されると、コールだけの手は降りることになります。' },
    { t: 'estimate', q: 'HJ の 2.5bb オープン（ポット 4bb）に、BTN がコールドコールする必要勝率は？', min: 0, max: 60, step: 1, unit: '%', answer: 28, tolerance: 4, explain: '2.5 ÷（4 + 5）≈ 28%です。' },
    { t: 'h', text: '1ハンドやってみる' },
    { t: 'play', title: 'BTN で 77', hero: 'BTN', heroCards: ['7h', '7d'], villain: 'HJ', villainCards: ['Ac', 'Kd'], steps: [
      { street: 'プリフロップ', pot: 4, say: 'HJ が 2.5bb オープン。あなたは BTN で **7♥7♦**。', q: 'どうする？', options: [
        { label: 'コール', good: true, why: '位置があり、セットを狙えます。' },
        { label: '3bet', good: false, why: '77 は 3bet すると強い手にだけ続けられます。' },
        { label: 'フォールド', good: false, why: 'BTN なら十分にコールできる手です。' },
      ] },
      { street: 'フロップ', board: ['Kc', '7s', '2d'], pot: 9.5, say: 'ブラインドは降りた。**セット** 完成。HJ が 3bb ベット。', q: 'どうする？', options: [
        { label: 'レイズ', good: true, why: 'K を持つ相手から大きく取れます。' },
        { label: 'コール', good: true, why: '位置があるので、コールで相手に打たせ続けるのも有効です。' },
        { label: 'フォールド', good: false, why: 'ほぼ最強の手です。' },
      ] },
      { street: 'ターン', board: ['4h'], pot: 12.5, say: 'あなたはコール。ターンは **4**。HJ が 8bb ベット、あなたはコール。' },
      { street: 'リバー', board: ['9s'], pot: 28.5, say: 'リバーは **9**。HJ はチェック。', q: 'どうする？', options: [
        { label: 'ベット', good: true, why: 'K を持つ相手から最後のバリューを取ります。' },
        { label: 'チェック', good: false, why: 'セットでチェックするとバリューを取り逃します。' },
      ] },
    ], outro: '位置があると、相手に打たせてから判断できます。コールドコールの強みです。' },
  ],
};

export default lesson;
