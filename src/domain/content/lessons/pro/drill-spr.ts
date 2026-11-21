import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'drill-spr',
  blocks: [
    { t: 'h', text: 'スタックはポットの何倍？' },
    {
      t: 'rapid',
      q: '100bb スタート。フロップの SPR（残りスタック ÷ ポット）は？',
      choices: ['6以下', '10以上'],
      items: [
        { text: 'BTN 2.5bb オープン、BB コール', answer: 1, why: '97.5 ÷ 5.5 ≈ 17.7。' },
        { text: 'CO 2.5bb、BTN 8bb に 3bet、CO コール', answer: 0, why: '92 ÷ 17.5 ≈ 5.3。' },
        { text: '3bet に 22bb の 4bet、コール', answer: 0, why: '78 ÷ 45.5 ≈ 1.7。' },
        { text: 'ポット20bb・残り60bb', answer: 0, why: '60 ÷ 20 = 3。' },
        { text: 'ポット10bb・残り150bb', answer: 1, why: '15。' },
        { text: 'ポット6bb・残り97bb', answer: 1, why: '約16。' },
      ],
    },
    { t: 'h', text: 'SPRの出し方' },
    { t: 'p', text: 'SPR が小さいほど少ないベット回数でオールインになり、トップペアでもスタックを入れやすくなります。' },
    {
      t: 'formula',
      text: 'SPR = 有効スタック（残り）÷ フロップのポット',
      note: '有効スタックは2人のうち少ない方。降りたブラインドもポットに入ります',
    },
    {
      t: 'table',
      head: ['SPR', '目安'],
      rows: [
        ['1〜3', 'トップペア以上ならオールインまで進みやすい'],
        ['4〜8', 'トップペアは慎重に。ツーペア以上で大きなポットを作りたい'],
        ['10以上', 'ナッツ級でないとスタックを入れにくい。ドローの価値が上がる'],
      ],
    },
    {
      t: 'pot',
      steps: [
        { label: 'シングルレイズ（2.5bbにコール）', pot: 5.5, stack: 97.5 },
        { label: '3betポット（8bbにコール）', pot: 17.5, stack: 92 },
        { label: '4betポット（22bbにコール）', pot: 45.5, stack: 78 },
      ],
      caption: 'ヘッズアップ、ブラインドが降りた場合のフロップ時点。SPR は約18 → 約5.3 → 約1.7。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ', pot: 20, stack: 60 },
        { label: 'ターン（ポットベットにコール）', pot: 60, stack: 40 },
        { label: 'リバー（オールインにコール）', pot: 140, stack: 0 },
      ],
      caption: 'SPR 3 なら、ポットサイズのベット2回でスタックがすべて入ります。',
    },
    { t: 'h', text: '練習問題' },
    {
      t: 'estimate',
      q: 'COが2.5bbにオープン、BTNが8bbに3bet、ブラインドは降りてCOがコール。フロップのSPRは？',
      min: 0, max: 20, step: 0.5, unit: '', answer: 5.3, tolerance: 1,
      explain: 'ポット 8 + 8 + 1.5 = 17.5bb、残り92bb。92 ÷ 17.5 ≈ 5.3。11.5は3bet額で割った計算です。',
    },
    {
      t: 'quiz',
      q: 'フロップでポット20bb、残りスタック60bb（SPR 3）。ポットサイズのベットにコールした後、ターンのSPRは？',
      options: ['約0.67', '1', '2', '1.5'],
      answer: 0,
      explain: 'ポット60bb、残り40bb。40 ÷ 60 ≈ 0.67。ターンでポットベットすればオールインです。',
    },
    {
      t: 'estimate',
      q: 'UTGが3bbにオープン、COとBBがコール（SBは降りた）。フロップのSPRは？（100bbスタート）',
      min: 0, max: 30, step: 1, unit: '', answer: 10, tolerance: 2,
      explain: 'ポット 3 × 3 + 0.5 = 9.5bb、残り97bb。97 ÷ 9.5 ≈ 10.2。多人数ポットは SPR が小さくなります。',
    },
    { t: 'h', text: 'もう一度：SPR が小さいとき' },
    {
      t: 'play',
      title: '4betポットのトップペア',
      hero: 'CO',
      heroCards: ['Ah', 'Kd'],
      villain: 'BTN',
      steps: [
        { street: 'プリフロップ', pot: 45.5, say: 'CO で 2.5bb オープン、BTN が 8bb に 3bet、あなたが 22bb に 4bet、BTN がコール。残りは78bb、SPR 約1.7。' },
        {
          street: 'フロップ', board: ['Kc', '8s', '3d'],
          pot: 45.5,
          say: 'トップペア・トップキッカー。あなたの番です。',
          q: 'どうする？',
          options: [
            { label: 'ベットしてスタックを入れにいく', good: true, why: 'SPR 1.7 ならトップペアは十分強い手。降りる理由はほぼありません。' },
            { label: 'チェックして、大きく打たれたら降りる', good: false, why: 'ポットに対して残りが少なく、降りると損が大きすぎます。' },
          ],
        },
        { street: 'ターン', board: ['5h'], pot: 201.5, say: 'フロップであなたが 28bb ベット、BTN がオールイン、あなたがコール。ターンは 5。あとは配られるのを待つだけです。' },
      ],
      outro: 'SPR はプリフロップで決まります。小さい SPR ではトップペアでスタックを入れる準備をしておきます。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: '3betポットは約5、4betポットは2未満が目安。フロップを見る前に「この手でスタックを入れてよいか」を考えておきます。',
    },
  ],
};

export default lesson;
