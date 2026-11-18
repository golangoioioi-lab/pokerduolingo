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
