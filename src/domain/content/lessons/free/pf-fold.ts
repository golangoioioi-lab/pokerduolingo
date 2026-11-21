import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pf-fold',
  blocks: [
    { t: 'h', text: '弱い手は降りる' },
    {
      t: 'play',
      title: 'UTG で弱い手',
      hero: 'UTG',
      heroCards: ['7d', '2c'],
      villain: 'HJ',
      steps: [
        { street: 'プリフロップ', pot: 1.5, say: 'あなたは **UTG**。一番最初に決める席です。手札は **7♦2♣**。', q: 'どうする？', options: [
          { label: 'フォールド', good: true, why: '72 は一番弱いクラスの手です。払う前に降ります。' },
          { label: 'コール', good: false, why: 'あとの5人が残っていて、強い手にぶつかりやすい席です。' },
          { label: '2.5bb レイズ', good: false, why: '強い手を持っているときだけレイズします。' },
        ] },
        { street: 'フロップ', board: ['Ks', 'Kh', '9d'], pot: 5.5, say: 'HJ がレイズして BB がコール。2人でフロップに進みました。あなたは1枚もチップを払っていません。' },
      ],
      outro: 'フォールドすればチップは減りません。弱い手で払わないことが、チップを守る一番の方法です。',
    },
    { t: 'p', text: '役ができなかったときも同じです。相手が大きくベットしてきたら、降りて次のハンドを待ちます。' },
    {
      t: 'play',
      title: 'リバーで外れた',
      hero: 'BB',
      heroCards: ['8h', '7h'],
      villain: 'BTN',
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'BTN が 2.5bb レイズ、SB はフォールド。あなたは BB で **8♥7♥**。コールしてフロップへ。' },
        { street: 'フロップ', board: ['Ah', 'Kh', '2c'], pot: 5.5, say: 'ハートが4枚。あと1枚でフラッシュです。あなたはチェック、BTN は 2bb ベット。', q: 'どうする？', options: [
          { label: 'コール', good: true, why: '2bb なら安いので、フラッシュを狙ってついていけます。' },
          { label: 'フォールド', good: false, why: 'まだ完成の見込みがあり、払う額も小さい場面です。' },
        ] },
        { street: 'ターン', board: ['5d'], pot: 9.5, say: 'ターンは 5。2人ともチェック。' },
        { street: 'リバー', board: ['Js'], pot: 9.5, say: 'リバーは J。ハートは来ず、あなたは **8 ハイ**（役なし）。チェックすると BTN が 7bb ベット。', q: 'どうする？', options: [
          { label: 'フォールド', good: true, why: '役なしでは、見せ合ってもほとんど勝てません。' },
          { label: 'コール', good: false, why: '8 ハイが勝てるのは、相手が完全なブラフのときだけです。' },
        ] },
      ],
      outro: '外れたら降ります。失ったのは 2bb のコール分だけで済みました。',
    },
    {
      t: 'rapid',
      q: 'リバーまで来ました。あなたの役は？',
      choices: ['ペア以上', '役なし'],
      items: [
        { cards: ['Ah', 'Qd'], board: ['Qs', '9c', '5h', '3d', '2s'], answer: 0 },
        { cards: ['Jc', 'Th'], board: ['As', '8d', '4c', '3h', '2d'], answer: 1, why: 'どのカードもそろっていません。' },
        { cards: ['6s', '6d'], board: ['Kc', 'Jh', '9s', '4d', '2c'], answer: 0, why: '手札の 66 がペアです。' },
        { cards: ['Kd', '7s'], board: ['Qh', 'Jc', '8s', '4h', '2d'], answer: 1 },
        { cards: ['9h', '4s'], board: ['Ac', 'Kd', '9c', '6h', '3s'], answer: 0 },
        { cards: ['Qc', 'Jd'], board: ['Ad', 'Th', '7s', '5c', '2h'], answer: 1, why: 'Q-J-T だけではストレートになりません。' },
        { cards: ['5h', '4h'], board: ['Ks', 'Kd', '9c', '8h', '2s'], answer: 0, why: '場の KK もペアです。ただし全員が使えるので、強くはありません。' },
        { cards: ['Ts', '8c'], board: ['Ah', 'Kh', 'Qc', '5d', '3s'], answer: 1 },
      ],
    },
    { t: 'tip', title: '降りるのも勝ち方', text: 'フォールドしたあとはチップを失いません。弱い手や外れた手で払わないことは、強い手で勝つのと同じくらい大切です。' },
  ],
};

export default lesson;
