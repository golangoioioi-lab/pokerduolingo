import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-16',
  blocks: [
    { t: 'p', text: '6人卓・全員 100bb。CO が 2.5bb にオープンし、あなたは BTN で 5♣ 5♦ をコール（SB・BB はフォールド）。ポットは 6.5bb、残りは 97.5bb です。ポジションを活かして、セットになったら大きく取ります。' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: 'フォールド', folded: true },
        { pos: 'HJ', action: 'フォールド', folded: true },
        { pos: 'CO', action: '2.5bb オープン', bet: 2.5 },
        { pos: 'BTN', hero: true, action: 'コール', bet: 2.5, cards: ['5c', '5d'] },
        { pos: 'SB', action: 'フォールド', bet: 0.5, folded: true },
        { pos: 'BB', action: 'フォールド', bet: 1, folded: true },
      ],
      pot: 6.5,
    },
    { t: 'h', text: 'フロップ：K♠ Q♦ 5♥' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['5c', '5d'] }], board: ['Ks', 'Qd', '5h'], caption: '一番下のセット。KK・QQ 以外にはほぼ勝っています。' },
    { t: 'p', text: 'CO が 2.5bb（約38%）をベット。CO には AK・KQ・KJ などの当たった手と、AJ・JT・AT のようなストレートドローが多くあります。' },
    {
      t: 'quiz', q: 'あなたの選択は？',
      hand: ['5c', '5d'], board: ['Ks', 'Qd', '5h'],
      options: ['コールしてスロープレイ', '9bb にレイズ', 'フォールド'],
      answer: 1,
      explain: 'K と Q のボードは CO によく当たっていて、トップペアはレイズにもコールしやすい手です。ドローはターンで A・J・T・9 が落ちるとセットを上回ることがあります。いまレイズして、トップペアからチップを集めつつ、ドローに高い値段を払わせます。',
    },
    { t: 'p', text: 'あなたは 9bb にレイズし、CO がコール。ポットは 24.5bb。ターンは 2♣ で何も変わらず、あなたが 16bb（約65%）をベットしてコールされました。ポットは 56.5bb、残りは 72.5bb です。' },
    {
      t: 'quiz', q: 'レイズとターンのベットにコールした CO の手として、最も多いのはどれ？',
      hand: ['5c', '5d'], board: ['Ks', 'Qd', '5h', '2c'],
      options: ['AK（強い K）', '22（セット）', '76（小さいペア）'],
      optionCards: [['Ac', 'Kh'], ['2h', '2s'], ['7h', '6h']],
      answer: 0,
      explain: 'レイズに降りず、ターンでもコールしているので、CO の手はかなり強いはずです。76 のような手はフロップで降りています。22 はそもそも K・Q のボードでレイズにコールし続ける手ではありません。中心は AK・KQ・KJ の強い K と、JT・AJ のドローです。',
    },
    { t: 'h', text: 'リバー：8♦' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['5c', '5d'] }], board: ['Ks', 'Qd', '5h', '2c', '8d'], caption: 'ストレートドローはすべて外れました。' },
    {
      t: 'estimate', q: '72.5bb のオールインは、ポット 56.5bb の約何%？',
      hand: ['5c', '5d'], board: ['Ks', 'Qd', '5h', '2c', '8d'],
      min: 0, max: 200, step: 10, unit: '%', answer: 130, tolerance: 30,
      explain: '72.5 ÷ 56.5 ≒ 1.28 で、ポットの約1.3倍のオーバーベットです。',
    },
    {
      t: 'quiz', q: 'CO はチェック。ポット 56.5bb、残り 72.5bb。あなたの選択は？',
      hand: ['5c', '5d'], board: ['Ks', 'Qd', '5h', '2c', '8d'],
      options: ['チェックしてショーダウン', '36bb（約3分の2）をベット', '72.5bb のオールイン（ポットの約1.3倍）'],
      answer: 2,
      explain: 'CO のレンジは強いワンペアと外れたドローに分かれ、外れたドローはどのサイズでも降ります。強い K は、ここまで払ったポットの大きさから 1.3倍でもかなりの割合でコールします。36bb では、残りの 36.5bb を取る機会がなくなります。ただし 36bb のベットも悪くない選択で、オールインの方が得になるのは「1.3倍にコールする割合が、36bb にコールする割合の約半分以上」のときです。相手の K がどこまで降りないかの読みで決まる、差の小さい場面です。',
    },
    { t: 'p', text: 'あなたはオールイン。CO は長考の末 A♣ K♣ でコールし、あなたが 201.5bb を獲得しました。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['5c', '5d'] }, { label: 'CO', cards: ['Ac', 'Kc'] }], board: ['Ks', 'Qd', '5h', '2c', '8d'] },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 6.5, actions: ['CO 2.5bb オープン', 'BTN（あなた）コール'] },
        { street: 'フロップ', board: ['Ks', 'Qd', '5h'], pot: 6.5, actions: ['CO 2.5bb ベット', 'あなた 9bb にレイズ', 'CO コール'] },
        { street: 'ターン', board: ['2c'], pot: 24.5, actions: ['CO チェック', 'あなた 16bb ベット', 'CO コール'] },
        { street: 'リバー', board: ['8d'], pot: 56.5, actions: ['CO チェック', 'あなた 72.5bb オールイン', 'CO コール'] },
        { street: 'ショーダウン', pot: 201.5, actions: ['セットがトップペアに勝つ'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 6.5, stack: 97.5 },
        { label: 'ターン開始', pot: 24.5, stack: 88.5 },
        { label: 'リバー開始', pot: 56.5, stack: 72.5 },
      ],
      caption: 'SPR は 15 → 3.6 → 1.3。フロップのレイズがなければ、リバーでもスタックの大半が残っていました。',
    },
    { t: 'tip', text: '相手のレンジが強いワンペアと外れたドローにはっきり分かれ、自分がその上にいるなら、オーバーベットで最大のサイズを選べます。' },
  ],
};

export default lesson;
