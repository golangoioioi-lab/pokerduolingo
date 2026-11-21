import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'drill-preflop-odds',
  blocks: [
    { t: 'h', text: 'BB の値段はいくら？' },
    {
      t: 'rapid',
      q: 'SB はフォールド。BB がコールする必要勝率は30%未満？30%以上？',
      choices: ['30%未満', '30%以上'],
      items: [
        { text: 'BTN が 2.5bb オープン', answer: 0, why: '1.5 ÷ 5.5 ≈ 27%。' },
        { text: 'BTN が 3.5bb オープン', answer: 1, why: '2.5 ÷ 7.5 ≈ 33%。' },
        { text: 'CO が 2bb オープン', answer: 0, why: '1 ÷ 4.5 ≈ 22%。' },
        { text: 'BTN が 4bb オープン', answer: 1, why: '3 ÷ 8.5 ≈ 35%。' },
        { text: 'UTG が 2.5bb オープン、CO がコール', answer: 0, why: '1.5 ÷ 8 ≈ 19%。' },
        { text: 'SB が 15bb オールイン', answer: 1, why: '14 ÷ 30 ≈ 47%。' },
      ],
    },
    { t: 'h', text: 'ブラインドもポットの一部' },
    { t: 'p', text: 'BB はすでに1bb出しているので、払うのは「オープン − 1bb」。降りた SB の0.5bbもポットに残ります。' },
    {
      t: 'formula',
      text: 'BBのコール：払う額 = オープン − 1　／　コール後のポット = オープン × 2 + 0.5',
      note: 'SB が降りた場合。BTN 2.5bb なら 1.5 ÷ 5.5 ≈ 27%',
    },
    {
      t: 'odds',
      pot: 2.5,
      bet: 1.5,
      equity: 38,
      caption: 'BTN 2.5bb オープンに BB がコール：必要勝率約27%。図のポット2.5bbは「SB 0.5 + BB 1 + BTN のうち1bb」。勝率38%は例です。',
    },
    {
      t: 'odds',
      pot: 2,
      bet: 19,
      equity: 55,
      caption: 'SB が20bbオールイン、BB は19bbを払ってコール。必要勝率47.5%。55 は AKo に約55%なのでコールで得をします。',
    },
    {
      t: 'equity',
      players: [
        { label: 'BB', cards: ['5s', '5c'], pct: 55 },
        { label: 'SB', cards: ['Ah', 'Kd'], pct: 45 },
      ],
      caption: '小さいポケットペア対 AK はほぼ互角（目安）。',
    },
    { t: 'h', text: '練習問題' },
    {
      t: 'estimate',
      q: 'BTNが3bbにオープン、SBフォールド。BBの必要勝率は？',
      min: 0, max: 100, step: 1, unit: '%', answer: 31, tolerance: 2,
      explain: '払う額2bb、コール後のポット6.5bb。2 ÷ 6.5 ≈ 31%。オープンが大きいほど守りにくくなります。',
    },
    {
      t: 'estimate',
      q: 'BTNが2.5bbにオープン、SBが11bbに3bet、BBフォールド。BTNがコールするのに必要な勝率は？',
      min: 0, max: 100, step: 1, unit: '%', answer: 37, tolerance: 2,
      explain: '払う額 8.5bb。コール後のポットは 11 + 11 + 1（BB）= 23bb。8.5 ÷ 23 ≈ 37%。',
    },
    {
      t: 'estimate',
      q: 'SBが15bbでオールイン。BBがコールするのに必要な勝率は？',
      min: 0, max: 100, step: 1, unit: '%', answer: 47, tolerance: 2,
      explain: '払う額14bb、コール後のポット30bb。14 ÷ 30 ≈ 47%。',
    },
    {
      t: 'quiz',
      q: 'UTGが2.5bbにオープン、COとBTNがコール、SBフォールド。BBがコールするのに必要な勝率は？',
      options: ['約14%', '約27%', '20%'],
      answer: 0,
      explain: 'コール後のポットは 2.5 × 4 + 0.5 = 10.5bb。1.5 ÷ 10.5 ≈ 14%。ただし多人数ではエクイティを実現しにくいので、ナッツを作れる手を優先します。',
    },
    { t: 'h', text: 'もう一度：オールインを受ける' },
    {
      t: 'play',
      title: 'ブラインド対決のオールイン',
      hero: 'BB',
      heroCards: ['5s', '5c'],
      villain: 'SB',
      villainCards: ['Ah', 'Kd'],
      steps: [
        {
          street: 'プリフロップ', pot: 16,
          say: '有効スタック15bb。SB までフォールドし、SB がオールイン。あなたは BB で **5♠5♣**。',
          q: '払うのは14bb、必要勝率は約47%。どうする？',
          options: [
            { label: 'コール', good: true, why: 'SB の広いレンジに対し 55 は47%を十分に超えます。AK 相手でも約55%です。' },
            { label: 'フォールド', good: false, why: '47%の値段で、互角以上の手を降りることになります。' },
          ],
        },
        { street: 'フロップ', board: ['9c', '7d', '2h'], pot: 30, say: 'SB は **A♥K♦**。フロップは 9-7-2。' },
        { street: 'ターン', board: ['Jd'], pot: 30, say: 'ターンは J。' },
        { street: 'リバー', board: ['3s'], pot: 30, say: 'リバーは 3。ショーダウンです。' },
      ],
      outro: '今回は 55 が勝ちました。負けたとしても、47%の値段で55%の手をコールした判断は正しいままです。',
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: '自分が出したブラインドと、降りた人が残したブラインドを数え忘れないこと。「オープン × 2 + 0.5」を基本形として覚えてください。',
    },
  ],
};

export default lesson;
