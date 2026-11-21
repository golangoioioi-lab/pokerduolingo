import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'flow-and-hands',
  blocks: [
    { t: 'h', text: 'どちらが勝つ？' },
    {
      t: 'showdown',
      q: 'リバーまで開いた。勝つのは？',
      board: ['Kd', '7h', '2h', '9c', 'Qh'],
      players: [
        { label: 'あなた', cards: ['Ah', 'Kh'] },
        { label: '相手', cards: ['Qs', 'Qd'] },
      ],
      explain: 'あなたはハート5枚でフラッシュ。相手は Q のスリーカード。フラッシュのほうが強い役です。',
    },
    { t: 'h', text: '1ハンドの流れ' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 1.5, actions: ['SB・BB が強制ベット', '手札2枚が配られ、UTG から行動'] },
        { street: 'フロップ', board: ['Kd', '7h', '2h'], actions: ['ボードが3枚開く。SB から行動'] },
        { street: 'ターン', board: ['9c'], actions: ['4枚目が開く'] },
        { street: 'リバー', board: ['Qh'], actions: ['5枚目。最後のベッティングラウンド'] },
        { street: 'ショーダウン', actions: ['残った人で役を比べる'] },
      ],
      caption: 'ボードは合計5枚。手札2枚と合わせた7枚から5枚を使います。',
    },
    {
      t: 'equity',
      players: [{ label: 'A♥K♥', cards: ['Ah', 'Kh'], pct: 96 }, { label: 'Q♠Q♦', cards: ['Qs', 'Qd'], pct: 4 }],
      board: ['Kd', '7h', '2h'],
      caption: 'フロップ時点では AK がほぼ勝ち。リバーの Q で QQ はスリーカードになりましたが、フラッシュには届きません。',
    },
    { t: 'h', text: '役の強さ（強い順）' },
    {
      t: 'table',
      head: ['役', '例'],
      rows: [
        ['ストレートフラッシュ', '9♥ T♥ J♥ Q♥ K♥'],
        ['フォーカード', 'A A A A + 1枚'],
        ['フルハウス', 'K K K + 7 7'],
        ['フラッシュ', '同じスート5枚'],
        ['ストレート', '5 6 7 8 9（A-2-3-4-5 も可）'],
        ['スリーカード', 'Q Q Q + 2枚'],
        ['ツーペア', 'J J + 4 4 + 1枚'],
        ['ワンペア', '8 8 + 3枚'],
        ['ハイカード', '役なし'],
      ],
    },
    {
      t: 'order',
      q: '強い順にタップしてください。',
      board: ['Kd', '7h', '2h', '9c', 'Qh'],
      hands: [
        { label: 'A3', cards: ['Ah', '3h'] },
        { label: 'QQ', cards: ['Qs', 'Qd'] },
        { label: 'K5', cards: ['Kc', '5d'] },
        { label: 'JT', cards: ['Js', 'Ts'] },
      ],
      explain: 'A3 はフラッシュ、JT は 9-T-J-Q-K のストレート、QQ はスリーカード、K5 は K のワンペアです。',
    },
    { t: 'warn', title: '同じ役のとき', text: '役を作るカード → 残りのカード（キッカー）の順に比べます。5枚がまったく同じなら引き分け（スプリット）です。' },
    {
      t: 'showdown',
      q: 'AQ と AJ。勝つのは？',
      board: ['As', '9d', '8c', '8h', '3s'],
      players: [
        { label: 'あなた', cards: ['Ah', 'Qd'] },
        { label: '相手', cards: ['Ad', 'Jh'] },
      ],
      explain: 'どちらも A A 8 8 のツーペア。5枚目は Q と J なので AQ の勝ちです。',
    },
    {
      t: 'showdown',
      q: 'ボードが変わった。勝つのは？',
      board: ['As', 'Kd', '8c', '8h', '3s'],
      players: [
        { label: 'あなた', cards: ['Ah', 'Qd'] },
        { label: '相手', cards: ['Ad', 'Jh'] },
      ],
      explain: '最高の5枚はどちらも A A 8 8 K。Q や J は使われないので引き分けです。',
    },
    { t: 'h', text: '通しで遊ぶ' },
    {
      t: 'play',
      title: 'BTN で A♥K♥',
      hero: 'BTN',
      heroCards: ['Ah', 'Kh'],
      villain: 'BB',
      villainCards: ['Qs', 'Qd'],
      steps: [
        {
          street: 'プリフロップ', pot: 1.5, say: 'CO までフォールド。あなたは BTN で **A♥K♥**。', q: 'どうする？',
          options: [
            { label: '2.5bb にレイズ', good: true, why: 'AK は最上位クラスの手です。' },
            { label: 'フォールド', good: false, why: '降りる理由のない強い手です。' },
          ],
        },
        {
          street: 'フロップ', board: ['Kd', '7h', '2h'], pot: 5.5, say: 'BB がコール。K のペアと、ハートがあと1枚でフラッシュ。BB はチェック。', q: 'どうする？',
          options: [
            { label: '3bb ベット', good: true, why: '一番上のペアです。弱いペアから払ってもらえます。' },
            { label: 'チェック', good: false, why: '悪くはありませんが、取れる額が減ります。' },
          ],
        },
        { street: 'ターン', board: ['9c'], pot: 25.5, say: 'BB はコール。ターンもあなたが 7bb ベットし、BB がコール。' },
        {
          street: 'リバー', board: ['Qh'], pot: 42.5, say: 'リバーは Q♥。BB が 17bb をベットしてきました。', q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'あなたはフラッシュ。この場では最強の手です。' },
            { label: 'コール', good: true, why: '勝てる手ですが、レイズでさらに取れる可能性があります。' },
            { label: 'レイズ', good: true, why: 'ボードにペアがなく、A ハイのフラッシュより強い手はありません。' },
          ],
        },
      ],
      outro: '役が完成するのはリバーかもしれません。最後の5枚目まで、役の強さで考えます。',
    },
  ],
};

export default lesson;
