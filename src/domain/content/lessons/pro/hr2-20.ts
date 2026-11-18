import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-20',
  blocks: [
    { t: 'p', text: '6人卓・全員 100bb。あなたは BTN で 9♠ 9♥ を持って 2.5bb にオープン。SB が 11bb に 3ベットし、あなたがコールしました（BB はフォールド）。オーバーカードが落ちた中くらいのペアを、3ベットポットでどう扱うかを見ます。' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: 'フォールド', folded: true },
        { pos: 'HJ', action: 'フォールド', folded: true },
        { pos: 'CO', action: 'フォールド', folded: true },
        { pos: 'BTN', hero: true, action: '2.5bb オープン → コール', bet: 11, cards: ['9s', '9h'] },
        { pos: 'SB', action: '11bb に 3ベット', bet: 11 },
        { pos: 'BB', action: 'フォールド', bet: 1, folded: true },
      ],
      pot: 23,
      caption: 'ポットは 23bb、残りは 89bb。99 は 3ベットに対して、降りるには強く 4ベットには弱いのでコールが基本です。',
    },
    { t: 'h', text: 'フロップ：K♦ 7♣ 3♠' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['9s', '9h'] }], board: ['Kd', '7c', '3s'], caption: 'K が1枚上にあります。99 は K を持つ手に負けています。' },
    { t: 'p', text: 'SB はチェックしました。' },
    {
      t: 'estimate', q: 'フロップ開始時の SPR（残りスタック ÷ ポット）は？',
      hand: ['9s', '9h'], board: ['Kd', '7c', '3s'],
      min: 0, max: 10, step: 0.5, answer: 4, tolerance: 1.5,
      explain: '89 ÷ 23 ≒ 3.9。3ベットポットは浅く、ミドルペアで大きく打つと全額に近づいてしまいます。',
    },
    {
      t: 'quiz', q: 'ポット 23bb。あなたの選択は？',
      hand: ['9s', '9h'], board: ['Kd', '7c', '3s'],
      options: ['チェックで回す', '20bb（約90%）をベット', '89bb のオールイン'],
      answer: 0,
      explain: '大きく打つと AQ・AJ などは降り、コールされるのは AK・KQ・KK のようなあなたより強い手だけです。チェックレイズを受けることもあります。チェックで回せば、安くショーダウンバリューを守れます。',
    },
    { t: 'p', text: 'あなたはチェック。ターンは 2♥ で、SB もまたチェックしました。ポットは 23bb のままです。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['9s', '9h'] }], board: ['Kd', '7c', '3s', '2h'] },
    { t: 'p', text: '2回続けてチェックしたので、AK・KK のような強い手はかなり減りました。残っているのは AQ・AJ・A5s のような外れた A と、TT〜JJ・88 などのポケットペアが中心です。' },
    {
      t: 'quiz', q: 'ポット 23bb。あなたの選択は？',
      hand: ['9s', '9h'], board: ['Kd', '7c', '3s', '2h'],
      options: ['チェックで回す', '8bb（約3分の1）をベット', '23bb（ポットサイズ）をベット'],
      answer: 1,
      explain: 'SB のレンジが弱くなったので、小さいベットなら 88 や A5s からコールをもらえます。AQ・AJ はリバーで A を引くと逆転するので、少し払わせる保護の意味もあります。ポットサイズだと負けている手が降り、コールされるのは TT・JJ など勝っている手だけです。',
    },
    { t: 'p', text: 'あなたは 8bb をベットし、SB がコール。ポットは 39bb、残りは 81bb。リバーは 5♣ で、SB はチェックしました。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['9s', '9h'] }], board: ['Kd', '7c', '3s', '2h', '5c'], caption: 'A でも K でもなく、99 の立場はほとんど変わりません。' },
    {
      t: 'quiz', q: 'SB はチェック。ポット 39bb。あなたの選択は？',
      hand: ['9s', '9h'], board: ['Kd', '7c', '3s', '2h', '5c'],
      options: ['チェックしてショーダウン', '25bb（約3分の2）をベット'],
      answer: 0,
      explain: 'ターンでコールした SB は、88 や TT・JJ、外れた A です。25bb だと 88 や外れた A は降り、コールされるのは TT・JJ やスロープレイの K など、あなたより強い手が中心になります。弱い手がコールしにくいサイズなら、チェックしてショーダウンです。',
    },
    { t: 'p', text: 'あなたはチェック。SB は 8♥ 8♦ を見せ、99 が 39bb を獲得しました。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['9s', '9h'] }, { label: 'SB', cards: ['8h', '8d'] }], board: ['Kd', '7c', '3s', '2h', '5c'] },
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
      left: { title: 'フロップ：チェック', cards: ['9s', '9h'], board: ['Kd', '7c', '3s'], points: ['SB の K や AK を含むレンジに大きく打たない', 'チェックレイズで追い出されない'], verdict: 'good' },
      right: { title: 'ターン：小さくベット', cards: ['9s', '9h'], board: ['Kd', '7c', '3s', '2h'], points: ['2回チェックした SB の強い手は減った', '88・外れた A から少額を取り、A を引かれる前に払わせる'], verdict: 'good' },
      caption: '同じ 99 でも、相手のレンジが弱くなったタイミングで行動を変えます。',
    },
    { t: 'tip', text: '中くらいの手は「打つか打たないか」ではなく、「相手のレンジが弱くなったタイミングで、弱い手が払える額だけ打つ」と考えると整理できます。' },
  ],
};

export default lesson;
