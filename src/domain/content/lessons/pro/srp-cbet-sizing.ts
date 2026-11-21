import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'srp-cbet-sizing',
  blocks: [
    { t: 'h', text: 'まず直感でサイズを選ぶ' },
    {
      t: 'rapid',
      q: 'BTN対BB。このフロップで c-bet するなら？',
      choices: ['小（25〜33%）', '大（66〜75%）'],
      items: [
        { cards: ['As', '7d', '2c'], answer: 0, why: 'BTN に大きなレンジ優位。小さく高頻度が目安です。' },
        { cards: ['Th', '9h', '6c'], answer: 1, why: 'ドローが多く、安くカードを見せたくありません。' },
        { cards: ['Ks', '8d', '3c'], answer: 0, why: '乾いた K ハイは小さいサイズが基本です。' },
        { cards: ['8s', '7s', '6d'], answer: 1, why: 'つながったボードは大きめで手を選びます。' },
        { cards: ['Qd', '8c', '3s'], answer: 0, why: '高いカード1枚の乾いたボードです。' },
        { cards: ['9h', '8h', '7c'], answer: 1, why: 'BB にもエクイティが多いボードです。' },
        { cards: ['Ah', 'Kd', '4c'], answer: 0, why: 'BTN に強い手が集まるボードです。' },
      ],
    },
    { t: 'h', text: 'サイズで相手の必要勝率が変わる' },
    {
      t: 'p',
      text: 'BTN オープン、BB コールでポットは 5.5bb。ベットを動かして、BB に必要な勝率がどう変わるか見てください。',
    },
    {
      t: 'odds',
      pot: 5.5,
      bet: 1.8,
      equity: 20,
      caption: '約33%。BB の必要勝率は約20%。ほとんどのペアやドローが続けられます。',
    },
    {
      t: 'odds',
      pot: 5.5,
      bet: 4.1,
      equity: 20,
      caption: '約75%。必要勝率は約30%。弱いペアやガットショットは降りる場面が増えます。',
    },
    {
      t: 'compare',
      left: {
        title: '小さく打つ',
        board: ['As', '7d', '2c'],
        points: ['BTN にレンジ優位', '相手のドローが少ない', '弱い手も含めて高頻度'],
        verdict: 'good',
      },
      right: {
        title: '大きく打つ',
        board: ['Th', '9h', '6c'],
        points: ['BB にもエクイティが多い', 'ドローから料金を取る', '頻度は下げて手を選ぶ'],
        verdict: 'neutral',
      },
      caption: 'サイズは「どちらのレンジに有利か」で決めます。',
    },
    {
      t: 'estimate',
      q: 'ポット5.5bbに2.75bb（半ポット）。BBの必要勝率は何%？',
      min: 0,
      max: 50,
      step: 1,
      unit: '%',
      answer: 25,
      tolerance: 3,
      explain: '2.75 ÷ (5.5 + 2.75 × 2) = 2.75 ÷ 11 = 25% です。',
    },
    {
      t: 'estimate',
      q: 'ポット5.5bbに4.1bb（約75%）。BBの必要勝率は何%？',
      min: 0,
      max: 50,
      step: 1,
      unit: '%',
      answer: 30,
      tolerance: 3,
      explain: '4.1 ÷ (5.5 + 8.2) ≈ 30% です。サイズが大きいほど相手に求める勝率が上がります。',
    },
    { t: 'h', text: 'もう一度：濡れたボードで打つ' },
    {
      t: 'play',
      title: 'BTN で A♥5♥、T-9-6 ツートーン',
      hero: 'BTN',
      heroCards: ['Ah', '5h'],
      villain: 'BB',
      steps: [
        {
          street: 'プリフロップ',
          pot: 1.5,
          say: 'CO までフォールド。あなたは BTN で **A♥5♥**。',
          q: 'どうする？',
          options: [
            { label: '2.5bb レイズ', good: true, why: 'A5s は BTN の標準オープンです。' },
            { label: 'フォールド', good: false, why: 'スーテッドの A は BTN なら十分です。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Th', '9h', '6c'],
          pot: 5.5,
          say: 'BB がコールしてチェック。フロップは **T♥9♥6♣**。ナッツフラッシュドローです。',
          q: 'どう打つ？',
          options: [
            { label: '約75%（4bb）ベット', good: true, why: '降りればポット獲得、コールされてもドローが残ります。' },
            { label: '約25%（1.4bb）ベット', good: false, why: 'このボードでは BB のドローに安くカードを見せてしまいます。' },
            { label: 'チェック', good: false, why: 'チェックも混ざりますが、この手はベットに回す代表です。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2d'],
          pot: 13.5,
          say: 'BB がコール。ターンは **2♦**。まだドローのままです。',
        },
      ],
      outro: '濡れたボードでは大きく打ち、その分だけ頻度を下げます。ナッツドローはその中心です。',
    },
  ],
};

export default lesson;
