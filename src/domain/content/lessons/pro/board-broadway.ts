import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-broadway',
  blocks: [
    {
      t: 'p',
      text: 'A、K、Q、J、Tが並ぶボードは、レイザーのナッツアドバンテージが大きくなりやすいボードです。ただしBBのドローも多く、単純ではありません。数字は、BTN対BBのSRPを簡易レンジで計算した目安です。',
    },
    { t: 'h', text: '代表的なボード' },
    {
      t: 'table',
      head: ['ボード', 'BTNのエクイティ（目安）', '性質'],
      rows: [
        ['A♠K♦Q♣', '約54%', 'ブロードウェイ。ストレート完成が多い'],
        ['A♥Q♦J♣', '約54〜55%', 'ブロードウェイ'],
        ['K♠Q♦J♣', '約53%', 'KQJで高いカードが並ぶ'],
        ['Q♠J♦T♥', '約54%', '最もコネクテッド'],
      ],
    },
    { t: 'h', text: 'ナッツアドバンテージ' },
    {
      t: 'p',
      text: 'BTNは AK、AQ、KQ、QQ、KK など、セットやツーペア以上を作れる手を多く持ちます。BBはそれらの多くを3betしているので、コールレンジには少なくなります。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'ストレート完成（JT）', hands: ['JT'] },
        { label: 'セット', hands: ['AA', 'KK', 'QQ'] },
      ],
      dead: ['As', 'Kd', 'Qc'],
      caption: 'A♠K♦Q♣ 上のコンボ数。JTは16通りでストレート完成、セットは3種類で各3通り。',
    },
    {
      t: 'equity',
      players: [{ label: 'BTNレンジ', pct: 54 }, { label: 'BBレンジ', pct: 46 }],
      board: ['As', 'Kd', 'Qc'],
      caption: 'A♠K♦Q♣ のレンジ対レンジ（目安）。',
    },
    { t: 'h', text: 'BBの武器' },
    {
      t: 'p',
      text: 'BBは QJs、JTs、KJs などのスーテッドコネクターを広くコールしています。ストレートドローやペアが多く、チェックレイズに回せる材料も増えます。',
    },
    {
      t: 'compare',
      left: {
        title: 'A♠K♦Q♣',
        board: ['As', 'Kd', 'Qc'],
        points: ['BTNはナッツ級が多い', '大きめのベットも使える', 'BBはドローを持つ'],
        verdict: 'good',
      },
      right: {
        title: 'Q♠J♦T♥',
        board: ['Qs', 'Jd', 'Th'],
        points: ['BTNのナッツ優位は大きい', 'BBにもドローとツーペアが多い', 'サイズは中くらいに'],
        verdict: 'neutral',
      },
      caption: '高いボードほどナッツアドバンテージはBTN寄り。',
    },
    { t: 'tip', title: 'サイズの考え方', text: 'ブロードウェイボードでは、BTNは小さなベットだけでなく、中くらいから大きなベットも混ぜられます。' },
    {
      t: 'estimate',
      q: 'このボードで、ストレートが完成するJTは何通り？',
      board: ['As', 'Kd', 'Qc'],
      min: 0,
      max: 32,
      step: 1,
      unit: '通り',
      answer: 16,
      tolerance: 5,
      explain: 'ボードにJもTもないので、4 × 4 = 16 通りです。A-K-Q-J-T のストレートで、ナッツです。',
    },
    {
      t: 'quiz',
      q: 'このボードで、ナッツ（最強の手）はどれ？',
      board: ['Qs', 'Jd', 'Th'],
      options: ['A♥K♣', '9♣8♣', 'Q♥Q♣', '7♥7♣'],
      optionCards: [['Ah', 'Kc'], ['9c', '8c'], ['Qh', 'Qc'], ['7h', '7c']],
      answer: 0,
      explain: 'AKは A-K-Q-J-T のストレートで最強です。98もストレートですが、AKに負けます。QQはセット、77はペアです。',
    },
    {
      t: 'quiz',
      q: 'このボードでBTNが有利な理由は？',
      board: ['As', 'Kd', 'Qc'],
      options: ['BBが弱いから', 'ボードがランダムだから', 'BTNが先に行動するから', 'AK、AQ、KQなどの強い手を多く持つから'],
      answer: 3,
      explain: 'BTNのレンジにはナッツ級の組み合わせが多く、ナッツアドバンテージがあります。',
    },
    {
      t: 'quiz',
      q: 'ブロードウェイボードでBBが強い面は？',
      options: ['全員がフォールドする', 'スーテッドコネクターでドローが豊富', 'AAを多く持つ', 'セットを常に持つ'],
      answer: 1,
      explain: 'QJs、JTsなどでストレートドローやペアを持ちます。',
    },
  ],
};

export default lesson;
