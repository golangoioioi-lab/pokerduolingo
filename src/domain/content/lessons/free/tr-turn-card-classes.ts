import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'tr-turn-card-classes',
  blocks: [
    { t: 'h', text: 'まずやってみる：このターンはだれの味方？' },
    {
      t: 'p',
      text: 'BTNがオープン、BBがコール。フロップ Q♠9♠5♦ でBTNがベットし、BBがコール。ターンの1枚を見て、得をするのはどちらか直感で答えてください。',
    },
    {
      t: 'rapid',
      q: 'このターンで得をするのは？',
      choices: ['BTN（ベットした側）', 'BB（コールした側）'],
      items: [
        { cards: ['Ad'], board: ['Qs', '9s', '5d'], answer: 0, why: 'オーバーカードのAは、AK・AQを多く持つBTNに当たりやすいカードです。' },
        { cards: ['8s'], board: ['Qs', '9s', '5d'], answer: 1, why: 'フラッシュとJTのストレートが完成します。ドローを多く持つのはBBです。' },
        { cards: ['2c'], board: ['Qs', '9s', '5d'], answer: 0, why: '何も変えないブリック。フロップで有利だったBTNの優位が残ります。' },
        { cards: ['7s'], board: ['Qs', '9s', '5d'], answer: 1, why: 'フラッシュと86のストレートが完成します。' },
        { cards: ['3h'], board: ['Qs', '9s', '5d'], answer: 0, why: 'ブリックです。BTNの優位がそのまま残ります。' },
        { cards: ['6s'], board: ['Qs', '9s', '5d'], answer: 1, why: 'フラッシュと87のストレートが完成します。' },
      ],
    },
    { t: 'h', text: '4つの分類' },
    {
      t: 'table',
      head: ['分類', '例（Q♠9♠5♦）', '得をしやすい側'],
      rows: [
        ['オーバーカード', 'A♦ / K♣', 'BTN（高いカードが多い）'],
        ['ドロー完成', '8♠ / 7♠', 'BB（ドローが多い）'],
        ['ブリック', '2♣ / 3♥', 'フロップで有利だった側'],
        ['ペアになる', '9♣ / 5♥', 'カードの種類で変わる'],
      ],
    },
    {
      t: 'p',
      text: 'BBはAKやAQの多くをプリフロップで3betします。一方、JT・T8s・87sなどのドローをコールで持っているのはBBです。',
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 1.5, actions: ['BTN 2.5bbオープン', 'BBコール'] },
        { street: 'フロップ', board: ['Qs', '9s', '5d'], pot: 5.5, actions: ['BBチェック', 'BTN 1.8bbベット', 'BBコール'] },
        { street: 'ターン', board: ['2c'], pot: 9.1, actions: ['BBチェック', 'BTNが判断する'] },
      ],
      caption: 'ターン開始時のポットは 5.5 + 1.8 × 2 = 9.1bb',
    },
    {
      t: 'compare',
      left: {
        title: 'ターン 2♣（ブリック）',
        board: ['Qs', '9s', '5d', '2c'],
        points: ['完成する手はほぼない', 'BTNのQxやオーバーペアの優位が残る', 'ベットを続けやすい'],
        verdict: 'good',
      },
      right: {
        title: 'ターン 8♠（ドロー完成）',
        board: ['Qs', '9s', '5d', '8s'],
        points: ['フラッシュとストレートが完成', '完成した手はBBに多い', 'BTNはチェックが増える'],
        verdict: 'bad',
      },
      caption: 'BTNから見たターンの比較',
    },
    {
      t: 'quiz',
      q: 'このブリックのターンで、一般的に起きることは？',
      board: ['Qs', '9s', '5d', '2c'],
      options: ['フロップで有利だった側の優位がそのまま残る', 'コールした側が必ず有利になる', 'すべてのドローが完成する'],
      answer: 0,
      explain: 'ブリックはほとんど何も変えません。フロップで有利だった側（多くはBTN）がベットを続けやすくなります。',
    },
    { t: 'h', text: '考える順番' },
    {
      t: 'list',
      ordered: true,
      items: ['ターンカードを4分類に当てはめる', 'そのカードで強くなる手をどちらが多く持つか考える', '最後に自分の手札を見る'],
    },
    {
      t: 'quiz',
      q: 'BTNはK♥J♥でガットショット。このターンの基本方針は？',
      hand: ['Kh', 'Jh'],
      board: ['Qs', '9s', '5d', '8s'],
      options: ['レンジが不利なので、チェックを増やす', 'ドローがあるので大きくベットする', 'オールインする'],
      answer: 0,
      explain: '8♠はBBのドローを完成させました。手札より先にレンジの有利不利を見ると、チェックが安全な場面だと分かります。',
    },
    { t: 'h', text: 'もう一度やる' },
    {
      t: 'play',
      title: 'BTNでA♥Q♥',
      hero: 'BTN',
      heroCards: ['Ah', 'Qh'],
      villain: 'BB',
      villainCards: ['Jc', 'Tc'],
      steps: [
        {
          street: 'フロップ',
          board: ['Qs', '9s', '5d'],
          pot: 5.5,
          say: 'BTNでオープンし、BBがコール。フロップでトップペア。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '1.8bbベット', good: true, why: '有利なボードでトップペア。小さく打って価値を取ります。' },
            { label: 'チェック', good: false, why: 'ドローの多いボードです。無料でカードを見せる理由は薄いです。' },
          ],
        },
        {
          street: 'ターン',
          board: ['8s'],
          pot: 9.1,
          say: 'BBがコール。ターンは8♠でフラッシュとストレートが完成。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: 'ドロー完成カードでレンジが不利になりました。トップペアはポットを小さく保ちます。' },
            { label: '7bbベット', good: false, why: '降りるのは弱い手だけで、完成した手にはレイズされます。' },
          ],
        },
        {
          street: 'リバー',
          board: ['2c'],
          pot: 9.1,
          say: 'リバーは2♣。BBが4bbをベットしました。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: '必要勝率は約23%。トップペア・トップキッカーなら降りません。' },
            { label: 'フォールド', good: false, why: '小さいベットです。ブラフや弱いQxにも勝てるので降りすぎです。' },
          ],
        },
      ],
      outro: 'BBはJTでストレートでした。ターン8♠で打っていたら、もっと大きく失っていたはずです。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'ターンはオーバーカード・ドロー完成・ブリック・ペアの4つに分けます。**そのカードで強くなる手をどちらが多く持つか**を考えてから、自分の手札を見ます。',
    },
  ],
};

export default lesson;
