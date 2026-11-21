import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'srp-facing-cbet-call',
  blocks: [
    { t: 'h', text: 'c-bet を受けたら、続ける？' },
    {
      t: 'rapid',
      q: 'BB でコール。BTN が半ポットの c-bet。この手は？',
      choices: ['続ける', 'フォールド'],
      items: [
        { cards: ['Kh', 'Td'], board: ['Ks', '7d', '2c'], answer: 0, why: 'トップペアは明確に続けます。' },
        { cards: ['Qh', 'Jd'], board: ['Ks', '7d', '2c'], answer: 1, why: 'ペアも有力なドローもないエアです。' },
        { cards: ['Ks', 'Ts'], board: ['Qs', '8s', '3d'], answer: 0, why: 'フラッシュドローは必要勝率を超えます。' },
        { cards: ['9h', '8h'], board: ['Td', '7c', '2s'], answer: 0, why: 'OESD（アウト8枚）は続けます。' },
        { cards: ['4d', '3d'], board: ['Kc', '9h', '8s'], answer: 1, why: '何も当たらず、ドローもありません。' },
        { cards: ['7c', '7h'], board: ['Ks', '7d', '2c'], answer: 0, why: 'セット。コールかレイズで続けます。' },
        { cards: ['Jc', '9c'], board: ['Ah', '8d', '4s'], answer: 1, why: 'A ハイのボードで何もない手です。' },
      ],
    },
    { t: 'h', text: '物差しは必要勝率' },
    {
      t: 'p',
      text: 'ポット 5.5bb に半ポット（2.75bb）なら、必要勝率は 25%。フラッシュドローはリバーまでに約35%完成するので、コールで足ります。',
    },
    {
      t: 'odds',
      pot: 5.5,
      bet: 2.75,
      equity: 35,
      caption: '半ポットの c-bet とフラッシュドロー。必要勝率 25% に対し約35%（目安）。',
    },
    {
      t: 'table',
      head: ['手の種類', '基本の選択'],
      rows: [
        ['セット以上', 'コールまたはレイズ'],
        ['トップペア・強いミドルペア', 'コール'],
        ['フラッシュドロー・OESD', 'コール、一部レイズ'],
        ['弱いペア・ガットショット', '小さいサイズならコール'],
        ['エア', '基本フォールド'],
      ],
    },
    {
      t: 'tree',
      root: 'ポット5.5bb、BTNが2.75bbをc-bet。BBはフラッシュドロー',
      options: [
        {
          label: 'コール',
          outcomes: [
            { label: 'ターンまでに完成して勝つ', prob: 0.2, value: 14 },
            { label: '完成せず諦める', prob: 0.8, value: -2.75 },
          ],
          note: '単純な例。インプライドオッズは含まない',
        },
        { label: 'フォールド', ev: 0 },
      ],
      caption: '数値は例です。リバーで払ってもらえる分も加わるので、ドローは広く続けられます。',
    },
    {
      t: 'p',
      text: '小さいサイズほど広く守ります。1/3（1.8bb）なら**MDF は約75%**。これより大きく降りると、BTN は何でも打つだけで得をします。',
    },
    {
      t: 'estimate',
      q: 'ポット5.5bbに1.8bbのc-bet。MDFは何%？',
      min: 40,
      max: 100,
      step: 1,
      unit: '%',
      answer: 75,
      tolerance: 5,
      explain: '5.5 ÷ (5.5 + 1.8) = 5.5 ÷ 7.3 ≈ 75% です。',
    },
    { t: 'h', text: 'もう一度：ドローで守る' },
    {
      t: 'play',
      title: 'BB で K♠T♠、フラッシュドロー',
      hero: 'BB',
      heroCards: ['Ks', 'Ts'],
      villain: 'BTN',
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'BTN が 2.5bb オープン、SB はフォールド。あなたは BB で **K♠T♠**。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: '強いスーテッドで、BB なら守る手です。3bet も一部あります。' },
            { label: 'フォールド', good: false, why: 'BB で KTs を降りるのは守りが狭すぎます。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Qs', '8s', '3d'],
          pot: 5.5,
          say: 'フロップは **Q♠8♠3♦**。フラッシュドロー。あなたがチェックし、BTN が 2.75bb ベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: '必要勝率 25% に対し、エクイティは十分あります。' },
            { label: 'チェックレイズ', good: true, why: 'これも成り立ちます。セミブラフの候補です（僅差）。' },
            { label: 'フォールド', good: false, why: '強いドローを捨てるのは守りすぎの逆です。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2h'],
          pot: 11,
          say: 'ターンは **2♥**。あなたも BTN もチェック。',
        },
        {
          street: 'リバー',
          board: ['4s'],
          pot: 11,
          say: 'リバーは **4♠**。フラッシュ完成。あなたが先に行動します。',
          q: 'どうする？',
          options: [
            { label: '約2/3ポット（7bb）ベット', good: true, why: 'BTN がチェックバックした Qx や 8x から価値を取ります。' },
            { label: 'チェック', good: false, why: 'BTN はターンで弱さを見せたので、自分で打つほうが取れます。' },
          ],
        },
      ],
      outro: 'ドローは必要勝率を見て続け、完成したら自分から価値を取りに行きます。',
    },
  ],
};

export default lesson;
