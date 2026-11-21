import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'stack-depth-bb',
  blocks: [
    { t: 'h', text: '浅いとき、どちらが強い？' },
    { t: 'quiz', q: '12bb で BTN。オールインで勝負するなら、価値が高いのは？', options: ['76s', 'A9o'], optionCards: [['7s', '6s'], ['Ad', '9c']], answer: 1, explain: '浅いとフロップ以降で大きく勝つ余地がありません。オールインの勝率が高い A9o が上です。76s は深いときに本領を発揮します。' },
    { t: 'compare', left: { title: '深いと価値が高い：76s', cards: ['7s', '6s'], verdict: 'neutral', points: ['セットやストレートで大きく勝つ', 'インプライドオッズが効く'] }, right: { title: '浅いと価値が高い：A9o', cards: ['Ad', '9c'], verdict: 'neutral', points: ['オールイン勝負で勝率が高い', 'フロップを見なくても使える'] }, caption: 'スタックの深さで、手の価値が入れ替わる。' },
    { t: 'h', text: 'スタックは bb で数える' },
    { t: 'formula', text: 'スタック（bb）= 自分のチップ ÷ ビッグブラインド' },
    { t: 'estimate', q: '30,000点。ブラインドが 1,000/2,000 になりました。何 bb？', min: 0, max: 60, step: 1, unit: 'bb', answer: 15, tolerance: 4, explain: '30,000 ÷ 2,000 = 15bb です。' },
    { t: 'table', head: ['ゾーン', '主な戦い方'], rows: [['40bb以上', 'キャッシュに近い。スモールペアやコネクターも使える'], ['20〜40bb', 'オープンは小さめ。3betはオールイン前提も考える'], ['10〜20bb', 'オープンかオールイン。リスチールが重要'], ['10bb未満', 'オールインかフォールドが基本']] },
    { t: 'rapid', q: 'このスタックでの基本の戦い方は？（境目は目安）', choices: ['オールインかフォールド', 'オープンして戦う'], items: [
      { text: '8bb', answer: 0 },
      { text: '60bb', answer: 1 },
      { text: '5bb', answer: 0 },
      { text: '100bb', answer: 1 },
      { text: '35bb', answer: 1, why: 'まだオープンしてフロップを見られる深さです。' },
      { text: '9bb', answer: 0, why: '10bb 未満はオールインかフォールドが基本です。' },
    ] },
    { t: 'h', text: 'M：あと何周耐えられるか' },
    { t: 'formula', text: 'M = スタック ÷（SB + BB + アンティ合計）' },
    { t: 'p', text: '500/1,000、BBアンティ1,000、スタック20,000 なら最初のポットは2,500で M = 8。20bb でも、アンティのぶん実際はもっと浅いのです。' },
    { t: 'pot', steps: [{ label: '500/1,000 アンティ1,000', pot: 2.5, stack: 20 }, { label: '1,000/2,000 アンティ2,000', pot: 2.5, stack: 15 }], caption: 'bb 換算。図の「SPR」は M と同じ値で、M = 8 と M = 6。' },
    { t: 'estimate', q: '1,000/2,000、BBアンティ 2,000、スタック 30,000。M は？', min: 0, max: 20, step: 1, answer: 6, tolerance: 2, explain: '最初のポットは 5,000。30,000 ÷ 5,000 = 6 です。' },
    { t: 'h', text: '9bb で打ってみる' },
    { t: 'play', title: '9bb の BTN', hero: 'BTN', heroCards: ['Kc', 'Th'], villain: 'BB', villainCards: ['Ad', '3s'], steps: [
      { street: 'プリフロップ', pot: 2.5, say: '1,000/2,000、BBアンティ2,000。あなたは18,000点で **9bb**。CO までフォールド。', q: 'どうする？', options: [
        { label: 'オールイン', good: true, why: '10bb 未満の BTN なら KTo は十分オールインできます。' },
        { label: '2bb オープン', good: false, why: 'オールインで返されると、価格的に降りられません。' },
        { label: 'フォールド', good: false, why: '待つとさらに浅くなり、降ろす力も失います。' }] },
      { street: 'フロップ', board: ['Ks', '8d', '4c'], pot: 19.5, say: 'BB が A3o でコール。フロップで K のペア。' },
      { street: 'ターン', board: ['Jh'], pot: 19.5, say: 'ターンは J。' },
      { street: 'リバー', board: ['2c'], pot: 19.5, say: 'リバーは 2。' },
    ], outro: '有効スタック（短いほう）の bb 数で戦い方を決めます。レベルが上がる直前は次の bb 数も意識します。' },
  ],
};

export default lesson;
