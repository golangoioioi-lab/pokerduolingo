import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'live-vs-online',
  blocks: [
    { t: 'h', text: 'ライブ？ オンライン？' },
    { t: 'rapid', q: 'これはライブとオンライン、どちらの特徴？', choices: ['ライブ', 'オンライン'], items: [
      { text: '1時間に25〜30ハンド', answer: 0, why: 'ディーラーが配り、チップを集めるので遅くなります。' },
      { text: '複数のテーブルを同時に遊べる', answer: 1, why: 'ライブは1テーブルだけです。' },
      { text: '9〜10人卓が多い', answer: 0 },
      { text: '配当とチップ計算が自動', answer: 1, why: 'ライブではチップを自分で数えます。' },
      { text: '相手の表情や動作が見える', answer: 0 },
      { text: '1時間に60〜100ハンド（1テーブル）', answer: 1 },
      { text: 'チップを自分で数えて出す', answer: 0 },
    ] },
    { t: 'p', text: 'ルールは同じです。違うのは**速さ・人数・相手**です。' },
    { t: 'compare', left: { title: 'オンライン（1テーブル）', points: ['1時間に60〜100ハンド', '6人卓が多い', '計算は自動'], verdict: 'neutral' }, right: { title: 'ライブ', points: ['1時間に25〜30ハンド', '9〜10人卓が多い', 'チップは自分で数える'], verdict: 'neutral' }, caption: '数字はいずれも目安です。' },
    { t: 'p', text: 'ハンド数が少ないので、焦って参加を増やす必要はありません。待つ時間は相手を観察する時間です。' },
    { t: 'h', text: '人数が多いとマルチウェイ' },
    { t: 'p', text: 'リンプやコールで入る人が多く、多人数のポットが増えます。スーテッドやペアの価値が上がります。' },
    { t: 'seats', seats: [{ pos: 'UTG', action: 'リンプ 1bb', bet: 1 }, { pos: 'HJ', action: 'リンプ 1bb', bet: 1 }, { pos: 'CO', action: 'フォールド', folded: true }, { pos: 'BTN', action: 'リンプ 1bb', bet: 1 }, { pos: 'SB', action: 'コール', bet: 1 }, { pos: 'BB', hero: true, action: 'チェック', bet: 1, cards: ['Qh', 'Jh'] }], pot: 5, caption: 'ライブでよく見る、リンパーの多いポット。' },
    { t: 'quiz', q: 'リンパーが多いポットで、価値が上がるのはどちら？', options: ['8h7h（スーテッドコネクター）', 'Kd3c（オフスート）'], answer: 0, explain: '多人数ではフラッシュやストレートを作れる手が稼ぎます。K3oはペアを作っても負けやすい手です。', optionCards: [['8h', '7h'], ['Kd', '3c']] },
    { t: 'estimate', q: 'ライブで1時間に遊べるハンド数は、およそ何ハンド？', min: 0, max: 120, step: 5, unit: 'ハンド', answer: 28, tolerance: 8, explain: '25〜30ハンド程度。オンライン1テーブルの半分以下のペースです。' },
    { t: 'tip', title: '法律について', text: '日本国内では、金銭を賭けたポーカーは法律で禁止されています。国内のアミューズメント施設では、チップを換金できない形で遊びます。海外ではその国の法律とルームのルールに従ってください。' },
    { t: 'h', text: 'やってみよう：多人数のポット' },
    { t: 'play', title: 'BB で QJs、リンパー3人', hero: 'BB', heroCards: ['Qh', 'Jh'], villain: 'UTG', villainCards: ['Ts', '9s'], steps: [
      { street: 'プリフロップ', pot: 5, say: 'UTG、HJ、BTNがリンプ。SBもコール。あなたは BB で **Q♥J♥**。', q: 'どうする？', options: [
        { label: 'チェック', good: true, why: '追加の支払いなしで、多人数のフロップを見られます。' },
        { label: 'フォールド', good: false, why: 'タダで見られるのに降りる理由はありません。' }] },
      { street: 'フロップ', board: ['Th', '9h', '3c'], pot: 14, say: '**T-9-3**、ハートが2枚。あなたはチェック。UTGが3bbベットし、2人がコール。', q: 'ストレートとフラッシュの両方を狙えます。どうする？', options: [
        { label: 'コール', good: true, why: '3bbで17bbのポット。アウツが15枚ほどあり、値段は十分です。' },
        { label: 'フォールド', good: false, why: '強いドローを安く捨てることになります。' }] },
      { street: 'ターン', board: ['2c'], pot: 23, say: 'ターンは**2**。あなたはチェック。UTGが6bbベットし、ほかの2人は降りました。', q: 'どうする？', options: [
        { label: 'コール', good: true, why: '必要勝率は約21%。次の1枚で完成する確率は約34%あります。' },
        { label: 'フォールド', good: false, why: '値段に対して勝率が足りています。' }] },
      { street: 'リバー', board: ['8d'], pot: 29, say: 'リバーは**8**。Q-J-T-9-8のストレートが完成。BB のあなたが先に行動します。', q: 'どうする？', options: [
        { label: 'ベット', good: true, why: 'ルーズな相手はツーペアやワンペアでも払ってくれます。' },
        { label: 'チェック', good: false, why: '強い手で稼ぐ機会を逃します。' }] },
    ], outro: 'ライブでは多人数のポットが増えます。スーテッドの手は安く見て、完成したら大きく稼ぎます。' },
  ],
};

export default lesson;
