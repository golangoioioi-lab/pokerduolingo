import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'opp-tag',
  blocks: [
    { t: 'h', text: 'まず判断してみる' },
    {
      t: 'rapid',
      q: 'CO の TAG（Fold to 3bet 65%）が 2.5bb でオープン。BTN のあなたは3betする？',
      choices: ['3bet', '3betしない'],
      items: [
        { cards: ['As', '5s'], answer: 0, why: 'A のブロッカーとナッツフラッシュの可能性。ブラフ3betの代表です。' },
        { cards: ['Kd', '9d'], answer: 0, why: '降りすぎる相手には、当たれば強いスーテッドもブラフに使えます。' },
        { cards: ['7h', '2c'], answer: 1 },
        { cards: ['Qs', 'Qh'], answer: 0 },
        { cards: ['Jd', '4c'], answer: 1, why: 'ブロッカーもプレイアビリティもありません。' },
        { cards: ['Ah', 'Kc'], answer: 0 },
        { cards: ['9h', '3d'], answer: 1 },
        { cards: ['Ac', '4c'], answer: 0 },
        { cards: ['6c', '6d'], answer: 1, why: '小さいペアはコールでセットを狙う手です。' },
      ],
    },
    { t: 'p', text: '**TAG** は手を選び、参加したら積極的に打つレギュラーです（VPIP 20〜26%、PFR 17〜22%）。教科書どおりなぶん、レンジが読みやすく、**3betに降りすぎ**、**ターンで諦めすぎ**になりがちです。' },
    { t: 'h', text: '3betを増やす' },
    {
      t: 'seats',
      seats: [
        { pos: 'CO', action: 'TAG 2.5bb オープン', bet: 2.5 },
        { pos: 'BTN', hero: true, action: '7.5bb に3bet', bet: 7.5, cards: ['Kd', '9d'] },
        { pos: 'SB', folded: true, bet: 0.5 },
        { pos: 'BB', folded: true, bet: 1 },
      ],
      pot: 11.5,
    },
    {
      t: 'tree',
      root: 'BTN で K9s を3betするか',
      options: [
        {
          label: '7.5bb に3bet',
          outcomes: [
            { label: 'CO が降りる', prob: 0.55, value: 4 },
            { label: 'コールされる（ポストフロップの平均）', prob: 0.35, value: -2 },
            { label: '4betされて降りる', prob: 0.1, value: -7.5 },
          ],
          note: 'コール後の平均 −2bb は目安',
        },
        { label: 'フォールド', ev: 0 },
      ],
      caption: '降りる率 55% なら、コール後に少し負けてもプラスです。',
    },
    {
      t: 'estimate',
      q: 'CO の降りる率が 65%、コール 25%、4bet 10% になったときの EV は何 bb？',
      min: -2,
      max: 4,
      step: 0.05,
      unit: 'bb',
      answer: 1.35,
      tolerance: 0.6,
      explain: '0.65 × 4 − 0.25 × 2 − 0.1 × 7.5 = +1.35bb です。',
    },
    { t: 'warn', text: 'TAG は観察力もあります。3betを急に増やすと4betで反撃されます。4betが増えたら元に戻します。' },
    { t: 'h', text: 'ターンのチェックを狙う' },
    {
      t: 'compare',
      left: { title: 'TAG がターンもベット', points: ['強い手と良いドローが中心', 'ワンペアで粘りすぎない'], verdict: 'bad' },
      right: { title: 'TAG がターンでチェック', points: ['Cベットが空振りだった手が多い', 'ポットの 1/2〜2/3 で打つ'], verdict: 'good' },
    },
    { t: 'h', text: 'もう一度：フロップで付いていき、ターンで奪う' },
    {
      t: 'play',
      title: 'BTN の JTs vs CO の TAG',
      hero: 'BTN',
      heroCards: ['Jh', 'Th'],
      villain: 'CO',
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'CO の TAG が 2.5bb でオープン。あなたは BTN で **J♥T♥**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'IP で十分プレイできる手です。' },
            { label: 'コール', good: true, why: 'ポジションを活かしてフロップを見ます。' },
            { label: '3bet', good: true, why: '降りすぎる相手なら、3betを混ぜても成り立ちます。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Qs', '8d', '3c'],
          pot: 8.5,
          say: 'ブラインドはフォールド。フロップは **Q♠8♦3♣**。TAG が 2bb の Cベット。',
          q: '9 でストレートのガットショット。どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'TAG はここをほぼ毎回打ちます。降りすぎです。' },
            { label: 'コール', good: true, why: '安く付いていき、ターンの反応を見ます。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2h'],
          pot: 10.5,
          say: 'ターンは **2♥**。TAG はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'TAG のチェックは空振りの合図。取りにいく場面です。' },
            { label: '6bb ベット', good: true, why: 'Cベットが空振りだった手を降ろします。コールされても 9 で逆転できます。' },
          ],
        },
      ],
      outro: 'TAG はフォールド。読みやすい相手には、降りる場面を作ってあげます。',
    },
    {
      t: 'quiz',
      q: 'TAG に対する3betを増やすとき、注意することは？',
      options: ['相手が4betを増やしたら戻す', '必ず倍以上に増やす', '4betされても必ずコールする'],
      answer: 0,
      explain: 'TAG は変化に気づいて調整してきます。4betが増えたら、3betブラフを減らします。',
    },
  ],
};

export default lesson;
