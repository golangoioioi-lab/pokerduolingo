import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-defend-oop',
  blocks: [
    {
      t: 'p',
      text: '3betをコールした側がアウトオブポジションになる場面です。UTGがオープンし、BTNが3bet、UTGがコール。UTGにはポジションもレンジ優位もなく、最も不利な立場です。',
    },
    { t: 'h', text: '基本はチェックから' },
    {
      t: 'p',
      text: 'OOPのコーラーは、ほぼ全部の手でチェックから始めます。3bettorにレンジ優位があるので、リード（ドンクベット）はほとんど使いません。',
    },
    {
      t: 'pot',
      steps: [
        { label: '3betポット（BTN対UTG）', pot: 17.5, stack: 92 },
        { label: 'フロップ 5.8bet・コール', pot: 29.1, stack: 86.2 },
        { label: 'ターン 14.5bet・コール', pot: 58.1, stack: 71.7 },
      ],
      caption: 'UTG 2.5bbオープン、BTN 8bbに3bet、UTGがコール。ポット17.5bb、SPR約5.3。',
    },
    { t: 'h', text: 'チェック後の対応' },
    {
      t: 'table',
      head: ['手の種類', '対応', '例（K♠7♦2♣）'],
      rows: [
        ['強い手（セット、強いトップペア）', 'チェックコール、一部チェックレイズ', '77、AK、KQ'],
        ['ポケットペア（Kより下）', 'チェックコール', 'QQ、JJ'],
        ['ドロー', 'チェックコール、少しだけチェックレイズ', 'フラッシュドロー'],
        ['エア', 'チェックフォールド', 'A♦J♣'],
      ],
    },
    {
      t: 'p',
      text: 'チェックレイズの頻度は約10%以下（目安）です。BTNは小さなc-bet（約33%）をレンジ全体に打つので、チェックレイズはセットやツーペアなど強い手が中心になります。',
    },
    {
      t: 'odds',
      pot: 17.5,
      bet: 5.8,
      equity: 25,
      caption: 'ポット17.5bbに5.8bbのc-bet。必要勝率は約20%。バックドア付きのペアなども続けられます。',
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 17.5, actions: ['UTG（Q♦Q♣）が2.5bbオープン', 'BTNが8bbに3bet', 'UTGがコール'] },
        { street: 'フロップ', board: ['Ks', '7d', '2c'], pot: 17.5, actions: ['UTGがチェック', 'BTNが5.8bbをc-bet', 'UTGがコール'] },
        { street: 'ターン', board: ['4h'], pot: 29.1, actions: ['UTGがチェック', 'BTNがチェックバック'] },
      ],
      caption: 'BTNがターンでチェックバックしたら、UTGはリバーでショーダウンバリューを見極めます。',
    },
    {
      t: 'quiz',
      q: 'あなたはUTG（OOPのコーラー）でQ♦Q♣。K♠7♦2♣のフロップで、最初の行動は？',
      options: ['チェックから始める', '大きくドンクベット', 'すぐにオールイン', 'フォールド'],
      hand: ['Qd', 'Qc'],
      board: ['Ks', '7d', '2c'],
      answer: 0,
      explain: 'レンジ優位がない側が先にベットしても有利に進みにくいので、チェックから始めます。QQはチェックコールが基本です。',
    },
    {
      t: 'estimate',
      q: 'ポット17.5bbに5.8bbのc-bet。必要勝率は？',
      min: 0,
      max: 60,
      step: 1,
      unit: '%',
      answer: 20,
      tolerance: 5,
      explain: '5.8 ÷ (17.5 + 11.6) = 5.8 ÷ 29.1 ≈ 20% です。',
    },
    {
      t: 'quiz',
      q: 'K♠7♦2♣でBTNがc-bet。チェックレイズに回しやすいのは、どちらの手？',
      options: ['7♣7♥（セット）', 'Q♦Q♣（ボードより下のペア）'],
      optionCards: [['7c', '7h'], ['Qd', 'Qc']],
      board: ['Ks', '7d', '2c'],
      answer: 0,
      explain: 'チェックレイズは頻度が低く、セットなど強い手が中心です。QQはチェックコールで十分です。',
    },
    {
      t: 'estimate',
      q: 'OOPコーラーがチェックレイズする頻度の目安は？',
      min: 0,
      max: 50,
      step: 5,
      unit: '%',
      answer: 10,
      tolerance: 5,
      explain: 'レンジ優位がないため、チェックレイズは強い手中心で少なくなります。目安は約10%以下です。',
    },
  ],
};

export default lesson;
