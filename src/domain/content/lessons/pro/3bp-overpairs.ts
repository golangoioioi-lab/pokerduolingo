import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: '3bp-overpairs',
  blocks: [
    {
      t: 'p',
      text: 'オーバーペアは、ボードのどのカードよりも高いポケットペアです。3betポットは強いポケットペアが多く現れるので、オーバーペアで全額を入れる場面が頻繁にあります。',
    },
    { t: 'h', text: 'SPRが低いとオーバーペアは強い' },
    {
      t: 'p',
      text: 'SPR約4〜5の3betポットでは、オーバーペアは「基本的に全額を入れてよい手」です。相手のレンジには、自分に勝つAAやKKより、自分に負ける手（トップペアやドロー）のほうが多く含まれます。',
    },
    {
      t: 'equity',
      players: [
        { label: 'KK（オーバーペア）', cards: ['Kc', 'Kd'], pct: 86 },
        { label: 'AKo（トップペア未満）', cards: ['Ah', 'Ks'], pct: 14 },
      ],
      board: ['7s', '5d', '2h'],
      caption: '7♠5♦2♥でKKはAKoに対して約86%。AKoが追いつくのはエース3枚だけです。',
    },
    { t: 'h', text: 'ボードで変わる強さ' },
    {
      t: 'compare',
      left: {
        title: 'QQで7♠5♦2♥',
        cards: ['Qc', 'Qd'],
        board: ['7s', '5d', '2h'],
        points: ['オーバーペア', '全額を入れてよい手', '相手の強い手はAA・KKのみ'],
        verdict: 'good',
      },
      right: {
        title: 'QQでA♠8♦3♣',
        cards: ['Qc', 'Qd'],
        board: ['As', '8d', '3c'],
        points: ['オーバーペアではない（Aが上）', 'ボードに高いカードが落ちた', '相手のAxに負けている'],
        verdict: 'bad',
      },
      caption: 'オーバーペアかどうかは、ボードで決まります。QQでもAが出ればアンダーペアです。',
    },
    {
      t: 'pot',
      steps: [
        { label: '3betポット（BTN対CO）', pot: 17.5, stack: 92 },
        { label: 'フロップ 5.8bet・コール', pot: 29.1, stack: 86.2 },
        { label: 'ターン 14.5bet・コール', pot: 58.1, stack: 71.7 },
        { label: 'リバー 36bet・コール', pot: 130.1, stack: 35.7 },
      ],
      caption: 'KKでバリューを取るライン。フロップ33%、ターン50%、リバー約60%のベットで、残りスタックは約36bbです。',
    },
    { t: 'h', text: 'オーバーペアの打ち方' },
    {
      t: 'list',
      items: [
        '**3bettorがIP**：フロップは小さく打ち、ターンで大きくして、リバーで全額を狙う。',
        '**OOP**：チェックレイズを混ぜるのも選択肢だが、基本はc-betで主導権を持つ。',
        '**コーラー側**：チェックコールしてターンのベットにレイズ、または全額を入れる。',
      ],
    },
    {
      t: 'timeline',
      steps: [
        { street: 'プリフロップ', pot: 17.5, actions: ['COが2.5bbオープン', 'BTN（K♣K♦）が8bbに3bet', 'COがコール'] },
        { street: 'フロップ', board: ['7s', '5d', '2h'], pot: 17.5, actions: ['COがチェック', 'BTN：5.8bbをc-bet', 'COがコール'] },
        { street: 'ターン', board: ['9c'], pot: 29.1, actions: ['COがチェック', 'BTN：14.5bbをベット', 'COがコール'] },
      ],
      caption: 'KKはドローを降ろし、バリューを取り続けます。',
    },
    {
      t: 'quiz',
      q: '9♠6♦2♣のボード。オーバーペアになっているのは、どちらの手？',
      options: ['T♥T♦', '8♥8♣'],
      optionCards: [['Th', 'Td'], ['8h', '8c']],
      board: ['9s', '6d', '2c'],
      answer: 0,
      explain: 'TTはボードのどのカードよりも高いのでオーバーペアです。88は9より低いので、オーバーペアではありません。',
    },
    {
      t: 'estimate',
      q: 'KKはAKoに対して、7♠5♦2♥でおよそ何%勝ちますか？',
      min: 50,
      max: 100,
      step: 1,
      unit: '%',
      answer: 86,
      tolerance: 8,
      hand: ['Kc', 'Kd'],
      board: ['7s', '5d', '2h'],
      explain: 'AKoが勝つにはエース3枚を引く必要があります。KKの勝率は約86%です。',
    },
    {
      t: 'estimate',
      q: 'KKに対してAKoが追いつく（エースのペアになる）カードは、デッキに何枚残っていますか？',
      min: 0,
      max: 12,
      step: 1,
      answer: 3,
      tolerance: 1,
      hand: ['Ah', 'Ks'],
      board: ['7s', '5d', '2h'],
      explain: 'エースは4枚で、1枚はAKoが持っています。残りの3枚がAKoのアウトです。',
    },
    {
      t: 'quiz',
      q: 'QQでA♠8♦3♣に出会いました。QQの扱いは？',
      options: ['オーバーペア', 'アンダーペア（Aが上）', 'ツーペア', 'フラッシュ'],
      hand: ['Qc', 'Qd'],
      board: ['As', '8d', '3c'],
      answer: 1,
      explain: 'ボードにAがあるため、QQはAより下のペアです。相手のAxに負けています。',
    },
  ],
};

export default lesson;
