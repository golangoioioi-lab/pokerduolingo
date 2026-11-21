import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'tr-double-barrel',
  blocks: [
    { t: 'h', text: 'まずやってみる：2発目を打つ？' },
    {
      t: 'p',
      text: 'BTNオープン、BBコール。フロップ K♦9♣4♥ でBTNがベット、BBコール。ターン6♠でBBがチェック。フロップとターンで続けて打つのが**ダブルバレル**です。',
    },
    {
      t: 'rapid',
      q: 'BTNはターンでバレル？ チェック？',
      choices: ['バレル', 'チェック'],
      items: [
        { cards: ['As', 'Kc'], board: ['Kd', '9c', '4h', '6s'], answer: 0, why: 'トップペア・トップキッカー。強いバリューです。' },
        { cards: ['8h', '7h'], board: ['Kd', '9c', '4h', '6s'], answer: 0, why: '5かTでストレートのオープンエンド。セミブラフで打ちます。' },
        { cards: ['Td', 'Ts'], board: ['Kd', '9c', '4h', '6s'], answer: 1, why: '9xには勝っています。打つと9xが降り、Kxだけが残ります。' },
        { cards: ['Kh', '9h'], board: ['Kd', '9c', '4h', '6s'], answer: 0, why: '2ペア。バリューで打ちます。' },
        { cards: ['Qs', 'Js'], board: ['Kd', '9c', '4h', '6s'], answer: 0, why: 'Tでストレートのガットショット。ショーダウンでは勝てないので打つ候補です。' },
        { cards: ['Ad', '3d'], board: ['Kd', '9c', '4h', '6s'], answer: 1, why: 'Aハイで外れたドローには勝てます。ドローもないのでチェックが基本です。' },
        { cards: ['5c', '2c'], board: ['Kd', '9c', '4h', '6s'], answer: 1, why: '3だけのガットショットで、カードも低い。多くはあきらめます。' },
      ],
    },
    { t: 'h', text: '打つ手の4つの基準' },
    {
      t: 'list',
      ordered: true,
      items: [
        '**バリュー**：コールしてくる手の多くに勝っている',
        '**エクイティ**：リバーで逆転できるアウツがある',
        '**ブロッカー**：相手のコールする強い手を減らす',
        '**ショーダウンバリューがない**：チェックしてもほぼ勝てない',
      ],
    },
    {
      t: 'p',
      text: 'ブラフのバレルは2〜4を満たす手で。ショーダウンで勝てる中くらいの手は、打つと負けている相手だけが残るのでチェックします。',
    },
    {
      t: 'outs',
      q: '8♥7♥。リバーでストレートになるカードを全部タップ。',
      hand: ['8h', '7h'],
      board: ['Kd', '9c', '4h', '6s'],
      target: 'ストレート',
      explain: '5とTが4枚ずつで8枚。相手がTを1枚持っていれば7枚です。',
    },
    { t: 'h', text: 'セミブラフは2つの道で勝つ' },
    {
      t: 'equity',
      players: [
        { label: 'BTN 8♥7♥', cards: ['8h', '7h'], pct: 16 },
        { label: 'BB K♣T♣', cards: ['Kc', 'Tc'], pct: 84 },
      ],
      board: ['Kd', '9c', '4h', '6s'],
      caption: 'BBがT♣を持つのでアウツは7枚。7 ÷ 44 ≈ 16%',
    },
    {
      t: 'tree',
      root: 'BTN 8♥7♥、ターン（ポット9.1bb）',
      options: [
        {
          label: '6bbベット',
          outcomes: [
            { label: 'BBがフォールド', prob: 0.45, value: 9.1 },
            { label: 'コール→リバーで完成', prob: 0.088, value: 15.1 },
            { label: 'コール→外れて負け', prob: 0.462, value: -6 },
          ],
          note: 'コールされる55%のうち16%で勝つ',
        },
        {
          label: 'チェック',
          outcomes: [
            { label: 'リバーで完成して勝つ', prob: 0.16, value: 9.1 },
            { label: '外れて負け', prob: 0.84, value: 0 },
          ],
        },
      ],
      caption: 'フォールド率は目安。リバーでの追加のベットは省いた単純計算',
    },
    {
      t: 'p',
      text: '「降ろして勝つ」と「当たって勝つ」の2つの道があるので、純粋なブラフより低いフォールド率で利益になります。',
    },
    {
      t: 'estimate',
      q: '9.1bbのポットに6bbのブラフ。ドローなしの純粋なブラフに必要なフォールド率は？',
      board: ['Kd', '9c', '4h', '6s'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 40,
      tolerance: 8,
      explain: '6 ÷ (6 + 9.1) ≈ 40% です。セミブラフはこれより低くても利益になります。',
    },
    {
      t: 'p',
      text: 'ブラフが多すぎると感じたら、エクイティもブロッカーもない手からあきらめます。',
    },
    { t: 'h', text: 'もう一度やる' },
    {
      t: 'play',
      title: 'BTNで8♥7♥',
      hero: 'BTN',
      heroCards: ['8h', '7h'],
      villain: 'BB',
      villainCards: ['Kc', 'Tc'],
      steps: [
        {
          street: 'フロップ',
          board: ['Kd', '9c', '4h'],
          pot: 5.5,
          say: 'BTNでオープンし、BBがコール。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '1.8bbベット', good: true, why: 'BTNに有利なKハイのボード。小さく広く打てます。' },
            { label: 'チェック', good: true, why: 'ドローの弱い手なので、チェックも十分あります。' },
          ],
        },
        {
          street: 'ターン',
          board: ['6s'],
          pot: 9.1,
          say: 'BBがコール。ターン6♠でオープンエンドになった。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '6bbバレル', good: true, why: 'アウツ8枚のセミブラフ。降ろしても、当たっても勝てます。' },
            { label: 'チェック', good: false, why: 'ショーダウンではほぼ勝てません。打てる手で打たないのはもったいない場面です。' },
          ],
        },
        {
          street: 'リバー',
          board: ['Ts'],
          pot: 21.1,
          say: 'BBがコール。リバーT♠でストレート完成。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '16bbベット', good: true, why: 'BBのKxやKTの2ペアから払ってもらえます。' },
            { label: 'チェック', good: false, why: 'ストレートで打たないと、取れる額を逃します。' },
          ],
        },
      ],
      outro: 'BBはKTの2ペアでコール。セミブラフは、外れたときは降ろし、当たったときはバリューに変わります。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'バレルの候補は、エクイティかブロッカーがあり、ショーダウンでは勝てない手。中くらいの手はチェックします。',
    },
  ],
};

export default lesson;
