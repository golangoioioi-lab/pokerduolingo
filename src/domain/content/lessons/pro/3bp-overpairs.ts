import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-overpairs',
  blocks: [
    { t: 'h', text: 'まず直感で' },
    {
      t: 'order',
      q: '9♠6♦2♣ のボード。強い順にタップ',
      board: ['9s', '6d', '2c'],
      hands: [
        { label: 'オーバーペア', cards: ['Th', 'Td'] },
        { label: 'トップペア', cards: ['Ah', '9c'] },
        { label: 'セット', cards: ['9h', '9d'] },
        { label: 'ポケットペア', cards: ['8h', '8c'] },
      ],
      explain: 'セット ＞ TT（オーバーペア） ＞ A9（トップペア） ＞ 88。オーバーペアはボードのどのカードより高いペアです。',
    },
    { t: 'h', text: 'SPRが低いとオーバーペアは強い' },
    {
      t: 'p',
      text: 'SPR約4〜5なら、オーバーペアは基本的に全額を入れてよい手です。相手のレンジには、自分に勝つ手より負ける手（トップペアやドロー）が多く含まれます。',
    },
    {
      t: 'equity',
      players: [
        { label: 'KK', cards: ['Kc', 'Kd'], pct: 86 },
        { label: 'AKo', cards: ['Ah', 'Ks'], pct: 14 },
      ],
      board: ['7s', '5d', '2h'],
      caption: '7♠5♦2♥でKKはAKoに約86%。AKoが追いつくのはAの3枚だけです。',
    },
    {
      t: 'compare',
      left: {
        title: 'QQで7♠5♦2♥',
        cards: ['Qc', 'Qd'],
        board: ['7s', '5d', '2h'],
        points: ['オーバーペア', '全額を入れてよい手'],
        verdict: 'good',
      },
      right: {
        title: 'QQでA♠8♦3♣',
        cards: ['Qc', 'Qd'],
        board: ['As', '8d', '3c'],
        points: ['Aより下のペア', '相手のAxに負けている'],
        verdict: 'bad',
      },
      caption: '同じQQでも、オーバーペアかどうかはボードで決まります。',
    },
    {
      t: 'pot',
      steps: [
        { label: '3betポット（BTN対CO）', pot: 17.5, stack: 92 },
        { label: 'フロップ 5.8bet・コール', pot: 29.1, stack: 86.2 },
        { label: 'ターン 14.5bet・コール', pot: 58.1, stack: 71.7 },
        { label: 'リバー 36bet・コール', pot: 130.1, stack: 35.7 },
      ],
      caption: '33%→50%→約60%で、3回ともバリューを取る形です。',
    },
    {
      t: 'estimate',
      q: 'KKに対してAKoが追いつくカード（A）は何枚残っていますか？',
      min: 0,
      max: 12,
      step: 1,
      answer: 3,
      tolerance: 1,
      hand: ['Ah', 'Ks'],
      board: ['7s', '5d', '2h'],
      explain: 'Aは4枚で、1枚はAKoが持っています。残りは3枚です。',
    },
    { t: 'h', text: '1ハンドで体験' },
    {
      t: 'play',
      title: 'KKで3回バリュー',
      hero: 'BTN',
      heroCards: ['Kc', 'Kd'],
      villain: 'CO',
      villainCards: ['8s', '8h'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'COが2.5bbでオープン。あなたはBTNで **K♣K♦**。',
          q: 'どうする？',
          options: [
            { label: '8bbに3bet', good: true, why: 'KKはポットを大きくしたい手です。' },
            { label: 'コール', good: false, why: 'コールではポットが小さいままです。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['7s', '5d', '2h'],
          pot: 17.5,
          say: 'COがコールしてチェック。',
          q: 'オーバーペア。どうする？',
          options: [
            { label: '5.8bb（約33%）をベット', good: true, why: 'ペアやドローから払ってもらいます。' },
            { label: 'チェック', good: false, why: 'チェックも混ぜますが、ドローに無料でカードを見せます。' },
          ],
        },
        {
          street: 'ターン',
          board: ['9c'],
          pot: 29.1,
          say: 'COがコール。COはまたチェック。',
          q: 'どうする？',
          options: [
            { label: '14.5bb（半ポット）をベット', good: true, why: 'まだ多くの手に勝っています。リバーで全額を入れる準備です。' },
            { label: 'チェック', good: false, why: '1ストリート分のバリューを逃し、ドローにも安く見せます。' },
          ],
        },
        {
          street: 'リバー',
          board: ['Qd'],
          pot: 58.1,
          say: 'COがコール。残り71.7bb。COはチェック。',
          q: 'どうする？',
          options: [
            { label: '約36bbをベット', good: true, why: '88やA9のようなワンペアから払ってもらえるサイズです。' },
            { label: '71.7bbオールイン', good: false, why: '悪くありませんが、ワンペアの相手が払いにくくなります（僅差）。' },
            { label: 'チェック', good: false, why: 'ワンペアから取れるバリューを逃します。' },
          ],
        },
      ],
      outro: 'COは88で最後まで払いました。オーバーペアはSPRが低いポットで、3回バリューを取る手です。',
    },
  ],
};

export default lesson;
