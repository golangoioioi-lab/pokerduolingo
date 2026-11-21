import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'srp-ak-high-boards',
  blocks: [
    { t: 'h', text: 'BB はどの手で続ける？' },
    {
      t: 'quiz',
      q: 'BTN の小さな c-bet に対し、BB がコールを続けやすい手は？',
      board: ['As', '7d', '2c'],
      options: ['A♥9♥（弱いAx）', 'K♣J♦', '9♣8♦', 'T♥3♦'],
      optionCards: [['Ah', '9h'], ['Kc', 'Jd'], ['9c', '8d'], ['Th', '3d']],
      answer: 0,
      explain: 'BB は Ax、ペア、バックドアのある手で続けます。ノーペアでドローもない手は降ります。',
    },
    {
      t: 'p',
      text: 'BB は AA や AK の多くを 3bet するので、コールレンジに強い A が少なくなります。BTN にはそれが全部あります。**レンジ優位とナッツ優位が同時に BTN 側**にあるのが A・K ハイのドライボードです。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'セット', hands: ['AA', '77', '22'] },
        { label: 'トップペア（AT〜AK）', hands: ['AKs', 'AQs', 'AJs', 'ATs', 'AKo', 'AQo', 'AJo', 'ATo'] },
      ],
      dead: ['As', '7d', '2c'],
      caption: 'A♠7♦2♣ で BTN が持つ強い手。セット9、トップペア48コンボ。BB にはここが少ないです。',
    },
    { t: 'h', text: 'つながると頻度が下がる' },
    {
      t: 'table',
      head: ['ボード', 'c-bet頻度（目安）', 'サイズ（目安）'],
      rows: [
        ['A72 ドライ', '8〜9割', '25〜33%'],
        ['K72 ドライ', '7〜8割', '25〜33%'],
        ['AK5 レインボー', '6〜7割', '約33%'],
        ['KQ9 つながり気味', '4〜5割', '50〜66%'],
      ],
    },
    {
      t: 'quiz',
      q: 'このボードで BTN の c-bet はどう変わる？',
      board: ['Ks', 'Qd', '9h'],
      options: ['頻度を下げてサイズを上げる', '頻度もサイズも下げる', '全部で小さく打つ', '絶対にチェック'],
      answer: 0,
      explain: 'BB にも KJ・QJ・JT などエクイティの高い手が増えます。手を選んで大きめに打ちます。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'プリフロップ後', pot: 5.5, stack: 97.5 },
        { label: 'フロップ 1.8bet・コール', pot: 9.1, stack: 95.7 },
        { label: 'ターン 4.5bet・コール', pot: 18.1, stack: 91.2 },
        { label: 'リバー 9bet・コール', pot: 36.1, stack: 82.2 },
      ],
      caption: '33%→50%→50%で3回打つと、ポットは約36bb まで育ちます。',
    },
    { t: 'h', text: 'トップペアで3回取る' },
    {
      t: 'play',
      title: 'BTN で K♥Q♦、K-7-2',
      hero: 'BTN',
      heroCards: ['Kh', 'Qd'],
      villain: 'BB',
      villainCards: ['Ah', '7h'],
      steps: [
        {
          street: 'フロップ',
          board: ['Ks', '7d', '2c'],
          pot: 5.5,
          say: 'BTN オープン、BB コール。フロップは **K♠7♦2♣**。BB はチェック。',
          q: 'トップペア。どうする？',
          options: [
            { label: '1.8bb（約33%）ベット', good: true, why: '7x や弱いペアから小さく取ります。' },
            { label: 'ポットの1.5倍', good: false, why: '大きすぎて弱い手が全部降ります。' },
          ],
        },
        {
          street: 'ターン',
          board: ['4h'],
          pot: 9.1,
          say: 'BB がコール。ターンは **4♥**。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: '約半ポット（4.5bb）ベット', good: true, why: '7x、弱い K、ドローがまだ払えます。' },
            { label: 'チェック', good: false, why: 'ボードが安全なうちに価値を取ります。' },
          ],
        },
        {
          street: 'リバー',
          board: ['3d'],
          pot: 18.1,
          say: 'BB がコール。リバーは **3♦**。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: '約半ポット（9bb）ベット', good: true, why: '7x や弱い K からまだ取れる、薄いバリューです。' },
            { label: 'チェック', good: false, why: 'チェックも悪くはありませんが、取れる価値を残します。' },
          ],
        },
      ],
      outro: 'BB は A♥7♥ のセカンドペアで最後まで払いました。A・K ハイのドライボードでは小さく始めて価値を積みます。',
    },
    { t: 'h', text: 'もう一度：ボード別のサイズ' },
    {
      t: 'rapid',
      q: 'BTN対BB。c-bet の方針は？',
      choices: ['小さく高頻度', '頻度を下げて大きめ'],
      items: [
        { cards: ['As', '7d', '2c'], answer: 0, why: 'A ハイ・ドライの典型です。' },
        { cards: ['Ks', 'Qd', '9h'], answer: 1, why: 'BB にストレート系の手が増えます。' },
        { cards: ['Ks', '7d', '2c'], answer: 0, why: 'K ハイ・ドライも BTN 有利です。' },
        { cards: ['Kh', 'Jh', 'Th'], answer: 1, why: 'モノトーンでつながり、動きが大きいです。' },
        { cards: ['As', 'Kd', '5c'], answer: 0, why: 'A と K は BTN のレンジに多いカードです。' },
        { cards: ['Ah', 'Td', '9d'], answer: 1, why: 'A ハイでもドローが多いボードです。' },
        { cards: ['Ad', '8c', '3s'], answer: 0, why: '乾いた A ハイです。' },
      ],
    },
  ],
};

export default lesson;
