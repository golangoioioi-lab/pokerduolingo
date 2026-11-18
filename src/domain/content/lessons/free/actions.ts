import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'actions',
  blocks: [
    { t: 'p', text: '自分の番が来たら、状況に合わせて次の5つから選びます。' },
    {
      t: 'compare',
      left: {
        title: 'まだベットがない',
        points: ['チェック：何も出さずに回す', 'ベット：最初にチップを出す', 'フォールドはいつでも可能'],
        verdict: 'neutral',
      },
      right: {
        title: '誰かがベットしている',
        points: ['コール：同じ額を出す', 'レイズ：もっと多く出す', 'フォールド：降りる（チェックは不可）'],
        verdict: 'neutral',
      },
      caption: '選べるアクションは、前にベットがあるかどうかで変わります。',
    },
    {
      t: 'table',
      head: ['アクション', '意味', '選べるとき'],
      rows: [
        ['チェック', 'チップを出さずに次の人へ回す', 'まだ誰もベットしていない'],
        ['ベット', '最初にチップを出す', 'まだ誰もベットしていない'],
        ['コール', '直前のベットと同じ額を出す', '誰かがベットしている'],
        ['レイズ', '直前のベットより多く出す', '誰かがベットしている'],
        ['フォールド', '手札を捨てて降りる。出したチップは戻らない', 'いつでも'],
      ],
    },
    {
      t: 'quiz',
      q: '前の人が 2bb ベットした。あなたが選べないアクションは？',
      hand: ['Ah', 'Qd'],
      board: ['Kd', '9s', '4c'],
      options: ['コール', 'レイズ', 'チェック', 'フォールド'],
      answer: 2,
      explain: 'ベットに直面しているときはチェックできません。コール・レイズ・フォールドのどれかを選びます。',
    },
    { t: 'h', text: 'プリフロップは少し特別' },
    { t: 'p', text: 'プリフロップでは BB がすでに 1bb を出しているので、最初からベットがある状態です。最初に行動する UTG は、コール（1bb）・レイズ・フォールドから選びます。' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', hero: true, action: '行動中' },
        { pos: 'HJ' },
        { pos: 'CO' },
        { pos: 'BTN' },
        { pos: 'SB', bet: 0.5 },
        { pos: 'BB', bet: 1 },
      ],
      pot: 1.5,
      caption: 'プリフロップの最初。UTG はコール（1bb）・レイズ・フォールドから選びます。',
    },
    {
      t: 'quiz',
      q: 'あなたは BB。誰もレイズせずに自分の番が来た。追加のチップなしで選べるのは？',
      hand: ['Ts', '7d'],
      options: ['チェック', 'コール', 'フォールドしかない'],
      answer: 0,
      explain: 'BB はすでに 1bb を出しているので、誰もレイズしていなければチェックしてフロップに進めます。',
    },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: 'レイズ 2.5bb', bet: 2.5 },
        { pos: 'HJ', action: 'フォールド', folded: true },
        { pos: 'CO', action: 'フォールド', folded: true },
        { pos: 'BTN', action: 'フォールド', folded: true },
        { pos: 'SB', action: 'フォールド', folded: true },
        { pos: 'BB', hero: true, action: '行動中', bet: 1, cards: ['Js', 'Td'] },
      ],
      pot: 4,
      caption: 'UTG が 2.5bb にレイズ。BB（あなた）は 1bb を出済みです。',
    },
    {
      t: 'estimate',
      q: 'BB のあなたがコールするには、あと何 bb 払う？',
      hand: ['Js', 'Td'],
      min: 0,
      max: 5,
      step: 0.5,
      unit: 'bb',
      answer: 1.5,
      tolerance: 0.25,
      explain: '必要なのは 2.5bb との差額です。すでに 1bb 出しているので、追加は 2.5 − 1 = 1.5bb。',
    },
    { t: 'h', text: 'オールイン' },
    { t: 'p', text: '持っているチップを全部出すことをオールインと言います。相手のベットより少なくても参加でき、その場合に勝って受け取れるのは、自分が出した額に見合う分までです（超えた分は別のポットになります）。' },
    { t: 'tip', text: 'コールするかどうかは「払う額に対して、どれくらい勝てそうか」で決めます。計算のしかたは初級コースの「ポットオッズ」で学びます。' },
  ],
};

export default lesson;
