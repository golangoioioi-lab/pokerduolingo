import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'pos-facing-steal',
  blocks: [
    { t: 'h', text: 'ブラインドを取りに来られたら' },
    { t: 'quiz', q: 'BTN が 2.5bb オープン、SB はフォールド。BB でいちばん降りやすいのは？', options: ['K3o', '76s', 'A5s', '98s'], answer: 0, explain: 'K3o は相手の K に支配され、位置もありません。スーテッドの手は続けやすくなります。', optionCards: [['Kd', '3s'], ['7h', '6h'], ['As', '5s'], ['9h', '8h']] },
    { t: 'p', text: 'BTN や CO のオープンはブラインドを取りに来ている（**スチール**）ことが多く、レンジが広めです。降りすぎると、相手は何でも開けて得をします。' },
    { t: 'seats', seats: [
      { pos: 'UTG', action: 'フォールド', folded: true },
      { pos: 'HJ', action: 'フォールド', folded: true },
      { pos: 'CO', action: 'フォールド', folded: true },
      { pos: 'BTN', action: 'オープン 2.5bb', bet: 2.5 },
      { pos: 'SB', action: 'フォールド', folded: true, bet: 0.5 },
      { pos: 'BB', hero: true, action: '判断', bet: 1, cards: ['Ac', '4c'] },
    ], pot: 4, caption: 'BTN のオープンに BB が直面します。' },
    { t: 'h', text: '3bet・コール・フォールド' },
    { t: 'compare', left: { title: 'BB で A4s を 3bet', cards: ['Ac', '4c'], points: ['A のブロッカーで相手の AA、AK を減らす', 'コールされてもナッツフラッシュの可能性', '降りてくれれば 4bb を獲得'], verdict: 'good' }, right: { title: 'BB で K3o をコール', cards: ['Kd', '3s'], points: ['K を当てても上のキッカーに負ける', 'フロップ以降に戦いにくい', '位置もない'], verdict: 'bad' }, caption: '3bet に向く手と、降りたほうがよい手。' },
    { t: 'p', text: 'SB は後ろに BB がいるので、**3bet かフォールド**。BB は追加が安いので、コールの範囲が広くなります。' },
    { t: 'range', spot: 'bb-vs-btn', caption: 'BB の対応の目安。' },
    { t: 'range', spot: 'sb-vs-btn', caption: 'SB の対応の目安。' },
    { t: 'estimate', q: 'BTN 2.5bb オープンに、BB が 3bet するサイズの目安は？', min: 0, max: 30, step: 0.5, unit: 'bb', answer: 11, tolerance: 2, explain: '位置がない側はオープンの4倍強にして、BTN が安くコールできないようにします。' },
    { t: 'quiz', q: 'BTN 2.5bb オープンに対して、SB（位置なし）の基本的な方針は？', options: ['3bet かフォールドを中心にする', '何でもコール', '何でもオールイン', 'リンプする'], answer: 0, explain: 'SB はコールするとポストフロップで不利です。3bet か降りるかに分けます。' },
    { t: 'h', text: '1ハンドやってみる' },
    { t: 'play', title: 'BB で A4s', hero: 'BB', heroCards: ['Ac', '4c'], villain: 'BTN', steps: [
      { street: 'プリフロップ', pot: 4, say: 'BTN が 2.5bb オープン、SB はフォールド。あなたは BB で **A♣4♣**。', q: 'どうする？', options: [
        { label: '11bb に 3bet', good: true, why: 'A のブロッカー付きのスーテッドは 3bet のブラフ候補です。' },
        { label: 'コール', good: true, why: 'コールでも守れます。3bet と混ぜるのが理想です。' },
        { label: 'フォールド', good: false, why: '安く守れる良い手を捨てています。' },
      ] },
      { street: 'フロップ', board: ['Kc', '8c', '3d'], pot: 22.5, say: 'あなたは 3bet し、BTN がコール。フロップで **ナッツフラッシュドロー**。', q: 'どうする？', options: [
        { label: '8bb ベット', good: true, why: '降ろせる可能性があり、コールされても強いドローがあります。' },
        { label: 'チェックフォールド', good: false, why: '9枚のアウツを持つ強いドローを捨てています。' },
      ] },
      { street: 'フロップ', pot: 30.5, say: 'BTN はフォールド。あなたがポットを獲得しました。' },
    ], outro: 'スチールに対して降りすぎず、3bet も混ぜると、相手は簡単に開けられなくなります。' },
    { t: 'rapid', q: 'BTN が 2.5bb オープン、SB はフォールド。BB で守る（コールか 3bet）？', choices: ['守る', 'フォールド'], items: [
      { cards: ['As', '4s'], answer: 0 },
      { cards: ['Kh', '6d'], answer: 0, why: '追加 1.5bb なら K6o でも守れます。' },
      { cards: ['Jd', '7c'], answer: 1, why: 'J7o は守るには弱すぎます。' },
      { cards: ['7c', '6c'], answer: 0 },
      { cards: ['Tc', '6h'], answer: 1, why: 'T6o はフォールドです。' },
      { cards: ['Qc', 'Jd'], answer: 0 },
      { cards: ['9d', '2d'], answer: 1, why: '92s はスーテッドでも弱すぎます。' },
      { cards: ['Ad', '2h'], answer: 0 },
    ] },
  ],
};

export default lesson;
