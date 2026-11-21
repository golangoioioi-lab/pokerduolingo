import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'game-selection',
  blocks: [
    { t: 'h', text: 'どの卓に座る？' },
    {
      t: 'rapid', q: 'こんな卓（または状況）なら座りたい？', choices: ['座りたい', '見送る'], items: [
        { text: '毎回3〜4人がフロップを見ている', answer: 0 },
        { text: 'レイズと3ベットが飛び交い、毎回2人でフロップ', answer: 1, why: '強い相手が多いサインです。' },
        { text: 'リンプ（コールだけの参加）が多い', answer: 0 },
        { text: '弱い手で最後までコールした人がいる', answer: 0 },
        { text: '上級者として知られる人が4人いる', answer: 1 },
        { text: '平均ポットが同じレートの他の卓より大きい', answer: 0 },
        { text: '卓はゆるいが、自分は寝不足で集中できない', answer: 1, why: '自分の判断の質が下がれば、エッジは小さくなります。' },
      ],
    },
    { t: 'p', text: '成績を決めるのは、自分の上手さよりも**相手との実力差（エッジ）**です。経験の浅い相手が多い卓を選ぶことを**ゲーム選び**と呼びます。' },
    { t: 'compare', left: { title: '相手が弱い卓', verdict: 'good', points: ['上から3番目でも有利に戦える', '同じ実力でも結果が良くなる'] }, right: { title: '上級者ばかりの卓', verdict: 'bad', points: ['それなりに上手くても不利', '学びは多いが資金面では不利'] }, caption: '成績は相手との実力差で決まる。' },
    { t: 'quiz', q: '同じレートで2つの卓が空いている。基本的に有利なのは？', options: ['強いプレイヤーが多く、学べそうな卓', '経験の浅そうなプレイヤーが多い卓', 'どちらでも同じ'], answer: 1, explain: 'エッジのある卓のほうが有利です。' },
    { t: 'h', text: '卓の見分け方' },
    { t: 'seats', seats: [{ pos: 'UTG', action: 'リンプ', bet: 1 }, { pos: 'HJ', action: 'リンプ', bet: 1 }, { pos: 'CO', action: 'リンプ', bet: 1 }, { pos: 'BTN', hero: true, action: 'あなた' }, { pos: 'SB', folded: true }, { pos: 'BB', action: 'チェック', bet: 1 }], caption: 'リンプが多く、毎回大勢がフロップを見る卓はゆるいサイン。' },
    { t: 'estimate', q: '6人のうち4人がフロップを見る卓。フロップを見る割合は？', min: 0, max: 100, step: 5, unit: '%', answer: 67, tolerance: 12, explain: '4 ÷ 6 ≒ 67%。ルースな卓です。' },
    { t: 'p', text: 'サンプルが少ないうちは決めつけず、少し観察してから判断します。レートは資金管理の目安を満たす範囲で選びます。' },
    { t: 'compare', left: { title: 'ゆるい卓 ＋ 寝不足', verdict: 'bad', points: ['判断の質が下がる', '遊ばないか、短く切り上げる'] }, right: { title: 'ゆるい卓 ＋ 万全', verdict: 'good', points: ['相手の弱さを活かせる', '決めた時間と上限の範囲で遊ぶ'] }, caption: 'エッジは相手の弱さと自分の状態の両方で決まる。' },
    { t: 'quiz', q: '週末の夜で卓はゆるいが、自分は寝不足。最も適切な判断は？', options: ['ゆるいので、いつもより長く遊ぶ', '今日は遊ばないか、短く切り上げる', 'レートを上げて短時間で稼ぐ'], answer: 1, explain: '判断の質が下がれば、良い卓でもエッジは小さくなります。' },
    {
      t: 'play', title: 'ゆるい卓の1ハンド', hero: 'BTN', heroCards: ['As', 'Qs'], villain: 'HJ', villainCards: ['Qh', 'Td'],
      steps: [
        { street: 'プリフロップ', pot: 3.5, say: 'UTG と HJ がリンプ。あなたは BTN で **A♠Q♠**。', q: 'どうする？', options: [
          { label: '5bb にレイズ', good: true, why: 'リンパーがいるので大きめにレイズし、弱い手から取ります。' },
          { label: 'リンプで続く', good: false, why: '強い手なのでポットを大きくします。' },
          { label: 'フォールド', good: false, why: 'AQs は十分に強い手です。' },
        ] },
        { street: 'フロップ', board: ['Qc', '7d', '3s'], pot: 12.5, say: 'HJ だけがコール。トップペアです。HJ はチェック。', q: 'どうする？', options: [
          { label: '8bb ベット', good: true, why: 'ゆるい相手は弱いペアでもコールしてきます。' },
          { label: 'チェック', good: false, why: '払ってくれる相手からはバリューを取ります。' },
        ] },
        { street: 'ターン', board: ['9h'], pot: 28.5, say: 'HJ がコールしてチェック。', q: 'どうする？', options: [
          { label: '18bb ベット', good: true, why: 'まだ多くの弱い手に勝っています。' },
          { label: 'チェック', good: false, why: 'コールが多い相手には打ち続けます。' },
        ] },
        { street: 'リバー', board: ['2c'], pot: 64.5, say: 'HJ がコールしてチェック。', q: 'どうする？', options: [
          { label: 'バリューベット', good: true, why: 'Q の弱いキッカーなどから、もう一度払ってもらえます。' },
          { label: 'チェック', good: false, why: 'コールしてくれる相手に打たないのはもったいないです。' },
        ] },
      ],
      outro: 'ゆるい卓では、強い手で大きく打ち続けるだけで利益になります。',
    },
  ],
};

export default lesson;
