import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-14',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。BTN でオープンし、BB がコール。セカンドペアのような中くらいの手で、ポットを小さく保って薄いバリューを取ります。' },
    {
      t: 'play',
      title: 'BTN で A♥7♥',
      hero: 'BTN',
      heroCards: ['Ah', '7h'],
      villain: 'BB',
      villainCards: ['7c', '6c'],
      steps: [
        {
          street: 'フロップ', board: ['Qs', '7d', '3c'], pot: 5.5,
          say: 'あなたは BTN で **A♥7♥** を 2.5bb にオープンし、BB がコール。7 のセカンドペアで、BB はチェック。',
          q: 'どうする？',
          options: [
            { label: '2bb をベット', good: false, why: 'コールされるのは Qx や良い 7x が中心で、弱い手は降ります。' },
            { label: 'チェックで回す', good: true, why: 'ポットを小さく保ったまま、ショーダウンに近づけます。' },
            { label: '5bb をベット', good: false, why: '勝っている弱い手を降ろし、負けている手にだけ払います。' },
          ],
        },
        {
          street: 'ターン', board: ['4s'], pot: 9,
          say: 'ターンは **4♠**。BB が 3.5bb（約64%）をベット。BTN のチェックを見て、弱い手やドローでも打ってくる場面です。',
          q: 'どうする？',
          options: [
            { label: 'フォールド', good: false, why: 'BB の打つ手にはドローやブラフが多く、A7 はそれらに勝っています。' },
            { label: 'コール', good: true, why: '必要勝率は 28%。相手のブラフを残したまま進めます。' },
            { label: '11bb にレイズ', good: false, why: 'ドローやブラフは降り、Qx 以上にだけコールされます。' },
          ],
        },
        {
          street: 'リバー', board: ['9h'], pot: 12.5,
          say: 'スペードは外れました。BB はチェック。残っているのは 87・76 や小さいペア、外れたドローです。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: '負けは減りますが、弱い手から取れる分を逃します。' },
            { label: '4bb（約3分の1）をベット', good: true, why: '87・76・小さいペアが「ブラフかも」とコールできる額です。' },
            { label: '12bb（ポットサイズ）をベット', good: false, why: '弱い手は降り、残るのは強い手だけです。' },
          ],
        },
      ],
      outro: 'BB は弱いキッカーの 7 でコール。小さく打ったことで、負けている手から 4bb を取れました。',
    },
    { t: 'h', text: '振り返り' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 5.5, actions: ['BTN（あなた）2.5bb オープン', 'BB コール'] },
        { street: 'フロップ', board: ['Qs', '7d', '3c'], pot: 5.5, actions: ['BB チェック', 'あなた チェック'] },
        { street: 'ターン', board: ['4s'], pot: 5.5, actions: ['BB 3.5bb ベット', 'あなた コール'] },
        { street: 'リバー', board: ['9h'], pot: 12.5, actions: ['BB チェック', 'あなた 4bb ベット', 'BB コール'] },
        { street: 'ショーダウン', pot: 20.5, actions: ['A7 が 76 にキッカーで勝つ'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    {
      t: 'estimate', q: 'ターンで BB の 3.5bb をコールするのに必要な勝率は約何%？',
      hand: ['Ah', '7h'], board: ['Qs', '7d', '3c', '4s'],
      min: 0, max: 60, step: 1, unit: '%', answer: 28, tolerance: 6,
      explain: '3.5 ÷（5.5 + 3.5 + 3.5）= 3.5 ÷ 12.5 = 28% です。',
    },
    {
      t: 'tree',
      root: 'リバー、ポット 12.5bb。A7 で 4bb を打つか、チェックか（数字は目安）',
      options: [
        {
          label: '4bb をベット',
          outcomes: [
            { label: 'BB がフォールド（もともと勝っていた手）', prob: 0.35, value: 12.5 },
            { label: '弱い手がコール', prob: 0.4, value: 16.5 },
            { label: '強い手がコール・レイズ', prob: 0.25, value: -4 },
          ],
        },
        {
          label: 'チェック',
          outcomes: [
            { label: 'ショーダウンで勝つ', prob: 0.75, value: 12.5 },
            { label: 'ショーダウンで負ける', prob: 0.25, value: 0 },
          ],
        },
      ],
      caption: '勝っている 75% のうち 40% 分が追加で 4bb 払うので、ベットの方が約 0.6bb 得です。',
    },
    { t: 'h', text: 'リバーが変わったら？' },
    {
      t: 'rapid',
      q: '同じ流れで、リバーだけ違います。BB がチェック。A♥7♥ で小さくベットする？',
      choices: ['小さくベット', 'チェック'],
      items: [
        { cards: ['Ah', '7h'], board: ['Qs', '7d', '3c', '4s', '9h'], answer: 0, why: '何も完成していません。弱い 7x や小さいペアが払います。' },
        { cards: ['Ah', '7h'], board: ['Qs', '7d', '3c', '4s', 'Ks'], answer: 1, why: 'スペードのフラッシュが完成。コールされるのは強い手だけです。' },
        { cards: ['Ah', '7h'], board: ['Qs', '7d', '3c', '4s', 'Ad'], answer: 0, why: 'A のツーペアに改善。より多くの手から取れます。' },
        { cards: ['Ah', '7h'], board: ['Qs', '7d', '3c', '4s', '5c'], answer: 1, why: '6x や A2 のストレートが完成しました。' },
        { cards: ['Ah', '7h'], board: ['Qs', '7d', '3c', '4s', 'Td'], answer: 0, why: '完成したドローはほぼなく、状況は 9♥ と同じです。' },
        { cards: ['Ah', '7h'], board: ['Qs', '7d', '3c', '4s', '8s'], answer: 1, why: 'スペードのフラッシュが完成しました。' },
        { cards: ['Ah', '7h'], board: ['Qs', '7d', '3c', '4s', 'Jh'], answer: 0, why: '完成したドローはほぼありません。' },
      ],
    },
    { t: 'tip', text: '中くらいの手は、ポットを小さく保ち、最後に弱い手が払える額だけ打ちます。ドローが完成したリバーではチェックに戻します。' },
  ],
};

export default lesson;
