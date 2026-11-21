import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pos-squeeze',
  blocks: [
    { t: 'h', text: 'オープンとコールの後ろで' },
    { t: 'play', title: 'BB で A5s', hero: 'BB', heroCards: ['Ah', '5h'], villain: 'CO', steps: [
      { street: 'プリフロップ', pot: 6.5, say: 'CO が 2.5bb オープン、BTN がコール、SB はフォールド。あなたは BB で **A♥5♥**。', q: 'どうする？', options: [
        { label: '12bb に 3bet', good: true, why: 'BTN は 3bet しなかったので強い手が少なく、2人とも降りやすい場面です。' },
        { label: 'コール', good: false, why: '位置なしの3人ポットになります。A5s はブラフの 3bet に回したほうが活きます。' },
        { label: 'フォールド', good: false, why: '2人分のお金が出ていて、取りに行く価値があります。' },
      ] },
      { street: 'プリフロップ', pot: 18.5, say: 'CO はフォールド。BTN もフォールド。あなたが 6.5bb を獲得しました。' },
    ], outro: 'オープンとコールの後ろからの 3bet を **スクイーズ** と言います。' },
    { t: 'seats', seats: [
      { pos: 'UTG', action: 'フォールド', folded: true },
      { pos: 'HJ', action: 'フォールド', folded: true },
      { pos: 'CO', action: 'オープン 2.5bb', bet: 2.5 },
      { pos: 'BTN', action: 'コール 2.5bb', bet: 2.5 },
      { pos: 'SB', action: 'フォールド', folded: true, bet: 0.5 },
      { pos: 'BB', hero: true, action: 'スクイーズ 12bb', bet: 12, cards: ['Ah', '5h'] },
    ], pot: 6.5, caption: 'スクイーズ前のポットは 6.5bb です。' },
    { t: 'h', text: 'なぜ効くのか' },
    { t: 'p', text: 'コーラーは 3bet しなかったので、強い手が少なめです。オープン側も後ろにコーラーがいて 4bet しにくくなります。' },
    { t: 'formula', text: '必要なフォールド率 = 11 ÷ (11 + 5.5) ≈ 67%', note: 'BB の追加 11bb で、2人分の 5.5bb を取りに行く。コールされたら 11bb を失うと仮定した単純計算' },
    { t: 'tree', root: 'CO オープン、BTN コール。BB で A5s。スクイーズ（12bb）か、フォールドか', options: [
      { label: 'スクイーズ 12bb', outcomes: [{ label: '2人ともフォールド', prob: 0.6, value: 5.5 }, { label: 'どちらかがコール', prob: 0.4, value: -5 }], note: '仮定の数字。コール後の平均損益を -5bb としています。' },
      { label: 'フォールド', ev: 0 },
    ], caption: 'コールされてもエクイティがあるので、67%より低いフォールド率でも成り立ちます。' },
    { t: 'p', text: 'サイズは位置なし（SB、BB）で 11〜13bb、BTN からなら 9〜10bb が目安です。' },
    { t: 'estimate', q: 'BB から 12bb にスクイーズ。追加で払う額は？', min: 0, max: 20, step: 0.5, unit: 'bb', answer: 11, tolerance: 1, explain: 'BB は既に 1bb を払っているので、追加は 12 − 1 = 11bb です。' },
    { t: 'quiz', q: 'スクイーズのブラフが成立しやすい主な理由は？', options: ['コーラーのレンジが弱く、オープン側も 4bet しにくいから', '相手が必ず降りるから', 'ポットが小さいから', 'SB が降りているから'], answer: 0, explain: 'コーラーは 3bet していないので強い手が少なく、オープン側も後ろがいるため 4bet しにくい状況です。' },
    { t: 'h', text: 'スクイーズする？しない？' },
    { t: 'rapid', q: 'CO オープン、BTN コール。BB でスクイーズする？', choices: ['スクイーズ', 'しない'], items: [
      { cards: ['Qs', 'Qd'], answer: 0, why: 'QQ+ と AK はバリューのスクイーズです。' },
      { cards: ['Ac', 'Kd'], answer: 0 },
      { cards: ['As', '4s'], answer: 0, why: 'A のブロッカー付きのスーテッドはブラフ候補です。' },
      { cards: ['5c', '5d'], answer: 1, why: '小さいペアはコールでセットを狙うほうが向いています。' },
      { cards: ['9h', '4c'], answer: 1, why: 'コールされたときの勝ち目がほぼありません。' },
      { cards: ['Ah', '5h'], text: 'CO はよく 4bet してくる', answer: 1, why: '4bet が多い相手にはブラフのスクイーズを控えます。' },
      { cards: ['Ah', '5h'], text: 'BTN は誰にでもついてくる', answer: 1, why: 'コーラーが降りないなら、ブラフは成り立ちません。' },
      { cards: ['Kh', 'Kc'], answer: 0 },
    ] },
  ],
};

export default lesson;
