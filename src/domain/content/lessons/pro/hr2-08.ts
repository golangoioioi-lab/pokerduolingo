import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-08',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。HJ のオープンに BTN で 6♣6♥ をコールし、BB も入って3人でフロップへ。マルチウェイでセットにスタックを入れる方法を見ます。' },
    {
      t: 'play',
      title: 'BTN で 66、マルチウェイのセット',
      hero: 'BTN',
      heroCards: ['6c', '6h'],
      villain: 'HJ',
      villainCards: ['Ad', 'Kh'],
      steps: [
        { street: 'プリフロップ', pot: 8, say: 'HJ が 2.5bb でオープン。あなたと BB がコールし、3人でフロップへ。残りは 97.5bb（SPR 約12）です。' },
        {
          street: 'フロップ',
          board: ['Ks', '6d', '3c'],
          pot: 11,
          say: '真ん中のセット。BB がチェックし、HJ がポット 8bb に **3bb** ベット。',
          q: 'どうする？',
          options: [
            { label: 'コールしてスロープレイ', good: false, why: '後ろの BB に安くターンを見せ、ポットも小さいままです。' },
            { label: '10bb にレイズ', good: true, why: 'HJ の AK・KQ・KJ はコールしやすく、ここでポットを育てます。' },
            { label: '97.5bb オールイン', good: false, why: 'K のペアでもほとんど降ります。' },
          ],
        },
        {
          street: 'ターン',
          board: ['9h'],
          pot: 28,
          say: 'BB はフォールド、HJ がコール。HJ はチェック。残りは 87.5bb。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'ポットが育たず、リバーで全額を入れきれません。' },
            { label: '18bb（約2/3）ベット', good: true, why: 'K のペアから取りつつ、リバーにポット1杯分の残りを作ります。' },
          ],
        },
        {
          street: 'リバー',
          board: ['2d'],
          pot: 64,
          say: 'HJ がコールし、またチェック。2♦ で 54 がストレートになりますが、HJ のレンジにはほとんどありません。残りは 69.5bb。',
          q: 'どうする？',
          options: [
            { label: '20bb ベット', good: false, why: '取れる額がずっと少なくなります。' },
            { label: '45bb ベット', good: false, why: '残り 24.5bb を取り残します。' },
            { label: '69.5bb オールイン', good: true, why: 'SPR 約1。2回コールした AK・KQ はここまで来ると降りにくくなっています。' },
          ],
        },
      ],
      outro: 'HJ は A♦K♥ でコールし、あなたが 203bb を獲得。フロップのレイズが、リバーのオールインまでの道をつくりました。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'p', text: 'マルチウェイでは後ろのプレイヤーにも安くカードを見せないことが大切です。フロップのレイズで SPR を 12 から 3 まで下げました。' },
    {
      t: 'estimate', q: 'フロップ開始時のポットは 8bb、残りスタックは 97.5bb。SPR は？',
      hand: ['6c', '6h'],
      min: 0, max: 20, step: 0.5, unit: '', answer: 12, tolerance: 3,
      explain: '97.5 ÷ 8 ≒ 12 です。SPR が高いポットでは、コールだけではスタックが入りません。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 8, stack: 97.5 },
        { label: 'ターン開始', pot: 28, stack: 87.5 },
        { label: 'リバー開始', pot: 64, stack: 69.5 },
      ],
      caption: 'SPR は 12.2 → 3.1 → 1.1。フロップのレイズで、ターン・リバーの2回のベットで全額に届きました。',
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 8, actions: ['HJ 2.5bb オープン', 'BTN（あなた）コール', 'BB コール'] },
        { street: 'フロップ', board: ['Ks', '6d', '3c'], pot: 8, actions: ['BB チェック', 'HJ 3bb ベット', 'あなた 10bb にレイズ', 'BB フォールド、HJ コール'] },
        { street: 'ターン', board: ['9h'], pot: 28, actions: ['HJ チェック', 'あなた 18bb ベット', 'HJ コール'] },
        { street: 'リバー', board: ['2d'], pot: 64, actions: ['HJ チェック', 'あなた 69.5bb オールイン', 'HJ コール'] },
        { street: 'ショーダウン', pot: 203, actions: ['セットがトップペアに勝つ'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    {
      t: 'quiz', q: 'レイズにもターンのベットにもコールした HJ の手として、最も多いのはどれ？',
      hand: ['6c', '6h'], board: ['Ks', '6d', '3c', '9h'],
      options: ['33 のセット', 'AK・KQ などの強い K', '外れたストレートドロー'],
      optionCards: [['3s', '3h'], ['Ad', 'Kh'], ['5h', '4h']],
      answer: 1,
      explain: '33 は残り3コンボしかなく、セットならレイズを返すことが多いです。54 は HJ のオープンレンジにあまり入りません。中心は AK・KQ・KJ です。',
    },
    { t: 'h', text: 'もう一度：フロップの強さ' },
    {
      t: 'order',
      q: 'フロップ K♠6♦3♣。強い順にタップ。',
      board: ['Ks', '6d', '3c'],
      hands: [
        { label: '66（あなた）', cards: ['6c', '6h'] },
        { label: 'KK', cards: ['Kd', 'Kc'] },
        { label: '33', cards: ['3s', '3h'] },
        { label: 'AK', cards: ['Ad', 'Kh'] },
        { label: '54', cards: ['5h', '4h'] },
      ],
      explain: '66 を上回るのは KK だけ。33 は下のセットで、AK のトップペアも 66 から大きく払う側です。',
    },
    { t: 'tip', text: 'SPR が高いポットでコールを続けるだけでは、スタックは入りません。セットは早めにレイズしてポットを大きくします。' },
  ],
};

export default lesson;
