import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-low-dry',
  blocks: [
    { t: 'h', text: '低いボードで並べる' },
    {
      t: 'order',
      q: '9♠7♦2♣ で強い順にタップ',
      board: ['9s', '7d', '2c'],
      hands: [
        { label: 'QQ', cards: ['Qh', 'Qc'] },
        { label: '97s', cards: ['9h', '7h'] },
        { label: 'A9', cards: ['Ad', '9c'] },
        { label: '87s', cards: ['8c', '7c'] },
      ],
      explain: '97はツーペアでオーバーペアのQQより上。A9はトップペア、87はミドルペアです。低いボードでは、BBのコネクターがBTNのオーバーペアを上回ることがあります。',
    },
    { t: 'h', text: 'レイザーの強みとBBの強み' },
    {
      t: 'p',
      text: 'BTNの強みはTT以上のオーバーペアとAKなどのオーバーカード。BBは98s・87sなどで、低いペアやツーペアに当たります（BTN対BBのSRP、目安）。',
    },
    {
      t: 'equity',
      players: [{ label: 'BTNレンジ', pct: 52 }, { label: 'BBレンジ', pct: 48 }],
      board: ['9s', '7d', '2c'],
      caption: '9♠7♦2♣ のレンジ対レンジ（目安）。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'オーバーペア', hands: ['AA', 'KK', 'QQ', 'JJ', 'TT'] },
        { label: '9x・7x', hands: ['98s', '97s', '76s', '65s'] },
      ],
      dead: ['9s', '7d', '2c'],
      caption: '9♠7♦2♣ 上。BTNはAA-TT、BBは98s・97sなど。',
    },
    {
      t: 'estimate',
      q: 'このボードで、AA〜TT（オーバーペア）は合計何通り？',
      board: ['9s', '7d', '2c'],
      min: 0,
      max: 60,
      step: 1,
      unit: '通り',
      answer: 30,
      tolerance: 5,
      explain: 'ボードにA〜Tはないので各6通り。5種類で30通りです。',
    },
    { t: 'h', text: '戦い方の目安' },
    {
      t: 'compare',
      left: { title: 'A-highドライ', board: ['As', '7d', '2c'], points: ['BTNのAxが多い', '小さなベットを高頻度'], verdict: 'good' },
      right: { title: '低いドライ', board: ['9s', '7d', '2c'], points: ['優位はオーバーペア頼み', '頻度を下げ、チェックを混ぜる'], verdict: 'neutral' },
      caption: 'ボードが低いほど、BTNのベット頻度は下がる。',
    },
    {
      t: 'quiz',
      q: 'このボードでのCベットは、A-highに比べて？',
      board: ['Td', '6c', '2s'],
      options: ['必ず増やす', '必ず全額', '変わらない', '頻度を下げ、チェックを混ぜる'],
      answer: 3,
      explain: 'レンジアドバンテージが小さいので、頻度を控えめにします。',
    },
    { t: 'h', text: 'オーバーペアで打つ' },
    {
      t: 'play',
      title: '9♠7♦2♣ でQQ',
      hero: 'BTN',
      heroCards: ['Qh', 'Qc'],
      villain: 'BB',
      villainCards: ['9h', '8h'],
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'BTNで **Q♥Q♣** を2.5bbオープン。BBがコールしました。' },
        {
          street: 'フロップ',
          board: ['9s', '7d', '2c'],
          pot: 5.5,
          say: 'フロップは **9♠7♦2♣**。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '2bbベット', good: true, why: 'オーバーペアは打つ側の手。9x・7xやドローから価値を取ります。' },
            { label: 'チェック', good: false, why: 'ドローに無料でカードを見せ、価値も取れません。' },
          ],
        },
        {
          street: 'ターン',
          board: ['3c'],
          pot: 9.5,
          say: 'BBがコール。ターンは **3♣**。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '6bbベット', good: true, why: '9xや7x、ドローはまだ払います。2ストリート目の価値を取ります。' },
            { label: 'チェック', good: false, why: '弱いペアから取れる価値を逃します。' },
          ],
        },
        {
          street: 'リバー',
          board: ['4d'],
          pot: 21.5,
          say: 'BBがコール。リバーは **4♦**。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '10bbベット', good: true, why: '2回コールしたBBには9xが多く、QQはまだ上です。' },
            { label: 'チェック', good: false, why: '負けている手は少なく、取れる価値を逃します。' },
          ],
        },
      ],
      outro: 'BBは 9♥8♥ のトップペア。低いボードでもオーバーペアは強い手ですが、BBのツーペアやセットも増える点は覚えておきます。',
    },
  ],
};

export default lesson;
