import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'opp-stats-basics',
  blocks: [
    { t: 'h', text: 'まず数字を読んでみる' },
    {
      t: 'rapid',
      q: 'VPIP / PFR（%）を見て。この相手はコールが多い？レイズが多い？',
      choices: ['コールが多い', 'レイズが多い'],
      items: [
        { text: 'VPIP 45 / PFR 8', answer: 0, why: '差が 37 ポイント。参加の大半がコールです。' },
        { text: 'VPIP 22 / PFR 18', answer: 1, why: '差は 4 ポイント。参加するときはほぼレイズです。' },
        { text: 'VPIP 30 / PFR 26', answer: 1 },
        { text: 'VPIP 35 / PFR 10', answer: 0 },
        { text: 'VPIP 14 / PFR 4', answer: 0, why: '参加は少ないですが、入るときはコール中心です。' },
        { text: 'VPIP 25 / PFR 6', answer: 0, why: '差が 10 ポイント以上ならパッシブ寄りです。' },
        { text: 'VPIP 18 / PFR 16', answer: 1 },
        { text: 'VPIP 40 / PFR 34', answer: 1 },
      ],
    },
    { t: 'p', text: '**VPIP** は自分からチップを入れた割合、**PFR** はレイズした割合です。VPIP は参加の広さ、VPIP と PFR の差はコールの多さを表します。6人卓のレギュラーは 22〜28 / 18〜24 前後が目安です。' },
    {
      t: 'combos',
      groups: [
        { label: 'ペア 55+', hands: ['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55'] },
        { label: 'スーテッド', hands: ['AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A5s', 'KQs', 'KJs', 'KTs', 'QJs', 'QTs', 'JTs', 'T9s'] },
        { label: 'オフスート', hands: ['AKo', 'AQo', 'AJo', 'ATo', 'KQo', 'KJo'] },
      ],
      caption: 'VPIP 約14% のイメージ。1326 コンボのうち 188 コンボです。',
    },
    {
      t: 'estimate',
      q: '30 ハンドのうち 12 回、自分からチップを入れた相手の VPIP は約何%？',
      min: 0,
      max: 100,
      step: 5,
      unit: '%',
      answer: 40,
      tolerance: 10,
      explain: '12 ÷ 30 = 40%。ルースな相手と考えられます。',
    },
    { t: 'h', text: '攻撃性を見るスタッツ' },
    {
      t: 'table',
      head: ['スタッツ', '意味', 'レギュラーの目安'],
      rows: [
        ['3bet', 'オープンに3betした割合', '6〜10%'],
        ['Fold to 3bet', '3betされて降りた割合', '50〜60%'],
        ['Cbet', 'レイザーがフロップで打った割合', '50〜70%'],
        ['AF', '（ベット＋レイズ）÷ コール', '2〜3'],
        ['WTSD', 'フロップ後ショーダウンまで行った割合', '25〜30%'],
      ],
    },
    {
      t: 'compare',
      left: { title: 'A：22 / 18 / 3bet 8%', points: ['参加するときはほぼレイズ', '基本に忠実なレギュラー'], verdict: 'neutral' },
      right: { title: 'B：45 / 8 / AF 0.8', points: ['コール中心で降りない', '大きなバリューベットが効く'], verdict: 'good' },
    },
    { t: 'h', text: '何ハンドで信用できるか' },
    {
      t: 'table',
      head: ['スタッツ', '傾向が見えるまで'],
      rows: [
        ['VPIP / PFR', '約100ハンド'],
        ['3bet / Fold to 3bet', '300〜500ハンド'],
        ['Cbet / AF', '300ハンド以上'],
        ['リバーの頻度', '1000ハンド以上'],
      ],
    },
    {
      t: 'quiz',
      q: '最も少ないハンド数で信用できるスタッツは？',
      options: ['VPIP', 'リバーのコール頻度', 'Fold to 3bet', 'WTSD'],
      answer: 0,
      explain: 'VPIP は毎ハンド記録されるので、100 ハンド前後で傾向が見えます。',
    },
    { t: 'h', text: 'もう一度：数字を使って打つ' },
    {
      t: 'play',
      title: 'BB は 45 / 8、AF 0.8、WTSD 38%',
      hero: 'BTN',
      heroCards: ['Kh', 'Qh'],
      villain: 'BB',
      villainCards: ['Ks', 'Js'],
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'あなたは BTN で **K♥Q♥** を 2.5bb オープン。BB（45 / 8、AF 0.8、WTSD 38%）がコール。' },
        {
          street: 'フロップ',
          board: ['Kd', 'Qc', '7s'],
          pot: 5.5,
          say: 'フロップは **K♦Q♣7♠**。ツーペア。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'AF が低い相手は自分から打ってくれません。' },
            { label: '3.5bb ベット', good: true, why: 'WTSD が高い相手は降りないので、早くからポットを作ります。' },
          ],
        },
        { street: 'ターン', board: ['2h'], pot: 12.5, say: 'BB がコール。ターンは **2♥**。BB はチェック。あなたは 9bb をベットし、BB がコール。' },
        {
          street: 'リバー',
          board: ['4c'],
          pot: 30.5,
          say: 'リバーは **4♣**。BB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: '待っても相手は打ちません。' },
            { label: '10bb ベット', good: false, why: '払ってもらえますが、この相手にはもっと大きく打てます。' },
            { label: '24bb ベット', good: true, why: 'ショーダウンまで来る相手には、大きく打って取ります。' },
          ],
        },
      ],
      outro: 'AF が低く WTSD が高い相手には、待たずに大きく打ちます。',
    },
    { t: 'tip', text: '最初は VPIP・PFR・3bet の3つで十分です。次のレッスンで、この数字から相手を4タイプに分けます。' },
  ],
};

export default lesson;
