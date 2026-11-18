import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'sb-play',
  blocks: [
    {
      t: 'p',
      text: 'SBは、プリフロップでは後ろにBBしかいませんが、**フロップ以降はすべてのストリートで最初に行動**しなければなりません。長期的に見ると、ほとんどのプレイヤーにとって最も負けるポジションです。',
    },
    { t: 'h', text: '相手のオープンに対して' },
    {
      t: 'p',
      text: 'SBでコールすると、ポジションのないまま戦う上に、後ろのBBに安く参加されたりスクイーズされたりします。そのため **3betかフォールド**が基本です。',
    },
    {
      t: 'compare',
      left: { title: 'コール', points: ['ポジションがないまま戦う', 'BB に安く参加・スクイーズされる'], verdict: 'bad' },
      right: { title: '3bet かフォールド', points: ['ブラインドを取りにいける', '弱い手は降りて損を防ぐ'], verdict: 'good' },
    },
    {
      t: 'seats',
      seats: [
        { pos: 'BTN', bet: 2.5, action: 'オープン' },
        { pos: 'SB', hero: true, bet: 0.5, action: '3bet かフォールド' },
        { pos: 'BB', bet: 1, action: '後ろに残っている' },
      ],
      pot: 4,
      caption: '後ろの BB が安く参加できるので、コールは不利です。',
    },
    { t: 'range', spot: 'sb-vs-btn', caption: 'SB vs BTNオープン。コール（緑）がほぼなく、3betかフォールドの二択' },
    { t: 'h', text: '全員フォールドで回ってきたとき' },
    { t: 'p', text: 'BBとの1対1なので、かなり広くオープンします。ポジションがないので、BTNよりやや大きめ（約3bb）のサイズでBBのディフェンスを少し狭めます。' },
    {
      t: 'seats',
      seats: [{ pos: 'SB', hero: true, bet: 3, action: 'オープン 3bb' }, { pos: 'BB', bet: 1, action: '1対1' }],
      pot: 4,
      caption: '全員フォールドで SB に回ってきた場面。',
    },
    { t: 'range', spot: 'rfi-sb', caption: 'SBオープン（レイズorフォールド戦略）' },
    { t: 'tip', text: 'ソルバーではSBでリンプを混ぜる戦略もありますが、まずは「レイズかフォールド」で覚えるのがシンプルで、ミスも少なくなります。' },
    {
      t: 'quiz',
      q: 'BTNが2.5bbオープン。SBでこの手を持っている。このアプリの基本戦略は？',
      hand: ['As', '9s'],
      options: ['コール', '3bet', 'フォールド'],
      answer: 1,
      explain: 'A9s は SB vs BTN の3betレンジに入ります。コールするとポジションがなく、BBにも参加されやすいので、3betで主導権を取ります。',
    },
    {
      t: 'quiz',
      q: 'BTNが2.5bbオープン。SBでフォールドするのが基本の手はどれ？',
      options: ['AKs', 'QQ', 'A5s', '83o'],
      optionCards: [['Ah', 'Kh'], ['Qs', 'Qd'], ['Ac', '5c'], ['8d', '3s']],
      answer: 3,
      explain: '83oは3betするにも弱すぎ、コールしてもポジションがなく勝ちにくい手です。AKsとQQはバリュー3bet、A5sはブロッカーを活かしたブラフ3betに使えます。',
    },
    {
      t: 'estimate',
      q: '全員フォールドでSBが3bbにオープン。BBがコールするのに必要な勝率は？（BBはすでに1bb出している）',
      min: 10,
      max: 50,
      step: 1,
      unit: '%',
      answer: 33,
      tolerance: 4,
      explain: 'コール額は 3 − 1 = 2bb、コール後のポットは 3 + 3 = 6bb。2 ÷ 6 ≒ 33% です。2.5bbオープンのBBが払う約27%より高く、BBのディフェンスは少し狭まります。',
    },
  ],
};

export default lesson;
