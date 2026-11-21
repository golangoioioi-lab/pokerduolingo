import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'srp-paired-boards-cbet',
  blocks: [
    { t: 'h', text: 'ペアボードで打ってみる' },
    {
      t: 'play',
      title: 'BTN で A♣J♦、7-7-3',
      hero: 'BTN',
      heroCards: ['Ac', 'Jd'],
      villain: 'BB',
      steps: [
        {
          street: 'フロップ',
          board: ['7h', '7d', '3s'],
          pot: 5.5,
          say: 'BTN オープン、BB コール。フロップは **7♥7♦3♠**。BB はチェック。',
          q: 'A ハイ。どうする？',
          options: [
            { label: '1.4bb（25%）ベット', good: true, why: 'どちらにも強い手が少なく、小さいベットでよく降ります。' },
            { label: '5bb（ほぼポット）ベット', good: false, why: '大きくする理由がありません。リスクだけ増えます。' },
            { label: 'チェック', good: false, why: 'A ハイも小さく打つのが基本です。' },
          ],
        },
        {
          street: 'ターン',
          board: ['Ah'],
          pot: 8.3,
          say: 'BB がコール。ターンは **A♥**。トップペアになりました。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: '約半ポット（4bb）ベット', good: true, why: 'BB の小さなペアや弱い A から価値を取ります。' },
            { label: 'チェック', good: false, why: '有利なカードが落ちたので、打って取りに行きます。' },
          ],
        },
      ],
      outro: 'ペアボードは小さく高頻度で始め、A や K が落ちたら続けて打ちます。',
    },
    { t: 'h', text: 'なぜ小さく高頻度なのか' },
    {
      t: 'p',
      text: 'ペアボードではトリップス以上の手が少なく、どちらもほとんど当たっていません。そうなると、高いカードとペアを多く持つ BTN のレンジ優位がそのまま効きます。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'KK（クワッズ）', hands: ['KK'] },
        { label: 'AK（トリップスK）', hands: ['AK'] },
      ],
      dead: ['Ks', 'Kd', '4c'],
      caption: 'K♠K♦4♣ では KK は1コンボ、AK は16から8コンボに減ります。',
    },
    {
      t: 'odds',
      pot: 5.5,
      bet: 1.4,
      equity: 17,
      caption: '25% の c-bet。BB の必要勝率は約17%。',
    },
    {
      t: 'table',
      head: ['ボード', 'c-bet頻度（目安）', 'サイズ（目安）'],
      rows: [
        ['KK4（高いペア）', '8〜9割', '25〜33%'],
        ['773（低いペア）', '7〜8割', '25〜33%'],
        ['998（つながったペア）', '5〜6割', '33〜50%'],
      ],
    },
    {
      t: 'estimate',
      q: 'K♠K♦4♣で、AK は何コンボ残る？',
      board: ['Ks', 'Kd', '4c'],
      min: 0,
      max: 16,
      step: 1,
      answer: 8,
      tolerance: 2,
      explain: 'K は2枚しか残らないので、A4枚 × K2枚 = 8コンボです。',
    },
    {
      t: 'quiz',
      q: '7♥7♦3♠でBBがコールした後、BTN がターンで打ちやすいカードは？',
      board: ['7h', '7d', '3s'],
      options: ['A♥', '8♣', '6♠', '5♥'],
      optionCards: [['Ah'], ['8c'], ['6s'], ['5h']],
      answer: 0,
      explain: 'A は BTN のレンジに多く、BB には少ないカードです。8・6・5 は BB の小さなコネクターを助けます。',
    },
    { t: 'h', text: 'もう一度：ペアボードの方針' },
    {
      t: 'rapid',
      q: 'BTN対BB。c-bet の方針は？',
      choices: ['小さく高頻度', '頻度を下げる'],
      items: [
        { cards: ['Ks', 'Kd', '4c'], answer: 0, why: '高いペアボードは BTN が大きく有利です。' },
        { cards: ['9s', '9d', '8s'], answer: 1, why: 'BB の 87s や T8s に当たり、ドローもあります。' },
        { cards: ['7h', '7d', '3s'], answer: 0, why: '低いペアでも乾いていれば小さく打てます。' },
        { cards: ['Th', 'Td', '9c'], answer: 1, why: 'つながったペアボードは BB のレンジに当たります。' },
        { cards: ['Qc', 'Qh', '5d'], answer: 0, why: '高いペア＋離れたカード。BTN 有利です。' },
        { cards: ['As', 'Ad', '6c'], answer: 0, why: 'A のペアボード。強い A は BTN に多いです。' },
      ],
    },
  ],
};

export default lesson;
