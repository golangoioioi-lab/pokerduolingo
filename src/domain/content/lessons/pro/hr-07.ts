import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr-07',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。HJ のオープンに CO がコールし、BB のあなたは K♣9♦。3人で見るマルチウェイで、弱いキッカーのトップペアを扱います。' },
    {
      t: 'play',
      title: 'マルチウェイの K9',
      hero: 'BB',
      heroCards: ['Kc', '9d'],
      villain: 'CO',
      steps: [
        {
          street: 'プリフロップ',
          pot: 6.5,
          say: 'HJ が 2.5bb にオープン、CO がコール、SB はフォールド。あなたは BB で **K♣9♦**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'あと 1.5bb でポットは 8bb。安く参加できます。' },
            { label: 'コール', good: true, why: '良い値段で、3人で見るフロップに参加します。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Ks', '7h', '6h'],
          pot: 14,
          say: 'K のトップペア、キッカーは 9。あなたのチェックに HJ が 3bb をベットし、CO がコール。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: '必要勝率は約18%で、トップペアなら十分です。' },
            { label: 'コール', good: true, why: '弱いキッカーはポットを小さく保ちます。' },
            { label: 'チェックレイズ', good: false, why: '2人のどちらかが AK・KQ・セットを持つ確率が高く、弱い手はコールしません。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2c'],
          pot: 26,
          say: 'あなたと HJ がチェック。CO が 9bb（約53%）をベット。HJ はまだ後ろに残っています。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: '必要勝率は約26%で、K9 には30%前後（目安）あります。' },
            { label: 'レイズ', good: false, why: '後ろに HJ がいて、膨らませる理由はありません。' },
            { label: 'フォールド', good: false, why: 'CO のベットにはドローも多く含まれます。' },
          ],
        },
        {
          street: 'リバー',
          board: ['Th'],
          pot: 61,
          say: 'HJ はフォールド。T♥ でフラッシュ・98 のストレート・KT のツーペアが完成。あなたのチェックに CO が 26bb（約74%）をベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: false, why: 'ドローの多くが完成し、ブラフは 85・54 程度で3割に届きません。' },
            { label: 'フォールド', good: true, why: '必要勝率約30%に対し、ブラフが少なすぎます。' },
          ],
        },
      ],
      outro: '失ったのは 14.5bb。フロップでチェックレイズしていれば、もっと大きいポットで同じ判断を迫られていました。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'p', text: 'マルチウェイでは、人数分だけ誰かが強い手を持つ確率が上がります。弱いキッカーのトップペアは、安くショーダウンへ行きたい手です。' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', folded: true },
        { pos: 'HJ', action: 'オープン', bet: 2.5 },
        { pos: 'CO', action: 'コール', bet: 2.5 },
        { pos: 'BTN', folded: true },
        { pos: 'SB', folded: true },
        { pos: 'BB', hero: true, cards: ['Kc', '9d'], action: 'コール', bet: 2.5 },
      ],
      pot: 8,
      caption: '3人で見るフロップ。ポットは 2.5 × 3 + 0.5 = 8bb。',
    },
    {
      t: 'estimate',
      q: 'ターン：ポット 17bb に 9bb のベット。コールに必要な勝率は？',
      hand: ['Kc', '9d'],
      board: ['Ks', '7h', '6h', '2c'],
      min: 0,
      max: 60,
      step: 1,
      unit: '%',
      answer: 26,
      tolerance: 5,
      explain: '9 ÷（17 + 9 + 9）≒ 26%。',
    },
    { t: 'odds', pot: 35, bet: 26, equity: 20, caption: 'リバー：必要な勝率は約30%。ドローがほぼ完成し、ブラフが2割程度（目安）なら足りない。' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 1.5, actions: ['HJが2.5bbにオープン、COコール', 'あなた（BB）がコール'] },
        { street: 'フロップ', board: ['Ks', '7h', '6h'], pot: 8, actions: ['あなたがチェック', 'HJが3bbベット、COコール、あなたもコール'] },
        { street: 'ターン', board: ['2c'], pot: 17, actions: ['あなたとHJがチェック', 'COが9bbベット、あなたがコール、HJフォールド'] },
        { street: 'リバー', board: ['Th'], pot: 35, actions: ['あなたがチェック', 'COが26bbベット、あなたがフォールド'] },
      ],
    },
    { t: 'h', text: 'もう一度：リバーが違ったら' },
    {
      t: 'play',
      title: 'ドローが外れたリバー',
      hero: 'BB',
      heroCards: ['Kc', '9d'],
      villain: 'CO',
      steps: [
        {
          street: 'ターン',
          board: ['Ks', '7h', '6h', '2c'],
          pot: 35,
          say: '同じ展開でターンまで進み、CO の 9bb にコール。HJ はフォールド。',
        },
        {
          street: 'リバー',
          board: ['2d'],
          pot: 61,
          say: 'リバーは 2♦。フラッシュもストレートも完成しません。CO がまた 26bb をベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: '外れたハートのドローや 98・85 がブラフに回り、ブラフの割合が増えます。' },
            { label: 'フォールド', good: false, why: '完成したドローがないので、K9 で勝っていることが多くなります。' },
          ],
        },
      ],
      outro: '同じベットでも、ドローが完成したかどうかでブラフの量が変わり、答えも変わります。',
    },
    { t: 'tip', text: 'マルチウェイの弱いキッカーは、コール中心で安く進めます。ドローが完成したリバーの大きいベットには、ブラフが少ないことを数えて降ります。' },
  ],
};

export default lesson;
