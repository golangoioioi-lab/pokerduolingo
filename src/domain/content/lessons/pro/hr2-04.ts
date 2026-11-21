import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-04',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。SB の 3bb オープンを BB で 8♣7♣ コール。ブラインド同士（BvB）で、ドローのレイズと完成後の取り方を見ます。' },
    {
      t: 'play',
      title: 'BvB で 87s',
      hero: 'BB',
      heroCards: ['8c', '7c'],
      villain: 'SB',
      villainCards: ['Ad', '9d'],
      steps: [
        { street: 'プリフロップ', pot: 6, say: 'SB が 3bb でオープンし、あなたは BB でコール。ポストフロップは BB がポジションを持ちます。' },
        {
          street: 'フロップ',
          board: ['9s', '6d', '2c'],
          pot: 8,
          say: '5 か T でストレートのオープンエンド。SB がポット 6bb に **2bb** ベット。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: '必要勝率 20% の安い値段で 8アウツを捨てます。' },
            { label: 'コール', good: true, why: '値段が安くポジションもあるので十分な選択。レイズとは僅差です。' },
            { label: '7bb にレイズ', good: true, why: '僅差で選んだ線。SB の外れた手を降ろし、当たったときのポットも育てます。' },
            { label: '97bb オールイン', good: false, why: '降ろせる手に必要以上のチップをかけ、強い手にだけコールされます。' },
          ],
        },
        {
          street: 'ターン',
          board: ['Th'],
          pot: 20,
          say: '7bb にレイズし、SB がコール。T♥ で 6-7-8-9-T のストレート完成。SB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェックして罠にかける', good: false, why: 'ポットが小さいままで、J や 8 で SB の手が良くなることもあります。' },
            { label: '6bb（約1/3）ベット', good: false, why: '9x やツーペアが払える額より小さすぎます。' },
            { label: '13bb（約2/3）ベット', good: true, why: 'SB の 9x やツーペアは十分にコールできる額です。' },
          ],
        },
        {
          street: 'リバー',
          board: ['3h'],
          pot: 46,
          say: 'SB がコール。3♥ で 54 が下のストレートになるだけで、あなたはナッツのまま。SB はチェック。残りは 77bb。',
          q: 'どう打つ？',
          options: [
            { label: 'ポットの約1/3', good: false, why: 'コールされても取れる額が半分です。' },
            { label: 'ポットの約2/3', good: true, why: 'A9・K9 のような 9 のワンペアがコールしやすい額です。' },
            { label: 'オールイン', good: false, why: 'ポットの1.7倍には 9 のワンペアがほとんど降ります。' },
          ],
        },
      ],
      outro: '30bb にコールした SB は A♦9♦。あなたは 106bb を獲得しました。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'p', text: 'コールも十分な場面でしたが、レイズしておくとストレート完成後のポットがすでに大きくなっています。' },
    {
      t: 'estimate', q: 'フロップの 8アウツ。ターンとリバーの2枚で完成する確率は？',
      hand: ['8c', '7c'], board: ['9s', '6d', '2c'],
      min: 0, max: 100, step: 1, unit: '%', answer: 32, tolerance: 6,
      explain: '2枚見るときの目安は アウツ × 4 ≒ 32% です（正確には約31.5%）。必要勝率 20% を上回ります。',
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 6, actions: ['SB 3bb オープン', 'BB（あなた）コール'] },
        { street: 'フロップ', board: ['9s', '6d', '2c'], pot: 6, actions: ['SB 2bb ベット', 'あなた 7bb にレイズ', 'SB コール'] },
        { street: 'ターン', board: ['Th'], pot: 20, actions: ['SB チェック', 'あなた 13bb ベット', 'SB コール'] },
        { street: 'リバー', board: ['3h'], pot: 46, actions: ['SB チェック', 'あなた 30bb ベット', 'SB コール'] },
        { street: 'ショーダウン', pot: 106, actions: ['ストレートが 9 のペアに勝つ'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 6, stack: 97 },
        { label: 'ターン開始', pot: 20, stack: 90 },
        { label: 'リバー開始', pot: 46, stack: 77 },
        { label: '決着', pot: 106, stack: 47 },
      ],
      caption: 'フロップのレイズでポットが一気に大きくなり、ストレート完成後に大きく取る土台になりました。',
    },
    { t: 'h', text: 'もう一度：アウツを数える' },
    {
      t: 'outs',
      q: 'フロップで 8♣7♣。次の1枚でストレート以上になるカードを全部タップ。',
      hand: ['8c', '7c'], board: ['9s', '6d', '2c'],
      target: 'ストレート',
      explain: '5 が4枚と T が4枚で 8アウツ。両側が空いたオープンエンドです。',
    },
    { t: 'tip', text: 'ドローでレイズしておくと、当たったときのポットがすでに大きくなっています。BvB は相手のレンジが広く、ドローのレイズが機能しやすい場面です。' },
  ],
};

export default lesson;
