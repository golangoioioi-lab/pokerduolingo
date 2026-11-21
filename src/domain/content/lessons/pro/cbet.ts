import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'cbet',
  blocks: [
    { t: 'h', text: 'まず判断してみる' },
    {
      t: 'rapid',
      q: 'BTN でオープン、BB がコール。K♠7♦2♣ で BB はチェック。Cベットする？',
      choices: ['ベット', 'チェック'],
      items: [
        { cards: ['Ah', 'Qd'], board: ['Ks', '7d', '2c'], answer: 0, why: 'ドライな高いボードは、小さく広く打ちます。' },
        { cards: ['Kh', 'Qh'], board: ['Ks', '7d', '2c'], answer: 0 },
        { cards: ['7h', '6h'], board: ['Ks', '7d', '2c'], answer: 1, why: 'セカンドペアはショーダウンバリューがあるのでチェックします。' },
        { cards: ['Qh', 'Jh'], board: ['Ks', '7d', '2c'], answer: 0, why: '当たっていなくても、相手の弱い手を降ろせます。' },
        { cards: ['9s', '9c'], board: ['Ks', '7d', '2c'], answer: 1, why: '打つと弱い手は降り、強い手だけが残ります。ベットを混ぜる戦略もある接戦です。' },
        { cards: ['2h', '2d'], board: ['Ks', '7d', '2c'], answer: 0 },
        { cards: ['5h', '4h'], board: ['Ks', '7d', '2c'], answer: 0, why: '勝てない手でも、小さいベットなら降ろせば利益です。' },
        { cards: ['7s', '7c'], board: ['Ks', '7d', '2c'], answer: 0 },
      ],
    },
    { t: 'p', text: 'プリフロップで最後にレイズした人がフロップで打つのが **Cベット** です。頻度とサイズはボードで決まります。' },
    { t: 'h', text: 'ドライは小さく広く、ウェットは大きく選んで' },
    {
      t: 'compare',
      left: { title: 'ドライ（K♠7♦2♣）', board: ['Ks', '7d', '2c'], points: ['高頻度で、ポットの約1/3', '安いコストで広く打つ'], verdict: 'good' },
      right: { title: 'ウェット（8♠7♠6♦）', board: ['8s', '7s', '6d'], points: ['強い手とドローを選ぶ', '大きく（2/3〜ポット）'], verdict: 'neutral' },
    },
    {
      t: 'seats',
      seats: [
        { pos: 'BTN', hero: true, action: 'Cベット 約1.8bb' },
        { pos: 'SB', folded: true },
        { pos: 'BB', action: 'チェック' },
      ],
      pot: 5.5,
      board: ['Ks', '7d', '2c'],
      caption: 'ポット 5.5bb の 1/3 は約 1.8bb。',
    },
    { t: 'p', text: 'K72 では相手にドローがほとんどなく、小さいベットでも弱い手を多く降ろせます。相手が2人以上のときや OOP では頻度を下げます。' },
    {
      t: 'quiz',
      q: 'このボードで BTN が Cベットするなら、サイズの目安は？',
      board: ['8s', '7s', '6d'],
      options: ['ポットの約1/3', 'ポットの2/3〜ポット', 'ベットしない'],
      answer: 1,
      explain: 'ドローが多いボードでは大きく打ちます。頻度は下げ、強い手とドローを選びます。',
    },
    {
      t: 'warn',
      title: '「とりあえず Cベット」は危険',
      text: '毎回打つと、レイズやフロートで咎められます。中くらいの手はチェックも使います。',
    },
    { t: 'h', text: 'もう一度：打つ、そして止める' },
    {
      t: 'play',
      title: 'BTN の QJs、K-7-2',
      hero: 'BTN',
      heroCards: ['Qh', 'Jh'],
      villain: 'BB',
      villainCards: ['7c', '6c'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 1.5,
          say: 'CO までフォールド。あなたは BTN で **Q♥J♥**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'BTN なら十分オープンできる手です。' },
            { label: '2.5bb オープン', good: true, why: 'スーテッドのブロードウェイはオープンします。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Ks', '7d', '2c'],
          pot: 5.5,
          say: 'BB がコール。フロップは **K♠7♦2♣**。BB はチェック。',
          q: 'Q ハイ。どうする？',
          options: [
            { label: '1.8bb ベット', good: true, why: '安いコストで、相手の弱い手を降ろせます。' },
            { label: 'チェック', good: false, why: 'チェックもありますが、このボードは小さく広く打つのが基本です（接戦）。' },
            { label: '5bb ベット', good: false, why: '大きくする理由がありません。' },
          ],
        },
        {
          street: 'ターン',
          board: ['3c'],
          pot: 9.1,
          say: 'BB がコール。ターンは **3♣**。BB はチェック。',
          q: 'ドローもない Q ハイ。どうする？',
          options: [
            { label: 'チェック', good: true, why: 'コールした相手はペアを持っていることが多いです。無料でリバーを見ます。' },
            { label: '6bb ベット', good: false, why: 'K や 7 のペアは降りません。ブラフを続けるなら、もっとエクイティのある手で。' },
          ],
        },
        {
          street: 'リバー',
          board: ['Jd'],
          pot: 9.1,
          say: 'リバーは **J♦**。J のペアになりました。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: '7 のペアには勝っていますが、打っても K には負け、弱い手は払いません。' },
            { label: '7bb ベット', good: false, why: '払ってくれるのは K 以上が中心です。' },
          ],
        },
      ],
      outro: 'Cベットは「打つ手」と「止める手」を分けると利益が残ります。',
    },
    {
      t: 'estimate',
      q: 'ポット 5.5bb。ドライボードで約 1/3 サイズの Cベットは何 bb？',
      board: ['Ks', '7d', '2c'],
      min: 0,
      max: 6,
      step: 0.1,
      unit: 'bb',
      answer: 1.8,
      tolerance: 0.5,
      explain: '5.5 × 1/3 ≈ 1.8bb です。',
    },
  ],
};

export default lesson;
