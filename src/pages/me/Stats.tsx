import { useMemo, useState } from 'react';
import { IonButton, IonItem, IonLabel, IonList, IonNote, useIonViewWillEnter } from '@ionic/react';
import Page from '../../ui/Page';
import HandGrid from '../../ui/HandGrid';
import { ACTION_LABEL, SPOTS, freqOf, spotById } from '../../domain/poker/ranges';
import { loadHistory, type TrainingRecord } from '../../services/history';
import { useAccount } from '../../services/account';
import { FREE_STATS_DAYS } from '../../services/access';
import { mainAction } from '../../services/practice';
import { usePaywall } from '../../ui/Paywall';

const pct = (x: number) => `${Math.round(x * 100)}%`;
const accColor = (a: number) => `hsl(${Math.round(a * 120)} 60% 45%)`;

export default function Stats() {
  const { isPro } = useAccount();
  const paywall = usePaywall();
  const [all, setAll] = useState<TrainingRecord[]>(loadHistory);
  const [spot, setSpot] = useState('all');
  useIonViewWillEnter(() => setAll(loadHistory()));

  const history = useMemo(() => {
    const since = isPro ? 0 : Date.now() - FREE_STATS_DAYS * 86400000;
    return all.filter((r) => r.t >= since && (spot === 'all' || r.spot === spot));
  }, [all, isPro, spot]);
  const hidden = !isPro && all.some((r) => r.t < Date.now() - FREE_STATS_DAYS * 86400000);

  const correct = history.filter((r) => r.correct).length;
  const byHand = useMemo(() => {
    const m = new Map<string, { n: number; ok: number }>();
    for (const r of history) {
      const e = m.get(r.hand) ?? { n: 0, ok: 0 };
      e.n++; if (r.correct) e.ok++;
      m.set(r.hand, e);
    }
    return m;
  }, [history]);
  const mistakes = history.filter((r) => !r.correct).slice(-10).reverse();

  return (
    <Page title="成績" back="/me" backText="マイページ">
      <div className="section">
        {spot !== 'all' && (
          <IonButton fill="clear" size="small" onClick={() => setSpot('all')}>
            {spotById(spot).name} で絞り込み中　解除
          </IonButton>
        )}
        <div className="summary-card">
          <div className="summary-cell"><span className="summary-num">{history.length}</span><span className="summary-label">回答</span></div>
          <div className="summary-cell"><span className="summary-num">{history.length ? pct(correct / history.length) : '—'}</span><span className="summary-label">正解率</span></div>
          <div className="summary-cell"><span className="summary-num">{history.length - correct}</span><span className="summary-label">ミス</span></div>
        </div>
      </div>

      {hidden && (
        <IonList inset>
          <IonItem button detail onClick={() => paywall('stats')}>
            <IonLabel className="ion-text-wrap"><p>無料プランでは直近{FREE_STATS_DAYS}日の成績を表示しています。全期間は Pro で見られます。</p></IonLabel>
          </IonItem>
        </IonList>
      )}

      <div className="list-header">スポット別</div>

      <IonList inset>
        {SPOTS.map((s) => {
          const rs = all.filter((r) => r.spot === s.id && (isPro || r.t >= Date.now() - FREE_STATS_DAYS * 86400000));
          const acc = rs.length ? rs.filter((r) => r.correct).length / rs.length : 0;
          return (
            <IonItem key={s.id} button detail={false} onClick={() => setSpot(spot === s.id ? 'all' : s.id)}
              className={spot === s.id ? 'item-selected' : ''}>
              <IonLabel>{s.name}</IonLabel>
              <IonNote slot="end">{rs.length ? `${pct(acc)}（${rs.length}問）` : '—'}</IonNote>
            </IonItem>
          );
        })}
      </IonList>

      <div className="grid-card">
        <div className="grid-card-head">ハンド別の正解率</div>
        <p className="grid-card-sub">赤いほど苦手。灰色は未出題です。</p>
        <HandGrid compact cell={(l) => {
          const e = byHand.get(l);
          return e ? { segments: [{ color: accColor(e.ok / e.n), frac: 1 }], text: `${e.ok}/${e.n}` } : { segments: [] };
        }} />
      </div>

      {mistakes.length > 0 && (
        <>
        <div className="list-header">最近のミス</div>
        <IonList inset>
          {mistakes.map((r) => (
            <IonItem key={r.t}>
              <IonLabel>
                <h3>{r.hand}　<span className="muted">{spotById(r.spot)?.name}</span></h3>
                <p>あなた：{ACTION_LABEL[r.action]}　→　基本：{ACTION_LABEL[mainAction(r.freq)]}（{pct(freqOf(r.freq, mainAction(r.freq)))}）</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
        </>
      )}
    </Page>
  );
}
