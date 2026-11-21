import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hand-reading',
  blocks: [
    { t: 'h', text: 'まずやってみる：相手のレンジに残る？' },
    { t: 'p', text: 'BTNのオープンにBBがコール。フロップ K♠9♦4♣ で3bb、ターンQ♥で6bbのベットに、BBはどちらもチェックコールしました。' },
    {
      t: 'rapid',
      q: 'この手はBBのレンジに残っている？',
      choices: ['残る', '消える'],
      items: [
        { cards: ['Ac', 'Ad'], board: ['Ks', '9d', '4c', 'Qh'], answer: 1, why: 'AAはプリフロップで3ベットします。' },
        { cards: ['Kh', 'Jd'], board: ['Ks', '9d', '4c', 'Qh'], answer: 0, why: 'トップペア。ターンでガットショットも付き、2回のベットにコールします。' },
        { cards: ['7s', '2h'], board: ['Ks', '9d', '4c', 'Qh'], answer: 1, why: 'BTNのオープンに降りる手です。' },
        { cards: ['Qc', 'Jc'], board: ['Ks', '9d', '4c', 'Qh'], answer: 0, why: 'フロップのガットショットでコールし、ターンでペアになりました。' },
        { cards: ['6c', '5c'], board: ['Ks', '9d', '4c', 'Qh'], answer: 1, why: 'フロップで当たりがなく、3bbのベットに降ります。' },
        { cards: ['Kd', 'Qd'], board: ['Ks', '9d', '4c', 'Qh'], answer: 0, why: 'フロップのトップペアがターンで2ペアになりました。' },
        { cards: ['Jh', 'Th'], board: ['Ks', '9d', '4c', 'Qh'], answer: 0, why: 'フロップのガットショットでコールし、ターンでストレートが完成。' },
      ],
    },
    { t: 'h', text: 'アクションごとに絞る' },
    { t: 'p', text: '**ハンドリーディング**は相手の手を1つに当てることではなく、アクションごとにレンジを絞り込むことです。' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 5.5, actions: ['BTNが2.5bbオープン', 'BBがコール（3ベットする強い手が消える）'] },
        { street: 'フロップ', board: ['Ks', '9d', '4c'], pot: 5.5, actions: ['BBがチェック', 'BTNが3bb、BBがコール（K・9のペアやドローが残る）'] },
        { street: 'ターン', board: ['Qh'], pot: 11.5, actions: ['BBがチェック', 'BTNが6bb、BBがコール（強いペア以上とドローに絞られる）'] },
        { street: 'リバー', board: ['2s'], pot: 23.5, actions: ['外れたドローとバリューのコンボを数える'] },
      ],
      caption: 'アクションごとにレンジが絞られていく。',
    },
    { t: 'h', text: 'コンボを数える' },
    {
      t: 'list',
      items: [
        'ポケットペア：6コンボ。ボードに1枚あれば3コンボ',
        'スーテッド：4コンボ。オフスート：12コンボ',
        '見えているカードの分だけ減る',
      ],
    },
    {
      t: 'combos',
      groups: [
        { label: 'KK（トップセット）', hands: ['KK'] },
        { label: '99・44（セット）', hands: ['99', '44'] },
        { label: 'AK', hands: ['AK'] },
      ],
      dead: ['Ks', '9d', '4c', 'Kh', 'Qd'],
      caption: 'ボード K♠9♦4♣、あなたは K♥Q♦。KK は1、99と44は各3、AK は8コンボ。',
    },
    {
      t: 'quiz',
      q: 'あなたは K♥Q♦。相手が持つコンボが最も少ないのは？',
      hand: ['Kh', 'Qd'],
      board: ['Ks', '9d', '4c'],
      options: ['K♦K♣', '9♥9♠', '4♥4♠', 'A♥K♦'],
      optionCards: [['Kd', 'Kc'], ['9h', '9s'], ['4h', '4s'], ['Ah', 'Kd']],
      answer: 0,
      explain: 'Kはボードと自分で2枚見えているので、残り2枚でKKは1通りだけ。99と44は各3、AKは8コンボです。',
    },
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
      explain: 'Aはボードに1枚、あなたが1枚。残り2枚で、AAは1コンボです。',
    },
    { t: 'warn', title: 'レンジを狭めすぎない', text: '1つのアクションで「セットしかない」と決めつけるのは危険です。ブラフや過大評価の可能性も残します。' },
    { t: 'h', text: 'もう一度やる' },
    {
      t: 'rapid',
      q: 'あなたの手札で、相手のこの手のコンボは減る？',
      choices: ['減る', '減らない'],
      items: [
        { cards: ['Kh', 'Qd'], board: ['Ks', '9d', '4c'], text: '相手の AK', answer: 0, why: 'K♥を持っているので、相手のKが1枚減ります。' },
        { cards: ['Kh', 'Qd'], board: ['Ks', '9d', '4c'], text: '相手の 99', answer: 1, why: '9を持っていないので変わりません。' },
        { cards: ['Ah', '9c'], board: ['As', '8d', '3c'], text: '相手の AA', answer: 0, why: 'Aが2枚見えていて、AAは1コンボだけです。' },
        { cards: ['Jh', 'Tc'], board: ['Qs', '7d', '2c'], text: '相手の KK', answer: 1, why: 'Kはどこにも見えていません。' },
        { cards: ['9h', '8h'], board: ['Ks', '9d', '4c'], text: '相手の K9', answer: 0, why: '9♥を持っているので、残りの9は2枚です。' },
        { cards: ['Ad', '5d'], board: ['Ks', '9d', '4c'], text: '相手の 44', answer: 1, why: '4を持っていないので3コンボのままです。' },
      ],
    },
    { t: 'tip', title: '数字は大まかでよい', text: '「バリューは十数コンボ、ブラフは数コンボ」と大まかに比べるだけで、判断の質は上がります。' },
  ],
};

export default lesson;
