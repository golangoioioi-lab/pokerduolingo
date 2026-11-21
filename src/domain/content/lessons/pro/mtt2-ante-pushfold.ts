import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'mtt2-ante-pushfold',
  blocks: [
    { t: 'h', text: '10bb の BTN でやってみる' },
    {
      t: 'play',
      title: 'BBアンティあり・10bb の A5o',
      hero: 'BTN',
      heroCards: ['Ad', '5c'],
      villain: 'BB',
      villainCards: ['Kh', 'Qd'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 2.5,
          say: 'ブラインド0.5/1bb、BBアンティ1bb。CO まで降りて、あなたは BTN で10bb。ポットはすでに2.5bb あります。',
          q: 'A5o でどうする？',
          options: [
            { label: 'オールイン', good: true, why: '後ろは2人だけ。降ろせば2.5bb、コールされても A5o はかなり勝てます。' },
            { label: 'フォールドして良い手を待つ', good: false, why: '待つ間にブラインドで削られ、降ろす力を失います。' },
          ],
        },
        { street: 'フロップ', board: ['5h', '9c', '2s'], pot: 21.5, say: 'SB は降り、BB が **K♥Q♦** でコール。フロップで5のペアができました。' },
        { street: 'ターン', board: ['Jd'], pot: 21.5, say: 'ターンは J。' },
        { street: 'リバー', board: ['7h'], pot: 21.5, say: 'リバーは 7。' },
      ],
      outro: 'A5o は KQo に対して約6割勝てます。コールされても十分戦え、降ろせば2.5bb。これがアンティありのオールインです。',
    },
    { t: 'h', text: 'アンティでポットが1.7倍' },
    { t: 'p', text: 'BBアンティがあると、最初のポットは 0.5 + 1 + 1 = 2.5bb。アンティなしの1.5bb の約1.7倍です。コールされたら必ず負ける最悪の場合でも、10bb のオールインは80%降りれば損をしません。' },
    {
      t: 'compare',
      left: { title: 'アンティなし', points: ['ポット 1.5bb', '必要な降りる率 約87%（10 ÷ 11.5）'], verdict: 'neutral' },
      right: { title: 'BBアンティ 1bb', points: ['ポット 2.5bb', '必要な降りる率 80%（10 ÷ 12.5）'], verdict: 'good' },
      caption: 'コールされたら必ず負けると仮定した、最も厳しい条件での比較',
    },
    {
      t: 'estimate',
      q: 'BBアンティ 1bb で15bb オールイン。コールされたら必ず負けるなら、損をしない降りる確率は？',
      min: 50, max: 100, step: 1, unit: '%', answer: 86, tolerance: 8,
      explain: '15 ÷ (15 + 2.5) = 15 ÷ 17.5 ≒ 86% です。スタックが深いほど、必要な降りる確率は上がります。',
    },
    { t: 'h', text: 'コールされても勝つことがある' },
    {
      t: 'tree',
      root: 'BTNで10bb。降りる確率75%、コール時の勝率35%（フォールドとの差、bb）',
      options: [
        { label: 'オールイン（BBアンティあり）', outcomes: [{ label: '全員が降りる', prob: 0.75, value: 2.5 }, { label: 'コールされて勝つ', prob: 0.0875, value: 11.5 }, { label: 'コールされて負ける', prob: 0.1625, value: -10 }] },
        { label: 'オールイン（アンティなし）', outcomes: [{ label: '全員が降りる', prob: 0.75, value: 1.5 }, { label: 'コールされて勝つ', prob: 0.0875, value: 10.5 }, { label: 'コールされて負ける', prob: 0.1625, value: -10 }] },
        { label: 'フォールド', ev: 0 },
      ],
      caption: 'アンティありは約+1.26bb、なしは約+0.42bb。同じ手でも利益は約3倍',
    },
    {
      t: 'estimate',
      q: 'アンティありの例で、降りる確率が65%に下がると（勝率35%は同じ）、オールインのEVは？',
      min: -3, max: 4, step: 0.1, unit: 'bb', answer: 0.8, tolerance: 0.7,
      explain: 'コールされる35%のうち勝ち0.1225、負け0.2275。0.65 × 2.5 + 0.1225 × 11.5 − 0.2275 × 10 ≒ +0.76bb。減りますが、まだプラスです。',
    },
    {
      t: 'table',
      head: ['有効スタック', 'オープンの形'],
      rows: [
        ['〜12bb', 'オールインかフォールド。アンティありでは広めに'],
        ['12〜20bb', 'オールイン、または小さいレイズ'],
        ['20〜25bb', 'リショーブ（3betオールイン）が主な武器'],
      ],
    },
    { t: 'warn', text: 'ここまでの計算はチップEV です。バブルや FT では ICM の補正が上に乗ります。' },
    { t: 'h', text: 'オールインかフォールドか' },
    {
      t: 'rapid',
      q: 'BBアンティあり・10bb・BTN。全員フォールドで回ってきた（バブルではない）。',
      choices: ['オールイン', 'フォールド'],
      items: [
        { cards: ['Kh', '9d'], answer: 0, why: 'K9o は BTN 10bb で十分オールインできます。' },
        { cards: ['7c', '2d'], answer: 1, why: '最弱の手。コールされると約3割しか勝てません。' },
        { cards: ['6h', '6d'], answer: 0, why: 'ペアはすべてオールインです。' },
        { cards: ['Qh', 'Th'], answer: 0, why: 'QTs は広く勝負できます。' },
        { cards: ['3c', '2d'], answer: 1, why: '最も弱い部類で、降ります。' },
        { cards: ['Ac', '2d'], answer: 0, why: 'A があれば BTN 10bb ではオールインです。' },
        { cards: ['6s', '2d'], answer: 1, why: 'BTN でも広げすぎです。' },
        { cards: ['Jc', '9c'], answer: 0, why: 'J9s はオールインのレンジに入ります。' },
        { cards: ['4c', '2h'], answer: 1, why: '高いカードもつながりもなく、降ります。' },
        { cards: ['Ks', '7s'], answer: 0, why: 'K7s は BTN 10bb で押せる手です。' },
      ],
    },
    { t: 'tip', text: '10bb 前後になったら「降ろすだけで2.5bb」と考えます。削られるスタックを守るより、取りにいく回数を増やします。' },
  ],
};

export default lesson;
