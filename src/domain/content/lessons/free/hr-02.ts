import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr-02',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。CO で A♦K♠ を持ち、フロップで外れたときにどこまで打ち、どこで止まるかを考えます。' },
    {
      t: 'play',
      title: 'CO で外れた AK',
      hero: 'CO',
      heroCards: ['Ad', 'Ks'],
      villain: 'BB',
      villainCards: ['5d', '4d'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 1.5,
          say: 'HJ までフォールド。あなたは CO で **A♦K♠**。',
          q: 'どうする？',
          options: [
            { label: 'コール（リンプ）', good: false, why: '先にレイズして主導権を取ります。' },
            { label: '2.5bb にオープン', good: true, why: 'AK はどの席でもオープンする強い手です。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['9d', '5c', '2h'],
          pot: 5.5,
          say: 'BB だけがコール。ペアにはならず、A・K のオーバーカード2枚。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: '乾いたボードで降ろせる機会を逃します。' },
            { label: '2bb（約3分の1）ベット', good: true, why: 'BB は外れた手が多く、安いベットでハイカードの一部を降ろせます。' },
            { label: '6bb（ポット以上）ベット', good: false, why: '降りる手は小さいベットでも降り、損失だけが増えます。' },
          ],
        },
        {
          street: 'ターン',
          board: ['6s'],
          pot: 9.5,
          say: 'BB がコール。6♠ は BB のペアやドロー（87・76・64・43）をさらに強くします。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: '6.5bb で2発目のブラフ', good: false, why: '必要な降り率は約41%ですが、BB はそこまで降りません。' },
            { label: 'チェック', good: true, why: 'コールレンジに合うカードなので、ここで止めて損失を抑えます。' },
          ],
        },
        {
          street: 'リバー',
          board: ['Jc'],
          pot: 9.5,
          say: 'リバーは J♣。BB はチェック。',
          q: 'A ハイでどうする？',
          options: [
            { label: 'ブラフでベット', good: false, why: '降りるのは T8 など負けている手、コールするのは勝っている手だけです。' },
            { label: 'チェック', good: true, why: 'A ハイには外れたドローに勝つ価値があります。' },
          ],
        },
      ],
      outro: 'BB は 5♦4♦ の 5 のペア。失ったのは 4.5bb だけで、ターンで止めたので損失が広がりませんでした。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'p', text: 'ターンの残り A と K は6枚で、リバーで引ける確率は 6 ÷ 46 ≒ 13% です。BB の降り率が20%程度なら、2発目のブラフは損になります。' },
    {
      t: 'estimate',
      q: '6.5bb のブラフが利益になるには、BB が何%以上降りる必要がある？',
      hand: ['Ad', 'Ks'],
      board: ['9d', '5c', '2h', '6s'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 41,
      tolerance: 8,
      explain: '6.5 ÷（9.5 + 6.5）≒ 41%。ペアとドロー中心の BB はそこまで降りません。',
    },
    {
      t: 'tree',
      root: 'ターン：ポット9.5bbに6.5bbのブラフ（A・Kの6アウツ、リバーの勝率約13%）',
      options: [
        { label: 'チェック', ev: 0, note: 'ここで止めれば追加の損失はない' },
        {
          label: '6.5bbをベット',
          outcomes: [
            { label: 'BBがフォールド（20%と仮定）', prob: 0.2, value: 9.5 },
            { label: 'コールされ、リバーでAかKを引く', prob: 0.104, value: 16 },
            { label: 'コールされ、外れる', prob: 0.696, value: -6.5 },
          ],
          note: '必要な降り率は約41%',
        },
      ],
      caption: 'BBの降り率が20%程度なら、ベットのEVはマイナス（約 -1.0bb）。',
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 1.5, actions: ['あなた（CO）が2.5bbにオープン', 'BBコール'] },
        { street: 'フロップ', board: ['9d', '5c', '2h'], pot: 5.5, actions: ['BBチェック', 'あなたが2bbベット、BBコール'] },
        { street: 'ターン', board: ['6s'], pot: 9.5, actions: ['BBチェック', 'あなたもチェック'] },
        { street: 'リバー', board: ['Jc'], pot: 9.5, actions: ['BBチェック', 'あなたもチェック'] },
        { street: 'ショーダウン', pot: 9.5, actions: ['BBは5♦4♦、5のペアが勝ち'] },
      ],
    },
    { t: 'h', text: 'もう一度：2発目を打つカード' },
    {
      t: 'rapid',
      q: '9♦5♣2♥ で C ベットがコールされた。ターンがこのカードなら、A♦K♠ で2発目を打つ？',
      choices: ['ベット', 'チェック'],
      items: [
        { cards: ['Ad', 'Ks'], board: ['9d', '5c', '2h', 'As'], answer: 0, why: 'トップペアになりました。弱いペアから取りに行きます。' },
        { cards: ['Ad', 'Ks'], board: ['9d', '5c', '2h', '6s'], answer: 1, why: 'BB のドローやペアに合うカードです。' },
        { cards: ['Ad', 'Ks'], board: ['9d', '5c', '2h', 'Kh'], answer: 0, why: 'トップペアになりました。' },
        { cards: ['Ad', 'Ks'], board: ['9d', '5c', '2h', '4c'], answer: 1, why: '63 のストレートや 4x のペアが増え、BB は降りません。' },
        { cards: ['Ad', 'Ks'], board: ['9d', '5c', '2h', '3d'], answer: 1, why: '64 や A4 のストレートが完成するカードです。' },
        { cards: ['Ad', 'Ks'], board: ['9d', '5c', '2h', '7h'], answer: 1, why: '86 のストレートや 7x のペアが増えるカードです。' },
      ],
    },
    { t: 'tip', text: '乾いたボードでは外れた AK でも小さく C ベットします。コールレンジに合うカードが落ちたら2発目は打たず、A ハイはショーダウンへ持ち込みます。' },
  ],
};

export default lesson;
