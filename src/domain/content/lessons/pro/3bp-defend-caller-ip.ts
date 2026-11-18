import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-defend-caller-ip',
  blocks: [
    {
      t: 'p',
      text: '3betをコールした側が、インポジションでフロップを迎える場面です。BTNがオープンし、SBが3bet、BTNがコール。BTNにはポジションがありますが、レンジ優位はありません。',
    },
    { t: 'h', text: '3betコーラーのレンジの特徴' },
    {
      t: 'p',
      text: 'AA・KKの多くは4betに回るので、コールレンジは上限が低く、ミドルペア、ブロードウェイ、スーテッドコネクターが中心です。レンジ全体では3bettorのほうが強いので、守る側の目標は損を減らすことです。',
    },
    {
      t: 'pot',
      steps: [
        { label: '3betポット（SB対BTN）', pot: 21, stack: 90 },
        { label: 'フロップ 7bet・コール', pot: 35, stack: 83 },
        { label: 'ターン 17bet・コール', pot: 69, stack: 66 },
      ],
      caption: 'BTN 2.5bbオープン、SB 10bbに3bet、BTNがコール。ポット21bb、SPR約4.3。',
    },
    { t: 'h', text: 'c-betに対する守り方' },
    {
      t: 'p',
      text: 'ポット21bbに約33%（7bb）のc-betを受けると、必要勝率は 7 ÷ (21 + 14) = 20%、MDFは 21 ÷ 28 = 75% です。レンジが弱いので75%すべては守れませんが、小さなc-betには広く続けます。',
    },
    {
      t: 'odds',
      pot: 21,
      bet: 7,
      equity: 28,
      caption: 'ポット21bbに7bbのc-bet。必要勝率は20%。ガットショットやバックドアつきのハンドも続けられます。',
    },
    {
      t: 'table',
      head: ['手の種類', '基本の対応', '例（K♠8♦3♣）'],
      rows: [
        ['セット以上', 'コール、一部レイズ', '88、33'],
        ['トップペア', 'コール', 'KQ、KJ'],
        ['ミドルペア・ポケットペア', 'コール', 'QQ、JJ（ボードより下のペア）'],
        ['ドロー', 'コール、少しだけレイズ', 'フラッシュドロー'],
        ['エア', 'フォールド', 'J♥T♥（バックドア程度）'],
      ],
    },
    { t: 'h', text: 'ターンの動き' },
    {
      t: 'p',
      text: 'BBがターンでチェックしたら、IPのコーラーはベットかチェックバックを選べます。強い手やドローは取りに行き、中程度の手はチェックバックして安くショーダウンを見ます。',
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 21, actions: ['BTN（A♥J♦）が2.5bbオープン', 'SBが10bbに3bet', 'BTNがコール'] },
        { street: 'フロップ', board: ['Kh', '8d', '3c'], pot: 21, actions: ['SBが7bbをc-bet', 'BTNがコール'] },
        { street: 'ターン', board: ['Js'], pot: 35, actions: ['SBがチェック', 'BTN：ジャックのペアはチェックバック'] },
      ],
      caption: 'ターンでペアが付いても中程度の手なら、チェックバックで安くショーダウンへ向かいます。',
    },
    {
      t: 'estimate',
      q: 'ポット21bbに7bbのc-bet。必要勝率は？',
      min: 0,
      max: 60,
      step: 1,
      unit: '%',
      answer: 20,
      tolerance: 5,
      explain: '7 ÷ (21 + 14) = 7 ÷ 35 = 20% です。',
    },
    {
      t: 'estimate',
      q: 'ポット21bbに7bbのc-bet。最低守備頻度（MDF）は？',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 75,
      tolerance: 10,
      explain: '21 ÷ (21 + 7) = 21 ÷ 28 = 75% です。ただしコーラーのレンジは弱いので、実際はこれより少なく守ります。',
    },
    {
      t: 'quiz',
      q: 'SBがK♠8♦3♣で7bbのc-bet。BTNが続けるのはどちらの手？',
      options: ['K♦Q♣（トップペア）', '7♥6♣（ペアなし）'],
      optionCards: [['Kd', 'Qc'], ['7h', '6c']],
      board: ['Ks', '8d', '3c'],
      answer: 0,
      explain: 'トップペアは必要勝率20%を大きく上回り、コールします。ペアもドローもない手は、フォールドが基本です。',
    },
    {
      t: 'quiz',
      q: 'ターン、SBがチェック。BTNはA♥J♦でジャックのペアです。基本の方針は？',
      options: ['チェックバックして安くショーダウンへ', '17bbをベット', '全額オールイン', 'フォールド'],
      hand: ['Ah', 'Jd'],
      board: ['Kh', '8d', '3c', 'Js'],
      answer: 0,
      explain: 'Kハイのボードでジャックのペアは中程度の手です。ベットしても、負けている手は降り、勝っている手にコールされやすくなります。',
    },
  ],
};

export default lesson;
