import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'tr-turn-overbet',
  blocks: [
    { t: 'h', text: 'まずやってみる：大きく打つならどの手？' },
    {
      t: 'p',
      text: 'BTNオープン、BBコール。フロップ K♠7♦2♣ でBTNがベット、BBコール。ターンA♥でBBチェック。BTNはポットより大きい14bb（約150%）を打てます。',
    },
    {
      t: 'quiz',
      q: 'BTNのオーバーベットのブラフとして最もよい手は？',
      board: ['Ks', '7d', '2c', 'Ah'],
      options: ['Q♣J♣', 'K♦9♦', '7♥6♥', 'A♦5♦'],
      optionCards: [['Qc', 'Jc'], ['Kd', '9d'], ['7h', '6h'], ['Ad', '5d']],
      answer: 0,
      explain: 'QJはTでストレートになるガットショットで、ショーダウンではほぼ勝てません。K9・76・A5はペアがあり、ブラフにする理由が薄くなります。',
    },
    { t: 'h', text: '使える3つの条件' },
    {
      t: 'list',
      ordered: true,
      items: [
        'ターンで、自分のレンジにだけ強い手が増えた',
        '相手のレンジがキャップされている（最強の手が少ない）',
        '相手に、捨てたくないが大きくは払いたくない中くらいの手が多い',
      ],
    },
    {
      t: 'p',
      text: 'BBはAA・KK・AKの多くを3betし、セットの一部はフロップでチェックレイズしています。残るのはKQ〜K8のようなKxです。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ後', pot: 9.1, stack: 95.7 },
        { label: 'ターン14bbにコール後', pot: 37.1, stack: 81.7 },
        { label: 'リバーのオールインにコール後', pot: 200.5, stack: 0 },
      ],
      caption: 'ターンで150%を打つと、リバーにはポットの約2.2倍のオールインが残る',
    },
    { t: 'h', text: '必要なフォールド率' },
    {
      t: 'estimate',
      q: 'ポット9.1bbに14bbのブラフ。利益になるのに必要なフォールド率は？',
      board: ['Ks', '7d', '2c', 'Ah'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 61,
      tolerance: 10,
      explain: '14 ÷ (14 + 9.1) ≈ 61% です。BBのMDFは 9.1 ÷ 23.1 ≈ 39% で、別の数字です。',
    },
    {
      t: 'tree',
      root: 'BTNのブラフ、ターン A♥（ポット9.1bb）',
      options: [
        {
          label: '6bbベット（約2/3）',
          outcomes: [
            { label: 'BBがフォールド', prob: 0.45, value: 9.1 },
            { label: 'コールされる', prob: 0.55, value: -6 },
          ],
        },
        {
          label: '14bbオーバーベット',
          outcomes: [
            { label: 'BBがフォールド', prob: 0.65, value: 9.1 },
            { label: 'コールされる', prob: 0.35, value: -14 },
          ],
        },
      ],
      caption: 'フォールド率は目安。リバーで逆転する分は省いた単純計算',
    },
    {
      t: 'p',
      text: 'オーバーベットは、BBのKxがまとめて降りる場面でしか成り立ちません。BBにも当たるターンでは条件1と2が崩れます。',
    },
    {
      t: 'quiz',
      q: 'オーバーベットが最も効く相手のレンジは？',
      board: ['Ks', '7d', '2c', 'Ah'],
      options: ['強い手が少なく、トップペアなど中くらいの手が多い', 'セットやストレートが多い', '何も持っていない手ばかり'],
      answer: 0,
      explain: '中くらいの手は大きな額を払いたくないので、オーバーベットで最も多く降ります。弱い手ばかりなら小さいベットで十分です。',
    },
    { t: 'h', text: 'もう一度やる' },
    {
      t: 'rapid',
      q: 'ターンA♥。BTNはこの手でオーバーベットする？',
      choices: ['オーバーベット', 'しない'],
      items: [
        { cards: ['Ac', 'Kc'], board: ['Ks', '7d', '2c', 'Ah'], answer: 0, why: 'AとKの2ペア。BBのKxから大きく取れます。' },
        { cards: ['7h', '7c'], board: ['Ks', '7d', '2c', 'Ah'], answer: 0, why: 'セット。BBにはほぼ負けていません。' },
        { cards: ['Qh', 'Th'], board: ['Ks', '7d', '2c', 'Ah'], answer: 0, why: 'Jでストレートのガットショット。ショーダウンでは勝てないブラフ候補です。' },
        { cards: ['Kd', 'Qh'], board: ['Ks', '7d', '2c', 'Ah'], answer: 1, why: 'Kのペアは中くらいの手。大きく打つと強い手にしかコールされません。' },
        { cards: ['8h', '8c'], board: ['Ks', '7d', '2c', 'Ah'], answer: 1, why: 'ドローもなく、少しだけショーダウンバリューがあります。' },
        { cards: ['2s', '2h'], board: ['Ks', '7d', '2c', 'Ah'], answer: 0, why: 'セット。強いバリューです。' },
        { cards: ['Ad', 'Jd'], board: ['Ks', '7d', '2c', 'Ah'], answer: 1, why: 'トップペアでも、オーバーベットのバリューは2ペア以上が基本です。' },
      ],
    },
    {
      t: 'play',
      title: 'BTNで7♥7♣',
      hero: 'BTN',
      heroCards: ['7h', '7c'],
      villain: 'BB',
      villainCards: ['Kd', 'Qd'],
      steps: [
        {
          street: 'フロップ',
          board: ['Ks', '7d', '2c'],
          pot: 5.5,
          say: 'BTNでオープンし、BBがコール。フロップでセット。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '1.8bbベット', good: true, why: 'BTNに有利なボード。小さく打ってKxを残します。' },
            { label: 'チェック', good: false, why: 'Kxから取れる額が減ります。' },
          ],
        },
        {
          street: 'ターン',
          board: ['Ah'],
          pot: 9.1,
          say: 'BBがコール。ターンはA♥。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '14bbオーバーベット', good: true, why: 'BBはキャップされ、Kxが多く残っています。2ストリートで全額を入れる形を作ります。' },
            { label: 'チェック', good: false, why: 'Aが落ちてBBのKxは打ってきません。取れる額が減ります。' },
          ],
        },
        {
          street: 'リバー',
          board: ['5h'],
          pot: 37.1,
          say: 'BBがコール。リバーは5♥。BBはチェック。残りスタックは約82bb。',
          q: 'どうする？',
          options: [
            { label: 'オールイン', good: true, why: 'セットはほぼ負けていません。ターンの大きなベットで、全額を入れられるサイズが残っています。' },
            { label: 'チェック', good: false, why: 'BBのKxはチェックで返されると払いません。' },
          ],
        },
      ],
      outro: 'BBのKQは中くらいの手。ターンの14bbにコールさせるだけでも、小さいベットより多く取れています。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'ターンのオーバーベットは、自分にだけ強い手が増え、相手に中くらいの手が多いときの武器です。バリューは2ペア以上、ブラフはエクイティの残る手から選びます。',
    },
  ],
};

export default lesson;
