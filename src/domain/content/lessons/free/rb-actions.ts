import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'rb-actions',
  blocks: [
    { t: 'h', text: 'その行動、選べる？' },
    {
      t: 'rapid',
      q: 'この場面で選べる行動？',
      choices: ['選べる', '選べない'],
      items: [
        { text: '誰もベットしていない → チェック', answer: 0 },
        { text: '相手が 3bb ベット → チェック', answer: 1, why: 'ベットがあるときはコール・レイズ・フォールドのどれかです。' },
        { text: '誰もベットしていない → コール', answer: 1, why: '合わせる賭けがないのでコールはできません。' },
        { text: '相手が 3bb ベット → レイズ', answer: 0 },
        { text: '誰もベットしていない → ベット', answer: 0 },
        { text: '相手が 3bb ベット → コール', answer: 0 },
        { text: '誰もベットしていない → フォールド', answer: 0, why: '選べますが損です。無料ならチェックします。' },
      ],
    },
    {
      t: 'table',
      head: ['行動', '意味', '使える場面'],
      rows: [
        ['チェック', '賭けずにパス', '誰もベットしていない'],
        ['ベット', '最初に賭ける', '誰もベットしていない'],
        ['コール', '同額を出して続ける', 'ベットがある'],
        ['レイズ', '賭けを増やす', 'ベットがある'],
        ['フォールド', '降りる', 'いつでも'],
      ],
    },
    { t: 'warn', title: '無料のときは降りない', text: '誰もベットしていないなら、フォールドせずにチェックします。' },
    { t: 'h', text: 'プリフロップはブラインドがベット扱い' },
    { t: 'p', text: '最初に入るレイズを**オープン**と呼び、2.5bb が標準です。BB は 1bb を払い済みなので、コールは追加 1.5bb で済みます。' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: 'フォールド', folded: true },
        { pos: 'HJ', action: 'フォールド', folded: true },
        { pos: 'CO', action: 'オープン', bet: 2.5 },
        { pos: 'BTN', action: 'コール', bet: 2.5 },
        { pos: 'SB', action: 'フォールド', folded: true },
        { pos: 'BB', hero: true, action: '判断中', bet: 1 },
      ],
      pot: 6.5,
      caption: 'ポットは 2.5 + 2.5 + 0.5 + 1 = 6.5bb。',
    },
    {
      t: 'estimate',
      q: 'CO が 2.5bb にオープン。BB のあなたがコールするには、追加で何 bb？',
      hand: ['Ah', 'Qd'],
      min: 0, max: 5, step: 0.5, unit: 'bb', answer: 1.5, tolerance: 0.25,
      explain: '2.5 − 1 = 1.5bb です。',
    },
    { t: 'h', text: 'ベットとコールでポットが育つ' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 1.5, actions: ['CO：2.5bb オープン', 'BTN・SB：フォールド', 'BB：コール'] },
        { street: 'フロップ', board: ['Kh', '8d', '3c'], pot: 5.5, actions: ['BB：チェック', 'CO：3.5bb ベット', 'BB：コール'] },
      ],
      caption: '強い手はレイズ、中くらいはコールかチェック、弱い手はフォールドが基本。',
    },
    { t: 'h', text: 'BB で1ハンド' },
    {
      t: 'quiz',
      q: 'プリフロップで最初に入るレイズを何と呼ぶ？',
      options: ['3ベット', 'オープン', 'チェックレイズ'],
      answer: 1,
      explain: '誰もレイズしていない状況での最初のレイズがオープンです。',
    },

    {
      t: 'play',
      title: 'BB で K♦J♦',
      hero: 'BB', heroCards: ['Kd', 'Jd'], villain: 'CO', villainCards: ['Qs', 'Jc'],
      steps: [
        {
          street: 'プリフロップ', pot: 4,
          say: 'CO が 2.5bb にオープン。BTN と SB はフォールド。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'レイズが入っているのでチェックはできません。' },
            { label: 'フォールド', good: false, why: 'KJs は BB で十分守れる手です。' },
            { label: 'コール（追加 1.5bb）', good: true, why: '安く参加でき、ポットオッズも十分です。' },
          ],
        },
        {
          street: 'フロップ', board: ['Ks', '8c', '3h'], pot: 5.5,
          say: 'フロップは K-8-3。あなたが先に行動します。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: 'オープンした CO に打たせるのが基本です。' },
            { label: 'フォールド', good: false, why: '誰も賭けていません。しかもトップペアです。' },
          ],
        },
        {
          street: 'フロップ', pot: 7.5,
          say: 'CO が 2bb ベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'トップペアで続けます。弱い手からの賭けも受けられます。' },
            { label: 'フォールド', good: false, why: 'トップペアを小さいベットで降りるのは早すぎます。' },
          ],
        },
        { street: 'ターン', board: ['5d'], pot: 9.5, say: 'ターンは 5。あなたがチェック、CO もチェック。' },
        {
          street: 'リバー', board: ['2s'], pot: 9.5,
          say: 'リバーは 2。あなたが先に行動します。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: 'CO はターンで諦めました。ショーダウンで勝てることが多い場面です。小さくベットしても構いません。' },
            { label: 'フォールド', good: false, why: '無料で見られるのに降りる理由はありません。' },
          ],
        },
      ],
      outro: 'チェック・ベット・コール・フォールドを場面で使い分けました。',
    },
  ],
};

export default lesson;
