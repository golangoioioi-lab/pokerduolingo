import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'opp-station-bluffs',
  blocks: [
    { t: 'h', text: 'まず判断してみる' },
    {
      t: 'rapid',
      q: 'リバーでドローが外れた。ショーダウンでは勝てない。ブラフする？',
      choices: ['ブラフ', '諦める'],
      items: [
        { text: 'ポット 30bb に 20bb。相手はステーション（降りるのは 20%）', answer: 1, why: '必要なのは 40%。20% では足りません。' },
        { text: 'ポット 30bb に 20bb。相手はレギュラー（降りるのは 50%）', answer: 0, why: '必要な 40% を超えています。' },
        { text: 'ポット 30bb に 10bb。相手はステーション', answer: 1, why: 'ステーションは小さいベットほどよくコールします。' },
        { text: 'ポット 20bb に 10bb。相手はニット（よく降りる）', answer: 0 },
        { text: 'ポット 40bb に 30bb。相手の降りる率は 25%', answer: 1, why: '必要なのは約43%です。' },
        { text: 'ポット 20bb に 10bb。相手の降りる率は 50%', answer: 0, why: '必要なのは約33%です。' },
      ],
    },
    { t: 'p', text: 'ステーション相手で一番多い損は、通らないブラフです。バリューで取った分が、ブラフ1回ですぐに消えます。' },
    { t: 'h', text: '必要なフォールド率と比べる' },
    { t: 'formula', text: '必要フォールド率 = ベット ÷ (ポット + ベット)', note: 'ポット 30bb に 20bb なら 20 ÷ 50 = 40%' },
    {
      t: 'tree',
      root: 'リバー。ポット 30bb、外れたドローで 20bb ブラフ',
      options: [
        { label: 'チェックして諦める', ev: 0 },
        { label: 'ブラフ（相手：レギュラー）', outcomes: [{ label: '降りる', prob: 0.5, value: 30 }, { label: 'コール', prob: 0.5, value: -20 }] },
        { label: 'ブラフ（相手：ステーション）', outcomes: [{ label: '降りる', prob: 0.2, value: 30 }, { label: 'コール', prob: 0.8, value: -20 }] },
      ],
      caption: 'フォールド率は目安。同じブラフが、相手で +5bb と −10bb に分かれます。',
    },
    {
      t: 'estimate',
      q: 'ポット 40bb に 30bb のブラフ。必要なフォールド率は約何%？',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 43,
      tolerance: 8,
      explain: '30 ÷ 70 ≈ 43% です。',
    },
    { t: 'p', text: 'サイズを小さくしても解決しません。小さいベットほどコールされるからです。代わりに、ドローはフロップやターンで安く見ます。' },
    {
      t: 'compare',
      left: { title: 'レギュラー相手の外れたドロー', cards: ['8h', '7h'], board: ['Ah', 'Ts', '4h', 'Kc', '2s'], points: ['A を持たない手を降ろせる', 'ブラフ候補'], verdict: 'good' },
      right: { title: 'ステーション相手の外れたドロー', cards: ['8h', '7h'], board: ['Ah', 'Ts', '4h', 'Kc', '2s'], points: ['4 のペアでもコールされる', 'チェックして損を止める'], verdict: 'bad' },
    },
    { t: 'h', text: 'もう一度：外れたら諦める' },
    {
      t: 'play',
      title: 'BTN の 87s vs BB のステーション',
      hero: 'BTN',
      heroCards: ['8h', '7h'],
      villain: 'BB',
      villainCards: ['4d', '3d'],
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'あなたは BTN で **8♥7♥** を 2.5bb オープン。BB（ステーション）がコール。' },
        {
          street: 'フロップ',
          board: ['Ah', 'Ts', '4h'],
          pot: 5.5,
          say: 'フロップは **A♥T♠4♥**。フラッシュドロー。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: 'ステーションは降りないので、無料でカードを見ます。' },
            { label: '3.5bb ベット', good: false, why: 'ドローのエクイティはありますが、降ろせる分がほぼありません（接戦）。' },
          ],
        },
        { street: 'ターン', board: ['Kc'], pot: 5.5, say: 'ターンは **K♣**。BB はチェック、あなたもチェック。' },
        {
          street: 'リバー',
          board: ['2s'],
          pot: 5.5,
          say: 'リバーは **2♠**。フラッシュは外れました。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: '4bb でブラフ', good: false, why: 'ステーションは小さいペアでもコールします。' },
            { label: 'チェック', good: true, why: '8 ハイでは勝てませんが、損を最小にします。' },
          ],
        },
      ],
      outro: '相手は 4 のペアでした。このくらいの手でも、ステーションは降りません。',
    },
    {
      t: 'quiz',
      q: 'ステーション相手のブラフについて正しいのは？',
      options: ['サイズに関係なく減らすのが基本', '小さくすれば必ず通る', 'オーバーベットなら必ず通る'],
      answer: 0,
      explain: '小さいベットほどよくコールされ、大きくしても降りる率は十分に上がりません。',
    },
  ],
};

export default lesson;
