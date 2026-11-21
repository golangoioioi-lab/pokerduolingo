import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'rb-terms',
  blocks: [
    { t: 'h', text: 'バリュー？ ブラフ？' },
    {
      t: 'rapid',
      q: 'このボードでベットするなら、目的はどっち？',
      choices: ['バリュー', 'ブラフ'],
      items: [
        { cards: ['Ah', 'Kd'], board: ['Ac', '7d', '2s'], answer: 0 },
        { cards: ['Jh', 'Td'], board: ['Ac', '7d', '2s'], answer: 1, why: '役がなく、相手を降ろすためのベットです。' },
        { cards: ['7h', '7c'], board: ['Ac', '7d', '2s'], answer: 0, why: 'スリーカード（セット）です。' },
        { cards: ['Kc', 'Qc'], board: ['Ac', '7d', '2s'], answer: 1, why: 'ペアもなく、勝つには降ろす必要があります。' },
        { cards: ['Ad', 'Qs'], board: ['Ac', '7d', '2s'], answer: 0 },
        { cards: ['6h', '5h'], board: ['Ac', '7d', '2s'], answer: 1 },
      ],
    },
    {
      t: 'compare',
      left: { title: 'バリューベット', cards: ['Ah', 'Kd'], board: ['Ac', '7d', '2s'], points: ['強い手で弱い手にコールさせる'], verdict: 'good' },
      right: { title: 'ブラフ', cards: ['Jh', 'Td'], board: ['Ac', '7d', '2s'], points: ['弱い手で相手を降ろす'], verdict: 'neutral' },
      caption: 'どちらも「ベット」。目的が違う。',
    },
    { t: 'h', text: 'ベットの用語' },
    {
      t: 'table',
      head: ['用語', '意味'],
      rows: [
        ['オープン', 'プリフロップで最初に入るレイズ'],
        ['3ベット', 'オープンに対するレイズ'],
        ['Cベット', 'プリフロップのレイザーがフロップで打つベット'],
        ['オールイン', '残りスタックをすべて賭ける'],
      ],
    },
    {
      t: 'tree',
      root: 'ポット 10bb に 6bb のブラフ',
      options: [
        { label: 'ブラフする', outcomes: [{ label: '相手が降りる', prob: 0.45, value: 10 }, { label: 'コールされて負け', prob: 0.55, value: -6 }] },
        { label: 'チェックして諦める', ev: 0 },
      ],
      caption: '降りる確率が 45%（例）なら EV は +1.2bb。降りる確率が下がると損になる。',
    },
    { t: 'h', text: '状況の用語' },
    {
      t: 'table',
      head: ['用語', '意味'],
      rows: [
        ['ナッツ', 'その場で作れる最強の役'],
        ['ドロー', '完成すれば強くなる未完成の手'],
        ['キッカー', '同じ役のときに比べる残りのカード'],
        ['レンジ', '相手が持ちうる手の集まり'],
        ['エクイティ', 'その時点での勝率（取り分）'],
        ['IP / OOP', '相手より後 / 先に行動する'],
      ],
    },
    {
      t: 'showdown',
      q: 'ナッツを持っているのは誰？ 勝者をタップしてください。',
      board: ['Ah', 'Kh', 'Qh', '7c', '2d'],
      players: [
        { label: 'J♥T♥', cards: ['Jh', 'Th'] },
        { label: 'A♦A♣', cards: ['Ad', 'Ac'] },
        { label: 'K♦Q♦', cards: ['Kd', 'Qd'] },
        { label: '9♣8♣', cards: ['9c', '8c'] },
      ],
      explain: 'J♥T♥ はロイヤルフラッシュ。このボードで作れる最強の役、ナッツです。',
    },
    { t: 'h', text: '用語で1ハンドを追う' },
    {
      t: 'play',
      title: 'CO で A♥K♦',
      hero: 'CO', heroCards: ['Ah', 'Kd'], villain: 'BB', villainCards: ['As', 'Ts'],
      steps: [
        {
          street: 'プリフロップ', pot: 1.5,
          say: 'HJ までフォールド。',
          q: '最初のレイズ（オープン）をする？',
          options: [
            { label: '2.5bb オープン', good: true, why: 'AK はどの席でもオープンします。' },
            { label: '1bb コール（リンプ）', good: false, why: '強い手は自分からレイズで入ります。' },
          ],
        },
        {
          street: 'フロップ', board: ['Ac', '7d', '2s'], pot: 5.5,
          say: 'BB だけがコール。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: '2bb の Cベット', good: true, why: 'トップペア・トップキッカー。弱い A や 7 から払ってもらうバリューです。' },
            { label: 'チェック', good: true, why: 'このボードではチェックも有力で、差は小さい（僅差）です。' },
          ],
        },
        { street: 'ターン', board: ['9h'], pot: 9.5, say: 'BB がコール。ターンは 9。両者チェック。' },
        {
          street: 'リバー', board: ['4c'], pot: 9.5,
          say: 'リバーは 4。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: '6bb バリューベット', good: true, why: 'BB のレンジには弱い A や 7 が多く、払ってもらえます。' },
            { label: 'チェック', good: false, why: '勝てることは多いですが、取れる分を逃します。' },
          ],
        },
      ],
      outro: 'オープン → Cベット → バリューベット。BB の AT にキッカーで勝ちました。',
    },
  ],
};

export default lesson;
