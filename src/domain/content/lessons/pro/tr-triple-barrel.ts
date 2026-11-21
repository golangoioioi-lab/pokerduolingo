import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'tr-triple-barrel',
  blocks: [
    { t: 'h', text: 'まずやってみる：3発目のブラフを選ぶ' },
    {
      t: 'p',
      text: 'K♦9♣4♥6♠ でBTNが2回ベットし、BBが2回コール。リバー2♣でBBはチェック。ポットは21.1bbです。3回続けて打つのが**トリプルバレル**です。',
    },
    {
      t: 'quiz',
      q: 'BTNのリバーブラフとして最もよい手は？',
      board: ['Kd', '9c', '4h', '6s', '2c'],
      options: ['Q♠J♠', '8♣7♣', 'A♦3♦', '5♥5♦'],
      optionCards: [['Qs', 'Js'], ['8c', '7c'], ['Ad', '3d'], ['5h', '5d']],
      answer: 0,
      explain: 'QJはBBのコールするKQ・KJを減らし、BBの降りる外れたドローは減らしません。87は降りる手を減らし、A3や55はショーダウンで勝てることがあります。',
    },
    { t: 'h', text: 'ブラフの量はサイズで決まる' },
    {
      t: 'formula',
      text: 'ブラフの割合 = 16 ÷ (21.1 + 16 × 2) ≈ 30%',
      note: '16bb（約3/4ポット）を打つとき。BBがコールに必要な勝率と同じ値',
    },
    {
      t: 'combos',
      groups: [
        { label: 'バリュー', hands: ['AK', 'KQ'] },
        { label: 'ブラフ候補（外れたドロー）', hands: ['QJs', 'JTs', '87s'] },
      ],
      dead: ['Kd', '9c', '4h', '6s', '2c'],
      caption: 'ボードのK♦を除くので、AKとKQは12コンボずつ',
    },
    {
      t: 'estimate',
      q: 'バリューが24コンボ、ブラフの割合を30%にしたい。ブラフは何コンボが目安？',
      board: ['Kd', '9c', '4h', '6s', '2c'],
      min: 0,
      max: 40,
      step: 1,
      unit: 'コンボ',
      answer: 10,
      tolerance: 3,
      explain: 'ブラフ ÷ (バリュー + ブラフ) = 30% なので、ブラフ = 24 × 30 ÷ 70 ≈ 10コンボ。スーテッド3種類の12コンボでほぼ釣り合います。',
    },
    { t: 'h', text: 'どの手でブラフするか' },
    {
      t: 'list',
      items: [
        '**コールする手をブロックする**：BBのKQ・KJを減らすQやJを持つ',
        '**降りる手をブロックしない**：BBの外れたドロー（87s・T8sなど）と同じカードを持たない',
      ],
    },
    {
      t: 'combos',
      groups: [{ label: 'Q♠J♠を持つとき、BBのKQ・KJ', hands: ['KQ', 'KJ'] }],
      dead: ['Kd', '9c', '4h', '6s', '2c', 'Qs', 'Js'],
      caption: '何も持たなければ24コンボ。QとJを1枚ずつ持つと18コンボに減る',
    },
    { t: 'h', text: 'もう一度やる' },
    {
      t: 'rapid',
      q: 'リバー2♣でBBがチェック。BTNはこの手でベット？ チェック？',
      choices: ['ベット', 'チェック'],
      items: [
        { cards: ['As', 'Kc'], board: ['Kd', '9c', '4h', '6s', '2c'], answer: 0, why: 'トップペア・トップキッカー。Kxから払ってもらえます。' },
        { cards: ['Qs', 'Js'], board: ['Kd', '9c', '4h', '6s', '2c'], answer: 0, why: 'BBのKQ・KJを減らすブラフです。' },
        { cards: ['8c', '7c'], board: ['Kd', '9c', '4h', '6s', '2c'], answer: 1, why: 'BBの降りる外れたドロー（87sなど）を減らしてしまいます。' },
        { cards: ['Ad', '3d'], board: ['Kd', '9c', '4h', '6s', '2c'], answer: 1, why: 'Aハイは外れたドローに勝っています。チェックしてショーダウンへ。' },
        { cards: ['Kh', 'Qh'], board: ['Kd', '9c', '4h', '6s', '2c'], answer: 0, why: 'トップペアの強いキッカー。弱いKxから取れます。' },
        { cards: ['Td', 'Ts'], board: ['Kd', '9c', '4h', '6s', '2c'], answer: 1, why: '9xには勝っていますが、打つとKxにしかコールされません。' },
        { cards: ['9h', '9d'], board: ['Kd', '9c', '4h', '6s', '2c'], answer: 0, why: 'セット。大きく打ってバリューを取ります。' },
        { cards: ['5h', '5d'], board: ['Kd', '9c', '4h', '6s', '2c'], answer: 1, why: '外れたドローには勝っています。ブラフにはしません。' },
      ],
    },
    {
      t: 'play',
      title: 'BTNでQ♠J♠',
      hero: 'BTN',
      heroCards: ['Qs', 'Js'],
      villain: 'BB',
      steps: [
        { street: 'フロップ', board: ['Kd', '9c', '4h'], pot: 5.5, say: 'BTNでオープンし、BBがコール。フロップでBTNが1.8bbをベットし、BBがコール。' },
        {
          street: 'ターン',
          board: ['6s'],
          pot: 9.1,
          say: 'ターン6♠でBBはチェック。',
          q: 'どうする？',
          options: [
            { label: '6bbバレル', good: true, why: 'Tでストレートのガットショット。ショーダウンでは勝てないので打ちます。' },
            { label: 'チェック', good: true, why: 'アウツは4枚だけ。あきらめる選択もあります。' },
          ],
        },
        {
          street: 'リバー',
          board: ['2c'],
          pot: 21.1,
          say: 'BBがコール。リバー2♣でBBはチェック。Qハイのままです。',
          q: 'どうする？',
          options: [
            { label: '16bbベット', good: true, why: 'QとJでBBのKQ・KJを減らしています。トリプルバレルのブラフに向く手です。' },
            { label: 'チェック', good: false, why: 'Qハイではショーダウンでほぼ勝てません。' },
          ],
        },
        { street: 'リバー', pot: 37.1, say: 'BBはしばらく考えてフォールド。ポットはBTNのものです。' },
      ],
      outro: '量はサイズで決め、手札はブロッカーで選びます。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'リバーのブラフは、サイズから割合を決め、コンボで量を合わせ、ブロッカーで手札を選びます。ショーダウンで勝てる手はブラフにしません。',
    },
  ],
};

export default lesson;
