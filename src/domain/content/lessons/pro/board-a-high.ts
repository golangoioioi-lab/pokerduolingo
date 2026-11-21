import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-a-high',
  blocks: [
    { t: 'h', text: 'BBの強い手を探す' },
    {
      t: 'quiz',
      q: 'A♠7♦2♣ で、BBがチェックレイズできる強い手はどれ？',
      board: ['As', '7d', '2c'],
      options: ['K♥9♣', 'T♥8♣', '7♥7♣', 'Q♥9♣'],
      optionCards: [['Kh', '9c'], ['Th', '8c'], ['7h', '7c'], ['Qh', '9c']],
      answer: 2,
      explain: '77はセットです。他の3つは何もない手で、BBの強い手はこのように少数です。',
    },
    { t: 'h', text: 'なぜレイザー有利か' },
    {
      t: 'p',
      text: 'BBは強いAxを3betし、弱いAxは降ります。コールレンジにAxは少なめです。BTNのオープンには強いAxが豊富です（BTN対BBのSRP、目安）。',
    },
    {
      t: 'equity',
      players: [{ label: 'BTNレンジ', pct: 53 }, { label: 'BBレンジ', pct: 47 }],
      board: ['As', '7d', '2c'],
      caption: 'A♠7♦2♣ のレンジ対レンジ（目安）。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'AK/AQ', hands: ['AK', 'AQ'] },
        { label: 'AJ/AT', hands: ['AJ', 'AT'] },
        { label: 'A9s以下', hands: ['A9s', 'A8s', 'A5s', 'A4s'] },
      ],
      dead: ['As', '7d', '2c'],
      caption: 'BTNのオープンに入る主なAxのコンボ数。',
    },
    {
      t: 'order',
      q: 'A♠7♦2♣ で強い順にタップ',
      board: ['As', '7d', '2c'],
      hands: [
        { label: 'A7s', cards: ['Ah', '7h'] },
        { label: 'AK', cards: ['Ac', 'Kd'] },
        { label: '22', cards: ['2s', '2d'] },
        { label: 'KK', cards: ['Ks', 'Kc'] },
      ],
      explain: '22はセット、A7はツーペア、AKはトップペア、KKはAの下のペアです。',
    },
    { t: 'h', text: '基本の戦略' },
    {
      t: 'compare',
      left: { title: 'BTN（レイザー）', points: ['AxとAAが多い', '1/3ポットを高頻度で', 'ポジションも有利'], verdict: 'good' },
      right: { title: 'BB（コーラー）', points: ['強いAxが少ない', 'コール・フォールド中心', 'チェックレイズは少なめ'], verdict: 'bad' },
      caption: 'A-highドライはレイザーが打ちやすいボード。',
    },
    {
      t: 'quiz',
      q: 'このボードで、BTNに最も向く基本のCベットは？',
      board: ['As', '7d', '2c'],
      options: ['全額ベットのみ', 'ポットの約1/3を高頻度', '常にチェック', 'ポットサイズのみ'],
      answer: 1,
      explain: 'レンジ有利で、BBに強い手が少ないので、小さく頻繁に打つのが標準です。',
    },
    { t: 'h', text: '1ハンド打ってみる' },
    {
      t: 'play',
      title: 'A-highでKQを打つ',
      hero: 'BTN',
      heroCards: ['Kd', 'Qd'],
      villain: 'BB',
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'BTNで **K♦Q♦** を2.5bbオープン。BBがコールしました。' },
        {
          street: 'フロップ',
          board: ['As', '7d', '2c'],
          pot: 5.5,
          say: 'フロップは **A♠7♦2♣**。BBはチェック。',
          q: 'KQはペアなし。どうする？',
          options: [
            { label: '2bbベット', good: true, why: 'レンジ有利のボードで、BBの弱い手を安く降ろせます。バックドアのフラッシュも残ります。' },
            { label: 'チェック', good: false, why: 'チェックも混ぜますが、この手は小さく打つ頻度が高い手です。' },
            { label: '6bbベット', good: false, why: '大きく打つと、降りてほしい手は降り、Axだけが残ります。' },
          ],
        },
        {
          street: 'フロップ',
          pot: 14.5,
          say: 'BBが7bbにチェックレイズしてきました。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: true, why: 'BBのチェックレイズはセットやツーペアが中心。KQはほぼ勝てません。' },
            { label: 'コール', good: false, why: 'ペアもストレートドローもなく、続ける根拠が足りません。' },
          ],
        },
      ],
      outro: 'A-highでは小さく広く打ち、強い反撃には素直に降ります。ブラフは「レイズされたら降りる」前提で選びます。',
    },
  ],
};

export default lesson;
