import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-19',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。BB はつい相手に任せがちですが、リバーでナッツになったら自分から打つ場面を見ます。' },
    {
      t: 'play',
      title: 'BB で 8♦7♦',
      hero: 'BB',
      heroCards: ['8d', '7d'],
      villain: 'BTN',
      villainCards: ['As', '9s'],
      steps: [
        {
          street: 'フロップ', board: ['9c', '6s', '2d'], pot: 7.5,
          say: 'BTN の 2.5bb オープンに、あなたは BB で **8♦7♦** をコール。T か 5 でストレートです。あなたのチェックに BTN が 2bb をベット。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: '小さいベットに降りる理由はありません。' },
            { label: 'コール', good: true, why: '必要勝率は約21%。OESD はリバーまでに約32%完成し、当たれば大きく取れます。' },
          ],
        },
        {
          street: 'ターン', board: ['Kh'], pot: 9.5,
          say: 'ターンは **K♥**。あなたがチェックすると、BTN もチェックで回しました。',
          q: 'BTN のチェックから言えることは？',
          options: [
            { label: 'BTN は K を持っていることが多い', good: false, why: 'K のペアなら、もう一度打ってポットを大きくしたいはずです。' },
            { label: 'BTN の強い手は少ない', good: true, why: '残りは弱い 9x や小さいペア、あきらめた手が中心です。' },
            { label: 'BTN はナッツを隠している', good: false, why: '強い手ほどターンで打ちます。チェックしたレンジは弱くなります。' },
          ],
        },
        {
          street: 'リバー', board: ['5h'], pot: 9.5,
          say: 'リバーは **5♥**。5-6-7-8-9 のストレートで、このボードのナッツです。あなたが先に行動します。',
          q: 'どうする？',
          options: [
            { label: 'チェックして BTN のベットを待つ', good: false, why: '僅差ですが、弱いレンジの BTN はあまり打たず、上乗せなしで終わりがちです。' },
            { label: '2bb（約5分の1）をベット', good: false, why: '9x なら払える額より少なすぎます。' },
            { label: '7bb（約4分の3）をベット', good: true, why: '9x は「ターンでチェックしたあなたのブラフかも」とかなりコールします。' },
          ],
        },
      ],
      outro: 'BTN は 9 のペアでコール。9x はリバーで自分から打つ手ではないので、リードしなければ取れなかった 7bb です。',
    },
    { t: 'h', text: '振り返り' },
    {
      t: 'tree',
      root: 'リバー、ポット 9.5bb。ナッツでリードするかチェックか（数字は目安）',
      options: [
        {
          label: '7bb をベット',
          outcomes: [
            { label: 'BTN がコール', prob: 0.5, value: 16.5 },
            { label: 'BTN がフォールド', prob: 0.5, value: 9.5 },
          ],
        },
        {
          label: 'チェック',
          outcomes: [
            { label: 'BTN がベット → チェックレイズで取る', prob: 0.2, value: 25 },
            { label: 'BTN もチェック', prob: 0.8, value: 9.5 },
          ],
          note: 'キャップされた BTN はあまり打ってこない',
        },
      ],
      caption: 'ベット 13.0bb 対 チェック 12.6bb と差は小さめ。BTN がリバーでよく打ってくる相手ならチェックレイズが上回ります。',
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 5.5, actions: ['BTN 2.5bb オープン', 'BB（あなた）コール'] },
        { street: 'フロップ', board: ['9c', '6s', '2d'], pot: 5.5, actions: ['あなた チェック', 'BTN 2bb ベット', 'あなた コール'] },
        { street: 'ターン', board: ['Kh'], pot: 9.5, actions: ['あなた チェック', 'BTN チェック'] },
        { street: 'リバー', board: ['5h'], pot: 9.5, actions: ['あなた 7bb ベット', 'BTN コール'] },
        { street: 'ショーダウン', pot: 23.5, actions: ['ストレートが 9 のペアに勝つ'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    {
      t: 'estimate', q: 'フロップで BTN の 2bb をコールするのに必要な勝率は約何%？',
      hand: ['8d', '7d'], board: ['9c', '6s', '2d'],
      min: 0, max: 60, step: 1, unit: '%', answer: 21, tolerance: 5,
      explain: '2 ÷（5.5 + 2 + 2）≒ 21% です。',
    },
    { t: 'h', text: 'アウツを数える' },
    {
      t: 'outs',
      q: 'フロップの 8♦7♦。ストレートになるカードを全部タップ',
      hand: ['8d', '7d'],
      board: ['9c', '6s', '2d'],
      target: 'ストレート',
      explain: 'T が 4 枚、5 が 4 枚の合計 8 枚。両端が空いているので OESD と呼びます。',
    },
    { t: 'tip', text: '相手がターンでチェックしてレンジが弱くなったら、リバーは自分から払える額を提示する方が多く取れます。' },
  ],
};

export default lesson;
