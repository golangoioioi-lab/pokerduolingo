import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'broadway-hands',
  blocks: [
    { t: 'h', text: 'K を持つ3人、勝つのは？' },
    {
      t: 'showdown',
      q: '3人とも K のトップペア。勝つのは？',
      board: ['Kh', '8c', '3d', '6s', '2h'],
      players: [
        { label: 'K♦J♣', cards: ['Kd', 'Jc'] },
        { label: 'K♠Q♥', cards: ['Ks', 'Qh'] },
        { label: 'A♣K♣', cards: ['Ac', 'Kc'] },
      ],
      explain: '同じペアならキッカー勝負。A > Q > J の順です。KJ は AK・KQ に「ドミネート」されています。',
    },
    {
      t: 'p',
      text: 'T・J・Q・K・A を**ブロードウェイ**と呼びます。KQ・KJ・AJ などは強そうに見えますが、1枚を共有して上回られる形に弱い手です。',
    },
    {
      t: 'equity',
      players: [{ label: 'K♦J♣', cards: ['Kd', 'Jc'], pct: 26 }, { label: 'K♠Q♥', cards: ['Ks', 'Qh'], pct: 74 }],
      caption: 'プリフロップ。ドミネートされた KJ は約26%です。',
    },
    {
      t: 'equity',
      players: [{ label: 'K♦J♣', cards: ['Kd', 'Jc'], pct: 14 }, { label: 'K♠Q♥', cards: ['Ks', 'Qh'], pct: 86 }],
      board: ['Kh', '8c', '3d'],
      caption: '両方トップペアになると約14%。しかも降りにくいので、大きなポットで負けます。',
    },
    { t: 'h', text: '相手のレンジで価値が変わる' },
    {
      t: 'quiz',
      q: 'UTG が 2.5bb でオープン。CO のあなたは KJo。基本の選択は？',
      hand: ['Kd', 'Jc'],
      options: ['フォールド', 'コール', 'オールイン'],
      answer: 0,
      explain: 'UTG のレンジには AK・AQ・AJ・KQ など KJ を上回る手が多く、トップペアでも負けていることが多いからです。',
    },
    {
      t: 'table',
      head: ['ハンド', 'オープンの目安'],
      rows: [
        ['AQ・AJs・KQs', 'UTG から'],
        ['AJo・KQo', 'UTG でもオープンすることが多い'],
        ['KJo・QJo・ATo', 'HJ〜CO 以降が中心'],
        ['KTo・QTo・JTo', 'CO〜BTN が中心'],
      ],
    },
    { t: 'range', spot: 'rfi-co', caption: 'CO オープン。スーテッドはオフスートより1〜2段階早い席から参加できます。' },
    {
      t: 'combos',
      groups: [{ label: 'AK', hands: ['AK'] }],
      dead: ['Ks', 'Qh'],
      caption: 'KQ を持つと、相手の AK は16→12コンボに減ります。',
    },
    { t: 'h', text: '広いレンジ相手なら戦える' },
    {
      t: 'play',
      title: 'BB で K♦J♣',
      hero: 'BB',
      heroCards: ['Kd', 'Jc'],
      villain: 'BTN',
      villainCards: ['Ks', 'Tc'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'BTN が 2.5bb でオープン、SB はフォールド。あなたは BB で **K♦J♣**。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'BTN のレンジは広く、KJo は十分戦えます（ときどき3ベットも混ぜます）。' },
            { label: 'フォールド', good: false, why: 'UTG 相手とは違い、BTN 相手には降りすぎです。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Kh', '8c', '3d'],
          pot: 7.3,
          say: 'トップペア。あなたはチェック、BTN がポット5.5bbに **1.8bb** ベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'BTN のレンジの多くに勝っています。' },
            { label: 'フォールド', good: false, why: '降りすぎです。' },
          ],
        },
        { street: 'ターン', board: ['5s'], pot: 9.1, say: 'ターンは **5♠**。あなたはチェック、BTN もチェック。' },
        {
          street: 'リバー',
          board: ['2h'],
          pot: 9.1,
          say: 'リバーは **2♥**。先にアクションするのはあなたです。',
          q: 'どうする？',
          options: [
            { label: '3〜4bb ほど小さくベット', good: true, why: 'KT・K9・8x など、弱い手から払ってもらえます。' },
            { label: 'チェック', good: true, why: '接戦。チェックしてショーダウンでも悪くありません。' },
            { label: 'オールイン', good: false, why: '払うのは KJ に勝つ手だけになります。' },
          ],
        },
      ],
      outro: '相手は KT でした。同じ KJ でも、UTG 相手は危険、BTN 相手なら十分戦えます。',
    },
    {
      t: 'rapid',
      q: 'HJ でオープンする？（アプリのレンジ表）',
      choices: ['オープン', 'フォールド'],
      items: [
        { cards: ['Kd', 'Jc'], answer: 0, why: 'HJ ではオフスートの K は KTo 以上です。' },
        { cards: ['Qh', 'Ts'], answer: 0 },
        { cards: ['Kc', '9d'], answer: 1, why: 'K9o は HJ では弱すぎます。' },
        { cards: ['Qs', '9h'], answer: 1, why: 'オフスートの Q は QTo 以上です。' },
        { cards: ['Ad', '9s'], answer: 0, why: 'HJ のオフスート A は A9o 以上です。' },
        { cards: ['Ks', 'Ts'], answer: 0 },
        { cards: ['Qd', '8d'], answer: 1, why: 'スーテッドの Q は Q9s 以上です。' },
        { cards: ['Ah', 'Tc'], answer: 0 },
        { cards: ['Jh', '9c'], answer: 1, why: 'J9 はスーテッドならオープン、オフスートはフォールドです。' },
      ],
    },
    { t: 'try', text: 'オープンのトレーニングでブロードウェイの境界を練習する', tab: 'train' },
  ],
};

export default lesson;
