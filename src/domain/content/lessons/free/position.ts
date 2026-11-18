import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'position',
  blocks: [
    { t: 'p', text: 'ポーカーで最も重要な概念の一つが**ポジション**です。フロップ以降は、ディーラーボタン（BTN）に近いプレイヤーほど**後から行動**できます。' },
    { t: 'h', text: '6人卓（6-max）のポジション' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: '最初に行動・最もタイト' },
        { pos: 'HJ', action: 'やや広く' },
        { pos: 'CO', action: '広く参加できる' },
        { pos: 'BTN', action: '最後に行動' },
        { pos: 'SB', bet: 0.5, action: 'フロップ以降は最初' },
        { pos: 'BB', bet: 1, action: '安くコールできる' },
      ],
      pot: 1.5,
      caption: '6人卓の6つのポジション。BTN に近いほど後から行動できます。',
    },
    {
      t: 'estimate',
      q: 'UTG がオープンするとき、後ろにまだ行動していない人は何人？',
      min: 0,
      max: 6,
      step: 1,
      unit: '人',
      answer: 5,
      tolerance: 0.5,
      explain: 'HJ・CO・BTN・SB・BB の5人です。後ろに多く残るほど強い手を持つ人がいる可能性が高く、UTG は最もタイトになります。',
    },
    { t: 'p', text: 'CO と BTN は後ろの人数が少ないので広く参加できます。SB と BB はフロップ以降、常に先に行動する不利があります。' },
    { t: 'h', text: 'なぜ後から行動すると有利なのか' },
    {
      t: 'list',
      items: [
        '**情報**: 相手がチェックしたかベットしたかを見てから決められる',
        '**ポットのコントロール**: 中くらいの強さの手ならチェックしてショーダウンに持ち込める',
        '**ブラフの機会**: 相手のチェック（弱さのサイン）を見てからブラフできる',
      ],
    },
    {
      t: 'compare',
      left: { title: 'ポジションあり（後から行動）', points: ['相手の行動を見てから決められる', 'チェックでポットを小さく保てる', '相手の弱さを見てブラフできる'], verdict: 'good' },
      right: { title: 'ポジションなし（先に行動）', points: ['相手の手がわからないまま決める', 'ベットすると強さが伝わる', 'より強い手が必要'], verdict: 'bad' },
      caption: '同じ手でも、行動する順番で有利さが変わります。',
    },
    {
      t: 'quiz',
      q: 'フロップに SB・BTN の2人が残った。先に行動するのは？',
      board: ['Qc', '8d', '3s'],
      options: ['SB', 'BTN'],
      answer: 0,
      explain: 'フロップ以降は SB に近い人から行動し、BTN が最後です。SB は後から動ける BTN に対して情報で不利になります。',
    },
    { t: 'range', spot: 'rfi-utg', caption: 'UTGのオープンレンジ。最初に行動するので強い手に絞る' },
    { t: 'range', spot: 'rfi-btn', caption: 'BTNのオープンレンジ。同じ「全員フォールドで回ってきた」状況でも、ポジションでこれだけ違う' },
    {
      t: 'quiz',
      q: 'UTG（全員がこれから行動する）。オープンしてよいのはどの手札？',
      options: ['A♥ K♠', '7♦ 2♣', 'J♦ 4♠'],
      optionCards: [['Ah', 'Ks'], ['7d', '2c'], ['Jd', '4s']],
      answer: 0,
      explain: 'UTG は強い手に絞ります。AK は後ろの誰が相手でも強い手です。72 や J4 はポジションがあっても厳しい手なので、UTG では論外です。',
    },
    {
      t: 'quiz',
      q: 'フロップ以降、常に最後に行動できるポジションは？',
      board: ['Kd', '9s', '4c'],
      options: ['UTG', 'BB', 'BTN', 'SB'],
      answer: 2,
      explain: 'BTN はフロップ以降、全ストリートで最後に行動します。最も利益が出るポジションで、オープンレンジも最も広くなります。',
    },
    { t: 'tip', text: '迷ったら「この手をポジションなしで（先に行動しながら）プレイしたいか？」と自問しましょう。' },
    { t: 'try', text: 'ポジションごとのレンジの違いをトレーニングで体感しよう', tab: 'train' },
  ],
};

export default lesson;
