import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'betting-rounds',
  blocks: [
    { t: 'h', text: 'ラウンドは終わった？' },
    {
      t: 'rapid',
      q: 'このラウンドは終わる？ まだ続く？',
      choices: ['終わる', '続く'],
      items: [
        { text: '全員チェックした', answer: 0 },
        { text: 'A ベット → B コール → C フォールド', answer: 0 },
        { text: 'A ベット → B レイズ', answer: 1, why: 'A はまだ B のレイズに応えていません。' },
        { text: 'A ベット → B コール → C レイズ', answer: 1, why: 'A と B にもう一度順番が回ります。' },
        { text: 'A チェック → B ベット → C コール', answer: 1, why: 'A がまだ B のベットに応えていません。' },
        { text: 'A ベット → B・C フォールド', answer: 0, why: 'ハンド自体が終わり、A がポットを取ります。' },
        { text: 'プリフロップ、全員コールで BB の番', answer: 1, why: 'BB は最後にチェックかレイズを選べます。' },
      ],
    },
    { t: 'p', text: '残っている全員が同じ額を出し終えたら、ラウンドは終わりです。レイズが入ると、すでに行動した人にも順番が戻ります。' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 19.5, actions: ['SB 0.5bb・BB 1bb', 'UTG 3bb にレイズ、HJ フォールド', 'CO 9bb にリレイズ、残りはフォールド', 'UTG がコール（6bb 追加）→ 終了'] },
      ],
      caption: '最後のレイズに全員が応えた時点でラウンドが終わります。',
    },
    { t: 'h', text: '最小レイズ' },
    { t: 'formula', text: '最小レイズ額 = 今の最高額 + 直前のレイズ幅', note: 'ノーリミットでは上限なし。手持ち全部まで出せます。' },
    {
      t: 'pot',
      steps: [
        { label: 'ブラインド', pot: 1.5, stack: 100 },
        { label: 'UTG 3bb', pot: 4.5, stack: 97 },
        { label: 'CO 9bb', pot: 13.5, stack: 91 },
        { label: 'UTG コール', pot: 19.5, stack: 91 },
      ],
      caption: '1bb → 3bb でレイズ幅 2bb、3bb → 9bb でレイズ幅 6bb です。',
    },
    {
      t: 'estimate',
      q: 'UTG が 3bb にオープン。次の人の最小レイズは何 bb？',
      min: 0, max: 12, step: 1, unit: 'bb', answer: 5, tolerance: 0.5,
      explain: '1bb → 3bb でレイズ幅 2bb。3 + 2 = 5bb です。',
    },
    {
      t: 'estimate',
      q: 'フロップで 5bb ベット、次の人が 15bb にレイズ。あなたの最小リレイズは？',
      min: 0, max: 50, step: 1, unit: 'bb', answer: 25, tolerance: 1,
      board: ['Kd', '7h', '2c'],
      explain: 'レイズ幅は 15 − 5 = 10bb。15 + 10 = 25bb です。',
    },
    { t: 'h', text: 'ルールを使って1ハンド' },
    {
      t: 'play',
      title: 'CO で QQ',
      hero: 'CO',
      heroCards: ['Qh', 'Qd'],
      villain: 'UTG',
      steps: [
        {
          street: 'プリフロップ', pot: 4.5, say: 'UTG が 3bb にレイズ、HJ はフォールド。あなたは CO で **Q♥Q♦**。', q: 'どうする？',
          options: [
            { label: '4bb にレイズ', good: false, why: '最小レイズは 3 + 2 = 5bb。4bb はルール上できません。' },
            { label: '9bb にリレイズ', good: true, why: 'QQ は強い手。大きめにリレイズします。' },
            { label: 'フォールド', good: false, why: 'QQ は上位の手です。' },
          ],
        },
        {
          street: 'フロップ', board: ['8c', '5d', '2s'], pot: 19.5, say: '他は全員フォールド、UTG がコール。UTG はチェック。', q: 'どうする？',
          options: [
            { label: '6bb ベット', good: true, why: 'どのカードより高いペアです。小さいペアからも払ってもらえます。' },
            { label: 'チェック', good: false, why: '悪くはありませんが、強い手はベットで価値を取るのが基本です。' },
          ],
        },
        {
          street: 'フロップ', pot: 43.5, say: 'UTG が 18bb にレイズ（チェックレイズ）しました。', q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'レイズに直面しているのでチェックはできません。' },
            { label: '24bb にリレイズ', good: false, why: 'レイズ幅は 12bb。最小リレイズは 18 + 12 = 30bb です。' },
            { label: 'コール', good: true, why: 'QQ は強いですが、セットに負けることもあります。コールで様子を見ます。' },
          ],
        },
        { street: 'ターン', board: ['Kh'], pot: 55.5, say: 'あなたがコールして、フロップのラウンドが終了。ターンが開きました。' },
      ],
      outro: 'レイズが入るたびに順番が戻り、最小レイズ額も変わります。',
    },
  ],
};

export default lesson;
