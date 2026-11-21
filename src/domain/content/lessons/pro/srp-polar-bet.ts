import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'srp-polar-bet',
  blocks: [
    { t: 'h', text: '大きく打つとき、外す手はどれ？' },
    {
      t: 'quiz',
      q: 'BTN対BB、T♥9♥6♣で約75%のベットをします。チェックに回すのが自然な手は？',
      board: ['Th', '9h', '6c'],
      options: ['7♦7♠（ミドルペア）', '6♦6♠（セット）', 'A♥5♥（ナッツフラッシュドロー）', '8♦7♦（ストレート）'],
      optionCards: [['7d', '7s'], ['6d', '6s'], ['Ah', '5h'], ['8d', '7d']],
      answer: 0,
      explain: '大きく打つと、77 より強い手しかコールしません。セットとストレートはバリュー、ナッツドローはブラフでベットします。',
    },
    {
      t: 'p',
      text: '**ポラライズドベット**は、強い手とブラフだけで大きく打ち、中くらいの手はチェックに回す戦略です。相手にもエクイティがあるボードで使います。',
    },
    { t: 'h', text: 'ブラフは何割まで入れられる？' },
    {
      t: 'odds',
      pot: 5.5,
      bet: 4.1,
      equity: 30,
      caption: '約75%のベット。相手の必要勝率は約30%。ブラフも全体の約3割までが目安です。',
    },
    {
      t: 'table',
      head: ['サイズ', 'ブラフの割合（目安）', 'バリュー：ブラフ'],
      rows: [
        ['約33%', '約20%', '4 : 1'],
        ['約50%', '25%', '3 : 1'],
        ['約75%', '約30%', '約2.3 : 1'],
        ['約100%', '約33%', '2 : 1'],
      ],
    },
    {
      t: 'combos',
      groups: [
        { label: 'セット', hands: ['TT', '99', '66'] },
        { label: 'ストレート（87s）', hands: ['87s'] },
      ],
      dead: ['Th', '9h', '6c'],
      caption: 'T♥9♥6♣ のバリューの例。ブラフにはナッツフラッシュドローや OESD を使います。',
    },
    {
      t: 'estimate',
      q: 'ポット5.5bbに4.1bbを打つ。ベットレンジのブラフは何%が目安？',
      min: 0,
      max: 60,
      step: 1,
      unit: '%',
      answer: 30,
      tolerance: 5,
      explain: '4.1 ÷ (5.5 + 8.2) ≈ 30%。バリュー7割、ブラフ3割です。',
    },
    {
      t: 'warn',
      title: '大きく打つ頻度は低め',
      text: 'このボード全体で大きく打つのは3〜5割が目安です。毎回打つと、チェックが弱い手だけになり狙われます。',
    },
    { t: 'h', text: 'ナッツで大きく打ち続ける' },
    {
      t: 'play',
      title: 'BTN で 8♦7♦、フロップでストレート',
      hero: 'BTN',
      heroCards: ['8d', '7d'],
      villain: 'BB',
      villainCards: ['Tc', '8c'],
      steps: [
        {
          street: 'フロップ',
          board: ['Th', '9h', '6c'],
          pot: 5.5,
          say: 'BTN オープン、BB コール。フロップは **T♥9♥6♣**。ストレート完成。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: '約75%（4.1bb）ベット', good: true, why: 'ドローや T から料金を取り、ポットを育てます。' },
            { label: 'チェック', good: false, why: 'ドローの多いボードで無料カードを渡すのは損です。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2d'],
          pot: 13.7,
          say: 'BB がコール。ターンは **2♦**。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: '約2/3ポット（9bb）ベット', good: true, why: 'トップペアやドローがまだ払ってくれます。' },
            { label: 'チェック', good: false, why: 'フラッシュが完成する前に料金を取ります。' },
          ],
        },
        {
          street: 'リバー',
          board: ['Ks'],
          pot: 31.7,
          say: 'BB がコール。リバーは **K♠**。フラッシュは完成していません。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: '約75%（24bb）ベット', good: true, why: 'T や 9 のツーペア、トップペアからコールが見込めます。' },
            { label: 'チェック', good: false, why: 'ナッツ級の手でバリューを取り逃します。' },
          ],
        },
      ],
      outro: 'BB の T♣8♣ はトップペア＋ガットショットでした。強い手は大きく打ち、ブラフと同じサイズで隠します。',
    },
    { t: 'h', text: 'もう一度：大きく打つ？ チェック？' },
    {
      t: 'rapid',
      q: 'BTN対BB、T♥9♥6♣。約75%で打つ？',
      choices: ['大きくベット', 'チェック'],
      items: [
        { cards: ['6d', '6s'], board: ['Th', '9h', '6c'], answer: 0, why: 'セットはバリューです。' },
        { cards: ['7d', '7s'], board: ['Th', '9h', '6c'], answer: 1, why: 'ミドルペアは中くらいの手。チェックです。' },
        { cards: ['Ah', '5h'], board: ['Th', '9h', '6c'], answer: 0, why: 'ナッツフラッシュドローは最良のブラフです。' },
        { cards: ['Qc', 'Jd'], board: ['Th', '9h', '6c'], answer: 0, why: 'OESD。降ろせて、外れても改善します。' },
        { cards: ['5d', '5c'], board: ['Th', '9h', '6c'], answer: 1, why: '弱いペア。打つとより強い手にしか呼ばれません。' },
        { cards: ['8d', '7d'], board: ['Th', '9h', '6c'], answer: 0, why: 'ストレート完成。バリューです。' },
        { cards: ['Kc', 'Tc'], board: ['Th', '9h', '6c'], answer: 0, why: '強いトップペアは料金を取りに行きます。' },
      ],
    },
  ],
};

export default lesson;
