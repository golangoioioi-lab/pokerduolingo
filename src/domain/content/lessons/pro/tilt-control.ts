import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'tilt-control',
  blocks: [
    { t: 'h', text: '逆転負けのあとの1ハンド' },
    {
      t: 'play', title: 'BTN で AK', hero: 'BTN', heroCards: ['Ad', 'Ks'], villain: 'BB', villainCards: ['Qh', 'Jh'],
      steps: [
        { street: 'プリフロップ', pot: 1.5, say: 'CO までフォールド。あなたは BTN で **A♦K♠**。', q: 'どうする？', options: [
          { label: '2.5bb レイズ', good: true, why: '強い手はレイズで入ります。' },
          { label: 'フォールド', good: false, why: 'AK はどの席でもオープンします。' },
        ] },
        { street: 'フロップ', board: ['Ac', '8h', '3h'], pot: 5.5, say: 'BB がコール。トップペア・トップキッカーです。BB はチェック。', q: 'どうする？', options: [
          { label: '3bb ベット', good: true, why: '弱い A やドローから払ってもらえます。' },
          { label: 'チェック', good: false, why: '強い手なのでバリューを取ります。' },
        ] },
        { street: 'フロップ', pot: 106, say: 'BB が 97.5bb のオールイン。この相手はドローでもよくオールインしてきます。', q: 'コールする？（必要勝率は約47%）', options: [
          { label: 'コール', good: true, why: 'ドローが多い相手には十分勝っています。' },
          { label: 'フォールド', good: false, why: 'トップペア・トップキッカーを降りるのは降りすぎです。' },
        ] },
        { street: 'ターン', board: ['2c'], pot: 200.5, say: 'BB は **Q♥J♥**。フラッシュドローでした。' },
        { street: 'リバー', board: ['Th'], pot: 200.5, say: 'リバーはハート。' },
      ],
      outro: 'コールの時点で約62%勝っていました。正しい判断でも、約4割は負けます。',
    },
    { t: 'equity', players: [{ label: 'あなた（AK）', cards: ['Ad', 'Ks'], pct: 62 }, { label: '相手（QJ）', cards: ['Qh', 'Jh'], pct: 38 }], board: ['Ac', '8h', '3h'], caption: 'オールインの時点の勝率。負けは確率どおりに起こる。' },
    { t: 'quiz', q: 'いまの逆転負けの直後。UTG でこの手が配られた。どうする？', hand: ['7c', '2d'], options: ['フォールドする', '取り返すためにレイズする'], answer: 0, explain: '72o は普段どおりフォールドです。参加したくなる感覚そのものがティルトの兆候です。' },
    { t: 'p', text: '**ティルト**は、感情で判断が普段より悪くなる状態です。怒りだけでなく、焦り、油断、疲れも原因になります。' },
    { t: 'table', head: ['種類', 'よく出る行動'], rows: [['バッドビート型', '弱い手で無理に参加する'], ['取り返したい型', 'レートを上げる、長く続ける'], ['特定の相手型', 'その相手にだけ無理なブラフやコール'], ['勝ちすぎ型', '気が大きくなり雑になる'], ['疲労型', '見落としが増える']] },
    { t: 'compare', left: { title: 'A-game', verdict: 'good', points: ['落ち着いている', '判断ごとに理由がある'] }, right: { title: 'C-game', verdict: 'bad', points: ['感情や疲れで雑になる', '普段しないプレイが出る'] }, caption: '「C-game になったらやめる」と先に決めておく。' },
    { t: 'h', text: 'リセットとストップロス' },
    { t: 'list', ordered: true, items: ['次のハンドに参加する前に席を立つ', '5〜10分休む', 'きっかけを一行メモする', '「今は A-game か？」と自問し、自信がなければ終える'] },
    { t: 'p', text: '**ストップロス**は、その日の損失の上限です。プレイ前に決め、プレイ中は変えません。' },
    { t: 'estimate', q: 'ストップロスは3バイイン。1バイイン 100bb なら、その日に負けてよい上限は何bb？', min: 0, max: 600, step: 50, unit: 'bb', answer: 300, tolerance: 100, explain: '100bb × 3 = 300bb です。' },
    { t: 'quiz', q: 'ストップロスに達したが「相手が弱いから取り返せそう」と感じる。適切な行動は？', options: ['あと1バイインだけ続ける', 'レートを上げて早く取り返す', 'ルールどおり終了し、相手のことはメモに残す'], answer: 2, explain: '上限に達したら終了します。「取り返せそう」という感覚自体がティルトの兆候です。' },
    {
      t: 'rapid', q: 'これはティルト？', choices: ['ティルト', '普段どおり'], items: [
        { text: 'AA で負けた直後、72o でレイズしたくなった', answer: 0 },
        { text: '決めた2時間が来たので、勝っているがやめた', answer: 1 },
        { text: '同じ相手にやられ続け、その人にだけ無理なブラフをした', answer: 0 },
        { text: '大勝ちして気が大きくなり、レートを上げた', answer: 0, why: '勝ちすぎ型のティルトです。' },
        { text: 'ストップロスに達したので席を立った', answer: 1 },
        { text: '寝不足で、ボードのフラッシュを見落とした', answer: 0, why: '疲労型です。' },
        { text: '迷ったハンドにメモを残して、次のハンドに集中した', answer: 1 },
        { text: '終了時刻を過ぎたが、取り返すまで続けている', answer: 0 },
      ],
    },
  ],
};

export default lesson;
