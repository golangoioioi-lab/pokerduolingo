import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-01',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。UTG で A♠A♣ を持ち、ドローの多いボードで打つ大きさを考えます。' },
    {
      t: 'play',
      title: 'UTG で AA',
      hero: 'UTG',
      heroCards: ['As', 'Ac'],
      villain: 'BTN',
      villainCards: ['Qs', 'Js'],
      steps: [
        { street: 'プリフロップ', pot: 6.5, say: 'あなたは 2.5bb でオープン。BTN だけがコールしました。残りスタックは 97.5bb です。' },
        {
          street: 'フロップ',
          board: ['Qh', '9h', '4c'],
          pot: 6.5,
          say: 'フラッシュドローと JT・KJ のストレートドローが多い濡れたボード。あなたが先に行動します。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'ドローに無料でカードを見せてしまいます。' },
            { label: '2bb（約1/3）ベット', good: false, why: 'ドローに安い値段でカードを見せ、ペアの手からも少ししか取れません。' },
            { label: '4.5bb（約2/3）ベット', good: true, why: '濡れたボードでは大きめに打ち、ドローに高い値段を払わせます。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2s'],
          pot: 15.5,
          say: 'BTN がコール。2♠ はどのドローも完成させません。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'Q のペアから取る機会を逃し、ドローにも無料でカードを見せます。' },
            { label: '10.5bb（約2/3）ベット', good: true, why: 'Q のペアとドローの両方から、もう一度まとまった額を取ります。' },
          ],
        },
        {
          street: 'リバー',
          board: ['7d'],
          pot: 36.5,
          say: 'BTN がまたコール。ドローはすべて外れ、残っているのは KQ・QJ などの Q のペアが中心です。残りは 82.5bb。',
          q: 'いくら打つ？',
          options: [
            { label: 'ポットの約1/3', good: false, why: 'コールはもらえますが、取れる額が半分ほどになります。' },
            { label: 'ポットの約2/3', good: true, why: '2回コールした Q のペアが払える上限に近いサイズです。' },
            { label: 'オールイン', good: false, why: 'ポットの2倍以上だと Q のペアはかなり降ります。' },
          ],
        },
      ],
      outro: '24bb にコールした BTN は Q♠J♠。濡れたボードの強い手は、大きめに打ってドローを咎めつつポットを育てます。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'p', text: '濡れたボードでは、ドローに安くカードを見せないことと、ペアの手から取ることを同時に狙えます。' },
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
      caption: '約3分の2ずつ打つと、3ストリートでポットは 6.5bb から 84.5bb に育ちます。毎回3分の1なら、リバー前でも約 18bb です。',
    },
    {
      t: 'estimate', q: 'リバーのポットは 36.5bb。約3分の2を打つと何bb？',
      hand: ['As', 'Ac'], board: ['Qh', '9h', '4c', '2s', '7d'],
      min: 0, max: 80, step: 1, unit: 'bb', answer: 24, tolerance: 6,
      explain: '36.5 × 2/3 ≒ 24bb です。KQ や QJ は「2回コールしたのだから」と 24bb なら払いやすくなります。',
    },
    {
      t: 'quiz', q: 'ターンの 10.5bb にもコールしてきた BTN の手として、最も多いのはどれ？',
      hand: ['As', 'Ac'], board: ['Qh', '9h', '4c', '2s'],
      options: ['AA・KK などのオーバーペア', 'Q のワンペア（KQ・QJ など）', '4x や 2x の弱いペア'],
      optionCards: [['Kd', 'Kc'], ['Qd', 'Jd'], ['4d', '3d']],
      answer: 1,
      explain: 'AA・KK はプリフロップで 3ベットされ、BTN のコールレンジにはほとんどありません。弱いペアは大きいベットを2回受けると降ります。',
    },
    { t: 'h', text: 'もう一度：大きく打つ？小さく打つ？' },
    {
      t: 'rapid',
      q: 'UTG オープンに BTN がコール。オーバーペアでフロップの先手。サイズは？',
      choices: ['大きめ（約2/3）', '小さめ（約1/3）'],
      items: [
        { cards: ['As', 'Ac'], board: ['Qh', '9h', '4c'], answer: 0, why: 'フラッシュドローとストレートドローが多い濡れたボードです。' },
        { cards: ['As', 'Ac'], board: ['Kd', '7s', '2c'], answer: 1, why: 'ドローがほとんどない乾いたボード。小さく打って弱い手からも取ります。' },
        { cards: ['Ad', 'Ah'], board: ['Js', 'Ts', '8c'], answer: 0, why: 'ストレートドローとフラッシュドローがたくさんあります。' },
        { cards: ['Kh', 'Kc'], board: ['Qd', '7c', '2h'], answer: 1, why: 'レインボーで連続していない乾いたボードです。' },
        { cards: ['As', 'Ah'], board: ['9d', '8d', '6c'], answer: 0, why: '連続したカードとフラッシュドロー。ドローに安く見せません。' },
        { cards: ['Ac', 'Ad'], board: ['Kc', '8h', '2d'], answer: 1, why: '守るべきドローが少ないボードです。' },
        { cards: ['Ks', 'Kd'], board: ['Th', '9c', '7h'], answer: 0, why: 'ストレートもフラッシュも狙える濡れたボードです。' },
        { cards: ['Ah', 'Ac'], board: ['Jd', '5c', '2s'], answer: 1, why: 'ドローはほとんどありません。' },
      ],
    },
    { t: 'tip', text: '濡れたボードの強い手は大きめ、乾いたボードは小さめが基本です。コールしてくる手が決まったら、その手が払える上限を選びます。' },
  ],
};

export default lesson;
