import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-draws',
  blocks: [
    { t: 'h', text: 'まず数えてみる' },
    {
      t: 'outs',
      q: 'A♠5♠。次の1枚でフラッシュになるカードを全部タップ',
      hand: ['As', '5s'],
      board: ['Ks', '9s', '4d'],
      target: 'フラッシュ',
      explain: 'スペードは13枚。手札2枚とボード2枚が見えているので、残り9枚です。',
    },
    { t: 'h', text: 'SPRが低いとドローは攻める手' },
    {
      t: 'compare',
      left: {
        title: 'SRP（SPR 約18）',
        points: ['完成したときに大きく勝てる', 'コールで追いかけやすい'],
        verdict: 'good',
      },
      right: {
        title: '3betポット（SPR 約3〜5）',
        points: ['完成しても追加で勝てる額は小さい', 'コールよりセミブラフが主役'],
        verdict: 'neutral',
      },
    },
    {
      t: 'equity',
      players: [
        { label: 'A♠5♠', cards: ['As', '5s'], pct: 46 },
        { label: 'KQo', cards: ['Kh', 'Qd'], pct: 54 },
      ],
      board: ['Ks', '9s', '4d'],
      caption: 'スペード9枚とAの3枚で約12アウト。トップペアに対してほぼ互角です。',
    },
    {
      t: 'p',
      text: 'これだけエクイティがあれば、全額を入れても大きく損をしません。こちらから入れれば、相手が降りる分も上乗せされます。',
    },
    {
      t: 'tree',
      root: 'K♠9♠4♦、ポット17.5bb、残り92bb。A♠5♠でオールインすると',
      options: [
        {
          label: 'オールイン（92bb）',
          outcomes: [
            { label: '相手がフォールド（約40%）', prob: 0.4, value: 17.5 },
            { label: 'コールされ、勝つ', prob: 0.28, value: 109.5 },
            { label: 'コールされ、負ける', prob: 0.32, value: -92 },
          ],
        },
        { label: 'チェック', ev: 4, note: '例：エクイティを実現しきれない分を割り引いた目安' },
      ],
      caption: '例示用の単純化です。コールされる60%のうち46%で勝つ計算（約28%）。',
    },
    {
      t: 'outs',
      q: '9♣6♣。次の1枚でストレートになるカードを全部タップ',
      hand: ['9c', '6c'],
      board: ['8h', '7s', '2c'],
      target: 'ストレート',
      explain: '5か10で完成するオープンエンダー。4枚ずつで8アウトです。',
    },
    {
      t: 'table',
      head: ['ドロー', 'アウト', '1枚で完成（目安）'],
      rows: [
        ['フラッシュドロー', '9枚', '約19%'],
        ['オープンエンダー', '8枚', '約17%'],
        ['ガットショット', '4枚', '約9%'],
        ['フラッシュドロー＋オーバーカード', '12枚前後', '約26%'],
      ],
    },
    { t: 'h', text: '1ハンドで体験' },
    {
      t: 'play',
      title: 'ナッツフラッシュドローでセミブラフ',
      hero: 'BTN',
      heroCards: ['As', '5s'],
      villain: 'CO',
      villainCards: ['Kh', 'Qd'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'COが2.5bbでオープン。あなたはBTNで **A♠5♠**。',
          q: 'どうする？',
          options: [
            { label: '8bbに3bet', good: true, why: 'Aのブロッカーとプレイしやすさで、3betの定番です。' },
            { label: 'コール', good: false, why: 'コールも可能ですが（僅差）、3betのほうが主導権を取れます。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Ks', '9s', '4d'],
          pot: 17.5,
          say: 'COがコールしてチェック。ナッツフラッシュドローです。',
          q: 'どうする？',
          options: [
            { label: '5.8bbをc-bet', good: true, why: 'Kハイは3bettorに有利。ドローもあるので打ちます。' },
            { label: 'チェック', good: false, why: '降ろせる分を手放します。' },
          ],
        },
        {
          street: 'フロップ',
          pot: 41.3,
          say: 'COが18bbにチェックレイズ。残りは74bbです。',
          q: 'どうする？',
          options: [
            { label: 'オールイン', good: true, why: '約12アウトのドロー。降ろす分とエクイティの両方で得をします。' },
            { label: 'コール', good: false, why: '悪くありませんが（僅差）、ターンで外れると判断が難しくなります。' },
            { label: 'フォールド', good: false, why: 'トップペア相手でも約46%あります。降りすぎです。' },
          ],
        },
        { street: 'ターン', board: ['7s'], pot: 201.5, say: 'COがコール。ターンは **7♠**。' },
        { street: 'リバー', board: ['2c'], pot: 201.5, say: 'リバーは2。ショーダウンです。' },
      ],
      outro: 'ナッツフラッシュが完成しました。SPRが低いポットでは、強いドローは全額まで攻める手です。',
    },
  ],
};

export default lesson;
