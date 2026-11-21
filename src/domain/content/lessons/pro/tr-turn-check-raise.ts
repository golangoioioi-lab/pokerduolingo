import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'tr-turn-check-raise',
  blocks: [
    { t: 'h', text: 'まずやってみる：レイズする手、しない手' },
    {
      t: 'p',
      text: 'あなたはBB。フロップ J♠8♠3♦ でBTNのベットにコール。ターン7♥でチェックすると、BTNが6bbを打ちました（ポット9.1bb）。',
    },
    {
      t: 'rapid',
      q: 'BBはチェックレイズ？ コール？',
      choices: ['チェックレイズ', 'コール'],
      items: [
        { cards: ['Td', '9d'], board: ['Js', '8s', '3d', '7h'], answer: 0, why: 'ナッツのストレート。ドローが多いので大きくしてバリューを取ります。' },
        { cards: ['Jc', '4c'], board: ['Js', '8s', '3d', '7h'], answer: 1, why: 'トップペアの弱いキッカー。レイズすると強い手しか残りません。' },
        { cards: ['3h', '3c'], board: ['Js', '8s', '3d', '7h'], answer: 0, why: 'セット。フラッシュドローに安く引かせないようにレイズします。' },
        { cards: ['Qs', 'Ts'], board: ['Js', '8s', '3d', '7h'], answer: 0, why: 'フラッシュドロー＋9でストレート。アウツの多いセミブラフです。' },
        { cards: ['Kh', 'Jh'], board: ['Js', '8s', '3d', '7h'], answer: 1, why: 'トップペアの強いキッカーでも、レイズで降ろせるのは弱い手だけです。' },
        { cards: ['9s', '6s'], board: ['Js', '8s', '3d', '7h'], answer: 0, why: 'フラッシュドロー＋Tか5でストレート。勝率の高いドローです。' },
        { cards: ['8h', '7d'], board: ['Js', '8s', '3d', '7h'], answer: 0, why: '2ペア。ドローの多いボードなのでレイズします。' },
      ],
    },
    { t: 'h', text: 'なぜ強いラインなのか' },
    {
      t: 'pot',
      steps: [
        { label: 'プリフロップ後', pot: 5.5, stack: 97.5 },
        { label: 'フロップ後', pot: 9.1, stack: 95.7 },
        { label: 'ターンのチェックレイズにコール後', pot: 45.1, stack: 77.7 },
      ],
      caption: '18bbにレイズしてコールされると、リバーのSPRは約1.7。オールインが自然なサイズになる',
    },
    {
      t: 'p',
      text: 'BTNはターンでコールしても、リバーで約78bbのオールインに向き合います。この**2ストリート分の圧力**が強さです。中くらいの手は入れません。',
    },
    {
      t: 'tree',
      root: 'BBがQ♠T♠、BTNの6bbベットに対して（ポット15.1bb）',
      options: [
        { label: 'フォールド', ev: 0 },
        {
          label: 'コール',
          outcomes: [
            { label: 'リバーで勝つ', prob: 0.34, value: 15.1 },
            { label: 'リバーで負ける', prob: 0.66, value: -6 },
          ],
        },
        {
          label: '18bbにチェックレイズ',
          outcomes: [
            { label: 'BTNがフォールド', prob: 0.45, value: 15.1 },
            { label: 'コール→リバーで勝つ', prob: 0.187, value: 27.1 },
            { label: 'コール→リバーで負ける', prob: 0.363, value: -18 },
          ],
          note: 'コールされる55%のうち34%で勝つ',
        },
      ],
      caption: 'フォールド率は目安。リバーでの追加のベットは省いた単純計算',
    },
    {
      t: 'outs',
      q: 'Q♠T♠。リバーでストレート以上になるカードを全部タップ。',
      hand: ['Qs', 'Ts'],
      board: ['Js', '8s', '3d', '7h'],
      target: 'ストレート',
      explain: 'スペード9枚と、スペード以外の9が3枚で12枚。相手がAJなら、Qのペア3枚でも勝てるので約15枚です。',
    },
    { t: 'h', text: 'レイズされた側の計算' },
    {
      t: 'estimate',
      q: 'BTNが6bbをベット、BBが18bbにレイズ（ポット9.1bb）。BTNがコールに必要な勝率は？',
      hand: ['Ad', 'Jd'],
      board: ['Js', '8s', '3d', '7h'],
      min: 0,
      max: 60,
      step: 1,
      unit: '%',
      answer: 27,
      tolerance: 6,
      explain: '追加は12bb、コール後のポットは 9.1 + 18 + 18 = 45.1bb。12 ÷ 45.1 ≈ 27% です。リバーのオールインにも続けられるかは別問題です。',
    },
    { t: 'h', text: 'もう一度やる' },
    {
      t: 'play',
      title: 'BBでT♦9♦',
      hero: 'BB',
      heroCards: ['Td', '9d'],
      villain: 'BTN',
      villainCards: ['Ad', 'Jd'],
      steps: [
        {
          street: 'フロップ',
          board: ['Js', '8s', '3d'],
          pot: 5.5,
          say: 'BTNのオープンにコール。チェックするとBTNが1.8bbをベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'Qか7でストレートのオープンエンド。安く続けられます。' },
            { label: 'フォールド', good: false, why: 'アウツ8枚のドローを小さいベットで降りるのは損です。' },
          ],
        },
        {
          street: 'ターン',
          board: ['7h'],
          pot: 9.1,
          say: 'ターン7♥でナッツのストレート。チェックするとBTNが6bbをベット。',
          q: 'どうする？',
          options: [
            { label: '18bbにチェックレイズ', good: true, why: 'フラッシュドローに安く引かせず、リバーでオールインできる形を作ります。' },
            { label: 'コール', good: false, why: 'スペードに安く引かせ、ポットも育ちません。' },
          ],
        },
        {
          street: 'リバー',
          board: ['2c'],
          pot: 45.1,
          say: 'BTNがコール。リバーは2♣。残りスタックは約78bb。',
          q: 'どうする？',
          options: [
            { label: 'オールイン', good: true, why: 'まだナッツです。SPRが低いので、全額を入れるのが自然です。' },
            { label: 'チェック', good: false, why: 'BTNのトップペアはチェックで返しやすく、取り逃がします。' },
          ],
        },
      ],
      outro: 'ターンのチェックレイズで、リバーに全額を入れる形ができました。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'ターンのチェックレイズはリバーのオールインまで見越したラインです。バリューは2ペア以上、セミブラフはアウツの多いドロー。中くらいの手はコールです。',
    },
  ],
};

export default lesson;
