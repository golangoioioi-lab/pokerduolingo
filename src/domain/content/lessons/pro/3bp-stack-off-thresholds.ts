import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-stack-off-thresholds',
  blocks: [
    { t: 'h', text: 'まず直感で' },
    {
      t: 'rapid',
      q: 'このSPRで、この手は全額まで行ける？（目安）',
      choices: ['全額OK', '慎重に'],
      items: [
        { text: 'SPR 約2', cards: ['Ah', 'Kd'], board: ['Ks', '8d', '3c'], answer: 0 },
        { text: 'SPR 約5', cards: ['9h', '7c'], board: ['9s', '6d', '2c'], answer: 1, why: 'トップペアでもキッカーが弱く、SPR 5では全額に向きません。' },
        { text: 'SPR 約5', cards: ['Qh', 'Qd'], board: ['9s', '6d', '2c'], answer: 0, why: 'SPR 3〜6のオーバーペアは全額の目安です。' },
        { text: 'SPR 約8', cards: ['8h', '8c'], board: ['Ks', '8d', '3c'], answer: 0, why: 'セットはSPRが高くても全額を入れられます。' },
        { text: 'SPR 約8', cards: ['Kd', 'Jc'], board: ['Ks', '8d', '3c'], answer: 1, why: 'SPR 6以上でワンペアは慎重に。' },
        { text: 'SPR 約2', cards: ['Ac', 'Qc'], board: ['Ah', '7d', '2s'], answer: 0 },
        { text: 'SPR 約2', cards: ['7c', '6c'], board: ['Ah', '7d', '2s'], answer: 1, why: 'セカンドペアは、SPRが低くても全額には弱めです。' },
        { text: 'SPR 約4', cards: ['Jh', 'Js'], board: ['Ah', '7d', '2s'], answer: 1, why: 'Aの下のペアです。オーバーペアではありません。' },
        { text: 'SPR 約8', cards: ['9c', '9d'], board: ['Ks', '9h', '4d'], answer: 0 },
      ],
    },
    { t: 'h', text: '基準は2つ' },
    {
      t: 'list',
      items: [
        '**必要勝率**：コール額 ÷（コール後のポット全体）。',
        '**相手が全額を入れる手に対するエクイティ**：強い手に偏るほど下がる。',
      ],
      ordered: true,
    },
    {
      t: 'odds',
      pot: 30,
      bet: 20,
      equity: 40,
      caption: 'ポット30bbに20bbのオールイン。必要勝率は約29%です。',
    },
    {
      t: 'estimate',
      q: 'ポット30bbに20bbのオールイン。必要勝率は？',
      min: 0,
      max: 60,
      step: 1,
      unit: '%',
      answer: 29,
      tolerance: 5,
      explain: '20 ÷ (30 + 40) ≈ 29% です。',
    },
    {
      t: 'table',
      head: ['SPR（目安）', '全額を入れる手', '慎重な手'],
      rows: [
        ['約1.5以下', 'ペアやドローのほぼ全部', 'ほぼ無し'],
        ['約1.5〜3', 'トップペア（強いキッカー）以上', 'ボトムペア、弱いドロー'],
        ['約3〜6', 'オーバーペア、ツーペア以上', 'トップペア（弱いキッカー）'],
        ['約6以上', 'セット以上', 'ワンペア全般'],
      ],
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 17.5, stack: 92 },
        { label: 'フロップ 5.8bet・18にレイズ', pot: 41.3, stack: 74 },
      ],
      caption: 'フロップで小さく打って18bbにレイズされると、残り74bbでポットはすでに約41bb。SPRは約1.8です。',
    },
    { t: 'h', text: '1ハンドで体験' },
    {
      t: 'play',
      title: 'AKでチェックレイズを受ける',
      hero: 'BTN',
      heroCards: ['Ah', 'Kd'],
      villain: 'CO',
      villainCards: ['Qc', 'Jc'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'COが2.5bbでオープン。あなたはBTNで **A♥K♦**。',
          q: 'どうする？',
          options: [
            { label: '8bbに3bet', good: true, why: 'AKは3betでポットを大きくします。' },
            { label: 'フォールド', good: false, why: 'AKは最上位クラスです。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Ks', '8d', '3c'],
          pot: 17.5,
          say: 'COがコールしてチェック。SPR 約5.3。',
          q: 'どうする？',
          options: [
            { label: '5.8bb（約33%）をベット', good: true, why: 'トップペア・トップキッカーで小さくバリューを取ります。' },
            { label: 'チェック', good: false, why: 'バリューを取れる手でチェックすると損をします。' },
          ],
        },
        {
          street: 'フロップ',
          pot: 41.3,
          say: 'COが18bbにチェックレイズ。残り74bb、SPRは約1.8です。',
          q: 'どうする？',
          options: [
            { label: 'オールイン', good: true, why: 'SPR約1.8でトップペア・トップキッカーは全額の目安。ドローに勝負させます。' },
            { label: 'コール', good: true, why: 'コールでも構いません。ほぼコミットされています。' },
            { label: 'フォールド', good: false, why: 'この低いSPRで、トップペア・トップキッカーは降りる手ではありません。' },
          ],
        },
        { street: 'ターン', board: ['4h'], pot: 201.5, say: '全額が入りました。ターンは4。' },
        { street: 'リバー', board: ['2d'], pot: 201.5, say: 'リバーは2。ショーダウンです。' },
      ],
      outro: 'COはQJのブラフでした。SPRが低いときは、トップペア・トップキッカーで迷わず全額を入れます。',
    },
  ],
};

export default lesson;
