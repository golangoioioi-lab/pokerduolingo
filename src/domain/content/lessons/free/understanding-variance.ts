import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'understanding-variance',
  blocks: [
    { t: 'h', text: '正しい判断でも負けることがある' },
    {
      t: 'play', title: 'CO で AA', hero: 'CO', heroCards: ['As', 'Ah'], villain: 'BTN', villainCards: ['Ks', 'Kh'],
      steps: [
        { street: 'プリフロップ', pot: 12, say: 'あなたは CO で **A♠A♥** を 2.5bb オープン。BTN が 8bb に3ベット。', q: 'どうする？', options: [
          { label: '4ベット', good: true, why: '最強の手なので、ポットを大きくします。' },
          { label: 'フォールド', good: false, why: 'AA を降りる理由はありません。' },
        ] },
        { street: 'プリフロップ', pot: 121.5, say: 'あなたは 20bb に4ベット。BTN が 100bb のオールイン。', q: 'コールする？', options: [
          { label: 'コール', good: true, why: 'AA はどんな手にも有利です。' },
          { label: 'フォールド', good: false, why: '最強の手を捨てることになります。' },
        ] },
        { street: 'フロップ', board: ['Kd', '7c', '2h'], pot: 201.5, say: 'BTN は **K♠K♥**。フロップで K が落ちました。' },
        { street: 'ターン', board: ['9s'], pot: 201.5, say: 'ターンは 9。' },
        { street: 'リバー', board: ['4d'], pot: 201.5, say: 'リバーは 4。' },
      ],
      outro: '負けましたが、コールは正しい判断です。AA は KK に約82%勝ちます。',
    },
    { t: 'p', text: 'この結果のぶれを**バリアンス（分散）**と呼びます。判断の良し悪しは、同じ場面を何度も繰り返したときの平均の損益、**期待値（EV）**で決まります。' },
    { t: 'equity', players: [{ label: 'あなた（AA）', cards: ['As', 'Ah'], pct: 82 }, { label: '相手（KK）', cards: ['Ks', 'Kh'], pct: 18 }], caption: 'AA は KK に約82%勝つ。それでも約18%は負ける。' },
    { t: 'tree', root: 'AA で KK とオールイン（100bb、ブラインドは無視）', options: [{ label: 'フォールド', ev: 0 }, { label: 'オールイン', outcomes: [{ label: '勝つ', prob: 0.82, value: 100 }, { label: '負ける', prob: 0.18, value: -100 }], note: '1回の結果は ±100bb、平均は約 +64bb' }], caption: '1回ごとは勝つか負けるか。平均で見ると大きくプラス。' },
    { t: 'estimate', q: 'AA（82%勝つ）で KK とオールイン。100bb を賭けたときの EV は？', hand: ['As', 'Ah'], min: -100, max: 100, step: 2, unit: 'bb', answer: 64, tolerance: 15, explain: '0.82 × 100 − 0.18 × 100 = +64bb。1回ごとは ±100bb でも、平均では大きくプラスです。' },
    { t: 'estimate', q: '同じオールインを5回繰り返す。少なくとも1回は負ける確率は？', hand: ['As', 'Ah'], min: 0, max: 100, step: 1, unit: '%', answer: 63, tolerance: 15, explain: '5回とも勝つ確率は 0.82^5 ≒ 37%。少なくとも1回負ける確率は約63%です。' },
    { t: 'h', text: '短期の結果はあてにならない' },
    { t: 'table', head: ['期間の目安', '結果から言えること'], rows: [['1セッション（数百ハンド）', 'ほぼ運で決まる'], ['数千ハンド', '傾向は見えるが、まだ大きくぶれる'], ['数万ハンド以上', 'ようやく実力差が表れる']] },
    { t: 'h', text: '結果ではなく判断で振り返る' },
    { t: 'compare', left: { title: '判断が良く、結果が悪い', verdict: 'good', points: ['例: AA で KK に負ける', '不運な負け。戦略は変えない'] }, right: { title: '判断が悪く、結果が良い', verdict: 'bad', points: ['例: 勝ち目の薄い勝負で勝つ', '幸運な勝ち。見直さないと悪い癖が残る'] }, caption: '4つの組み合わせのうち、見落としやすいのは右側。' },
    { t: 'quiz', q: '振り返りで最も見落としやすいのはどのケース？', options: ['判断が良く、結果も良かったハンド', '判断が良く、結果が悪かったハンド', '判断が悪く、結果が良かったハンド'], answer: 2, explain: '勝ったハンドは見直さないことが多く、判断ミスが隠れたまま残ります。' },
    {
      t: 'rapid', q: '判断は良い？ 悪い？（結果ではなく判断で）', choices: ['良い判断', '悪い判断'], items: [
        { text: 'AA で KK とオールインして負けた', answer: 0 },
        { text: '72o でオールインして AA に勝った', answer: 1, why: '勝ち目の薄い勝負です。勝ったのは幸運です。' },
        { text: '勝率35%のドローで、必要勝率25%のコールをして外れた', answer: 0, why: '勝率が必要勝率を上回っているので正しいコールです。' },
        { text: '必要勝率40%の場面で、勝率20%のドローでコールして引いた', answer: 1, why: '長く続けると損をするコールです。' },
        { text: '100bb で KK を持ち、AA にオールインされてコールして負けた', answer: 0, why: '100bb なら KK はコールが基本です。相手が AA だったのは不運です。' },
        { text: '疲れて考えずにコールし、たまたま勝った', answer: 1 },
        { text: '勝率82%の場面でオールインし、勝った', answer: 0 },
      ],
    },
    { t: 'tip', text: '1日の勝ち負けで実力を判断しないこと。迷った判断を記録して、結果ではなく判断を見直します。' },
    { t: 'try', text: '結果に左右されない判断を練習で繰り返しましょう。', tab: 'train' },
  ],
};

export default lesson;
