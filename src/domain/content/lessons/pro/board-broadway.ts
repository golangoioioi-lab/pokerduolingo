import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-broadway',
  blocks: [
    { t: 'h', text: 'ナッツはどれ？' },
    {
      t: 'order',
      q: 'Q♠J♦T♥ で強い順にタップ',
      board: ['Qs', 'Jd', 'Th'],
      hands: [
        { label: 'QQ', cards: ['Qh', 'Qc'] },
        { label: '98s', cards: ['9c', '8c'] },
        { label: 'AK', cards: ['Ah', 'Kc'] },
        { label: 'AQ', cards: ['As', 'Qd'] },
        { label: '77', cards: ['7h', '7c'] },
      ],
      explain: 'AKはA-K-Q-J-Tのナッツ、98は下のストレート、QQはセット、AQはトップペア、77はボードの下のペアです。',
    },
    { t: 'h', text: 'BTNのナッツアドバンテージ' },
    {
      t: 'p',
      text: 'AK・AQ・KQ・KK・QQなど、強い手の多くはBTNのレンジにあります。BBはその多くを3betするので、コールレンジには少なくなります（BTN対BBのSRP、目安）。',
    },
    {
      t: 'combos',
      groups: [
        { label: 'ストレート（JT）', hands: ['JT'] },
        { label: 'セット', hands: ['AA', 'KK', 'QQ'] },
      ],
      dead: ['As', 'Kd', 'Qc'],
      caption: 'A♠K♦Q♣ 上。JTは16通り、セットは各3通り。',
    },
    {
      t: 'equity',
      players: [{ label: 'BTNレンジ', pct: 54 }, { label: 'BBレンジ', pct: 46 }],
      board: ['As', 'Kd', 'Qc'],
      caption: 'A♠K♦Q♣ のレンジ対レンジ（目安）。',
    },
    {
      t: 'estimate',
      q: 'このボードで、ストレートが完成するJTは何通り？',
      board: ['As', 'Kd', 'Qc'],
      min: 0,
      max: 32,
      step: 1,
      unit: '通り',
      answer: 16,
      tolerance: 4,
      explain: 'ボードにJもTもないので 4 × 4 = 16 通り。A-K-Q-J-Tのナッツです。',
    },
    { t: 'h', text: 'BBの武器はドロー' },
    {
      t: 'compare',
      left: { title: 'A♠K♦Q♣', board: ['As', 'Kd', 'Qc'], points: ['BTNはナッツ級が多い', '大きめのベットも使える'], verdict: 'good' },
      right: { title: 'Q♠J♦T♥', board: ['Qs', 'Jd', 'Th'], points: ['BBにもドローとツーペアが多い', 'サイズは中くらいに'], verdict: 'neutral' },
      caption: '高いボードほど、ナッツアドバンテージはBTN寄り。',
    },
    {
      t: 'quiz',
      q: 'ブロードウェイボードでBBが強い面は？',
      options: ['全員がフォールドする', 'QJs・JTsなどでドローが豊富', 'AAを多く持つ', 'セットを常に持つ'],
      answer: 1,
      explain: 'BBはスーテッドのブロードウェイを広くコールし、ストレートドローやペアを持ちます。',
    },
    { t: 'h', text: 'ナッツで3回打つ' },
    {
      t: 'play',
      title: 'Q♠J♦T♥ でAK',
      hero: 'BTN',
      heroCards: ['Ac', 'Kd'],
      villain: 'BB',
      villainCards: ['Kh', '9h'],
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'BTNで **A♣K♦** を2.5bbオープン。BBがコールしました。' },
        {
          street: 'フロップ',
          board: ['Qs', 'Jd', 'Th'],
          pot: 5.5,
          say: 'フロップは **Q♠J♦T♥**。ナッツのストレートです。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '4bbベット', good: true, why: 'ドローやツーペアから価値を取ります。ナッツ優位があるので大きめも使えます。' },
            { label: 'チェック', good: false, why: '払ってくれる手が多いボードです。遅らせる理由がありません。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2c'],
          pot: 13.5,
          say: 'BBがコール。ターンは **2♣**。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '9bbベット', good: true, why: 'Kx・9x・ツーペアはまだ払います。ポットを育てます。' },
            { label: 'チェック', good: false, why: 'リバーで大きく打つためにも、ここで増やしておきます。' },
          ],
        },
        {
          street: 'リバー',
          board: ['4d'],
          pot: 31.5,
          say: 'BBがコール。リバーは **4♦**。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '22bbベット', good: true, why: 'ナッツなので大きく。下のストレートやツーペアが払います。' },
            { label: 'チェック', good: false, why: '最強の手で価値を取らないのは損です。' },
          ],
        },
      ],
      outro: 'BBは K♥9♥ でK-highのストレート。ナッツアドバンテージがある側は、こうした「2番目に強い手」から大きく取れます。',
    },
  ],
};

export default lesson;
