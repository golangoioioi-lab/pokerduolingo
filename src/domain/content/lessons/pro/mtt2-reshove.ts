import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'mtt2-reshove',
  blocks: [
    { t: 'h', text: 'オープンにオールインで返す' },
    {
      t: 'play',
      title: 'BTN 20bb で A8s',
      hero: 'BTN',
      heroCards: ['Ad', '8d'],
      villain: 'CO',
      villainCards: ['As', 'Qh'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 4.7,
          say: 'ブラインド0.5/1bb、BBアンティ1bb。CO（40bb）が手の約27%で2.2bb にオープン。あなたは BTN で20bb。',
          q: 'A8s でどうする？',
          options: [
            { label: '20bb オールイン（リショーブ）', good: true, why: 'CO は約78%降ります。降りれば4.7bb、コールされても約30%勝てます。' },
            { label: 'フォールド', good: false, why: '広いオープンに対して、A8s は押して利益が出る手です。' },
          ],
        },
        { street: 'フロップ', board: ['Kc', '8h', '4s'], pot: 42.5, say: 'CO は **A♠Q♥** でコール。フロップで8のペアができました。' },
        { street: 'ターン', board: ['2d'], pot: 42.5, say: 'ターンは 2。' },
        { street: 'リバー', board: ['Jc'], pot: 42.5, say: 'リバーは J。' },
      ],
      outro: '今回はコールされて勝ちましたが、利益の中心は CO が降りる約78%の場面です。',
    },
    { t: 'p', text: '相手のオープンに3betの代わりにオールインすることを**リショーブ**と言います。15〜25bb で最もよく使う武器です。相手のオープン分がポットに加わるので、取れる額が大きくなります。' },
    { t: 'h', text: '降りる確率がすべて' },
    {
      t: 'seats',
      seats: [
        { pos: 'CO', action: '2.2bbオープン（40bb）', bet: 2.2 },
        { pos: 'BTN', hero: true, action: 'あなた 20bb オールイン', bet: 20, cards: ['Ad', '8d'] },
        { pos: 'SB', folded: true, bet: 0.5 },
        { pos: 'BB', folded: true, bet: 1 },
      ],
      pot: 24.7,
      caption: 'CO が降りれば4.7bb。コールされればポット42.5bb で、勝てば +22.5bb、負ければ −20bb',
    },
    {
      t: 'equity',
      players: [{ label: 'あなた A8s', cards: ['Ad', '8d'], pct: 30 }, { label: 'COのコール 88+, AJs+, AQo+', pct: 70 }],
      caption: 'コールされたときの勝率（目安）',
    },
    {
      t: 'tree',
      root: 'BTNで20bb、A8s。COの2.2bbオープンに対して',
      options: [
        {
          label: 'リショーブ（オールイン）',
          outcomes: [
            { label: 'COが降りる', prob: 0.78, value: 4.7 },
            { label: 'コールされて勝つ', prob: 0.066, value: 22.5 },
            { label: 'コールされて負ける', prob: 0.154, value: -20 },
          ],
        },
        { label: 'フォールド', ev: 0 },
      ],
      caption: 'コールされる22%のうち、勝ち30%・負け70%。EV は約 +2.1bb',
    },
    {
      t: 'estimate',
      q: 'CO が降りる確率が60%に下がると（コール時の勝率30%は同じ）、リショーブのEVは？',
      min: -4, max: 4, step: 0.1, unit: 'bb', answer: -0.1, tolerance: 1,
      explain: 'コールされる40%のうち勝ち0.12、負け0.28。0.6 × 4.7 + 0.12 × 22.5 − 0.28 × 20 ≒ −0.08bb。ほぼ損得なしになります。',
    },
    { t: 'h', text: 'コールする側は42%必要' },
    {
      t: 'odds',
      pot: 6.9,
      bet: 17.8,
      equity: 45,
      caption: 'COは追加17.8bbを払い、42.5bbのポットを争う。必要勝率は約42%。勝率45%は例',
    },
    { t: 'p', text: 'ATo や KQo のような手では、CO は降りることが多くなります。だからリショーブがよく通ります。' },
    {
      t: 'quiz',
      q: 'CO の広いオープンに、20bb の BTN でリショーブする手として最も向くのは？',
      options: ['A8s', '72o', 'J4o', '93o'],
      optionCards: [['Ad', '8d'], ['7h', '2c'], ['Jd', '4c'], ['9c', '3d']],
      answer: 0,
      explain: 'A8s は A のブロッカーで相手の AA・AK・AQ を減らし、コールされても勝率が残ります。他の3つはコールされると大きく不利です。',
    },
    { t: 'h', text: 'リショーブする？' },
    {
      t: 'rapid',
      q: '相手のオープン（2.2bb）にリショーブする？ 相手のオープンの広さとスタックで判断します。',
      choices: ['リショーブ', '控える'],
      items: [
        { text: 'BTN 20bb・CO の広いオープン・A8s', answer: 0, why: '広いオープン＋20bb。典型的なリショーブです。' },
        { text: 'BTN 20bb・UTG のタイトなオープン・A8s', answer: 1, why: 'UTG は強い手が中心で、降りる確率もコール時の勝率も下がります。' },
        { text: 'BTN 60bb・CO のオープン・A8s', answer: 1, why: '60bb を賭けて4.7bb を取りにいくのは割に合いません。' },
        { text: 'SB 18bb・BTN の広いオープン・77', answer: 0, why: '中くらいのペアはオールインで勝率を全部使えます。' },
        { text: 'SB 22bb・CO の広いオープン・KQs', answer: 0, why: 'KQs は広いオープンの弱い部分に強い手です。' },
        { text: 'BTN 50bb・CO のオープン・55', answer: 1, why: '深いと、降ろして得る額に対してリスクが大きすぎます。' },
        { text: 'BTN 20bb・CO の広いオープン・ATo', answer: 0, why: 'A のブロッカーがあり、CO の広いレンジに強い手です。' },
        { text: 'BTN 20bb・UTG のタイトなオープン・K9o', answer: 1, why: 'タイトなオープンには、コールされると大きく不利です。' },
      ],
    },
    { t: 'tip', text: '判断材料は「相手のオープンの広さ」と「自分のスタック（15〜25bb）」。どちらも合えば、コール時の勝率が30%前後の手でも候補になります。' },
  ],
};

export default lesson;
