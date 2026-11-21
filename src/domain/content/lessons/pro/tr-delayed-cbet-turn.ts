import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'tr-delayed-cbet-turn',
  blocks: [
    { t: 'h', text: 'まずやってみる：どのターンで打つ？' },
    {
      t: 'p',
      text: 'BTNオープン、BBコール。フロップ T♦8♣7♣ は両者チェック。ターンでBBがまたチェックしました。ここで打つのが**ディレイドCベット**です。',
    },
    {
      t: 'rapid',
      q: 'BTNのディレイドCベットに向くターン？',
      choices: ['向く', '向かない'],
      items: [
        { cards: ['Ks'], board: ['Td', '8c', '7c'], answer: 0, why: 'オーバーカード。BTNのKQ・KJ・AKに当たり、何も完成させません。' },
        { cards: ['6d'], board: ['Td', '8c', '7c'], answer: 1, why: '9xと54でストレートが完成。BBの9x・65sに当たります。' },
        { cards: ['Ad'], board: ['Td', '8c', '7c'], answer: 0, why: 'オーバーカードで、ドローも完成しません。' },
        { cards: ['9s'], board: ['Td', '8c', '7c'], answer: 1, why: 'J・6を持つ手でストレートが完成し、BBに当たりやすいカードです。' },
        { cards: ['5c'], board: ['Td', '8c', '7c'], answer: 1, why: 'クラブのフラッシュと、64のストレートが完成します。' },
        { cards: ['4c'], board: ['Td', '8c', '7c'], answer: 1, why: 'クラブのフラッシュと65のストレートが完成します。' },
      ],
    },
    { t: 'h', text: '打ちやすいターン、打ちにくいターン' },
    {
      t: 'compare',
      left: {
        title: 'ターン K♠',
        board: ['Td', '8c', '7c', 'Ks'],
        points: ['BTNはKQ・KJ・AKを多く持つ', '何も完成しない', 'ディレイドCベットに向く'],
        verdict: 'good',
      },
      right: {
        title: 'ターン 6♦',
        board: ['Td', '8c', '7c', '6d'],
        points: ['9xと54でストレート完成', 'BBの9x・65sに当たりやすい', 'BTNはチェックを増やす'],
        verdict: 'bad',
      },
      caption: 'フロップがチェックで回ったあと、BBがターンもチェックした場面',
    },
    {
      t: 'p',
      text: 'フロップで強い手をすべて打つと、チェックしたレンジが弱い手だけになり、BBに攻められます。BBに当たりやすいボードでは、QQやATsの一部もチェックで回しておきます。',
    },
    {
      t: 'quiz',
      q: 'フロップでチェックするレンジに、オーバーペアの一部も入れる理由は？',
      board: ['Td', '8c', '7c'],
      options: ['チェックしたレンジが弱い手だけにならないように', 'オーバーペアはフロップで打つと損だから', 'BBがフォールドしやすくなるから'],
      answer: 0,
      explain: 'チェックしたレンジが弱い手だけだと、BBはターンで積極的に打ってきます。強い手も少し混ぜて、ターン以降のレンジを守ります。',
    },
    { t: 'h', text: 'サイズは大きめ' },
    {
      t: 'p',
      text: 'ポットはまだ5.5bb。1/3では弱いペアやドローに安くリバーを見せてしまうので、**2/3〜ポット**が目安です。',
    },
    {
      t: 'estimate',
      q: 'ポット5.5bbで4bbのディレイドCベット。ブラフに必要なフォールド率は？',
      board: ['Td', '8c', '7c', 'Ks'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 42,
      tolerance: 8,
      explain: '4 ÷ (4 + 5.5) ≈ 42% です。BBのコールに必要な勝率は 4 ÷ 13.5 ≈ 30% で、別の数字です。',
    },
    {
      t: 'tree',
      root: 'BTNがA♠Q♦でターン K♠（ポット5.5bb）',
      options: [
        {
          label: '4bbベット',
          outcomes: [
            { label: 'BBがフォールド', prob: 0.5, value: 5.5 },
            { label: 'コール→リバーで逆転', prob: 0.06, value: 9.5 },
            { label: 'コール→負け', prob: 0.44, value: -4 },
          ],
        },
        {
          label: 'チェック',
          outcomes: [
            { label: 'ショーダウンで勝つ', prob: 0.25, value: 5.5 },
            { label: '負ける', prob: 0.75, value: 0 },
          ],
        },
      ],
      caption: '確率は目安。ベットのEV約1.6bb、チェック約1.4bb。差は小さい',
    },
    {
      t: 'p',
      text: 'Aハイのブラフは差が小さく、相手次第です。よく降りる相手ならベット、小さいペアを離さない相手ならチェックが合います。',
    },
    { t: 'h', text: 'もう一度やる' },
    {
      t: 'play',
      title: 'BTNでK♥J♥',
      hero: 'BTN',
      heroCards: ['Kh', 'Jh'],
      villain: 'BB',
      villainCards: ['9c', '9d'],
      steps: [
        {
          street: 'フロップ',
          board: ['Td', '8c', '7c'],
          pot: 5.5,
          say: 'BTNでオープンし、BBがコール。BBに当たりやすいボードで、BBはチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: 'BBに当たりやすいボード。9でストレートのガットショットを持って、ターンを見ます。' },
            { label: '1.8bbベット', good: true, why: '打つことも可能です。どちらも使われる場面です。' },
          ],
        },
        {
          street: 'ターン',
          board: ['Ks'],
          pot: 5.5,
          say: 'チェックで回った。ターンはK♠でトップペア。BBはまたチェック。',
          q: 'どうする？',
          options: [
            { label: '4bbベット', good: true, why: 'BTNに有利なカードでトップペア。大きめに打ってバリューを取ります。' },
            { label: '1.5bbベット', good: false, why: 'ポットが小さいので、小さすぎるとドローに安くリバーを見せます。' },
            { label: 'チェック', good: false, why: '2回チェックすると、9xや弱いペアから取り損ねます。' },
          ],
        },
        { street: 'リバー', board: ['2h'], pot: 13.5, say: 'BBがコール。リバーは2♥。両者チェック。' },
      ],
      outro: 'BBは99でコールしていました。有利なターンで大きめに打つと、弱いペアから取れます。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'ディレイドCベットは、BTNに有利なターンで、2/3〜ポットの大きめのサイズで。フロップのチェックレンジに強い手も混ぜておきます。',
    },
  ],
};

export default lesson;
