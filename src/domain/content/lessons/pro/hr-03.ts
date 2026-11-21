import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr-03',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。BTN のオープンに BB の A♥5♥ でコールし、ドローで自分からレイズする「セミブラフ」を試します。' },
    {
      t: 'play',
      title: 'BB で A5s のセミブラフ',
      hero: 'BB',
      heroCards: ['Ah', '5h'],
      villain: 'BTN',
      villainCards: ['Ks', 'Qd'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'BTN が 2.5bb にオープン、SB はフォールド。あなたは BB で **A♥5♥**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'あと 1.5bb で参加でき、スーテッドの A は十分戦えます。' },
            { label: 'コール', good: true, why: '安く参加でき、ナッツフラッシュを狙える手です。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Kh', '7h', '2c'],
          pot: 7.5,
          say: 'あなたはチェック。BTN が 2bb（約36%）をベット。ナッツフラッシュドローです。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: '必要勝率約17%に対し、ドローの勝率は約35%あります。' },
            { label: 'コール', good: false, why: '悪くありませんが、降ろす利益を取りこぼします。' },
            { label: '7bb にチェックレイズ', good: true, why: '約48%降りれば即利益で、コールされても完成の勝率が残ります。' },
          ],
        },
        {
          street: 'ターン',
          board: ['9s'],
          pot: 19.5,
          say: 'BTN がコール。9♠ でフラッシュは未完成。あなたが先に行動します。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: '弱い K や 7x を降ろす機会を失います。' },
            { label: '12bb（約60%）ベット', good: true, why: '約38%降りれば即利益で、コールされても約20%で完成します。' },
            { label: 'オールイン（90.5bb）', good: false, why: '降りる手は小さくても降り、コールされたときの損失だけ増えます。' },
          ],
        },
        {
          street: 'リバー',
          board: ['3h'],
          pot: 43.5,
          say: 'BTN がコール。3♥ でナッツフラッシュが完成しました。',
          q: 'どうする？',
          options: [
            { label: 'チェックして、ベットされたらレイズ', good: false, why: 'K のペアの多くはチェックバックし、取りこぼします。' },
            { label: '30bb（約70%）ベット', good: true, why: 'ここまで来た K のペアがコールしやすい大きさで、自分から打ちます。' },
          ],
        },
      ],
      outro: 'BTN は K♠Q♦ でコールし、103.5bb を獲得。降ろす利益と完成する利益の両方を使いました。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'p', text: 'コールだけでも必要勝率は約17%で、ドローの勝率約35%を下回ります。レイズすると、そこに相手を降ろす利益が加わります。' },
    { t: 'odds', pot: 7.5, bet: 2, equity: 35, caption: 'BTN の 2bb ベット後。コールでも利益が出るドロー。' },
    {
      t: 'estimate',
      q: 'ポット 7.5bb で 7bb にレイズ。BTN が何%降りれば即利益？',
      hand: ['Ah', '5h'],
      board: ['Kh', '7h', '2c'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 48,
      tolerance: 6,
      explain: '追加で出すのは 7bb、降ろせば取れるのは 7.5bb。7 ÷（7 + 7.5）≒ 48%。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ', pot: 5.5, stack: 97.5 },
        { label: 'ターン', pot: 19.5, stack: 90.5 },
        { label: 'リバー', pot: 43.5, stack: 78.5 },
      ],
      caption: 'チェックレイズでポットが約3.5倍になり、SPRは約18から約2に下がる。',
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 1.5, actions: ['BTNが2.5bbにオープン', 'あなた（BB）がコール'] },
        { street: 'フロップ', board: ['Kh', '7h', '2c'], pot: 5.5, actions: ['あなたがチェック、BTNが2bbベット', 'あなたが7bbにチェックレイズ、BTNコール'] },
        { street: 'ターン', board: ['9s'], pot: 19.5, actions: ['あなたが12bbベット、BTNコール'] },
        { street: 'リバー', board: ['3h'], pot: 43.5, actions: ['あなたが30bbベット、BTNコール'] },
        { street: 'ショーダウン', pot: 103.5, actions: ['BTNはK♠Q♦、あなたのナッツフラッシュが勝ち'] },
      ],
    },
    { t: 'h', text: 'もう一度：アウツを数える' },
    {
      t: 'outs',
      q: 'ターン 9♠ の時点。フラッシュが完成するカードを全部タップ。',
      hand: ['Ah', '5h'],
      board: ['Kh', '7h', '2c', '9s'],
      target: 'フラッシュ',
      explain: 'ハート13枚から見えている4枚を引いて9枚。9 ÷ 46 ≒ 20% でリバーに完成します。',
    },
    { t: 'tip', text: 'セミブラフは「降ろせる利益」と「完成したときの利益」の両方で成り立ちます。負けない完成形を持つナッツドローが最適です。' },
  ],
};

export default lesson;
