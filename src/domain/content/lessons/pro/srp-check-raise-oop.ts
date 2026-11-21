import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'srp-check-raise-oop',
  blocks: [
    { t: 'h', text: 'チェックしてから反撃する' },
    {
      t: 'quiz',
      q: 'BB、T♥6♥2♣。BTN の c-bet にチェックレイズするなら、どの手？',
      board: ['Th', '6h', '2c'],
      options: ['8♥7♥（フラッシュドロー＋ガットショット）', 'T♦9♣（トップペア）', 'J♦4♠（エア）', 'K♣3♣（エア）'],
      optionCards: [['8h', '7h'], ['Td', '9c'], ['Jd', '4s'], ['Kc', '3c']],
      answer: 0,
      explain: 'コンボドローは降ろしても良く、呼ばれても勝ち目が大きい手です。トップペアはチェックコール、エアは基本フォールドです。',
    },
    {
      t: 'p',
      text: 'チェックレイズは OOP 側の最大の武器です。BTN の c-bet は広いので、その弱い部分を一気に降ろせます。チェックに強い手が混ざっていれば、相手は自由に c-bet できなくなります。',
    },
    {
      t: 'table',
      head: ['手の種類（T♥6♥2♣）', '役割'],
      rows: [
        ['66、T6s などセット・ツーペア', 'バリュー'],
        ['8♥7♥ のようなコンボドロー', 'セミブラフ'],
        ['A♥5♥ などフラッシュドロー単体', 'セミブラフ（混合）'],
        ['T9、A6 などのペア', 'チェックコール'],
        ['エア', 'フォールド（一部ブラフ）'],
      ],
    },
    { t: 'h', text: 'サイズと数字' },
    {
      t: 'odds',
      pot: 9.1,
      bet: 4.7,
      equity: 25,
      caption: '1.8bb の c-bet に 6.5bb（約3.5倍）のチェックレイズ。BTN は追加 4.7bb、必要勝率は約25%。',
    },
    {
      t: 'tree',
      root: 'T♥6♥2♣、BB が 8♥7♥ で 6.5bb にチェックレイズ',
      options: [
        {
          label: '6.5bbにチェックレイズ',
          outcomes: [
            { label: 'BTNがフォールド（約45%）', prob: 0.45, value: 7.3 },
            { label: 'コールされ、後で勝つ', prob: 0.25, value: 11.3 },
            { label: 'コールされ、後で負ける', prob: 0.3, value: -6.5 },
          ],
        },
        { label: 'コール', ev: 0.8, note: 'エクイティ実現を割り引いた例' },
      ],
      caption: '数値は単純化した例です。ドローが強いほどチェックレイズが優位になります。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 5.5, stack: 97.5 },
        { label: 'c-bet 1.8、チェックレイズ6.5、コール', pot: 18.5, stack: 91 },
      ],
      caption: 'ポットは 5.5bb から 18.5bb へ。SPR は約4.9 まで下がります。',
    },
    {
      t: 'estimate',
      q: '1.8bb の c-bet に 6.5bb のチェックレイズ。BTN の追加コール額は何bb？',
      min: 0,
      max: 10,
      step: 0.1,
      unit: 'bb',
      answer: 4.7,
      tolerance: 1,
      explain: '6.5 − 1.8 = 4.7bb です。',
    },
    {
      t: 'tip',
      text: 'BB のチェックレイズは全体で1割強が目安です。動きのあるボードで増え、乾いた高いボードで減ります。',
    },
    { t: 'h', text: 'もう一度：チェックレイズを打つ' },
    {
      t: 'play',
      title: 'BB で 6♠5♠、7-4-2',
      hero: 'BB',
      heroCards: ['6s', '5s'],
      villain: 'BTN',
      steps: [
        {
          street: 'フロップ',
          board: ['7s', '4d', '2h'],
          pot: 5.5,
          say: 'BTN オープンに BB でコール。フロップは **7♠4♦2♥**。チェックすると BTN が 1.8bb ベット。',
          q: 'OESD（3 か 8 でストレート）。どうする？',
          options: [
            { label: '6.5bb にチェックレイズ', good: true, why: '低いボードは BB に有利。強いドローでレイズします。' },
            { label: 'コール', good: true, why: 'これも成り立ちます（僅差）。レイズと混ぜます。' },
            { label: 'フォールド', good: false, why: '8枚のアウツがある手を降りる理由はありません。' },
          ],
        },
        {
          street: 'ターン',
          board: ['8d'],
          pot: 18.5,
          say: 'BTN がコール。ターンは **8♦**。4-5-6-7-8 のストレートが完成しました。',
          q: 'あなたが先に行動します。どうする？',
          options: [
            { label: '約2/3ポット（12bb）ベット', good: true, why: 'オーバーペアやトップペアから価値を取ります。' },
            { label: 'チェックしてフォールド', good: false, why: 'ナッツ級の手で降りる理由はありません。' },
          ],
        },
      ],
      outro: 'BB に有利なボードでは、強いドローとセットでチェックレイズします。',
    },
    {
      t: 'rapid',
      q: 'BB、7♠4♦2♥。BTN の 1.8bb の c-bet に？',
      choices: ['チェックレイズ', 'コール'],
      items: [
        { cards: ['6s', '5s'], board: ['7s', '4d', '2h'], answer: 0, why: 'OESD。セミブラフの代表です。' },
        { cards: ['Kd', '7d'], board: ['7s', '4d', '2h'], answer: 1, why: 'トップペアはコールで相手のブラフを残します。' },
        { cards: ['4c', '4h'], board: ['7s', '4d', '2h'], answer: 0, why: 'セットはバリューレイズです。' },
        { cards: ['9h', '4h'], board: ['7s', '4d', '2h'], answer: 1, why: 'セカンドペアはコールが中心です。' },
        { cards: ['7d', '4c'], board: ['7s', '4d', '2h'], answer: 0, why: 'ツーペア。早めにポットを大きくします。' },
        { cards: ['8c', '7c'], board: ['7s', '4d', '2h'], answer: 1, why: '弱いキッカーのトップペアはコールです。' },
      ],
    },
  ],
};

export default lesson;
