import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'rb-streets',
  blocks: [
    { t: 'h', text: '今はどのストリート？' },
    {
      t: 'rapid',
      q: '場のカードを見て答えてください。',
      choices: ['フロップ', 'ターン'],
      items: [
        { cards: ['Ah', 'Qh'], board: ['Ks', '7d', '2c'], answer: 0 },
        { cards: ['Ah', 'Qh'], board: ['Ks', '7d', '2c', '9h'], answer: 1, why: '場に4枚あるのはターンです。' },
        { cards: ['Qs', 'Jc'], board: ['Kh', '8d', '3c'], answer: 0 },
        { cards: ['9s', '9d'], board: ['Th', '6c', '2s', 'Ad'], answer: 1, why: '4枚目が開いています。' },
        { cards: ['7c', '6c'], board: ['8h', '5s', '2d', 'Jc'], answer: 1, why: '4枚あるのでターンです。' },
        { cards: ['Ad', 'Kd'], board: ['Qc', 'Jh', '4s'], answer: 0 },
      ],
    },
    {
      t: 'table',
      head: ['ストリート', '開くカード', '場の合計'],
      rows: [
        ['プリフロップ', 'なし（手札2枚）', '0枚'],
        ['フロップ', '3枚', '3枚'],
        ['ターン', '1枚', '4枚'],
        ['リバー', '1枚', '5枚'],
      ],
    },
    { t: 'p', text: 'リバーの後、残った人が手札を見せ合うのが**ショーダウン**。途中で全員が降りれば、残った1人がポットを取ります。' },
    { t: 'h', text: '1ハンドの流れ' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 1.5, actions: ['BTN：2.5bb オープン', 'SB：フォールド', 'BB：コール'] },
        { street: 'フロップ', board: ['Ks', '7d', '2c'], pot: 5.5, actions: ['BB：チェック', 'BTN：2bb ベット', 'BB：コール'] },
        { street: 'ターン', board: ['9h'], pot: 9.5, actions: ['BB：チェック', 'BTN：チェック'] },
        { street: 'リバー', board: ['3s'], pot: 9.5, actions: ['BB：チェック', 'BTN：6bb ベット', 'BB：フォールド'] },
      ],
      caption: 'プリフロップは UTG から、フロップ以降は残っている中で SB に近い人から行動します。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'プリフロップ後', pot: 5.5, stack: 97.5 },
        { label: 'フロップ後', pot: 9.5, stack: 95.5 },
        { label: 'ターン後', pot: 9.5, stack: 95.5 },
      ],
      caption: '上のハンドのポットとスタック。',
    },
    { t: 'h', text: '同じハンドを BTN で打つ' },
    {
      t: 'play',
      title: 'BTN で A♠K♣',
      hero: 'BTN', heroCards: ['As', 'Kc'], villain: 'BB',
      steps: [
        {
          street: 'プリフロップ', pot: 1.5,
          say: '手札2枚だけが配られた状態。CO までフォールド。',
          q: 'どうする？',
          options: [
            { label: '2.5bb レイズ', good: true, why: 'AK は最上位クラスです。' },
            { label: 'フォールド', good: false, why: '降りる理由はありません。' },
          ],
        },
        {
          street: 'フロップ', board: ['Ks', '7d', '2c'], pot: 5.5,
          say: '3枚が開きました。BB は先に行動してチェック。',
          q: 'トップペア。どうする？',
          options: [
            { label: '2bb ベット', good: true, why: '弱い K や 7 から払ってもらいます。' },
            { label: 'チェック', good: false, why: '強い手なので、賭けて取りにいきます。' },
          ],
        },
        { street: 'ターン', board: ['9h'], pot: 9.5, say: 'BB がコール。4枚目は 9。両者チェック。' },
        {
          street: 'リバー', board: ['3s'], pot: 9.5,
          say: '5枚目は 3。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: '6bb ベット', good: true, why: '弱い K から払ってもらうバリューベットです。' },
            { label: 'チェック', good: false, why: '勝てることは多いですが、取れる分を逃します。' },
          ],
        },
      ],
      outro: 'BB はフォールド。ショーダウンなしでポットを獲得しました。',
    },
    {
      t: 'rapid',
      q: 'フロップ以降、先に行動するのは？',
      choices: ['あなた', '相手'],
      items: [
        { text: 'あなた BTN・相手 BB', answer: 1, why: 'BB が先、BTN は最後です。' },
        { text: 'あなた SB・相手 BTN', answer: 0 },
        { text: 'あなた BB・相手 CO', answer: 0 },
        { text: 'あなた HJ・相手 BB', answer: 1, why: 'フロップ以降はブラインドが先です。' },
        { text: 'あなた UTG・相手 CO', answer: 0 },
        { text: 'あなた BTN・相手 SB', answer: 1 },
      ],
    },
  ],
};

export default lesson;
