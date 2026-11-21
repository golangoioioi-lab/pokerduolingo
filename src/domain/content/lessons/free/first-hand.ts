import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'first-hand',
  blocks: [
    { t: 'h', text: 'まず1ハンド遊ぶ' },
    {
      t: 'play',
      title: 'BTN で A♥J♥',
      hero: 'BTN',
      heroCards: ['Ah', 'Jh'],
      villain: 'BB',
      villainCards: ['Ts', 'Jd'],
      steps: [
        {
          street: 'プリフロップ', pot: 1.5, say: '全員 100bb。UTG・HJ・CO がフォールド。あなたは BTN で **A♥J♥**。', q: 'どうする？',
          options: [
            { label: '2.5bb にレイズ', good: true, why: 'BTN の AJ スーテッドは強い手。レイズで参加します。' },
            { label: '1bb でコール', good: false, why: '誰もレイズしていないときは、コールよりレイズで入ります。' },
            { label: 'フォールド', good: false, why: '降りるには強すぎる手です。' },
          ],
        },
        {
          street: 'フロップ', board: ['Jc', '7h', '3s'], pot: 5.5, say: 'SB はフォールド、BB がコール。J のペアで、場の一番高いカードとのペア（トップペア）。BB はチェック。', q: 'どうする？',
          options: [
            { label: '2bb ベット', good: true, why: 'ポットの約3分の1。弱い J や 7 から払ってもらえます。' },
            { label: 'チェック', good: false, why: '悪くはありませんが、トップペアはベットで価値を取るのが基本です。' },
          ],
        },
        {
          street: 'ターン', board: ['2h'], pot: 9.5, say: 'BB がコール。ターンは 2♥。BB はまたチェック。', q: 'どうする？',
          options: [
            { label: '6bb ベット', good: true, why: 'まだ勝っていることが多い。続けて価値を取ります。' },
            { label: 'オールイン', good: false, why: '大きすぎます。弱い手は降りて、強い手だけが残ります。' },
          ],
        },
        {
          street: 'リバー', board: ['Kd'], pot: 21.5, say: 'BB がコール。リバーは K♦。KJ や KQ に負ける可能性が出ました。BB はチェック。', q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: 'K で負ける手が増えました。安全にショーダウンへ。' },
            { label: '7bb ベット', good: true, why: '弱い J から取れる薄いバリュー。チェックとの僅差です。' },
            { label: 'オールイン', good: false, why: '払ってくるのは K を持った手ばかりです。' },
          ],
        },
      ],
      outro: 'BB は T♠J♦。同じ J のペアで、キッカーの A が T に勝ちました。',
    },
    { t: 'h', text: '図で振り返る' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 5.5, actions: ['BTN（あなた）2.5bb にレイズ', 'BB コール、他はフォールド'] },
        { street: 'フロップ', board: ['Jc', '7h', '3s'], pot: 9.5, actions: ['BB チェック', 'あなた 2bb ベット、BB コール'] },
        { street: 'ターン', board: ['2h'], pot: 21.5, actions: ['BB チェック', 'あなた 6bb ベット、BB コール'] },
        { street: 'リバー', board: ['Kd'], actions: ['BB チェック、あなたもチェック'] },
        { street: 'ショーダウン', actions: ['A♥J♥ が T♠J♦ に勝つ'] },
      ],
      caption: 'ポットは各ストリート終了時の額です。',
    },
    {
      t: 'estimate',
      q: 'フロップが開く前のポットは何 bb？（SB は 0.5bb を出して降りた）',
      hand: ['Ah', 'Jh'],
      min: 0, max: 10, step: 0.5, unit: 'bb', answer: 5.5, tolerance: 1,
      explain: 'あなた 2.5 + BB 2.5 + SB 0.5 = 5.5bb です。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'プリフロップ後', pot: 5.5, stack: 97.5 },
        { label: 'フロップ後', pot: 9.5, stack: 95.5 },
        { label: 'ターン後', pot: 21.5, stack: 89.5 },
      ],
      caption: 'ベットのたびにポットが増え、スタックが減ります（bb）。',
    },
    {
      t: 'equity',
      players: [{ label: 'A♥J♥', cards: ['Ah', 'Jh'], pct: 87 }, { label: 'T♠J♦', cards: ['Ts', 'Jd'], pct: 13 }],
      board: ['Jc', '7h', '3s'],
      caption: 'フロップ時点の勝率（目安）。同じペアでも、キッカーの差で大きくリードしています。',
    },
    { t: 'tip', text: 'なぜ 2.5bb なのか、なぜフロップは小さく打つのか。この先のコースで1つずつ学びます。' },
    {
      t: 'showdown',
      q: 'リバーの K で状況が変わる。相手が K♠Q♦ だったら？',
      board: ['Jc', '7h', '3s', '2h', 'Kd'],
      players: [
        { label: 'あなた', cards: ['Ah', 'Jh'] },
        { label: '相手', cards: ['Ks', 'Qd'] },
      ],
      explain: '相手は K のペアで、J のペアより強い役。リバーでチェックしてポットを大きくしなかった理由です。',
    },
  ],
};

export default lesson;
