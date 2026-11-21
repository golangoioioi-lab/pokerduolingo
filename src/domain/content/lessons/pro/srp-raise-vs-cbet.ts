import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'srp-raise-vs-cbet',
  blocks: [
    { t: 'h', text: 'レイズに向く手はどれ？' },
    {
      t: 'quiz',
      q: 'BB でコール。BTN が小さく c-bet。レイズに最も向く手は？',
      board: ['Th', '6h', '2c'],
      options: ['8♥7♥（フラッシュドロー）', 'T♦K♣（トップペア）', 'A♣Q♦（エア）', '6♦5♦（ミドルペア）'],
      optionCards: [['8h', '7h'], ['Td', 'Kc'], ['Ac', 'Qd'], ['6d', '5d']],
      answer: 0,
      explain: 'ドローは降ろせれば勝ち、コールされても勝ち目があります。トップペアやミドルペアはコールが基本です。',
    },
    {
      t: 'list',
      items: [
        '**バリューレイズ**：セットや強いツーペア。呼ばれても勝てる。',
        '**セミブラフレイズ**：フラッシュドローや OESD。降ろせれば良し、呼ばれても伸びる。',
      ],
    },
    {
      t: 'p',
      text: 'トップペアのような中くらいの手はコールで十分です。レイズすると弱い手は降り、強い手だけが残ります。',
    },
    { t: 'h', text: 'レイズはなぜ得になるのか' },
    {
      t: 'tree',
      root: 'BB が 8♥7♥ で、BTN の 1.8bb の c-bet を 7bb にレイズ',
      options: [
        {
          label: '7bbにレイズ',
          outcomes: [
            { label: 'BTNがフォールド（約45%）', prob: 0.45, value: 7.3 },
            { label: 'コールされ、後で勝つ', prob: 0.2, value: 12.5 },
            { label: 'コールされ、後で負ける', prob: 0.35, value: -7 },
          ],
          note: 'フォールドエクイティとエクイティの両方で稼ぐ',
        },
        { label: 'コール', ev: 0.6, note: 'エクイティ実現を割り引いた例' },
      ],
      caption: '数値は単純化した例です。',
    },
    {
      t: 'odds',
      pot: 9.1,
      bet: 5.2,
      equity: 30,
      caption: 'BTN 側から見ると、追加 5.2bb で総ポット 14.3bb を争う形。必要勝率は約27%。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 5.5, stack: 97.5 },
        { label: 'c-bet 1.8 → 7へレイズ → コール', pot: 19.5, stack: 90.5 },
        { label: 'ターン 12bet・コール', pot: 43.5, stack: 78.5 },
      ],
      caption: 'レイズが入るとポットは一気に大きくなり、SPR は約1.8まで下がります。',
    },
    {
      t: 'p',
      text: 'サイズは c-bet の約3.5〜4倍。BB が BTN の c-bet をレイズする頻度は全体で1割強（目安）です。動きのあるボードで増え、A・K ハイのドライボードで減ります。',
    },
    {
      t: 'estimate',
      q: '1.8bb の c-bet を 7bb にレイズされた。BTN のコールに必要な勝率は何%？',
      min: 0,
      max: 60,
      step: 1,
      unit: '%',
      answer: 27,
      tolerance: 4,
      explain: '追加 5.2bb で、コール後の総ポットは 19.5bb。5.2 ÷ 19.5 ≈ 27% です。',
    },
    { t: 'h', text: 'もう一度：レイズしてみる' },
    {
      t: 'play',
      title: 'BB で 8♥7♥、セミブラフ',
      hero: 'BB',
      heroCards: ['8h', '7h'],
      villain: 'BTN',
      steps: [
        {
          street: 'フロップ',
          board: ['Th', '6h', '2c'],
          pot: 5.5,
          say: 'BTN オープンに BB でコール。フロップは **T♥6♥2♣**。チェックすると BTN が 1.8bb ベット。',
          q: 'フラッシュドロー＋ガットショット。どうする？',
          options: [
            { label: '7bb にレイズ', good: true, why: '降ろせても、呼ばれても利益が出る代表的なセミブラフです。' },
            { label: 'コール', good: true, why: 'これも成り立ちます（僅差）。レイズと混ぜます。' },
            { label: 'フォールド', good: false, why: 'エクイティが十分あり、降りる理由がありません。' },
          ],
        },
        {
          street: 'ターン',
          board: ['9d'],
          pot: 19.5,
          say: 'BTN がコール。ターンは **9♦**。6-7-8-9-T のストレートが完成しました。',
          q: 'あなたが先に行動します。どうする？',
          options: [
            { label: '約2/3ポット（12bb）ベット', good: true, why: 'BTN の T や オーバーペアから価値を取ります。' },
            { label: 'チェック', good: false, why: 'フラッシュが完成する前に料金を取るべき場面です。' },
          ],
        },
      ],
      outro: 'ドローでレイズしておくと、完成したときにポットが大きくなっています。',
    },
    {
      t: 'rapid',
      q: 'BB、T♥6♥2♣。BTN の小さい c-bet に？',
      choices: ['レイズ', 'コール'],
      items: [
        { cards: ['8h', '7h'], board: ['Th', '6h', '2c'], answer: 0, why: 'ドロー2種類のセミブラフです。' },
        { cards: ['Td', 'Kc'], board: ['Th', '6h', '2c'], answer: 1, why: 'トップペアはコールで十分です。' },
        { cards: ['6d', '6s'], board: ['Th', '6h', '2c'], answer: 0, why: 'セットはバリューレイズです。' },
        { cards: ['6d', '5d'], board: ['Th', '6h', '2c'], answer: 1, why: 'ミドルペアは打ち合いに向きません。' },
        { cards: ['2s', '2d'], board: ['Th', '6h', '2c'], answer: 0, why: 'セット。ドローの多いボードでは早めに大きくします。' },
        { cards: ['9c', '7c'], board: ['Th', '6h', '2c'], answer: 1, why: 'ガットショットだけ。安くコールが中心です。' },
      ],
    },
  ],
};

export default lesson;
