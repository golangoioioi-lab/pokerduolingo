import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'live-table-flow',
  blocks: [
    { t: 'h', text: 'ライブの進行、知っている？' },
    { t: 'rapid', q: '正しい？ まちがい？', choices: ['正しい', 'まちがい'], items: [
      { text: 'ボタンは毎ハンド、時計回りに1つ動く', answer: 0 },
      { text: '空いている席には、黙って座ってよい', answer: 1, why: 'まず受付で待ちリストに名前を書きます。' },
      { text: 'フロップの前に、ディーラーが1枚捨てる（バーン）', answer: 0 },
      { text: 'プリフロップは BB から行動する', answer: 1, why: 'BB の左（UTG）から行動します。' },
      { text: 'SB は0.5bb、BB は1bb をポストする', answer: 0 },
      { text: '行動はディーラーが代わりに決める', answer: 1, why: '行動は自分の声とチップで示します。' },
      { text: 'フロップ以降は、ボタンの左の残っている人から行動', answer: 0 },
    ] },
    { t: 'h', text: '座るまで' },
    { t: 'list', items: ['受付でゲームとステークスを選び、待ちリストに名前を書く', 'バイインの上限と下限を確認する（100bbが上限のことが多い）', '呼ばれたら座り、チップを受け取る'] },
    { t: 'h', text: '1ハンドの流れ' },
    { t: 'p', text: 'ディーラーは配ってポットを管理します。行動を示すのはあなた自身です。' },
    { t: 'timeline', steps: [{ street: 'プリフロップ', pot: 1.5, actions: ['SBとBBがポスト', '2枚ずつ配る', 'UTGから時計回りに行動'] }, { street: 'フロップ', board: ['Ks', '7d', '2c'], pot: 6.5, actions: ['1枚バーン', '3枚を開く', 'ボタンの左の残り手から行動'] }, { street: 'ターン', board: ['9h'], pot: 12.5, actions: ['バーン後に1枚'] }, { street: 'リバー', board: ['3s'], pot: 12.5, actions: ['バーン後に1枚', '終わればショーダウン'] }], caption: 'ポットの数字は例です。' },
    { t: 'seats', seats: [{ pos: 'UTG', action: '最初に行動' }, { pos: 'HJ' }, { pos: 'CO' }, { pos: 'BTN', action: 'ボタン' }, { pos: 'SB', action: '0.5bb', bet: 0.5 }, { pos: 'BB', action: '1bb', bet: 1 }], pot: 1.5, caption: 'ボタンが動くと、全員の役割が1つずつ変わります。' },
    { t: 'quiz', q: 'ディーラーがこのフロップを開く直前に行うことは？', options: ['バーン（1枚を捨てる）', 'シャッフルし直す', 'チップを集める', '何もしない'], answer: 0, explain: '不正を防ぐため、各ストリートの前に1枚バーンします。', board: ['Ks', '7d', '2c'] },
    { t: 'estimate', q: 'SBとBBがポストした直後、ポットは何bb？', min: 0, max: 5, step: 0.5, unit: 'bb', answer: 1.5, tolerance: 0.25, explain: '0.5 + 1 = 1.5bb です。' },
    { t: 'h', text: 'やってみよう：順番を追う' },
    { t: 'play', title: 'CO で AK', hero: 'CO', heroCards: ['As', 'Kd'], villain: 'BB', villainCards: ['Kc', 'Jc'], steps: [
      { street: 'プリフロップ', pot: 1.5, say: 'UTGとHJがフォールド。あなたの番です。', q: 'どうする？', options: [
        { label: '「レイズ、3bb」と言ってチップを出す', good: true, why: '声とチップで、はっきり行動を示します。' },
        { label: 'フォールド', good: false, why: 'AK は強い手です。' }] },
      { street: 'フロップ', board: ['Ks', '7d', '2c'], pot: 6.5, say: 'BB だけがコール。ディーラーが1枚バーンして、フロップを開きました。', q: '先に行動するのは？', options: [
        { label: 'BB', good: true, why: 'フロップ以降は、ボタンの左から残っている人の順です。' },
        { label: 'あなた（CO）', good: false, why: 'CO は BB より後に動きます。' }] },
      { street: 'フロップ', pot: 6.5, say: 'BB はチェック。', q: 'トップペア。どうする？', options: [
        { label: '3bb ベット', good: true, why: '弱い K や7から払ってもらえます。' },
        { label: 'チェック', good: false, why: '価値を取る機会を逃します。' }] },
      { street: 'ターン', board: ['9h'], pot: 12.5, say: 'BB がコール。ターンは**9**。お互いチェック。' },
      { street: 'リバー', board: ['3s'], pot: 12.5, say: 'リバーは**3**。お互いチェックで終わりました。', q: '最初にカードを見せるのは？', options: [
        { label: 'BB（先に行動する人）', good: true, why: 'リバーで賭けがなければ、先に行動する人から見せます。' },
        { label: 'あなた（CO）', good: false, why: '賭けがないときは、ボタンの左に近い人からです。' }] },
    ], outro: 'ボタンの位置で行動の順番が決まります。ショーダウンの順番も同じ考え方です。' },
  ],
};

export default lesson;
