import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-10',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。HJ で K♠K♦ をオープンし、CO に 3ベットされます。SPR が 2 を切る 4ベットポットで、サイズとオールインへの対応を考えます。' },
    {
      t: 'play',
      title: 'HJ で KK、4ベットポット',
      hero: 'HJ',
      heroCards: ['Ks', 'Kd'],
      villain: 'CO',
      villainCards: ['Ac', 'Qc'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 11.5,
          say: 'あなたは 2.5bb でオープン。CO が **7.5bb** に 3ベットし、ほかはフォールド。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: false, why: '取れる額が小さくなります。' },
            { label: '22bb に 4ベット', good: true, why: 'KK は AA 以外に有利。QQ・JJ・AK・AQs などからさらに集めます。' },
            { label: '100bb オールイン', good: false, why: 'ブラフや弱い手がすべて降り、AA などにしかコールされません。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['9c', '7c', '4d'],
          pot: 45.5,
          say: 'CO がコール。残りは 78bb（SPR 約1.7）。フラッシュドローとストレートドローがあるボードで、あなたが先に行動します。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'CO にフリーでカードを見せることがあります。' },
            { label: '12bb（約1/4）ベット', good: true, why: 'SPR が低いので小さく打っても後に引けません。QQ〜TT やドローがコールやオールインで応じます。' },
            { label: '78bb オールイン', good: false, why: 'QQ〜TT やドローの多くが降ります。' },
          ],
        },
        {
          street: 'フロップ',
          pot: 135.5,
          say: 'CO が **78bb** のオールイン。コールにはあと 66bb 必要です。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'AA やセットもいますが、QQ〜TT やクラブのドローも多く含まれます。' },
            { label: 'コール', good: true, why: '必要勝率 約33% に対し、レンジ全体への勝率は 55% 前後です。' },
          ],
        },
        { street: 'ターン', board: ['Th'], pot: 201.5, say: 'オールイン済み。CO は A♣Q♣ のナッツフラッシュドロー＋オーバーカードでした。' },
        { street: 'リバー', board: ['2s'], pot: 201.5, say: 'クラブも A も Q も来ませんでした。' },
      ],
      outro: 'KK が残り、201.5bb を獲得。SPR が 2 を切ったら、オーバーペアはスタックを入れる手です。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'p', text: '4ベットポットは、フロップで1回打てば全額が入る深さです。' },
    {
      t: 'pot',
      steps: [
        { label: '3ベット後', pot: 11.5, stack: 92.5 },
        { label: 'フロップ開始', pot: 45.5, stack: 78 },
        { label: 'オールイン', pot: 201.5, stack: 0 },
      ],
      caption: '4ベットした時点で SPR は 1.7。フロップで1回ベットすれば、もう全額が入る深さです。',
    },
    {
      t: 'estimate', q: 'フロップ開始時の SPR（残りスタック ÷ ポット）は？',
      hand: ['Ks', 'Kd'],
      min: 0, max: 5, step: 0.1, unit: '', answer: 1.7, tolerance: 0.5,
      explain: '78 ÷ 45.5 ≒ 1.7 です。SPR が 2 を切ると、1回のベットでスタックを入れる流れになります。',
    },
    {
      t: 'estimate', q: 'CO のオールイン。66bb をコールするのに必要な勝率は？',
      hand: ['Ks', 'Kd'], board: ['9c', '7c', '4d'],
      min: 0, max: 100, step: 1, unit: '%', answer: 33, tolerance: 5,
      explain: '最終ポットは 45.5 + 78 + 78 = 201.5bb。払うのは 66bb なので 66 ÷ 201.5 ≒ 33% です。',
    },
    { t: 'odds', pot: 69.5, bet: 66, equity: 55, caption: 'CO のオールインレンジに対する KK の勝率は目安で 55% 前後。必要勝率 約33% を大きく上回ります。' },
    {
      t: 'equity',
      players: [
        { label: 'あなた', cards: ['Ks', 'Kd'], pct: 55 },
        { label: 'CO', cards: ['Ac', 'Qc'], pct: 45 },
      ],
      board: ['9c', '7c', '4d'],
      caption: '実際の A♣Q♣ に対しても、KK はフロップ時点で有利でした。',
    },
    { t: 'h', text: 'もう一度：オールインしてくる手' },
    {
      t: 'order',
      q: 'フロップ 9♣7♣4♦。CO のオールインにありそうな手と KK を、今の強さの順にタップ。',
      board: ['9c', '7c', '4d'],
      hands: [
        { label: 'KK（あなた）', cards: ['Ks', 'Kd'] },
        { label: '99', cards: ['9s', '9h'] },
        { label: 'AA', cards: ['As', 'Ah'] },
        { label: 'JJ', cards: ['Js', 'Jh'] },
        { label: 'A♣Q♣', cards: ['Ac', 'Qc'] },
      ],
      explain: 'KK が負けているのはセットと AA だけ。JJ や A♣Q♣ のようなドローにはリードしていて、これらもオールインレンジに多く入ります。',
    },
    { t: 'tip', text: 'SPR が低いときは小さく打って相手に選ばせ、オールインを受けたら必要勝率とレンジ全体での勝率を比べます。' },
  ],
};

export default lesson;
