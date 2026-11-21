import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-05',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。CO で A♠Q♦ をオープンし、BTN に 3ベットされます。ポジションのない 3ベットポットで、相手に任せることと薄いバリューを扱います。' },
    {
      t: 'play',
      title: 'CO で AQ、3ベットされる',
      hero: 'CO',
      heroCards: ['As', 'Qd'],
      villain: 'BTN',
      villainCards: ['Ad', 'Jd'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 12,
          say: 'あなたは 2.5bb でオープン。BTN が **8bb** に 3ベットし、ブラインドはフォールド。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'QQ+・AK とブラフが混ざった広いレンジに対して、AQo は強すぎます。' },
            { label: 'コール', good: true, why: 'ポストフロップで判断します。' },
            { label: '22bb に 4ベット', good: false, why: '降りるのは弱い手で、続けてくるのは AQ を上回る手が中心になります。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Ac', '8d', '4s'],
          pot: 23.5,
          say: 'トップペア。あなたはチェックし、BTN がポット 17.5bb に **6bb** ベット。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'トップペアは小さいベットに降りる手ではありません。' },
            { label: 'コール', good: true, why: 'KQ・QJ のような外れた手がブラフを続ける余地を残します。' },
            { label: '20bb にチェックレイズ', good: false, why: '外れた手が降り、AK・AA・セットにだけコールされます。' },
          ],
        },
        { street: 'ターン', board: ['3h'], pot: 29.5, say: 'あなたはチェック、BTN もチェック。AK・AA・セットならターンでも打ちたいので、BTN の強い手は減りました。' },
        {
          street: 'リバー',
          board: ['Kh'],
          pot: 29.5,
          say: 'K♥。AK はターンで打っていたはずなので BTN には少なめです。あなたが先に行動します。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: '弱い A はショーダウンを選び、バリューを逃します。' },
            { label: 'ポットの約40%ベット', good: true, why: 'AJ・AT などの弱い A がコールしやすく、上回られても損は小さい額です。' },
            { label: 'オールイン', good: false, why: '弱い A がほとんど降り、強い手にだけコールされます。' },
          ],
        },
      ],
      outro: '12bb にコールした BTN は A♦J♦。あなたは 53.5bb を獲得しました。',
    },
    { t: 'h', text: '振り返り' },
    { t: 'p', text: 'ポジションのない 3ベットポットでは、まずアグレッサーにベットを任せます。ターンがチェックで回ったら、リバーは自分から薄く取りにいきます。' },
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
      t: 'estimate', q: 'ポット 29.5bb。約40%のバリューベットは何bb？',
      hand: ['As', 'Qd'], board: ['Ac', '8d', '4s', '3h', 'Kh'],
      min: 0, max: 60, step: 1, unit: 'bb', answer: 12, tolerance: 4,
      explain: '29.5 × 0.4 ≒ 12bb です。弱い A が払いやすく、上回る手に当たっても損は小さく済みます。',
    },
    { t: 'h', text: 'もう一度：どの手に勝っている？' },
    {
      t: 'order',
      q: 'リバーの最終ボード。BTN がターンでチェックしそうな手と AQ を、強い順にタップ。',
      board: ['Ac', '8d', '4s', '3h', 'Kh'],
      hands: [
        { label: 'AQ（あなた）', cards: ['As', 'Qd'] },
        { label: 'KK', cards: ['Ks', 'Kd'] },
        { label: 'AJ', cards: ['Ad', 'Jd'] },
        { label: 'AT', cards: ['Ah', 'Tc'] },
        { label: '99', cards: ['9s', '9c'] },
      ],
      explain: 'AQ が負けるのはリバーでセットになった KK だけ。AJ・AT・99 には勝っているので、薄いバリューベットが成り立ちます。',
    },
    { t: 'tip', text: '「チェックされたから勝っている、だからチェック」では取り損ねます。相手のチェックで強い手が減ったときこそ、弱い A からもう一回取るチャンスです。' },
  ],
};

export default lesson;
