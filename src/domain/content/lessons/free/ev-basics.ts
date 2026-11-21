import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'ev-basics',
  blocks: [
    { t: 'h', text: 'この賭け、受けますか？' },
    {
      t: 'rapid',
      q: 'この賭けを受ける？（直感でどうぞ）',
      choices: ['受ける', '受けない'],
      items: [
        { text: '表なら +120、裏なら −100（50%ずつ）', answer: 0, why: '0.5×120 − 0.5×100 = +10。平均で得をします。' },
        { text: '表なら +90、裏なら −100（50%ずつ）', answer: 1, why: '0.5×90 − 0.5×100 = −5。勝ち負けは五分でも平均で損です。' },
        { text: '1/3 で +300、2/3 で −100', answer: 0, why: '100 − 66.7 = +33。負けるほうが多くても得です。' },
        { text: '1/4 で +200、3/4 で −100', answer: 1, why: '50 − 75 = −25。' },
        { text: '80% で +50、20% で −300', answer: 1, why: '40 − 60 = −20。よく勝つのに損な賭けです。' },
        { text: '10% で +1000、90% で −100', answer: 0, why: '100 − 90 = +10。' },
      ],
    },
    { t: 'h', text: '期待値（EV）の計算' },
    { t: 'p', text: '**期待値（EV）**は「同じ状況をくり返したときの1回あたりの平均損益」です。結果ごとに「確率 × 損益」を出して足します。' },
    { t: 'formula', text: 'EV = (確率A × 結果A) + (確率B × 結果B) + …', note: '確率の合計は100%にします' },
    {
      t: 'tree',
      root: 'コイン投げ（表120・裏100）',
      options: [
        { label: '受けない', ev: 0 },
        { label: '受ける', outcomes: [{ label: '表', prob: 0.5, value: 120 }, { label: '裏', prob: 0.5, value: -100 }] },
      ],
      caption: '0.5 × 120 + 0.5 × (−100) = +10。',
    },
    {
      t: 'estimate',
      q: '40%の確率で+300、60%の確率で−100になる選択のEVは？',
      min: -100, max: 200, step: 5, answer: 60, tolerance: 15,
      explain: 'EV = 0.4 × 300 + 0.6 × (−100) = 120 − 60 = +60。勝つ確率が半分以下でも、勝ったときの額が大きければプラスです。',
    },
    { t: 'h', text: 'ポーカーでは：AA対KK' },
    { t: 'p', text: 'AAとKKが100bbずつオールイン。ポットは200bb、AAの勝率は約81%です。' },
    {
      t: 'equity',
      players: [{ label: 'A♠A♥', cards: ['As', 'Ah'], pct: 81 }, { label: 'K♦K♣', cards: ['Kd', 'Kc'], pct: 19 }],
      caption: 'プリフロップのオールイン。AA の勝率は約81%（目安）。',
    },
    {
      t: 'tree',
      root: 'AA で 100bb オールイン（ポット200bb）',
      options: [
        { label: 'フォールド', ev: 0 },
        {
          label: 'オールイン',
          outcomes: [{ label: '勝つ（約81%）', prob: 0.81, value: 100 }, { label: '負ける（約19%）', prob: 0.19, value: -100 }],
          note: '約+62bb',
        },
      ],
      caption: '勝てば +100bb、負ければ −100bb。',
    },
    {
      t: 'estimate',
      q: 'AAが100bbでKKにオールイン（勝率81%）。EVは何bb？（0.81 × 200 − 100）',
      hand: ['As', 'Ah'],
      min: 0, max: 100, step: 1, unit: 'bb', answer: 62, tolerance: 8,
      explain: 'EV = 0.81 × 200 − 100 = +62bb。それでも5〜6回に1回は負けます。',
    },
    { t: 'h', text: '結果ではなく判断を見る' },
    {
      t: 'play',
      title: 'AA で 4bet オールイン',
      hero: 'CO',
      heroCards: ['As', 'Ah'],
      villain: 'BTN',
      villainCards: ['Kd', 'Kc'],
      steps: [
        {
          street: 'プリフロップ', pot: 121.5,
          say: 'あなたは CO で **A♠A♥**。2.5bb オープン、BTN が 8bb に 3bet、あなたが 20bb に 4bet。BTN は 100bb オールイン。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'AA はどのハンドに対しても有利。EV は大きくプラスです。' },
            { label: 'フォールド', good: false, why: '最強のハンドを降りる理由はありません。' },
          ],
        },
        { street: 'フロップ', board: ['Kh', '7c', '2s'], pot: 201.5, say: '相手は **K♦K♣**。フロップに K が落ちました。' },
        { street: 'ターン', board: ['9d'], pot: 201.5, say: 'ターンは 9。' },
        { street: 'リバー', board: ['4h'], pot: 201.5, say: 'リバーは 4。ショーダウンです。' },
      ],
      outro: '負けましたが、コールの判断は正しかったのです。1回の結果ではなく、EV で判断を評価します。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'EV がプラスの判断をくり返せば、回数が増えるほど収支は EV の合計に近づきます。短期の結果で判断を変えないことです。',
    },
  ],
};

export default lesson;
