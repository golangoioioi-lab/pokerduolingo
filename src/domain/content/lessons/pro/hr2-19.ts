import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-19',
  blocks: [
    { t: 'p', text: '6人卓・全員 100bb。BTN が 2.5bb にオープンし、あなたは BB で 8♦ 7♦ をコールします。BB はつい「チェックして相手に任せる」になりがちですが、リバーでナッツになったら自分から打つ場面を見ます。' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: 'フォールド', folded: true },
        { pos: 'HJ', action: 'フォールド', folded: true },
        { pos: 'CO', action: 'フォールド', folded: true },
        { pos: 'BTN', action: '2.5bb オープン', bet: 2.5 },
        { pos: 'SB', action: 'フォールド', bet: 0.5, folded: true },
        { pos: 'BB', hero: true, action: 'コール', bet: 2.5, cards: ['8d', '7d'] },
      ],
      pot: 5.5,
    },
    { t: 'h', text: 'フロップ：9♣ 6♠ 2♦' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['8d', '7d'] }], board: ['9c', '6s', '2d'], caption: 'ダイヤのバックドアもあるストレートドロー。' },
    {
      t: 'estimate', q: 'ストレートが完成するアウツは何枚？',
      hand: ['8d', '7d'], board: ['9c', '6s', '2d'],
      min: 0, max: 20, step: 1, unit: '枚', answer: 8, tolerance: 2,
      explain: 'T が 4 枚、5 が 4 枚の合計 8 枚です。両端が空いているので OESD と呼びます。',
    },
    { t: 'p', text: 'ポットは 5.5bb、残りは 97.5bb。あなたがチェックし、BTN が 2bb（約36%）をベットしました。' },
    {
      t: 'quiz', q: 'あなたの選択は？',
      hand: ['8d', '7d'], board: ['9c', '6s', '2d'],
      options: ['フォールド', 'コール'],
      answer: 1,
      explain: '必要勝率は 2 ÷（5.5 + 2 + 2）≒ 21%。OESD はリバーまで見れば約 32% 完成し、当たれば大きく取れます。小さいベットに降りる理由はありません。',
    },
    { t: 'p', text: 'あなたはコール。ポットは 9.5bb。ターンの K♥ で、あなたがチェックすると BTN もチェックで回しました。' },
    {
      t: 'quiz', q: 'BTN がターンでチェックしたことから言えることは？',
      hand: ['8d', '7d'], board: ['9c', '6s', '2d', 'Kh'],
      options: ['BTN は K を持っていることが多い', 'BTN の強い手（K のペア以上、セット）は少ない', 'BTN はナッツを隠している'],
      answer: 1,
      explain: 'K のペアやセットなら、ターンでもう一度打ってポットを大きくしたいはずです。チェックしたレンジは、弱い 9x や小さいペア、あきらめた手が中心で、強い手が抜けています。',
    },
    { t: 'h', text: 'リバー：5♥' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['8d', '7d'] }], board: ['9c', '6s', '2d', 'Kh', '5h'], caption: '5-6-7-8-9 のストレート。このボードのナッツです。' },
    {
      t: 'quiz', q: 'ポット 9.5bb、あなたが先に行動します。選択は？',
      hand: ['8d', '7d'], board: ['9c', '6s', '2d', 'Kh', '5h'],
      options: ['チェックして BTN のベットを待つ', '2bb（約5分の1）をベット', '7bb（約4分の3）をベット'],
      answer: 2,
      explain: 'BTN のレンジは弱い 9x や小さいペアが中心で、自分からはあまり打ちません。あなたがチェックすると、多くの場合そのままショーダウンになり、ナッツなのに上乗せがありません。9x は 7bb でも「ターンでチェックしたあなたのブラフかも」とかなりコールします。2bb では少なすぎます。ただし BTN がブラフで打ってくる相手ならチェックレイズも有力で、下の目安の数字でも差は小さく、相手の傾向で入れ替わる接戦です。',
    },
    { t: 'p', text: 'あなたは 7bb をベット。BTN は A♠ 9♠ でコールし、あなたが 23.5bb を獲得しました。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['8d', '7d'] }, { label: 'BTN', cards: ['As', '9s'] }], board: ['9c', '6s', '2d', 'Kh', '5h'], caption: '9 のペアは、リバーで自分から打つ手ではありません。' },
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
      caption: '目安の数字では ベット 13.0bb 対 チェック 12.6bb と差は小さい。BTN がリバーでよく打ってくるならチェックレイズが上回ります。',
    },
    { t: 'tip', text: '相手がターンでチェックしてレンジが弱くなったら、リバーは自分から払える額を提示する方が多く取れます。ポジションのない側のリードは、こうした場面で強い武器になります。' },
  ],
};

export default lesson;
