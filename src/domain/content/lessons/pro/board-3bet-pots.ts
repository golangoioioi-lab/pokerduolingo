import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-3bet-pots',
  blocks: [
    { t: 'h', text: '3bet側が有利なボードは？' },
    {
      t: 'rapid',
      q: 'SBが3bet、BTNがコール。このフロップは？',
      choices: ['3bet側が有利', '差が小さい'],
      items: [
        { cards: ['As', 'Kd', '4c'], answer: 0 },
        { cards: ['6h', '5d', '4c'], answer: 1, why: 'BTNのスーテッドコネクターや小さいペアが当たります。' },
        { cards: ['Kh', '7d', '2c'], answer: 0 },
        { cards: ['9h', '8d', '7c'], answer: 1 },
        { cards: ['Qs', '8d', '3c'], answer: 0 },
        { cards: ['7s', '6d', '5c'], answer: 1 },
        { cards: ['Ah', '9d', '3s'], answer: 0 },
        { cards: ['8s', '7d', '5h'], answer: 1, why: '96・64・76・55などコーラー側の手が多く当たります。' },
      ],
    },
    { t: 'h', text: 'SPRが低い' },
    {
      t: 'pot',
      steps: [
        { label: 'SRP（BTN vs BB）', pot: 5.5, stack: 97.5 },
        { label: '3bet（SBが10bbに3bet、BTNコール）', pot: 21, stack: 90 },
      ],
      caption: 'SRPのSPRは約18、3betポットは約4。',
    },
    {
      t: 'p',
      text: 'SPRが4前後なら、トップペアでもスタックを入れやすくなります。だから「強い手がどちらに多いか」が重要です。',
    },
    {
      t: 'combos',
      groups: [
        { label: '3betの代表', hands: ['AA', 'KK', 'QQ', 'AK'] },
        { label: 'コールの代表', hands: ['JJ', 'TT', '99', 'AQs', 'KQs', 'JTs'] },
      ],
      caption: '3bet側は強いペアとAK、コーラーは中くらいのペアとスーテッドが中心。',
    },
    {
      t: 'compare',
      left: { title: '高いボード', board: ['As', 'Kd', '4c'], points: ['3bet側が大きく有利', '小さなベットを高頻度で'], verdict: 'good' },
      right: { title: '低いボード', board: ['6h', '5d', '4c'], points: ['オーバーペアは強いまま', 'コーラーのコネクターが当たる', 'ベット頻度を落とす'], verdict: 'neutral' },
      caption: '3betポットでも、高いボードは3bet側、低いボードは拮抗する。',
    },
    {
      t: 'estimate',
      q: 'ポット21bb、スタック90bbのSPRは約いくつ？',
      min: 0,
      max: 20,
      step: 1,
      answer: 4,
      tolerance: 1,
      explain: '90 ÷ 21 ≈ 4.3 です。SRPの約18よりはるかに浅くなります。',
    },
    {
      t: 'quiz',
      q: 'このボードで、すでにストレートが完成しているのはどれ？',
      board: ['6h', '5d', '4c'],
      options: ['8♠7♠', 'A♣K♣', 'Q♥Q♦', 'T♠9♠'],
      optionCards: [['8s', '7s'], ['Ac', 'Kc'], ['Qh', 'Qd'], ['Ts', '9s']],
      answer: 0,
      explain: '4-5-6-7-8 でストレートです。コーラーのコネクターがオーバーペアを上回ることがあります。',
    },
    { t: 'h', text: '3bet側で打ってみる' },
    {
      t: 'play',
      title: 'SBで3bet、K-highでトップペア',
      hero: 'SB',
      heroCards: ['Ah', 'Kh'],
      villain: 'BTN',
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'BTNが2.5bbオープン。SBで **A♥K♥**。',
          q: 'どうする？',
          options: [
            { label: '10bbに3bet', good: true, why: 'AKは3betの代表。SBはコールよりレイズで入るのが基本です。' },
            { label: 'コール', good: false, why: 'SBでのコールはBBにも入られやすく、OOPで主導権も失います。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Ks', '7d', '2c'],
          pot: 21,
          say: 'BTNがコール。フロップは **K♠7♦2♣**。SPRは約4です。',
          q: '先に行動します。どうする？',
          options: [
            { label: '7bbベット', good: true, why: '3bet側に有利なドライボード。小さく打ってQQ・JJ・Kxから価値を取ります。' },
            { label: 'チェック', good: false, why: 'レンジでも手でも有利です。主導権を手放す理由がありません。' },
          ],
        },
        {
          street: 'ターン',
          board: ['4h'],
          pot: 35,
          say: 'BTNがコール。ターンは **4♥**。残りスタックは83bb。',
          q: 'どうする？',
          options: [
            { label: '18bbベット', good: true, why: '弱いKxやポケットペアはまだ払います。リバーで残り全部を入れやすいサイズです。' },
            { label: 'チェック', good: false, why: '価値を取り逃し、相手に安く引かせます。' },
          ],
        },
      ],
      outro: '3betポットはSPRが低く、トップペアトップキッカーでもスタックを入れる手です。高いボードは3bet側の主戦場です。',
    },
  ],
};

export default lesson;
