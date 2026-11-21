import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'drill-dirty-outs',
  blocks: [
    { t: 'h', text: 'そのアウツ、本当に勝てる？' },
    {
      t: 'outs',
      q: 'まずストレートになるカードを全部タップ（相手は A♣T♣）',
      hand: ['9s', '8s'],
      board: ['Td', '7c', '2c'],
      target: 'ストレート',
      explain: 'J と 6 で8枚。ただし J♣ と 6♣ はクラブを3枚にして、相手のフラッシュが先に完成します。',
    },
    {
      t: 'estimate',
      q: '相手は A♣T♣。ターンの1枚で逆転できる「きれいな」アウツは何枚？',
      hand: ['9s', '8s'],
      board: ['Td', '7c', '2c'],
      min: 0, max: 12, step: 1, unit: '枚', answer: 6, tolerance: 0.5,
      explain: '8 − 2（J♣・6♣）= 6枚です。',
    },
    { t: 'h', text: '割り引くカードの種類' },
    {
      t: 'list',
      items: [
        '**相手のドローを完成させる**：自分のストレートカードが相手のフラッシュも作る',
        '**ボードがペアになる**：相手がセットならフルハウスになる',
        '**当たっても上を行かれる**：ペアになっても相手のペアやキッカーに負ける',
      ],
    },
    { t: 'p', text: '相手の手が分からないときは、怪しいアウツを半分と数えるのが実戦的です。' },
    {
      t: 'equity',
      players: [
        { label: 'あなた', cards: ['9s', '8s'], pct: 20 },
        { label: '相手', cards: ['Ac', 'Tc'], pct: 80 },
      ],
      board: ['Td', '7c', '2c'],
      caption: 'きれいなアウツは6枚。フロップからの勝率は約20%（目安）。8枚で数えた 8 × 4 = 32% よりずっと低くなります。',
    },
    {
      t: 'equity',
      players: [
        { label: 'あなた', cards: ['Ac', 'Jd'], pct: 13 },
        { label: '相手', cards: ['Kd', 'Td'], pct: 87 },
      ],
      board: ['Ks', '8s', '4c'],
      caption: 'J が来ても K のペアには勝てません。本当のアウツは A の3枚だけで、約13%（目安）。',
    },
    { t: 'h', text: '練習問題' },
    {
      t: 'quiz',
      q: 'あなたは A♣J♦、ボードは K♠ 8♠ 4♣。相手は K♦T♦ です。アウツは何枚？',
      options: ['3枚', '6枚', '9枚', '0枚'],
      answer: 0,
      hand: ['Ac', 'Jd'],
      board: ['Ks', '8s', '4c'],
      explain: 'A が来れば A のペアで上回ります（3枚）。J のペアは K のペアに負けます。',
    },
    {
      t: 'outs',
      q: 'ストレート以上になるカードを全部タップ（相手は 8♠8♦ のセット）',
      hand: ['7h', '6h'],
      board: ['8h', '5c', '2h'],
      target: 'ストレート',
      explain: '15枚。ただし 5♥ はボードをペアにし、相手が 8-8-8-5-5 のフルハウスになります。',
    },
    {
      t: 'estimate',
      q: '相手は 8♠8♦（セット）。ターンの1枚でリードを奪えるカードは何枚？',
      hand: ['7h', '6h'],
      board: ['8h', '5c', '2h'],
      min: 0, max: 20, step: 1, unit: '枚', answer: 14, tolerance: 0.5,
      explain: '15 − 1（5♥）= 14枚。リバーでボードがペアになる危険は残ります。',
    },
    {
      t: 'estimate',
      q: '相手は A♥J♣。逆転するアウツは何枚？',
      hand: ['As', 'Qd'],
      board: ['Jd', '7c', '3s'],
      min: 0, max: 12, step: 1, unit: '枚', answer: 3, tolerance: 0.5,
      explain: 'Q の3枚。A が来ても相手は A と J のツーペアになるので、アウツではありません。',
    },
    { t: 'h', text: 'もう一度：1枚ずつ確かめる' },
    {
      t: 'rapid',
      q: 'あなたは 9♠8♠、相手は A♣T♣、ボードは T♦7♣2♣。このターンのカードはアウツ？',
      choices: ['アウツ', 'アウツではない'],
      items: [
        { cards: ['Js'], board: ['Td', '7c', '2c'], answer: 0, why: 'ストレート完成。相手のフラッシュはまだです。' },
        { cards: ['Jc'], board: ['Td', '7c', '2c'], answer: 1, why: 'ストレートでも、相手のフラッシュに負けます。' },
        { cards: ['6d'], board: ['Td', '7c', '2c'], answer: 0, why: '6-7-8-9-T のストレート。' },
        { cards: ['6c'], board: ['Td', '7c', '2c'], answer: 1, why: '相手のフラッシュが完成します。' },
        { cards: ['9h'], board: ['Td', '7c', '2c'], answer: 1, why: '9 のペアは T のペアに負けます。' },
        { cards: ['Jh'], board: ['Td', '7c', '2c'], answer: 0, why: '7-8-9-T-J のストレート。' },
      ],
    },
    {
      t: 'tip',
      title: 'まとめ',
      text: 'アウツを数えたら「そのカードで相手はどうなるか」を確かめます。相手のフラッシュ、フルハウス、より強いペアの3つを見落とさないことです。',
    },
  ],
};

export default lesson;
