import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hand-ranking-details',
  blocks: [
    { t: 'h', text: '同じ K のペアどうし' },
    {
      t: 'showdown',
      q: 'どちらも K のペア。勝つのは？',
      board: ['Ks', '9d', '5c', '3h', '2s'],
      players: [
        { label: 'あなた', cards: ['Kh', 'Tc'] },
        { label: '相手', cards: ['Kd', 'Qh'] },
      ],
      explain: 'ペアが同じなら、残りのカード（キッカー）を高い順に比べます。Q が T より高いので相手の勝ちです。',
    },
    { t: 'p', text: '同じ役なら、役に使う5枚を大事な順に1枚ずつ比べます。勝敗を決める残りのカードをキッカーと呼びます。' },
    {
      t: 'compare',
      left: { title: 'K♥ Q♣', cards: ['Kh', 'Qc'], board: ['Ks', '9d', '5c', '3h', '2s'], points: ['K のペア', 'キッカー Q・9・5'], verdict: 'good' },
      right: { title: 'K♦ J♥', cards: ['Kd', 'Jh'], board: ['Ks', '9d', '5c', '3h', '2s'], points: ['K のペア', 'キッカー J・9・5'], verdict: 'bad' },
      caption: 'ペアが同じなら、キッカーの Q と J で決まります。',
    },
    { t: 'h', text: 'ツーペア・フルハウスの比べ方' },
    {
      t: 'list',
      items: [
        'ツーペア：高いペア → 低いペア → 残り1枚',
        'フルハウス：3枚のほうが先。9-9-9-2-2 は 8-8-8-A-A に勝つ',
        'フラッシュ：一番高いカードから順に比べる',
      ],
    },
    {
      t: 'order',
      q: '3人ともツーペア。強い順にタップ。',
      board: ['9d', '5s', '2c', 'Kh', '3d'],
      hands: [
        { label: 'K9', cards: ['Kc', '9c'] },
        { label: '95', cards: ['9h', '5h'] },
        { label: '53', cards: ['5d', '3c'] },
      ],
      explain: '高いほうのペアから比べます。K-K-9-9 → 9-9-5-5 → 5-5-3-3 の順です。',
    },
    {
      t: 'order',
      q: 'フルハウスとツーペア。強い順にタップ。',
      board: ['Ts', 'Td', '4c', '4h', '2s'],
      hands: [
        { label: '4A', cards: ['4d', 'Ad'] },
        { label: 'TK', cards: ['Tc', 'Kd'] },
        { label: 'AK', cards: ['Ac', 'Kh'] },
      ],
      explain: 'T-T-T-4-4 は3枚が T で最強。4-4-4-T-T が次。AK はツーペアのままです。',
    },
    { t: 'h', text: 'ストレートとホイール' },
    {
      t: 'compare',
      left: { title: '5♠ 9♣', cards: ['5s', '9c'], board: ['As', '2d', '3c', '4h', 'Td'], points: ['A-2-3-4-5（ホイール）', '5 が一番上'], verdict: 'bad' },
      right: { title: '6♦ 5♥', cards: ['6d', '5h'], board: ['As', '2d', '3c', '4h', 'Td'], points: ['2-3-4-5-6', '6 が一番上'], verdict: 'good' },
      caption: 'ストレートは一番上のカードで比べます。ホイールは最弱。Q-K-A-2-3 のように A をまたぐことはできません。',
    },
    {
      t: 'showdown',
      q: '3人の勝負。勝つのは？',
      board: ['2s', '3c', '4h', 'Kd', '9d'],
      players: [
        { label: 'あなた', cards: ['Ac', '5d'] },
        { label: '相手1', cards: ['6s', '5h'] },
        { label: '相手2', cards: ['Ks', '9s'] },
      ],
      explain: 'あなたはホイール、相手1は 6 ハイのストレート、相手2はツーペア。ストレートどうしは 6 ハイが上です。',
    },
    { t: 'h', text: 'マークに強弱はない' },
    {
      t: 'showdown',
      q: '5枚の数字が同じなら？',
      board: ['7s', '7d', 'Kc', '9h', '4s'],
      players: [
        { label: 'A', cards: ['Kd', '2c'] },
        { label: 'B', cards: ['Kh', '3d'] },
      ],
      explain: 'どちらも K-K-7-7-9。2 と 3 は5枚に入らず、スートに強弱もないので引き分け（スプリット）です。',
    },
  ],
};

export default lesson;
