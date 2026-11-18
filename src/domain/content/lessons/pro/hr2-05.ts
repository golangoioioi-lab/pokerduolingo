import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-05',
  blocks: [
    { t: 'p', text: '6人卓・全員 100bb。あなたは CO で A♠ Q♦ を 2.5bb オープンし、BTN が 8bb に 3ベット。SB と BB はフォールドしました。ポジションのない 3ベットポットで、「アグレッサーに任せる」ことと「チェックで回ったときの薄いバリュー」を扱います。' },
    { t: 'cards', hands: [{ label: 'あなた（CO）', cards: ['As', 'Qd'] }] },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: 'フォールド', folded: true },
        { pos: 'HJ', action: 'フォールド', folded: true },
        { pos: 'CO', hero: true, action: '2.5bb オープン', bet: 2.5, cards: ['As', 'Qd'] },
        { pos: 'BTN', action: '8bb に 3ベット', bet: 8 },
        { pos: 'SB', action: 'フォールド', bet: 0.5, folded: true },
        { pos: 'BB', action: 'フォールド', bet: 1, folded: true },
      ],
      pot: 12,
      caption: 'あなたが行動する時点のポットは 2.5 + 8 + 0.5 + 1 = 12bb です。',
    },
    { t: 'h', text: 'プリフロップ' },
    {
      t: 'quiz', q: 'BTN の 3ベットに対して、AQo の選択は？',
      hand: ['As', 'Qd'],
      options: ['フォールド', 'コール', '22bb に 4ベット'],
      answer: 1,
      explain: 'BTN の 3ベットは QQ+・AK のような強い手と A5s・KJs のようなブラフが混ざった広いレンジです。AQo はフォールドするには強すぎます。4ベットすると降りるのは弱い手で、コールや 5ベットしてくるのは AQ を上回る手が中心になります。コールしてポストフロップで判断します。',
    },
    { t: 'p', text: 'コールしてポットは 17.5bb、残りは 92bb。' },
    { t: 'h', text: 'フロップ：A♣ 8♦ 4♠' },
    { t: 'p', text: 'あなたがチェックし、BTN が 6bb（約3分の1）をベットしました。' },
    {
      t: 'quiz', q: 'BTN の 6bb に対して、あなたの選択は？',
      hand: ['As', 'Qd'], board: ['Ac', '8d', '4s'],
      options: ['フォールド', 'コール', '20bb にチェックレイズ'],
      answer: 1,
      explain: 'A ハイの乾いたボードで、BTN は小さいサイズを広いレンジで打ち、KQ・KJ・QJ のような外れた手も含みます。チェックレイズすると、それらはすぐ降り、コールしてくるのは AK・AA・セットなどあなたより強い手ばかりです。コールなら、外れた手がブラフを続ける余地が残ります。',
    },
    { t: 'p', text: 'コールしてポットは 29.5bb、残りは 86bb。' },
    { t: 'h', text: 'ターン：3♥、両者チェック' },
    { t: 'p', text: 'AK・AA・セットはターンでも打ちたい手です。チェックで回したので、BTN のレンジは **AJ・AT・A5s などの弱い A、KK〜99、あきらめた手** に寄りました。' },
    { t: 'h', text: 'リバー：K♥' },
    { t: 'p', text: 'AK はターンで打っていたはずの手なので、K が来ても BTN に AK は少なめです。ポットは 29.5bb のままで、あなたが先に行動します。' },
    {
      t: 'estimate', q: '中くらいのバリューベット（ポットの約40%）は何bb？',
      hand: ['As', 'Qd'], board: ['Ac', '8d', '4s', '3h', 'Kh'],
      min: 0, max: 60, step: 1, unit: 'bb', answer: 12, tolerance: 4,
      explain: '29.5 × 0.4 ≒ 12bb です。この額なら弱い A はコールしやすく、上回る手に当たっても損は小さく済みます。チェックすると弱い A はショーダウンを選び、バリューを逃します。オールインには弱い A がほとんど降ります。',
    },
    { t: 'p', text: '12bb ベットに BTN は A♦ J♦ でコール。あなたの獲得は 53.5bb です。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['As', 'Qd'] }, { label: 'BTN', cards: ['Ad', 'Jd'] }], board: ['Ac', '8d', '4s', '3h', 'Kh'] },
    { t: 'h', text: '振り返り' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 17.5, actions: ['CO（あなた）2.5bb オープン', 'BTN 8bb に 3ベット', 'あなた コール'] },
        { street: 'フロップ', board: ['Ac', '8d', '4s'], pot: 17.5, actions: ['あなた チェック', 'BTN 6bb ベット', 'あなた コール'] },
        { street: 'ターン', board: ['3h'], pot: 29.5, actions: ['あなた チェック', 'BTN チェック'] },
        { street: 'リバー', board: ['Kh'], pot: 29.5, actions: ['あなた 12bb ベット', 'BTN コール'] },
        { street: 'ショーダウン', pot: 53.5, actions: ['AQ が AJ に勝つ'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 17.5, stack: 92 },
        { label: 'ターン開始', pot: 29.5, stack: 86 },
        { label: 'リバー開始', pot: 29.5, stack: 86 },
        { label: '決着', pot: 53.5, stack: 74 },
      ],
      caption: 'ターンがチェックで回ったため、ポットはリバー開始時もまだ 29.5bb。リバーで自分から取りにいきます。',
    },
    {
      t: 'list',
      items: [
        'ポジションのない 3ベットポットでは、まずアグレッサーにベットを任せる',
        'トップペアは小さいベットにコールして、相手のブラフを残す',
        '相手がターンをチェックで回したら、リバーは自分から薄くバリューを取りにいく',
      ],
    },
    { t: 'tip', text: '「チェックされたから自分が勝っている、だからチェック」では取り損ねます。相手のチェックで強い手が減ったときこそ、弱い A からもう一回取るチャンスです。' },
  ],
};

export default lesson;
