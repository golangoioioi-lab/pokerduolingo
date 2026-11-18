import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-11',
  blocks: [
    { t: 'p', text: '6人卓・全員 100bb。CO が 2.5bb にオープンし、あなたは BB で 7♠ 7♦ をコールします。テーマは、ドローの多いボードでセットを作ったときの「チェックレイズ」です。' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: 'フォールド', folded: true },
        { pos: 'HJ', action: 'フォールド', folded: true },
        { pos: 'CO', action: '2.5bb オープン', bet: 2.5 },
        { pos: 'BTN', action: 'フォールド', folded: true },
        { pos: 'SB', action: 'フォールド', bet: 0.5, folded: true },
        { pos: 'BB', hero: true, action: 'コール', bet: 2.5, cards: ['7s', '7d'] },
      ],
      pot: 5.5,
    },
    { t: 'h', text: 'フロップ：J♥ 7♣ 3♥' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['7s', '7d'] }], board: ['Jh', '7c', '3h'], caption: '真ん中のセット。ハートのフラッシュドローがあります。' },
    { t: 'p', text: 'ポットは 5.5bb、残りは 97.5bb。あなたがチェックし、CO が 2bb（約36%）をベットしました。' },
    {
      t: 'quiz', q: 'あなたの選択は？',
      hand: ['7s', '7d'], board: ['Jh', '7c', '3h'],
      options: ['コールしてターンでチェックレイズを狙う', '8bb にチェックレイズ', '97.5bb のオールイン'],
      answer: 1,
      explain: 'ハートが落ちるとセットでも負けることがあります。いまチェックレイズすれば、AJ・KJ のようなトップペアや A♥x♥ のドローから、まだ有利なうちにチップを集められます。オールインは J のペアをほとんど降ろしてしまいます。',
    },
    {
      t: 'estimate', q: 'CO が A♥ 5♥ を持っているとします。ターンとリバーの2枚を見たとき、フラッシュが完成する確率は約何%？',
      board: ['Jh', '7c', '3h'],
      min: 0, max: 80, step: 5, unit: '%', answer: 35, tolerance: 10,
      explain: '残りのハートは 13 − 4（J♥・3♥・A♥・5♥）= 9 枚、見えていないカードは 47 枚。2枚で当たる確率は 1 − (38/47 × 37/46) ≒ 35% です。ここで高い値段を払わせる価値があります。',
    },
    { t: 'p', text: 'あなたは 8bb にチェックレイズし、CO はコール。ポットは 21.5bb、残りは 89.5bb です。ターンは 2♠ でフラッシュは完成しませんでした。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['7s', '7d'] }], board: ['Jh', '7c', '3h', '2s'] },
    {
      t: 'quiz', q: 'ポット 21.5bb。あなたが先に行動します。選択は？',
      hand: ['7s', '7d'], board: ['Jh', '7c', '3h', '2s'],
      options: ['チェックして CO に打たせる', '14bb（約3分の2）をベット', '5bb（約4分の1）をベット'],
      answer: 1,
      explain: 'CO のトップペアもドローも 14bb にはコールしやすい手です。チェックすればドローに無料でリバーを見せ、5bb ではドローに安い値段を与えてしまいます。',
    },
    { t: 'p', text: 'あなたは 14bb をベットし、CO がコール。ポットは 49.5bb、残りは 75.5bb です。リバーは K♦ で、フラッシュは外れました。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['7s', '7d'] }], board: ['Jh', '7c', '3h', '2s', 'Kd'] },
    {
      t: 'estimate', q: 'ポット 49.5bb に対して、約70%のバリューベットは何 bb？',
      hand: ['7s', '7d'], board: ['Jh', '7c', '3h', '2s', 'Kd'],
      min: 0, max: 75, step: 1, unit: 'bb', answer: 35, tolerance: 6,
      explain: '49.5 × 0.7 ≒ 35bb。フラッシュは外れているので、トップペアやツーペアは 34〜35bb にもコールします。オールイン（ポットの1.5倍）にすると AJ や QJ はかなり降りてしまいます。',
    },
    { t: 'p', text: 'あなたは 34bb をベット。CO は A♠ J♠ でコールし、117.5bb を獲得しました。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['7s', '7d'] }, { label: 'CO', cards: ['As', 'Js'] }], board: ['Jh', '7c', '3h', '2s', 'Kd'] },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 5.5, actions: ['CO 2.5bb オープン', 'BB（あなた）コール'] },
        { street: 'フロップ', board: ['Jh', '7c', '3h'], pot: 5.5, actions: ['あなた チェック', 'CO 2bb ベット', 'あなた 8bb にチェックレイズ', 'CO コール'] },
        { street: 'ターン', board: ['2s'], pot: 21.5, actions: ['あなた 14bb ベット', 'CO コール'] },
        { street: 'リバー', board: ['Kd'], pot: 49.5, actions: ['あなた 34bb ベット', 'CO コール'] },
        { street: 'ショーダウン', pot: 117.5, actions: ['セットがトップペアに勝つ'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 5.5, stack: 97.5 },
        { label: 'ターン開始', pot: 21.5, stack: 89.5 },
        { label: 'リバー開始', pot: 49.5, stack: 75.5 },
        { label: '決着', pot: 117.5, stack: 41.5 },
      ],
      caption: 'チェックレイズでポットが約4倍になり、ターン・リバーのベットも大きくできました。',
    },
    { t: 'tip', text: 'ドローの多いボードの強い手は、チェックレイズで早くポットを大きくし、ドローに高い値段を払わせます。' },
  ],
};

export default lesson;
