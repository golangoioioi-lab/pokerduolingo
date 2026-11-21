import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'srp-turn-after-flop-cbet',
  blocks: [
    { t: 'h', text: 'どのターンなら打ち続ける？' },
    {
      t: 'quiz',
      q: 'BTN対BB、9♠6♦2♣ で c-bet がコールされました。BTN がターンで打ちやすいカードは？',
      board: ['9s', '6d', '2c'],
      options: ['A♥', '7♦', '8♦', '5♠'],
      optionCards: [['Ah'], ['7d'], ['8d'], ['5s']],
      answer: 0,
      explain: 'A は BTN のレンジに多く、BB には少ないカードです。7・8・5 は BB のつながった手を強くします。',
    },
    {
      t: 'list',
      items: [
        '**自分に良いカード**：A・K などの高いカード。打ち続けやすい。',
        '**相手に良いカード**：ドローが完成する、低くつながるカード。頻度を下げる。',
        '**ブランク**：どちらにも影響しない。フロップの方針を続ける。',
      ],
    },
    { t: 'h', text: 'ターンは大きく、ポットは急に育つ' },
    {
      t: 'tree',
      root: '9♠6♦2♣ A♥、ポット9.1bb。Q♥J♦で6bet（約66%）かチェックか',
      options: [
        {
          label: '6bbをベット',
          outcomes: [
            { label: 'BBがフォールド（約50%）', prob: 0.5, value: 9.1 },
            { label: 'コールされ、後で勝つ', prob: 0.1, value: 15.1 },
            { label: 'コールされ、後で負ける', prob: 0.4, value: -6 },
          ],
        },
        { label: 'チェック', ev: 0.8, note: 'ショーダウンで一部勝つ例' },
      ],
      caption: '数値は単純化した例です。ブラフはフォールド率が十分あるときに利益が出ます。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 5.5, stack: 97.5 },
        { label: 'フロップ 1.8bet・コール', pot: 9.1, stack: 95.7 },
        { label: 'ターン 6bet・コール', pot: 21.1, stack: 89.7 },
        { label: 'リバー 14bet・コール', pot: 49.1, stack: 75.7 },
      ],
      caption: '33%→66%→66%。ターン以降でポットが一気に大きくなります。',
    },
    {
      t: 'odds',
      pot: 9.1,
      bet: 6,
      equity: 30,
      caption: 'ターンの66%ベットに必要な勝率は約28%。フロップより高く、ドローは続けにくくなります。',
    },
    {
      t: 'estimate',
      q: 'ポット9.1bbに6bbのベット。コールに必要な勝率は何%？',
      min: 0,
      max: 60,
      step: 1,
      unit: '%',
      answer: 28,
      tolerance: 4,
      explain: '6 ÷ (9.1 + 12) = 6 ÷ 21.1 ≈ 28% です。',
    },
    { t: 'h', text: 'もう一度：ターンで決める' },
    {
      t: 'play',
      title: 'BTN で Q♥J♦、ターンに A',
      hero: 'BTN',
      heroCards: ['Qh', 'Jd'],
      villain: 'BB',
      steps: [
        {
          street: 'フロップ',
          board: ['9s', '6d', '2c'],
          pot: 5.5,
          say: 'BTN オープン、BB コール。フロップは **9♠6♦2♣**。BB はチェック。',
          q: 'オーバーカード2枚。どうする？',
          options: [
            { label: '1.8bb（約33%）ベット', good: true, why: '乾いたボード。小さく打って降ろしにいきます。' },
            { label: 'チェック', good: true, why: 'これも成り立ちます（僅差）。今回はベットの流れで進めます。' },
            { label: 'ポットベット', good: false, why: '大きくする理由がありません。' },
          ],
        },
        {
          street: 'ターン',
          board: ['Ah'],
          pot: 9.1,
          say: 'BB がコール。ターンは **A♥**。BB はチェック。',
          q: 'まだ Q ハイ。どうする？',
          options: [
            { label: '約66%（6bb）ベット', good: true, why: 'A は BTN 側のカード。BB の 9x や 6x を降ろしにいきます。' },
            { label: 'チェック', good: false, why: 'Q ハイではショーダウンで勝ちにくく、降ろす好機を逃します。' },
          ],
        },
      ],
      outro: 'ターンは「誰のカードか」で決めます。自分に良いカードなら弱い手でも打ち続けます。',
    },
    {
      t: 'rapid',
      q: 'BTN。フロップの c-bet がコールされ、BB がチェック。ターンは？',
      choices: ['もう一度ベット', 'チェック'],
      items: [
        { cards: ['Qh', 'Jd'], board: ['9s', '6d', '2c', 'Ah'], answer: 0, why: 'A は BTN に有利なカードです。' },
        { cards: ['Qh', 'Jd'], board: ['9s', '6d', '2c', '7d'], answer: 1, why: '7 は BB の 87 や 85 を助けるカードです。' },
        { cards: ['Kc', 'Kd'], board: ['9s', '6d', '2c', '3h'], answer: 0, why: 'ブランク。オーバーペアは価値を取ります。' },
        { cards: ['As', 'Qs'], board: ['9s', '6d', '2c', 'Kh'], answer: 0, why: 'K も BTN 側のカード。A ハイでも降ろしにいけます。' },
        { cards: ['Tc', '9c'], board: ['9s', '6d', '2c', '8d'], answer: 1, why: 'つながるカード。トップペアでもポットを守ります。' },
        { cards: ['7c', '7h'], board: ['9s', '6d', '2c', '5s'], answer: 1, why: '中くらいの手。相手に良いカードではチェックです。' },
      ],
    },
  ],
};

export default lesson;
