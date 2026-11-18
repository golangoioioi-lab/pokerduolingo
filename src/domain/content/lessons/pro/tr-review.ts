import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'tr-review',
  blocks: [
    {
      t: 'p',
      text: '1つのハンドをターンからリバーまで通して考えます。各ストリートで、カードの分類、サイズ、相手のレンジ、MDFの順に確認します。',
    },
    { t: 'h', text: 'ハンドの流れ' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 1.5, actions: ['BTN（K♠Q♠）2.5bbオープン', 'SBフォールド', 'BBコール'] },
        { street: 'フロップ', board: ['Qd', '8c', '4h'], pot: 5.5, actions: ['BBチェック', 'BTN 1.8bbベット', 'BBコール'] },
        { street: 'ターン', board: ['2s'], pot: 9.1, actions: ['BBチェック', 'BTN 6bbベット', 'BBコール'] },
        { street: 'リバー', board: ['Kc'], pot: 21.1, actions: ['BBチェック', 'BTNはどうする？'] },
      ],
      caption: 'BTNはK♠Q♠。フロップでトップペア、リバーで2ペアになった',
    },
    { t: 'h', text: 'ターン2♠：ブリック' },
    {
      t: 'p',
      text: '2♠は何も完成させないブリックで、BTNの優位がそのまま残ります。K♠Q♠はトップペアの良いキッカーなので、2/3ポットの6bbでバリューベットを続けます。BBの必要勝率は約28%、MDFは約60%です。',
    },
    { t: 'h', text: 'リバーK♣：だれに有利か' },
    {
      t: 'p',
      text: 'BBはAK・KK・KQsの多くをプリフロップで3betしているので、Kで強くなる手は少なめです。BTNに有利なカードで、K♠Q♠は2ペアになりました。BBにはQx・8x・外れたドロー（JT・T9・76s）が残っています。',
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
      t: 'p',
      text: 'BTNのレンジは2ペア以上とブラフにポラライズしているので、3/4ポット以上のサイズが合います。QJのような中くらいの手はチェックで返します。',
    },
    { t: 'h', text: 'BB側から見たリバー' },
    {
      t: 'odds',
      pot: 21.1,
      bet: 16,
      equity: 25,
      caption: 'BBのQTなど（BTNのリバーベットレンジに対して勝率25%前後、目安）',
    },
    {
      t: 'p',
      text: 'BBの必要勝率は約30%、MDFは約57%。線の近くのQxはブロッカーで選びます。QTやQ9sはBTNのブラフ（JT・T9）を減らすので降り寄り、Q5sやQ6sはコール寄りです。',
    },
    {
      t: 'quiz',
      q: 'このターン2♠の分類は？',
      board: ['Qd', '8c', '4h', '2s'],
      options: ['ブリック', 'ドロー完成', 'オーバーカード', 'ペアになるカード'],
      answer: 0,
      explain: '2♠はストレートもフラッシュも完成させず、ペアにもなりません。フロップの力関係を変えないブリックです。',
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
      explain: '21.1 ÷ (21.1 + 16) = 21.1 ÷ 37.1 ≈ 57% です。30%はBBの必要勝率です。',
    },
    {
      t: 'quiz',
      q: 'リバーでBTNがQJ（トップペア）を持っていたら、よくある判断は？',
      hand: ['Qh', 'Jh'],
      board: ['Qd', '8c', '4h', '2s', 'Kc'],
      options: ['チェックで返してショーダウン', '3/4ポットのバリューベット', 'オーバーベット', 'ブラフとして打つ'],
      answer: 0,
      explain: 'QJはBBのQxの一部に勝ち、Kxや2ペアには負けます。打つと強い手にだけコールされやすいので、チェックで返す中くらいの手です。',
    },
    {
      t: 'quiz',
      q: 'BBがリバーで3/4ポットを打たれた。線の近くで、最もコールに向くQxは？',
      board: ['Qd', '8c', '4h', '2s', 'Kc'],
      options: ['Q♠T♠', 'Q♠9♠', 'Q♠5♠', 'Q♠J♠'],
      optionCards: [['Qs', 'Ts'], ['Qs', '9s'], ['Qs', '5s'], ['Qs', 'Js']],
      answer: 2,
      explain: 'T・9・JはBTNのブラフになる外れたドロー（JT・T9など）をブロックします。Q♠5♠はブラフを何も減らさないので、コール時の勝率が高くなります。',
    },
    {
      t: 'tip',
      title: '講座のまとめ',
      text: 'ターンはカードの分類から、リバーはサイズとレンジの形から考えます。守る側はMDFで線を引き、線の近くはブロッカーで決めます。',
    },
  ],
};

export default lesson;
