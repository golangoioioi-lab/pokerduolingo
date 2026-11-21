// Dev-only preview of every diagram block (route /dev/diagrams, not in production builds).
import { IonContent, IonPage } from '@ionic/react';
import type { Block } from '../../domain/content/types';
import BlockView from '../../ui/BlockView';

const SAMPLES: Block[] = [
  { t: 'pot', steps: [{ label: 'プリフロップ', pot: 6.5, stack: 97.5 }, { label: 'フロップ', pot: 13, stack: 94.25 }, { label: 'ターン', pot: 32, stack: 84.75 }, { label: 'リバー', pot: 80, stack: 60.75 }], caption: 'ベットのたびにポットが膨らみ、SPR が下がります。' },
  { t: 'equity', players: [{ label: 'あなた', cards: ['Ah', 'Kh'], pct: 46 }, { label: '相手', cards: ['Qs', 'Qd'], pct: 54 }], caption: 'AKs 対 QQ はほぼ互角です。' },
  { t: 'odds', pot: 10, bet: 5, equity: 35, caption: 'フラッシュドロー（ターン＋リバー）なら足ります。' },
  { t: 'odds', pot: 10, bet: 10, equity: 19.6 },
  { t: 'seats', seats: [{ pos: 'UTG', folded: true, action: 'フォールド' }, { pos: 'HJ', folded: true, action: 'フォールド' }, { pos: 'CO', action: 'レイズ', bet: 2.5 }, { pos: 'BTN', hero: true, action: '3bet', bet: 8, cards: ['As', 'Qs'] }, { pos: 'SB', folded: true }, { pos: 'BB', folded: true }], pot: 12 },
  { t: 'combos', groups: [{ label: 'バリュー', hands: ['AA', 'KK', 'AK'] }, { label: 'ブラフ', hands: ['A5s', 'A4s'] }], dead: ['Ah'], caption: 'A を1枚持つと AA と AK が減ります。' },
  { t: 'timeline', steps: [{ street: 'プリフロップ', pot: 6.5, actions: ['CO 2.5bb オープン', 'BTN コール'] }, { street: 'フロップ', board: ['Kd', '7c', '2s'], pot: 6.5, actions: ['CO 2bb ベット', 'BTN コール'] }, { street: 'ターン', board: ['9h'], pot: 10.5, actions: ['CO チェック', 'BTN 7bb ベット'] }] },
  { t: 'tree', root: 'リバーで相手が 10bb をベット（ポット 20bb）', options: [{ label: 'コール', outcomes: [{ label: '勝つ', prob: 0.3, value: 30 }, { label: '負ける', prob: 0.7, value: -10 }] }, { label: 'フォールド', ev: 0 }] },
  { t: 'compare', left: { title: 'ドライなボード', board: ['Kd', '7c', '2s'], points: ['ドローがほとんどない', '小さいベットを多く'], verdict: 'good' }, right: { title: 'つながったボード', board: ['9h', '8h', '7c'], points: ['ドローが多い', 'ベット頻度を下げる'], verdict: 'bad' } },
  { t: 'quiz', q: 'どちらのハンドが強い？', board: ['Kh', '9h', '4c', '2d', '7s'], options: ['トップペア', 'ツーペア'], optionCards: [['Ks', 'Qd'], ['9c', '4d']], answer: 1, explain: '9と4のツーペアのほうが強いです。' },
  { t: 'estimate', q: 'ポット 100 に 50 のベット。コールに必要な勝率は？', min: 0, max: 60, unit: '%', answer: 25, tolerance: 3, explain: '50 ÷（100＋50＋50）＝25%。' },
  { t: 'play', title: 'BTN で AK をオープン', hero: 'BTN', heroCards: ['Ah', 'Kd'], villain: 'BB', villainCards: ['Qs', 'Jc'], steps: [
    { street: 'プリフロップ', pot: 1.5, say: 'CO までフォールド。あなたは BTN で **A♥K♦**。', q: 'どうする？', options: [{ label: 'フォールド', good: false, why: 'AK は最上位クラスです。' }, { label: 'コール', good: false, why: '先にレイズしたほうが主導権を取れます。' }, { label: '2.5bb レイズ', good: true, why: '強いハンドはレイズで入ります。' }] },
    { street: 'フロップ', board: ['Kc', '8d', '3s'], pot: 5.5, say: 'BB がコール。フロップは **K-8-3**。BB はチェック。', q: 'トップペア。どうする？', options: [{ label: 'チェック', good: false, why: '弱いハンドからも払ってもらえます。' }, { label: '2bb ベット', good: true, why: '小さく打ってバリューを取ります。' }] },
    { street: 'ターン', board: ['5h'], pot: 9.5, say: 'BB がコール。ターンは **5**。' },
    { street: 'リバー', board: ['2c'], pot: 9.5, say: 'リバーは **2**。BB はチェック。', q: 'どうする？', options: [{ label: 'チェック', good: true, why: 'ここは様子見でも十分。' }, { label: 'オールイン', good: false, why: '強い手にしか払われません。' }] },
  ], outro: '強い手はレイズで入り、トップペアは小さくバリューを取ります。' },
  { t: 'pick5', hand: ['Ah', '9h'], board: ['Kh', '7h', '2h', '2c', '2d'] },
  { t: 'showdown', board: ['Ah', 'Kd', '7s', '7c', '2h'], players: [{ label: 'あなた', cards: ['Ac', 'Qd'] }, { label: '相手', cards: ['Kc', 'Kh'] }], explain: 'K のフルハウスが勝ちます。' },
  { t: 'outs', hand: ['Ah', 'Kh'], board: ['7h', '2h', 'Qc'], target: 'フラッシュ', explain: 'ハートは13枚。見えている4枚を引いて残り9枚です。' },
  { t: 'order', board: ['Ah', 'Kd', '7s', '4c', '2h'], hands: [{ label: 'トップペア', cards: ['Ac', 'Qd'] }, { label: 'セット', cards: ['7c', '7d'] }, { label: '?', cards: ['3c', '5d'] }] },
  { t: 'rapid', q: 'UTG でオープンする？', choices: ['オープン', 'フォールド'], items: [
    { cards: ['As', 'Kd'], answer: 0 }, { cards: ['7c', '2d'], answer: 1, why: 'どの席でもフォールドです。' }, { cards: ['Qh', 'Qd'], answer: 0 }, { cards: ['Kc', '9d'], answer: 1, why: 'UTG では K9o は弱すぎます。' }, { cards: ['5s', '5h'], answer: 0 },
  ] },
  { t: 'paint', spot: 'rfi-utg' },
];

export default function DiagramGallery() {
  return (
    <IonPage>
      <IonContent>
        <div className="lesson-body">
          <h1 className="lesson-title">図解ブロック</h1>
          {SAMPLES.map((b, i) => <BlockView key={i} block={b} goTab={() => {}} />)}
        </div>
      </IonContent>
    </IonPage>
  );
}
