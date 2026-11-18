import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-08',
  blocks: [
    { t: 'p', text: '6人卓・全員 100bb。HJ が 2.5bb にオープンし、あなたは BTN で 6♣ 6♥ をコール。BB もコールして3人でフロップへ進みます。小さいポケットペアは「セットになったら大きく取る」手です。テーマは、マルチウェイでセットにスタックを入れる方法です。' },
    { t: 'cards', hands: [{ label: 'あなた（BTN）', cards: ['6c', '6h'] }] },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: 'フォールド', folded: true },
        { pos: 'HJ', action: '2.5bb オープン', bet: 2.5 },
        { pos: 'CO', action: 'フォールド', folded: true },
        { pos: 'BTN', hero: true, action: 'コール', bet: 2.5, cards: ['6c', '6h'] },
        { pos: 'SB', action: 'フォールド', bet: 0.5, folded: true },
        { pos: 'BB', action: 'コール', bet: 2.5 },
      ],
      pot: 8,
      caption: '3人でフロップへ。あなたは最後に行動できる BTN です。',
    },
    {
      t: 'estimate', q: 'フロップ開始時のポットは 8bb、残りスタックは 97.5bb。SPR は？',
      hand: ['6c', '6h'],
      min: 0, max: 20, step: 0.5, unit: '', answer: 12, tolerance: 3,
      explain: '97.5 ÷ 8 ≒ 12 です。SPR が高いシングルレイズドポットでは、コールだけではスタックが入りません。セットは早めにレイズしてポットを育てます。',
    },
    { t: 'h', text: 'フロップ：K♠ 6♦ 3♣' },
    { t: 'p', text: '真ん中のセットです。上回るのは KK と 33 の一部だけ。BB がチェックし、HJ が 3bb（約38%）をベットしました。' },
    {
      t: 'quiz', q: 'あなたの選択は？',
      hand: ['6c', '6h'], board: ['Ks', '6d', '3c'],
      options: ['コールしてスロープレイ', '10bb にレイズ', '97.5bb のオールイン'],
      answer: 1,
      explain: '後ろの BB にも 54・75 のようなドローや K が残っています。コールだと BB に安くターンを見せることになります。HJ の K（AK・KQ・KJ）は 10bb のレイズにもコールしやすく、ここでポットを大きくすればターン・リバーでスタックを入れやすくなります。オールインは K でもほとんど降ります。',
    },
    { t: 'p', text: '10bb にレイズ。BB はフォールド、HJ はコール。ポットは 28bb、残りは 87.5bb です。' },
    { t: 'h', text: 'ターン：9♥' },
    { t: 'p', text: 'HJ はチェック。18bb（約64%）をベットし、HJ がコール。ポットは 64bb、残りは 69.5bb です。' },
    {
      t: 'quiz', q: 'ここまでコールを続けている HJ の手として、最も多いのはどれ？',
      hand: ['6c', '6h'], board: ['Ks', '6d', '3c', '9h'],
      options: ['33 のセット', 'AK・KQ などの強い K', '外れたストレートドロー'],
      optionCards: [['3s', '3h'], ['Ad', 'Kh'], ['5h', '4h']],
      answer: 1,
      explain: 'レイズとターンのベットにコールするには、ある程度強い手が必要です。33 は残り3コンボしかなく、セットならレイズを返すことが多いです。ストレートドローは 54 くらいで、HJ のオープンレンジにはあまり入りません。中心は AK・KQ・KJ の K のトップペアです。',
    },
    { t: 'h', text: 'リバー：2♦' },
    { t: 'p', text: '54 がストレートになりましたが、HJ のレンジにはほとんどありません。HJ はチェックです。' },
    {
      t: 'quiz', q: 'ポット 64bb、残り 69.5bb。あなたの選択は？',
      hand: ['6c', '6h'], board: ['Ks', '6d', '3c', '9h', '2d'],
      options: ['20bb をベット', '45bb をベット', '69.5bb のオールイン'],
      answer: 2,
      explain: '残りはポットとほぼ同じ額です。2回コールした AK・KQ は、ここまで来ると降りにくくなっています。45bb だと残り 24.5bb を取り残し、20bb ではさらに少なくなります。SPR が約 1 のときは、強い手はオールインで終わらせるのが自然です。',
    },
    { t: 'p', text: 'オールインに HJ は A♦ K♥ でコールし、あなたが 203bb を獲得しました。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['6c', '6h'] }, { label: 'HJ', cards: ['Ad', 'Kh'] }], board: ['Ks', '6d', '3c', '9h', '2d'] },
    { t: 'h', text: '振り返り' },
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
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 8, stack: 97.5 },
        { label: 'ターン開始', pot: 28, stack: 87.5 },
        { label: 'リバー開始', pot: 64, stack: 69.5 },
      ],
      caption: 'SPR は 12.2 → 3.1 → 1.1。フロップのレイズが、リバーのオールインまでの道をつくりました。',
    },
    { t: 'tip', text: 'SPR が高いポットで毎回コールだけしていてはスタックは入りません。セットのような強い手は、早めにレイズしてポットを大きくすることで、ターン・リバーの2回のベットで全額に届きます。' },
  ],
};

export default lesson;
