import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-01',
  blocks: [
    { t: 'p', text: '6人卓・全員 100bb。UTG で A♠ A♣。最強のハンドでも、ドローの多いボードでは打つ大きさで利益が変わります。' },
    { t: 'cards', hands: [{ label: 'あなた（UTG）', cards: ['As', 'Ac'] }] },
    { t: 'h', text: 'プリフロップ' },
    { t: 'p', text: '2.5bb オープンに BTN だけがコール。ポットは 6.5bb、残りスタックは 97.5bb です。' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', hero: true, action: '2.5bb オープン', bet: 2.5, cards: ['As', 'Ac'] },
        { pos: 'HJ', action: 'フォールド', folded: true },
        { pos: 'CO', action: 'フォールド', folded: true },
        { pos: 'BTN', action: 'コール', bet: 2.5 },
        { pos: 'SB', action: 'フォールド', bet: 0.5, folded: true },
        { pos: 'BB', action: 'フォールド', bet: 1, folded: true },
      ],
      pot: 6.5,
      caption: 'BTN のコールレンジは QJs・JTs などのスーテッドと 99〜66 が中心。AA・KK・AK は 3ベットされるので少ないです。',
    },
    { t: 'h', text: 'フロップ：Q♥ 9♥ 4♣' },
    { t: 'p', text: 'オーバーペアですが、フラッシュドローと JT・KJ などのストレートドローが多い濡れたボードです。' },
    {
      t: 'quiz', q: 'ポット 6.5bb。あなたが先に行動します。選択は？',
      hand: ['As', 'Ac'], board: ['Qh', '9h', '4c'],
      options: ['チェックして相手に打たせる', '2bb（約3分の1）をベット', '4.5bb（約3分の2）をベット'],
      answer: 2,
      explain: 'BTN のレンジにはペアに加えてドローがたくさんあります。ドローには安くカードを見せず、ペアの手からはまとまった額を取ります。乾いたボードの小さいベットとは逆に、濡れたボードでは大きめに打つのが基本です。',
    },
    { t: 'p', text: '4.5bb にコールされ、ポットは 15.5bb。ターンの 2♠ はドローを完成させません。10.5bb ベットにもコールされ、ポットは 36.5bb、残りは 82.5bb です。' },
    { t: 'h', text: 'ターン：2♠' },
    {
      t: 'quiz', q: 'ターンの 10.5bb にもコールしてきた BTN の手として、最も多いのはどれ？',
      hand: ['As', 'Ac'], board: ['Qh', '9h', '4c', '2s'],
      options: ['AA・KK などのオーバーペア', 'Q のワンペア（KQ・QJ など）', '4x や 2x の弱いペア'],
      optionCards: [['Kd', 'Kc'], ['Qd', 'Jd'], ['4d', '3d']],
      answer: 1,
      explain: 'AA・KK はプリフロップで 3ベットされ、BTN のコールレンジにはほとんどありません。弱いペアは大きいベットを2回受けると降ります。残るのは KQ・QJ・QT などの Q のワンペアと、ハートやストレートのドローです。',
    },
    { t: 'h', text: 'リバー：7♦' },
    { t: 'p', text: 'ドローはすべて外れました。ポット 36.5bb、残り 82.5bb。コールしてくるのは Q のワンペアです。' },
    {
      t: 'estimate', q: 'リバーでポットの約3分の2をベットします。何bb？',
      hand: ['As', 'Ac'], board: ['Qh', '9h', '4c', '2s', '7d'],
      min: 0, max: 80, step: 1, unit: 'bb', answer: 24, tolerance: 6,
      explain: '36.5 × 2/3 ≒ 24bb です。KQ や QJ は「2回コールしたのだから」と 24bb なら払いやすい一方、12bb では取れる額が半分、オールインではかなり降ります。コールしてくる手が決まっているときは、その手が払える上限のサイズを選びます。',
    },
    { t: 'p', text: '24bb ベットに BTN がコールして Q♠ J♠ を見せました。あなたの獲得は 84.5bb です。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['As', 'Ac'] }, { label: 'BTN', cards: ['Qs', 'Js'] }], board: ['Qh', '9h', '4c', '2s', '7d'] },
    { t: 'h', text: '振り返り' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 6.5, actions: ['UTG（あなた）2.5bb オープン', 'BTN コール、ほかはフォールド'] },
        { street: 'フロップ', board: ['Qh', '9h', '4c'], pot: 6.5, actions: ['あなた 4.5bb ベット', 'BTN コール'] },
        { street: 'ターン', board: ['2s'], pot: 15.5, actions: ['あなた 10.5bb ベット', 'BTN コール'] },
        { street: 'リバー', board: ['7d'], pot: 36.5, actions: ['あなた 24bb ベット', 'BTN コール'] },
        { street: 'ショーダウン', pot: 84.5, actions: ['AA が QJ に勝ち、84.5bb を獲得'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 6.5, stack: 97.5 },
        { label: 'ターン開始', pot: 15.5, stack: 93 },
        { label: 'リバー開始', pot: 36.5, stack: 82.5 },
        { label: '決着', pot: 84.5, stack: 58.5 },
      ],
      caption: '約3分の2ずつ打つと、3ストリートでポットは 6.5bb から 84.5bb に育ちます。',
    },
    { t: 'tip', text: '毎ストリート 3分の1 だけ打っていたら、リバー前のポットは約 18bb にしかなりません（今回は 36.5bb）。濡れたボードの強い手は、大きく打ってドローを咎めつつポットを育てます。' },
  ],
};

export default lesson;
