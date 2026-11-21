import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr-06',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。BTN で 7♠7♣ を持ち、ドローが多い濡れたボードでセットができます。罠にかけるか、大きく打つかを試します。' },
    {
      t: 'play',
      title: '濡れたボードのセット',
      hero: 'BTN',
      heroCards: ['7s', '7c'],
      villain: 'BB',
      villainCards: ['9c', '8s'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 1.5,
          say: 'CO までフォールド。あなたは BTN で **7♠7♣**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'BTN の 77 は十分なオープンハンドです。' },
            { label: '2.5bb にオープン', good: true, why: 'ポケットペアは BTN から問題なくオープンします。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['9h', '8h', '7d'],
          pot: 5.5,
          say: 'BB がコール。7 のセットですが、ストレートやフラッシュのドローが大量にあるボード。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェックしてスロープレイ', good: false, why: 'ドローにタダでカードを見せ、ポットも小さいままです。' },
            { label: '2bb（約3分の1）ベット', good: false, why: 'ドローに安くカードを見せてしまいます。' },
            { label: '4bb（約4分の3）ベット', good: true, why: 'ペア＋ドローなど降りない手は、大きいサイズでもコールします。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2c'],
          pot: 13.5,
          say: 'BB がコール。2♣ は安全なカード。BB はまたチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェックしてブラフを誘う', good: false, why: 'ドローにタダでリバーを見せます。' },
            { label: '4bb（約30%）ベット', good: false, why: 'まだ払ってくれる手から取りこぼします。' },
            { label: '10bb（約74%）ベット', good: true, why: 'ツーペアやドローはまだ払い、リバーでスタックを入れやすくなります。' },
          ],
        },
        {
          street: 'リバー',
          board: ['4s'],
          pot: 33.5,
          say: 'BB がコール。4♠ でフラッシュも新しいストレートも完成しません。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'ツーペアや弱いペアから取れる額を捨てます。' },
            { label: '25bb（約75%）ベット', good: true, why: 'ここまで来た手から最後もまとまった額を取ります。' },
          ],
        },
      ],
      outro: 'BB は 9♣8♠ のツーペアでコールし、83.5bb を獲得。大きく打っても全ストリートでコールしてくれる手でした。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'p', text: '約75%ずつ打ち続けると、SPR は約18から約2.5まで下がります。フロップでチェックしていたら、ポットは小さく、危険なカードを見る回数も増えていました。' },
    {
      t: 'estimate',
      q: 'フロップ 9♥8♥7♦。ターンに落ちるとセットが危なくなるカード（ハート、ハート以外の T・6・5）は、残り47枚のうち何枚？',
      hand: ['7s', '7c'],
      board: ['9h', '8h', '7d'],
      min: 0,
      max: 47,
      step: 1,
      unit: '枚',
      answer: 20,
      tolerance: 5,
      explain: 'ハート11枚と、ハート以外の T・6・5 が9枚で合計20枚。約43%の確率です。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ', pot: 5.5, stack: 97.5 },
        { label: 'ターン', pot: 13.5, stack: 93.5 },
        { label: 'リバー', pot: 33.5, stack: 83.5 },
      ],
      caption: '約75%ずつ打ち続けたポットとスタック。',
    },
    {
      t: 'compare',
      left: { title: 'フロップから約75%ずつ', cards: ['7s', '7c'], board: ['9h', '8h', '7d'], verdict: 'good', points: ['リバー後のポットは 83.5bb', 'ドローからも払ってもらえる', '安いカードを見せない'] },
      right: { title: 'フロップはチェック', cards: ['7s', '7c'], board: ['9h', '8h', '7d'], verdict: 'bad', points: ['リバー後のポットは約34bb', 'ターンで危険なカードが落ちる（約43%）', 'ポットが小さいままで終わる'] },
      caption: '全部コールされた場合のポットの比較。',
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 1.5, actions: ['あなた（BTN）が2.5bbにオープン', 'BBコール'] },
        { street: 'フロップ', board: ['9h', '8h', '7d'], pot: 5.5, actions: ['BBチェック', 'あなたが4bbベット、BBコール'] },
        { street: 'ターン', board: ['2c'], pot: 13.5, actions: ['BBチェック', 'あなたが10bbベット、BBコール'] },
        { street: 'リバー', board: ['4s'], pot: 33.5, actions: ['BBチェック', 'あなたが25bbベット、BBコール'] },
        { street: 'ショーダウン', pot: 83.5, actions: ['BBは9♣8♠のツーペア、あなたのセットが勝ち'] },
      ],
    },
    { t: 'h', text: 'もう一度：相手のアウツ' },
    {
      t: 'outs',
      q: 'BB が A♥T♥ なら、ターンでストレート以上になるカードは？ 全部タップ。',
      hand: ['Ah', 'Th'],
      board: ['9h', '8h', '7d'],
      target: 'ストレート',
      explain: 'J と 6 が8枚、残りのハート9枚。重なる J♥・6♥ を引いて15枚です。セットでも勝率は約61%しかありません。',
    },
    { t: 'tip', text: '濡れたボードのセットはスロープレイせず、早いストリートから大きく打ちます。スロープレイは、危険なカードが少ない乾いたボードに限ります。' },
  ],
};

export default lesson;
