import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-15',
  blocks: [
    { t: 'h', text: 'プレイしてみる' },
    { t: 'p', text: '6人卓・全員 100bb。SB のリンプ（1bb をコール）に BB でレイズし、ドローが完成したリバーまで進む場面です。' },
    {
      t: 'play',
      title: 'BB で A♣T♦',
      hero: 'BB',
      heroCards: ['Ac', 'Td'],
      villain: 'SB',
      villainCards: ['Tc', '8c'],
      steps: [
        {
          street: 'プリフロップ', pot: 2,
          say: 'BTN までフォールドし、SB がリンプ。あなたは BB で **A♣T♦**。',
          q: 'どうする？',
          options: [
            { label: 'チェックしてフロップへ', good: false, why: 'リンプのレンジには AT より弱い手が多く、ポットを大きくできる場面です。' },
            { label: '4bb にレイズ', good: true, why: 'リンプに対しては 3〜4bb が標準です。' },
            { label: '15bb にレイズ', good: false, why: '大きすぎて、弱い手が全部降りてしまいます。' },
          ],
        },
        {
          street: 'フロップ', board: ['Ts', '6s', '2d'], pot: 8,
          say: 'SB がコール。トップペア・トップキッカーで、スペードのドローもあります。SB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェック', good: false, why: 'ドローに無料でカードを見せ、弱い T から取る機会も逃します。' },
            { label: '2.5bb をベット', good: true, why: '弱い T やドローからコールをもらえます。' },
          ],
        },
        { street: 'ターン', board: ['9c'], pot: 13, say: 'SB がコール。ターン **9♣** で、あなたが 8.5bb をベットし、SB がまたコールしました。' },
        {
          street: 'リバー', board: ['4s'], pot: 30,
          say: 'リバーは **4♠**。スペードが3枚になりました。SB はチェック。',
          q: 'どうする？',
          options: [
            { label: 'チェックしてショーダウン', good: true, why: '弱い T は降り、コールするのはフラッシュやツーペアが中心です。' },
            { label: '10bb をベット', good: false, why: 'より弱い手からコールをもらいにくく、チェックレイズも受けます。' },
            { label: '25bb をベット', good: false, why: '強い手にだけコールされ、負けるときに大きく失います。' },
          ],
        },
      ],
      outro: 'T8 はベットされていれば降りていた手です。チェックでも同じ 30bb を取れました。',
    },
    { t: 'h', text: '振り返り' },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 8, actions: ['SB リンプ', 'BB（あなた）4bb にレイズ', 'SB コール'] },
        { street: 'フロップ', board: ['Ts', '6s', '2d'], pot: 8, actions: ['SB チェック', 'あなた 2.5bb ベット', 'SB コール'] },
        { street: 'ターン', board: ['9c'], pot: 13, actions: ['SB チェック', 'あなた 8.5bb ベット', 'SB コール'] },
        { street: 'リバー', board: ['4s'], pot: 30, actions: ['SB チェック', 'あなた チェック'] },
        { street: 'ショーダウン', pot: 30, actions: ['AT が T8 にキッカーで勝つ'] },
      ],
      caption: 'ポットはプリフロップのみ終了時、ほかは各ストリート開始時の額です。',
    },
    {
      t: 'pot',
      steps: [
        { label: 'フロップ開始', pot: 8, stack: 96 },
        { label: 'ターン開始', pot: 13, stack: 93.5 },
        { label: 'リバー開始', pot: 30, stack: 85 },
      ],
      caption: 'フロップとターンでポットを育て、ドローが完成したリバーでは増やしません。',
    },
    {
      t: 'estimate', q: 'SB が K♠ 5♠ なら、フロップからターンとリバーの2枚でフラッシュが完成する確率は約何%？',
      board: ['Ts', '6s', '2d'],
      min: 0, max: 80, step: 5, unit: '%', answer: 35, tolerance: 10,
      explain: '残りのスペードは 13 − 4 = 9 枚、見えていないカードは 47 枚。1 − (38/47 × 37/46) ≒ 35% です。',
    },
    {
      t: 'quiz', q: 'ターンで 8.5bb にコールした SB の手として、多いのはどれ？',
      board: ['Ts', '6s', '2d', '9c'],
      options: ['K♠5♠（スペードのドロー）', 'AA', '7♥3♣（何もない手）'],
      optionCards: [['Ks', '5s'], ['Ah', 'Ad'], ['7h', '3c']],
      answer: 0,
      explain: 'AA はリンプにほとんどなく、何もない手は2回目のベットで降ります。残るのは弱い T とドローです。',
    },
    { t: 'h', text: 'リバーが変わったら？' },
    {
      t: 'rapid',
      q: '同じ流れで、リバーだけ違います。SB がチェック。A♣T♦ でベットする？',
      choices: ['ベット', 'チェック'],
      items: [
        { cards: ['Ac', 'Td'], board: ['Ts', '6s', '2d', '9c', '4s'], answer: 1, why: 'フラッシュが完成。弱い T は降ります。' },
        { cards: ['Ac', 'Td'], board: ['Ts', '6s', '2d', '9c', 'Ah'], answer: 0, why: 'A と T のツーペア。弱い T からも払ってもらえます。' },
        { cards: ['Ac', 'Td'], board: ['Ts', '6s', '2d', '9c', '2h'], answer: 0, why: 'ドローは何も完成していません。T7・T8 がコールします。' },
        { cards: ['Ac', 'Td'], board: ['Ts', '6s', '2d', '9c', 'Ks'], answer: 1, why: 'スペードが3枚。フラッシュが完成しました。' },
        { cards: ['Ac', 'Td'], board: ['Ts', '6s', '2d', '9c', '7h'], answer: 1, why: '8x のストレートが完成。T8 もストレートになります。' },
        { cards: ['Ac', 'Td'], board: ['Ts', '6s', '2d', '9c', '3c'], answer: 0, why: 'ほぼ何も変わらず、弱い T がまだコールします。' },
        { cards: ['Ac', 'Td'], board: ['Ts', '6s', '2d', '9c', '8s'], answer: 1, why: 'フラッシュも 7x のストレートも完成しました。' },
      ],
    },
    { t: 'tip', text: 'リバーのバリューベットは「より弱い手がコールするか」で決めます。ドローが完成して弱い手が降りるなら、トップペア・トップキッカーでもチェックです。' },
  ],
};

export default lesson;
