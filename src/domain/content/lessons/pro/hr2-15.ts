import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'hr2-15',
  blocks: [
    { t: 'p', text: '6人卓・全員 100bb。BTN までフォールドし、SB がリンプ（1bb をコール）。あなたは BB で A♣ T♦ です。リンプはレイズしなかった分、強い手が少ないレンジです。' },
    { t: 'h', text: 'プリフロップ' },
    {
      t: 'quiz', q: 'SB のリンプに対して、BB の AT の選択は？',
      hand: ['Ac', 'Td'],
      options: ['チェックして 2人でフロップへ', '4bb にレイズ', '15bb にレイズ'],
      answer: 1,
      explain: 'AT は、リンプしてくる SB の小さいペアや弱いスーテッド、K7・Q8 のような手に対して有利です。レイズでポットを大きくします。リンプに対しては 3〜4bb が標準で、15bb では弱い手が全部降りてしまいます。',
    },
    {
      t: 'seats',
      seats: [
        { pos: 'UTG', action: 'フォールド', folded: true },
        { pos: 'HJ', action: 'フォールド', folded: true },
        { pos: 'CO', action: 'フォールド', folded: true },
        { pos: 'BTN', action: 'フォールド', folded: true },
        { pos: 'SB', action: 'リンプ → コール', bet: 4 },
        { pos: 'BB', hero: true, action: '4bb にレイズ', bet: 4, cards: ['Ac', 'Td'] },
      ],
      pot: 8,
      caption: 'SB がコールして、ポットは 8bb、残りは 96bb。',
    },
    { t: 'h', text: 'フロップ・ターン' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['Ac', 'Td'] }], board: ['Ts', '6s', '2d'], caption: 'トップペア・トップキッカー。スペードのフラッシュドローがあります。' },
    {
      t: 'estimate', q: 'SB が K♠ 5♠ を持っているとき、ターンとリバーの2枚でフラッシュが完成する確率は約何%？',
      board: ['Ts', '6s', '2d'],
      min: 0, max: 80, step: 5, unit: '%', answer: 35, tolerance: 10,
      explain: '残りのスペードは 13 − 4（T♠・6♠・K♠・5♠）= 9 枚、見えていないカードは 47 枚。1 − (38/47 × 37/46) ≒ 35% です。ドローは軽く扱えません。',
    },
    { t: 'p', text: 'あなたは 2.5bb をベットしてコールされ、ターンの 9♣ では 8.5bb（約65%）をベットしてコールされました。ポットは 30bb、残りは 85bb です。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['Ac', 'Td'] }], board: ['Ts', '6s', '2d', '9c'] },
    {
      t: 'quiz', q: 'ターンで 8.5bb にコールした SB の手として、多いのはどれ？',
      board: ['Ts', '6s', '2d', '9c'],
      options: ['K♠5♠（スペードのドロー）', 'AA', '7♥3♣（何もない手）'],
      optionCards: [['Ks', '5s'], ['Ah', 'Ad'], ['7h', '3c']],
      answer: 0,
      explain: 'AA のような強い手はリンプにはほとんどなく、何もない手は2回目のベットで降ります。残るのは T8・T7 のようなペアや、スペードのドロー、ストレートドローです。',
    },
    { t: 'h', text: 'リバー：4♠' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['Ac', 'Td'] }], board: ['Ts', '6s', '2d', '9c', '4s'], caption: 'スペードが3枚。フラッシュドローは完成しました。' },
    {
      t: 'quiz', q: 'SB はチェック。ポット 30bb。あなたの選択は？',
      hand: ['Ac', 'Td'], board: ['Ts', '6s', '2d', '9c', '4s'],
      options: ['チェックしてショーダウン', '10bb をベット', '25bb をベット'],
      answer: 0,
      explain: 'ベットしてコールされるのは、フラッシュや 9T・T6 のツーペアなど、あなたより強い手が中心です。T7・T8 のような弱い T はフラッシュが完成したボードで降ります。さらにフラッシュからのチェックレイズで、あなたは降りるしかなくなります。弱い手がコールしにくいなら、チェックです。',
    },
    { t: 'p', text: 'あなたはチェック。SB は T♣ 8♣ を見せ、キッカーの差であなたが 30bb を獲得しました。T8 はベットされていれば降りていた可能性が高い手です。' },
    { t: 'cards', hands: [{ label: 'あなた', cards: ['Ac', 'Td'] }, { label: 'SB', cards: ['Tc', '8c'] }], board: ['Ts', '6s', '2d', '9c', '4s'] },
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
      caption: 'フロップとターンでポットを育て、フラッシュが完成したリバーではそれ以上増やしません。',
    },
    { t: 'tip', text: 'リバーのバリューベットは「より弱い手がコールするか」で決めます。ドローが完成して弱い手が降りるボードでは、トップペア・トップキッカーでもチェックが得になります。' },
  ],
};

export default lesson;
