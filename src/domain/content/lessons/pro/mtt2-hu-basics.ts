import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'mtt2-hu-basics',
  blocks: [
    { t: 'h', text: '2人だけならこの手は？' },
    {
      t: 'estimate',
      q: 'ヘッズアップ（HU）で、ランダムな手に対するこの手の勝率は約何%ですか？',
      hand: ['Kc', '2d'],
      min: 20, max: 80, step: 1, unit: '%', answer: 50, tolerance: 8,
      explain: 'K2o はランダムな手に対して約50%です（A2o は約55%）。6人卓では降りる手でも、HU では平均以上の手です。',
    },
    {
      t: 'equity',
      players: [{ label: '72o', cards: ['7c', '2d'], pct: 35 }, { label: 'ランダムな手', pct: 65 }],
      caption: '最弱の72o でも、ランダムな手に約35%勝てる',
    },
    {
      t: 'compare',
      left: { title: '6人卓のBTN', points: ['オープンは40〜50%程度', '後ろに2人', 'K2o は降りる候補'], verdict: 'neutral' },
      right: { title: 'HUのBTN（SB）', points: ['オープンは80%以上が目安', '相手は BB の1人だけ', 'K2o は十分なオープン'], verdict: 'good' },
      caption: 'HU では BTN が SB を兼ね、プリフロップは先に、ポストフロップは後に行動する',
    },
    { t: 'h', text: 'HU では ICM が消える' },
    { t: 'p', text: '賞金が1位60%・2位40%なら、2位の40%は確定。残り20%を、チップの割合の確率で争います。' },
    {
      t: 'table',
      head: ['プレイヤー', 'チップ', '計算', 'ICM期待値'],
      rows: [['A', '70%', '40 + 20 × 0.7', '54%'], ['B', '30%', '40 + 20 × 0.3', '46%']],
    },
    { t: 'p', text: '期待値がチップに比例するので、リスクプレミアムはありません。オールインはポットオッズだけで判断できます。' },
    {
      t: 'estimate',
      q: 'HU、賞金60%・40%、チップ80%・20%。チップリーダーの ICM 期待値は？',
      min: 40, max: 100, step: 1, unit: '%', answer: 56, tolerance: 8,
      explain: '40 + 20 × 0.8 = 56% です。',
    },
    { t: 'h', text: 'HU の1ハンド' },
    {
      t: 'play',
      title: 'HU の BTN（SB）で K6o',
      hero: 'SB',
      heroCards: ['Kc', '6d'],
      villain: 'BB',
      villainCards: ['8h', '7h'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 1.5,
          say: 'HU、有効スタック30bb。あなたは BTN を兼ねる SB で、先に行動します。',
          q: 'K6o でどうする？',
          options: [
            { label: '2bb にオープン', good: true, why: 'HU では K6o は平均より強い手です。小さめのオープンで十分です。' },
            { label: 'フォールド', good: false, why: '6人卓の感覚です。HU では降りすぎになります。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Kd', '8s', '3c'],
          pot: 4,
          say: 'BB がコール。フロップは K-8-3。BB はチェック。',
          q: 'トップペア。どうする？',
          options: [
            { label: '1.5bb ベット', good: true, why: '8 や 3 のペア、弱いドローから払ってもらえます。' },
            { label: 'チェック', good: true, why: 'これも可です。相手のブラフを誘えます。ただ降りすぎないことが前提です。' },
          ],
        },
        { street: 'ターン', board: ['2h'], pot: 7, say: 'BB はコール。ターンは 2。2人ともチェック。' },
        {
          street: 'リバー',
          board: ['4d'],
          pot: 7,
          say: 'リバーは 4。BB が3.5bb をベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'HU では相手のレンジが広く、トップペアは十分にコールできる強さです。' },
            { label: 'フォールド', good: false, why: '必要な勝率は25%。トップペアで降りすぎです。' },
          ],
        },
      ],
      outro: 'HU では手の価値が上がります。ペアがあれば強い手と考え、降りすぎないことが大切です。',
    },
    { t: 'h', text: 'HU の SB でオープンする？' },
    {
      t: 'rapid',
      q: 'HU・アンティなし・有効スタック25bb 以上・あなたは BTN（SB）。オープンする？',
      choices: ['オープン', 'フォールド'],
      items: [
        { cards: ['Kc', '2d'], answer: 0, why: 'ランダムな手に約50%。十分なオープンです。' },
        { cards: ['3c', '2d'], answer: 1, why: '最も弱い手です。HU でも降ります。' },
        { cards: ['Jd', '6c'], answer: 0, why: 'J ハイは HU では平均前後の強さです。' },
        { cards: ['Ah', '3d'], answer: 0, why: 'A があれば平均以上です。' },
        { cards: ['7d', '2c'], answer: 1, why: '最弱クラスで、降りる候補です。' },
        { cards: ['Qs', '4s'], answer: 0, why: 'Q4s は HU では楽にオープンできます。' },
        { cards: ['4h', '2c'], answer: 1, why: '高いカードもつながりもありません。' },
        { cards: ['Th', '7d'], answer: 0, why: 'HU では T7o も十分オープンできます。' },
        { cards: ['8c', '2d'], answer: 1, why: '下位の手で、降りる候補です。' },
        { cards: ['5s', '5d'], answer: 0, why: 'ペアは HU ではかなり強い手です。' },
      ],
    },
    { t: 'tip', text: 'HU に入ったら、頭を「キャッシュゲームの HU」に切り替えます。相手のタイプと自分の勝率に集中します。' },
  ],
};

export default lesson;
