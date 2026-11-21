import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'decision-trees',
  blocks: [
    { t: 'h', text: '3つの選択肢、どれが一番？' },
    {
      t: 'quiz',
      q: 'ターンでポット50bbに相手が25bbベット。残りスタック75bb。コールなら勝率30%。オールインレイズなら相手は40%降り、コールされると勝率20%。EVが最も高いのは？',
      options: ['フォールド', 'コール', 'オールインレイズ'],
      answer: 2,
      explain: 'フォールド 0bb、コール +5bb、レイズ +9bb。次の図で確かめます。',
    },
    { t: 'h', text: '枝ごとにEVを出す' },
    { t: 'p', text: '選択肢ごとに「この後どうなるか」を枝分かれで書き、EVを比べます。これが**ディシジョンツリー**です。' },
    {
      t: 'tree',
      root: 'ターン ポット50bb に 25bb ベット（残りスタック75bb）',
      options: [
        { label: 'フォールド', ev: 0 },
        {
          label: 'コール（エクイティ30%）',
          outcomes: [{ label: '勝つ', prob: 0.3, value: 75 }, { label: '負ける', prob: 0.7, value: -25 }],
          note: '+5bb',
        },
        {
          label: '75bb レイズ（相手40%フォールド）',
          outcomes: [
            { label: 'フォールド', prob: 0.4, value: 75 },
            { label: 'コールされて勝つ', prob: 0.12, value: 125 },
            { label: 'コールされて負ける', prob: 0.48, value: -75 },
          ],
          note: '+9bb',
        },
      ],
      caption: 'レイズにコールされると最終ポット200bb、EV = 0.2 × 200 − 75 = −35bb。',
    },
    { t: 'formula', text: 'EV(レイズ) = 0.4 × 75 + 0.6 × (−35) = 30 − 21 = +9bb' },
    {
      t: 'estimate',
      q: '同じ状況で、相手がレイズに50%でフォールドするなら、EV(レイズ)は？',
      min: -40, max: 60, step: 1, unit: 'bb', answer: 20, tolerance: 8,
      explain: '0.5 × 75 + 0.5 × (−35) = +20bb。フォールド率が10%上がるだけで大きく増えます。',
    },
    { t: 'h', text: '仮定が変わると答えも変わる' },
    { t: 'p', text: 'EV(レイズ) = 75f − 35(1 − f) = 110f − 35。コールの +5bb を上回るのは f > 40 ÷ 110 ≈ 36.4% のときです。' },
    {
      t: 'estimate',
      q: 'EV(レイズ) = 110f − 35 が0を上回る（フォールドより良くなる）最低のフォールド率 f は？',
      min: 0, max: 100, step: 1, unit: '%', answer: 31.8, tolerance: 7,
      explain: '110f = 35 より f ≈ 31.8%。ただしコールを上回るには約36.4%必要です。',
    },
    { t: 'h', text: '枝を伸ばす：リバーの追加利益' },
    {
      t: 'outs',
      q: 'リバーでフラッシュになるカードを全部タップ',
      hand: ['9h', '8h'],
      board: ['Kh', '7h', '2c', 'Qs'],
      target: 'フラッシュ',
      explain: '9アウツ。9 ÷ 46 ≈ 20% です。',
    },
    { t: 'p', text: 'ポット50bbに25bbのベット。必要勝率25%に対し、完成は約20%。ただし完成したら、相手が50%の確率で50bbを払うとします。' },
    {
      t: 'tree',
      root: 'ドローでコール（ポット50bb・コール25bb）',
      options: [
        { label: 'フォールド', ev: 0 },
        {
          label: 'コール（完成20%・完成時に平均25bb 追加）',
          outcomes: [{ label: '完成', prob: 0.2, value: 100 }, { label: '不完成', prob: 0.8, value: -25 }],
          note: '0bb',
        },
      ],
      caption: '追加利益なしなら 0.2 × 100 − 25 = −5bb。リバーの枝を足すとトントンになります。',
    },
    { t: 'h', text: 'もう一度：コールかレイズか' },
    {
      t: 'rapid',
      q: '最初の状況（コール +5bb、EV(レイズ) = 110f − 35）。相手がレイズにこれだけ降りるなら？',
      choices: ['レイズ', 'コール'],
      items: [
        { text: '50%降りる', answer: 0, why: 'レイズ +20bb > コール +5bb。' },
        { text: '25%降りる', answer: 1, why: 'レイズ −7.5bb。コールの +5bb が上です。' },
        { text: '40%降りる', answer: 0, why: 'レイズ +9bb。' },
        { text: '30%降りる', answer: 1, why: 'レイズ −2bb。' },
        { text: '60%降りる', answer: 0, why: 'レイズ +31bb。' },
        { text: '20%降りる', answer: 1, why: 'レイズ −13bb。' },
      ],
    },
    { t: 'tip', text: '迷ったスポットはツリーに書くと、「どの数字が変われば判断が変わるか」が見えます。' },
  ],
};

export default lesson;
