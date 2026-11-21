import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-spr-basics',
  blocks: [
    { t: 'h', text: 'まず直感で' },
    {
      t: 'quiz',
      q: '3betポットのフロップ。残りスタックはポットの約3倍です。全額を入れやすいのはどちら？',
      options: ['A♥K♦（トップペア・強いキッカー）', '9♣8♣（ペアなし）'],
      optionCards: [['Ah', 'Kd'], ['9c', '8c']],
      board: ['Ks', '7d', '2c'],
      answer: 0,
      explain: 'ポットに対して残りが少ないと、トップペアでも全額まで行く手になります。ペアのない手に全額を入れる理由はありません。',
    },
    { t: 'h', text: 'SPRとは' },
    {
      t: 'formula',
      text: 'SPR = 有効スタック ÷ フロップ開始時のポット',
      note: '有効スタックは、自分と相手の残りのうち小さいほうです。',
    },
    { t: 'p', text: 'SPRが小さいほど、少ないベットで全額が入ります。3betポットはポットが大きく、SPRが小さくなります。' },
    {
      t: 'pot',
      steps: [
        { label: 'SRP（BTN対BB）', pot: 5.5, stack: 97.5 },
        { label: '3betポット（CO対BTN）', pot: 17.5, stack: 92 },
        { label: '4betポット（CO対BTN）', pot: 41.5, stack: 80 },
      ],
      caption: 'SPRはSRPで約18、3betポットで約5、4betポットで約2です。',
    },
    {
      t: 'compare',
      left: {
        title: 'SRP（SPR 約18）',
        points: ['全額まで3回の大きなベットが必要', 'トップペアでは全額を入れにくい', 'ドローの後の儲けが大きい'],
        verdict: 'neutral',
      },
      right: {
        title: '3betポット（SPR 約5）',
        points: ['フロップとターンで全額に近づく', 'トップペアやオーバーペアで全額を入れやすい', 'ドローの後の儲けは小さい'],
        verdict: 'good',
      },
    },
    {
      t: 'estimate',
      q: 'フロップ開始時のポットは17.5bb、有効スタックは92bbです。SPRはいくつ？',
      min: 0,
      max: 20,
      step: 0.5,
      answer: 5.3,
      tolerance: 1,
      explain: '92 ÷ 17.5 ≈ 5.3 です。',
    },
    { t: 'h', text: '1ハンドで体験' },
    {
      t: 'play',
      title: 'BTNで3bet、SPRが下がっていく',
      hero: 'BTN',
      heroCards: ['Ah', 'Kc'],
      villain: 'CO',
      villainCards: ['Kd', 'Qd'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'COが2.5bbでオープン。あなたはBTNで **A♥K♣**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'AKは最上位クラスの手です。' },
            { label: 'コール', good: false, why: 'コールも可能ですが、3betでポットを大きくするのが基本です。' },
            { label: '8bbに3bet', good: true, why: '強い手でポットを大きくし、主導権を取ります。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Ks', '7d', '2c'],
          pot: 17.5,
          say: 'COがコール。ポット17.5bb、残り92bb（SPR 約5.3）。COはチェック。',
          q: 'トップペア・トップキッカー。どうする？',
          options: [
            { label: '5.8bb（約33%）をベット', good: true, why: '小さく打てば、Kxや下のペアから払ってもらえます。' },
            { label: '92bbオールイン', good: false, why: '負けている手はほとんどコールしません。' },
            { label: 'チェック', good: false, why: 'チェックも混ぜますが、基本はベットでバリューを取ります。' },
          ],
        },
        {
          street: 'ターン',
          board: ['4h'],
          pot: 29.1,
          say: 'COがコール。残り86.2bbで、SPRは約3まで下がりました。COはチェック。',
          q: 'どうする？',
          options: [
            { label: '14.5bb（半ポット）をベット', good: true, why: 'リバーで全額を入れられる形を作ります。' },
            { label: 'チェック', good: false, why: '強い手で1ストリート分のバリューを逃します。' },
          ],
        },
        {
          street: 'リバー',
          board: ['2d'],
          pot: 58.1,
          say: 'COがコール。残り71.7bb（SPR 約1.2）。COはチェック。',
          q: 'どうする？',
          options: [
            { label: '約36bbをベット', good: true, why: 'Kxから払ってもらえるサイズです。' },
            { label: '71.7bbオールイン', good: true, why: 'SPRが低いので、全額でもKxは払いやすい場面です。' },
            { label: 'チェック', good: false, why: 'ここまで来たら、トップペア・トップキッカーは打ちます。' },
          ],
        },
      ],
      outro: 'SPR約5から、33%→50%→残り全部と打つだけで、自然に全額が入ります。',
    },
    {
      t: 'rapid',
      q: 'SPR 約3のポット。この手で全額まで行く？',
      choices: ['行く', '降りる'],
      items: [
        { cards: ['Ah', 'Kd'], board: ['Ks', '7d', '2c'], answer: 0 },
        { cards: ['9c', '8c'], board: ['Ks', '7d', '2c'], answer: 1, why: 'ペアもドローもありません。' },
        { cards: ['As', 'Ah'], board: ['Kc', '7d', '2s'], answer: 0 },
        { cards: ['7s', '7h'], board: ['Kc', '7d', '2s'], answer: 0 },
        { cards: ['Qh', 'Jh'], board: ['Ks', '7d', '2c'], answer: 1, why: 'ペアなし、ドローもバックドア程度です。' },
        { cards: ['Jd', 'Jc'], board: ['9s', '6d', '2c'], answer: 0 },
        { cards: ['3c', '3d'], board: ['As', 'Kd', '8h'], answer: 1, why: 'ボードの下のペアは、ほとんどの手に負けています。' },
        { cards: ['Kd', 'Qc'], board: ['Kh', '8d', '3c'], answer: 0 },
      ],
    },
  ],
};

export default lesson;
