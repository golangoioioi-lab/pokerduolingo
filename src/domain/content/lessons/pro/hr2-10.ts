import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-10',
  blocks: [
    { t: 'p', text: '6人卓・全員 100bb。あなたは HJ で K♠ K♦ を 2.5bb オープンし、CO が 7.5bb に 3ベット。ほかはフォールドしました。4ベットポットは SPR が 2 を切る浅い戦いです。サイズの選び方と、オールインを受けたときの計算を扱います。' },
    { t: 'cards', hands: [{ label: 'あなた（HJ）', cards: ['Ks', 'Kd'] }] },
    { t: 'h', text: 'プリフロップ' },
    {
      t: 'quiz', q: 'CO の 3ベット（7.5bb）に対して、KK の選択は？',
      hand: ['Ks', 'Kd'],
      options: ['コール', '22bb に 4ベット', '100bb のオールイン'],
      answer: 1,
      explain: 'KK は AA 以外のすべてに有利です。4ベットで QQ・JJ・AK・AQs などからさらにチップを集められます。コールでは取れる額が小さく、オールインは CO のブラフや弱い手をすべて降ろして AA などにしかコールされません。3ベットの約3倍（22bb 前後）が標準的な 4ベットサイズです。',
    },
    { t: 'p', text: '22bb に 4ベットし、CO がコール。ポットは 45.5bb、残りは 78bb です。' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: 'フォールド', folded: true },
        { pos: 'HJ', hero: true, action: '2.5bb オープン → 22bb に 4ベット', bet: 22, cards: ['Ks', 'Kd'] },
        { pos: 'CO', action: '7.5bb に 3ベット → コール', bet: 22 },
        { pos: 'BTN', action: 'フォールド', folded: true },
        { pos: 'SB', action: 'フォールド', bet: 0.5, folded: true },
        { pos: 'BB', action: 'フォールド', bet: 1, folded: true },
      ],
      pot: 45.5,
    },
    {
      t: 'estimate', q: 'フロップ開始時の SPR（残りスタック ÷ ポット）は？',
      hand: ['Ks', 'Kd'],
      min: 0, max: 5, step: 0.1, unit: '', answer: 1.7, tolerance: 0.5,
      explain: '78 ÷ 45.5 ≒ 1.7 です。SPR が 2 を切ると、1回のベットでもうスタックを入れる流れになります。',
    },
    { t: 'h', text: 'フロップ：9♣ 7♣ 4♦' },
    { t: 'p', text: 'オーバーペアですが、クラブのフラッシュドローと 86・T8 などのストレートドローがあるボードです。' },
    {
      t: 'quiz', q: 'ポット 45.5bb、残り 78bb。あなたが先に行動します。選択は？',
      hand: ['Ks', 'Kd'], board: ['9c', '7c', '4d'],
      options: ['チェック', '12bb（約4分の1）をベット', '78bb のオールイン'],
      answer: 1,
      explain: 'SPR が低いので、小さいベットでも「後には引けない」状況を作れます。12bb なら CO の QQ・JJ・TT や A♣ を含むドローもコールやオールインで応じます。いきなりのオールインはそれらの多くを降ろします。チェックだと CO にフリーでカードを見せる可能性があります。',
    },
    { t: 'p', text: '12bb ベットに CO がオールイン（78bb）。あなたはあと 66bb でコールできます。' },
    {
      t: 'estimate', q: '66bb をコールするのに必要な勝率は？',
      hand: ['Ks', 'Kd'], board: ['9c', '7c', '4d'],
      min: 0, max: 100, step: 1, unit: '%', answer: 33, tolerance: 5,
      explain: '最終ポットは 45.5 + 78 + 78 = 201.5bb。払うのは 66bb なので 66 ÷ 201.5 ≒ 33% です。',
    },
    { t: 'odds', pot: 69.5, bet: 66, equity: 55, caption: 'CO のオールインレンジに対する KK の勝率は目安で 55% 前後。必要勝率 約33% を大きく上回ります。' },
    {
      t: 'quiz', q: 'あなたの選択は？',
      hand: ['Ks', 'Kd'], board: ['9c', '7c', '4d'],
      options: ['フォールド（AA やセットが怖い）', 'コール'],
      answer: 1,
      explain: 'オールインには AA・セット（99・77・44）もありますが、QQ・JJ・TT や A♣K♣・A♣Q♣・8♣6♣ のようなドローも多く含まれます。KK はレンジ全体に半分以上の勝率があり、必要な 33% を大きく上回ります。SPR が低いポットでこの値段でオーバーペアを降りることはほとんどありません。',
    },
    { t: 'p', text: 'コールすると CO は A♣ Q♣（ナッツフラッシュドロー＋オーバーカード）。ターン T♥、リバー 2♠ で KK が勝ち、201.5bb を獲得しました。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['Ks', 'Kd'] }, { label: 'CO', cards: ['Ac', 'Qc'] }], board: ['9c', '7c', '4d', 'Th', '2s'] },
    { t: 'h', text: '振り返り' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 45.5, actions: ['HJ（あなた）2.5bb オープン', 'CO 7.5bb に 3ベット', 'あなた 22bb に 4ベット', 'CO コール'] },
        { street: 'フロップ', board: ['9c', '7c', '4d'], pot: 45.5, actions: ['あなた 12bb ベット', 'CO 78bb オールイン', 'あなた コール'] },
        { street: 'ターン', board: ['Th'], pot: 201.5, actions: ['（オールイン済み）'] },
        { street: 'リバー', board: ['2s'], pot: 201.5, actions: ['（オールイン済み）'] },
        { street: 'ショーダウン', pot: 201.5, actions: ['KK が A ハイに勝つ'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    {
      t: 'pot',
      steps: [
        { label: '3ベット後', pot: 11.5, stack: 92.5 },
        { label: 'フロップ開始', pot: 45.5, stack: 78 },
        { label: 'オールイン', pot: 201.5, stack: 0 },
      ],
      caption: '4ベットした時点で SPR は 1.7。フロップで1回ベットすれば、もう全額が入る深さです。',
    },
    { t: 'tip', text: 'SPR が 2 を切ったら、オーバーペアは基本的に「スタックを入れる手」です。小さく打って相手に選択させ、オールインを受けたら必要勝率とレンジ全体での勝率を比べるだけで判断できます。' },
  ],
};

export default lesson;
