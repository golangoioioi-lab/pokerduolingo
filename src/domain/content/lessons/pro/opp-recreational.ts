import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'opp-recreational',
  blocks: [
    { t: 'h', text: 'まず判断してみる' },
    {
      t: 'rapid',
      q: 'HJ のレクリエーショナルプレイヤーがリンプ。BTN のあなたは5bb にレイズ（アイソレート）する？',
      choices: ['アイソレート', 'フォールド'],
      items: [
        { cards: ['Ah', 'Td'], answer: 0, why: '弱い A や小さいペアに勝っていることが多い手です。' },
        { cards: ['7h', '2c'], answer: 1 },
        { cards: ['Kc', 'Jd'], answer: 0 },
        { cards: ['4s', '3d'], answer: 1, why: '1対1で戦っても勝ちにくい手です。' },
        { cards: ['7s', '7d'], answer: 0 },
        { cards: ['Qh', '4c'], answer: 1 },
        { cards: ['Ad', '5d'], answer: 0 },
        { cards: ['9c', '2h'], answer: 1 },
      ],
    },
    { t: 'p', text: '**レクリエーショナルプレイヤー（レク）**は楽しむために遊ぶ相手です。多くの卓で、利益の大部分はこの相手から生まれます。' },
    { t: 'h', text: '見分けるサイン' },
    {
      t: 'compare',
      left: { title: 'レギュラー', points: ['2〜3bb のレイズでオープン', 'サイズが一定', 'ショーダウンの手が教科書どおり'], verdict: 'neutral' },
      right: { title: 'レクリエーショナル', points: ['リンプやコールが多い', 'サイズがばらばら（強いと大きく）', 'K4o や Q7s でショーダウンに来る'], verdict: 'good' },
    },
    { t: 'h', text: 'リンプにはアイソレート' },
    {
      t: 'tree',
      root: 'HJ のレクがリンプ。あなたは BTN で ATo',
      options: [
        {
          label: '5bb にアイソレート',
          outcomes: [
            { label: '全員が降りる', prob: 0.35, value: 2.5 },
            { label: 'レクだけがコール（平均）', prob: 0.55, value: 1.5 },
            { label: 'ブラインドに3betされて降りる', prob: 0.1, value: -5 },
          ],
          note: 'コール後の平均 +1.5bb は目安',
        },
        { label: 'リンプで後ろにつく', ev: 0.4, note: 'マルチウェイになりやすい。値は目安' },
        { label: 'フォールド', ev: 0 },
      ],
      caption: 'ポジションと主導権を取って1対1にすると、レクからの利益が大きくなります。',
    },
    {
      t: 'estimate',
      q: '全員が降りる 45%、レクだけがコール 45%、3bet 10% なら、アイソレートの EV は何 bb？',
      min: -1,
      max: 3,
      step: 0.1,
      unit: 'bb',
      answer: 1.3,
      tolerance: 0.5,
      explain: '0.45 × 2.5 + 0.45 × 1.5 − 0.1 × 5 = 1.3bb です。',
    },
    { t: 'p', text: 'ポストフロップは、バリューを大きく、ブラフを少なく。サイズの癖（大きいと強い、小さいと弱い）も記録します。' },
    { t: 'h', text: 'もう一度：レクから取り切る' },
    {
      t: 'play',
      title: 'BTN の ATo、レクとのヘッズアップ',
      hero: 'BTN',
      heroCards: ['Ah', 'Td'],
      villain: 'HJ',
      villainCards: ['Ts', '4s'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 2.5,
          say: 'HJ のレクが 1bb でリンプ。あなたは BTN で **A♥T♦**。',
          q: 'どうする？',
          options: [
            { label: 'リンプで続く', good: false, why: 'ブラインドも参加しやすく、多人数のポットになります。' },
            { label: '5bb にアイソレート', good: true, why: 'ポジションを持って1対1にします。' },
            { label: 'フォールド', good: false, why: 'レク相手には十分強い手です。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Tc', '6s', '2d'],
          pot: 11.5,
          say: 'ブラインドはフォールド、レクがコール。フロップは **T♣6♠2♦**。トップペア。レクはチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'レクは弱い手でも払ってくれます。' },
            { label: '7bb ベット', good: true, why: '弱い T や 6 のペアから取ります。' },
          ],
        },
        { street: 'ターン', board: ['9h'], pot: 25.5, say: 'レクがコール。ターンは **9♥**。レクはチェック。あなたは 16bb をベットし、レクがコール。' },
        {
          street: 'リバー',
          board: ['3s'],
          pot: 57.5,
          say: 'リバーは **3♠**。レクはチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: '2回コールした相手から取れる額を逃します。' },
            { label: '30bb ベット', good: true, why: 'キッカーの弱い T も最後まで付いてきます。' },
          ],
        },
      ],
      outro: 'レクには、アイソレートで1対1にして、当たったら大きく打ちます。',
    },
    {
      t: 'quiz',
      q: 'レクを見分けるサインとして最も信頼できるのは？',
      options: ['オープンリンプと弱い手でのショーダウン', '服装', '最初の1ハンドの結果'],
      answer: 0,
      explain: 'リンプの多さとショーダウンの手は、プレイの傾向を直接表します。',
    },
    { t: 'tip', text: 'レクは楽しい卓に残ります。説教や長考は避け、手早く雰囲気良く打つことも大切な調整です。' },
  ],
};

export default lesson;
