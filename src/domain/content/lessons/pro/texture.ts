import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'texture',
  blocks: [
    { t: 'h', text: 'まず見分けてみる' },
    {
      t: 'rapid',
      q: 'このフロップはドライ？ウェット？',
      choices: ['ドライ', 'ウェット'],
      items: [
        { text: 'フロップ', board: ['Ks', '7d', '2c'], answer: 0 },
        { text: 'フロップ', board: ['Jh', 'Th', '9c'], answer: 1, why: 'つながっていて、ストレートもフラッシュも狙えます。' },
        { text: 'フロップ', board: ['Ad', '8s', '3c'], answer: 0 },
        { text: 'フロップ', board: ['9h', '8h', '6c'], answer: 1 },
        { text: 'フロップ', board: ['Qc', '5d', '2h'], answer: 0, why: '3枚とも離れていて、スートもばらばらです。' },
        { text: 'フロップ', board: ['7s', '6d', '5c'], answer: 1, why: 'スートはばらばらでも、ストレートドローが多いです。' },
        { text: 'フロップ', board: ['Ah', '7c', '2d'], answer: 0 },
        { text: 'フロップ', board: ['Td', '9s', '7d'], answer: 1 },
      ],
    },
    { t: 'p', text: 'フロップ3枚の性質を**ボードテクスチャ**と言います。同じハンドでも、ボードで強さと打ち方が変わります。' },
    {
      t: 'compare',
      left: { title: 'ドライ', board: ['Ks', '7d', '2c'], points: ['ドローがほとんどない', '順位が変わりにくい'], verdict: 'neutral' },
      right: { title: 'ウェット', board: ['Jh', 'Th', '9c'], points: ['ストレート・フラッシュドローが多い', 'ターンで順位が変わりやすい'], verdict: 'neutral' },
    },
    {
      t: 'compare',
      left: { title: 'ペアボード', board: ['7s', '7d', '3c'], points: ['強い手の組み合わせが少ない', '誰も当たっていないことが多い'], verdict: 'neutral' },
      right: { title: 'モノトーン', board: ['Qh', '8h', '4h'], points: ['同じスート3枚', 'フラッシュ完成・ドローが多い'], verdict: 'neutral' },
    },
    {
      t: 'outs',
      q: 'J♥9♥ で K♥7♥2♣。フラッシュになるカードを全部タップ。',
      hand: ['Jh', '9h'],
      board: ['Kh', '7h', '2c'],
      target: 'フラッシュ',
      explain: 'ハート 13 枚のうち 4 枚が見えているので、残り 9 枚。これが **9アウツ** です。',
    },
    { t: 'h', text: 'どちらのレンジに当たるか' },
    { t: 'p', text: '**レンジアドバンテージ**は平均的にどちらが強いか、**ナッツアドバンテージ**は非常に強い手をどちらが多く持つかです。まず「誰がレイズし、誰がコールしたか」から考えます。' },
    {
      t: 'compare',
      left: { title: 'BTN（オープン側）', board: ['As', 'Kd', '5c'], points: ['AA・AK・KK を多く持つ', 'レンジアドバンテージがある'], verdict: 'good' },
      right: { title: 'BB（コール側）', board: ['As', 'Kd', '5c'], points: ['AA・AK の多くは3betしている', '当たりにくい'], verdict: 'bad' },
      caption: '高いカードのボードはオープン側に有利です。',
    },
    {
      t: 'cards',
      hands: [],
      board: ['6h', '5h', '4c'],
      caption: '低いつながったボードは、87s・73s・65 などを多く持つ BB にナッツが多くなります。',
    },
    {
      t: 'quiz',
      q: 'BTN オープン、BB コール。このフロップで BB が BTN より多く持っている手は？',
      board: ['6h', '5h', '4c'],
      options: ['87s', 'AKo', 'QQ', 'AA'],
      optionCards: [['8h', '7h'], ['As', 'Kd'], ['Qs', 'Qd'], ['Ac', 'Ad']],
      answer: 0,
      explain: 'AA・QQ・AK は BB なら3betすることが多い手です。87s のような低いコネクターは BB のコールレンジに多く、ここではストレートになります。',
    },
    { t: 'h', text: 'もう一度：どちらに有利？' },
    {
      t: 'rapid',
      q: 'BTN オープン、BB コール。このフロップで強い手（セット・ストレートなど）を多く持つのは？',
      choices: ['BTN', 'BB'],
      items: [
        { text: 'フロップ', board: ['As', 'Kd', '5c'], answer: 0, why: 'AA・KK・AK は BTN に多く、BB は3betしています。' },
        { text: 'フロップ', board: ['6h', '5h', '4c'], answer: 1, why: '低いコネクターは BB のコールレンジに多い手です。' },
        { text: 'フロップ', board: ['Kc', '7s', '2d'], answer: 0 },
        { text: 'フロップ', board: ['5s', '4d', '3c'], answer: 1 },
        { text: 'フロップ', board: ['Ad', 'Qs', '4h'], answer: 0 },
        { text: 'フロップ', board: ['7c', '6s', '5d'], answer: 1, why: '98・84・64 などストレートになる手は BB の方が多く持ちます。' },
      ],
    },
  ],
};

export default lesson;
