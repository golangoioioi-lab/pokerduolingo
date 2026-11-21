import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-06',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。BTN のオープンに SB で A♠5♠。外れたまま迎えたリバーの、最後のブラフを考えます。' },
    {
      t: 'play',
      title: 'SB で A5s、リバーのブラフ',
      hero: 'SB',
      heroCards: ['As', '5s'],
      villain: 'BTN',
      steps: [
        {
          street: 'プリフロップ',
          pot: 4,
          say: 'BTN が 2.5bb でオープン。あなたは SB で **A♠5♠**。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'A5s は SB から 3ベットする代表的なハンドです。' },
            { label: 'コール', good: false, why: 'ポジションのない SB は、コールより 3ベットで主導権を取ります。' },
            { label: '11bb に 3ベット', good: true, why: 'A を持つので相手の AA・AK が減り、当たればナッツフラッシュやホイールです。' },
          ],
        },
        { street: 'フロップ', board: ['Kh', '7s', '2d'], pot: 23, say: 'BTN がコール（残り 89bb）。K ハイの乾いたボードは 3ベットした側に有利なので、7bb を打ってコールされました。' },
        {
          street: 'ターン',
          board: ['4s'],
          pot: 37,
          say: '4♠ でナッツフラッシュドローと、3 でホイールのガットショット。残りは 82bb。',
          q: 'どうする？',
          options: [
            { label: 'チェックしてあきらめる', good: false, why: '降ろせる分と当たる分、両方の利益を捨てます。' },
            { label: '24bb（約2/3）ベット', good: true, why: 'QQ・JJ・弱い K を降ろせることがあり、コールされても約26%で当たります。' },
            { label: '82bb オールイン', good: false, why: 'ポットの2倍を超え、必要以上のリスクを取ります。' },
          ],
        },
        {
          street: 'リバー',
          board: ['9c'],
          pot: 85,
          say: 'BTN がコール。9♣ でドローはすべて外れ、手は A ハイだけ。残りは 58bb。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: '勝てるのは外れたドローの一部だけで、ほとんど取れません。' },
            { label: '58bb オールイン', good: true, why: 'BTN が 41% 以上降りれば得。ナッツ級も減らしているのでブラフに向いています。' },
          ],
        },
      ],
      outro: 'BTN は考えた末にフォールド。ショーダウンでほぼ勝てない手が、リバーのブラフ候補です。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'p', text: 'ブラフで見るのは「相手が何%降りれば得か」です。賭ける額 ÷（ポット＋賭ける額）で求めます。' },
    {
      t: 'estimate', q: '85bb のポットに 58bb のオールイン。BTN が何%以上降りれば利益になる？',
      hand: ['As', '5s'], board: ['Kh', '7s', '2d', '4s', '9c'],
      min: 0, max: 100, step: 1, unit: '%', answer: 41, tolerance: 5,
      explain: '賭ける額 ÷（今のポット＋賭ける額）＝ 58 ÷ 143 ≒ 41% です。',
    },
    {
      t: 'tree',
      root: 'リバー、ポット 85bb。A♠5♠ でチェックかオールインか（数字は目安）',
      options: [
        {
          label: '58bb オールイン',
          outcomes: [
            { label: 'BTN がフォールド', prob: 0.5, value: 85 },
            { label: 'BTN がコール（負け）', prob: 0.5, value: -58 },
          ],
          note: 'QQ・JJ・弱い K の一部と、外れたドローが降りる想定',
        },
        {
          label: 'チェック',
          outcomes: [
            { label: 'ショーダウンで勝つ', prob: 0.05, value: 85 },
            { label: '負ける', prob: 0.95, value: 0 },
          ],
          note: 'A ハイが勝てるのは外れたドローの一部だけ',
        },
      ],
      caption: 'BTN の降りる割合が 41% を超えれば、オールインの方が期待値が高くなります。',
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 23, actions: ['BTN 2.5bb オープン', 'SB（あなた）11bb に 3ベット', 'BTN コール'] },
        { street: 'フロップ', board: ['Kh', '7s', '2d'], pot: 23, actions: ['あなた 7bb ベット', 'BTN コール'] },
        { street: 'ターン', board: ['4s'], pot: 37, actions: ['あなた 24bb ベット', 'BTN コール'] },
        { street: 'リバー', board: ['9c'], pot: 85, actions: ['あなた 58bb オールイン', 'BTN フォールド'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    { t: 'h', text: 'もう一度：アウツと、当たったリバー' },
    {
      t: 'outs',
      q: 'ターンの A♠5♠。リバーでストレート以上になるカードを全部タップ。',
      hand: ['As', '5s'], board: ['Kh', '7s', '2d', '4s'],
      target: 'ストレート',
      explain: '残りのスペード 9 枚と、3♥・3♦・3♣ の 3 枚で 12 アウツ。46 枚中 12 枚なので約 26% です。',
    },
    {
      t: 'play',
      title: '同じハンド、リバーがスペード',
      hero: 'SB',
      heroCards: ['As', '5s'],
      villain: 'BTN',
      villainCards: ['Kd', 'Qd'],
      steps: [
        { street: 'フロップ', board: ['Kh', '7s', '2d'], pot: 23, say: '3ベットポット。7bb を打ってコールされました。' },
        { street: 'ターン', board: ['4s'], pot: 37, say: '24bb のセミブラフにも BTN がコール。' },
        {
          street: 'リバー',
          board: ['8s'],
          pot: 85,
          say: '8♠ でナッツフラッシュ完成。残りは 58bb。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: '2回コールした K のペアから取る機会を逃します。' },
            { label: '58bb オールイン', good: true, why: 'K のペアやセットから全額を取りにいきます。ブラフと同じサイズなので読まれにくくなります。' },
          ],
        },
      ],
      outro: 'BTN は K♦Q♦ でコール。外れたらブラフ、当たったらバリューで、同じオールインを使えます。',
    },
    { t: 'tip', text: 'リバーのブラフは、ショーダウンでほぼ勝てない手から選びます。外れたナッツフラッシュドローはその代表です。' },
  ],
};

export default lesson;
