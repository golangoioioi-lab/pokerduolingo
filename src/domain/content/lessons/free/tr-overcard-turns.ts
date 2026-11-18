import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'tr-overcard-turns',
  blocks: [
    {
      t: 'p',
      text: 'フロップより高いカードがターンに落ちると、レイザーが得をすることが多くなります。ただし「Aが落ちたから打てばいい」ではありません。コンボで理由を確かめます。',
    },
    { t: 'h', text: 'なぜレイザーに有利なのか' },
    {
      t: 'p',
      text: 'BTNが2.5bbでオープン、BBがコール。フロップ 9♥6♣2♦ でBTNが1.8bbベットし、BBがコール。ターンはA♠、ポットは9.1bbです。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'BTNに多く、BBは3betしがちなAx', hands: ['AK', 'AQ'] },
        { label: '両者とも持つAx（例）', hands: ['AJo', 'ATo', 'A5s', 'A4s', 'A3s'] },
      ],
      dead: ['9h', '6c', '2d', 'As'],
      caption: 'ボードにA♠があるので、Aを含む手は1コンボずつ減っている',
    },
    {
      t: 'p',
      text: 'AKとAQだけで24コンボ。BBはその多くをプリフロップで3betしているので、Aのトップペアを多く持つのはBTNです。BBの9xは2番手に下がりました。',
    },
    { t: 'h', text: 'BTNのバレル：何で続けるか' },
    {
      t: 'p',
      text: 'バリューはAx・オーバーペア・セット。ブラフは、ショーダウンでほぼ勝てず、BBの9xや6xを降ろしたい手です。サイズは2/3ポット前後が目安です。',
    },
    {
      t: 'tree',
      root: 'BTNがK♦Q♦でターン A♠（ポット9.1bb）',
      options: [
        {
          label: 'チェック',
          outcomes: [
            { label: 'ショーダウンで勝つ', prob: 0.2, value: 9.1 },
            { label: '負ける・降りる', prob: 0.8, value: 0 },
          ],
          note: 'Kハイで勝てるのはまれ',
        },
        {
          label: '6bbベット（約2/3ポット）',
          outcomes: [
            { label: 'BBがフォールド', prob: 0.5, value: 9.1 },
            { label: 'コールされて勝つ', prob: 0.08, value: 15.1 },
            { label: 'コールされて負ける', prob: 0.42, value: -6 },
          ],
        },
      ],
      caption: '確率は目安。リバーでのやり取りは省いた単純計算',
    },
    {
      t: 'p',
      text: '88や77のように、ショーダウンで勝つことがある手は、打たずにチェックで回す候補です。',
    },
    { t: 'h', text: 'BBの守り方' },
    {
      t: 'odds',
      pot: 9.1,
      bet: 6,
      equity: 35,
      caption: 'BBがQ9sなどの9xで、BTNのベットレンジに対して勝率35%（目安）のとき',
    },
    {
      t: 'p',
      text: '9xをすべて降りると、BTNはどんな2枚でもベットして得をします。9xの多くと、ドローの付いた6xでコールを続けます。',
    },
    {
      t: 'warn',
      title: 'Aの次はKも同じとは限らない',
      text: 'BBはKQoやKJoを3betせずにコールすることが多く、Kのターンはレイザーにそこまで偏りません。そのランクをだれが多く持つかを毎回確かめます。',
    },
    {
      t: 'quiz',
      q: 'このターンがBTNに有利になる主な理由は？',
      board: ['9h', '6c', '2d', 'As'],
      options: ['BTNはAK・AQを多く持ち、BBはそれらを3betしがちだから', 'BBはAxを1コンボも持っていないから', 'Aはストレートを完成させるから', 'BTNはポジションがないから'],
      answer: 0,
      explain: 'BBもAJやA5sなどは持っていますが、AK・AQの多くはプリフロップで3betします。BTNだけが持つ24コンボのAK・AQがBTNのレンジを強くします。',
    },
    {
      t: 'estimate',
      q: 'BTNが9.1bbのポットに6bbのブラフ。利益になるのに必要なフォールド率は？',
      board: ['9h', '6c', '2d', 'As'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 40,
      tolerance: 6,
      explain: 'リスク ÷ (リスク + 取れるポット) = 6 ÷ (6 + 9.1) ≈ 40% です。',
    },
    {
      t: 'quiz',
      q: 'BTNがターンでバレルするブラフとして最もよい手は？',
      board: ['9h', '6c', '2d', 'As'],
      options: ['K♦Q♦', '8♥8♦', '9♣7♣', 'A♦3♦'],
      optionCards: [['Kd', 'Qd'], ['8h', '8d'], ['9c', '7c'], ['Ad', '3d']],
      answer: 0,
      explain: 'KQはショーダウンでほぼ勝てず、BBの9xや6xを降ろす価値があります。88や97はショーダウンで勝てることがあり、A3はAのペアなのでブラフにする理由が薄くなります。',
    },
    {
      t: 'estimate',
      q: 'BBが6bbのベットをコールするのに必要な勝率は？（ポット9.1bb）',
      board: ['9h', '6c', '2d', 'As'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 28,
      tolerance: 5,
      explain: '6 ÷ (9.1 + 6 + 6) ≈ 28% です。40%はBTNのブラフに必要なフォールド率で、別の数字です。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'オーバーカードは、そのランクの強い手をBBが3betで抜いているときにレイザーへ有利に働きます。ブラフは高いカードから選び、BBはMDFを目安に9xを降ろしすぎないようにします。',
    },
  ],
};

export default lesson;
