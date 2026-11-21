import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'river-overbet',
  blocks: [
    { t: 'h', text: 'まずやってみる：どの手で大きく打つ？' },
    { t: 'p', text: 'BTNのフロップとターンのベットに、BBがチェックコール。リバーJ♣でBBはチェック。ポット20bbに30bb（150%）の**オーバーベット**を打つ手を選びます。' },
    {
      t: 'rapid',
      q: 'BTNはリバーでオーバーベット？',
      choices: ['オーバーベット', 'しない'],
      items: [
        { cards: ['Ks', 'Kd'], board: ['Kh', '8d', '4c', '2s', 'Jc'], answer: 0, why: 'トップセット。BBのトップペアから大きく取れます。' },
        { cards: ['Kd', 'Qs'], board: ['Kh', '8d', '4c', '2s', 'Jc'], answer: 1, why: 'トップペア。大きく打つと、より強い手にしか払われません。' },
        { cards: ['6h', '5h'], board: ['Kh', '8d', '4c', '2s', 'Jc'], answer: 0, why: 'ターンの両面ドローが外れた手。勝てないのでブラフ候補です。' },
        { cards: ['Kc', 'Jd'], board: ['Kh', '8d', '4c', '2s', 'Jc'], answer: 0, why: 'トップ2ペア。BBのトップペアすべてに勝っています。' },
        { cards: ['Qd', 'Qh'], board: ['Kh', '8d', '4c', '2s', 'Jc'], answer: 1, why: 'Kの下のペア。チェックで弱い手に勝つことを目指します。' },
        { cards: ['8h', '8s'], board: ['Kh', '8d', '4c', '2s', 'Jc'], answer: 0, why: 'セット。BBのレンジにはほとんど負けません。' },
        { cards: ['9h', '8c'], board: ['Kh', '8d', '4c', '2s', 'Jc'], answer: 1, why: 'ミドルペア。大きく打つと負けている手しか残りません。' },
      ],
    },
    { t: 'h', text: '使える条件は2つ' },
    {
      t: 'list',
      ordered: true,
      items: [
        '**ナッツアドバンテージ**: セットや2ペア以上を、相手より多く持っている',
        '**相手がキャップされている**: 相手の強い手は3ベットやチェックレイズに回り、チェックコールのレンジはトップペア以下に偏る',
      ],
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ', pot: 5.5, stack: 97.5 },
        { label: 'ターン', pot: 10.5, stack: 95 },
        { label: 'リバー', pot: 20.5, stack: 90 },
      ],
      caption: 'BTNが2.5bbでオープン、フロップ2.5bb・ターン5bbがコールされた例。リバーのSPRは約4.4。',
    },
    { t: 'h', text: '大きく打つほどブラフを増やせる' },
    { t: 'formula', text: 'ブラフの割合 = ベット ÷ (ポット + 2 × ベット)', note: '相手がコールに必要な勝率と同じ値' },
    { t: 'odds', pot: 20, bet: 30, equity: 37.5, caption: 'ポット20bbに30bb。ブラフは37.5%（バリュー5 : ブラフ3）まで。BBは40%以上で続けたい。' },
    {
      t: 'estimate',
      q: 'ポット20bbに40bb（2倍）をベットする。ベットレンジに含めてよいブラフの割合は？',
      min: 0,
      max: 80,
      step: 1,
      unit: '%',
      answer: 40,
      tolerance: 6,
      explain: '40 ÷ (20 + 2 × 40) = 40%。バリュー3 : ブラフ2です。',
    },
    { t: 'warn', title: '使ってはいけない場面', text: '相手にナッツが十分残っているときや、自分のバリューがトップペア程度のときは、コールされた分だけ損をします。' },
    { t: 'h', text: 'もう一度やる' },
    {
      t: 'play',
      title: 'BTNで K♠K♦',
      hero: 'BTN',
      heroCards: ['Ks', 'Kd'],
      villain: 'BB',
      villainCards: ['Kc', 'Td'],
      steps: [
        {
          street: 'フロップ',
          board: ['Kh', '8d', '4c'],
          pot: 5.5,
          say: 'BTNでオープンし、BBがコール。トップセット。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '2.5bbベット', good: true, why: 'BBのKxや8xから払ってもらえます。' },
            { label: 'チェック', good: true, why: 'ドローの少ないボードなので、チェックで打たせるのも成り立ちます。' },
          ],
        },
        { street: 'ターン', board: ['2s'], pot: 10.5, say: 'BBがコール。ターン2♠。BBのチェックに5bbを打ち、BBがコール。' },
        {
          street: 'リバー',
          board: ['Jc'],
          pot: 20.5,
          say: 'リバーJ♣。BBはチェック。残りは90bb。',
          q: 'どうする？',
          options: [
            { label: '30bb（約150%）', good: true, why: 'BBはキャップされ、自分はナッツ級。トップペアから最大限を狙えます。' },
            { label: '7bb（1/3ポット）', good: false, why: '払ってもらえる手から取れる額が小さくなります。' },
            { label: 'チェック', good: false, why: 'ナッツ級でチェックすると、BBのトップペアから何も取れません。' },
          ],
        },
      ],
      outro: 'BBはKTでコール。キャップされた相手には、ナッツ級の手で大きく打ちます。',
    },
    {
      t: 'quiz',
      q: 'オーバーベットが最も適しているのはどの状況？',
      options: ['自分のレンジの勝率が全体でわずかに高いとき', '自分にナッツ級の手が多く、相手のレンジがキャップされているとき', '相手が強い手を多く残しているとき', '自分の手がトップペア・弱いキッカーのとき'],
      answer: 1,
      explain: 'オーバーベットは「上位の手の量」で勝っている側が使います。相手に強い手が残る場面や、自分のバリューが薄い場面では損をします。',
    },
  ],
};

export default lesson;
