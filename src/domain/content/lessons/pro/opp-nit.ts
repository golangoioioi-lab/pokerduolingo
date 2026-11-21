import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'opp-nit',
  blocks: [
    { t: 'h', text: 'まず判断してみる' },
    {
      t: 'rapid',
      q: 'あなたは BTN でオープン。BB のニット（3bet 3%）に3betされた。続ける？',
      choices: ['続ける', 'フォールド'],
      items: [
        { cards: ['Ah', 'Ad'], answer: 0 },
        { cards: ['Ah', 'Qd'], answer: 1, why: 'QQ+・AK に支配され、勝率は約24%です。' },
        { cards: ['Ks', 'Kc'], answer: 0 },
        { cards: ['Kd', 'Qd'], answer: 1, why: 'AA・KK・AK に支配されています。' },
        { cards: ['Jh', 'Jd'], answer: 1, why: '勝率は約36%。普段は続ける手ですが、この相手には降りる選択肢が十分あります（接戦）。' },
        { cards: ['As', 'Ks'], answer: 0 },
        { cards: ['As', '5s'], answer: 1, why: 'ニットは降りないので、4betブラフも通りにくいです。' },
      ],
    },
    { t: 'p', text: '**ニット**は非常に強い手しかプレイしない相手です（VPIP 10〜14%、3bet 2〜4%）。攻めるところ（ブラインド）と、降りるところ（相手のレイズ）がはっきり分かれます。' },
    { t: 'h', text: 'ニットの3betはほぼ本物' },
    {
      t: 'combos',
      groups: [{ label: 'ペア', hands: ['AA', 'KK', 'QQ'] }, { label: 'AK', hands: ['AK'] }],
      caption: 'QQ+ と AK で 34 コンボ（全体の約2.6%）。',
    },
    {
      t: 'equity',
      players: [{ label: 'あなた JJ', cards: ['Jh', 'Jd'], pct: 36 }, { label: 'ニットの3bet（QQ+, AK）', pct: 64 }],
      caption: 'プリフロップのオールイン勝率（目安）。',
    },
    {
      t: 'estimate',
      q: 'ニットの3bet（QQ+, AK）に対して AQo を持っています。相手のレンジは何コンボに減る？（全体は 34）',
      hand: ['Ah', 'Qd'],
      min: 0,
      max: 40,
      step: 1,
      unit: 'コンボ',
      answer: 24,
      tolerance: 6,
      explain: 'AA 3、KK 6、QQ 3、AK 12 で 24 コンボ。AQo はそのほとんどに負けています。',
    },
    { t: 'h', text: 'ブラインドのニットからは取る' },
    {
      t: 'tree',
      root: 'SB で弱い手。BB はニット。3bb でオープンするか',
      options: [
        {
          label: '3bb でオープン',
          outcomes: [
            { label: 'BB が降りる', prob: 0.75, value: 1.5 },
            { label: 'コールされてポストフロップ（平均）', prob: 0.2, value: -2 },
            { label: '3betされて降りる', prob: 0.05, value: -2.5 },
          ],
          note: 'コール後の平均 −2bb は目安',
        },
        { label: 'フォールド', ev: 0 },
      ],
      caption: '約 +0.6bb。BB のニットが降りすぎるので、小さなプラスを取り続けられます。',
    },
    {
      t: 'compare',
      left: { title: 'ニットがコールで入ったポット', points: ['ペアや AQ・AJ が中心', 'Cベットは控えめに'], verdict: 'neutral' },
      right: { title: 'ニットがターン・リバーで大きく打つ', points: ['ほぼ強い手', 'トップペアでも降りる候補'], verdict: 'bad' },
    },
    { t: 'h', text: 'もう一度：引くところで引く' },
    {
      t: 'play',
      title: 'CO の AQ vs BB のニット',
      hero: 'CO',
      heroCards: ['Ad', 'Qc'],
      villain: 'BB',
      villainCards: ['8c', '8h'],
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'あなたは CO で **A♦Q♣** を 2.5bb オープン。BB のニットがコール。' },
        {
          street: 'フロップ',
          board: ['Qs', '8d', '3c'],
          pot: 5.5,
          say: 'フロップは **Q♠8♦3♣**。トップペア・トップキッカー。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'ニットのコールレンジには、払ってくれるペアが多くあります。' },
            { label: '2.5bb ベット', good: true, why: '弱いペアや JJ・TT から取ります。' },
          ],
        },
        {
          street: 'ターン',
          board: ['7h'],
          pot: 17.5,
          say: 'BB がコール。ターンは **7♥**。BB が自分から 7bb をベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: '1回は見てもよい場面です（接戦）。' },
            { label: 'フォールド', good: true, why: 'ニットのリードは強い手が多く、降りるのも十分にありです（接戦）。' },
            { label: 'レイズ', good: false, why: '強い手にしか続けられません。' },
          ],
        },
        {
          street: 'リバー',
          board: ['2s'],
          pot: 42.5,
          say: 'あなたがコールしたとします。リバーは **2♠**。BB が 18bb をベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: false, why: '必要勝率は約30%ですが、ニットの2回目の大きなベットにブラフはほぼありません。' },
            { label: 'フォールド', good: true, why: 'トップペアでも、ニットのバレルには降ります。' },
          ],
        },
      ],
      outro: 'ニットは8のセットでした。取れるところで取り、反撃されたら引きます。',
    },
    {
      t: 'estimate',
      q: 'BB のニットが降りる率 85%、コール 10%、3bet 5% なら、SB オープンの EV は何 bb？',
      min: -1,
      max: 2,
      step: 0.05,
      unit: 'bb',
      answer: 0.95,
      tolerance: 0.4,
      explain: '0.85 × 1.5 − 0.1 × 2 − 0.05 × 2.5 ≈ +0.95bb です。',
    },
  ],
};

export default lesson;
