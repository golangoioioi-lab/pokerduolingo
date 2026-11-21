import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'multiway-pots',
  blocks: [
    { t: 'h', text: 'まず判断してみる' },
    {
      t: 'rapid',
      q: 'あなたは CO でオープン、BTN と BB がコールした3人のポット。BB はチェック。ベットする？',
      choices: ['ベット', 'チェック'],
      items: [
        { cards: ['Kc', 'Ks'], board: ['Kd', '8c', '3h'], answer: 0 },
        { cards: ['Ad', 'Jc'], board: ['Kd', '8c', '3h'], answer: 1, why: '2人とも降りないとブラフは成功しません。A ハイはチェックします。' },
        { cards: ['Ah', 'Ks'], board: ['Kd', '8c', '3h'], answer: 0, why: 'トップペア・トップキッカーは多人数でもバリューが取れます。' },
        { cards: ['Qs', 'Js'], board: ['Kd', '8c', '3h'], answer: 1, why: 'バックドアしかない手のブラフは控えます。' },
        { cards: ['Ah', '5h'], board: ['9h', '8h', '2c'], answer: 0, why: 'ナッツフラッシュドローは、セミブラフで打てる強いドローです。' },
        { cards: ['Kd', 'Qc'], board: ['9h', '8h', '2c'], answer: 1 },
        { cards: ['Qh', 'Qd'], board: ['Qs', '7d', '2c'], answer: 0 },
        { cards: ['5s', '4s'], board: ['Qs', '7d', '2c'], answer: 1 },
        { cards: ['8s', '8d'], board: ['Kd', '8c', '3h'], answer: 0 },
        { cards: ['7h', '6h'], board: ['Kd', '8c', '3h'], answer: 1 },
      ],
    },
    { t: 'p', text: 'フロップに3人以上残るのが**マルチウェイポット**です。相手が増えるほど、誰かがボードに当たっています。' },
    { t: 'h', text: '人数が増えると手は弱くなる' },
    {
      t: 'equity',
      players: [{ label: 'AA', cards: ['As', 'Ah'], pct: 85 }, { label: 'ランダムな手', pct: 15 }],
      caption: 'ヘッズアップなら AA は約85%（目安）。',
    },
    {
      t: 'equity',
      players: [
        { label: 'AA', cards: ['As', 'Ah'], pct: 64 },
        { label: 'ランダム1', pct: 12 },
        { label: 'ランダム2', pct: 12 },
        { label: 'ランダム3', pct: 12 },
      ],
      caption: '相手が3人なら約64%（目安）。',
    },
    { t: 'p', text: 'ヘッズアップなら十分強いトップペアも、多人数では中くらいの手です。バリューは厳しく、ベットするなら小さめにします。' },
    {
      t: 'quiz',
      q: '3人のポット。K♦8♣3♥ のフロップで、CO のあなたはこの手。どうする？',
      hand: ['Kc', '9d'],
      board: ['Kd', '8c', '3h'],
      options: ['大きくバリューベット', '小さめにベットするか、チェック', 'オールイン'],
      answer: 1,
      explain: '2人いると AK・KQ・セットに当たる回数が増えます。弱いキッカーならポットを抑えます。',
    },
    { t: 'h', text: 'ブラフは全員が降りないと通らない' },
    {
      t: 'tree',
      root: 'ポット 100bb に 50bb でブラフ（1人あたり 50% 降りる）',
      options: [
        {
          label: 'ヘッズアップ',
          outcomes: [{ label: '降りる', prob: 0.5, value: 100 }, { label: 'コール', prob: 0.5, value: -50 }],
        },
        {
          label: '2人相手（両方降りる 25%）',
          outcomes: [{ label: '全員降りる', prob: 0.25, value: 100 }, { label: 'どちらかがコール', prob: 0.75, value: -50 }],
        },
      ],
      caption: '同じブラフが、相手が増えると得から損に変わります（独立と仮定した単純計算）。',
    },
    {
      t: 'estimate',
      q: '2人の相手がそれぞれ 40% でベットに降りる（独立と仮定）。両方とも降りる確率は？',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 16,
      tolerance: 5,
      explain: '0.4 × 0.4 = 0.16 で 16% です。',
    },
    { t: 'h', text: 'もう一度：3人のポットを最後まで' },
    {
      t: 'play',
      title: 'CO で AJ、3人のポット',
      hero: 'CO',
      heroCards: ['Ah', 'Jd'],
      villain: 'BTN',
      villainCards: ['8d', '7d'],
      steps: [
        { street: 'プリフロップ', pot: 8, say: 'あなたは CO で **A♥J♦** を 2.5bb オープン。BTN と BB がコール。' },
        {
          street: 'フロップ',
          board: ['Kd', '8c', '3h'],
          pot: 8,
          say: 'フロップは **K♦8♣3♥**。BB はチェック。',
          q: 'A ハイ。どうする？',
          options: [
            { label: '4bb でブラフ', good: false, why: '2人とも降りる確率は低く、ブラフは損になりやすいです。' },
            { label: 'チェック', good: true, why: '多人数ではブラフを減らし、無料でターンを見ます。' },
          ],
        },
        {
          street: 'ターン',
          board: ['As'],
          pot: 8,
          say: 'BTN もチェック。ターンは **A♠**。トップペアになりました。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: '2人ともフロップで弱さを見せています。取りにいく場面です。' },
            { label: '4bb ベット', good: true, why: 'K や 8 のペアから払ってもらうバリューベットです。' },
          ],
        },
        { street: 'リバー', board: ['2c'], pot: 16, say: 'BB はフォールド、BTN がコール。リバーは **2♣**。両者チェック。' },
      ],
      outro: '多人数ではブラフを控え、手ができたら打ちます。',
    },
    {
      t: 'estimate',
      q: '3人の相手がそれぞれ 50% でベットに降りる（独立と仮定）。全員が降りる確率は？',
      min: 0,
      max: 60,
      step: 0.5,
      unit: '%',
      answer: 12.5,
      tolerance: 4,
      explain: '0.5 × 0.5 × 0.5 = 0.125 で 12.5% です。',
    },
  ],
};

export default lesson;
