import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-16',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。BTN で小さいペアがセットになり、ポジションを活かして最大まで取る場面です。' },
    {
      t: 'play',
      title: 'BTN で 5♣5♦',
      hero: 'BTN',
      heroCards: ['5c', '5d'],
      villain: 'CO',
      villainCards: ['Ac', 'Kc'],
      steps: [
        {
          street: 'プリフロップ', pot: 4,
          say: 'CO が 2.5bb にオープン。あなたは BTN で **5♣5♦**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'ポジションがあり、スタックも深い。セットを狙える条件です。' },
            { label: 'コール', good: true, why: 'セットができれば大きく取れます。' },
          ],
        },
        {
          street: 'フロップ', board: ['Ks', 'Qd', '5h'], pot: 9,
          say: 'ブラインドはフォールド。一番下のセット。CO が 2.5bb をベット。',
          q: 'どうする？',
          options: [
            { label: 'コールしてスロープレイ', good: false, why: 'A・J・T・9 が落ちると、ドローに上回られることがあります。' },
            { label: '9bb にレイズ', good: true, why: 'K と Q はレイズにもコールしやすく、ドローには高い値段になります。' },
            { label: 'フォールド', good: false, why: 'KK・QQ 以外にはほぼ勝っています。' },
          ],
        },
        {
          street: 'ターン', board: ['2c'], pot: 24.5,
          say: 'CO がコール。ターンは **2♣** で何も変わらず、CO はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'ポットが育たず、ドローにも無料でカードを見せます。' },
            { label: '16bb（約65%）をベット', good: true, why: '強い K から取りつつ、リバーの全額につなげます。' },
          ],
        },
        {
          street: 'リバー', board: ['8d'], pot: 56.5,
          say: 'CO がコール。リバーは **8♦** で、ドローはすべて外れました。CO はチェック。残りは 72.5bb。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: '強い K から取れる大きなバリューを逃します。' },
            { label: '36bb（約3分の2）をベット', good: true, why: '僅差。強い K はよくコールしますが、残りの 36.5bb を取る機会はなくなります。' },
            { label: '72.5bb のオールイン', good: true, why: '僅差。外れたドローはどのサイズでも降り、強い K は大きなポットから降りにくいので最大を選べます。' },
          ],
        },
      ],
      outro: 'CO は長考の末 AK でコール。フロップのレイズがあったから、リバーで全額を入れられました。',
    },
    { t: 'h', text: '振り返り' },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 6.5, stack: 97.5 },
        { label: 'ターン開始', pot: 24.5, stack: 88.5 },
        { label: 'リバー開始', pot: 56.5, stack: 72.5 },
      ],
      caption: 'SPR は 15 → 3.6 → 1.3。フロップのレイズがなければ、リバーでもスタックの大半が残っていました。',
    },
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
      t: 'estimate', q: '72.5bb のオールインは、ポット 56.5bb の約何%？',
      hand: ['5c', '5d'], board: ['Ks', 'Qd', '5h', '2c', '8d'],
      min: 0, max: 200, step: 10, unit: '%', answer: 130, tolerance: 30,
      explain: '72.5 ÷ 56.5 ≒ 1.28 で、約1.3倍のオーバーベットです。1.3倍へのコール率が 36bb へのコール率の約半分以上なら、オールインの方が得になります。',
    },
    { t: 'h', text: 'CO のレンジを分ける' },
    {
      t: 'rapid',
      q: 'リバーでオールインされた CO。この手ならどうする？（目安）',
      choices: ['コール', 'フォールド'],
      items: [
        { cards: ['Ac', 'Kh'], board: ['Ks', 'Qd', '5h', '2c', '8d'], answer: 0, why: 'トップペア・トップキッカー。ここまで払ったポットから降りにくい手です。' },
        { cards: ['Jh', 'Th'], board: ['Ks', 'Qd', '5h', '2c', '8d'], answer: 1, why: 'ストレートドローが外れ、J ハイしかありません。' },
        { cards: ['Kh', 'Qh'], board: ['Ks', 'Qd', '5h', '2c', '8d'], answer: 0, why: 'ツーペア。オーバーベットにもコールします。' },
        { cards: ['Ah', 'Js'], board: ['Ks', 'Qd', '5h', '2c', '8d'], answer: 1, why: 'ガットショットが外れた A ハイです。' },
        { cards: ['Ad', 'Kd'], board: ['Ks', 'Qd', '5h', '2c', '8d'], answer: 0, why: '強い K はポットの大きさからコールしがちです。' },
        { cards: ['Ad', 'Th'], board: ['Ks', 'Qd', '5h', '2c', '8d'], answer: 1, why: 'J が来なかった A ハイ。どのサイズでも降ります。' },
      ],
    },
    { t: 'tip', text: '相手のレンジが強いワンペアと外れたドローに分かれ、自分がその上にいるなら、オーバーベットで最大のサイズを選べます。' },
  ],
};

export default lesson;
