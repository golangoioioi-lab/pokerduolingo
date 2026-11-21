import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'tr-review',
  blocks: [
    { t: 'h', text: 'まずやってみる：1ハンドを通して' },
    {
      t: 'play',
      title: 'BTNでK♠Q♠',
      hero: 'BTN',
      heroCards: ['Ks', 'Qs'],
      villain: 'BB',
      villainCards: ['Qh', 'Th'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 1.5,
          say: 'COまでフォールド。あなたはBTNでK♠Q♠。',
          q: 'どうする？',
          options: [
            { label: '2.5bbレイズ', good: true, why: 'BTNでは十分に強い手です。' },
            { label: 'フォールド', good: false, why: 'BTNでKQsを降りる理由はありません。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Qd', '8c', '4h'],
          pot: 5.5,
          say: 'BBがコール。フロップでトップペア。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '1.8bbベット', good: true, why: 'BTNに有利なボード。小さく打って価値を取ります。' },
            { label: 'チェック', good: false, why: '弱いペアやドローから取れる額を逃します。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2s'],
          pot: 9.1,
          say: 'BBがコール。ターン2♠はブリック。BBはチェック。',
          q: 'どうする？',
          options: [
            { label: '6bbベット', good: true, why: 'ブリックでBTNの優位はそのまま。トップペア・良いキッカーで続けます。' },
            { label: 'チェック', good: false, why: '何も変わらないカードです。打てる手で止まる理由はありません。' },
          ],
        },
        {
          street: 'リバー',
          board: ['Kc'],
          pot: 21.1,
          say: 'BBがコール。リバーK♣で2ペア。BBはチェック。',
          q: 'サイズは？',
          options: [
            { label: '16bb（約3/4）', good: true, why: 'BTNのレンジは2ペア以上とブラフにポラライズ。大きめが合います。' },
            { label: '4bb（約1/5）', good: false, why: '2ペアはもっと取れます。小さいサイズは中くらいの手向けです。' },
            { label: 'チェック', good: false, why: 'BBのQxから取り逃がします。' },
          ],
        },
      ],
      outro: 'BBはQTでコール。カードの分類、サイズ、レンジの形の順に考えると、迷わず進めます。',
    },
    { t: 'h', text: 'リバーK♣はだれの味方か' },
    {
      t: 'p',
      text: 'BBはAK・KK・KQsの多くを3betするので、Kで強くなる手は少なめ。BTNに有利なカードです。BBにはQx・8x・外れたドロー（JT・T9・76s）が残ります。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ後', pot: 9.1, stack: 95.7 },
        { label: 'ターン後', pot: 21.1, stack: 89.7 },
        { label: 'リバー16bbにコール後', pot: 53.1, stack: 73.7 },
      ],
      caption: 'リバーで16bb（約3/4ポット）を打ちコールされた場合',
    },
    {
      t: 'order',
      q: 'リバーでBTNが持ちうる手を、強い順にタップ。',
      board: ['Qd', '8c', '4h', '2s', 'Kc'],
      hands: [
        { label: 'K♠Q♠', cards: ['Ks', 'Qs'] },
        { label: 'Q♥J♥', cards: ['Qh', 'Jh'] },
        { label: 'A♥K♥', cards: ['Ah', 'Kh'] },
        { label: '8♥8♦', cards: ['8h', '8d'] },
        { label: 'J♦T♦', cards: ['Jd', 'Td'] },
      ],
      explain: '88のセット > KQの2ペア > AK > QJ > JT。上の2つは大きく打ち、AKやQJは中くらいなのでチェック寄り、JTは外れたドローでブラフ候補です。',
    },
    { t: 'h', text: 'BB側から見たリバー' },
    {
      t: 'odds',
      pot: 21.1,
      bet: 16,
      equity: 25,
      caption: 'BBのQTなど（BTNのリバーベットレンジに対し勝率25%前後、目安）。必要勝率は約30%',
    },
    {
      t: 'estimate',
      q: 'ポット21.1bbに16bbのリバーベット。BBのMDFは？',
      board: ['Qd', '8c', '4h', '2s', 'Kc'],
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      answer: 57,
      tolerance: 8,
      explain: '21.1 ÷ (21.1 + 16) ≈ 57% です。30%はBBの必要勝率です。',
    },
    {
      t: 'quiz',
      q: '線の近くで、最もコールに向くQxは？',
      board: ['Qd', '8c', '4h', '2s', 'Kc'],
      options: ['Q♠T♠', 'Q♠9♠', 'Q♠5♠', 'Q♠J♠'],
      optionCards: [['Qs', 'Ts'], ['Qs', '9s'], ['Qs', '5s'], ['Qs', 'Js']],
      answer: 2,
      explain: 'T・9・JはBTNのブラフになる外れたドロー（JT・T9など）を減らします。Q♠5♠はブラフを何も減らさないので、コール時の勝率が高くなります。',
    },
    {
      t: 'tip',
      title: '講座のまとめ',
      text: 'ターンはカードの分類から、リバーはサイズとレンジの形から考えます。守る側はMDFで線を引き、線の近くはブロッカーで決めます。',
    },
  ],
};

export default lesson;
