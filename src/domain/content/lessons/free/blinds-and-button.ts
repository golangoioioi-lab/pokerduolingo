import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'blinds-and-button',
  blocks: [
    { t: 'h', text: 'ボタンの左に2人' },
    {
      t: 'quiz',
      q: 'BTN の左隣で、カードが配られる前に 0.5bb を出す席は？',
      options: ['SB', 'BB', 'UTG'],
      answer: 0,
      explain: 'BTN の左隣が SB（0.5bb）、その隣が BB（1bb）です。',
    },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG' },
        { pos: 'HJ' },
        { pos: 'CO' },
        { pos: 'BTN', action: 'ボタン' },
        { pos: 'SB', bet: 0.5 },
        { pos: 'BB', bet: 1 },
      ],
      pot: 1.5,
      caption: 'ボタン（BTN）の左隣が SB、その隣が BB。この2人だけがカードの前にチップを出します。',
    },
    {
      t: 'estimate',
      q: 'ブラインドが出そろった時点で、ポットは何 bb？',
      min: 0,
      max: 4,
      step: 0.5,
      unit: 'bb',
      answer: 1.5,
      tolerance: 0.25,
      explain: 'SB 0.5bb + BB 1bb = 1.5bb。この最初のポットを取り合うことでゲームが動きます。',
    },
    { t: 'p', text: 'ボタンは1ハンドごとに左へ1席動き、全員の席の名前も1つずれます。ブラインドも一緒に回るので、全員が同じ頻度で払います。' },
    {
      t: 'quiz',
      q: '今のハンドであなたは BB。次のハンドのあなたの席は？',
      options: ['SB', 'UTG', 'BTN', 'もう一度 BB'],
      answer: 1,
      explain: 'BTN → SB → BB → UTG → HJ → CO の順に回ります。BB の次は UTG です。',
    },
    {
      t: 'estimate',
      q: '1/2 のゲーム（BB = 2）で、100bb のスタックはいくら？',
      min: 0,
      max: 400,
      step: 10,
      answer: 200,
      tolerance: 20,
      explain: '1bb は BB の額。100 × 2 = 200 です。',
    },
    { t: 'h', text: '行動の順番' },
    {
      t: 'compare',
      left: { title: 'プリフロップ', points: ['UTG → HJ → CO → BTN → SB → BB', 'ブラインドの2人が最後'], verdict: 'neutral' },
      right: { title: 'フロップ以降', points: ['SB → BB → UTG → HJ → CO → BTN', '残っている人のみ。BTN が最後'], verdict: 'neutral' },
      caption: 'プリフロップだけ順番が違います。',
    },
    {
      t: 'rapid',
      q: 'フロップ以降、先に行動するのはどっち？',
      choices: ['左', '右'],
      items: [
        { text: 'SB ／ BTN', answer: 0 },
        { text: 'CO ／ BB', answer: 1, why: 'ブラインドはフロップ以降、先に行動します。' },
        { text: 'BTN ／ HJ', answer: 1, why: 'BTN はフロップ以降いつも最後です。' },
        { text: 'BB ／ UTG', answer: 0 },
        { text: 'SB ／ BB', answer: 0 },
        { text: 'BTN ／ SB', answer: 1, why: 'SB が最初、BTN が最後です。' },
        { text: 'HJ ／ CO', answer: 0 },
        { text: 'CO ／ UTG', answer: 1, why: 'UTG のほうが SB に近い順番です。' },
      ],
    },
    { t: 'h', text: 'BTN で遊んでみる' },
    {
      t: 'play',
      title: '最後に動ける席',
      hero: 'BTN',
      heroCards: ['Ad', 'Js'],
      villain: 'BB',
      steps: [
        {
          street: 'プリフロップ', pot: 1.5, say: 'UTG・HJ・CO がフォールド。あなたは BTN で **A♦J♠**。', q: 'どうする？',
          options: [
            { label: '2.5bb にレイズ', good: true, why: 'BTN から AJ は十分強い手です。' },
            { label: 'フォールド', good: false, why: 'ブラインドの 1.5bb を取りに行ける場面です。' },
          ],
        },
        {
          street: 'フロップ', board: ['Qc', '7h', '3d'], pot: 5.5, say: 'SB はフォールド、BB がコール。フロップが開きました。', q: '先に行動するのは？',
          options: [
            { label: 'BB', good: true, why: 'フロップ以降は SB に近い順。BTN は最後です。' },
            { label: 'あなた（BTN）', good: false, why: 'BTN はフロップ以降いつも最後に行動します。' },
          ],
        },
        {
          street: 'フロップ', pot: 5.5, say: 'BB はチェック。あなたは BB の行動を見てから決められます。', q: 'どうする？',
          options: [
            { label: '2bb ベット', good: true, why: '相手の弱さを見てから小さく打てます。' },
            { label: 'チェック', good: true, why: '無料でターンを見るのも有力です。僅差です。' },
          ],
        },
      ],
      outro: '最後に動ける BTN は、相手の行動を見てから決められます。これがポジションの有利さです。',
    },
  ],
};

export default lesson;
