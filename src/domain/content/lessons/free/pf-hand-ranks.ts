import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pf-hand-ranks',
  blocks: [
    { t: 'h', text: 'どっちが強い？' },
    {
      t: 'quiz',
      q: '場は共通です。強いのはどっち？',
      board: ['Kh', '8s', '5d', '2c', 'Jh'],
      options: ['K のワンペア', '8 と 5 のツーペア'],
      optionCards: [['Ks', 'Qd'], ['8d', '5c']],
      answer: 1,
      explain: 'ペアが2組のツーペアは、ペア1組のワンペアより強い役です。',
    },
    {
      t: 'quiz',
      q: 'ストレートとフラッシュ。強いのはどっち？',
      board: ['9h', '8h', '7c', '2h', 'Kd'],
      options: ['ストレート（T-9-8-7-6）', 'フラッシュ（ハート5枚）'],
      optionCards: [['Ts', '6d'], ['Ah', '4h']],
      answer: 1,
      explain: 'フラッシュのほうが出にくいので、ストレートより強い役です。',
    },
    {
      t: 'order',
      q: '場は共通。強い順にタップしてください。',
      board: ['Qs', 'Qd', '8c', '5h', '3s'],
      hands: [{ cards: ['Ac', 'Kd'] }, { cards: ['8s', '8h'] }, { cards: ['5c', '3d'] }, { cards: ['Qh', '2d'] }],
      explain: '88 はフルハウス、Q2 は Q のスリーカード、53 はツーペア、AK は Q のワンペアです。',
    },
    { t: 'h', text: '同じ役なら' },
    { t: 'p', text: '同じ役どうしなら、数字の大きいほうが勝ちます。ペアの数字も同じなら、残りのカード（**キッカー**）で比べます。' },
    {
      t: 'showdown',
      q: 'どちらも K のペア。勝つのは？',
      board: ['Ks', '9d', '6c', '4h', '2s'],
      players: [{ label: 'あなた', cards: ['Kh', 'Qc'] }, { label: '相手', cards: ['Kd', 'Jh'] }],
      explain: 'K のペアは同じ。次に大きいカードが Q と J なので、Q を持つあなたの勝ちです。',
    },
    {
      t: 'showdown',
      q: '場にストレートができています。勝つのは？',
      board: ['As', 'Ks', 'Qd', 'Jc', 'Th'],
      players: [{ label: 'あなた', cards: ['2c', '3d'] }, { label: '相手', cards: ['9h', '8h'] }],
      explain: '2人とも場の A-K-Q-J-T を使うので、まったく同じ5枚。**引き分け**でポットを分けます。',
    },
    {
      t: 'rapid',
      q: '強いのはどっち？',
      choices: ['左', '右'],
      items: [
        { text: 'フラッシュ ／ ストレート', answer: 0 },
        { text: 'ツーペア ／ スリーカード', answer: 1 },
        { text: 'フルハウス ／ フラッシュ', answer: 0 },
        { text: 'ワンペア ／ ツーペア', answer: 1 },
        { text: 'フォーカード ／ フルハウス', answer: 0 },
        { text: 'ストレート ／ スリーカード', answer: 0, why: 'ストレートはスリーカードより上です。' },
        { text: 'A のペア ／ K のペア', answer: 0 },
        { text: '役なし ／ 2 のペア', answer: 1, why: '一番小さいペアでも、役なしより強い役です。' },
      ],
    },
    { t: 'tip', title: '迷いやすい順番', text: 'スリーカード → ストレート → フラッシュ → フルハウスの並びは迷いやすいところです。「出にくい役ほど強い」と考えると思い出せます。' },
  ],
};

export default lesson;
