import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pf-position',
  blocks: [
    { t: 'h', text: '後から決められる' },
    { t: 'p', text: 'フロップからは、BTN に近い席ほど後に話します。BTN は相手の動きを見てから決められます。' },
    {
      t: 'play',
      title: 'BTN で相手を見てから決める',
      hero: 'BTN',
      heroCards: ['Kd', 'Qd'],
      villain: 'BB',
      villainCards: ['Jh', '9h'],
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'あなたは BTN で **K♦Q♦**。2.5bb にレイズし、BB がコール。' },
        { street: 'フロップ', board: ['Jd', '7c', '3s'], pot: 5.5, say: 'BB が先にチェック。あなたは、それを見てから決められます。', q: 'どうする？', options: [
          { label: 'フォールド', good: false, why: 'チェックされたので、無料で次に進めます。' },
          { label: 'チェック', good: true, why: '無料で次のカードを見られます。' },
          { label: '2bb ベット', good: true, why: '小さいベットで、弱い手を降ろせることがあります。' },
        ] },
        { street: 'ターン', board: ['Th'], pot: 5.5, say: '2人ともチェックしてターンへ。T が来て、あと1枚でストレートです。BB はまたチェック。', q: 'どうする？', options: [
          { label: 'チェック', good: true, why: '後ろの席なので、もう一度無料でリバーを見て、ストレートを狙えます。' },
          { label: 'オールイン', good: false, why: '役がない手で大きく賭ける場面ではありません。' },
        ] },
        { street: 'リバー', board: ['Ac'], pot: 5.5, say: 'A が来て A-K-Q-J-T の**ストレート**。BB は 4bb ベット。', q: 'どうする？', options: [
          { label: 'レイズ 14bb', good: true, why: 'とても強い手なので、さらに大きくして取りにいきます。' },
          { label: 'コール', good: true, why: '勝てる手なので、コールでも損はしません。' },
          { label: 'フォールド', good: false, why: 'ストレートを降りる理由はありません。' },
        ] },
      ],
      outro: '先に話す BB は、何も分からないまま決めなければなりません。後から決められる BTN は、無料でカードを見るか、ベットするかを選べます。',
    },
    {
      t: 'rapid',
      q: 'フロップから後に話せるのは？',
      choices: ['左の席', '右の席'],
      items: [
        { text: 'BTN ／ BB', answer: 0 },
        { text: 'SB ／ BTN', answer: 1 },
        { text: 'CO ／ HJ', answer: 0 },
        { text: 'BB ／ CO', answer: 1 },
        { text: 'UTG ／ SB', answer: 0, why: 'フロップからは SB が最初に話します。' },
        { text: 'BTN ／ CO', answer: 0 },
        { text: 'HJ ／ BB', answer: 0, why: 'BB はフロップから2番目に話す席です。' },
        { text: 'SB ／ BB', answer: 1 },
      ],
    },
    { t: 'h', text: 'BTN からの参加' },
    {
      t: 'play',
      title: 'ブラインドを取りにいく',
      hero: 'BTN',
      heroCards: ['Kc', '9s'],
      villain: 'BB',
      steps: [
        { street: 'プリフロップ', pot: 1.5, say: 'UTG・HJ・CO がフォールド。あなたは BTN で **K♣9♠**。', q: 'どうする？', options: [
          { label: 'フォールド', good: false, why: '後ろは2人だけ。BTN なら K9 で参加できます。' },
          { label: '2.5bb レイズ', good: true, why: '後ろの席の有利があり、ブラインドだけで降りることもあります。' },
        ] },
        { street: 'プリフロップ', pot: 4, say: 'SB も BB もフォールド。ブラインドの 1.5bb を獲得しました。' },
      ],
      outro: 'BTN は後から話せるので、少し弱い手でも参加できます。',
    },
    { t: 'tip', title: '席の有利', text: 'フロップ以降は SB → BB → UTG → HJ → CO → BTN の順に話します。後に話す席ほど情報が多く、BTN が一番有利です。' },
  ],
};

export default lesson;
