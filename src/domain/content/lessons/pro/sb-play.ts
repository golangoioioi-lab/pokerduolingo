import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'sb-play',
  blocks: [
    { t: 'h', text: 'まず判断してみる' },
    {
      t: 'rapid',
      q: 'BTN が 2.5bb でオープン。SB のあなたは3betする？（コールはしない方針）',
      choices: ['3bet', 'フォールド'],
      items: [
        { cards: ['As', '9s'], answer: 0, why: 'A8s 以上のスーテッドは3betレンジです。' },
        { cards: ['8d', '3s'], answer: 1 },
        { cards: ['Qs', 'Qd'], answer: 0 },
        { cards: ['Ac', '5c'], answer: 0, why: 'ブロッカー付きのブラフ3betです。' },
        { cards: ['Kd', '9c'], answer: 1, why: 'K9o は3betにもコールにも向きません。' },
        { cards: ['8h', '8c'], answer: 0 },
        { cards: ['Jh', '7h'], answer: 1, why: 'SB では、コールで見たい手も降ろします。' },
        { cards: ['Kh', 'Qd'], answer: 0 },
        { cards: ['6s', '5s'], answer: 1 },
        { cards: ['Ad', 'Jc'], answer: 0 },
      ],
    },
    { t: 'p', text: 'SB はフロップ以降、**すべてのストリートで最初に行動**します。多くのプレイヤーにとって最も負ける席なので、プレイをシンプルにします。' },
    { t: 'h', text: 'オープンされたら3betかフォールド' },
    {
      t: 'seats',
      seats: [
        { pos: 'BTN', bet: 2.5, action: 'オープン' },
        { pos: 'SB', hero: true, bet: 0.5, action: '3bet かフォールド' },
        { pos: 'BB', bet: 1, action: '後ろに残っている' },
      ],
      pot: 4,
      caption: 'コールすると、後ろの BB に安く参加されたりスクイーズされたりします。',
    },
    {
      t: 'compare',
      left: { title: 'コール', points: ['ポジションがないまま戦う', 'BB に参加・スクイーズされる'], verdict: 'bad' },
      right: { title: '3bet かフォールド', points: ['主導権を取ってヘッズアップに', '弱い手は降りて損を防ぐ'], verdict: 'good' },
    },
    { t: 'range', spot: 'sb-vs-btn', caption: 'SB vs BTN。コールはほぼなく、3betかフォールドです。' },
    { t: 'h', text: '回ってきたら広くオープン' },
    { t: 'p', text: '全員フォールドなら BB と1対1です。広くオープンし、サイズは約3bb とやや大きめにします。' },
    { t: 'range', spot: 'rfi-sb', caption: 'SB オープン（レイズかフォールド）。' },
    {
      t: 'estimate',
      q: '全員フォールドで SB が 3bb にオープン。BB がコールするのに必要な勝率は？',
      min: 10,
      max: 50,
      step: 1,
      unit: '%',
      answer: 33,
      tolerance: 4,
      explain: 'コール額 2bb、コール後のポット 6bb。2 ÷ 6 ≈ 33% です。2.5bb オープンの約27%より高くなります。',
    },
    { t: 'tip', text: 'ソルバーはリンプを混ぜることもありますが、まずは「レイズかフォールド」で覚えるとミスが減ります。' },
    { t: 'h', text: 'もう一度：SB の1ハンド' },
    {
      t: 'play',
      title: 'BTN のオープンに SB で A9s',
      hero: 'SB',
      heroCards: ['As', '9s'],
      villain: 'BTN',
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'BTN が 2.5bb でオープン。あなたは SB で **A♠9♠**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'A9s は3betレンジに入る強さです。' },
            { label: 'コール', good: false, why: 'OOP で BB にも参加されやすく、主導権もありません。' },
            { label: '11bb に3bet', good: true, why: '主導権を取り、ヘッズアップにします。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Ad', '7c', '3h'],
          pot: 23,
          say: 'BB はフォールド、BTN がコール。フロップは **A♦7♣3♥**。あなたから。',
          q: 'トップペア。どうする？',
          options: [
            { label: 'チェック', good: false, why: 'チェックもありますが、乾いたボードでは小さく打つ方が取りやすいです（接戦）。' },
            { label: '7bb ベット', good: true, why: '3betポットの乾いたボードは、小さく打って相手の下のペアから取ります。' },
            { label: 'オールイン', good: false, why: '大きすぎて、負けている手にしか払われません。' },
          ],
        },
      ],
      outro: 'SB では3betで主導権を取り、ヘッズアップで先に打てる形にします。',
    },
    {
      t: 'quiz',
      q: 'BTN が 2.5bb でオープン。SB でフォールドが基本の手はどれ？',
      options: ['AKs', 'QQ', 'A5s', '83o'],
      optionCards: [['Ah', 'Kh'], ['Qs', 'Qd'], ['Ac', '5c'], ['8d', '3s']],
      answer: 3,
      explain: '83o は3betにも弱く、コールしてもポジションがありません。A5s はブラフ3betに使えます。',
    },
  ],
};

export default lesson;
