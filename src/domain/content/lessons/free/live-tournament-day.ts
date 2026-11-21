import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'live-tournament-day',
  blocks: [
    { t: 'h', text: 'このスタック、深い？ 浅い？' },
    { t: 'rapid', q: 'ブラインドとスタックを見て、戦い方は？（10bb 未満ならプッシュかフォールド）', choices: ['まだ普通に戦える', 'プッシュかフォールド'], items: [
      { text: 'ブラインド100/200で20,000点', answer: 0, why: '100bb あります。' },
      { text: 'ブラインド1,000/2,000で15,000点', answer: 1, why: '7.5bb です。' },
      { text: 'ブラインド600/1,200で20,000点', answer: 0, why: '約17bb。レイズかオールインが中心ですが、まだ選べます。' },
      { text: 'ブラインド2,000/4,000で30,000点', answer: 1, why: '7.5bb です。' },
      { text: 'ブラインド400/800で24,000点', answer: 0, why: '30bb あります。' },
      { text: 'ブラインド1,500/3,000で24,000点', answer: 1, why: '8bb です。' },
      { text: 'ブラインド500/1,000で9,000点', answer: 1, why: '9bb です。' },
    ] },
    { t: 'formula', text: 'スタック（bb）＝ チップ ÷ ビッグブラインド', note: '20,000 ÷ 200 ＝ 100bb' },
    { t: 'p', text: 'トーナメントは時間とともにブラインドが上がります。同じチップでも、価値はどんどん下がります。' },
    { t: 'compare', left: { title: '序盤（100/200）', points: ['20,000点 ＝ 100bb', 'フロップ以降のプレイが大事', '焦らず観察'], verdict: 'good' }, right: { title: '後半（600/1,200）', points: ['20,000点 ≈ 17bb', 'レイズかオールインが中心', 'ブラインドを取りに行く'], verdict: 'neutral' } },
    { t: 'estimate', q: 'ブラインド100/200で、20,000点は何bb？', min: 0, max: 200, step: 5, unit: 'bb', answer: 100, tolerance: 10, explain: '20,000 ÷ 200 ＝ 100bb です。' },
    { t: 'estimate', q: 'ブラインドが600/1,200に上がりました。20,000点は約何bb？', min: 0, max: 60, step: 1, unit: 'bb', answer: 17, tolerance: 3, explain: '20,000 ÷ 1,200 ≈ 17bb。6分の1近くになりました。' },
    { t: 'h', text: '当日の準備' },
    { t: 'list', items: ['開始時間、レイトレジストレーション（遅れて参加できる期間）、ブラインドの構成を確認', '身分証明書、バイイン、軽食、水、羽織るもの', '前夜はよく寝て、食事とカフェインは普段どおり'] },
    { t: 'seats', seats: [{ pos: 'UTG', action: '20,000点' }, { pos: 'HJ', action: '20,000点' }, { pos: 'CO', action: '20,000点' }, { pos: 'BTN', hero: true, action: '20,000点', cards: ['Kd', 'Jd'] }, { pos: 'SB', action: '100', bet: 0.5 }, { pos: 'BB', action: '200', bet: 1 }], caption: '受付後、席はランダムに決まります。全員が同じスタックで始まります。' },
    { t: 'quiz', q: 'トーナメント当日の準備として適切なのは？', options: ['開始時間、レイトレジストレーション、持ち物を前日までに確認する', '当日に会場で調べる', '前夜は夜更かしする', '何も食べずに臨む'], answer: 0, explain: '時間と持ち物の確認、体調の管理が基本です。長い日は体力勝負でもあります。' },
    { t: 'h', text: 'やってみよう：後半の短いスタック' },
    { t: 'play', title: 'BTN で KJs、残り9bb', hero: 'BTN', heroCards: ['Kd', 'Jd'], villain: 'BB', villainCards: ['As', '7c'], steps: [
      { street: 'プリフロップ', pot: 1.5, say: '数時間後、ブラインド1,000/2,000（アンティなし）。あなたは18,000点（9bb）。CO まで全員フォールド。', q: 'BTN で **K♦J♦**。どうする？', options: [
        { label: 'オールイン', good: true, why: '9bb なら、強い手はプッシュかフォールドで戦います。KJs は十分です。' },
        { label: 'フォールド', good: false, why: 'ブラインドが上がる前に、ここで勝負する価値があります。' },
        { label: '2bb にレイズ', good: false, why: 'コールされると残りが少なく、動きにくくなります。' }] },
      { street: 'フロップ', board: ['Kc', '8h', '3s'], pot: 18.5, say: 'SB は降り、BB が A7o でコール。フロップで K が落ちました。' },
      { street: 'ターン', board: ['2d'], pot: 18.5, say: 'ターンは**2**。' },
      { street: 'リバー', board: ['5c'], pot: 18.5, say: 'リバーは**5**。ショーダウンです。' },
    ], outro: 'まず自分のスタックが何 bb かを数えます。10bb を切ったら、プッシュかフォールドで考えます。' },
    { t: 'tip', text: '休憩では水分と軽食を取り、頭を休めます。集中が落ちたと感じたら早めに休みましょう。' },
  ],
};

export default lesson;
