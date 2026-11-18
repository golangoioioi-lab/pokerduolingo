import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-a-high',
  blocks: [
    {
      t: 'p',
      text: 'A-highのドライボードは、プリフロップのレイザーにとって最も打ちやすいフロップの1つです。数字は、6人卓100bbのBTN対BBのシングルレイズドポット（SRP）を、本アプリの簡易レンジで計算した目安です。',
    },
    { t: 'h', text: '3つのA-highボード' },
    {
      t: 'table',
      head: ['ボード', 'BTNのエクイティ（目安）', '性質'],
      rows: [
        ['A♠7♦2♣', '約53%', 'ドライ・レインボー'],
        ['A♦8♣3♥', '約53%', 'ドライ・レインボー'],
        ['A♥J♦9♣', '約54%', '少しつながっている'],
      ],
    },
    { t: 'h', text: 'なぜレイザー有利か' },
    {
      t: 'p',
      text: 'BBは強いAxを3betに回し、AJo以下などの弱いAxもフォールドします。コールレンジにはAxが少なめです。一方BTNのオープンレンジには、強いAxが豊富です。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'AK/AQ', hands: ['AK', 'AQ'] },
        { label: 'AJ/AT', hands: ['AJ', 'AT'] },
        { label: 'A9以下のスーテッド', hands: ['A9s', 'A8s', 'A5s', 'A4s'] },
      ],
      dead: ['As', '7d', '2c'],
      caption: 'A♠7♦2♣ 上の主なAxのコンボ数（BTNのオープンレンジに含まれる手の例）。',
    },
    {
      t: 'equity',
      players: [{ label: 'BTNレンジ', pct: 53 }, { label: 'BBレンジ', pct: 47 }],
      board: ['As', '7d', '2c'],
      caption: 'A♠7♦2♣ のレンジ対レンジ（目安）。',
    },
    { t: 'h', text: '基本の戦略' },
    {
      t: 'p',
      text: 'BTNはポットの約1/3の小さなベットを高い頻度で打つのが標準です。BBがチェックレイズできる強い手が少ないため、安いサイズで多くのポットを取れます。',
    },
    {
      t: 'compare',
      left: { title: 'BTN（レイザー）', points: ['AxとAAが多い', '小さなCベットを高頻度で', 'ポジションも有利'], verdict: 'good' },
      right: { title: 'BB（コーラー）', points: ['強いAxが少ない', 'コール・フォールド中心', 'チェックレイズは少なめ'], verdict: 'bad' },
      caption: 'A-highドライはレイザーの「打ちやすい」ボード。',
    },
    { t: 'h', text: '注意点' },
    {
      t: 'p',
      text: 'BBがチェックレイズする手も存在します。たとえば 77、22、A7s などのセットやツーペアです。BTNは、チェックレイズされたら続けられないブラフを事前に整理しておきます。',
    },
    {
      t: 'quiz',
      q: 'このボードで、BTNに最も向く基本のCベットは？',
      board: ['As', '7d', '2c'],
      options: ['全額ベットのみ', 'ポットの約1/3の小さなベットを高頻度', '常にチェック', 'ポットサイズのベットのみ'],
      answer: 1,
      explain: 'レンジアドバンテージがあり、BBに強い手が少ないので、小さなベットで頻繁に打つのが標準です。',
    },
    {
      t: 'quiz',
      q: 'A♠7♦2♣ で、BBがチェックレイズできる強い手はどれ？',
      board: ['As', '7d', '2c'],
      options: ['K♥9♣', 'T♥8♣', '7♥7♣（セット）', 'Q♥9♣'],
      optionCards: [['Kh', '9c'], ['Th', '8c'], ['7h', '7c'], ['Qh', '9c']],
      answer: 2,
      explain: 'セットやツーペアなど、強い手を持つときはBBもチェックレイズを使えます。他の3つは何もない手です。',
    },
    {
      t: 'estimate',
      q: 'このボードでのBTNレンジのエクイティ（目安）は何%？',
      board: ['As', '7d', '2c'],
      min: 40,
      max: 60,
      step: 1,
      unit: '%',
      answer: 53,
      tolerance: 3,
      explain: 'BTNに強いAxとAAが多いので、約53%と有利です。',
    },
    {
      t: 'quiz',
      q: 'BBのコールレンジにAxが少ない主な理由は？',
      options: ['強いAxは3betし、弱いAxは降りるから', 'Aは弱いから', 'BBは常にフォールドするから', 'ルールで禁止だから'],
      answer: 0,
      explain: 'AKなどは3bet、AJo以下の弱いAxは降りる分、コールレンジのAxは少なくなります。',
    },
  ],
};

export default lesson;
