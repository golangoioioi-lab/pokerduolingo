import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'opp-live-reads',
  blocks: [
    { t: 'h', text: 'まず読んでみる' },
    {
      t: 'rapid',
      q: 'ショーダウンで見えた手と、その手での行動。この相手はタイト寄り？ルース寄り？',
      choices: ['タイト寄り', 'ルース寄り'],
      items: [
        { cards: ['Kh', '4c'], text: 'UTG からオープン', answer: 1, why: 'UTG は参加を絞る席です。K4o で入るのはルースです。' },
        { cards: ['As', 'Ks'], text: 'UTG からオープン', answer: 0 },
        { cards: ['Qs', '8d'], text: 'UTG からリンプ', answer: 1 },
        { cards: ['Qd', 'Qc'], text: 'HJ から3bet', answer: 0 },
        { cards: ['7s', '3s'], text: 'CO で3betにコール', answer: 1, why: '3betに 73s でコールするのはかなり広いです。' },
        { cards: ['Ah', 'Qh'], text: 'UTG からオープン', answer: 0 },
        { cards: ['9c', '5d'], text: 'SB からコールして最後まで', answer: 1 },
      ],
    },
    { t: 'p', text: 'スタッツがなくても、**参加の頻度**、**ベットのサイズ**、**ショーダウンの手**の3つで相手は分類できます。' },
    { t: 'h', text: '数えるだけで VPIP が分かる' },
    {
      t: 'table',
      head: ['30ハンドでの参加回数', 'VPIP の目安', '仮のタイプ'],
      rows: [
        ['3〜4回', '10〜13%', 'ニット・タイト'],
        ['6〜8回', '20〜27%', 'レギュラー寄り'],
        ['12回以上', '40%以上', 'ルース（ステーションか LAG）'],
      ],
    },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: '30回中 3回参加' },
        { pos: 'HJ', action: '7回' },
        { pos: 'CO', action: '13回' },
        { pos: 'BTN', hero: true, action: 'あなた' },
        { pos: 'SB', action: '8回' },
        { pos: 'BB', action: '4回' },
      ],
      caption: '5周数えただけで、UTG と BB はタイト、CO はルースと分かります。',
    },
    {
      t: 'estimate',
      q: '30 ハンドで 12 回参加している相手の VPIP は約何%？',
      min: 0,
      max: 100,
      step: 5,
      unit: '%',
      answer: 40,
      tolerance: 10,
      explain: '12 ÷ 30 = 40%。ルースな相手と考えられます。',
    },
    { t: 'h', text: 'ショーダウンは最高の情報' },
    {
      t: 'play',
      title: '知らない相手とのハンド',
      hero: 'BTN',
      heroCards: ['As', 'Js'],
      villain: 'UTG',
      villainCards: ['Qs', '8d'],
      steps: [
        {
          street: 'プリフロップ',
          pot: 2.5,
          say: '初めて見る UTG の相手が 1bb でリンプ。あなたは BTN で **A♠J♠**。',
          q: 'どうする？',
          options: [
            { label: 'リンプで続く', good: false, why: '多人数になりやすく、強い手を活かせません。' },
            { label: '4bb にレイズ', good: true, why: 'アイソレートして、ポジションを持って1対1にします。' },
          ],
        },
        {
          street: 'フロップ',
          board: ['Jc', '8h', '3d'],
          pot: 9.5,
          say: 'ブラインドはフォールド、UTG がコール。フロップは **J♣8♥3♦**。トップペア。UTG はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'リンプした相手のレンジには、払ってくれる弱いペアが多くあります。' },
            { label: '5bb ベット', good: true, why: 'バリューベットです。' },
          ],
        },
        { street: 'ターン', board: ['2s'], pot: 19.5, say: 'UTG がコール。ターンは **2♠**。UTG はチェック。あなたは 12bb をベットし、UTG がコール。' },
        {
          street: 'リバー',
          board: ['Qc'],
          pot: 43.5,
          say: 'リバーは **Q♣**。UTG はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: true, why: 'Q で QJ や Q8 に逆転された可能性があります。ショーダウンで手を見ます（接戦）。' },
            { label: '30bb ベット', good: false, why: '払ってくれる手の多くは、今あなたに勝っています。' },
          ],
        },
      ],
      outro: '相手は Q8o。「UTG から Q8o でリンプ、ミドルペアで2回コール」はルースパッシブの典型です。次からはブラフを減らし、バリューを大きくします。',
    },
    { t: 'h', text: 'サイズの癖' },
    {
      t: 'compare',
      left: { title: 'よくある癖：強いと大きく', points: ['ナッツ級でポット以上', 'ドローでは最小のベット'], verdict: 'neutral' },
      right: { title: '逆の癖：強いと小さく', points: ['強い手で呼び込む小さいベット', 'ブラフで大きく脅す'], verdict: 'neutral' },
      caption: 'どちらの癖かは、ショーダウンで一度確認してから使います。',
    },
    {
      t: 'quiz',
      q: 'ライブで相手の手が震えていました。判断材料としての扱いは？',
      options: ['人によって意味が違うので、主な材料にはしない', '必ず強い手', '必ずブラフ'],
      answer: 0,
      explain: '身体のテルは個人差が大きく、強い手で緊張して震える人もいます。行動とサイズを優先します。',
    },
    { t: 'tip', text: 'ショーダウンを見たら「どの席から、どんな手で、どう打ったか」を一言メモします。' },
  ],
};

export default lesson;
