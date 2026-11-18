import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-12',
  blocks: [
    { t: 'p', text: '6人卓・全員 100bb。HJ が 2.5bb にオープン、CO がコール。あなたは BTN で A♦ Q♦ です。オープンとコールの後の 3ベットを「スクイーズ」と言います。' },
    { t: 'h', text: 'プリフロップ' },
    {
      t: 'quiz', q: 'HJ オープン、CO コール。BTN の AQs の選択は？',
      hand: ['Ad', 'Qd'],
      options: ['フォールド', 'コールして4人でフロップへ', '11bb にスクイーズ'],
      answer: 2,
      explain: 'CO はコールで強い手を 3ベットしなかった分、上限が抑えられています。HJ も2人を相手にするとスクイーズには降りやすくなります。AQs はその両方に有利なので、通常の 3ベットより大きめの 11bb にします。',
    },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: 'フォールド', folded: true },
        { pos: 'HJ', action: '2.5bb オープン → フォールド', bet: 2.5, folded: true },
        { pos: 'CO', action: 'コール → スクイーズにコール', bet: 11 },
        { pos: 'BTN', hero: true, action: '11bb にスクイーズ', bet: 11, cards: ['Ad', 'Qd'] },
        { pos: 'SB', action: 'フォールド', bet: 0.5, folded: true },
        { pos: 'BB', action: 'フォールド', bet: 1, folded: true },
      ],
      pot: 26,
      caption: '降りた HJ の 2.5bb がデッドマネーとして残ります。ポットは 26bb、残りは 89bb。',
    },
    { t: 'h', text: 'フロップ：Q♣ 8♠ 3♦' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['Ad', 'Qd'] }], board: ['Qc', '8s', '3d'], caption: 'トップペア・トップキッカー。乾いたボードです。' },
    { t: 'p', text: 'CO はチェック。スクイーズにコールした CO は、KQs・QJs・JJ〜88・AJs など、強すぎず弱すぎない手が中心です。' },
    {
      t: 'estimate', q: 'フロップ開始時の SPR（残りスタック ÷ ポット）は？',
      hand: ['Ad', 'Qd'], board: ['Qc', '8s', '3d'],
      min: 0, max: 10, step: 0.5, answer: 3.5, tolerance: 1,
      explain: '89 ÷ 26 ≒ 3.4。通常の 3ベットポットより浅く、トップペアで3ストリート使って全額に届く大きさです。',
    },
    {
      t: 'quiz', q: 'ポット 26bb、残り 89bb。選択は？',
      hand: ['Ad', 'Qd'], board: ['Qc', '8s', '3d'],
      options: ['チェック', '8bb（約3分の1）をベット', '20bb（約4分の3）をベット'],
      answer: 1,
      explain: '乾いたボードで守るべきドローはほとんどありません。小さいベットなら JJ・TT や KQ・QJ もコールしやすく、ターン・リバーで取る土台ができます。SPR 3.4 なら 8bb から始めても全額に届きます。',
    },
    { t: 'p', text: 'あなたは 8bb をベットしてコールされ、ターンの 5♥ で 28bb をベットしてコールされました。ポットは 98bb、残りは 53bb、SPR は約 0.5 です。' },
    { t: 'h', text: 'リバー：J♠' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['Ad', 'Qd'] }], board: ['Qc', '8s', '3d', '5h', 'Js'], caption: 'QJ はツーペアになり、あなたを上回りました。JJ もセットです。' },
    {
      t: 'quiz', q: 'CO はチェック。ポット 98bb、残り 53bb。選択は？',
      hand: ['Ad', 'Qd'], board: ['Qc', '8s', '3d', '5h', 'Js'],
      options: ['チェック（QJ と JJ が怖い）', '53bb のオールイン'],
      answer: 1,
      explain: '残りはポットの約半分です。CO には KQ・QT・Q9s や TT・99 など、あなたに負けていて、この値段なら降りない手がまだ多く残っています。QJ・JJ はわずかなコンボです。SPR 1 未満のトップペア・トップキッカーは全額を入れる手です。',
    },
    { t: 'p', text: 'CO は K♥ Q♥ でコール。同じ Q のペアで、キッカーの A が勝ち、あなたが 204bb を獲得しました。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['Ad', 'Qd'] }, { label: 'CO', cards: ['Kh', 'Qh'] }], board: ['Qc', '8s', '3d', '5h', 'Js'] },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 26, actions: ['HJ 2.5bb オープン', 'CO コール', 'BTN（あなた）11bb にスクイーズ', 'HJ フォールド、CO コール'] },
        { street: 'フロップ', board: ['Qc', '8s', '3d'], pot: 26, actions: ['CO チェック', 'あなた 8bb ベット', 'CO コール'] },
        { street: 'ターン', board: ['5h'], pot: 42, actions: ['CO チェック', 'あなた 28bb ベット', 'CO コール'] },
        { street: 'リバー', board: ['Js'], pot: 98, actions: ['CO チェック', 'あなた 53bb オールイン', 'CO コール'] },
        { street: 'ショーダウン', pot: 204, actions: ['AQ が KQ に勝つ'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 26, stack: 89 },
        { label: 'ターン開始', pot: 42, stack: 81 },
        { label: 'リバー開始', pot: 98, stack: 53 },
      ],
      caption: 'SPR は 3.4 → 1.9 → 0.5。スクイーズポットは最初から浅く、トップペアで全額を入れる展開になりやすいです。',
    },
    { t: 'tip', text: 'スクイーズはデッドマネーがある分、ポットが大きく SPR が小さくなります。トップペア以上なら、最初から「全額入れる前提」でサイズを組みます。' },
  ],
};

export default lesson;
