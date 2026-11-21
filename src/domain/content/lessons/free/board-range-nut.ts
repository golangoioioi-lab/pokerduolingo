import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-range-nut',
  blocks: [
    { t: 'h', text: '最強クラスの手はどれ？' },
    {
      t: 'order',
      q: 'A♠7♦2♣ で強い順にタップ',
      board: ['As', '7d', '2c'],
      hands: [
        { label: 'KK', cards: ['Ks', 'Kd'] },
        { label: '77', cards: ['7h', '7c'] },
        { label: 'AK', cards: ['Ac', 'Kc'] },
        { label: 'AA', cards: ['Ah', 'Ad'] },
      ],
      explain: 'AAと77はセット、AKはトップペア、KKはAの下のペアです。セット級の手をどちらが多く持つかが「ナッツアドバンテージ」です。',
    },
    { t: 'h', text: '2つの有利さ' },
    {
      t: 'p',
      text: 'レンジ全体の平均エクイティが高いのが**レンジアドバンテージ**。最強クラスの手が多いのが**ナッツアドバンテージ**です。',
    },
    {
      t: 'compare',
      left: {
        title: 'レンジアドバンテージ',
        board: ['As', '7d', '2c'],
        points: ['平均エクイティが高い', '小さなベットを高頻度で'],
        verdict: 'good',
      },
      right: {
        title: 'ナッツアドバンテージ',
        board: ['Ks', 'Qd', 'Jc'],
        points: ['最強クラスの手が多い', '大きなベットの根拠になる'],
        verdict: 'good',
      },
      caption: 'どちらも有利さだが、使えるサイズが違う。',
    },
    { t: 'h', text: 'コンボ数で確かめる' },
    {
      t: 'combos',
      groups: [
        { label: 'AA', hands: ['AA'] },
        { label: 'AK', hands: ['AK'] },
        { label: '77と22', hands: ['77', '22'] },
      ],
      dead: ['As', '7d', '2c'],
      caption: 'A♠7♦2♣ 上。AAは3通り、AKは12通り、77と22で6通り。',
    },
    {
      t: 'p',
      text: 'BBはAAやAKの多くを3betするので、コールレンジにはほとんど残りません。これがBTNのナッツアドバンテージの源です。',
    },
    {
      t: 'estimate',
      q: 'このボードで、AKは何通り？（16通りから減ります）',
      board: ['As', '7d', '2c'],
      min: 0,
      max: 16,
      step: 1,
      unit: '通り',
      answer: 12,
      tolerance: 2,
      explain: 'Aは残り3枚、Kは4枚なので 3 × 4 = 12 通りです。',
    },
    {
      t: 'quiz',
      q: 'このボードで、BTNが大きなベットを打つ根拠になるのは？',
      board: ['Ks', 'Qd', 'Jc'],
      options: ['ナッツアドバンテージ', '位置の不利', 'ブラフの少なさ', 'ボードが乾いていること'],
      answer: 0,
      explain: 'AK、KK、QQ、JTなど最強クラスの手が多いほど、大きなベットで価値を取れます。',
    },
    { t: 'h', text: '仕分けてみる' },
    {
      t: 'rapid',
      q: 'これはどちらの有利？',
      choices: ['レンジ有利', 'ナッツ有利'],
      items: [
        { text: 'レンジ全体の勝率が53%対47%', answer: 0 },
        { text: 'セット以上の手を相手の3倍持つ', answer: 1 },
        { text: '小さなベットを高頻度で打つ根拠', answer: 0, why: '全体が少し有利なだけなら、安く広く打ちます。' },
        { text: '大きなベットを打つ根拠', answer: 1, why: '強い手が多い側は、大きく打っても相手のコールが重くなります。' },
        { text: '相手にはAAやAKがほとんどない', answer: 1 },
        { text: '平均すると少しずつ勝っている', answer: 0 },
      ],
    },
    { t: 'tip', text: '小さなベット＝レンジアドバンテージ、大きなベット＝ナッツアドバンテージ、と覚えると整理しやすくなります。' },
  ],
};

export default lesson;
