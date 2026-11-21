import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pf-bluff',
  blocks: [
    { t: 'h', text: '役がなくても勝てる' },
    { t: 'p', text: 'ポットは、相手を全員フォールドさせても取れます。役がないのにベットして降ろすことを**ブラフ**と呼びます。' },
    {
      t: 'play',
      title: '例：フロップの小さなベット',
      hero: 'BTN',
      heroCards: ['8c', '7c'],
      villain: 'BB',
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'あなたは BTN で **8♣7♣**。2.5bb にレイズし、BB がコール。' },
        { street: 'フロップ', board: ['Ks', 'Qd', '4h'], pot: 5.5, say: '外れました。BB はチェック。', q: 'どうする？', options: [
          { label: '2bb ベット', good: true, why: 'K や Q はレイズした BTN が持っていそうなカード。小さいベットでも BB はよく降ります。' },
          { label: 'フォールド', good: false, why: 'チェックされたので、無料で次に進めます。' },
        ] },
        { street: 'フロップ', pot: 7.5, say: 'BB はフォールド。役なしのまま、ポットを獲得しました。' },
      ],
      outro: 'これは一例です。いつも成功するわけではありませんが、小さいベットなら失敗しても損は小さく済みます。',
    },
    {
      t: 'play',
      title: '例：リバーのブラフ',
      hero: 'BTN',
      heroCards: ['Jh', 'Th'],
      villain: 'BB',
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'あなたは BTN で **J♥T♥**。2.5bb にレイズし、BB がコール。' },
        { street: 'フロップ', board: ['9h', '4h', '2c'], pot: 9.5, say: 'BB はチェック。あなたは 2bb ベットし、BB はコール。' },
        { street: 'ターン', board: ['Kd'], pot: 9.5, say: 'ターンは K。2人ともチェック。' },
        { street: 'リバー', board: ['3s'], pot: 9.5, say: 'ハートは来ず、あなたは **J ハイ**。BB はまたチェック。', q: 'どうする？', options: [
          { label: '6bb ベット', good: true, why: 'チェックでは勝てません。BB はチェックを続けていて、強い手は少なそうです。' },
          { label: 'チェック', good: false, why: '見せ合いになると、J ハイではほとんど勝てません。' },
        ] },
      ],
      outro: '今回は BB がフォールドしました（一例です）。6bb で 9.5bb を取りにいくので、5回に2回ほど降りてくれれば元が取れます。',
    },
    {
      t: 'showdown',
      q: 'もしリバーでチェックして、BB が 88 を持っていたら？',
      board: ['9h', '4h', '2c', 'Kd', '3s'],
      players: [{ label: 'あなた', cards: ['Jh', 'Th'] }, { label: '相手', cards: ['8s', '8d'] }],
      explain: 'J ハイ（役なし）は 8 のペアに負けます。見せ合っても勝てない手は、ベットで降ろすしか勝つ方法がありません。',
    },
    {
      t: 'rapid',
      q: 'ブラフが通りやすいのはどっち？',
      choices: ['通りやすい', '通りにくい'],
      items: [
        { text: '相手が1人', answer: 0 },
        { text: '相手が4人', answer: 1, why: '人数が多いほど、誰かが強い手を持っています。' },
        { text: '相手がチェックを続けている', answer: 0 },
        { text: '相手が自分からベットやレイズをしてきた', answer: 1 },
        { text: '何でもコールする相手', answer: 1, why: '降りない相手にブラフは効きません。' },
        { text: 'よくフォールドする相手', answer: 0 },
        { text: '小さいベットで済む場面', answer: 0 },
      ],
    },
    { t: 'tip', title: 'ブラフはときどき', text: 'ブラフは、相手が弱そうなときに小さく使う道具です。何度も続けると読まれます。基本は強い手でベットし、ブラフはたまに混ぜる程度にします。' },
  ],
};

export default lesson;
