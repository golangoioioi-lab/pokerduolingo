import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'reverse-implied-odds',
  blocks: [
    { t: 'h', text: 'フラッシュ同士、勝つのは？' },
    {
      t: 'showdown',
      q: 'どちらもフラッシュ完成。勝つのは？',
      board: ['Kh', '9h', '2c', 'Qh', '4s'],
      players: [{ label: 'あなた', cards: ['6h', '5h'] }, { label: '相手', cards: ['Ah', 'Tc'] }],
      explain: 'A ハイのフラッシュが勝ちます。完成した瞬間が一番危険で、大きく賭けるほど大きく負けます。',
    },
    {
      t: 'p',
      text: '手が完成したのに、後で大きく負ける見込みを**逆インプライドオッズ**と言います。勝つときは小さく、負けるときは大きくなります。',
    },
    {
      t: 'equity',
      players: [{ label: '6♥5♥', cards: ['6h', '5h'], pct: 49 }, { label: 'A♥T♣', cards: ['Ah', 'Tc'], pct: 51 }],
      board: ['Kh', '9h', '2c'],
      caption: 'フロップ時点。ナッツフラッシュドローを持つ相手に、低いフラッシュドローはリードできません。',
    },
    {
      t: 'quiz',
      q: 'ボードにハートが2枚。逆インプライドオッズが最も大きいフラッシュドローはどれ？',
      board: ['Qh', '8h', '2c'],
      options: ['A♥5♥', 'K♥J♥', '4♥3♥'],
      optionCards: [['Ah', '5h'], ['Kh', 'Jh'], ['4h', '3h']],
      answer: 2,
      explain: '4・3のフラッシュは完成しても上のフラッシュに負けやすく、そのとき大きなポットを失います。',
    },
    { t: 'h', text: 'トップペア・弱いキッカー' },
    {
      t: 'combos',
      groups: [
        { label: 'あなたに勝っている A', hands: ['AK', 'AQ', 'AJ', 'AT', 'A9'] },
        { label: 'あなたに負けている A', hands: ['A8', 'A6', 'A5', 'A3', 'A2'] },
      ],
      dead: ['As', '9d', '4c', 'Ah', '7d'],
      caption: 'ボード A♠9♦4♣、自分は A♥7♦。弱い相手は降り、強い A だけが最後まで払ってきます。',
    },
    {
      t: 'order',
      q: '強い順にタップ',
      board: ['As', '9d', '4c', 'Jh', '2s'],
      hands: [
        { label: 'A♣K♣', cards: ['Ac', 'Kc'] },
        { label: 'A♥7♦', cards: ['Ah', '7d'] },
        { label: 'A♦5♣', cards: ['Ad', '5c'] },
        { label: '9♥9♣', cards: ['9h', '9c'] },
      ],
      explain: '99 はセット。A のワンペア同士はキッカーで決まり、AK > A7 > A5 です。',
    },
    {
      t: 'p',
      text: '下側で完成するストレートも同じです。T-9 のボードで 87 が J を引いても、KQ や Q8 には上のストレートが完成しています。',
    },
    { t: 'h', text: '対策' },
    {
      t: 'list',
      items: [
        'ドミネートされやすい手（UTG のオープンに対する A9o・KTo など）を避ける',
        '低いドローは、完成しても大きなポットにしすぎない',
        '弱いキッカーのトップペアは、ベットが続くほど評価を下げる',
      ],
    },
    {
      t: 'play',
      title: 'BB で A7o のトップペア',
      hero: 'BB',
      heroCards: ['Ah', '7d'],
      villain: 'BTN',
      villainCards: ['Ac', 'Jd'],
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'BTN が 2.5bb でオープン、SB はフォールド。あなたは BB でコールしました。' },
        {
          street: 'フロップ',
          board: ['As', '9d', '4c'],
          pot: 7.3,
          say: 'トップペア・キッカー7。あなたはチェック、BTN がポット5.5bbに **1.8bb** ベット。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'BTN の広いレンジには十分勝っています。' },
            { label: 'コール', good: true, why: '1回目の小さいベットには、まだ勝っていることが多い手です。' },
          ],
        },
        {
          street: 'ターン',
          board: ['2h'],
          pot: 15.1,
          say: 'ターンは **2♥**。あなたはチェック、BTN がポット9.1bbに **6bb** ベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: '2回目のベットまではまだ見られます。レンジの上側には負けていますが、降りすぎると付け込まれます。' },
            { label: 'オールイン', good: false, why: '降りる手は弱い手だけ、払う手は上の A だけになります。' },
          ],
        },
        {
          street: 'リバー',
          board: ['Kd'],
          pot: 42.1,
          say: 'リバーは **K♦**。あなたはチェック、BTN がポット21.1bbに **21bb**（ポットサイズ）ベット。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: true, why: 'ドローのない乾いたボードで3回目の大きなベット。A7 に勝っている A やツーペアが中心です。' },
            { label: 'コール', good: false, why: '必要勝率は約33%。ブラフが少ないボードなので届きにくく、接戦寄りですが降りが基本です。' },
          ],
        },
      ],
      outro: '相手は AJ でした。弱いキッカーのトップペアは、小さく勝って大きく負けやすい手です。',
    },
    { t: 'try', text: 'エクイティ計算で、ドミネートされた手の勝率を確かめる', tab: 'equity' },
  ],
};

export default lesson;
