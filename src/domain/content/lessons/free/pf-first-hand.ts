import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pf-first-hand',
  blocks: [
    { t: 'h', text: '1ハンド遊んでみる' },
    { t: 'p', text: '6人のテーブルで、あなたは **BTN**（ボタン）の席です。進めながら、流れを覚えていきます。' },
    {
      t: 'play',
      title: 'はじめての1ハンド',
      hero: 'BTN',
      heroCards: ['Qs', 'Qh'],
      villain: 'BB',
      villainCards: ['Kc', 'Qc'],
      steps: [
        { street: 'プリフロップ', pot: 1.5, say: 'まず SB が 0.5bb、BB が 1bb を出します（**ブラインド**）。全員に2枚ずつ配られ、あなたは **Q♠Q♥**。前の3人はフォールドしました。', q: 'どうする？', options: [
          { label: 'フォールド', good: false, why: 'QQ はとても強いペアです。降りる理由はありません。' },
          { label: '2.5bb レイズ', good: true, why: '強い手はレイズして参加します。' },
        ] },
        { street: 'フロップ', board: ['Qd', '8c', '3h'], pot: 5.5, say: 'SB はフォールド、BB はコール。場に3枚が開きます（**フロップ**）。BB はチェック。', q: 'Q が3枚そろいました。どうする？', options: [
          { label: 'フォールド', good: false, why: 'スリーカードは強い役です。' },
          { label: '2bb ベット', good: true, why: '弱い手からもチップを払ってもらえます。' },
        ] },
        { street: 'ターン', board: ['5s'], pot: 9.5, say: 'BB はコール。4枚目が開きます（**ターン**）。BB はチェックし、あなたは 6bb ベット、BB はコールしました。' },
        { street: 'リバー', board: ['Ts'], pot: 21.5, say: '5枚目が開きます（**リバー**）。最後のラウンドです。BB はチェック。', q: 'どうする？', options: [
          { label: 'チェック', good: false, why: 'ほぼ負けない手です。ベットすればもっとチップを取れます。' },
          { label: '14bb ベット', good: true, why: '強い手は最後までベットして取りにいきます。' },
        ] },
      ],
      outro: 'BB がコールして手札を見せ合います（**ショーダウン**）。ブラインド → フロップ → ターン → リバー → ショーダウン。これが1ハンドの流れです。',
    },
    { t: 'h', text: '今どのラウンド？' },
    {
      t: 'rapid',
      q: '場のカードを見て、今のラウンドは？',
      choices: ['フロップ', 'ターン'],
      items: [
        { cards: ['Ah', 'Kd'], board: ['9c', '7s', '2d'], answer: 0 },
        { cards: ['Jh', 'Jc'], board: ['Qs', '5d', '4c', '8h'], answer: 1, why: '場が4枚ならターンです。' },
        { cards: ['Ts', '9s'], board: ['As', '6d', '3h', 'Kc'], answer: 1 },
        { cards: ['7d', '7c'], board: ['Kh', 'Td', '2s'], answer: 0, why: '場が3枚ならフロップです。' },
        { cards: ['Ac', 'Qc'], board: ['Jd', '8s', '4h'], answer: 0 },
        { cards: ['6h', '5h'], board: ['4h', '3c', 'Kd', '9s'], answer: 1 },
      ],
    },
    {
      t: 'pick5',
      q: 'リバーまで開きました。一番強い5枚をタップ。',
      hand: ['Jh', 'Tc'],
      board: ['9s', '8d', '2c', 'Qh', '3s'],
      explain: 'Q-J-T-9-8 と数字が5つ続く**ストレート**です。',
    },
    { t: 'tip', title: '1ハンドの流れ', text: 'ブラインド → プリフロップ → フロップ（3枚）→ ターン（1枚）→ リバー（1枚）→ ショーダウン。途中で全員が降りれば、そこでハンドは終わります。' },
  ],
};

export default lesson;
