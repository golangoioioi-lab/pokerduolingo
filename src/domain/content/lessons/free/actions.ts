import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'actions',
  blocks: [
    { t: 'h', text: '選べるアクションは？' },
    {
      t: 'rapid',
      q: 'この場面で、このアクションは選べる？',
      choices: ['選べる', '選べない'],
      items: [
        { text: 'まだ誰もベットしていない → チェック', answer: 0 },
        { text: '前の人が 2bb ベットした → チェック', answer: 1, why: 'ベットに直面したらチェックはできません。' },
        { text: '前の人が 2bb ベットした → レイズ', answer: 0 },
        { text: 'まだ誰もベットしていない → コール', answer: 1, why: 'コールする相手のベットがありません。' },
        { text: 'いつでも → フォールド', answer: 0 },
        { text: 'まだ誰もベットしていない → ベット', answer: 0 },
        { text: '前の人が 2bb ベットした → コール', answer: 0 },
        { text: '前の人が 2bb ベットした → ベット', answer: 1, why: 'すでにベットがあるので、増やすならレイズです。' },
      ],
    },
    { t: 'p', text: '分かれ目は「前にベットがあるかどうか」だけです。' },
    {
      t: 'compare',
      left: { title: 'まだベットがない', points: ['チェック：何も出さずに回す', 'ベット：最初にチップを出す', 'フォールド'], verdict: 'neutral' },
      right: { title: '誰かがベットしている', points: ['コール：同じ額を出す', 'レイズ：もっと多く出す', 'フォールド：降りる（出したチップは戻らない）'], verdict: 'neutral' },
      caption: '5つのアクションは、前のベットの有無で2組に分かれます。',
    },
    { t: 'h', text: 'プリフロップは BB がベット扱い' },
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
      caption: 'BB の 1bb が最初のベット。最初に動く UTG はチェックできません。',
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
      explain: 'すでに 1bb 出しているので、2.5 − 1 = 1.5bb です。',
    },
    {
      t: 'quiz',
      q: 'あなたは BB。誰もレイズせずに番が来た。追加なしで選べるのは？',
      hand: ['Ts', '7d'],
      options: ['チェック', 'コール', 'フォールドしかない'],
      answer: 0,
      explain: 'BB は 1bb を出し済みなので、誰もレイズしていなければチェックできます。',
    },
    { t: 'tip', title: 'オールイン', text: '手持ちを全部出すのがオールインです。足りなくても参加でき、超えた分は別のポットに分けます（後のレッスンで扱います）。' },
    { t: 'h', text: '1ハンドで5つを使う' },
    {
      t: 'play',
      title: 'BB で T7',
      hero: 'BB',
      heroCards: ['Ts', '7d'],
      villain: 'SB',
      villainCards: ['Kc', '6d'],
      steps: [
        {
          street: 'プリフロップ', pot: 2, say: 'SB まで全員フォールド。SB は 0.5bb 足してコール（リンプ）しました。', q: 'あなたは BB。どうする？',
          options: [
            { label: 'チェック', good: true, why: '追加なしでフロップを見られます。' },
            { label: 'フォールド', good: false, why: '無料で進めるのに降りる理由はありません。' },
            { label: 'レイズ', good: true, why: 'レイズも有力です。ここではチェックで進めます。' },
          ],
        },
        {
          street: 'フロップ', board: ['Th', '6c', '2h'], pot: 2, say: 'T のペアができました。SB はチェック。', q: 'どうする？',
          options: [
            { label: 'ベット 1bb', good: true, why: '一番上のペアです。弱いペアからも払ってもらえます。' },
            { label: 'フォールド', good: false, why: 'ベットがないので、チェックで無料で進めます。' },
          ],
        },
        {
          street: 'ターン', board: ['4d'], pot: 6, say: 'SB はコール。ターンで SB が 2bb をベットしました。', q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'ベットに直面しているのでチェックはできません。' },
            { label: 'コール', good: true, why: 'T のペアは十分強い手です。' },
            { label: 'フォールド', good: false, why: '小さなベットに一番上のペアで降りるのはもったいないです。' },
          ],
        },
        {
          street: 'リバー', board: ['3s'], pot: 8, say: 'リバーは 3。SB はチェック。', q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: '安全にショーダウンへ。' },
            { label: 'ベット 3bb', good: true, why: '6 のペアなどから取れる薄いバリュー。どちらも僅差です。' },
          ],
        },
      ],
      outro: 'チェック・ベット・コールを使い分けました。ベットがあるかどうかで選べる手が変わります。',
    },
  ],
};

export default lesson;
