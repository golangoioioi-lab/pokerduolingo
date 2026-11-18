import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-14',
  blocks: [
    { t: 'p', text: '6人卓・全員 100bb。あなたは BTN で A♥ 7♥ を持って 2.5bb にオープンし、BB がコール。セカンドペアのような中くらいの手は、チェックで回してポットを小さく保ち、最後に小さく打って薄いバリューを取ります。' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: 'フォールド', folded: true },
        { pos: 'HJ', action: 'フォールド', folded: true },
        { pos: 'CO', action: 'フォールド', folded: true },
        { pos: 'BTN', hero: true, action: '2.5bb オープン', bet: 2.5, cards: ['Ah', '7h'] },
        { pos: 'SB', action: 'フォールド', bet: 0.5, folded: true },
        { pos: 'BB', action: 'コール', bet: 2.5 },
      ],
      pot: 5.5,
    },
    { t: 'h', text: 'フロップ：Q♠ 7♦ 3♣' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['Ah', '7h'] }], board: ['Qs', '7d', '3c'], caption: '7 のセカンドペア、キッカーは A。' },
    { t: 'p', text: 'ポットは 5.5bb。BB がチェックしました。' },
    {
      t: 'quiz', q: 'あなたの選択は？',
      hand: ['Ah', '7h'], board: ['Qs', '7d', '3c'],
      options: ['2bb をベット', 'チェックで回す', '5bb をベット'],
      answer: 1,
      explain: 'ベットしてコールされるのは Qx や 7x の良いキッカーなど、あなたを上回る手が中心で、弱い手は降りてしまいます。チェックで回せば、ポットを小さく保ったままショーダウンに近づけます。',
    },
    { t: 'p', text: 'あなたはチェック。ターンは 4♠ で、BB が 3.5bb（約64%）をベットしました。BTN のチェックを見て、弱い手やドローでも打ってくる場面です。' },
    {
      t: 'estimate', q: 'BB の 3.5bb をコールするのに必要な勝率は約何%？',
      hand: ['Ah', '7h'], board: ['Qs', '7d', '3c', '4s'],
      min: 0, max: 60, step: 1, unit: '%', answer: 28, tolerance: 6,
      explain: '3.5 ÷（5.5 + 3.5 + 3.5）= 3.5 ÷ 12.5 = 28% です。',
    },
    {
      t: 'quiz', q: 'BB の 3.5bb に対して、あなたの選択は？',
      hand: ['Ah', '7h'], board: ['Qs', '7d', '3c', '4s'],
      options: ['フォールド', 'コール', '11bb にレイズ'],
      answer: 1,
      explain: 'BB の打つ手にはドローやブラフが多く、A7 はそれらに勝っています。レイズすると、それらは降りて Qx 以上にだけコールされます。コールで相手のブラフを残すのが自然です。',
    },
    { t: 'p', text: 'あなたはコール。ポットは 12.5bb、残りは 94bb です。' },
    { t: 'h', text: 'リバー：9♥' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['Ah', '7h'] }], board: ['Qs', '7d', '3c', '4s', '9h'], caption: 'スペードのフラッシュは完成しませんでした。' },
    { t: 'p', text: 'BB はチェック。Qx ならリバーでも打つことが多いので、残っているのは 7x の弱いキッカー（87・76）や小さいペア、外れたドローです。' },
    {
      t: 'quiz', q: 'ポット 12.5bb。あなたの選択は？',
      hand: ['Ah', '7h'], board: ['Qs', '7d', '3c', '4s', '9h'],
      options: ['チェックしてショーダウン', '4bb（約3分の1）をベット', '12bb（ポットサイズ）をベット'],
      answer: 1,
      explain: '87・76・小さいペアは、4bb なら「ブラフかも」とコールしてくれます。12bb では降りて、残るのは Qx のスロープレイなど強い手だけです。チェックは負けを減らしますが、弱い手から取れる 4bb を逃します。',
    },
    {
      t: 'tree',
      root: 'リバー、ポット 12.5bb。A7 で 4bb を打つか、チェックか（数字は目安）',
      options: [
        {
          label: '4bb をベット',
          outcomes: [
            { label: 'BB がフォールド（もともと勝っていた手）', prob: 0.35, value: 12.5 },
            { label: '弱い手がコール', prob: 0.4, value: 16.5 },
            { label: '強い手がコール・レイズ', prob: 0.25, value: -4 },
          ],
        },
        {
          label: 'チェック',
          outcomes: [
            { label: 'ショーダウンで勝つ', prob: 0.75, value: 12.5 },
            { label: 'ショーダウンで負ける', prob: 0.25, value: 0 },
          ],
        },
      ],
      caption: '勝っている 75% の中から 40% 分が追加で 4bb 払ってくれるので、ベットの方が約 0.6bb 得になります。',
    },
    { t: 'p', text: 'あなたは 4bb をベット。BB は 7♣ 6♣ でコールし、キッカーの差であなたが 20.5bb を獲得しました。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['Ah', '7h'] }, { label: 'BB', cards: ['7c', '6c'] }], board: ['Qs', '7d', '3c', '4s', '9h'] },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 5.5, actions: ['BTN（あなた）2.5bb オープン', 'BB コール'] },
        { street: 'フロップ', board: ['Qs', '7d', '3c'], pot: 5.5, actions: ['BB チェック', 'あなた チェック'] },
        { street: 'ターン', board: ['4s'], pot: 5.5, actions: ['BB 3.5bb ベット', 'あなた コール'] },
        { street: 'リバー', board: ['9h'], pot: 12.5, actions: ['BB チェック', 'あなた 4bb ベット', 'BB コール'] },
        { street: 'ショーダウン', pot: 20.5, actions: ['A7 が 76 にキッカーで勝つ'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    { t: 'tip', text: '中くらいの手は「ポットを小さく保ち、最後に弱い手が払える額だけ打つ」のが基本です。薄いバリューは小さいほど、より弱い手にコールしてもらえます。' },
  ],
};

export default lesson;
