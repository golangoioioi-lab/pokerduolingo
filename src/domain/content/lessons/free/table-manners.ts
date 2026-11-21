import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'table-manners',
  blocks: [
    { t: 'h', text: 'ライブの卓で1ハンド' },
    {
      t: 'play',
      title: 'ライブで K♦Q♦',
      hero: 'HJ',
      heroCards: ['Kd', 'Qd'],
      villain: 'BB',
      steps: [
        {
          street: 'プリフロップ', pot: 1.5, say: 'あなたは HJ で **K♦Q♦**。前の UTG がまだ考えています。', q: 'どうする？',
          options: [
            { label: 'UTG の行動を待つ', good: true, why: '自分の番が来るまで動きません。' },
            { label: '先に「レイズ」と言う', good: false, why: '順番外の行動です。UTG の判断を変えてしまい、宣言が有効になる場合もあります。' },
          ],
        },
        {
          street: 'プリフロップ', pot: 1.5, say: 'UTG がフォールドし、あなたの番。2.5bb にレイズしたい。', q: 'どう出す？',
          options: [
            { label: '「レイズ 2.5」と言ってから出す', good: true, why: '宣言が先なら額がはっきりします。' },
            { label: '黙って出し、手を戻してから追加', good: false, why: 'ストリングベット。最初の分だけ有効とされることが多いです。' },
            { label: '大きいチップを黙って1枚出す', good: false, why: '多くの場所でコール扱いになります。' },
          ],
        },
        {
          street: 'フロップ', board: ['Kc', '8h', '4s'], pot: 5.5, say: 'BB だけがコール。BB がチェックし、あなたが 3bb ベット。BB はフォールドしました。', q: 'BB に「何持ってたの？」と聞かれた。',
          options: [
            { label: '見せなくてよい', good: true, why: '相手が降りたら、手札を見せる義務はありません。' },
            { label: '見せなければならない', good: false, why: 'ショーダウン前に全員降りたら、見せずにポットを取れます。' },
          ],
        },
      ],
      outro: '自分の番を待つ、宣言してから出す。ライブではこの2つが基本です。',
    },
    { t: 'p', text: '細かい規定は店やサイトで違います。ここでは多くの場所で共通する基本を紹介します。' },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: '考え中' },
        { pos: 'HJ', action: '先にフォールド → 順番外', folded: true },
        { pos: 'CO' },
        { pos: 'BTN' },
        { pos: 'SB' },
        { pos: 'BB' },
      ],
      caption: '前の人より先に動くと、手の内を教えてしまいます。',
    },
    {
      t: 'compare',
      left: { title: '正しいベット', points: ['先に「レイズ 12」と宣言', 'または一度の動作で全額を出す'], verdict: 'good' },
      right: { title: 'ストリングベット', points: ['黙って出す', '手を戻してから追加', '多くの場所で無効'], verdict: 'bad' },
      caption: 'ライブでは宣言が先です。',
    },
    { t: 'h', text: 'カードの扱いとオンライン' },
    {
      t: 'list',
      items: [
        'ハンド中は手札を見せない・話さない。降りた後もそのハンドにコメントしない',
        '手札の上にチップを置き、誤って捨てられないようにする',
        'ショーダウンで勝っていると思ったら表にして見せる',
      ],
    },
    {
      t: 'compare',
      left: { title: 'ライブ', points: ['口頭の宣言が有効', 'チップの出し方に決まりがある'], verdict: 'neutral' },
      right: { title: 'オンライン', points: ['時間切れで自動チェックかフォールド', 'タイムバンクは必要なときだけ'], verdict: 'neutral' },
      caption: '場所によって気をつける点が変わります。',
    },
    {
      t: 'rapid',
      q: 'マナーとして OK？',
      choices: ['OK', 'NG'],
      items: [
        { text: '前の人が考え中に、先にカードを捨てる', answer: 1, why: '順番外の行動です。' },
        { text: '「コール」と言ってからチップを出す', answer: 0 },
        { text: '降りた後、続いているハンドで「K を捨てた」と話す', answer: 1, why: '残っている人の判断を変えてしまいます。' },
        { text: '手札の上にチップを置いておく', answer: 0 },
        { text: '勝ったと思い、手札を見せずに捨てる', answer: 1, why: '読み違いだと取り戻せません。表にして見せます。' },
        { text: '黙って2回に分けてチップを出す', answer: 1, why: 'ストリングベットです。' },
        { text: 'オンラインで難しい場面だけタイムバンクを使う', answer: 0 },
        { text: 'チャットで他の人のプレイを責める', answer: 1 },
        { text: '1人で複数のアカウントを使う', answer: 1, why: 'ほとんどのサイトで禁止です。' },
      ],
    },
  ],
};

export default lesson;
