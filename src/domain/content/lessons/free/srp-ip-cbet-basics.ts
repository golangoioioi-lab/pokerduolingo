import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'srp-ip-cbet-basics',
  blocks: [
    { t: 'h', text: 'まずは1ハンド打ってみる' },
    {
      t: 'play',
      title: 'BTN で AJ、K-7-2 のフロップ',
      hero: 'BTN',
      heroCards: ['Ah', 'Jd'],
      villain: 'BB',
      steps: [
        {
          street: 'プリフロップ',
          pot: 1.5,
          say: 'CO までフォールド。あなたは BTN で **A♥J♦**。',
          q: 'どうする？',
          options: [
            { label: '2.5bb レイズ', good: true, why: 'BTN で AJo は十分オープンできる手です。' },
            { label: 'フォールド', good: false, why: 'BTN ではかなり上位の手です。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Ks', '7d', '2c'],
          pot: 5.5,
          say: 'BB だけがコール。フロップは **K♠7♦2♣**。BB はチェック。',
          q: 'A ハイのまま。どうする？',
          options: [
            { label: '1.8bb（約33%）ベット', good: true, why: 'BB は弱いペアやノーハンドが多く、小さいベットでよく降ります。' },
            { label: '5.5bb（ポット）ベット', good: false, why: '大きく打つ必要はなく、失敗したときの損が大きくなります。' },
            { label: 'チェック', good: false, why: 'チェックも少し混ざりますが、基本は小さくベットです。' },
          ],
        },
        {
          street: 'ターン',
          board: ['5h'],
          pot: 9.1,
          say: 'BB がコール。ターンは **5♥**。BB はまたチェック。',
          q: 'まだ A ハイ。どうする？',
          options: [
            { label: 'チェック', good: true, why: 'フロップでコールした手はペア以上が多く、降ろしにくいです。' },
            { label: '9bb（ポット）ベット', good: false, why: 'コールしてきた範囲に対して、大きなブラフは通りにくいです。' },
          ],
        },
      ],
      outro: 'レンジ優位のある乾いたボードでは、弱い手も含めて小さく c-bet します。コールされたら次で見直します。',
    },
    { t: 'h', text: 'なぜ IP の c-bet は多くなるのか' },
    {
      t: 'p',
      text: 'BB は AA や KK の多くを 3bet するので、コールレンジに強い手が少なくなります。BTN はそれらを全部持てます。これが**レンジ優位**です。後から行動できる点も加わり、頻度は高く、サイズは小さめになります。',
    },
    {
      t: 'tree',
      root: 'K♠7♦2♣、ポット5.5bb。A♥J♦で1.8bet（約33%）かチェックか',
      options: [
        {
          label: '1.8bbをベット',
          outcomes: [
            { label: 'BBがフォールド（45%）', prob: 0.45, value: 5.5 },
            { label: 'コールされ、後で勝つ', prob: 0.19, value: 7.3 },
            { label: 'コールされ、後で負ける', prob: 0.36, value: -1.8 },
          ],
          note: '降ろせる分が上乗せになる',
        },
        { label: 'チェック', ev: 1.2, note: 'エクイティ実現を割り引いた例' },
      ],
      caption: '数字は単純化した例です。フォールド率が十分あれば、小さいベットは安いコストで利益を生みます。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'プリフロップ後', pot: 5.5, stack: 97.5 },
        { label: 'フロップ 1.8bet・コール後', pot: 9.1, stack: 95.7 },
        { label: 'ターン 4.5bet・コール後', pot: 18.1, stack: 91.2 },
      ],
      caption: '小さく打てば、ポットはゆっくり育ちます。',
    },
    {
      t: 'table',
      head: ['ボード', 'c-bet頻度（目安）', 'サイズ'],
      rows: [
        ['A72 のような A ハイ・ドライ', '8割以上', '小'],
        ['K72 のような K ハイ・ドライ', '7〜8割', '小'],
        ['T96 ツートーン', '4〜5割', '中〜大'],
        ['654 のような低いつながり', '3〜4割', '混合'],
      ],
    },
    {
      t: 'quiz',
      q: 'K♠7♦2♣で、バリュー目的のc-betになる手はどれ？',
      board: ['Ks', '7d', '2c'],
      options: ['K♥Q♦（トップペア）', 'A♥J♦（エースハイ）', '9♥8♥', '5♣4♣'],
      optionCards: [['Kh', 'Qd'], ['Ah', 'Jd'], ['9h', '8h'], ['5c', '4c']],
      answer: 0,
      explain: '弱い手にコールさせて価値を取るのがバリューです。残りは相手を降ろすためのベットです。',
    },
    {
      t: 'estimate',
      q: 'このボードで、BTNのc-bet頻度の目安は何%？',
      board: ['6d', '5d', '4s'],
      min: 0,
      max: 100,
      step: 5,
      unit: '%',
      answer: 35,
      tolerance: 15,
      explain: '低くつながったボードは BB のコールレンジによく当たります。3〜4割が目安です。',
    },
    { t: 'h', text: 'もう一度：頻度を見分ける' },
    {
      t: 'rapid',
      q: 'BTN対BB。このフロップで c-bet は？',
      choices: ['高頻度で小さく', '頻度を下げる'],
      items: [
        { cards: ['As', '7d', '2c'], answer: 0, why: 'A ハイ・ドライは BTN が大きく有利です。' },
        { cards: ['9h', '8h', '7c'], answer: 1, why: 'BB のコネクターやドローによく当たります。' },
        { cards: ['Ks', '7d', '2c'], answer: 0, why: 'K ハイ・ドライも BTN が有利です。' },
        { cards: ['6d', '5d', '4s'], answer: 1, why: '低いつながりは BB に強い手が多くなります。' },
        { cards: ['Qd', '8c', '3s'], answer: 0, why: '高いカードが1枚で乾いています。' },
        { cards: ['Th', '9h', '6c'], answer: 1, why: 'ドローが多く、BB にもエクイティがあります。' },
        { cards: ['Ah', 'Kd', '4c'], answer: 0, why: 'A と K は BTN のレンジに多いカードです。' },
        { cards: ['8s', '7s', '6d'], answer: 1, why: 'ストレートや2ペアが BB に多いボードです。' },
      ],
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'IP の c-bet は「レンジ優位のあるボードで、小さく、高頻度に」が出発点です。つながったボードでは頻度を下げます。',
    },
  ],
};

export default lesson;
