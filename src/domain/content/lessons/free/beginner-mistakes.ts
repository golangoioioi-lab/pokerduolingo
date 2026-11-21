import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'beginner-mistakes',
  blocks: [
    { t: 'h', text: 'ミスを避けられる？' },
    {
      t: 'play',
      title: 'CO で 9♥8♥',
      hero: 'CO',
      heroCards: ['9h', '8h'],
      villain: 'BTN',
      steps: [
        {
          street: 'プリフロップ', pot: 1.5, say: 'UTG・HJ がフォールド。あなたは CO で **9♥8♥**。', q: 'どうする？',
          options: [
            { label: '1bb でリンプ', good: false, why: '後ろから安くレイズされやすく、主導権も取れません。' },
            { label: '2.5bb にレイズ', good: true, why: 'CO なら 98s はオープンします。参加するならレイズで。' },
            { label: 'フォールド', good: false, why: 'CO では参加できる手です。' },
          ],
        },
        { street: 'フロップ', board: ['Kh', '7h', '2c'], pot: 6.5, say: 'BTN がコール、ブラインドはフォールド。ハートがあと1枚でフラッシュ。あなたも BTN もチェック。' },
        {
          street: 'ターン', board: ['4d'], pot: 13, say: 'ターンは 4♦。あなたがチェックすると、BTN がポットと同じ 6.5bb をベット。', q: 'フラッシュドローでどうする？',
          options: [
            { label: 'フォールド', good: true, why: '完成率は約20%、必要勝率は33%。届きません。' },
            { label: 'コール', good: false, why: '「当たるかも」で追うと長い目で損をします。完成してもより強いフラッシュに負けることがあります。' },
          ],
        },
      ],
      outro: 'リンプせずにレイズ、オッズに合わないドローは降りる。2つのミスを避けました。',
    },
    { t: 'h', text: '参加しすぎ・リンプ' },
    {
      t: 'compare',
      left: { title: 'リンプ', points: ['1bb だけ払う', '後ろから安くレイズされやすい', '主導権が取れない'], verdict: 'bad' },
      right: { title: '2.5bb にレイズ', points: ['相手を降ろして勝てる', '主導権を持ってフロップへ', '参加する手を絞れる'], verdict: 'good' },
      caption: '参加するなら、リンプよりレイズです。',
    },
    { t: 'range', spot: 'rfi-utg', caption: 'UTG から参加する手の目安。思ったより少ないはずです。' },
    { t: 'h', text: 'オッズを無視したドロー追い' },
    {
      t: 'outs',
      q: 'リバーでフラッシュになるカードを全部タップ。',
      hand: ['9h', '8h'],
      board: ['Kh', '7h', '2c', '4d'],
      target: 'フラッシュ',
      explain: 'ハートは13枚。見えている4枚を引いて9枚です。',
    },
    {
      t: 'estimate',
      q: 'アウツ9枚、見えていないカード46枚。リバーで完成する確率は？',
      hand: ['9h', '8h'],
      board: ['Kh', '7h', '2c', '4d'],
      min: 0, max: 60, step: 1, unit: '%', answer: 19.6, tolerance: 4,
      explain: '9 ÷ 46 ≈ 19.6%。フロップから2枚見られるときの約35%と混同しないこと。',
    },
    { t: 'odds', pot: 6.5, bet: 6.5, equity: 19.6, caption: 'ポットと同じ額のベットには 33% の勝率が必要。19.6% では足りません。' },
    { t: 'h', text: 'コールしすぎ・スロープレイしすぎ' },
    {
      t: 'compare',
      left: { title: '毎回スロープレイ', points: ['強い手でチェックやコールだけ', '払ってくれたはずの相手から取り逃す'], verdict: 'bad' },
      right: { title: '基本はベット', points: ['コールされるうちに価値を取る', 'ポットが大きくなる'], verdict: 'good' },
      caption: '強い手ほどベットします。「勝っているかも」でのコールの続けすぎも損のもとです。',
    },
    {
      t: 'rapid',
      q: 'よい判断？ それともミス？',
      choices: ['よい', 'ミス'],
      items: [
        { text: 'UTG で K8o をリンプ', answer: 1, why: 'UTG では参加しない手。参加するならレイズです。' },
        { text: 'CO で A♦T♠ を 2.5bb にレイズ', answer: 0 },
        { text: '必要勝率 33% で、完成率 20% のドローをコール', answer: 1, why: '勝率が足りません。' },
        { text: 'とても強い手で毎回チェックだけ', answer: 1, why: '価値を取り逃します。' },
        { text: 'コール前に必要勝率と勝率を比べる', answer: 0 },
        { text: 'どの席でも同じ手で参加する', answer: 1, why: '前の席ほど手を絞ります。' },
        { text: 'BTN では UTG より広く参加する', answer: 0 },
        { text: '小さなペアで大きなベットに何度もコール', answer: 1, why: 'コールでは相手を降ろせません。' },
      ],
    },
  ],
};

export default lesson;
