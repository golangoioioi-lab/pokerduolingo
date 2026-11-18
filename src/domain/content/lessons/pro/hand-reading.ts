import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hand-reading',
  blocks: [
    { t: 'p', text: '**ハンドリーディング**とは、相手の手を1つに当てることではなく、**アクションごとに相手のレンジ（ありうる手の集合）を絞り込む**ことです。' },
    { t: 'h', text: '絞り込みの流れ' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 5.5, actions: ['BTNが2.5bbオープン', 'BBがコール（BTNはオープンレンジ、BBは3ベットしない手と読む）'] },
        { street: 'フロップ', board: ['Ks', '9d', '4c'], pot: 5.5, actions: ['BBがチェック', 'BTNが3bbベット、BBがコール（K・9のペアやドローが残る）'] },
        { street: 'ターン', board: ['Qh'], pot: 11.5, actions: ['BBがチェック', 'BTNが6bbベット、BBがコール（強いペア以上とストレートドローに絞られる）'] },
        { street: 'リバー', board: ['2s'], pot: 23.5, actions: ['外れたドローとバリューのコンボを数える'] },
      ],
      caption: 'アクションごとにレンジが絞られていく例。',
    },
    { t: 'h', text: 'コンボを数える' },
    {
      t: 'list',
      items: [
        'ポケットペア（例：KK）：6コンボ。ボードに1枚あれば3コンボ',
        'スーテッド（例：AKs）：4コンボ。どちらかがボードに1枚あれば3コンボ',
        'オフスート（例：AKo）：12コンボ。ボードに1枚あれば9コンボ',
      ],
    },
    {
      t: 'cards',
      hands: [{ label: 'あなた', cards: ['Kh', 'Qd'] }],
      board: ['Ks', '9d', '4c'],
      caption: 'Kはボードに1枚、あなたが1枚持っているので、残りは2枚。KK は1コンボだけ。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'KK（トップセット）', hands: ['KK'] },
        { label: '99・44（セット）', hands: ['99', '44'] },
        { label: 'AK', hands: ['AK'] },
      ],
      dead: ['Ks', '9d', '4c', 'Kh', 'Qd'],
      caption: 'ボードとあなたの手札を除いたコンボ数。KK は1、99と44は各3、AK は8。',
    },
    {
      t: 'quiz',
      q: '上のボードで、相手が持つコンボが最も少ないのはどの手？',
      hand: ['Kh', 'Qd'],
      board: ['Ks', '9d', '4c'],
      options: ['K♦K♣', '9♥9♠', '4♥4♠', 'A♥K♦'],
      optionCards: [['Kd', 'Kc'], ['9h', '9s'], ['4h', '4s'], ['Ah', 'Kd']],
      answer: 0,
      explain: 'KK は1コンボ、99と44は各3コンボ、AK は8コンボ。Kをボードと自分で2枚見ているので、KK は残り2枚で1通りだけです。',
    },
    { t: 'h', text: 'ブロッカーの効果' },
    { t: 'p', text: '自分が持っているカードは、相手が持つことはできません。上の例では K を持つだけで、相手の KK が3コンボから1コンボに、AK が12コンボから8コンボに減ります。' },
    {
      t: 'estimate',
      q: '相手のAAは何コンボ？',
      hand: ['Ah', '9c'],
      board: ['As', '8d', '3c'],
      min: 0,
      max: 6,
      step: 1,
      unit: 'コンボ',
      answer: 1,
      tolerance: 1,
      explain: 'A は全部で4枚。ボードに1枚、あなたが1枚持っているので、残りは2枚。組み合わせは1通りで、AA は1コンボです。',
    },
    {
      t: 'estimate',
      q: '相手の AQ（スーテッド＋オフスート）は何コンボ？',
      hand: ['Jh', 'Tc'],
      board: ['Qs', '7d', '2c'],
      min: 0,
      max: 16,
      step: 1,
      unit: 'コンボ',
      answer: 12,
      tolerance: 3,
      explain: 'A は4枚、Q はボードに1枚あるので残り3枚。4 × 3 = 12コンボです。',
    },
    { t: 'tip', title: '数字は大まかでよい', text: '実戦で正確に数える必要はありません。「バリューは十数コンボ、ブラフは数コンボくらい」と大まかに比べるだけで、判断の質は大きく上がります。' },
    { t: 'warn', title: 'レンジを狭めすぎない', text: '1つのアクションで「相手はセットしかない」と決めつけるのは危険です。ブラフや過大評価の可能性も残しておきましょう。' },
  ],
};

export default lesson;
