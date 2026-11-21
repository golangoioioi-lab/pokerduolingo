import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-20',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。3ベットポットでオーバーカードが落ちた中くらいのペアを、どう扱うかを見ます。' },
    {
      t: 'play',
      title: 'BTN で 9♠9♥',
      hero: 'BTN',
      heroCards: ['9s', '9h'],
      villain: 'SB',
      villainCards: ['8h', '8d'],
      steps: [
        {
          street: 'プリフロップ', pot: 14.5,
          say: 'あなたは BTN で **9♠9♥** を 2.5bb にオープン。SB が 11bb に 3ベットし、BB はフォールド。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: '99 は 3ベットに対して降りるには強すぎます。' },
            { label: 'コール', good: true, why: '降りるには強く、4ベットには弱い。ポジションもあります。' },
            { label: '25bb に 4ベット', good: false, why: '弱い手が降り、99 を上回る手だけが残ります。' },
          ],
        },
        {
          street: 'フロップ', board: ['Kd', '7c', '3s'], pot: 23,
          say: 'K が1枚上にあります。SB はチェック。残りは 89bb。',
          q: 'どうする？',
          options: [
            { label: 'チェックで回す', good: true, why: '安くショーダウンバリューを守れます。' },
            { label: '20bb（約90%）をベット', good: false, why: 'AQ・AJ は降り、コールされるのは K を持つ強い手だけです。' },
            { label: '89bb のオールイン', good: false, why: '負けている手だけが降り、勝っている手にだけコールされます。' },
          ],
        },
        {
          street: 'ターン', board: ['2h'], pot: 23,
          say: 'ターンは **2♥**、SB はまたチェック。2回続けてチェックしたので、AK・KK のような強い手はかなり減りました。',
          q: 'どうする？',
          options: [
            { label: 'チェックで回す', good: false, why: 'SB のレンジが弱くなったのに、取れる分を逃します。' },
            { label: '8bb（約3分の1）をベット', good: true, why: '88 や A5s からコールをもらい、AQ・AJ には A を引く前に払わせます。' },
            { label: '23bb（ポットサイズ）をベット', good: false, why: '負けている手が降り、TT・JJ など勝っている手だけが残ります。' },
          ],
        },
        {
          street: 'リバー', board: ['5c'], pot: 39,
          say: 'SB がコール。リバーは **5♣** で、SB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェックしてショーダウン', good: true, why: '弱い手がコールしにくいサイズしかないなら、チェックです。' },
            { label: '25bb（約3分の2）をベット', good: false, why: '88 や外れた A は降り、コールされるのは TT・JJ など強い手が中心です。' },
          ],
        },
      ],
      outro: 'SB は 88 で、99 が 39bb を獲得。相手のレンジが弱くなったタイミングで、払える額だけ打ちました。',
    },
    { t: 'h', text: '振り返り' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 23, actions: ['BTN（あなた）2.5bb オープン', 'SB 11bb に 3ベット', 'あなた コール'] },
        { street: 'フロップ', board: ['Kd', '7c', '3s'], pot: 23, actions: ['SB チェック', 'あなた チェック'] },
        { street: 'ターン', board: ['2h'], pot: 23, actions: ['SB チェック', 'あなた 8bb ベット', 'SB コール'] },
        { street: 'リバー', board: ['5c'], pot: 39, actions: ['SB チェック', 'あなた チェック'] },
        { street: 'ショーダウン', pot: 39, actions: ['99 が 88 に勝つ'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    {
      t: 'compare',
      left: { title: 'フロップ：チェック', cards: ['9s', '9h'], board: ['Kd', '7c', '3s'], points: ['K や AK を含むレンジに大きく打たない', 'チェックレイズで追い出されない'], verdict: 'good' },
      right: { title: 'ターン：小さくベット', cards: ['9s', '9h'], board: ['Kd', '7c', '3s', '2h'], points: ['2回チェックした SB の強い手は減った', '88・外れた A から少額を取る'], verdict: 'good' },
      caption: '同じ 99 でも、相手のレンジが弱くなったタイミングで行動を変えます。',
    },
    {
      t: 'estimate', q: 'フロップ開始時の SPR（残りスタック ÷ ポット）は？',
      hand: ['9s', '9h'], board: ['Kd', '7c', '3s'],
      min: 0, max: 10, step: 0.5, answer: 4, tolerance: 1.5,
      explain: '89 ÷ 23 ≒ 3.9。大きく打つと、ミドルペアでも全額に近づいてしまいます。',
    },
    { t: 'h', text: '99 はどこにいる？' },
    {
      t: 'order',
      q: 'リバーまでのボードで、強い順にタップ',
      board: ['Kd', '7c', '3s', '2h', '5c'],
      hands: [
        { label: '99', cards: ['9s', '9h'] },
        { label: 'TT', cards: ['Th', 'Tc'] },
        { label: '88', cards: ['8h', '8d'] },
        { label: 'A5s', cards: ['As', '5s'] },
        { label: 'AQ', cards: ['Ad', 'Qd'] },
      ],
      explain: 'TT ＞ 99 ＞ 88 ＞ A5（5 のペア）＞ AQ（A ハイ）。99 は SB のターンのコールレンジの真ん中にいるので、リバーは打たずにショーダウンです。',
    },
    { t: 'tip', text: '中くらいの手は、相手のレンジが弱くなったタイミングで、弱い手が払える額だけ打つと考えると整理できます。' },
  ],
};

export default lesson;
