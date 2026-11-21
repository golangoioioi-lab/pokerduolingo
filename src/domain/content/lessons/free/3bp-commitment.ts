import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-commitment',
  blocks: [
    { t: 'h', text: 'まず直感で' },
    {
      t: 'quiz',
      q: 'ターン、ポット46.5bb、残り77bb。相手が25bbをベットしました。あなたはトップペア・トップキッカーです。',
      options: ['続ける', 'フォールドする'],
      hand: ['Ac', 'Kd'],
      board: ['Ks', '9d', '4c', '2h'],
      answer: 0,
      explain: '必要勝率は 25 ÷ (71.5 + 25) ≈ 26% です。SPRも約1.7と低く、トップペア・トップキッカーはここで降りる手ではありません。',
    },
    { t: 'h', text: 'ベットを重ねると引き返せない' },
    {
      t: 'p',
      text: 'チップを多く入れるほど、残りに対してポットが大きくなり、降りにくくなります。これを**コミット**と言います。',
    },
    {
      t: 'pot',
      steps: [
        { label: '3betポット（BTN対BB）', pot: 22.5, stack: 89 },
        { label: 'フロップ 12bet・コール', pot: 46.5, stack: 77 },
        { label: 'ターン 25bet・コール', pot: 96.5, stack: 52 },
      ],
      caption: 'BBの11bb 3betをBTNがコール。半ポットを2回で、リバーはSPR 約0.5です。',
    },
    {
      t: 'odds',
      pot: 96.5,
      bet: 52,
      equity: 35,
      caption: 'リバーで52bbのオールイン。必要勝率は約26%。3割以上勝てる手ならコールです。',
    },
    {
      t: 'table',
      head: ['SPR（目安）', '全額を入れる手'],
      rows: [
        ['約3以下', 'トップペア（強いキッカー）以上'],
        ['約3〜6', 'オーバーペア、ツーペア以上'],
        ['約6以上', 'セット、ストレート以上'],
      ],
    },
    {
      t: 'rapid',
      q: 'オールインを受けた。必要勝率は30%より下？',
      choices: ['30%未満', '30%以上'],
      items: [
        { text: 'ポット96.5bbに52bb', answer: 0, why: '52 ÷ 200.5 ≈ 26%。' },
        { text: 'ポット20bbに20bb', answer: 1, why: '20 ÷ 60 ≈ 33%。' },
        { text: 'ポット40bbに10bb', answer: 0, why: '10 ÷ 60 ≈ 17%。' },
        { text: 'ポット30bbに30bb', answer: 1, why: '30 ÷ 90 ≈ 33%。' },
        { text: 'ポット60bbに20bb', answer: 0, why: '20 ÷ 100 = 20%。' },
        { text: 'ポット10bbに20bb', answer: 1, why: '20 ÷ 50 = 40%。' },
        { text: 'ポット50bbに25bb', answer: 0, why: '25 ÷ 100 = 25%。' },
        { text: 'ポット20bbに40bb', answer: 1, why: '40 ÷ 100 = 40%。' },
      ],
    },
    { t: 'h', text: '1ハンドで体験' },
    {
      t: 'play',
      title: 'BBの3betをコールしたAK',
      hero: 'BTN',
      heroCards: ['Ac', 'Kd'],
      villain: 'BB',
      villainCards: ['As', 'Ah'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 14,
          say: 'あなたはBTNで **A♣K♦** を2.5bbでオープン。BBが11bbに3bet。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'AKは3betに対しても強い手です。' },
            { label: 'コール', good: true, why: 'ポジションがあるので、コールで十分戦えます。' },
            { label: '4bet', good: true, why: '4betも有力です。ここではコールで進みます。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Ks', '9d', '4c'],
          pot: 34.5,
          say: 'ポット22.5bb、SPR 約4。BBが12bbをベット。',
          q: 'トップペア・トップキッカー。どうする？',
          options: [
            { label: 'コール', good: true, why: '負けている手を残したまま進めます。' },
            { label: 'フォールド', good: false, why: 'このボードでAKはレンジの上位です。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2h'],
          pot: 71.5,
          say: 'ポット46.5bb、残り77bb。BBが25bbをベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: '必要勝率は約26%。ここで降りる手ではありません。' },
            { label: 'フォールド', good: false, why: 'すでにコミットに近く、降りると損が大きくなります。' },
          ],
        },
        {
          street: 'リバー',
          board: ['7s'],
          pot: 148.5,
          say: 'ポット96.5bb。BBが残り52bbをオールイン。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: '必要勝率は約26%。AKより弱いバリューやブラフも混ざります。' },
            { label: 'フォールド', good: false, why: 'この価格でトップペア・トップキッカーを降りるのは降りすぎです。' },
          ],
        },
      ],
      outro: '今回はAAに負けました。それでも、この価格でのコールは正しい判断です。結果ではなく、必要勝率で考えます。',
    },
  ],
};

export default lesson;
