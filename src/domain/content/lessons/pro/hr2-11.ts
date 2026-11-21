import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-11',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。BB で 77 を持ち、ドローの多いボードでセットになったときの攻め方を見ます。' },
    {
      t: 'play',
      title: 'BB で 7♠7♦',
      hero: 'BB',
      heroCards: ['7s', '7d'],
      villain: 'CO',
      villainCards: ['As', 'Js'],
      steps: [
        { street: 'プリフロップ', pot: 4, say: 'CO が 2.5bb にオープンし、ほかはフォールド。あなたは BB で **7♠7♦** をコールします。' },
        {
          street: 'フロップ', board: ['Jh', '7c', '3h'], pot: 7.5,
          say: 'セット完成。ハートのフラッシュドローがあります。あなたのチェックに CO が 2bb をベット。',
          q: 'どうする？',
          options: [
            { label: 'コールしてターンで攻める', good: false, why: 'ハートが落ちるとセットでも負けることがあり、先延ばしは危険です。' },
            { label: '8bb にチェックレイズ', good: true, why: 'トップペアや A♥x♥ のドローから、有利なうちにチップを集められます。' },
            { label: '97.5bb のオールイン', good: false, why: '大きすぎて J のペアがほとんど降りてしまいます。' },
          ],
        },
        {
          street: 'ターン', board: ['2s'], pot: 21.5,
          say: 'CO がコール。ターンは **2♠** で、フラッシュは完成しませんでした。あなたが先に行動します。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'ドローに無料でリバーを見せてしまいます。' },
            { label: '14bb（約3分の2）をベット', good: true, why: 'トップペアもドローもコールしやすく、ドローには高い値段になります。' },
            { label: '5bb（約4分の1）をベット', good: false, why: 'ドローに安い値段を与えてしまいます。' },
          ],
        },
        {
          street: 'リバー', board: ['Kd'], pot: 49.5,
          say: 'CO がコール。リバーは **K♦** で、フラッシュは外れました。残りは 75.5bb。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'トップペアから取れるバリューを逃します。' },
            { label: '34bb（約70%）をベット', good: true, why: 'フラッシュが外れたので、トップペアやツーペアがコールできる額です。' },
            { label: '75.5bb のオールイン', good: false, why: 'ポットの1.5倍では AJ や QJ がかなり降ります。' },
          ],
        },
      ],
      outro: 'チェックレイズでポットが早く大きくなり、リバーには大きなバリューベットが打てる状態になりました。',
    },
    { t: 'h', text: '振り返り' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 5.5, actions: ['CO 2.5bb オープン', 'BB（あなた）コール'] },
        { street: 'フロップ', board: ['Jh', '7c', '3h'], pot: 5.5, actions: ['あなた チェック', 'CO 2bb ベット', 'あなた 8bb にチェックレイズ', 'CO コール'] },
        { street: 'ターン', board: ['2s'], pot: 21.5, actions: ['あなた 14bb ベット', 'CO コール'] },
        { street: 'リバー', board: ['Kd'], pot: 49.5, actions: ['あなた 34bb ベット', 'CO コール'] },
        { street: 'ショーダウン', pot: 117.5, actions: ['セットがトップペアに勝つ'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 5.5, stack: 97.5 },
        { label: 'ターン開始', pot: 21.5, stack: 89.5 },
        { label: 'リバー開始', pot: 49.5, stack: 75.5 },
        { label: '決着', pot: 117.5, stack: 41.5 },
      ],
      caption: 'チェックレイズでポットが約4倍になり、ターン・リバーのベットも大きくできました。',
    },
    {
      t: 'estimate', q: 'CO が A♥ 5♥ を持っているとします。ターンとリバーの2枚で、フラッシュが完成する確率は約何%？',
      board: ['Jh', '7c', '3h'],
      min: 0, max: 80, step: 5, unit: '%', answer: 35, tolerance: 10,
      explain: '残りのハートは 13 − 4 = 9 枚、見えていないカードは 47 枚。1 − (38/47 × 37/46) ≒ 35% です。ここで高い値段を払わせる価値があります。',
    },
    { t: 'h', text: 'ドローのアウツを数える' },
    {
      t: 'outs',
      q: 'ターン後、CO が A♥Q♥ だったら。フラッシュになるリバーを全部タップ',
      hand: ['Ah', 'Qh'],
      board: ['Jh', '7c', '3h', '2s'],
      target: 'フラッシュ',
      explain: '残りのハートは 9 枚。44 枚中 9 枚なので約 20% です。だからターンでも大きく打って、高い値段を払わせます。',
    },
    { t: 'tip', text: 'ドローの多いボードの強い手は、チェックレイズで早くポットを大きくし、ドローに高い値段を払わせます。' },
  ],
};

export default lesson;
