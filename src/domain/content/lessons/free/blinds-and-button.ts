import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'blinds-and-button',
  blocks: [
    { t: 'p', text: 'ホールデムでは、テーブルに「ボタン」と呼ばれる目印が置かれます。誰がブラインドを払い、誰から行動するかは、すべてこのボタンの位置で決まります。ここでは6人テーブル（6-max）で見ていきます。' },
    { t: 'h', text: 'ボタンは毎ハンド1つずつ動く' },
    { t: 'p', text: 'ボタン（BTN）は、その回の形式上のディーラー役を示す目印です。1ハンド終わるごとに左隣（時計回り）へ1席動き、全員のポジションも1つずつずれます。6人なら6ハンドで一周します。' },
    { t: 'h', text: 'SB と BB' },
    { t: 'p', text: 'ボタンの左隣がスモールブラインド（SB）、その左隣がビッグブラインド（BB）です。2人はカードが配られる前に、決められた額を強制的にポットへ出します。' },
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
      caption: 'ボタンの左隣から SB、BB の順。この2席だけが先にチップを出します。',
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
      explain: 'SB 0.5bb + BB 1bb = 1.5bb です。この最初のポットを取りにいく理由が、ゲームを動かします。',
    },
    { t: 'p', text: '「bb」はビッグブラインド1つ分の額を表す単位です。1/2 のゲームなら SB が 1、BB が 2 なので、100bb は 200 にあたります。' },
    {
      t: 'estimate',
      q: '1/2 のゲーム（BB = 2）で、100bb のスタックはいくら？',
      min: 0,
      max: 400,
      step: 10,
      answer: 200,
      tolerance: 20,
      explain: '100bb × BB の額 2 = 200 です。',
    },
    {
      t: 'quiz',
      q: '6-max で、あなたは今のハンドで BB でした。次のハンドのあなたのポジションは？',
      options: ['SB', 'UTG', 'BTN', 'もう一度 BB'],
      answer: 1,
      explain: 'ボタンが左へ1つ動くと、全員のポジションも1つずれます。BB の次は UTG です（BTN → SB → BB → UTG → HJ → CO の順に回ります）。',
    },
    { t: 'h', text: 'ブラインドがある理由' },
    { t: 'p', text: 'ブラインドがなければ、全員が AA のような強い手を待ってフォールドし続けても損をしません。最初からポットにチップがあるので、それを取りにいく理由が生まれます。ブラインドはボタンと一緒に回るので、全員が同じ頻度で払います。' },
    { t: 'h', text: '行動の順番' },
    { t: 'p', text: 'プリフロップは BB の左隣（UTG）から時計回りに行動し、SB と BB が最後です。フロップ以降は、残っている人のうち SB に近い人から行動し、BTN が最後です。' },
    {
      t: 'compare',
      left: {
        title: 'プリフロップ',
        points: ['UTG から時計回りに行動', 'UTG → HJ → CO → BTN → SB → BB', 'ブラインドの2人が最後'],
        verdict: 'neutral',
      },
      right: {
        title: 'フロップ以降',
        points: ['SB に近い人から行動', 'SB → BB → UTG → HJ → CO → BTN', '残っている人のみ。BTN が最後'],
        verdict: 'neutral',
      },
      caption: '行動順はプリフロップとフロップ以降で変わります。',
    },
    {
      t: 'quiz',
      q: 'フロップに SB・CO・BTN の3人が残った。フロップで最初に行動するのは？',
      board: ['Qc', '8d', '3s'],
      options: ['CO', 'BTN', 'SB'],
      answer: 2,
      explain: 'フロップ以降は残っている人のうち SB に近い順に行動します。SB → CO → BTN の順なので、最初は SB です。',
    },
    { t: 'tip', text: 'フロップ以降で最後に行動できる BTN は、相手の行動を見てから決められるので有利です。詳しくはポジションのレッスンで扱います。' },
  ],
};

export default lesson;
