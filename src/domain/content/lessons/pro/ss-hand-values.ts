import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'ss-hand-values',
  blocks: [
    { t: 'h', text: 'セット狙いを試す' },
    { t: 'p', text: '全員40bb。小さいペアでオープンして3betされたとき、100bbと同じようにコールしてよいかを試します。' },
    {
      t: 'play',
      title: '40bb、HJで4♣4♦',
      hero: 'HJ',
      heroCards: ['4c', '4d'],
      villain: 'BTN',
      steps: [
        {
          street: 'プリフロップ',
          pot: 1.5,
          say: 'UTG がフォールド。あなたは HJ で **4♣4♦**、スタック40bb。',
          q: 'どうする？',
          options: [
            { label: '2.5bb レイズ', good: true, why: 'HJ から小さいペアはオープンできます。' },
            { label: 'フォールド', good: false, why: 'まだ誰も入っていないので、オープンで十分です。' },
          ],
        },
        {
          street: 'プリフロップ',
          pot: 11.5,
          say: 'BTN が7.5bbに3bet。ブラインドは降りました。コールにはあと5bbです。',
          q: 'セットを狙ってコールする？',
          options: [
            { label: 'コール', good: false, why: '当たっても残り32.5bbしか取れず、平均で約−1.5bbです。' },
            { label: 'フォールド', good: true, why: '取れる額に上限があるので、セット狙いは割に合いません。' },
          ],
        },
      ],
      outro: '100bbなら同じコールが約+2.7bb。確率は同じでも、取れる額の上限で損得が逆になります。',
    },
    { t: 'h', text: '取れる額の上限' },
    {
      t: 'tree',
      root: '4♣4♦でオープンし、3betに5bbを追加してコール',
      options: [
        { label: 'フォールド', ev: 0 },
        {
          label: 'コール（40bb）',
          outcomes: [
            { label: 'セット→平均+25bb', prob: 0.118, value: 25 },
            { label: '外れて降りる', prob: 0.882, value: -5 },
          ],
        },
        {
          label: 'コール（100bb）',
          outcomes: [
            { label: 'セット→平均+60bb', prob: 0.118, value: 60 },
            { label: '外れて降りる', prob: 0.882, value: -5 },
          ],
        },
      ],
      caption: 'セットで取れる額は目安。40bbでは残りスタックが32.5bbしかない',
    },
    {
      t: 'estimate',
      q: 'ポケットペアがフロップでセット以上になる確率は？',
      hand: ['4c', '4d'],
      min: 0,
      max: 40,
      step: 1,
      unit: '%',
      answer: 12,
      tolerance: 4,
      explain: '約11.8%、およそ7.5回に1回です。外れた約88%の損を、当たった約12%で取り返す必要があります。',
    },
    { t: 'h', text: '今の強さが大事になる' },
    {
      t: 'equity',
      players: [
        { label: 'A♠J♦', cards: ['As', 'Jd'], pct: 58.5 },
        { label: '7♥6♥', cards: ['7h', '6h'], pct: 41.5 },
      ],
      caption: 'プリフロップでオールインになったときの勝率。浅いスタックでは早くオールインになりやすい',
    },
    {
      t: 'compare',
      left: {
        title: '価値が上がる手',
        cards: ['Ah', 'Qc'],
        points: ['AQ・AJ・KQのような高いカード', 'トップペアがそのまま勝ちやすい'],
        verdict: 'good',
      },
      right: {
        title: '価値が下がる手',
        cards: ['5d', '4d'],
        points: ['小さいスーテッドコネクター', '小さいペアのセット狙い'],
        verdict: 'bad',
      },
    },
    { t: 'p', text: 'ただし小さいペアは、オールインの勝負では高いカード2枚に少し有利です。コールで見るより、**オールインかフォールド**で使います。' },
    {
      t: 'showdown',
      q: 'プリフロップでオールイン。勝つのは？',
      board: ['9h', '7s', '2d', 'Jc', '3h'],
      players: [
        { label: 'あなた', cards: ['4c', '4d'] },
        { label: '相手', cards: ['As', 'Kd'] },
      ],
      explain: 'A も K も落ちず、4のペアが残りました。4♣4♦ は A♠K♦ に約54%の勝率があります。',
    },
    {
      t: 'quiz',
      q: '浅いスタックで価値が上がる手は？',
      options: ['A♥Q♣', '5♦4♦', '2♣2♦', '8♠6♠'],
      optionCards: [['Ah', 'Qc'], ['5d', '4d'], ['2c', '2d'], ['8s', '6s']],
      answer: 0,
      explain: 'AQのような高いカードは、早くオールインになっても今の勝率で有利です。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: '浅いスタックでは「当たったら取れる」より「今強い」が大事です。小さいペアやコネクターはオールインかフォールドで使います。',
    },
  ],
};

export default lesson;
