import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'delayed-cbet',
  blocks: [
    { t: 'h', text: 'まず判断してみる' },
    {
      t: 'rapid',
      q: 'BTN でフロップ 9♦6♣5♠ をチェックで返した。ターンで BB がまたチェック。ベットする？',
      choices: ['ベット', 'チェック'],
      items: [
        { cards: ['Ac', 'Qd'], board: ['9d', '6c', '5s', '2h'], answer: 0, why: '2回チェックした相手は弱い手が多く、AQ はリバーで A か Q を引けます。' },
        { cards: ['Ac', 'Qd'], board: ['9d', '6c', '5s', '8h'], answer: 1, why: '8 で 7x や T7 のストレートが完成し、BB のレンジが強くなります。' },
        { cards: ['Kh', 'Jh'], board: ['9d', '6c', '5s', '2c'], answer: 0 },
        { cards: ['8s', '8c'], board: ['9d', '6c', '5s', '2h'], answer: 1, why: 'ショーダウンバリューがあるので、チェックでポットを小さく保ちます。' },
        { cards: ['Ac', 'Qd'], board: ['9d', '6c', '5s', 'Kc'], answer: 0, why: 'K は BTN のレンジに有利なカードです。' },
        { cards: ['Kh', 'Jh'], board: ['9d', '6c', '5s', '7h'], answer: 1 },
      ],
    },
    { t: 'p', text: 'IP のレイザーがフロップをチェックで返し、ターンで相手が再びチェックしたときに打つのが**ディレイドCベット**です。' },
    { t: 'h', text: '2回チェックしたレンジは弱い' },
    { t: 'p', text: '相手寄りのボードでは、フロップで打っても降りてくれません。強い手ならターンで先に打つことも多いので、2回チェックした相手には弱い手が多く残ります。' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 5.5, actions: ['BTN 2.5bb にオープン', 'BB がコール'] },
        { street: 'フロップ', board: ['9d', '6c', '5s'], pot: 5.5, actions: ['BB チェック', 'BTN も A♣Q♦ でチェック'] },
        { street: 'ターン', board: ['2h'], pot: 5.5, actions: ['BB チェック', 'BTN が 3.5bb ベット'] },
      ],
    },
    {
      t: 'tree',
      root: 'ターン ポット 5.5bb に 3.5bb のディレイドCベット',
      options: [
        { label: 'チェック', ev: 0 },
        {
          label: 'ベット（39% 降りる）',
          outcomes: [{ label: 'フォールド', prob: 0.39, value: 5.5 }, { label: 'コールされて負ける', prob: 0.61, value: -3.5 }],
          note: 'ほぼ損益なし',
        },
      ],
      caption: '損益分岐は 3.5 ÷ 9 ≈ 39%。AQ はコールされてもリバーで勝てることがあるので、実際はもう少し有利です。',
    },
    {
      t: 'quiz',
      q: 'フロップ 9♦6♣5♠ をチェックで返しました。ディレイドCベットに最も向かないターンは？',
      board: ['9d', '6c', '5s'],
      options: ['8♥', '2♥', 'K♣', 'A♦'],
      optionCards: [['8h'], ['2h'], ['Kc'], ['Ad']],
      answer: 0,
      explain: '8 は 7x や T7 のストレートを完成させ、BB を強くします。K・A は BTN に有利なカードです。',
    },
    {
      t: 'estimate',
      q: 'ポット 6bb のターンで 4bb のディレイドCベット。ブラフが利益になるのに必要なフォールド率は？',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 40,
      tolerance: 10,
      explain: '4 ÷ (6 + 4) = 40% です。',
    },
    { t: 'h', text: 'もう一度：チェックしてから打つ' },
    {
      t: 'play',
      title: 'BTN の AQ、9-6-5',
      hero: 'BTN',
      heroCards: ['Ac', 'Qd'],
      villain: 'BB',
      villainCards: ['Th', '9c'],
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'あなたは BTN で **A♣Q♦** を 2.5bb オープン。BB がコール。' },
        {
          street: 'フロップ',
          board: ['9d', '6c', '5s'],
          pot: 5.5,
          say: 'フロップは **9♦6♣5♠**。BB のレンジに当たりやすいボードです。BB はチェック。',
          q: 'A ハイ。どうする？',
          options: [
            { label: '2bb ベット', good: false, why: '打つ戦略もありますが、相手寄りのボードでは降りてくれにくいです（接戦）。' },
            { label: 'チェック', good: true, why: '無料でターンを見て、相手の反応を待ちます。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2h'],
          pot: 5.5,
          say: 'ターンは **2♥**。何も変わらないカードです。BB はまたチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: '2回チェックした相手を降ろせる好機を逃します。' },
            { label: '3.5bb ベット', good: true, why: 'ディレイドCベット。降ろせなくても、A か Q で逆転できます。' },
          ],
        },
        {
          street: 'リバー',
          board: ['Qs'],
          pot: 12.5,
          say: 'BB がコール。リバーは **Q♠**。トップペアになりました。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'チェックでも勝てますが、9x から取る機会を逃します。' },
            { label: '6bb ベット', good: true, why: 'ターンでコールした 9x や 6x から取るバリューベットです。' },
          ],
        },
      ],
      outro: 'フロップで無理に打たず、ターンで相手が弱さを見せたら打ちます。',
    },
    {
      t: 'quiz',
      q: 'ディレイドCベットにあたるのはどれ？',
      options: [
        '相手寄りのフロップをチェックで返し、ターンで相手が再びチェックしたので打つ',
        'フロップの Cベットがコールされ、ターンでも打つ',
        'フロップをチェックで返し、ターンで相手が先に打ってくる',
      ],
      answer: 0,
      explain: 'フロップでも打っていればダブルバレル、相手が先に打てばプローブベットです。',
    },
  ],
};

export default lesson;
