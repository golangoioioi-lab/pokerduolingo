import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'variance',
  blocks: [
    { t: 'h', text: '正しくても負ける' },
    {
      t: 'showdown',
      q: 'AA と KK が 100bb オールイン。勝ったのは？',
      board: ['Kh', '7c', '2s', '9d', '4h'],
      players: [{ label: 'あなた', cards: ['As', 'Ah'] }, { label: '相手', cards: ['Kd', 'Kc'] }],
      explain: 'K が落ちて KK の勝ち。AA の勝率は約81%でも、5〜6回に1回はこうなります。',
    },
    {
      t: 'tree',
      root: 'AA で 100bb オールイン（相手は KK）',
      options: [
        { label: 'フォールド', ev: 0 },
        {
          label: 'オールイン',
          outcomes: [{ label: '勝つ（約81%）', prob: 0.81, value: 100 }, { label: '負ける（約19%）', prob: 0.19, value: -100 }],
          note: '+62bb',
        },
      ],
      caption: 'EV がプラスでも、約19%は 100bb を失います。',
    },
    { t: 'p', text: '結果が期待値の周りでばらつくことを**分散**と呼びます。こうした場面が積み重なるので、短期の収支は運に左右されます。' },
    { t: 'h', text: '標準偏差（σ）とハンド数' },
    { t: 'p', text: 'σ は結果のばらつきの大きさです。約68%が平均 ± 1σ、約95%が ± 2σ に収まります。6人卓キャッシュの σ は目安で 80〜120bb/100。ここでは 100bb/100 を使います。' },
    { t: 'formula', text: 'n ハンド後の σ = 100ハンドあたりの σ × √(n ÷ 100)', note: '期待値はハンド数に比例、σ は平方根でしか増えない' },
    {
      t: 'compare',
      left: { title: '1万ハンド', points: ['期待される収支 +500bb', '1σ は 1000bb', 'マイナスになる確率は約31%'], verdict: 'neutral' },
      right: { title: '10万ハンド', points: ['期待される収支 +5000bb', '1σ は約3160bb', 'マイナスになる確率は約6%'], verdict: 'good' },
      caption: '勝率 5bb/100、σ = 100bb/100 のプレイヤー。ハンド数が増えるほど実力が見えます。',
    },
    {
      t: 'estimate',
      q: 'σ = 100bb/100 のプレイヤーが4万ハンドをプレイ。収支の1σは？',
      min: 0, max: 5000, step: 50, unit: 'bb', answer: 2000, tolerance: 400,
      explain: '√(40000 ÷ 100) = 20。100 × 20 = 2000bb。',
    },
    {
      t: 'estimate',
      q: '勝率5bb/100、σ = 100bb/100。1万ハンド後、収支が約68%の確率で収まる範囲の下限は？',
      min: -2000, max: 1000, step: 50, unit: 'bb', answer: -500, tolerance: 300,
      explain: '期待値 +500bb、1σ = 1000bb。500 ± 1000 で −500〜+1500bb です。',
    },
    { t: 'h', text: 'もう一度：よくあること？' },
    {
      t: 'rapid',
      q: '勝率 5bb/100・σ 100bb/100 の勝ち組プレイヤー。これは起こりうる？',
      choices: ['よくある', 'まずない'],
      items: [
        { text: '1万ハンドで収支がマイナス', answer: 0, why: '期待値 +500bb、1σ 1000bb。約31%で起こります。' },
        { text: 'AA でオールインして KK に負ける', answer: 0, why: '約19%。5〜6回に1回です。' },
        { text: '100万ハンドで収支がマイナス', answer: 1, why: '期待値 +5万bb、1σ 1万bb。5σ 下なのでほぼ起きません。' },
        { text: '1万ハンドで +1500bb 以上勝つ', answer: 0, why: '+1σ 以上。約16%で起こります。' },
        { text: '1万ハンドで −2500bb 以下', answer: 1, why: '−3σ。約0.1%です。' },
        { text: '4万ハンドで収支がマイナス', answer: 0, why: '期待値 +2000bb、1σ 2000bb。約16%です。' },
      ],
    },
    {
      t: 'tip',
      title: 'ダウンスイングは普通のこと',
      text: '収支よりオールインEVと大きなポットの判断を見直します。分散に耐えられる資金（バンクロール）でプレイしてください。',
    },
  ],
};

export default lesson;
