import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'srp-low-connected-boards',
  blocks: [
    { t: 'h', text: '低くつながったボードで打つ手は？' },
    {
      t: 'quiz',
      q: 'BTN対BB、7♥6♥5♣。BTN がベットに向く手は？',
      board: ['7h', '6h', '5c'],
      options: ['A♥4♥', 'K♦J♠', '2♦2♠', 'Q♠9♦'],
      optionCards: [['Ah', '4h'], ['Kd', 'Js'], ['2d', '2s'], ['Qs', '9d']],
      answer: 0,
      explain: 'A♥4♥ はストレートドローとナッツフラッシュドローの両方を持ちます。降ろせて、呼ばれても勝ち目があります。',
    },
    {
      t: 'p',
      text: 'BTN のレンジは高いカード中心で、低いボードにはほとんど当たりません。BB は 65s、76s、87s や小さなペアを多く持ち、**ナッツ級の手が BB 側に揃います**。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'セット', hands: ['77', '66', '55'] },
        { label: 'ストレート（43s、98s）', hands: ['43s', '98s'] },
      ],
      dead: ['7h', '6h', '5c'],
      caption: 'BB の強い手の例。セット9コンボ、ストレート系のスーテッド8コンボ。',
    },
    { t: 'h', text: 'BTN の対策' },
    {
      t: 'list',
      items: [
        'c-bet は **3〜4割**（目安）まで下げる',
        '打つ手はセット、ツーペア、強いドロー。サイズは大きめ',
        'ミドルペアや役のない高いカードはチェック',
      ],
    },
    {
      t: 'compare',
      left: {
        title: 'ベット向き',
        cards: ['Ah', '4h'],
        board: ['7h', '6h', '5c'],
        points: ['ドロー2種類', 'レイズされても降りやすい'],
        verdict: 'good',
      },
      right: {
        title: 'チェック向き',
        cards: ['Kd', 'Js'],
        board: ['7h', '6h', '5c'],
        points: ['役もドローもない', '打つと強い手にだけ呼ばれる'],
        verdict: 'bad',
      },
    },
    {
      t: 'pot',
      steps: [
        { label: 'プリフロップ後', pot: 5.5, stack: 97.5 },
        { label: 'フロップ 4.1bet・コール', pot: 13.7, stack: 93.4 },
        { label: 'ターン 9bet・コール', pot: 31.7, stack: 84.4 },
      ],
      caption: '大きく2回打つと、ターンで SPR は約2.7。手を選ばないと大きく負けます。',
    },
    {
      t: 'estimate',
      q: 'このボードで、BTNのc-bet頻度の目安は？',
      board: ['7h', '6h', '5c'],
      min: 0,
      max: 100,
      step: 5,
      unit: '%',
      answer: 35,
      tolerance: 15,
      explain: 'BB に強い手が多く、BTN のレンジ優位が小さいボードです。3〜4割程度（目安）です。',
    },
    { t: 'h', text: '役のない手で我慢する' },
    {
      t: 'play',
      title: 'BTN で K♦J♠、7-6-5',
      hero: 'BTN',
      heroCards: ['Kd', 'Js'],
      villain: 'BB',
      steps: [
        {
          street: 'フロップ',
          board: ['7h', '6h', '5c'],
          pot: 5.5,
          say: 'BTN オープン、BB コール。フロップは **7♥6♥5♣**。BB はチェック。',
          q: 'K ハイ、ドローなし。どうする？',
          options: [
            { label: 'チェックバック', good: true, why: '打っても強い手は降りず、チェックレイズも受けやすいボードです。' },
            { label: '約75%（4bb）ベット', good: false, why: 'ブラフに使うならドローのある手を優先します。' },
          ],
        },
        {
          street: 'ターン',
          board: ['Ks'],
          pot: 5.5,
          say: 'ターンは **K♠**。トップペアになりました。BB が 3bb ベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'トップペアは十分強く、BB のドローやペアに勝っています。' },
            { label: 'フォールド', good: false, why: '小さいベットに降りるには強すぎます。' },
            { label: 'オールイン', good: false, why: 'BB のストレートやツーペアにだけ呼ばれます。' },
          ],
        },
        {
          street: 'リバー',
          board: ['2c'],
          pot: 11.5,
          say: 'リバーは **2♣**。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: 'ショーダウンで勝てることが多く、打っても強い手にしか呼ばれません。' },
            { label: 'ポットベット', good: false, why: '弱い手は降り、強い手だけが残ります。' },
          ],
        },
      ],
      outro: '相手に有利なボードでは、役のない手は打たずに安く進みます。',
    },
    { t: 'h', text: 'もう一度：打つ手を選ぶ' },
    {
      t: 'rapid',
      q: 'BTN、7♥6♥5♣。BB がチェック。',
      choices: ['ベット', 'チェック'],
      items: [
        { cards: ['Ah', '4h'], board: ['7h', '6h', '5c'], answer: 0, why: 'ドロー2種類の強いブラフ候補です。' },
        { cards: ['Kd', 'Js'], board: ['7h', '6h', '5c'], answer: 1, why: '役もドローもありません。' },
        { cards: ['7s', '7d'], board: ['7h', '6h', '5c'], answer: 0, why: 'トップセット。ドローから料金を取ります。' },
        { cards: ['9d', '8d'], board: ['7h', '6h', '5c'], answer: 0, why: 'ストレート完成。バリューです。' },
        { cards: ['2d', '2s'], board: ['7h', '6h', '5c'], answer: 1, why: '小さなペアは打つ価値が低いです。' },
        { cards: ['Ad', 'Kc'], board: ['7h', '6h', '5c'], answer: 1, why: 'オーバーカードだけでは BB のレンジに押し返されます。' },
      ],
    },
  ],
};

export default lesson;
