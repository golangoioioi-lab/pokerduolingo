import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'opp-lag',
  blocks: [
    {
      t: 'p',
      text: 'LAG（ルースアグレッシブ）は、広いレンジで参加し、積極的にレイズと3betをする相手です。目安はVPIP 30〜40%、PFR 25〜32%、3bet 10%以上。上手なLAGは手強い相手ですが、打つ手が多いぶん、中身にはブラフや弱い手も多く含まれます。',
    },
    { t: 'h', text: '3betレンジが広いと何が変わるか' },
    {
      t: 'p',
      text: 'LAGの3betには、強い手だけでなく、スーテッドコネクターや小さいAのスーテッドまで入ります。同じAQoでも、相手の3betレンジが違えば勝率は大きく変わります。',
    },
    {
      t: 'compare',
      left: {
        title: 'ニットの3bet（QQ+, AK）',
        cards: ['Ah', 'Qd'],
        points: ['AQoの勝率は約24%', 'ドミネートされている', '4betもコールも厳しい'],
        verdict: 'bad',
      },
      right: {
        title: 'LAGの3bet（約12%の広いレンジ）',
        cards: ['Ah', 'Qd'],
        points: ['AQoの勝率は約53%', 'レンジの多くに勝っている', '4betやコールで戦える'],
        verdict: 'good',
      },
      caption: '勝率はプリフロップのオールイン勝率（目安）',
    },
    {
      t: 'equity',
      players: [
        { label: 'あなた AJo', cards: ['Ah', 'Jd'], pct: 47 },
        { label: 'LAGの3betレンジ', pct: 53 },
      ],
      caption: 'LAGの3betレンジ：88+, ATs+, KJs+, AJo+, KQo, A5s-A2s, K9s, QTs, J9s, T9s, 98s, 87s, 76s, 65s（目安）',
    },
    {
      t: 'p',
      text: 'AJoでも、相手の広い3betレンジに対しては五分に近い勝率があります。ニット相手なら降りるAJoやKQsも、LAG相手ならコールや4betの候補になります。',
    },
    { t: 'h', text: '4betと3betで反撃する' },
    {
      t: 'p',
      text: '3betが多い相手には、4betを少し増やします。バリューはQQ+とAKに加えてJJやAQsまで広げ、ブラフにはA5sのようなAブロッカーを持つ手を使います。LAGのオープンも広いので、3betで降ろせる手が多くあります。',
    },
    { t: 'h', text: 'ポストフロップ：コールダウンを広げる' },
    {
      t: 'p',
      text: 'LAGはターンとリバーでも打ち続けます。トップペアなどの「ブラフキャッチャー」で、普段より長くコールする必要があります。',
    },
    {
      t: 'odds',
      pot: 40,
      bet: 30,
      equity: 40,
      caption: 'リバーでポット40bbに30bbのベット。勝率40%は相手のブラフが多い前提の目安',
    },
    {
      t: 'p',
      text: '必要な勝率は 30 ÷ (40 + 60) = 30% です。相手のベットに30%以上ブラフが含まれていれば、コールが得になります。',
    },
    {
      t: 'warn',
      text: 'LAGにも強い手はあります。コールを広げるのはブラフキャッチャーまでです。相手のブラフにも負ける弱いAハイなどで粘る意味はありません。',
    },
    {
      t: 'estimate',
      q: 'LAGの3betレンジ（約12%）に対して、AQoのプリフロップ勝率は約何%？',
      hand: ['Ah', 'Qd'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 53,
      tolerance: 12,
      explain: 'ニットのQQ+, AKに対しては約24%ですが、LAGの広い3betレンジに対しては約53%あります。4betやコールで続ける場面が増えます。',
    },
    {
      t: 'estimate',
      q: 'リバーでポット60bbに45bbのベット。コールに必要な勝率は約何%？',
      hand: ['Qh', 'Jd'],
      board: ['Jc', '8s', '4d', '3h', '2c'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 30,
      tolerance: 8,
      explain: '45 ÷ (60 + 90) = 45 ÷ 150 = 30% です。ポットの3/4のベットに対しては、いつも約30%が必要です。',
    },
    {
      t: 'quiz',
      q: 'LAGがリバーでポットサイズのベット。ブラフキャッチャーとして最もコールしたい手は？',
      board: ['Ks', '9d', '5h', '2c', '3d'],
      options: ['K♥Q♣（トップペア）', 'A♥T♣（Aハイ）', '9♥8♥（9のペア）', '7♣6♣（7ハイ）'],
      optionCards: [['Kh', 'Qc'], ['Ah', 'Tc'], ['9h', '8h'], ['7c', '6c']],
      answer: 0,
      explain: 'ブラフにも勝てる手ほど、コールの価値があります。トップペアはブラフとより弱い手に勝ちます。AハイやAの無い手は、相手のブラフにもほぼ負けます。',
    },
    {
      t: 'quiz',
      q: 'LAGへの調整として適切でないものは？',
      options: ['3betされたら強い手以外すべて降りる', '4betを少し増やす', 'ブラフキャッチャーでのコールを広げる', 'LAGのオープンに3betを増やす'],
      answer: 0,
      explain: 'LAGの3betレンジは広いので、強い手以外を全部降りると降りすぎになります。他の3つはLAGへの基本的な調整です。',
    },
    {
      t: 'try',
      text: 'エクイティ計算で、AJoやKQsが広い3betレンジにどれくらい勝てるか試してみましょう。',
      tab: 'equity',
    },
  ],
};

export default lesson;
