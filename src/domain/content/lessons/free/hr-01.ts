import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr-01',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。BTN で K♥Q♠ を持ち、トップペアを各ストリートどのサイズで打つかを考えます。' },
    {
      t: 'play',
      title: 'BTN で KQ のトップペア',
      hero: 'BTN',
      heroCards: ['Kh', 'Qs'],
      villain: 'BB',
      villainCards: ['Kc', 'Jd'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 1.5,
          say: 'CO までフォールド。あなたは BTN で **K♥Q♠**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'BTN の KQ は十分に強いオープンハンドです。' },
            { label: '2.5bb にオープン', good: true, why: '強い手はレイズで入り、ブラインドに払わせます。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Kd', '8c', '4h'],
          pot: 5.5,
          say: 'BB だけがコール。K のトップペア、キッカーは Q。BB はチェック。',
          q: 'K84 レインボー。どうする？',
          options: [
            { label: 'チェック', good: false, why: '勝っている手でポットを育てる機会を逃します。' },
            { label: '2bb（約3分の1）ベット', good: true, why: '乾いたボードは小さく打ち、弱い K・8x・小さいペアを残します。' },
            { label: '5bb（ほぼポット）ベット', good: false, why: '弱い手が降りて、強い手だけが残ります。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2s'],
          pot: 9.5,
          say: 'BB がコール。ターンの 2♠ はほぼ何も変えません。BB はまたチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'ポットが小さいままリバーを迎え、取れる額が減ります。' },
            { label: '3bb（約3分の1）ベット', good: false, why: '弱い K はもっと大きくても払うので、取りこぼしです。' },
            { label: '6.5bb（約3分の2）ベット', good: true, why: '弱い K・8x・ドローに払わせてポットを育てます。' },
          ],
        },
        {
          street: 'リバー',
          board: ['9h'],
          pot: 22.5,
          say: 'BB がコール。9♥ でストレートもフラッシュも完成しません。BB はチェック。',
          q: 'どのサイズで打つ？',
          options: [
            { label: 'チェック', good: false, why: 'KJ・KT など負けている K から取れる額を捨てます。' },
            { label: '16bb（約70%）ベット', good: true, why: '弱い K がまだコールできる上限に近いサイズです。' },
            { label: 'オールイン（89bb）', good: false, why: 'コールするのは勝っている K9 やセットだけになります。' },
          ],
        },
      ],
      outro: 'BB は K♣J♦ でコールし、キッカーの差で 54.5bb を獲得。小さく始めて、ストリートごとにサイズを上げました。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'p', text: 'ベットは約36% → 約68% → 約71%。ポットが育つにつれて SPR は約18から約4まで下がりました。' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 1.5, actions: ['あなた（BTN）が2.5bbにオープン', 'SBフォールド、BBコール'] },
        { street: 'フロップ', board: ['Kd', '8c', '4h'], pot: 5.5, actions: ['BBチェック', 'あなたが2bb（約36%）ベット、BBコール'] },
        { street: 'ターン', board: ['2s'], pot: 9.5, actions: ['BBチェック', 'あなたが6.5bb（約68%）ベット、BBコール'] },
        { street: 'リバー', board: ['9h'], pot: 22.5, actions: ['BBチェック', 'あなたが16bb（約71%）ベット、BBコール'] },
        { street: 'ショーダウン', pot: 54.5, actions: ['BBはK♣J♦、あなたのK♥Q♠が勝ち'] },
      ],
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ', pot: 5.5, stack: 97.5 },
        { label: 'ターン', pot: 9.5, stack: 95.5 },
        { label: 'リバー', pot: 22.5, stack: 89 },
      ],
      caption: '小さいベットでも、3回続けるとポットは4倍に育つ。',
    },
    {
      t: 'estimate',
      q: '16bb を打たれた BB が、コールするのに必要な勝率は？',
      hand: ['Kh', 'Qs'],
      board: ['Kd', '8c', '4h', '2s', '9h'],
      min: 0,
      max: 60,
      step: 1,
      unit: '%',
      answer: 29,
      tolerance: 4,
      explain: '16 ÷（22.5 + 16 + 16）≒ 29%。K のワンペアなら払いたくなる値段なので、弱い K からコールが取れます。',
    },
    { t: 'h', text: 'もう一度：誰から取る？' },
    {
      t: 'rapid',
      q: 'ボード K♦8♣4♥2♠9♥。BB がこの手なら、あなたの K♥Q♠ は？',
      choices: ['勝っている', '負けている'],
      items: [
        { cards: ['Kc', 'Jd'], board: ['Kd', '8c', '4h', '2s', '9h'], answer: 0, why: '同じ K のペアで、キッカー Q が J に勝ちます。' },
        { cards: ['Ac', 'Ks'], board: ['Kd', '8c', '4h', '2s', '9h'], answer: 1, why: 'キッカーの A に負けます。' },
        { cards: ['Ks', 'Td'], board: ['Kd', '8c', '4h', '2s', '9h'], answer: 0, why: 'キッカー Q が T に勝ちます。' },
        { cards: ['8s', '8d'], board: ['Kd', '8c', '4h', '2s', '9h'], answer: 1, why: '8 のセットに負けます。' },
        { cards: ['Qh', 'Qd'], board: ['Kd', '8c', '4h', '2s', '9h'], answer: 0, why: 'QQ はボードの K の下のペアです。' },
        { cards: ['Kc', '9c'], board: ['Kd', '8c', '4h', '2s', '9h'], answer: 1, why: 'リバーの 9 でツーペアになりました。' },
        { cards: ['Ac', '8s'], board: ['Kd', '8c', '4h', '2s', '9h'], answer: 0, why: '8 のペアは K のペアより下です。' },
        { cards: ['9d', '8d'], board: ['Kd', '8c', '4h', '2s', '9h'], answer: 1, why: '9 と 8 のツーペアに負けます。' },
      ],
    },
    { t: 'tip', text: '乾いたボードのフロップは小さく打ち、ターン・リバーでサイズを上げます。リバーは「より弱い手がコールできる上限」を目安にします。' },
  ],
};

export default lesson;
