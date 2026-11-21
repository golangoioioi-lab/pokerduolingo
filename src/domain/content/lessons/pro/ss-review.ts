import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'ss-review',
  blocks: [
    { t: 'h', text: '40bbで1ハンド' },
    { t: 'p', text: 'コースの総合演習です。あなたは CO で40bb、BB は100bb。有効スタックは40bbです。' },
    {
      t: 'play',
      title: 'COでA♥Q♥、40bb',
      hero: 'CO',
      heroCards: ['Ah', 'Qh'],
      villain: 'BB',
      villainCards: ['6c', '5c'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 1.5,
          say: 'HJ までフォールド。あなたは CO で **A♥Q♥**。',
          q: 'オープンのサイズは？',
          options: [
            { label: '2.2bb', good: true, why: 'オールインされて降りるときの損を小さくできます。' },
            { label: '3.5bb', good: false, why: '浅いスタックでは大きく開く理由がありません。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Qc', '8d', '4s'],
          pot: 4.9,
          say: 'BB だけがコール。ポット4.9bb、残り37.8bb（SPR約7.7）。BB はチェック。',
          q: 'トップペア・トップキッカー。どうする？',
          options: [
            { label: '1.6bb ベット', good: true, why: '乾いたボードなので小さく打ち、弱い手を残します。' },
            { label: 'チェック', good: false, why: '強い手で取れる機会を逃します。' },
          ],
        },
        {
          street: 'ターン',
          board: ['3c'],
          pot: 8.1,
          say: 'BB がコール。ターンは **3♣**。BB はまたチェック。',
          q: 'どうする？',
          options: [
            { label: '5.5bb ベット', good: true, why: 'ドローが増えたので、払わせながらポットを育てます。' },
            { label: 'チェック', good: false, why: 'ドローに無料でカードを見せてしまいます。' },
          ],
        },
        {
          street: 'ターン',
          pot: 49.8,
          say: 'BB が36.2bbにチェックレイズ（オールイン）。コールにはあと30.7bbです。',
          q: 'BB にはセットや2ペアのほか、65やクラブのドローもあります。どうする？',
          options: [
            { label: 'コール', good: true, why: '必要勝率は約38%。BB のレンジへの勝率は約45%（目安）あります。' },
            { label: 'フォールド', good: false, why: '40bbでは払う額がポットに比べて小さく、トップペア・トップキッカーで降りるのは損です。' },
          ],
        },
        { street: 'リバー', board: ['9h'], pot: 80.5, say: 'BB は **6♣5♣**。リバーは **9♥** で、ドローは外れました。' },
      ],
      outro: '小さいオープン、SPRを見たベット、低い必要勝率でのコール。コースで学んだ判断がつながっています。',
    },
    { t: 'h', text: 'SPRの流れ' },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 4.9, stack: 37.8 },
        { label: 'ターン開始', pot: 8.1, stack: 36.2 },
        { label: 'ターンでオールインにコール後', pot: 80.5, stack: 0 },
      ],
      caption: 'フロップのSPRは約7.7、ターンでは約4.5',
    },
    {
      t: 'estimate',
      q: 'フロップ開始時のSPRは？（ポット4.9bb、残り37.8bb）',
      hand: ['Ah', 'Qh'],
      board: ['Qc', '8d', '4s'],
      min: 0,
      max: 20,
      step: 0.5,
      unit: '',
      answer: 7.7,
      tolerance: 2,
      explain: '37.8 ÷ 4.9 ≈ 7.7 です。',
    },
    { t: 'h', text: 'チェックレイズへのコール' },
    {
      t: 'odds',
      pot: 19.1,
      bet: 30.7,
      equity: 45,
      caption: 'あと30.7bbで、コール後のポットは80.5bb。必要勝率は約38%。A♥Q♥の勝率はBBのレンジに対して約45%（目安）',
    },
    {
      t: 'estimate',
      q: 'ポット8.1bbで、5.5bbのベットに36.2bbのオールイン。COの必要勝率は？',
      hand: ['Ah', 'Qh'],
      board: ['Qc', '8d', '4s', '3c'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 38,
      tolerance: 8,
      explain: '追加は 36.2 − 5.5 = 30.7bb、コール後のポットは 8.1 + 36.2 × 2 = 80.5bb。30.7 ÷ 80.5 ≈ 38% です。',
    },
    {
      t: 'outs',
      q: 'BB の6♣5♣。リバーでストレート以上になるカードを全部タップ',
      hand: ['6c', '5c'],
      board: ['Qc', '8d', '4s', '3c'],
      target: 'ストレート',
      explain: 'ストレートになる 7 と 2 が8枚、フラッシュになるクラブが9枚。重なる7♣・2♣を引いて15枚です。それでも勝率は約34%で、A♥Q♥が有利です。',
    },
    {
      t: 'tip',
      title: 'コースのまとめ',
      text: '浅いスタックでは、オープンは小さく、3betはオールイン中心、フロップではコミットの判断を先に。迷ったら必要勝率と相手のレンジへの勝率を比べます。',
    },
  ],
};

export default lesson;
