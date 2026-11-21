import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'opp-calling-station',
  blocks: [
    { t: 'h', text: 'まず判断してみる' },
    {
      t: 'rapid',
      q: 'リバー。相手はコーリングステーション（ここまでコールのみ）。あなたから打つ？',
      choices: ['ベット', 'チェック'],
      items: [
        { cards: ['Kh', 'Jd'], board: ['Kd', '9s', '5c', '2h', '7d'], answer: 0, why: 'トップペアは、弱いペアのコールから大きく取れます。' },
        { cards: ['Qs', 'Js'], board: ['Kd', '9s', '5c', '2h', '7d'], answer: 1, why: 'ステーションにブラフは通りません。' },
        { cards: ['9c', '8c'], board: ['Kd', '9s', '5c', '2h', '7d'], answer: 0, why: 'セカンドペアでも、もっと弱い手がコールしてきます。' },
        { cards: ['Td', '4d'], board: ['Kd', '9s', '5c', '2h', '7d'], answer: 1 },
        { cards: ['5h', '5d'], board: ['Kd', '9s', '5c', '2h', '7d'], answer: 0 },
        { cards: ['6h', '4h'], board: ['Kd', '9s', '5c', '2h', '7d'], answer: 1, why: 'ストレートは外れました。ブラフはしません。' },
        { cards: ['Ac', 'Kc'], board: ['Kd', '9s', '5c', '2h', '7d'], answer: 0 },
        { cards: ['Ah', '3c'], board: ['Kd', '9s', '5c', '2h', '7d'], answer: 1, why: 'A ハイは打っても、勝っている手は降り、負けている手しか払いません。' },
      ],
    },
    { t: 'p', text: '**コーリングステーション**は降りない相手です（VPIP 40% 以上、PFR 10% 未満、WTSD 35% 以上）。方針は「**強い手で大きく、弱い手ではブラフしない**」です。' },
    { t: 'h', text: 'バリューは大きく' },
    {
      t: 'tree',
      root: 'リバー。ポット 30bb、こちらはツーペア。相手はステーション',
      options: [
        { label: 'チェック', ev: 0, note: 'ショーダウンの分は共通なので 0 とする' },
        { label: '10bb（1/3）', outcomes: [{ label: 'コール（勝ち）', prob: 0.8, value: 10 }, { label: 'フォールド', prob: 0.2, value: 0 }] },
        { label: '20bb（2/3）', outcomes: [{ label: 'コール（勝ち）', prob: 0.7, value: 20 }, { label: 'フォールド', prob: 0.3, value: 0 }] },
        { label: '30bb（ポット）', outcomes: [{ label: 'コール（勝ち）', prob: 0.6, value: 30 }, { label: 'フォールド', prob: 0.4, value: 0 }] },
      ],
      caption: 'コール率は目安。サイズにあまり反応しない相手なら、大きいほど得です。',
    },
    {
      t: 'estimate',
      q: 'ポット（30bb）のベットにコールされる率が 50% に下がった場合、EV は何 bb？',
      min: 0,
      max: 30,
      step: 1,
      unit: 'bb',
      answer: 15,
      tolerance: 2,
      explain: '0.5 × 30 = +15bb。2/3 ポット（+14bb）より、まだ少し大きくなります。',
    },
    { t: 'h', text: '薄いバリューも打つ' },
    {
      t: 'compare',
      left: { title: 'レギュラー相手のセカンドペア', cards: ['Ts', '9s'], board: ['Kd', 'Tc', '6h', '3s', '2d'], points: ['呼ばれるのは K 以上が中心', 'チェックしてショーダウン'], verdict: 'neutral' },
      right: { title: 'ステーション相手のセカンドペア', cards: ['Ts', '9s'], board: ['Kd', 'Tc', '6h', '3s', '2d'], points: ['6 のペアや A ハイでもコール', '1/2 ポット程度でバリュー'], verdict: 'good' },
    },
    {
      t: 'warn',
      text: 'ステーションも強い手ではレイズします。コールしかしない相手のレイズには、ワンペアは降りる候補です。',
    },
    { t: 'h', text: 'もう一度：大きく取り切る' },
    {
      t: 'play',
      title: 'BTN の AK vs BB のステーション',
      hero: 'BTN',
      heroCards: ['As', 'Kd'],
      villain: 'BB',
      villainCards: ['7s', '6s'],
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'あなたは BTN で **A♠K♦** を 2.5bb オープン。BB（48 / 7、WTSD 40%）がコール。' },
        {
          street: 'フロップ',
          board: ['Kh', '7c', '3d'],
          pot: 5.5,
          say: 'フロップは **K♥7♣3♦**。トップペア・トップキッカー。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: '1.8bb ベット', good: false, why: '悪くありませんが、降りない相手にはもっと大きく打てます。' },
            { label: '4bb ベット', good: true, why: '7 や 3 のペアもコールしてくれます。' },
            { label: 'チェック', good: false, why: 'この相手は自分から打ってくれません。' },
          ],
        },
        {
          street: 'ターン',
          board: ['9s'],
          pot: 13.5,
          say: 'BB がコール。ターンは **9♠**。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: '5bb ベット', good: false, why: '小さすぎます。コール率はサイズであまり変わりません。' },
            { label: '12bb ベット', good: true, why: 'ポットの約9割。弱いペアやドローから大きく取ります。' },
          ],
        },
        {
          street: 'リバー',
          board: ['2c'],
          pot: 37.5,
          say: 'BB がコール。リバーは **2♣**。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: '一番取れるストリートを逃します。' },
            { label: '12bb ベット', good: false, why: '払ってもらえますが、取り分が小さくなります。' },
            { label: '30bb ベット', good: true, why: '降りない相手には大きく打ちます。' },
          ],
        },
      ],
      outro: 'ステーションには「当たったら大きく、外れたら諦める」を徹底します。',
    },
    {
      t: 'quiz',
      q: '普段コールしかしないステーションが、ターンでチェックレイズ。こちらはトップペア。読みは？',
      hand: ['Kh', 'Qd'],
      board: ['Kc', '8s', '3d', '2h'],
      options: ['強い手の可能性が高い', 'ブラフが多い', 'ドローしかない'],
      answer: 0,
      explain: 'パッシブな相手のレイズは強い手が中心です。トップペアでも負けていることが多くなります。',
    },
  ],
};

export default lesson;
