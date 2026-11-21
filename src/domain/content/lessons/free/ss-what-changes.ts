import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'ss-what-changes',
  blocks: [
    { t: 'h', text: '40bbでプレイしてみる' },
    { t: 'p', text: 'スタックは全員40bb。100bbと同じ感覚で打てるか、まず1ハンド試します。' },
    {
      t: 'play',
      title: '40bb、BTNでA♠J♦',
      hero: 'BTN',
      heroCards: ['As', 'Jd'],
      villain: 'BB',
      villainCards: ['Ts', '9s'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 1.5,
          say: 'CO までフォールド。あなたは BTN で **A♠J♦**、スタック40bb。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'AJo は BTN では十分オープンできる手です。' },
            { label: '2.2bb レイズ', good: true, why: '浅いスタックでは小さめのオープンが基本です。' },
            { label: 'リンプ（1bb コール）', good: false, why: '先にレイズしてブラインドを取りにいきます。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Jh', '8c', '3s'],
          pot: 13.9,
          say: 'BB だけがコール（ポット4.9bb、残り37.8bb）。あなたの 2bb ベットに、BB が 7bb にチェックレイズしました。',
          q: 'トップペア・トップキッカー。どうする？',
          options: [
            { label: 'フォールド', good: false, why: '40bbではトップペア・トップキッカーは降りる手ではありません。' },
            { label: 'オールイン', good: true, why: 'SPRが小さく、ドローにも払わせられます。' },
            { label: 'コール', good: true, why: 'コールも悪くありません（僅差）。ただ残りが少なく、次で結局オールインになります。' },
          ],
        },
        { street: 'ターン', board: ['2d'], pot: 80.5, say: 'オールインに BB がコールしました。ターンは **2♦**。' },
        { street: 'リバー', board: ['5c'], pot: 80.5, say: 'リバーは **5♣**。ショーダウンです。' },
      ],
      outro: 'BB はストレートドローでした。40bbでは、100bbなら慎重になるトップペアでも全部入れる場面が増えます。',
    },
    { t: 'h', text: 'SPRを比べる' },
    {
      t: 'pot',
      steps: [
        { label: '100bb・レイズ→コール', pot: 5.5, stack: 97.5 },
        { label: '40bb・レイズ→コール', pot: 5.5, stack: 37.5 },
        { label: '100bb・3bet→コール', pot: 16.5, stack: 92.5 },
        { label: '40bb・3bet→コール', pot: 16.5, stack: 32.5 },
      ],
      caption: '2.5bbオープン（3betは7.5bb）、ブラインドは降りた場合のフロップ開始時',
    },
    { t: 'p', text: 'スタックが浅いとSPRが小さくなり、**フロップの判断がそのままオールインの判断**になります。' },
    {
      t: 'estimate',
      q: '40bbで3betポット（ポット16.5bb）になった。残り32.5bbのときのSPRは？',
      min: 0,
      max: 20,
      step: 0.5,
      unit: '',
      answer: 2,
      tolerance: 1,
      explain: '32.5 ÷ 16.5 ≈ 2.0 です。フロップで1回ベットとコールが入れば、残りはポット以下になります。',
    },
    { t: 'h', text: '手の価値が変わる' },
    {
      t: 'compare',
      left: {
        title: '100bb',
        points: ['小さいポケットペアでセットを狙える', 'スーテッドコネクターのインプライドオッズが大きい', 'トップペアでも慎重に'],
        verdict: 'neutral',
      },
      right: {
        title: '40bb以下',
        points: ['高いカード（AJ・KQ）の価値が上がる', 'セット狙いのコールは割に合わないことが多い', 'トップペアでオールインしてよい場面が増える'],
        verdict: 'neutral',
      },
      caption: '当たったときに取れる額が減るので、今の強さが大事になる',
    },
    {
      t: 'rapid',
      q: '40bbになると、100bbのときより価値は？',
      choices: ['上がる', '下がる'],
      items: [
        { cards: ['Ah', 'Jc'], answer: 0 },
        { cards: ['4c', '4d'], answer: 1, why: 'セットになっても取れる額が少なくなります。' },
        { cards: ['Kd', 'Qs'], answer: 0 },
        { cards: ['7h', '6h'], answer: 1, why: 'スーテッドコネクターは深いスタックで大きく取る手です。' },
        { cards: ['As', 'Tc'], answer: 0 },
        { cards: ['2s', '2h'], answer: 1, why: '小さいペアはセット狙いが割に合わなくなります。' },
        { cards: ['Kh', 'Jd'], answer: 0 },
        { cards: ['5d', '4d'], answer: 1, why: '当たる確率が低く、当たっても取れる額が少ない手です。' },
      ],
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: '浅いスタックではSPRが小さくなります。高いカードの価値が上がり、セット狙いの価値が下がります。',
    },
  ],
};

export default lesson;
