import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-18',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。3ベットポットで A が落ちたとき、TT で「どこまで追い、どこで降りるか」を見ます。' },
    {
      t: 'play',
      title: 'CO で T♠T♣',
      hero: 'CO',
      heroCards: ['Ts', 'Tc'],
      villain: 'BB',
      steps: [
        {
          street: 'プリフロップ', pot: 14,
          say: 'あなたは CO で **T♠T♣** を 2.5bb にオープン。BB が 11bb に 3ベットしてきました。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: '3ベットには AJs・KQs・A5s も含まれ、TT は十分戦えます。' },
            { label: 'コール', good: true, why: 'ポジションもあり、コールが基本です。' },
            { label: '25bb に 4ベット', good: false, why: '弱い手が降りて、TT を上回る手だけが残ります。' },
          ],
        },
        {
          street: 'フロップ', board: ['As', '8d', '4c'], pot: 29.5,
          say: 'A が落ちました。BB が 7bb（約31%）をベット。A ハイのボードでは、KQ・KJ のような外れた手も小さく打ってきます。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: '必要勝率は約19%。小さいベットには TT が勝っている手が多く含まれます。' },
            { label: 'コール', good: true, why: '外れた手を捕まえつつ、ターンの行動を見ます。' },
            { label: '22bb にレイズ', good: false, why: '降りるのは負けている手で、Ax にだけコールされます。' },
          ],
        },
        {
          street: 'ターン', board: ['6h'], pot: 60.5,
          say: 'ターンは **6♥**。BB が 24bb（約66%）をベット。大きな2発目は AK・AQ・セット・75 が中心です。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: true, why: '勝てる手はほとんど残らず、改善も残り2枚の T だけです。' },
            { label: 'コール', good: false, why: '必要勝率 28% に対し、勝率は 20% 未満。リバーでも打たれます。' },
            { label: 'オールイン', good: false, why: '降りるのは負けている手で、コールされるのは勝っている手だけです。' },
          ],
        },
      ],
      outro: '失ったのは 11 + 7 = 18bb。小さい1発目から大きい2発目に変わったら、レンジは強い手に絞られています。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'odds', pot: 36.5, bet: 24, equity: 18, caption: '必要勝率は約28%。BB の2発目のレンジに対する TT の勝率は、目安で 20% を下回ります。' },
    {
      t: 'estimate', q: 'ターンのコールに必要な勝率は約何%？',
      hand: ['Ts', 'Tc'], board: ['As', '8d', '4c', '6h'],
      min: 0, max: 60, step: 1, unit: '%', answer: 28, tolerance: 6,
      explain: 'コール後のポットは 36.5 + 24 + 24 = 84.5bb。24 ÷ 84.5 ≒ 28% です。',
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 22.5, actions: ['CO（あなた）2.5bb オープン', 'BB 11bb に 3ベット', 'あなた コール'] },
        { street: 'フロップ', board: ['As', '8d', '4c'], pot: 22.5, actions: ['BB 7bb ベット', 'あなた コール'] },
        { street: 'ターン', board: ['6h'], pot: 36.5, actions: ['BB 24bb ベット', 'あなた フォールド'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    { t: 'h', text: 'この手ならどうする？' },
    {
      t: 'rapid',
      q: '同じターン。BB の 24bb の2発目に、この手ならどうする？',
      choices: ['コール', 'フォールド'],
      items: [
        { cards: ['Jh', 'Jd'], board: ['As', '8d', '4c', '6h'], answer: 1, why: 'TT と同じく A の下のペアです。' },
        { cards: ['8h', '8c'], board: ['As', '8d', '4c', '6h'], answer: 0, why: 'セット。BB の強い A に勝っています。' },
        { cards: ['Ad', 'Kc'], board: ['As', '8d', '4c', '6h'], answer: 0, why: 'トップペア・トップキッカー。2発目の A の多くに勝つか引き分けです。' },
        { cards: ['9h', '9c'], board: ['As', '8d', '4c', '6h'], answer: 1, why: '勝てる手はほとんど残っていません。' },
        { cards: ['6s', '6d'], board: ['As', '8d', '4c', '6h'], answer: 0, why: 'ターンでセット。ここから大きく取れます。' },
        { cards: ['Qh', 'Qd'], board: ['As', '8d', '4c', '6h'], answer: 1, why: 'QQ でも、2発目のレンジにはほとんど勝てません。' },
        { cards: ['7h', '7c'], board: ['As', '8d', '4c', '6h'], answer: 1, why: 'ペアは A の下で、ストレートは 5 のガットショットだけです。' },
      ],
    },
    { t: 'tip', text: 'フロップのコールは、相手の外れた手を捕まえるため。ターンで大きく打ち続けられたら、その手の多くはもう残っていません。' },
  ],
};

export default lesson;
