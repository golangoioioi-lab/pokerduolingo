import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'monotone-boards',
  blocks: [
    { t: 'h', text: 'まず勝者を当てる' },
    {
      t: 'showdown',
      q: 'スペード3枚のボード。勝つのは誰？',
      board: ['Js', '8s', '4s', 'Kd', '2c'],
      players: [
        { label: 'あなた', cards: ['6s', '5s'] },
        { label: '相手A', cards: ['Ks', 'Td'] },
        { label: '相手B', cards: ['Kh', 'Kc'] },
      ],
      explain: 'K のスリーカードよりフラッシュが強く、フラッシュ同士は一番上のカードで比べます。6 ハイのフラッシュは K ハイに負けます。',
    },
    { t: 'p', text: '3枚とも同じスートのフロップが**モノトーンボード**です（出現率約5%）。スート2枚を持つ手はすでにフラッシュ、1枚ならフラッシュドローです。' },
    { t: 'h', text: 'スートの高いカード1枚の価値' },
    {
      t: 'outs',
      q: 'A♠Q♦ で J♠8♠4♠。フラッシュになるカードを全部タップ。',
      hand: ['As', 'Qd'],
      board: ['Js', '8s', '4s'],
      target: 'フラッシュ',
      explain: 'スペード 13 枚のうち 4 枚が見えているので残り 9 枚。引けばナッツフラッシュです。',
    },
    {
      t: 'equity',
      players: [{ label: 'A♠Q♦', cards: ['As', 'Qd'], pct: 47 }, { label: 'K♥K♦', cards: ['Kh', 'Kd'], pct: 53 }],
      board: ['Js', '8s', '4s'],
      caption: 'ナッツフラッシュドローは、オーバーペアともほぼ五分です（目安）。',
    },
    {
      t: 'compare',
      left: { title: 'A♠Q♦', cards: ['As', 'Qd'], board: ['Js', '8s', '4s'], points: ['ナッツフラッシュドロー', '相手のナッツフラッシュを消す'], verdict: 'good' },
      right: { title: 'A♥K♦', cards: ['Ah', 'Kd'], board: ['Js', '8s', '4s'], points: ['スペードがない', 'コールするのはフラッシュやドローだけ'], verdict: 'bad' },
      caption: '同じ A 入りでも、スペードの有無でブラフの質が変わります。',
    },
    {
      t: 'quiz',
      q: 'セミブラフのベットに最も向いている手は？',
      board: ['Js', '8s', '4s'],
      options: ['A♠Q♦', 'K♦Q♣', '7♥6♥', '2♣2♦'],
      optionCards: [['As', 'Qd'], ['Kd', 'Qc'], ['7h', '6h'], ['2c', '2d']],
      answer: 0,
      explain: 'A♠Q♦ はナッツフラッシュドローで、相手のナッツフラッシュもブロックします。',
    },
    { t: 'h', text: 'ベットは小さく、低いフラッシュは慎重に' },
    { t: 'p', text: 'Cベットはポットの 25〜33% が一般的で、チェックも増えます。大きく打つと、フラッシュやドローにだけコールされます。6♠5♠ のような低いフラッシュは、大きなレイズには慎重になります。' },
    { t: 'h', text: 'もう一度：A♠ で戦う' },
    {
      t: 'play',
      title: 'BTN の A♠Q♦、モノトーンのフロップ',
      hero: 'BTN',
      heroCards: ['As', 'Qd'],
      villain: 'BB',
      villainCards: ['Ts', '9d'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 1.5,
          say: 'CO までフォールド。あなたは BTN で **A♠Q♦**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'AQ はどの席からでもオープンします。' },
            { label: '2.5bb オープン', good: true, why: '強い手はレイズで入ります。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Js', '8s', '4s'],
          pot: 5.5,
          say: 'BB がコール。フロップは **J♠8♠4♠**。BB はチェック。',
          q: 'ナッツフラッシュドロー。どうする？',
          options: [
            { label: '2bb ベット', good: true, why: '小さいサイズで、ドローのまま主導権を保ちます。' },
            { label: 'チェック', good: false, why: 'チェックも多い盤面ですが、A♠ はベットに最適な手です（接戦）。' },
            { label: '6bb ベット', good: false, why: '大きく打つと、フラッシュやドローにしかコールされません。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2s'],
          pot: 9.5,
          say: 'BB がコール。ターンは **2♠**。ナッツフラッシュが完成。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'ナッツです。スペード1枚の手やペアから取りにいきます。' },
            { label: '6bb ベット', good: true, why: '低いフラッシュやドローから払ってもらえます。' },
          ],
        },
        {
          street: 'リバー',
          board: ['9h'],
          pot: 21.5,
          say: 'BB がコール。リバーは **9♥**。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'ナッツでチェックすると取れる額を逃します。' },
            { label: '15bb ベット', good: true, why: '低いフラッシュは降りにくいのでバリューを取ります。' },
          ],
        },
      ],
      outro: 'モノトーンでは、スートの A を1枚持つ手が一番働きます。',
    },
  ],
};

export default lesson;
