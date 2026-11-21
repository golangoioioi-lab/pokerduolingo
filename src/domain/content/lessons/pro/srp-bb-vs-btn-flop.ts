import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'srp-bb-vs-btn-flop',
  blocks: [
    { t: 'h', text: 'BB で1ハンド守ってみる' },
    {
      t: 'play',
      title: 'BB で Q♥9♥、Q-7-3',
      hero: 'BB',
      heroCards: ['Qh', '9h'],
      villain: 'BTN',
      steps: [
        {
          street: 'フロップ',
          board: ['Qc', '7d', '3s'],
          pot: 5.5,
          say: 'BTN オープンに BB でコール。フロップは **Q♣7♦3♠**。トップペアです。あなたが先に行動します。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: 'BTN 有利のボードでは、BB はほぼ全部チェックから始めます。' },
            { label: '3bb ドンクベット', good: false, why: 'BTN の c-bet を受けるほうが、相手の弱い手から取れます。' },
          ],
        },
        {
          street: 'フロップ',
          pot: 5.5,
          say: 'BTN が 1.8bb の c-bet。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'トップペアは十分強く、BTN のブラフも残せます。' },
            { label: 'チェックレイズ', good: false, why: 'キッカーが弱く、弱い手が降りて強い手だけ残ります。' },
            { label: 'フォールド', good: false, why: '必要勝率約20%に対して強すぎます。' },
          ],
        },
        {
          street: 'ターン',
          board: ['5h'],
          pot: 9.1,
          say: 'ターンは **5♥**。あなたがチェック、BTN もチェックバック。',
        },
        {
          street: 'リバー',
          board: ['2d'],
          pot: 9.1,
          say: 'リバーは **2♦**。あなたが先に行動します。',
          q: 'どうする？',
          options: [
            { label: '約半ポット（4.5bb）ベット', good: true, why: 'BTN のチェックバックは弱め。7x や弱い Q から取れます（プローブ）。' },
            { label: 'チェック', good: false, why: '悪くはありませんが、取れる価値を逃しやすい場面です。' },
          ],
        },
      ],
      outro: 'BB はチェックから始めて守り、BTN が弱さを見せたら自分から打ちます。',
    },
    { t: 'h', text: 'ボードで動きが変わる' },
    {
      t: 'compare',
      left: {
        title: 'BTN 有利',
        board: ['As', '7d', '2c'],
        points: ['BB はほぼ100%チェック', 'c-bet には広くコール', 'チェックレイズは少なめ'],
        verdict: 'neutral',
      },
      right: {
        title: 'BB 有利',
        board: ['7h', '6h', '5c'],
        points: ['チェックレイズが増える', '小さなリードを少し混ぜることも（数%〜1割、目安）'],
        verdict: 'good',
      },
    },
    {
      t: 'odds',
      pot: 5.5,
      bet: 1.8,
      equity: 25,
      caption: '1.8bb の c-bet。BB の必要勝率は約20%。ガットショットやバックドアも含めて広く守れます。',
    },
    {
      t: 'table',
      head: ['手の種類', '小さい c-bet への対応'],
      rows: [
        ['セット以上・コンボドロー', 'チェックレイズ（混合）'],
        ['トップペア・ミドルペア', 'コール'],
        ['ドロー・ガットショット', 'コール、一部レイズ'],
        ['弱い Ax・バックドア', 'コール（大きいサイズには降りる）'],
        ['エア', 'フォールド'],
      ],
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 5.5, stack: 97.5 },
        { label: '1.8bet・コール', pot: 9.1, stack: 95.7 },
        { label: 'ターン 4.5bet・コール', pot: 18.1, stack: 91.2 },
        { label: 'リバー 11bet・コール', pot: 40.1, stack: 80.2 },
      ],
      caption: '3ストリート守ると SPR は約2まで下がります。守る手は選ぶ必要があります。',
    },
    {
      t: 'quiz',
      q: '7♥6♥5♣で、BB がチェックレイズのバリューに回せる手は？',
      board: ['7h', '6h', '5c'],
      options: ['9♦8♦', 'K♦J♠', 'A♠Q♦', 'T♦3♣'],
      optionCards: [['9d', '8d'], ['Kd', 'Js'], ['As', 'Qd'], ['Td', '3c']],
      answer: 0,
      explain: '5-6-7-8-9 のストレート完成です。BB に有利なボードでは、強い手でチェックレイズして価値を取ります。',
    },
    {
      t: 'estimate',
      q: 'BB が BTN の c-bet にチェックレイズする頻度は、全体で何%くらい？',
      min: 0,
      max: 40,
      step: 1,
      unit: '%',
      answer: 12,
      tolerance: 4,
      explain: '全体で10〜13%が目安です。動きのあるボードで増え、乾いた高いボードで減ります。',
    },
    { t: 'h', text: 'もう一度：どちらに有利？' },
    {
      t: 'rapid',
      q: 'BTN対BB。このフロップはどちらに有利？',
      choices: ['BTN 有利', 'BB 有利'],
      items: [
        { cards: ['As', '7d', '2c'], answer: 0, why: '強い A は BTN に多くあります。' },
        { cards: ['7h', '6h', '5c'], answer: 1, why: 'BB のコネクターや小さなペアがよく当たります。' },
        { cards: ['Ks', 'Kd', '5c'], answer: 0, why: '高いペアボードは BTN 有利です。' },
        { cards: ['6s', '5d', '4d'], answer: 1, why: '低くつながったボードは BB 側です。' },
        { cards: ['Qc', '7d', '3s'], answer: 0, why: 'Q ハイ・ドライは BTN が c-bet しやすいボードです。' },
        { cards: ['5s', '4s', '3d'], answer: 1, why: 'ストレートや2ペアが BB に多くあります。' },
        { cards: ['Ah', 'Kd', '4c'], answer: 0, why: 'AK は BTN のレンジに多いカードです。' },
      ],
    },
  ],
};

export default lesson;
