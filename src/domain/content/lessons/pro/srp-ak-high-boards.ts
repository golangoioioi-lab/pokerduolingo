import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'srp-ak-high-boards',
  blocks: [
    {
      t: 'p',
      text: 'AハイやKハイのドライなボードは、SRPで最もc-betが打ちやすいボードです。プリフロップのレンジの差が、そのままボードに表れるからです。A・Kハイボードの考え方と、BBの守り方を見ます。',
    },
    { t: 'h', text: 'なぜAハイ・Kハイは打ちやすいのか' },
    {
      t: 'p',
      text: 'BTNは、AA・AK・AQ・KQなど、AやKを含む強い手を多く持っています。BBはAKやAAの多くを3betで使っているため、コールレンジのトップペアは少なくなります。レンジ優位とナッツ優位が、同時にBTNにあります。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'セット', hands: ['AA', '77', '22'] },
        { label: 'トップペア（AT〜AK）', hands: ['AKs', 'AQs', 'AJs', 'ATs', 'AKo', 'AQo', 'AJo', 'ATo'] },
      ],
      dead: ['As', '7d', '2c'],
      caption: 'A♠7♦2♣でBTNが持つ強い手。セット9コンボ、トップペア48コンボ。BBは3betしているので、ここに該当する手が少なくなります。',
    },
    { t: 'h', text: 'サイズと頻度（目安）' },
    {
      t: 'table',
      head: ['ボード', 'BTNのc-bet頻度（目安）', 'サイズ（目安）'],
      rows: [
        ['A♠7♦2♣（ドライ）', '8〜9割', '約25〜33%'],
        ['K♠7♦2♣（ドライ）', '7〜8割', '約25〜33%'],
        ['A♠K♦5♣（Broadwayの多いボード）', '6〜7割', '約33%'],
        ['K♠Q♦9♥（つながり気味）', '4〜5割', '約50〜66%'],
      ],
    },
    {
      t: 'p',
      text: 'ボードがつながるほど、BBにもストレートやツーペアが入ります。K♠Q♦9♥ではKJ・QJ・JTなどエクイティの高い手が増えるので、頻度を下げてサイズを上げます。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'プリフロップ後', pot: 5.5, stack: 97.5 },
        { label: 'フロップ 1.8bet・コール', pot: 9.1, stack: 95.7 },
        { label: 'ターン 4.5bet・コール', pot: 18.1, stack: 91.2 },
        { label: 'リバー 12bet・コール', pot: 42.1, stack: 79.2 },
      ],
      caption: '33%→50%→約66%と大きくするラインの例。SPRは17.7から約1.9まで下がります。',
    },
    { t: 'h', text: 'BBはどう守るか' },
    {
      t: 'p',
      text: 'BBはAx、ペア、バックドアを持つ手で続けます。A♠7♦2♣では、A9sなどの弱いAxや、66、55のようなポケットペアが中心です。レイズは少なく、強いセットやバックドアの多いブラフを少し混ぜます。',
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 5.5, actions: ['BTN（A♥Q♣）が2.5bbオープン', 'BBがコール'] },
        { street: 'フロップ', board: ['Ks', '7d', '2c'], pot: 5.5, actions: ['BBがチェック', 'BTN：1.8bbをベット', 'BBがコール'] },
        { street: 'ターン', board: ['4h'], pot: 9.1, actions: ['BBがチェック', 'BTN：4.5bbのバリューまたはブラフ'] },
      ],
      caption: 'エースハイでも、K72のボードでは小さなc-betでポットを取る場面が多くなります。',
    },
    {
      t: 'estimate',
      q: 'BTNが持つAT以上のトップペア（AKs〜ATs、AKo〜ATo）は、合計何コンボですか？',
      board: ['As', '7d', '2c'],
      min: 0,
      max: 100,
      step: 1,
      answer: 48,
      tolerance: 10,
      explain: 'スーテッド4種はA♠を除いて各3コンボで12、オフスート4種は各9コンボで36。合計48コンボです。',
    },
    {
      t: 'quiz',
      q: 'BTNが高頻度でc-betできる理由は？',
      board: ['As', '7d', '2c'],
      options: ['BTNにレンジ優位があり、BBにAxが少ないから', 'ポットが大きいから', 'BBは必ずフォールドするから', '位置がないから'],
      answer: 0,
      explain: 'BBはAAやAKの多くを3betしているため、コールレンジにAxが少なくなります。BTNにレンジ優位とナッツ優位があります。',
    },
    {
      t: 'quiz',
      q: 'BBがこのフロップでコールを続けやすいのは、どの手ですか？',
      board: ['As', '7d', '2c'],
      options: ['A♥9♥（弱いAx）', 'K♣J♦（ノーペア）', '9♣8♦（ノーペア）', 'T♥3♦（ノーペア）'],
      optionCards: [['Ah', '9h'], ['Kc', 'Jd'], ['9c', '8d'], ['Th', '3d']],
      answer: 0,
      explain: 'BBはAx、ペア、バックドアのある手で続けます。弱いAxはペアがあり、続ける手の代表です。ノーペアの3つは基本的に降ります。',
    },
    {
      t: 'quiz',
      q: 'つながりのあるボードで、BTNのc-betはどうなりますか？',
      board: ['Ks', 'Qd', '9h'],
      options: ['頻度を下げてサイズを上げる', '頻度もサイズも下げる', '全員で小さく打つ', '絶対にチェック'],
      answer: 0,
      explain: 'BBにもKJ・QJ・JTなどエクイティの高い手が増えるので、手を選んで大きめのサイズで打ちます。',
    },
  ],
};

export default lesson;
