import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '4bet',
  blocks: [
    {
      t: 'p',
      text: '相手の3betに対してさらにレイズすることを4betと言います。100bbでは4betでポットが大きくなり、残りスタックとの比率（SPR）が小さくなります。',
    },
    { t: 'p', text: 'そのため4betレンジは、少数の強い手と、慎重に選んだブラフで組み立てます。' },
    { t: 'h', text: 'バリュー4betとブラフ4bet' },
    { t: 'p', text: 'バリューの中心はQQ+とAKです。相手の3betがタイトならKK+とAKsまで絞り、ブラインド同士のように広い場面ではJJやAQsまで広げます。' },
    {
      t: 'p',
      text: 'ブラフ4betは、コールするには弱いが降りるのも惜しい手から選びます。代表はA5s〜A2sです。5betされたら降り、コールされたらナッツフラッシュやホイールで戦います。',
    },
    {
      t: 'cards',
      hands: [{ label: 'ブラフ4betの例', cards: ['As', '5s'] }, { label: 'バリュー4betの例', cards: ['Ah', 'Kd'] }],
    },
    { t: 'h', text: 'ブロッカーの効果' },
    { t: 'p', text: 'Aを1枚持つと、相手のAAとAKが減ります。5betで続けてくる手が減るので、ブラフが通りやすくなります。' },
    {
      t: 'combos',
      groups: [{ label: 'AA', hands: ['AA'] }, { label: 'AK', hands: ['AK'] }, { label: 'KK', hands: ['KK'] }],
      caption: '何も持たないとき：AA 6、AK 16、KK 6 で合計28コンボ。',
    },
    {
      t: 'combos',
      groups: [{ label: 'AA', hands: ['AA'] }, { label: 'AK', hands: ['AK'] }, { label: 'KK', hands: ['KK'] }],
      dead: ['As', '5s'],
      caption: 'A♠5♠ を持つと：AA 3、AK 12、KK 6 で合計21コンボ。',
    },
    {
      t: 'tip',
      title: 'AKはさらに効く',
      text: 'A♥K♦ を持つと、相手のAAは3、KKは3、AKは9コンボで、合計15コンボです。バリューとしてもブロッカーとしても優秀です。',
    },
    { t: 'h', text: 'サイズの目安' },
    {
      t: 'p',
      text: 'インポジションなら3betの約2.2〜2.5倍、アウトオブポジションなら約2.5〜3倍が目安です。ポジションがない側は、相手に安くコールさせないようサイズを上げます。',
    },
    {
      t: 'table',
      head: ['流れ', '3bet', '4bet'],
      rows: [
        ['BTN 2.5bbオープン → SBが3bet → BTNが4bet（IP）', '10bb', '22〜25bb'],
        ['CO 2.5bbオープン → BTNが3bet → COが4bet（OOP）', '7.5bb', '19〜22bb'],
      ],
    },
    { t: 'h', text: '4betされたとき' },
    {
      t: 'p',
      text: '3betした側は、5bet（実質オールイン）、コール、フォールドの3択です。AA・KKは5bet、QQ・AKは状況次第で5betかコール、JJ以下やブラフで3betした手は基本的にフォールドします。',
    },
    {
      t: 'p',
      text: '例：COが2.5bbオープン、BTNが7.5bbに3bet、COが20bbに4bet。ブラインドは降りています。ポットは 20 + 7.5 + 1.5 = 29bb、BTNのコール額は12.5bbです。',
    },
    {
      t: 'timeline',
      steps: [
        {
          street: 'プリフロップ',
          pot: 29,
          actions: ['CO 2.5bb にオープン', 'BTN 7.5bb に3bet（ブラインドはフォールド）', 'CO 20bb に4bet', 'BTN のコール額は 12.5bb'],
        },
      ],
    },
    { t: 'formula', text: '必要勝率 = 12.5 ÷ (29 + 12.5) = 12.5 ÷ 41.5 ≈ 30%' },
    {
      t: 'odds',
      pot: 16.5,
      bet: 12.5,
      equity: 28,
      caption: 'CO の4betに追加で出す額は12.5bb。必要勝率は約30%です（エクイティ28%は例）。',
    },
    {
      t: 'p',
      text: '値段は安く見えますが、コール後のSPRは約1.9（80 ÷ 41.5）で、フロップでほぼスタックが入ります。AQoやKJsのように4betレンジに支配されやすい手でのコールは損をしやすくなります。',
    },
    {
      t: 'quiz',
      q: 'COオープンにBTNが3bet。COがブラフで4betする手として最も向いているのは？',
      options: ['A5s', 'KJo', '66', 'T8o'],
      optionCards: [['As', '5s'], ['Kd', 'Jc'], ['6h', '6d'], ['Th', '8c']],
      answer: 0,
      explain: 'A5sはAのブロッカーで相手のAA・AKを減らし、コールされてもナッツフラッシュやホイールの可能性があります。KJoは5betに弱く、66やT8oはブロッカーもプレイアビリティも足りません。',
    },
    {
      t: 'estimate',
      q: 'BTNが2.5bbオープン、SBが10bbに3bet、BBフォールド、BTNが22bbに4bet。SBがコールするのに必要な勝率は？',
      min: 10,
      max: 50,
      step: 1,
      unit: '%',
      answer: 27,
      tolerance: 4,
      explain: 'ポットは 22 + 10 + 1（BB）= 33bb。コール額は 22 − 10 = 12bb。必要勝率は 12 ÷ (33 + 12) = 12 ÷ 45 ≈ 27% です。',
    },
    {
      t: 'estimate',
      q: 'A♥K♦ を持っています。相手の4betレンジにある AA・KK・AK は、何も持たないときの 28 から何コンボに減る？',
      hand: ['Ah', 'Kd'],
      min: 0,
      max: 30,
      step: 1,
      unit: 'コンボ',
      answer: 15,
      tolerance: 3,
      explain: 'AAは 6→3、KKは 6→3、AKは 16→9 になります。合計 3 + 3 + 9 = 15コンボです。',
    },
    { t: 'try', text: 'BTN vs COの3betレンジを見て、4betされたら続けられる手がどれかを確認しましょう。', tab: 'ranges' },
  ],
};

export default lesson;
