import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'what-is-poker',
  blocks: [
    { t: 'h', text: '7枚から役を作る' },
    {
      t: 'pick5',
      q: '手札2枚と場の5枚。一番強くなる5枚をタップしてください。',
      hand: ['As', 'Ks'],
      board: ['Kd', '9s', '4c', '2s', 'Qh'],
      explain: 'K が2枚で K のワンペア。残りは A・Q・9 です。スペードは4枚なのでフラッシュにはなりません。',
    },
    { t: 'p', text: '自分だけの手札2枚と、全員で共有する場の5枚。この7枚から一番強い5枚を選んで役を作ります。' },
    {
      t: 'showdown',
      q: '同じボードで3人が勝負。勝つのは？',
      board: ['Kd', '9s', '4c', '2s', 'Qh'],
      players: [
        { label: 'あなた', cards: ['As', 'Ks'] },
        { label: '相手1', cards: ['Qc', 'Qd'] },
        { label: '相手2', cards: ['9h', '4d'] },
      ],
      explain: 'QQ はボードの Q と合わせてスリーカード。ツーペア（94）やワンペア（AK）より強い役です。',
    },
    { t: 'h', text: '勝ち方は2つ' },
    {
      t: 'compare',
      left: { title: 'ショーダウンで勝つ', cards: ['Qc', 'Qd'], board: ['Kd', '9s', '4c', '2s', 'Qh'], points: ['最後に手札を見せ合う', '一番強い役がポットを取る'], verdict: 'good' },
      right: { title: '全員を降ろして勝つ', points: ['ベットで相手をフォールドさせる', '手札を見せずにポットを取れる'], verdict: 'good' },
      caption: 'ポットの取り方は2通りです。',
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 1.5, actions: ['SB 0.5bb・BB 1bb が強制ベット', '手札が2枚ずつ配られる'] },
        { street: 'フロップ', board: ['Kd', '9s', '4c'], actions: ['場に3枚が開く'] },
        { street: 'ターン', board: ['2s'], actions: ['4枚目が開く'] },
        { street: 'リバー', board: ['Qh'], actions: ['5枚目が開く。最後のベッティングラウンド'] },
        { street: 'ショーダウン', actions: ['残った人で手札を見せ合う'] },
      ],
      caption: '1ハンドは4つのラウンドで進みます。途中で全員が降りれば、そこで終わりです。',
    },
    { t: 'h', text: '6人卓と bb' },
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
      caption: 'このアプリは6人卓が前提。BTN の左隣が SB、その隣が BB です。',
    },
    { t: 'tip', title: 'bb で数える', text: '金額は「bb（ビッグブラインド何枚分か）」で数えます。レートが違っても同じ話ができます。' },
    {
      t: 'play',
      title: '降ろして勝つ',
      hero: 'BTN',
      heroCards: ['As', 'Ks'],
      villain: 'BB',
      steps: [
        {
          street: 'プリフロップ', pot: 1.5, say: 'UTG から CO までフォールド。あなたは BTN で **A♠K♠**。', q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'AK はとても強い手です。降りる理由はありません。' },
            { label: '2.5bb にレイズ', good: true, why: '強い手はレイズで参加します。' },
          ],
        },
        {
          street: 'フロップ', board: ['Kd', '9s', '4c'], pot: 5.5, say: 'SB はフォールド、BB がコール。フロップは K-9-4 で、あなたは K のペア。BB はチェック。', q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'チェックで回ってきたので、降りなくても無料で進めます。' },
            { label: '2bb ベット', good: true, why: '強いペアです。ベットで相手に判断を迫ります。' },
          ],
        },
        { street: 'フロップ', pot: 7.5, say: 'BB はフォールド。手札を見せずに、あなたがポットを獲得しました。' },
      ],
      outro: '多くのハンドはショーダウンまで行きません。相手を降ろすのも正当な勝ち方です。',
    },
    {
      t: 'quiz',
      q: 'ポットを獲得できるのはどんなとき？',
      options: ['ショーダウンで一番強い役を見せたとき', '自分以外の全員がフォールドしたとき', 'どちらの場合も獲得できる'],
      answer: 2,
      explain: 'どちらでもポットを獲得できます。',
    },
    {
      t: 'showdown',
      q: 'もう一度。勝つのは？',
      board: ['Jh', '8h', '5c', '2h', 'Kc'],
      players: [
        { label: 'あなた', cards: ['Ad', 'Kd'] },
        { label: '相手', cards: ['9h', '7h'] },
      ],
      explain: '相手は手札の 9♥ 7♥ と場のハート3枚でフラッシュ。あなたの K のペアより強い役です。',
    },
  ],
};

export default lesson;
