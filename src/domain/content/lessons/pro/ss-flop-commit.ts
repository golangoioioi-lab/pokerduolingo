import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'ss-flop-commit',
  blocks: [
    { t: 'h', text: 'SPR 2のフロップ' },
    { t: 'p', text: 'スタック約40bbの3betポット。フロップで「最後まで行く」か「降りる」かを決めます。' },
    {
      t: 'play',
      title: 'BBで5♥4♥、3betポット',
      hero: 'BB',
      heroCards: ['5h', '4h'],
      villain: 'BTN',
      villainCards: ['As', 'Js'],
      steps: [
        {
          street: 'フロップ',
          board: ['Jh', '7h', '2c'],
          pot: 16.5,
          say: 'BTN のオープンにあなたが3bet、BTN がコール。ポット16.5bb、残り32.5bb。フロップでフラッシュドローです。',
          q: '先に行動します。どうする？',
          options: [
            { label: 'チェック', good: false, why: '相手のオールインにコールしても約−0.3bb。先に入れる道を捨てています。' },
            { label: 'オールイン', good: true, why: '相手が降りる分の利益が加わり、約+6.4bbになります。' },
            { label: '5bb ベット', good: false, why: 'オールインを返されると、残りを入れるか捨てるかになります。最初から全部入れる方が単純で得です。' },
          ],
        },
        { street: 'ターン', board: ['9s'], pot: 81.5, say: 'BTN は **A♠J♠** でコール。ターンは **9♠**。' },
        { street: 'リバー', board: ['3h'], pot: 81.5, say: 'リバーは **3♥**。' },
      ],
      outro: '今回はフラッシュが完成しました。外れても、先に入れる判断は変わりません。',
    },
    { t: 'h', text: '先に入れると何が違うか' },
    {
      t: 'equity',
      players: [
        { label: '5♥4♥', cards: ['5h', '4h'], pct: 39.5 },
        { label: 'A♠J♠', cards: ['As', 'Js'], pct: 60.5 },
      ],
      board: ['Jh', '7h', '2c'],
      caption: 'ターンとリバーの2枚を見たときの勝率',
    },
    {
      t: 'tree',
      root: '5♥4♥でフロップ（ポット16.5bb、残り32.5bb）',
      options: [
        { label: 'チェック→相手のオールインに降りる', ev: 0 },
        {
          label: 'チェック→相手のオールインにコール',
          outcomes: [
            { label: '勝つ', prob: 0.395, value: 49 },
            { label: '負ける', prob: 0.605, value: -32.5 },
          ],
        },
        {
          label: '自分から先にオールイン',
          outcomes: [
            { label: '相手がフォールド', prob: 0.4, value: 16.5 },
            { label: 'コール→勝つ', prob: 0.237, value: 49 },
            { label: 'コール→負ける', prob: 0.363, value: -32.5 },
          ],
          note: 'コールされる60%のうち39.5%で勝つ',
        },
      ],
      caption: '相手のフォールド率40%は目安。違いはフォールドエクイティ',
    },
    {
      t: 'estimate',
      q: 'ポット16.5bbに32.5bbのオールイン。コールに必要な勝率は？',
      hand: ['5h', '4h'],
      board: ['Jh', '7h', '2c'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 40,
      tolerance: 8,
      explain: '32.5 ÷ (16.5 + 65) = 32.5 ÷ 81.5 ≈ 40% です。勝率39.5%とほぼ同じで、コールに回ると利益はほとんどありません。',
    },
    {
      t: 'outs',
      q: 'フラッシュになるカードを全部タップ',
      hand: ['5h', '4h'],
      board: ['Jh', '7h', '2c'],
      target: 'フラッシュ',
      explain: 'ハートは13枚。見えている4枚を引いて9枚。2回引けるので約35%でフラッシュになります。',
    },
    { t: 'h', text: 'SPRとコミットの目安' },
    {
      t: 'table',
      head: ['フロップのSPR', 'オールインしてよい手の目安'],
      rows: [
        ['2未満', 'トップペア以上、強いドロー'],
        ['2〜4', 'トップペアの良いキッカー以上、強いドロー'],
        ['4〜6', '2ペア以上。トップペアは慎重に'],
      ],
    },
    {
      t: 'rapid',
      q: 'フロップ J♥7♥2♣。このSPRで、この手は？',
      choices: ['最後まで行く', '慎重に'],
      items: [
        { cards: ['Jd', '4d'], board: ['Jh', '7h', '2c'], text: 'SPR 1.5', answer: 0, why: 'SPR 2未満ならトップペアで最後まで行きます。' },
        { cards: ['Ah', 'Jc'], board: ['Jh', '7h', '2c'], text: 'SPR 3', answer: 0, why: 'トップペア・良いキッカーなら SPR 2〜4 で行けます。' },
        { cards: ['Jd', '4d'], board: ['Jh', '7h', '2c'], text: 'SPR 5', answer: 1, why: 'SPR 4〜6 では、トップペアは慎重に扱います。' },
        { cards: ['7d', '7c'], board: ['Jh', '7h', '2c'], text: 'SPR 5', answer: 0, why: 'セットは SPR 5 でも最後まで行けます。' },
        { cards: ['5h', '4h'], board: ['Jh', '7h', '2c'], text: 'SPR 2', answer: 0, why: '強いドローは先に入れます。' },
        { cards: ['Td', '9d'], board: ['Jh', '7h', '2c'], text: 'SPR 1.5', answer: 1, why: '8 だけを待つガットショットで、強いドローではありません。' },
        { cards: ['As', 'Jd'], board: ['Jh', '7h', '2c'], text: 'SPR 5', answer: 1, why: 'トップペア・トップキッカーでも SPR 5 では慎重に。' },
      ],
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'SPRが小さいときは、フロップで「最後まで行く」か「降りる」かを決めます。ドローは先に入れてフォールドエクイティを使います。',
    },
  ],
};

export default lesson;
