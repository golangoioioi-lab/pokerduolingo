import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-cbet-oop',
  blocks: [
    {
      t: 'p',
      text: 'BBがBTNのオープンに3betし、BTNがコールした場面です。BBはレンジ優位を持ちますが、ポジションがありません。IPの3bettorよりc-betの頻度は下がり、手を選んで打つのが基本です。',
    },
    { t: 'h', text: 'OOPの3bettorの強みと弱み' },
    {
      t: 'compare',
      left: {
        title: '強み',
        points: ['AA〜KKやAKを多く持つレンジ優位', 'A・Kハイでの小さなc-betが通りやすい', 'SPRが小さいので全額を入れる場面が明確'],
        verdict: 'good',
      },
      right: {
        title: '弱み',
        points: ['ポジションがなく、ターン以降の判断が難しい', 'コーラーのフロートやレイズを受ける', 'チェックすると主導権を渡す'],
        verdict: 'bad',
      },
    },
    { t: 'h', text: '頻度とサイズ（目安）' },
    {
      t: 'table',
      head: ['ボード', 'OOP 3bettorのc-bet頻度（目安）', 'サイズ'],
      rows: [
        ['A♠7♦2♣', '約6〜7割', '小（約25〜33%）'],
        ['K♠8♦3♣', '約5〜6割', '小'],
        ['T♥9♥6♣', '約3〜4割', '中〜大（約50〜66%）'],
        ['7♥6♥5♣', '約2〜3割', '大、手を選ぶ'],
      ],
    },
    {
      t: 'p',
      text: 'BBが11bbに3bet、BTNがコールしたポットは22.5bbです。約33%（7.5bb）のc-betなら、BTNの必要勝率は 7.5 ÷ (22.5 + 15) = 20% です。',
    },
    {
      t: 'odds',
      pot: 22.5,
      bet: 7.5,
      equity: 25,
      caption: 'ポット22.5bbに7.5bb。コーラーの必要勝率は20%。広く続けられる価格です。',
    },
    {
      t: 'pot',
      steps: [
        { label: '3betポット（BB対BTN）', pot: 22.5, stack: 89 },
        { label: 'フロップ 7.5bet・コール', pot: 37.5, stack: 81.5 },
        { label: 'ターン 19bet・コール', pot: 75.5, stack: 62.5 },
      ],
      caption: '33%→約50%で進めると、リバーのSPRは約0.8。フロップでc-betを打った時点で、コミットを意識します。',
    },
    { t: 'h', text: '打つ手とチェックする手' },
    {
      t: 'list',
      items: [
        '**バリュー**：AA〜QQ、AK、セットなど。ボードにもよるが、ほぼ打つ。',
        '**ブラフ**：A5sのようなブロッカー付きの手や、バックドアのある手。',
        '**チェック**：ショーダウンバリューのある中程度のペア（JJ、TTなど）や、ドローのない弱い手。',
      ],
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 22.5, actions: ['BTNが2.5bbオープン', 'BB（A♠5♠）が11bbに3bet', 'BTNがコール'] },
        { street: 'フロップ', board: ['Kd', '8h', '3c'], pot: 22.5, actions: ['BB：7.5bbをc-bet', 'BTNがコール'] },
        { street: 'ターン', board: ['4s'], pot: 37.5, actions: ['BB：バックドアフラッシュとガットショットで続行を検討'] },
      ],
      caption: 'A♠5♠はフロップではブラフ。ターンの4♠でホイールのガットショットとバックドアのフラッシュが付きます。',
    },
    {
      t: 'quiz',
      q: 'OOPの3bettorのc-bet頻度が最も低くなるのは、どちらのボード？',
      options: ['A♠7♦2♣', '7♥6♥5♣'],
      optionCards: [['As', '7d', '2c'], ['7h', '6h', '5c']],
      answer: 1,
      explain: '低くつながったボードはコーラーにも強い手とドローが多く、OOPでは頻度を下げて手を選びます。Aハイのドライなボードは、小さく高頻度で打てます。',
    },
    {
      t: 'estimate',
      q: 'ポット22.5bbに7.5bbをc-bet。コーラーの必要勝率は？',
      min: 0,
      max: 60,
      step: 1,
      unit: '%',
      answer: 20,
      tolerance: 5,
      explain: '7.5 ÷ (22.5 + 15) = 7.5 ÷ 37.5 = 20% です。',
    },
    {
      t: 'quiz',
      q: 'BB（OOP 3bettor）がA♠5♠。K♦8♥3♣のフロップで、基本の方針は？',
      options: ['7.5bb前後の小さなc-betをブラフとして打つ', 'チェックして諦める', 'ポットサイズのベットを打つ', 'オールインする'],
      hand: ['As', '5s'],
      board: ['Kd', '8h', '3c'],
      answer: 0,
      explain: 'Kハイのドライなボードは3bettorに有利で、小さなc-betが通ります。A5sはAのブロッカーを持つので、ブラフ候補です。',
    },
    {
      t: 'quiz',
      q: 'K♦8♥3♣。OOPの3bettorがチェックに回しやすいのは、どちらの手？',
      options: ['J♠J♦（ボードより下のペア）', 'A♠A♦（オーバーペア）'],
      optionCards: [['Js', 'Jd'], ['As', 'Ad']],
      board: ['Kd', '8h', '3c'],
      answer: 0,
      explain: 'JJはショーダウンバリューがありますが、ベットしても強い手にしかコールされません。チェックして守ります。AAは強いバリューなので打ちます。',
    },
  ],
};

export default lesson;
