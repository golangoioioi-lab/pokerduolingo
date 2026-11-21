import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr-05',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。BTN のオープンに BB の K♦J♦ でコールします。リバーの大きいベットに、相手のバリューとブラフを数えて答えます。' },
    {
      t: 'play',
      title: 'BB で KJ のブラフキャッチ',
      hero: 'BB',
      heroCards: ['Kd', 'Jd'],
      villain: 'BTN',
      villainCards: ['Ah', '5h'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'BTN が 2.5bb にオープン、SB はフォールド。あなたは BB で **K♦J♦**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'あと 1.5bb で参加できる十分な手です。' },
            { label: 'コール', good: true, why: 'BTN の広いオープンに対して守る手です。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Jh', '8h', '3c'],
          pot: 5.5,
          say: 'J のトップペア。チェック、BTN の 2bb ベットにコール。',
        },
        {
          street: 'ターン',
          board: ['2s'],
          pot: 9.5,
          say: '2♠。チェック、BTN の 6.5bb ベットにコール。',
        },
        {
          street: 'リバー',
          board: ['2d'],
          pot: 37.5,
          say: '2♦ でフラッシュも T9 のストレートも未完成。あなたのチェックに、BTN が 15bb（約67%）をベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'BTN のベットのうちブラフは約36%で、必要勝率29%を上回ります。' },
            { label: 'フォールド', good: false, why: '外れたハートや T9 のブラフが十分に含まれます。' },
          ],
        },
      ],
      outro: 'BTN は A♥5♥ の外れたフラッシュドロー。52.5bb を獲得しました。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'p', text: '必要勝率は 15 ÷ 52.5 ≒ 29% です。3ストリート打つ BTN の手を、勝っているバリューと負けているブラフに分けて数えます。' },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ', pot: 5.5, stack: 97.5 },
        { label: 'ターン', pot: 9.5, stack: 95.5 },
        { label: 'リバー', pot: 22.5, stack: 89 },
      ],
      caption: 'リバーで15bbのベットを受ける。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'オーバーペア・Jx', hands: ['AA', 'KK', 'JJ', 'AJ'] },
        { label: 'セット・ツーペア', hands: ['88', '33', '22', 'J8s'] },
      ],
      dead: ['Jh', '8h', '3c', '2s', '2d', 'Kd', 'Jd'],
      caption: 'BTNのバリューは合計27コンボ。ブラフは外れたハート11＋T9 の一部4＝15コンボ。',
    },
    { t: 'odds', pot: 22.5, bet: 15, equity: 36, caption: 'ブラフの割合は 15÷(27+15)≒36%。必要勝率29%を上回る。' },
    {
      t: 'quiz',
      q: '手札が次のどちらだと、コールしやすい？（ボードは同じ）',
      board: ['Jh', '8h', '3c', '2s', '2d'],
      options: ['K♦ J♦', 'K♥ J♦'],
      optionCards: [['Kd', 'Jd'], ['Kh', 'Jd']],
      answer: 0,
      explain: 'K♥ は相手のブラフ（A♥K♥・K♥Q♥・K♥T♥）を3コンボ消し、ブラフ割合が 12 ÷ 39 ≒ 31% に下がります。K♦ はブラフを減らさず KK だけを減らします。',
    },
    { t: 'h', text: 'もう一度：相手が変わると' },
    {
      t: 'play',
      title: '固い BTN の同じライン',
      hero: 'BB',
      heroCards: ['Kd', 'Jd'],
      villain: 'BTN',
      steps: [
        {
          street: 'ターン',
          board: ['Jh', '8h', '3c', '2s'],
          pot: 9.5,
          say: '同じハンド。ただし BTN はブラフをほとんど打たない固いプレイヤーで、ブラフは半分の約6コンボしか持ちません。',
        },
        {
          street: 'リバー',
          board: ['2d'],
          pot: 37.5,
          say: 'ターンはコール。リバー 2♦ で、BTN がまた 15bb をベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: false, why: 'ブラフは 6 ÷ 33 ≒ 18% で、必要勝率29%に届きません。' },
            { label: 'フォールド', good: true, why: 'バリューばかりのレンジには、トップペアでも降ります。' },
          ],
        },
      ],
      outro: '手札もボードも同じでも、相手のブラフの量で答えが変わります。',
    },
    { t: 'tip', text: 'まずポットオッズで必要勝率を出し、相手のブラフの割合と比べます。バリューを減らしてブラフを減らさない手札が、良いブラフキャッチャーです。' },
  ],
};

export default lesson;
