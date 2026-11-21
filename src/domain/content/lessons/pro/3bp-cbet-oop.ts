import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-cbet-oop',
  blocks: [
    { t: 'h', text: 'まず直感で' },
    {
      t: 'rapid',
      q: 'BB（3bettor・OOP）対BTN。c-betする？',
      choices: ['ベット', 'チェック'],
      items: [
        { cards: ['As', 'Ad'], board: ['Kd', '8h', '3c'], answer: 0 },
        { cards: ['Js', 'Jd'], board: ['Kd', '8h', '3c'], answer: 1, why: '打っても強い手にしかコールされません。チェックで守ります。' },
        { cards: ['Ah', 'Kc'], board: ['Kd', '8h', '3c'], answer: 0 },
        { cards: ['As', '5s'], board: ['Kd', '8h', '3c'], answer: 0, why: 'Aのブロッカー付きで、小さなブラフに向いています（目安）。' },
        { cards: ['Tc', 'Td'], board: ['Kd', '8h', '3c'], answer: 1, why: 'ショーダウンバリューのある中程度のペアはチェックが基本です。' },
        { cards: ['Ac', 'Kh'], board: ['7h', '6h', '5c'], answer: 1, why: '低くつながったボードは相手に有利。外れたAKはチェックします。' },
        { cards: ['9h', '8h'], board: ['7d', '6c', '5s'], answer: 0, why: 'ストレート完成。強い手は打ちます。' },
        { cards: ['Qs', 'Qc'], board: ['Kd', '8h', '3c'], answer: 1, why: 'Kの下のペアはチェックで守ります。' },
      ],
    },
    { t: 'h', text: 'OOPは手を選ぶ' },
    {
      t: 'p',
      text: 'BBはレンジ優位を持ちますが、ポジションがありません。IPの3bettorより頻度を下げ、打つ手と守る手を分けます。',
    },
    {
      t: 'compare',
      left: {
        title: '強み',
        points: ['AA〜KKやAKが多い', 'A・Kハイで小さなc-betが通る'],
        verdict: 'good',
      },
      right: {
        title: '弱み',
        points: ['ターン以降の判断が難しい', 'チェックすると主導権を渡す'],
        verdict: 'bad',
      },
    },
    {
      t: 'quiz',
      q: 'OOPの3bettorのc-bet頻度が最も低くなるのは、どちらのボード？',
      options: ['A♠7♦2♣', '7♥6♥5♣'],
      optionCards: [['As', '7d', '2c'], ['7h', '6h', '5c']],
      answer: 1,
      explain: '低くつながったボードはコーラーに強い手とドローが多くなります。A72はOOPでも小さく多く打てます。',
    },
    {
      t: 'table',
      head: ['ボード', 'c-bet頻度（目安）', 'サイズ'],
      rows: [
        ['A♠7♦2♣', '約6〜7割', '小（約25〜33%）'],
        ['K♠8♦3♣', '約5〜6割', '小'],
        ['T♥9♥6♣', '約3〜4割', '中〜大'],
        ['7♥6♥5♣', '約2〜3割', '大、手を選ぶ'],
      ],
    },
    {
      t: 'odds',
      pot: 22.5,
      bet: 7.5,
      equity: 25,
      caption: 'ポット22.5bbに7.5bb（33%）。BTNの必要勝率は20%です。',
    },
    {
      t: 'pot',
      steps: [
        { label: '3betポット（BB対BTN）', pot: 22.5, stack: 89 },
        { label: 'フロップ 7.5bet・コール', pot: 37.5, stack: 81.5 },
        { label: 'ターン 19bet・コール', pot: 75.5, stack: 62.5 },
      ],
      caption: '33%→約50%で、リバーのSPRは約0.8。c-betした時点でコミットを意識します。',
    },
    { t: 'h', text: 'ブラフのc-betを体験' },
    {
      t: 'play',
      title: 'BBでA5sを3bet',
      hero: 'BB',
      heroCards: ['As', '5s'],
      villain: 'BTN',
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'BTNが2.5bbでオープン、SBはフォールド。あなたはBBで **A♠5♠**。',
          q: 'どうする？',
          options: [
            { label: '11bbに3bet', good: true, why: 'Aのブロッカーがあり、3betブラフの定番です。' },
            { label: 'コール', good: true, why: 'コールも有力です（目安で半々）。ここでは3betで進みます。' },
            { label: 'フォールド', good: false, why: 'BTNのオープンに対して降りるには強すぎます。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Kd', '8h', '3c'],
          pot: 22.5,
          say: 'BTNがコール。Kハイのドライなボードで、あなたが先に行動します。',
          q: 'どうする？',
          options: [
            { label: '7.5bb（33%）をc-bet', good: true, why: '3bettorに有利なボード。小さなベットで多く降ろせます。' },
            { label: '22bb（ポット）をベット', good: false, why: 'ブラフに大きなサイズは不要です。' },
            { label: 'チェック', good: false, why: 'チェックも混ぜますが、Aハイだけでは後で勝ちにくくなります。' },
          ],
        },
        {
          street: 'ターン',
          board: ['4s'],
          pot: 37.5,
          say: 'BTNがコール。4でホイール（A-2-3-4-5）のガットショットが付きました。',
          q: 'どうする？',
          options: [
            { label: '約19bb（半ポット）をベット', good: true, why: 'ドローとAのオーバーカードがあり、2回目のベットに向いています。' },
            { label: 'チェック', good: false, why: '悪くはありませんが（僅差）、降ろせる分を手放します。' },
          ],
        },
      ],
      outro: 'OOPでは、ブロッカーやドローのある手をブラフに選び、中程度のペアはチェックで守ります。',
    },
  ],
};

export default lesson;
