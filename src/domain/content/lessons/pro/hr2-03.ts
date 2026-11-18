import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-03',
  blocks: [
    { t: 'p', text: '6人卓・全員 100bb。CO が 2.5bb にオープンし、あなたは BTN で Q♠ Q♥ です。3ベットポットはポットが大きく、SPR（ポットに対する残りスタックの比）が小さくなります。このハンドでは、リバーでちょうどオールインになるようにサイズを組み立てます。' },
    { t: 'cards', hands: [{ label: 'あなた（BTN）', cards: ['Qs', 'Qh'] }] },
    { t: 'h', text: 'プリフロップ' },
    {
      t: 'quiz', q: 'CO の 2.5bb オープンに対して、QQ の選択は？',
      hand: ['Qs', 'Qh'],
      options: ['フォールド', 'コール', '8bb に 3ベット'],
      answer: 2,
      explain: 'QQ は CO のレンジに大きく有利です。3ベットすれば AJ・KQ・TT・99 などからプリフロップで多くのチップを集められます。コールでは SB・BB が安く参加でき、ポットも小さいままです。ポジションのある BTN は、オープンの約3倍（7.5〜8bb）が標準サイズです。',
    },
    { t: 'p', text: '8bb に 3ベットし、CO がコール。ポットは 17.5bb、残りスタックは 92bb。SPR は 92 ÷ 17.5 ≒ 5.3 です。' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: 'フォールド', folded: true },
        { pos: 'HJ', action: 'フォールド', folded: true },
        { pos: 'CO', action: '2.5bb オープン → コール', bet: 8 },
        { pos: 'BTN', hero: true, action: '8bb に 3ベット', bet: 8, cards: ['Qs', 'Qh'] },
        { pos: 'SB', action: 'フォールド', bet: 0.5, folded: true },
        { pos: 'BB', action: 'フォールド', bet: 1, folded: true },
      ],
      pot: 17.5,
    },
    { t: 'h', text: 'フロップ：J♣ 7♦ 2♠' },
    { t: 'p', text: 'CO はチェック。コールレンジは AJ・KJ・QJs などの J、TT〜77、AQ・KQ などです。レインボーの乾いたボードで、守るべきドローはほとんどありません。' },
    {
      t: 'quiz', q: 'ポット 17.5bb。あなたの選択は？',
      hand: ['Qs', 'Qh'], board: ['Jc', '7d', '2s'],
      options: ['チェック', '6bb（約3分の1）をベット', '14bb（約80%）をベット'],
      answer: 1,
      explain: '小さいサイズなら TT・99・88 や弱い J、A ハイまでコールしてくれます。大きく打つと、それらが降りて強い J やセットだけが残ります。3ベットポットはポットがもう大きいので、3分の1 でも十分にチップが入ります。',
    },
    { t: 'p', text: '6bb ベットにコールされ、ポットは 29.5bb、残りは 86bb。' },
    { t: 'h', text: 'ターン：5♥' },
    { t: 'p', text: 'CO はチェック。5♥ はほぼ何も変えません。あなたは 19bb（約64%）をベットし、CO がコール。ポットは 67.5bb、残りは 67bb です。' },
    {
      t: 'estimate', q: 'リバー開始時の SPR（残りスタック ÷ ポット）はおよそ？',
      hand: ['Qs', 'Qh'], board: ['Jc', '7d', '2s', '5h'],
      min: 0, max: 5, step: 0.1, unit: '', answer: 1, tolerance: 0.5,
      explain: '67 ÷ 67.5 ≒ 1.0 です。SPR 1 は「ポットと同じ額を打てばオールイン」という意味。フロップ 5.3、ターン 2.9 と下がってきて、リバーでちょうどポット1杯分が残りました。',
    },
    { t: 'h', text: 'リバー：3♣' },
    { t: 'p', text: '64 や A4 のストレートは CO のレンジにほとんどありません。CO はまたチェックです。' },
    {
      t: 'quiz', q: 'ポット 67.5bb、残り 67bb。あなたの選択は？',
      hand: ['Qs', 'Qh'], board: ['Jc', '7d', '2s', '5h', '3c'],
      options: ['チェック', '25bb をベット', '67bb のオールイン'],
      answer: 2,
      explain: 'CO が2回コールした AJ・KJ・TT〜88 などは、SPR 1 では「ここまで払ったのだから」と降りにくくなります。ポットとほぼ同じオールインでもコールが期待できます。25bb だと残り 42bb を取り逃します。',
    },
    { t: 'p', text: 'オールインに CO は A♥ J♥ でコールし、あなたが 201.5bb を獲得しました。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['Qs', 'Qh'] }, { label: 'CO', cards: ['Ah', 'Jh'] }], board: ['Jc', '7d', '2s', '5h', '3c'] },
    { t: 'h', text: '振り返り' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 17.5, actions: ['CO 2.5bb オープン', 'BTN（あなた）8bb に 3ベット', 'CO コール'] },
        { street: 'フロップ', board: ['Jc', '7d', '2s'], pot: 17.5, actions: ['CO チェック', 'あなた 6bb ベット', 'CO コール'] },
        { street: 'ターン', board: ['5h'], pot: 29.5, actions: ['CO チェック', 'あなた 19bb ベット', 'CO コール'] },
        { street: 'リバー', board: ['3c'], pot: 67.5, actions: ['CO チェック', 'あなた 67bb オールイン', 'CO コール'] },
        { street: 'ショーダウン', pot: 201.5, actions: ['QQ が AJ に勝ち、201.5bb を獲得'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 17.5, stack: 92 },
        { label: 'ターン開始', pot: 29.5, stack: 86 },
        { label: 'リバー開始', pot: 67.5, stack: 67 },
      ],
      caption: 'SPR は 5.3 → 2.9 → 1.0。フロップ 3分の1、ターン 3分の2 で、リバーにポット1杯分のオールインが残ります。',
    },
    { t: 'tip', text: '3ベットポットでは、フロップの時点で「3ストリートでスタックを入れ切るには、どのサイズを並べればよいか」を考えます。SPR 5 前後なら、小・中・ポット の順で自然にオールインまで届きます。' },
  ],
};

export default lesson;
