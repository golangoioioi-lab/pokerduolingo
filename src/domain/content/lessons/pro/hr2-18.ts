import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-18',
  blocks: [
    { t: 'p', text: '6人卓・全員 100bb。あなたは CO で T♠ T♣ を持って 2.5bb にオープン。BB が 11bb に 3ベットしてきました。3ベットポットで A が落ちると TT の価値は大きく下がります。「どこまで追い、どこで降りるか」を見ます。' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: 'フォールド', folded: true },
        { pos: 'HJ', action: 'フォールド', folded: true },
        { pos: 'CO', hero: true, action: '2.5bb オープン', bet: 2.5, cards: ['Ts', 'Tc'] },
        { pos: 'BTN', action: 'フォールド', folded: true },
        { pos: 'SB', action: 'フォールド', bet: 0.5, folded: true },
        { pos: 'BB', action: '11bb に 3ベット', bet: 11 },
      ],
      pot: 14,
      caption: 'あなたが行動する時点のポットは 2.5 + 0.5 + 11 = 14bb です。',
    },
    {
      t: 'quiz', q: 'BB の 3ベットに対して、CO の TT の選択は？',
      hand: ['Ts', 'Tc'],
      options: ['フォールド', 'コール', '25bb に 4ベット'],
      answer: 1,
      explain: 'BB の 3ベットには QQ+・AK のほか、AJs・KQs や A5s も含まれます。TT は十分戦えるのでフォールドは降りすぎです。4ベットすると弱い手が降りて、TT を上回る手だけが残ります。ポジションもあるのでコールが基本です。',
    },
    { t: 'p', text: 'あなたはコール。ポットは 22.5bb、残りは 89bb です。' },
    { t: 'h', text: 'フロップ：A♠ 8♦ 4♣' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['Ts', 'Tc'] }], board: ['As', '8d', '4c'], caption: 'A が落ちました。TT は A を持つ手に負けています。' },
    { t: 'p', text: 'BB が 7bb（約31%）をベット。A ハイのボードは 3ベッターに有利で、KQ・KJ・QJ のような外れた手も小さく打ってきます。' },
    {
      t: 'quiz', q: 'BB の 7bb に対して、あなたの選択は？',
      hand: ['Ts', 'Tc'], board: ['As', '8d', '4c'],
      options: ['フォールド', 'コール', '22bb にレイズ'],
      answer: 1,
      explain: '必要勝率は 7 ÷（22.5 + 7 + 7）≒ 19%。小さいベットには TT に負けている KQ・KJ・99 などが多く含まれ、フォールドは降りすぎです。レイズすると Ax にだけコールされます。コールしてターンの行動を見ます。',
    },
    { t: 'p', text: 'あなたはコール。ポットは 36.5bb、残りは 82bb です。ターンは 6♥ で、BB が 24bb（約66%）をベットしてきました。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['Ts', 'Tc'] }], board: ['As', '8d', '4c', '6h'], caption: '75 はストレートが完成。' },
    { t: 'p', text: '小さく打った外れた手の多くは、ターンではあきらめます。大きく2発目を打つのは AK・AQ などの A、セット、75 が中心です。' },
    {
      t: 'estimate', q: 'このコールに必要な勝率は約何%？',
      hand: ['Ts', 'Tc'], board: ['As', '8d', '4c', '6h'],
      min: 0, max: 60, step: 1, unit: '%', answer: 28, tolerance: 6,
      explain: 'コールすると最終的なポットは 36.5 + 24 + 24 = 84.5bb。払うのは 24bb なので 24 ÷ 84.5 ≒ 28% です。',
    },
    { t: 'odds', pot: 36.5, bet: 24, equity: 18, caption: '必要勝率は約28%。BB の2発目のレンジに対する TT の勝率は、目安で 20% を下回ります。' },
    {
      t: 'quiz', q: 'あなたの選択は？',
      hand: ['Ts', 'Tc'], board: ['As', '8d', '4c', '6h'],
      options: ['フォールド', 'コール', 'オールイン'],
      answer: 0,
      explain: 'BB のレンジは、小さい1発目から大きい2発目へと強い手に絞られました。TT が勝てる手はほとんど残らず、改善できるのは残り2枚の T だけです。リバーでもベットされる可能性が高く、実際の値段は 28% より高くつきます。ここで降ります。',
    },
    { t: 'p', text: 'あなたはフォールド。このハンドで失ったのは 11 + 7 = 18bb です。' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 22.5, actions: ['CO（あなた）2.5bb オープン', 'BB 11bb に 3ベット', 'あなた コール'] },
        { street: 'フロップ', board: ['As', '8d', '4c'], pot: 22.5, actions: ['BB 7bb ベット', 'あなた コール'] },
        { street: 'ターン', board: ['6h'], pot: 36.5, actions: ['BB 24bb ベット', 'あなた フォールド'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    { t: 'tip', text: 'フロップのコールは「相手の外れた手を捕まえる」ため。ターンで相手が大きく打ち続けたら、その手の多くはもう残っていません。ベットが小さい1発目から大きい2発目に変わったら、レンジが強い手に絞られたと考えます。' },
  ],
};

export default lesson;
