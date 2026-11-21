import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'playing-in-position',
  blocks: [
    { t: 'h', text: '後から動けるとどう違う？' },
    {
      t: 'play',
      title: 'BTN で 9♥8♥',
      hero: 'BTN',
      heroCards: ['9h', '8h'],
      villain: 'BB',
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'あなたは BTN で 2.5bb オープン。SB はフォールド、BB がコール。フロップからは BB が先に動きます。' },
        {
          street: 'フロップ',
          board: ['Kh', '7h', '2c'],
          pot: 5.5,
          say: 'フラッシュドロー。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: '追加のチップを払わずにターンを見られます（フリーカード）。' },
            { label: '小さくベット', good: true, why: 'これも有力。降ろして勝つ道があるセミブラフです。' },
          ],
        },
        { street: 'ターン', board: ['3s'], pot: 5.5, say: 'ここではチェックで進んだとします。ターンは **3♠**。BB はまたチェック、あなたもチェック。' },
        {
          street: 'リバー',
          board: ['Js'],
          pot: 5.5,
          say: 'リバーは **J♠**。ドローは外れ、9 ハイ。BB は3回続けてチェック。',
          q: 'どうする？',
          options: [
            { label: '3bb ベット（ブラフ）', good: true, why: 'BB の強い手の割合は下がっています。約35%降りれば利益です。' },
            { label: 'チェック', good: false, why: '9 ハイではショーダウンでほぼ勝てません。チェックが続いた相手から取る機会を逃します。' },
          ],
        },
      ],
      outro: 'インポジションでは、無料でカードを見て、相手のチェックを見てからブラフも選べます。',
    },
    { t: 'h', text: 'インポジション（IP）とは' },
    {
      t: 'seats',
      seats: [
        { pos: 'BTN', hero: true, bet: 2.5, action: 'オープン' },
        { pos: 'SB', folded: true, action: 'フォールド' },
        { pos: 'BB', bet: 2.5, action: 'コール' },
      ],
      pot: 5.5,
      caption: 'フロップからは BB が先、あなた（BTN）が後。相手を見てから決められるのが IP です。',
    },
    {
      t: 'compare',
      left: {
        title: 'インポジション',
        cards: ['9h', '8h'],
        board: ['Kh', '7h', '2c'],
        points: ['チェックされたら無料でターンを見られる', 'ベットして降ろす選択もできる'],
        verdict: 'good',
      },
      right: {
        title: 'アウトオブポジション',
        cards: ['9h', '8h'],
        board: ['Kh', '7h', '2c'],
        points: ['先にチェックすると相手にベットされる', 'ドローのまま支払うかを迫られる'],
        verdict: 'bad',
      },
      caption: '同じハンドでも、ポジションで選べることが変わります。',
    },
    { t: 'h', text: 'ポットコントロール' },
    {
      t: 'quiz',
      q: 'あなたは BTN でセカンドペア。BB がチェック。考え方に合う選択は？',
      hand: ['Ts', '9s'],
      board: ['Kd', 'Tc', '4h'],
      options: ['大きくベットしてポットを膨らませる', 'チェックして小さいポットでショーダウンを目指す', '必ずオールイン'],
      answer: 1,
      explain: 'セカンドペアは K には負け、弱い手には勝つ中くらいの手。レイズされると困るので、IP ならチェックでポットを小さく保てます。',
    },
    { t: 'h', text: 'ブラフの損益分岐' },
    { t: 'formula', text: 'ブラフが成功すべき割合 = ベット額 ÷ (ベット額 + ポット)', note: 'これより多く相手が降りれば、ブラフは利益' },
    {
      t: 'tree',
      root: 'リバー ポット12bb でブラフ 6bb',
      options: [
        { label: 'チェック', ev: 0 },
        {
          label: '6bb ブラフ（相手が1/3降りる）',
          outcomes: [{ label: 'フォールド（33%）', prob: 0.333, value: 12 }, { label: 'コール（67%）', prob: 0.667, value: -6 }],
          note: '収支はほぼゼロ',
        },
      ],
      caption: '6 ÷ (6 + 12) = 33%。それより多く降りれば利益です。',
    },
    {
      t: 'estimate',
      q: 'ポット8bb で 4bb のブラフ。収支ゼロには相手が何%降りる必要がある？',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 33,
      tolerance: 5,
      explain: '4 ÷ (4 + 8) ≈ 33%。ハーフポットのブラフは3回に1回降りれば元が取れます。',
    },
    { t: 'h', text: 'スピード判定' },
    {
      t: 'rapid',
      q: 'あなたは BTN。BB がチェックした。どうする？',
      choices: ['ベット', 'チェック'],
      pass: 70,
      items: [
        { cards: ['Ad', 'Kc'], board: ['Kh', '7d', '2c'], answer: 0, why: 'トップペア・トップキッカー。弱い K や 7 から取れます。' },
        { cards: ['Ts', '9s'], board: ['Kd', 'Tc', '4h'], answer: 1, why: 'セカンドペアはポットコントロール。' },
        { cards: ['3c', '3d'], board: ['Kh', '3s', '9d'], answer: 0, why: 'セット。価値を取りに行きます。' },
        { cards: ['8s', '7s'], board: ['Kd', '8c', '3h', '5d', '2s'], answer: 1, why: 'リバーのミドルペア。ショーダウンで勝てることがあるのでチェック。' },
        { cards: ['6h', '5h'], board: ['Kh', '9h', '2c', 'Jd', '3s'], answer: 0, why: 'ドローが外れ、チェックでは勝てません。ブラフの候補です。' },
        { cards: ['Qc', 'Jc'], board: ['Qh', '8d', '4s', '2c', '7h'], answer: 0, why: 'リバーのトップペア。チェックが続いた相手から小さく取れます。' },
      ],
    },
    { t: 'try', text: 'BB 対 BTN のレンジを見て、ポジションの差を確かめる', tab: 'ranges' },
  ],
};

export default lesson;
