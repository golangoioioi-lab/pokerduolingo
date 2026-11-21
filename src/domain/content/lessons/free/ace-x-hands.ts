import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'ace-x-hands',
  blocks: [
    { t: 'h', text: 'どちらでオープンする？' },
    {
      t: 'quiz',
      q: 'UTG で全員フォールド。オープンに向いているのはどちら？',
      options: ['A♦9♣', 'A♠5♠'],
      optionCards: [['Ad', '9c'], ['As', '5s']],
      answer: 1,
      explain: 'A5s はナッツフラッシュとホイール（A-2-3-4-5）の可能性があります。A9o は A が落ちてもキッカー負けしやすく、UTG ではフォールドです。',
    },
    { t: 'h', text: 'オフスートの弱い A はキッカー負けする' },
    {
      t: 'showdown',
      q: 'どちらも A のトップペア。勝つのは？',
      board: ['Ah', '7d', '3s', 'Qc', '2h'],
      players: [{ label: 'あなた', cards: ['Ad', '9c'] }, { label: '相手', cards: ['As', 'Jh'] }],
      explain: 'A-Q までは同じで、次のキッカーは J が 9 より上。これが「ドミネートされている」状態です。',
    },
    {
      t: 'equity',
      players: [{ label: 'A♦9♣', cards: ['Ad', '9c'], pct: 27 }, { label: 'A♠J♥', cards: ['As', 'Jh'], pct: 73 }],
      caption: 'プリフロップで、キッカー負けの A9o の勝率は3割弱です。勝つときは小さく、負けるときは大きくなります。',
    },
    { t: 'h', text: 'スーテッドのホイールエース（A5s〜A2s）' },
    {
      t: 'list',
      items: ['フラッシュができれば常にナッツ', '低いボードではストレートも狙える', 'A を持つので、相手の AA・AK が減る（ブロッカー）'],
    },
    {
      t: 'combos',
      groups: [{ label: 'AA', hands: ['AA'] }, { label: 'AK', hands: ['AK'] }],
      dead: ['As', '5s'],
      caption: 'A♠5♠ を持つと、相手の AA は6→3、AK は16→12コンボに減ります。',
    },
    {
      t: 'estimate',
      q: 'あなたは A4s。相手が AK を持つコンボは何通り？',
      hand: ['As', '4s'],
      min: 0,
      max: 20,
      step: 1,
      unit: 'コンボ',
      answer: 12,
      tolerance: 0.5,
      explain: 'A は残り3枚、K は4枚。3 × 4 = 12通りです。',
    },
    { t: 'h', text: 'ポジションで変わる' },
    {
      t: 'table',
      head: ['ハンド', 'UTG', 'BTN'],
      rows: [['A5s〜A2s', 'オープン', 'オープン'], ['A9o〜A2o', 'フォールド', 'オープン']],
    },
    {
      t: 'p',
      text: 'BTN は後ろに SB と BB しかいないので、弱い A でもオープンできます。前の席のオープンにコールするときは、オフスートの弱い A はフォールドが基本です。',
    },
    {
      t: 'rapid',
      q: 'UTG でオープンする？（アプリのレンジ表）',
      choices: ['オープン', 'フォールド'],
      items: [
        { cards: ['Ac', '5c'], answer: 0, why: 'スーテッドの A は全部オープンです。' },
        { cards: ['Ah', '9d'], answer: 1, why: 'UTG のオフスートは ATo 以上です。' },
        { cards: ['As', 'Td'], answer: 0 },
        { cards: ['Ad', '2d'], answer: 0, why: 'A2s もナッツフラッシュを狙えます。' },
        { cards: ['Ac', '8h'], answer: 1, why: 'キッカー負けしやすい手です。' },
        { cards: ['Ah', 'Jc'], answer: 0 },
        { cards: ['As', '7s'], answer: 0 },
        { cards: ['Ad', '4c'], answer: 1, why: 'オフスートではフラッシュも狙えません。' },
      ],
    },
    { t: 'try', text: 'UTG と BTN のオープンレンジで Ax の違いを見比べる', tab: 'ranges' },
  ],
};

export default lesson;
