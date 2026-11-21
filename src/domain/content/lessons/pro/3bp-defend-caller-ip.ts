import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-defend-caller-ip',
  blocks: [
    { t: 'h', text: 'まず直感で' },
    {
      t: 'rapid',
      q: 'SBの7bb c-bet（ポット21bb）。BTNは続ける？',
      choices: ['コール', 'フォールド'],
      items: [
        { cards: ['Kd', 'Qc'], board: ['Ks', '8d', '3c'], answer: 0 },
        { cards: ['7h', '6c'], board: ['Ks', '8d', '3c'], answer: 1, why: 'ペアもドローもありません。' },
        { cards: ['Qd', 'Qh'], board: ['Ks', '8d', '3c'], answer: 0, why: '必要勝率20%なら、Kの下のペアも続けられます。' },
        { cards: ['8s', '8h'], board: ['Ks', '8d', '3c'], answer: 0 },
        { cards: ['Jh', 'Th'], board: ['Ks', '8d', '3c'], answer: 1, why: 'バックドア程度では足りません。' },
        { cards: ['7c', '7h'], board: ['Ks', '8d', '3c'], answer: 0, why: '小さなc-betにはボードの下のペアも続けます。' },
        { cards: ['6s', '5s'], board: ['Ks', '8d', '3c'], answer: 1, why: 'ガットショットもありません。' },
        { cards: ['9s', '9h'], board: ['Ks', '8d', '3c'], answer: 0 },
      ],
    },
    { t: 'h', text: 'ポジションはあるが、レンジは弱い' },
    {
      t: 'p',
      text: 'BTNがオープン、SBが10bbに3bet、BTNがコール。AA・KKの多くは4betに回るので、BTNのレンジは上限が低めです。目標は損を減らすことです。',
    },
    {
      t: 'pot',
      steps: [
        { label: '3betポット（SB対BTN）', pot: 21, stack: 90 },
        { label: 'フロップ 7bet・コール', pot: 35, stack: 83 },
        { label: 'ターン 17bet・コール', pot: 69, stack: 66 },
      ],
      caption: 'ポット21bb、SPR 約4.3から始まります。',
    },
    {
      t: 'odds',
      pot: 21,
      bet: 7,
      equity: 28,
      caption: 'ポット21bbに7bb。必要勝率は20%。小さなc-betには広く続けます。',
    },
    {
      t: 'estimate',
      q: 'ポット21bbに7bbのc-bet。最低守備頻度（MDF）は？',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 75,
      tolerance: 10,
      explain: '21 ÷ (21 + 7) = 75%。レンジが弱いので、実際はこれより少なく守ります。',
    },
    {
      t: 'p',
      text: 'ターンでSBがチェックしたら、強い手とドローは打ち、中程度の手はチェックバックで安くショーダウンを目指します。',
    },
    { t: 'h', text: '1ハンドで体験' },
    {
      t: 'play',
      title: 'AJoでSBの3betをコール',
      hero: 'BTN',
      heroCards: ['Ah', 'Jd'],
      villain: 'SB',
      villainCards: ['Ac', 'Tc'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 13.5,
          say: 'あなたはBTNで **A♥J♦** を2.5bbでオープン。SBが10bbに3bet。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'ポジションがあるので、AJoはコールで戦えます。' },
            { label: 'フォールド', good: false, why: '間違いではありませんが、やや締めすぎです（僅差）。' },
            { label: '25bbに4bet', good: false, why: 'AJoは4betにすると、強い手にしか続けられません。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Kh', '8d', '3c'],
          pot: 28,
          say: 'ポット21bb。SBが7bbをc-bet。',
          q: 'Aハイとバックドアのフラッシュ・ストレート。どうする？',
          options: [
            { label: 'コール', good: true, why: '必要勝率20%に、Aハイとバックドアで届きます。' },
            { label: 'レイズ', good: false, why: '強い手にしかコールされず、弱い手は降りるだけです。' },
          ],
        },
        {
          street: 'ターン',
          board: ['Js'],
          pot: 35,
          say: 'Jでペアが付きました。SBはチェック。',
          q: 'セカンドペア。どうする？',
          options: [
            { label: 'チェックバック', good: true, why: '中程度の手は、安くショーダウンを目指します。' },
            { label: '17bbをベット', good: false, why: '負けている手は降り、勝っている手にコールされやすくなります。' },
          ],
        },
        {
          street: 'リバー',
          board: ['2d'],
          pot: 35,
          say: 'SBはまたチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェックバック', good: true, why: 'ベットしても、コールしてくるのはKx以上が中心です。' },
            { label: '約18bbをベット', good: false, why: '払ってくれる弱い手が少ないので、薄すぎます。' },
          ],
        },
      ],
      outro: 'SBはATで諦めていました。中程度の手はポジションを使って、安くショーダウンまで運びます。',
    },
  ],
};

export default lesson;
