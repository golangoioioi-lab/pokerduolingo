import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pf-graduation',
  blocks: [
    { t: 'h', text: '卒業試合' },
    { t: 'p', text: 'ここまでの全部を使う1ハンドです。参加、ベット、ドロー、最後の判断まで進めてみてください。' },
    {
      t: 'play',
      title: 'CO で AQ',
      hero: 'CO',
      heroCards: ['Ah', 'Qh'],
      villain: 'BB',
      villainCards: ['8s', '7s'],
      steps: [
        { street: 'プリフロップ', pot: 1.5, say: 'UTG と HJ がフォールド。あなたは CO で **A♥Q♥**。', q: 'どうする？', options: [
          { label: '2.5bb レイズ', good: true, why: 'AQ の同じマークは強い手。レイズで参加します。' },
          { label: 'コール（1bb）', good: false, why: '最初に参加するときは、コールではなくレイズで入ります。' },
          { label: 'フォールド', good: false, why: 'どの席からでも参加できる強い手です。' },
        ] },
        { street: 'フロップ', board: ['Qc', '8h', '4h'], pot: 5.5, say: 'BTN と SB はフォールド、BB がコール。Q のペアと、ハートが4枚。BB はチェック。', q: 'どうする？', options: [
          { label: '3bb ベット', good: true, why: '一番強いペアに、フラッシュの見込みもあります。' },
          { label: 'フォールド', good: false, why: 'Q のペアで、しかもフラッシュドローです。' },
        ] },
        { street: 'ターン', board: ['2s'], pot: 11.5, say: 'BB はコール。ターンは 2。BB はまたチェック。', q: 'どうする？', options: [
          { label: '8bb ベット', good: true, why: 'まだ弱いペアから払ってもらえます。' },
          { label: 'オールイン（94.5bb）', good: false, why: '大きすぎると、弱い手は全部降りてしまいます。' },
        ] },
        { street: 'リバー', board: ['7h'], pot: 27.5, say: 'BB はコール。ハートが来て、A から始まる**フラッシュ**。BB が 15bb ベット。', q: 'どうする？', options: [
          { label: 'レイズ 45bb', good: true, why: 'A から始まるフラッシュはとても強い手。もっと取りにいけます。' },
          { label: 'コール', good: true, why: '勝てる手です。コールでも損はしません。' },
          { label: 'フォールド', good: false, why: '一番強い手を降りる理由はありません。' },
        ] },
      ],
      outro: 'BB はツーペアでした。強い手で参加し、小さめにベットし、完成したら大きく取る。これが基本の形です。',
    },
    {
      t: 'rapid',
      q: '前の人は全員フォールド。2.5bb にレイズして参加する？',
      choices: ['参加する', 'フォールド'],
      items: [
        { text: 'UTG', cards: ['As', '5s'], answer: 0 },
        { text: 'UTG', cards: ['Qh', '9d'], answer: 1, why: 'UTG では、マークの違う Q9 は弱すぎます。' },
        { text: 'BTN', cards: ['Qc', '9h'], answer: 0, why: 'BTN なら Q9 で参加できます。' },
        { text: 'UTG', cards: ['5d', '4d'], answer: 1 },
        { text: 'BTN', cards: ['5c', '4c'], answer: 0 },
        { text: 'CO', cards: ['Ad', '7s'], answer: 0 },
        { text: 'UTG', cards: ['Ac', '7h'], answer: 1, why: 'UTG で A のバラバラな手は AT 以上です。' },
        { text: 'BTN', cards: ['7c', '2d'], answer: 1 },
        { text: 'BTN', cards: ['2h', '2s'], answer: 0 },
        { text: 'UTG', cards: ['Kd', 'Kh'], answer: 0 },
      ],
    },
    {
      t: 'outs',
      q: 'ストレート以上になるカードを全部タップ。',
      hand: ['Th', '9h'],
      board: ['8h', '7c', '2h'],
      target: 'ストレート',
      explain: 'ハート9枚と、ハート以外の J と 6 が3枚ずつで 15枚。とても強いドローです。',
    },
    {
      t: 'showdown',
      q: '最後の見せ合い。勝つのは誰？',
      board: ['Ah', 'Jd', '8c', '8s', '3h'],
      players: [{ label: 'あなた', cards: ['Ad', 'Kc'] }, { label: '相手A', cards: ['Jc', 'Js'] }, { label: '相手B', cards: ['8d', '3c'] }],
      explain: '相手A は J のフルハウス（JJJ88）、相手B は 8 のフルハウス（88833）。同じフルハウスなら、3枚の数字が大きい相手A の勝ちです。',
    },
    { t: 'tip', title: '卒業おめでとうございます', text: '強い手で参加する、外れたら降りる、払う額ともらえる額を比べる。この3つができれば、もうテーブルで遊べます。次はほかのコースで1つずつ深めていきましょう。' },
  ],
};

export default lesson;
