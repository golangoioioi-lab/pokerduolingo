import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'first-session',
  blocks: [
    { t: 'h', text: 'プレイマネーの卓で1ハンド' },
    {
      t: 'play',
      title: 'プレイマネーで A♠J♦',
      hero: 'BTN',
      heroCards: ['As', 'Jd'],
      villain: 'BB',
      villainCards: ['8c', '6c'],
      steps: [
        {
          street: 'プリフロップ', pot: 1.5, say: '換金できない練習用チップの卓。CO までフォールドし、あなたは BTN で **A♠J♦**。', q: 'どうする？',
          options: [
            { label: '2.5bb にレイズ', good: true, why: 'BTN の AJ は強い手です。' },
            { label: 'フォールド', good: false, why: '降りるには強すぎます。' },
          ],
        },
        {
          street: 'フロップ', board: ['Kc', '8d', '4s'], pot: 5.5, say: 'BB がコール。あなたはペアなし。BB はチェック。', q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: 'プレイマネーでは相手が何でもコールしがち。ブラフは通りにくいです。' },
            { label: '4bb ベット（ブラフ）', good: false, why: '本来は有力でも、失うものがない相手は降りてくれにくいです。' },
          ],
        },
        { street: 'ターン', board: ['Js'], pot: 5.5, say: 'J が落ちて J のペア。BB はチェック、あなたもチェック。' },
        {
          street: 'リバー', board: ['2h'], pot: 5.5, say: 'BB はまたチェック。', q: 'どうする？',
          options: [
            { label: '4bb ベット', good: true, why: '弱いペアでも何でもコールしてくる相手からは、ベットで取れます。' },
            { label: 'チェック', good: false, why: 'コールしてくれる相手からの価値を取り逃します。' },
          ],
        },
      ],
      outro: 'BB は 8♣6♣ でコールしてきました。プレイマネーではブラフを減らし、勝っている手で取りにいきます。',
    },
    { t: 'h', text: '遊んでよい場所か確認する' },
    { t: 'warn', title: '注意', text: '日本では、現金や換金できるものを賭けるギャンブルは、公営競技などを除いて原則禁止です。海外サイトでも、国内からリアルマネーで参加すると違法とされるおそれがあります。迷ったら参加しないでください。このアプリは法律上の助言をするものではありません。' },
    {
      t: 'compare',
      left: { title: 'プレイマネー', points: ['操作や行動の順番に慣れられる', '相手は何でもコールしがち', 'ブラフが通りにくい'], verdict: 'neutral' },
      right: { title: 'お金を賭ける場（合法な場所のみ）', points: ['最低ステークスから', 'バイインは 100bb が基本', '失っても生活に響かない額で'], verdict: 'neutral' },
      caption: '国内なら無料アプリ・プレイマネー・換金なしの施設が選択肢です。',
    },
    { t: 'h', text: '持っていく額' },
    {
      t: 'estimate',
      q: '1/2 のゲーム（BB = 2）で 100bb のバイインは？',
      min: 0, max: 400, step: 10, answer: 200, tolerance: 20,
      explain: '100 × 2 = 200 です。',
    },
    {
      t: 'estimate',
      q: '2/5 のゲーム（BB = 5）で 100bb のバイインは？',
      min: 0, max: 1000, step: 50, answer: 500, tolerance: 100,
      explain: '100 × 5 = 500。ステークスが上がると1回の額も大きくなります。',
    },
    { t: 'p', text: '目安として、バイイン20回分以上の資金がないステークスには上げません。' },
    {
      t: 'compare',
      left: { title: '決めておくこと', points: ['30分〜1時間で区切る', '終わる時間と上限額', '迷ったハンドを1〜3個メモ'], verdict: 'good' },
      right: { title: '避けること', points: ['負けを取り返そうと長く遊ぶ', '予定外にステークスを上げる', '疲れたまま続ける'], verdict: 'bad' },
      caption: '短く区切り、あとから振り返ります。',
    },
    {
      t: 'rapid',
      q: 'よい習慣？',
      choices: ['よい', '避ける'],
      items: [
        { text: '資金 4,000 で 1/2（バイイン 200）に座る', answer: 0, why: 'ちょうど20回分です。' },
        { text: '資金 2,000 で 2/5（バイイン 500）に座る', answer: 1, why: '4回分しかありません。' },
        { text: '負けを取り返すまで延長する', answer: 1 },
        { text: '1時間で区切って振り返る', answer: 0 },
        { text: '迷ったハンドをメモしておく', answer: 0 },
        { text: '疲れていても続ける', answer: 1 },
        { text: '勝っているので予定外にステークスを上げる', answer: 1 },
        { text: 'まずプレイマネーで操作に慣れる', answer: 0 },
      ],
    },
  ],
};

export default lesson;
