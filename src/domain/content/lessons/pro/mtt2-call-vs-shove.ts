import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'mtt2-call-vs-shove',
  blocks: [
    { t: 'h', text: '押す側でやってみる' },
    {
      t: 'seats',
      seats: [
        { pos: 'CO', folded: true, action: '30bb フォールド' },
        { pos: 'BTN', hero: true, action: 'あなた 20bb', cards: ['Ks', '9d'] },
        { pos: 'SB', folded: true, action: '10bb', bet: 0.5 },
        { pos: 'BB', action: 'ビッグ 40bb', bet: 1 },
      ],
      pot: 2.5,
      caption: '4人残り・3位まで入賞（50/30/20%）。ブラインド0.5/1bb、BBアンティ1bb',
    },
    {
      t: 'play',
      title: 'バブルの BTN で K9o',
      hero: 'BTN',
      heroCards: ['Ks', '9d'],
      villain: 'BB',
      steps: [
        {
          street: 'プリフロップ',
          pot: 2.5,
          say: 'CO まで降りて、あなたは BTN で20bb。SB は10bb のショート、BB は40bb のビッグです。',
          q: 'K9o でどうする？',
          options: [
            { label: '20bb オールイン', good: true, why: 'ICM のせいで BB はとても強い手でしかコールできず、約93%降ります。差は小さいものの ICM でもプラスです（目安）。' },
            { label: 'フォールド', good: false, why: '降りてもらえる確率が高く、2.5bb を取る機会を逃します。' },
          ],
        },
        { street: 'プリフロップ', pot: 22.5, say: 'SB が降り、BB も考えた末にフォールド。あなたは2.5bb を獲得しました。' },
      ],
      outro: 'コールされると K9o は約29%しか勝てません。それでも押せるのは、相手のコールが ICM で強く締まるからです。',
    },
    { t: 'h', text: '受ける側：ビッグでも締める' },
    { t: 'p', text: 'BB は追加で19bb を払って41.5bb のポットを争います。チップだけなら必要な勝率は約45.8%です。ICM では次のとおりです。' },
    {
      t: 'table',
      head: ['BBの結果', 'BBのスタック', 'BBのICM期待値'],
      rows: [['フォールド', '38bb', '32.8%'], ['コールして勝つ', '60.5bb', '41.4%'], ['コールして負ける', '19bb', '23.1%']],
    },
    {
      t: 'estimate',
      q: 'ICM で BB がコールするのに必要な勝率は？（フォールド 32.8%、勝ち 41.4%、負け 23.1%）',
      min: 30, max: 80, step: 1, unit: '%', answer: 53, tolerance: 8,
      explain: '(32.8 − 23.1) ÷ (41.4 − 23.1) = 9.7 ÷ 18.3 ≒ 53%。チップEV の45.8%より約7ポイント高くなります。',
    },
    {
      t: 'compare',
      left: { title: 'チップEVでの必要勝率', points: ['19 ÷ 41.5 ≒ 45.8%', '広いレンジでコールできる'], verdict: 'neutral' },
      right: { title: 'ICMでの必要勝率', points: ['約53%', 'コールは 99+, ATs+, AJo+, KQs（約7%）に絞られる'], verdict: 'bad' },
      caption: '負けると40bbから19bbに落ちるので、ビッグでもコールが締まる',
    },
    { t: 'h', text: '押す側：降りてもらえる分がある' },
    {
      t: 'tree',
      root: 'BTNで20bb、K9o。チップEV（フォールドとの差、bb）',
      options: [
        {
          label: 'オールイン',
          outcomes: [
            { label: '全員が降りる', prob: 0.93, value: 2.5 },
            { label: 'コールされて勝つ', prob: 0.02, value: 21.5 },
            { label: 'コールされて負ける', prob: 0.05, value: -20 },
          ],
          note: 'コールされる7%のうち勝ち約29%、負け約71%（丸め）',
        },
        { label: 'フォールド', ev: 0 },
      ],
      caption: 'コールされると不利でも、降りる確率がとても高い',
    },
    { t: 'formula', text: 'ICM期待値：0.93 × 25.2 + 0.07 × 0.29 × 34.3 ≒ 24.1%', note: 'フォールドの23.7%をわずかに上回る（目安）。約90%降りてもらえないと逆転する' },
    {
      t: 'quiz',
      q: 'ICM では、なぜオールインする側のレンジがコールする側より広くなる？',
      options: ['相手が降りて取れる分（フォールドエクイティ）があるから', 'オールインする側は飛ばないから', 'ICM はオールインする側だけに有利だから', 'ブラインドが必ず無料だから'],
      answer: 0,
      explain: 'オールインには相手が降りて取れる分があります。コールする側は勝負に勝つしかないので、ICM の必要勝率をそのまま満たす必要があります。',
    },
    { t: 'h', text: '受ける側のレンジを体で覚える' },
    {
      t: 'rapid',
      q: 'BB 40bb のビッグ。BTN 20bb のオールインにコールする？（コールは 99+, ATs+, AJo+, KQs）',
      choices: ['コール', 'フォールド'],
      items: [
        { cards: ['Qh', 'Qd'], answer: 0, why: '99+ に入ります。' },
        { cards: ['Kh', '9c'], answer: 1, why: 'K9o は押す側なら使えても、受ける側では弱すぎます。' },
        { cards: ['Ac', 'Kd'], answer: 0, why: 'AKo はコールします。' },
        { cards: ['Ad', '8c'], answer: 1, why: 'A8o は AJo+ に届きません。' },
        { cards: ['6s', '6h'], answer: 1, why: 'ペアは 99+ だけです。' },
        { cards: ['As', 'Qs'], answer: 0, why: 'ATs+ に入ります。' },
        { cards: ['Qc', 'Jc'], answer: 1, why: 'スーテッドの K 以下は KQs だけです。' },
        { cards: ['Jh', 'Jd'], answer: 0, why: '99+ に入ります。' },
        { cards: ['Kd', 'Jc'], answer: 1, why: 'KJo はコールレンジに入りません。' },
        { cards: ['As', '5s'], answer: 1, why: 'A5s は ATs+ に届きません。' },
      ],
    },
    { t: 'tip', text: '「コールは締め、オールインは相手のコールの締まり具合を見て広げる」。相手が負けたら何を失うかを毎回確認します。' },
  ],
};

export default lesson;
