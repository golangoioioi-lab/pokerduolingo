import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-k-high',
  blocks: [
    {
      t: 'p',
      text: 'K-highもA-highと同様に、BTNに有利なボードが多いです。ただしBBのコールレンジにはKxが比較的多く残るため、少し性質が違います。数字は、BTN対BBのSRPを簡易レンジで計算した目安です。',
    },
    { t: 'h', text: '3つのK-highボード' },
    {
      t: 'table',
      head: ['ボード', 'BTNのエクイティ（目安）', '性質'],
      rows: [
        ['K♠7♦2♣', '約52%', 'ドライ・レインボー'],
        ['K♥9♦4♣', '約52%', '中くらいにドライ'],
        ['K♦T♠5♥', '約53%', 'Tがつながり気味'],
      ],
    },
    { t: 'h', text: 'BBのKxの存在' },
    {
      t: 'p',
      text: 'BBは K9s、KQs などのKxスーテッドをコールで多く持ちます。A-highに比べて、BBにもトップペアが多く、差は小さくなります。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'KQ/KJ', hands: ['KQ', 'KJ'] },
        { label: 'KT/K9', hands: ['KT', 'K9'] },
        { label: 'KK', hands: ['KK'] },
      ],
      dead: ['Ks', '7d', '2c'],
      caption: 'K♠7♦2♣ 上のコンボ数。KKはボードのKで3通りに減る。',
    },
    {
      t: 'p',
      text: 'KKでセットを持てるのは両者とも少数です。ただし3betでKKを多く使うBBは、コールレンジのKKがほとんどありません。',
    },
    {
      t: 'compare',
      left: {
        title: 'K♠7♦2♣（極端にドライ）',
        board: ['Ks', '7d', '2c'],
        points: ['BTNのエクイティ約52%', '小さなCベットを高頻度で', 'ドローが少ない'],
        verdict: 'good',
      },
      right: {
        title: 'K♦T♠5♥（Tがある）',
        board: ['Kd', 'Ts', '5h'],
        points: ['BTNのエクイティ約53%', 'BBにKTsなどが残る', 'BTNはサイズを少し使い分ける'],
        verdict: 'neutral',
      },
      caption: 'どちらもBTN有利だが、差は数ポイント。',
    },
    { t: 'h', text: '実戦の目安' },
    {
      t: 'p',
      text: 'BTNは小さめのCベットを広く打ちます。BBがトップペアを多く持つ分、ブラフ頻度は少し控えめです。',
    },
    {
      t: 'equity',
      players: [{ label: 'BTNレンジ', pct: 52 }, { label: 'BBレンジ', pct: 48 }],
      board: ['Ks', '7d', '2c'],
      caption: 'K♠7♦2♣ のレンジ対レンジ（目安）。',
    },
    {
      t: 'estimate',
      q: 'このボードで、KKは何通り？（6通りから減ります）',
      board: ['Ks', '7d', '2c'],
      min: 0,
      max: 6,
      step: 1,
      unit: '通り',
      answer: 3,
      tolerance: 1,
      explain: 'Kの1枚が場にあるので、残り3枚から2枚を選んで3通りです。',
    },
    {
      t: 'quiz',
      q: 'K♦T♠5♥ で、BBが持つとしたら最も強いのはどれ？',
      board: ['Kd', 'Ts', '5h'],
      options: ['K♣Q♥（トップペア）', 'T♥T♣（セット）', 'Q♥J♥（ドロー）', 'A♣9♣（何もなし）'],
      optionCards: [['Kc', 'Qh'], ['Th', 'Tc'], ['Qh', 'Jh'], ['Ac', '9c']],
      answer: 1,
      explain: 'ボードのTと合わせてセットです。トップペアやドローより強い手で、BBのKTやTTがBTNの優位を縮めます。',
    },
    {
      t: 'quiz',
      q: 'K-highのボードで、A-highより差が小さくなりやすい理由は？',
      options: ['Kは弱いカードだから', 'ボードにAがないから無効', 'ルールが違うから', 'BBのコールレンジにもKxが比較的多いから'],
      answer: 3,
      explain: 'BBはKxスーテッドを広くコールするため、トップペアの差が縮みます。',
    },
    {
      t: 'quiz',
      q: 'このボードで、BTNの基本的な戦い方は？',
      board: ['Ks', '7d', '2c'],
      options: ['小さめのCベットを広く打つ', '常にチェック', '大きなベットだけ', '常にフォールド'],
      answer: 0,
      explain: 'BTN有利なボードなので、小さなベットで広く打つのが基本です。',
    },
  ],
};

export default lesson;
