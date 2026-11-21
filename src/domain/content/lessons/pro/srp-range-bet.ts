import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'srp-range-bet',
  blocks: [
    { t: 'h', text: '全部の手で打てるボードはどれ？' },
    {
      t: 'quiz',
      q: 'BTN対BB。レンジのほぼ全部で小さく打てそうなフロップは？',
      options: ['A♦7♣2♠', '9♥8♥7♣', '6♠5♦4♦', 'J♠T♠9♠'],
      optionCards: [['Ad', '7c', '2s'], ['9h', '8h', '7c'], ['6s', '5d', '4d'], ['Js', 'Ts', '9s']],
      answer: 0,
      explain: 'BTN にレンジ優位があり、BB に強い手やドローが少ないのは A ハイのドライなボードです。',
    },
    {
      t: 'p',
      text: '**レンジベット**は、レンジのほぼ全部を同じ小さいサイズで打つ戦略です。サイズから手の強さを読まれません。',
    },
    {
      t: 'list',
      items: ['自分にレンジ優位がある', '相手にセットやツーペアが少ない', 'チェックで守るべき中くらいの手が少ない'],
    },
    { t: 'h', text: 'A♠7♦2♣ で数えてみる' },
    {
      t: 'combos',
      groups: [
        { label: 'セット', hands: ['AA', '77', '22'] },
        { label: 'トップペア（AT以上）', hands: ['AKs', 'AQs', 'AJs', 'ATs', 'AKo', 'AQo', 'AJo', 'ATo'] },
      ],
      dead: ['As', '7d', '2c'],
      caption: 'BTN の強い手の例。BB は AA や AK の多くを 3bet しているので、ここが薄くなります。',
    },
    {
      t: 'odds',
      pot: 5.5,
      bet: 1.4,
      equity: 17,
      caption: '25% のベット。BB の必要勝率は約17%、守るべき頻度（MDF）は約80%。',
    },
    {
      t: 'p',
      text: 'BB は8割も続けられる手を持っていません。だから BTN はどの手で打っても利益が出ます。ソルバーでも、この形は約25%を8〜9割で打つ結果が多いです（目安）。',
    },
    {
      t: 'estimate',
      q: 'ポット5.5bbに1.4bb。最小防御頻度（MDF）は何%？',
      min: 40,
      max: 100,
      step: 1,
      unit: '%',
      answer: 80,
      tolerance: 5,
      explain: 'MDF = ポット ÷ (ポット + ベット) = 5.5 ÷ 6.9 ≈ 80% です。',
    },
    { t: 'h', text: '弱い手でも打ってみる' },
    {
      t: 'play',
      title: 'BTN で J♣T♦、A-7-2',
      hero: 'BTN',
      heroCards: ['Jc', 'Td'],
      villain: 'BB',
      steps: [
        {
          street: 'フロップ',
          board: ['As', '7d', '2c'],
          pot: 5.5,
          say: 'BTN オープン、BB コール。フロップは **A♠7♦2♣**。BB はチェック。あなたは何も当たっていません。',
          q: 'どうする？',
          options: [
            { label: '1.4bb（25%）ベット', good: true, why: '強い手と同じサイズで打ち、BB の降りすぎから利益を取ります。' },
            { label: '5.5bb（ポット）ベット', good: false, why: '弱い手だけ大きく打つと、サイズで読まれます。' },
            { label: 'チェック', good: false, why: 'このボードではほぼ全部の手で打つのが目安です。' },
          ],
        },
        {
          street: 'ターン',
          board: ['9h'],
          pot: 8.3,
          say: 'BB がコール。ターンは **9♥**。ここからは手を選んで打ちます（ガットショットがつきました）。',
        },
      ],
      outro: 'フロップは全部で小さく、ターンからは手を選ぶ。これがレンジベットの流れです。',
    },
    { t: 'h', text: 'もう一度：レンジベット向き？' },
    {
      t: 'rapid',
      q: 'BTN対BB。レンジベット（小さく全部）に向く？',
      choices: ['向く', '向かない'],
      items: [
        { cards: ['Ad', '7c', '2s'], answer: 0, why: '典型的な A ハイ・ドライです。' },
        { cards: ['9h', '8h', '7c'], answer: 1, why: 'BB にストレートやドローが多くあります。' },
        { cards: ['Ks', '7d', '2c'], answer: 0, why: 'K ハイ・ドライも BTN が大きく有利です。' },
        { cards: ['As', '9d', '8d'], answer: 1, why: 'A ハイでもドローが多く、大きめに切り替えます。' },
        { cards: ['Kh', 'Kd', '5c'], answer: 0, why: 'ペアボードは BB に強い手が少なく、小さく打てます。' },
        { cards: ['6s', '5d', '4d'], answer: 1, why: '低いつながりは BB のレンジに当たります。' },
        { cards: ['Js', 'Ts', '9s'], answer: 1, why: 'モノトーンでつながり、動きが大きすぎます。' },
      ],
    },
  ],
};

export default lesson;
