import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'semi-bluff',
  blocks: [
    { t: 'h', text: 'まず数えてみる' },
    {
      t: 'outs',
      q: 'J♥T♥ で 9♥8♣2♥。ストレート以上になるカードを全部タップ。',
      hand: ['Jh', 'Th'],
      board: ['9h', '8c', '2h'],
      target: 'ストレート',
      explain: 'ハート 9 枚に、7 と Q のハート以外 6 枚。合計 15 枚のコンボドローです。',
    },
    { t: 'p', text: '今は負けているがドローで逆転できる手で打つのが**セミブラフ**です。相手が降りても勝ち、コールされてもドローが完成すれば勝ちます。' },
    { t: 'h', text: 'コールされても勝てる分だけ有利' },
    {
      t: 'tree',
      root: 'ポット 10bb に 5bb ベット（相手が 20% フォールド）',
      options: [
        {
          label: 'ピュアブラフ',
          outcomes: [{ label: 'フォールド', prob: 0.2, value: 10 }, { label: 'コールされて負ける', prob: 0.8, value: -5 }],
        },
        {
          label: 'セミブラフ（コールされても 35% で勝つ）',
          outcomes: [
            { label: 'フォールド', prob: 0.2, value: 10 },
            { label: 'コールされて勝つ', prob: 0.28, value: 15 },
            { label: 'コールされて負ける', prob: 0.52, value: -5 },
          ],
        },
      ],
      caption: '同じフォールド率でも、エクイティがあれば利益になります（単純化した計算）。',
    },
    {
      t: 'estimate',
      q: 'ポット 10bb に 5bb でブラフ。純粋なブラフが損をしないために必要なフォールド率は？',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 33,
      tolerance: 8,
      explain: '5 ÷ (10 + 5) ≈ 33%。ドローがあれば、これより低くても成り立ちます。',
    },
    { t: 'h', text: 'ナッツドローほど強く打てる' },
    {
      t: 'equity',
      players: [{ label: 'A♥T♥', cards: ['Ah', 'Th'], pct: 46 }, { label: 'K♦Q♣', cards: ['Kd', 'Qc'], pct: 54 }],
      board: ['Kh', '8h', '3c'],
      caption: 'ナッツフラッシュドロー＋A のオーバーカードは、トップペアとほぼ互角です（目安）。',
    },
    {
      t: 'quiz',
      q: '完成したときに安心して大きなポットを作れるドローは？',
      board: ['Kh', '8h', '3c'],
      options: ['A♥T♥', '5♥4♥', '9♣7♦'],
      optionCards: [['Ah', 'Th'], ['5h', '4h'], ['9c', '7d']],
      answer: 0,
      explain: 'A♥T♥ はナッツフラッシュドロー。5♥4♥ は完成しても高いフラッシュに負けることがあります。',
    },
    { t: 'p', text: 'コンボドローはレイズやオールインも歓迎。ガットショットだけなら、小さいベットへのコール程度にとどめます。' },
    { t: 'h', text: 'もう一度：ナッツドローで押す' },
    {
      t: 'play',
      title: 'BTN の A♥T♥、K-8-3',
      hero: 'BTN',
      heroCards: ['Ah', 'Th'],
      villain: 'BB',
      villainCards: ['Kd', 'Qc'],
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'あなたは BTN で **A♥T♥** を 2.5bb オープン。BB がコール。' },
        {
          street: 'フロップ',
          board: ['Kh', '8h', '3c'],
          pot: 5.5,
          say: 'フロップは **K♥8♥3♣**。ナッツフラッシュドロー。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: '3.5bb ベット', good: true, why: '降ろしても、コールされても勝てるセミブラフです。' },
            { label: 'チェック', good: false, why: 'チェックも成り立ちますが、打てば降ろせる分を得られます（接戦）。' },
          ],
        },
        {
          street: 'フロップ',
          pot: 20,
          say: 'BB が 11bb にチェックレイズ。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: '約半分のエクイティがある手です。' },
            { label: 'コール', good: true, why: 'IP で約46%。値段は十分です。' },
            { label: 'オールイン', good: false, why: 'ポットに対して大きすぎ、降ろしたい手しか降りません。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2h'],
          pot: 41.5,
          say: 'ターンは **2♥**。ナッツフラッシュが完成。BB が 14bb をベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: 'コールで相手に打たせ続けるのもありです。' },
            { label: '40bb にレイズ', good: true, why: 'K のペアは降りにくいので、大きくしていきます。' },
            { label: 'フォールド', good: false, why: '最強の手です。' },
          ],
        },
        { street: 'リバー', board: ['7c'], pot: 107.5, say: 'あなたは 40bb にレイズし、BB がコール。リバーは **7♣**。BB がチェック、あなたは残り 46.5bb をオールインし、BB がコール。' },
      ],
      outro: 'ナッツドローのセミブラフは、外れても降ろせて、当たれば大きく取れます。',
    },
  ],
};

export default lesson;
