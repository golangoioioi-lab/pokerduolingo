import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'what-is-poker',
  blocks: [
    { t: 'p', text: 'テキサスホールデムは、自分だけに配られる2枚と、全員で共有する場の5枚を組み合わせて役を作り、チップを取り合うゲームです。' },
    {
      t: 'cards',
      hands: [{ label: 'あなたの手札', cards: ['As', 'Ks'] }],
      board: ['Kd', '9s', '4c', '2s', 'Qh'],
      caption: '手札2枚と場の5枚、合計7枚から一番強い5枚を選びます。',
    },
    {
      t: 'quiz',
      q: 'この7枚で作れる一番強い役は？',
      hand: ['As', 'Ks'],
      board: ['Kd', '9s', '4c', '2s', 'Qh'],
      options: ['ワンペア（Kのペア）', 'フラッシュ', 'ツーペア', 'ストレート'],
      answer: 0,
      explain: 'Kが2枚でワンペアです。スペードは4枚（As Ks 9s 2s）でフラッシュに1枚足りません。',
    },
    { t: 'h', text: '勝ち方は2つ' },
    {
      t: 'compare',
      left: {
        title: 'ショーダウンで勝つ',
        cards: ['As', 'Ks'],
        board: ['Kd', '9s', '4c', '2s', 'Qh'],
        points: ['最後まで残った人が手札を見せ合う', '一番強い役の人がポットを取る'],
        verdict: 'good',
      },
      right: { title: '全員を降ろして勝つ', points: ['ベットやレイズで相手にフォールドさせる', '手札を見せずにポットを取れる'], verdict: 'good' },
      caption: 'ポットの取り方は2通りあります。',
    },
    { t: 'p', text: '多くのハンドはショーダウンまで行かずに決まります。強い手を作るだけでなく、相手に降りてもらうこともポーカーの戦い方です。' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 1.5, actions: ['SB 0.5bb・BB 1bb が強制ベット', '手札が2枚ずつ配られる'] },
        { street: 'フロップ', board: ['Kd', '9s', '4c'], actions: ['場に3枚が開く', 'ベットが入り、数人がフォールドする'] },
        { street: 'ターン', board: ['2s'], actions: ['4枚目が開く'] },
        { street: 'リバー', board: ['Qh'], actions: ['5枚目が開く', '最後のベッティングラウンド'] },
        { street: 'ショーダウン', actions: ['残った人が手札を見せ合い、強い役が勝つ'] },
      ],
      caption: '1ハンドは4つのラウンドで進みます。途中で全員が降りれば、そこでハンドは終わります。',
    },
    {
      t: 'quiz',
      q: 'この場で一番強いハンドはどれ？（ボードは共通）',
      board: ['Kd', '9s', '4c', '2s', 'Qh'],
      options: ['KJ（Kのペア）', 'QQ（Qのスリーカード）', '94（ツーペア）', 'A3（役なし）'],
      optionCards: [['Kh', 'Jd'], ['Qc', 'Qd'], ['9h', '4d'], ['Ah', '3d']],
      answer: 1,
      explain: 'ボードにQが1枚あるので、手札のQQでスリーカードになります。ツーペアやワンペアより強い役です。',
    },
    { t: 'h', text: 'テーブルとブラインド' },
    { t: 'p', text: 'このアプリでは6人卓（6-max）を前提にします。ボタンは1ハンドごとに時計回りに動き、その左隣がスモールブラインド（SB）、さらに隣がビッグブラインド（BB）を強制的に出します。' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG' },
        { pos: 'HJ' },
        { pos: 'CO' },
        { pos: 'BTN', action: 'ボタン' },
        { pos: 'SB', bet: 0.5, action: 'SB' },
        { pos: 'BB', bet: 1, action: 'BB' },
      ],
      pot: 1.5,
      caption: '6人卓。BTN の左隣が SB、その隣が BB です。',
    },
    { t: 'tip', title: 'bb で数える', text: '金額は「bb（ビッグブラインド何枚分か）」で数えます。100bb 持っている、2.5bb にレイズする、のように言えば、レートが違っても同じ話ができます。' },
    {
      t: 'quiz',
      q: 'ポットを獲得できるのはどんなとき？',
      options: ['ショーダウンで一番強い役を見せたとき', '自分以外の全員がフォールドしたとき', 'どちらの場合も獲得できる'],
      answer: 2,
      explain: 'どちらでもポットを獲得できます。相手を降ろして勝つことも、正当な勝ち方です。',
    },
  ],
};

export default lesson;
