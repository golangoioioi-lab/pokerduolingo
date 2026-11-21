import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'spr',
  blocks: [
    { t: 'h', text: 'まずやってみる：スタックを全部入れる？' },
    { t: 'p', text: 'フロップ K♠8♦3♣。同じ手でも、残りスタックとポットの比（**SPR**）で答えが変わります。' },
    {
      t: 'rapid',
      q: 'この状況でスタックを全部入れてよい？',
      choices: ['入れてよい', '慎重に'],
      items: [
        { cards: ['Ah', 'Kd'], board: ['Ks', '8d', '3c'], text: 'SPR 約4（3ベットポット）', answer: 0, why: '残りが少ないので、トップペア・トップキッカーで十分です。' },
        { cards: ['Ah', 'Kd'], board: ['Ks', '8d', '3c'], text: 'SPR 約18（シングルレイズ）', answer: 1, why: '深いポットでワンペアのまま全部入れると、強い手にだけ払いがちです。' },
        { cards: ['8h', '8c'], board: ['Ks', '8d', '3c'], text: 'SPR 約18（シングルレイズ）', answer: 0, why: 'セット。深いポットでも全部入れたい手です。' },
        { cards: ['Kh', 'Qd'], board: ['Ks', '8d', '3c'], text: 'SPR 約2（4ベットポット）', answer: 0, why: 'ほぼコミットしている状態。トップペアで降りる理由はありません。' },
        { cards: ['Kh', 'Qd'], board: ['Ks', '8d', '3c'], text: 'SPR 約18（シングルレイズ）', answer: 1, why: 'ワンペアでは慎重に。ポットを育てすぎないようにします。' },
        { cards: ['9s', '9h'], board: ['Ks', '8d', '3c'], text: 'SPR 約4（3ベットポット）', answer: 1, why: 'Kの下のペア。オールインで払うのは負けている手が中心です。' },
        { cards: ['3h', '3s'], board: ['Ks', '8d', '3c'], text: 'SPR 約18（シングルレイズ）', answer: 0, why: 'セット。深いほど大きく取れます。' },
      ],
    },
    { t: 'h', text: 'SPRの求め方' },
    { t: 'formula', text: 'SPR = 有効スタック ÷ フロップ時のポット' },
    {
      t: 'pot',
      steps: [
        { label: 'シングルレイズ', pot: 5.5, stack: 97.5 },
        { label: '3ベット', pot: 21, stack: 90 },
        { label: '4ベット', pot: 45, stack: 78 },
      ],
      caption: 'フロップ時点のポットと残りスタック（100bbスタート）。SPRは約18、約4、約2。',
    },
    {
      t: 'estimate',
      q: 'シングルレイズポット（ポット5.5bb、残り97.5bb）。SPRはおよそ？',
      min: 0,
      max: 30,
      step: 1,
      answer: 18,
      tolerance: 4,
      explain: '97.5 ÷ 5.5 ≒ 17.7、約18です。',
    },
    {
      t: 'list',
      items: [
        '**低い（〜4）**: トップペア・良いキッカーでもオールインまで行ってよいことが多い',
        '**中くらい（4〜10）**: 2ペア以上でスタックを入れたい',
        '**高い（10〜）**: ワンペアで全部入れるのは危険。ドローの価値が上がる',
      ],
    },
    {
      t: 'compare',
      left: {
        title: 'SPR 約18（シングルレイズ）',
        cards: ['Ah', 'Kd'],
        board: ['Ks', '8d', '3c'],
        verdict: 'neutral',
        points: ['トップペアでも1ペア', '慎重にポットを育てる'],
      },
      right: {
        title: 'SPR 約4（3ベットポット）',
        cards: ['Ah', 'Kd'],
        board: ['Ks', '8d', '3c'],
        verdict: 'good',
        points: ['残りスタックが少ない', 'オールインまで進んでよいことが多い'],
      },
      caption: '同じ AK のトップペアでも、SPRで進め方が変わる。',
    },
    {
      t: 'quiz',
      q: 'SPRが約18。トップペア・トップキッカーで、相手に大きくレイズされた。どう考える？',
      hand: ['Ah', 'Kd'],
      board: ['Ks', '8d', '3c'],
      options: ['必ずオールイン', '慎重に。相手の強い手を警戒する', 'SPRは関係ない'],
      answer: 1,
      explain: 'SPRが高いポットで相手が大きく来るときは、2ペアやセットが多くなります。ワンペアで全部入れるのは慎重に。',
    },
    { t: 'h', text: 'もう一度やる' },
    {
      t: 'play',
      title: '3ベットポットで A♥K♦',
      hero: 'BTN',
      heroCards: ['Ah', 'Kd'],
      villain: 'CO',
      villainCards: ['Kc', 'Qc'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'COが2.5bbでオープン。あなたはBTNで A♥K♦。',
          q: 'どうする？',
          options: [
            { label: '10bbに3ベット', good: true, why: 'AKは3ベットで主導権を取りたい手です。' },
            { label: 'フォールド', good: false, why: '上位の手です。降りる理由はありません。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Ks', '8d', '3c'],
          pot: 21.5,
          say: 'COがコール。フロップ K♠8♦3♣。COはチェック。残り90bb、SPRは約4。',
          q: 'どうする？',
          options: [
            { label: '7bbベット', good: true, why: 'COのKQやKJ、8xから払ってもらえます。' },
            { label: 'チェック', good: false, why: '払ってくれる手が多いボードで、取れる額を逃しがちです。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2h'],
          pot: 35.5,
          say: 'COがコール。ターン2♥。COはチェック。残り83bb。',
          q: 'どうする？',
          options: [
            { label: '18bbベット', good: true, why: 'SPRが低いので、トップペアでもスタックを入れていく流れです。' },
            { label: 'チェック', good: false, why: 'Kxから取る機会を1回分失います。' },
          ],
        },
        {
          street: 'リバー',
          board: ['6d'],
          pot: 71.5,
          say: 'COがコール。リバー6♦。COはチェック。残り65bbで、ポットより少ない。',
          q: 'どうする？',
          options: [
            { label: 'オールイン（65bb）', good: true, why: 'SPRは1未満。弱いキッカーのKxから全部取りにいけます。' },
            { label: 'チェック', good: false, why: 'COのKQやKJに勝っているのに、取れる額を逃します。' },
          ],
        },
      ],
      outro: 'COはKQでした。SPRが低いポットでは、トップペア・トップキッカーで最後まで進めます。',
    },
    { t: 'tip', text: '3ベットポットはSPRが低いので、トップペアでも積極的に戦えます。シングルレイズポットでワンペアのまま全部入れるのは、多くの場合やりすぎです。' },
  ],
};

export default lesson;
