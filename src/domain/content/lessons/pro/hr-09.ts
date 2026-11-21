import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr-09',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。BTN で A♦9♦。BB は受け身で、ブラフやレイズはほとんどせず、Q 以上のペアなら自分からベットしてくる相手です。' },
    {
      t: 'play',
      title: '受け身な BB に薄いバリュー',
      hero: 'BTN',
      heroCards: ['Ad', '9d'],
      villain: 'BB',
      villainCards: ['8h', '8s'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 1.5,
          say: 'CO までフォールド。あなたは BTN で **A♦9♦**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'BTN の A9s は十分なオープンハンドです。' },
            { label: '2.5bb にオープン', good: true, why: 'BTN から広くオープンします。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Qc', '9s', '5h'],
          pot: 5.5,
          say: 'BB がコール。9 のセカンドペア。BB チェック、あなたが 2bb をベットし、BB がコール。',
        },
        {
          street: 'ターン',
          board: ['3d'],
          pot: 9.5,
          say: 'ターンは 3♦。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: '6bb（約3分の2）ベット', good: false, why: 'Q にはコールされ、9 より弱い手の多くは降ります。' },
            { label: 'チェック', good: true, why: 'ショーダウンバリューがある手なので、ポットを小さく保ちます。' },
          ],
        },
        {
          street: 'リバー',
          board: ['2c'],
          pot: 9.5,
          say: 'リバーは 2♣。BB はまたチェック。Q を持っていればベットしてくる相手なので、Q はほぼ除けます。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: '負けている手からの追加の利益を逃します。' },
            { label: '3bb（約3分の1）ベット', good: true, why: 'K9・J9・A5・66〜88 など「安いから見たい」手がコールします。' },
            { label: '9bb（ほぼポット）ベット', good: false, why: '弱い手は降り、コールするのは勝っている手ばかりになります。' },
          ],
        },
      ],
      outro: 'BB は 8♥8♠ でコールし、9 のペアで 15.5bb を獲得。ターンで止め、リバーで小さく 3bb を上乗せしました。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'p', text: 'リバーで BB に残る手を数えると、勝っている手61コンボ、負けている手19コンボです。コールされたときに50%以上勝っていれば、薄くても利益になります。' },
    {
      t: 'combos',
      groups: [
        { label: 'あなたが勝っている（BBが負け）', hands: ['K9', 'J9', 'T9', '98s', '97s', 'A5', '65s', '54s', '66', '77', '88'] },
        { label: 'あなたが負けている（BBが勝ち）', hands: ['Q9', '99', '55', '33', '22', 'A4s'] },
      ],
      dead: ['Qc', '9s', '5h', '3d', '2c', 'Ad', '9d'],
      caption: '勝っている手61コンボ、負けている手19コンボ。',
    },
    {
      t: 'estimate',
      q: '勝っている手の7割（約43コンボ）と負けている手19コンボが全部コールするとき、コールされて勝つ割合は？',
      hand: ['Ad', '9d'],
      board: ['Qc', '9s', '5h', '3d', '2c'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 69,
      tolerance: 10,
      explain: '43 ÷（43 + 19）≒ 69%。50%を大きく超えているので、ベットが利益になります。',
    },
    {
      t: 'tree',
      root: 'リバー：ポット9.5bbで3bbのベットとチェックの比較（BBが負けている手の約7割＝43コンボをコール）',
      options: [
        {
          label: '3bbをベット',
          outcomes: [
            { label: 'コールされて勝つ（43÷80）', prob: 0.5375, value: 12.5 },
            { label: 'コールされて負ける（19÷80）', prob: 0.2375, value: -3 },
            { label: 'フォールド（18÷80）', prob: 0.225, value: 9.5 },
          ],
          note: 'EVは約8.1bb',
        },
        {
          label: 'チェック',
          outcomes: [
            { label: 'ショーダウンで勝つ（61÷80）', prob: 0.7625, value: 9.5 },
            { label: '負ける（19÷80）', prob: 0.2375, value: 0 },
          ],
          note: 'EVは約7.2bb',
        },
      ],
      caption: '薄いバリューベットで約0.9bbの上乗せ。',
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 1.5, actions: ['あなた（BTN）が2.5bbにオープン', 'BBコール'] },
        { street: 'フロップ', board: ['Qc', '9s', '5h'], pot: 5.5, actions: ['BBチェック', 'あなたが2bbベット、BBコール'] },
        { street: 'ターン', board: ['3d'], pot: 9.5, actions: ['BBチェック', 'あなたもチェック'] },
        { street: 'リバー', board: ['2c'], pot: 9.5, actions: ['BBチェック', 'あなたが3bbベット、BBコール'] },
        { street: 'ショーダウン', pot: 15.5, actions: ['BBは8♥8♠、あなたの9のペアが勝ち'] },
      ],
    },
    { t: 'h', text: 'もう一度：相手が攻撃的なら' },
    {
      t: 'play',
      title: 'チェックレイズの多い BB',
      hero: 'BTN',
      heroCards: ['Ad', '9d'],
      villain: 'BB',
      steps: [
        {
          street: 'ターン',
          board: ['Qc', '9s', '5h', '3d'],
          pot: 9.5,
          say: '同じハンド。ただし BB はチェックレイズのブラフをよく使う攻撃的なプレイヤーです。ターンは両者チェック。',
        },
        {
          street: 'リバー',
          board: ['2c'],
          pot: 9.5,
          say: 'リバー 2♣。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: '3bb ベット', good: false, why: 'チェックレイズされると、セカンドペアはブラフか分からないまま難しい判断になります。' },
            { label: 'チェック', good: true, why: 'レイズしてくる相手には、ショーダウンで守ります。' },
          ],
        },
      ],
      outro: '薄いバリューベットは「コールされたら勝っている」ことで成り立ちます。レイズしない受け身な相手だからこそ薄く打てます。',
    },
    { t: 'tip', text: '薄いバリューベットの条件は、コールされたときに50%以上勝っていることです。サイズを小さくするほど、より弱い手がコールしてくれます。' },
  ],
};

export default lesson;
