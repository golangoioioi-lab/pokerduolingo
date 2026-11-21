import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'opp-player-map',
  blocks: [
    { t: 'h', text: 'まず分けてみる' },
    {
      t: 'rapid',
      q: 'VPIP / PFR（%）を見て。タイト？ルース？',
      choices: ['タイト', 'ルース'],
      items: [
        { text: 'VPIP 12 / PFR 10', answer: 0 },
        { text: 'VPIP 48 / PFR 7', answer: 1 },
        { text: 'VPIP 17 / PFR 14', answer: 0 },
        { text: 'VPIP 34 / PFR 28', answer: 1, why: '30% を超えればルース寄りです。PFR が高くてもルースです。' },
        { text: 'VPIP 38 / PFR 12', answer: 1 },
        { text: 'VPIP 15 / PFR 5', answer: 0, why: '参加が少なければタイト。コールが多いのはパッシブの軸です。' },
        { text: 'VPIP 42 / PFR 35', answer: 1 },
        { text: 'VPIP 18 / PFR 16', answer: 0 },
      ],
    },
    { t: 'p', text: '相手は「参加の広さ（タイト / ルース）」と「攻撃性（パッシブ / アグレッシブ）」の2軸で分けます。6人卓では VPIP 20% 未満ならタイト、30% 超ならルースが目安です。' },
    {
      t: 'table',
      head: ['', 'パッシブ', 'アグレッシブ'],
      rows: [
        ['タイト', 'タイトパッシブ（ニットを含む）', 'TAG'],
        ['ルース', 'ルースパッシブ（ステーション）', 'LAG（極端ならマニアック）'],
      ],
    },
    {
      t: 'quiz',
      q: 'VPIP 35%、PFR 30%、AF 4 の相手はどのタイプに近い？',
      options: ['LAG', 'タイトパッシブ', 'コーリングステーション', 'ニット'],
      answer: 0,
      explain: 'VPIP 30% 超でルース、PFR との差が小さく AF も高いのでアグレッシブ。LAG です。',
    },
    { t: 'h', text: '同じ卓にいろいろな相手' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: 'ニット 12/10' },
        { pos: 'HJ', action: 'TAG 23/19' },
        { pos: 'CO', action: 'ステーション 48/7' },
        { pos: 'BTN', hero: true, action: 'あなた' },
        { pos: 'SB', action: 'LAG 34/28' },
        { pos: 'BB', action: 'レクリエーショナル 38/12' },
      ],
      caption: 'ステーションには大きなバリュー、LAG には3betへの備え、ニットのオープンには慎重に。',
    },
    {
      t: 'estimate',
      q: 'VPIP 20% の相手は、1326 コンボのうち約何コンボで参加している？',
      min: 0,
      max: 700,
      step: 10,
      unit: 'コンボ',
      answer: 265,
      tolerance: 70,
      explain: '1326 × 0.2 ≈ 265 コンボ。35% なら約 464 コンボです。',
    },
    { t: 'h', text: '相手のやりすぎの逆をする' },
    {
      t: 'compare',
      left: { title: '降りすぎる相手', points: ['スチールと3betブラフを増やす', '相手のレイズには素直に降りる'], verdict: 'neutral' },
      right: { title: 'コールしすぎる相手', points: ['ブラフをほぼやめる', 'バリューを大きく、広く'], verdict: 'neutral' },
    },
    {
      t: 'quiz',
      q: 'タイトパッシブな相手がターンでレイズしてきました。あなたはトップペア。読みは？',
      hand: ['Ah', 'Jd'],
      board: ['Jc', '8h', '3d', '2s'],
      options: ['かなり強い手が多い', 'ブラフが多い', 'ドローが中心'],
      answer: 0,
      explain: 'パッシブな相手が自分からレイズするのは、ほとんど強い手のときです。',
    },
    {
      t: 'rapid',
      q: 'この相手に対して、増やすのはどっち？',
      choices: ['ブラフ', 'バリューベット'],
      items: [
        { text: 'ニット。ベットによく降りる', answer: 0 },
        { text: 'コーリングステーション', answer: 1, why: '降りない相手にはブラフが通りません。' },
        { text: 'ブラインドをほとんど守らないタイトな相手', answer: 0 },
        { text: '45 / 8、WTSD 38%', answer: 1 },
        { text: 'Fold to 3bet 70% のレギュラー', answer: 0, why: '3betブラフが通りやすい相手です。' },
        { text: 'AF 0.8、何でもリバーまでコール', answer: 1 },
      ],
    },
    { t: 'warn', text: 'タイプは目安です。負けが込むと荒くなるなど状況で変わるので、実際の行動を見て更新します。' },
  ],
};

export default lesson;
