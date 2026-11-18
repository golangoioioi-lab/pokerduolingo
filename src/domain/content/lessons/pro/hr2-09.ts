import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-09',
  blocks: [
    { t: 'p', text: '6人卓・全員 100bb。UTG が 2.5bb にオープンし、あなたは BB で Q♥ J♥ をコール。トップペアは強い手ですが、リバーでポットより大きいベット（オーバーベット）を受けたら別です。相手のバリューとブラフをコンボで数えて判断します。' },
    { t: 'cards', hands: [{ label: 'あなた（BB）', cards: ['Qh', 'Jh'] }] },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: '2.5bb オープン', bet: 2.5 },
        { pos: 'HJ', action: 'フォールド', folded: true },
        { pos: 'CO', action: 'フォールド', folded: true },
        { pos: 'BTN', action: 'フォールド', folded: true },
        { pos: 'SB', action: 'フォールド', bet: 0.5, folded: true },
        { pos: 'BB', hero: true, action: 'コール', bet: 2.5, cards: ['Qh', 'Jh'] },
      ],
      pot: 5.5,
      caption: 'UTG のオープンは 6人卓でいちばん狭く、強い手が多いレンジです。',
    },
    { t: 'h', text: 'フロップ・ターン' },
    { t: 'p', text: 'フロップは Q♦ 8♣ 4♠。あなたはチェックし、UTG が 2bb をベットしました。' },
    {
      t: 'quiz', q: 'UTG の 2bb に対して、あなたの選択は？',
      hand: ['Qh', 'Jh'], board: ['Qd', '8c', '4s'],
      options: ['フォールド', 'コール', '8bb にチェックレイズ'],
      answer: 1,
      explain: 'QJ は UTG の AK・KJ・JJ・TT などに勝っているので降りるには強すぎます。チェックレイズすると負けている手が降り、AQ・KQ・QQ・セットにだけコールされがちです。コールして打たせ続けるのが基本です。',
    },
    { t: 'p', text: 'コールしてポットは 9.5bb。ターンは 3♥。再びチェックして UTG の 6.5bb ベットにコールし、ポットは 22.5bb、残りは 89bb です。' },
    { t: 'h', text: 'リバー：8♥' },
    { t: 'p', text: 'ボードの 8 がペアになりました。あなたはチェック。UTG は 30bb（ポットの約133%）をベットしてきました。' },
    {
      t: 'estimate', q: '30bb のベットをコールするのに必要な勝率は？',
      hand: ['Qh', 'Jh'], board: ['Qd', '8c', '4s', '3h', '8h'],
      min: 0, max: 100, step: 1, unit: '%', answer: 36, tolerance: 5,
      explain: '最終ポットは 22.5 + 30 + 30 = 82.5bb。払うのは 30bb なので 30 ÷ 82.5 ≒ 36% です。UTG のベットの 36% 以上がブラフでなければコールは損です。',
    },
    { t: 'odds', pot: 22.5, bet: 30, equity: 23, caption: '必要勝率は約36%。下のコンボ計算から、あなたが勝てる割合は約23%です。' },
    { t: 'h', text: 'コンボを数える' },
    { t: 'p', text: 'UTG の手をあなたに勝つ「バリュー」と負ける「ブラフ」に分けます。ボードとあなたの手のカードは相手に使えないので、自動で除かれます。' },
    {
      t: 'combos',
      groups: [
        { label: 'バリュー（AQ・KQ・QQ・88・44・A8s）', hands: ['AQ', 'KQ', 'QQ', '88', '44', 'A8s'] },
        { label: 'ブラフ（JTs・T9s）', hands: ['JTs', 'T9s'] },
      ],
      dead: ['Qd', '8c', '4s', '3h', '8h', 'Qh', 'Jh'],
      caption: 'バリュー 23 コンボ（AQ 8・KQ 8・QQ 1・88 1・44 3・A8s 2）、ブラフ 7 コンボ（JTs 3・T9s 4）。',
    },
    {
      t: 'quiz', q: 'あなたの選択は？',
      hand: ['Qh', 'Jh'], board: ['Qd', '8c', '4s', '3h', '8h'],
      options: ['コール', 'フォールド'],
      answer: 1,
      explain: 'ブラフは 7 ÷（23 + 7）≒ 23% しかなく、必要な 36% に届きません。仮に KQ をレンジから外しても 7 ÷（15 + 7）≒ 32% でまだ足りません。UTG のレンジは強い手が多く、このボードの外れたドローは JT・T9 くらいです。ブラフが少ない相手のオーバーベットには、トップペアでも降ります。',
    },
    { t: 'p', text: 'フォールドして失ったのは 2.5 + 2 + 6.5 = 11bb。コールしていれば、さらに 30bb を失っていた可能性が高い場面です。' },
    { t: 'h', text: '振り返り' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 5.5, actions: ['UTG 2.5bb オープン', 'BB（あなた）コール'] },
        { street: 'フロップ', board: ['Qd', '8c', '4s'], pot: 5.5, actions: ['あなた チェック', 'UTG 2bb ベット', 'あなた コール'] },
        { street: 'ターン', board: ['3h'], pot: 9.5, actions: ['あなた チェック', 'UTG 6.5bb ベット', 'あなた コール'] },
        { street: 'リバー', board: ['8h'], pot: 22.5, actions: ['あなた チェック', 'UTG 30bb ベット', 'あなた フォールド'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    {
      t: 'list',
      items: [
        'オーバーベットは必要勝率が高い（ポットの133%なら約36%）',
        'ボードが乾いていると、相手の外れたドロー＝ブラフ候補は少ない',
        'コンボで数えてブラフが足りなければ、トップペアでも降りる',
      ],
    },
    { t: 'tip', text: '「トップペアだから」ではなく、「相手のこの行動にブラフはどれだけ含まれるか」で決めます。ブラフ候補を具体的な手で挙げられないときは、降りる方に傾けて構いません。' },
  ],
};

export default lesson;
