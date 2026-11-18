import { useMemo, useState } from 'react';
import {
  IonButton, IonItem, IonLabel, IonList, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, useIonActionSheet,
} from '@ionic/react';
import Page from '../../ui/Page';
import HandGrid from '../../ui/HandGrid';
import Legend from '../../ui/Legend';
import { rangeCell } from '../../ui/rangeCell';
import { SPOTS, foldFreq, rangeStats, spotById, type Freq, type RangeMap } from '../../domain/poker/ranges';
import { getSpotRange, isCustomized, saveSpotRange } from '../../services/customRanges';
import { useAccount } from '../../services/account';
import { canEditRanges } from '../../services/access';
import { usePaywall } from '../../ui/Paywall';

const BRUSHES: Record<'rfi' | 'vsOpen', { name: string; f: Freq }[]> = {
  rfi: [
    { name: 'レイズ', f: { raise: 1, call: 0 } },
    { name: '50%', f: { raise: 0.5, call: 0 } },
    { name: 'フォールド', f: { raise: 0, call: 0 } },
  ],
  vsOpen: [
    { name: '3bet', f: { raise: 1, call: 0 } },
    { name: 'コール', f: { raise: 0, call: 1 } },
    { name: '混合', f: { raise: 0.5, call: 0.5 } },
    { name: 'フォールド', f: { raise: 0, call: 0 } },
  ],
};

const pct = (x: number) => `${Math.round(x * 100)}%`;

export default function RangeViewer() {
  const { isPro } = useAccount();
  const paywall = usePaywall();
  const [sheet] = useIonActionSheet();
  const [spotId, setSpotId] = useState(SPOTS[0].id);
  const [range, setRange] = useState<RangeMap>(() => getSpotRange(SPOTS[0].id));
  const [editing, setEditing] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [brush, setBrush] = useState(0);
  const [sel, setSel] = useState<string | null>(null);

  const spot = spotById(spotId);
  const brushes = BRUSHES[spot.kind];
  const stats = useMemo(() => rangeStats(range), [range]);

  const pick = (id: string) => {
    setSpotId(id);
    setRange(getSpotRange(id));
    setDirty(false);
    setBrush(0);
    setSel(null);
  };

  const toggleEdit = () => {
    if (!canEditRanges(isPro)) return paywall('ranges');
    if (editing && dirty) {
      saveSpotRange(spotId, range);
      setDirty(false);
    }
    setEditing(!editing);
  };

  const paint = (label: string) => {
    const f = brushes[Math.min(brush, brushes.length - 1)].f;
    setRange((r) => {
      const n = { ...r };
      if (f.raise <= 0 && f.call <= 0) delete n[label];
      else n[label] = { ...f };
      return n;
    });
    setDirty(true);
  };

  const reset = () =>
    sheet({
      header: `${spot.name} を初期のレンジに戻しますか？`,
      buttons: [
        { text: '初期に戻す', role: 'destructive', handler: () => { saveSpotRange(spotId, null); setRange(spot.defaultRange); setDirty(false); } },
        { text: 'キャンセル', role: 'cancel' },
      ],
    });

  const f = sel ? range[sel] : undefined;

  return (
    <Page
      title="レンジ表"
      back="/tools"
      backText="ツール"
      end={<IonButton onClick={toggleEdit} strong={editing}>{editing ? '完了' : '編集'}</IonButton>}
    >
      <IonList inset>
        <IonItem>
          <IonSelect label="スポット" interface="action-sheet" value={spotId} onIonChange={(e) => pick(e.detail.value)}
            cancelText="キャンセル">
            {SPOTS.map((s) => (
              <IonSelectOption key={s.id} value={s.id}>{s.name}{isCustomized(s.id) ? '（編集済み）' : ''}</IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>
      </IonList>

      <div className="grid-card">
        <p className="grid-card-sub">{spot.description}</p>
        <HandGrid
          cell={(l) => rangeCell(range[l])}
          highlight={sel}
          onHover={(l) => l && setSel(l)}
          onPaint={editing ? paint : undefined}
        />
        <Legend showCall={spot.kind !== 'rfi'} />
        <div className="cell-info" aria-live="polite">
          {sel ? (
            <><b>{sel}</b>　レイズ {pct(f?.raise ?? 0)}{spot.kind !== 'rfi' && <>　コール {pct(f?.call ?? 0)}</>}　フォールド {pct(foldFreq(f))}</>
          ) : 'マスをタップすると頻度を表示'}
        </div>
      </div>

      {editing && (
        <div className="section">
          <IonSegment value={String(brush)} onIonChange={(e) => setBrush(Number(e.detail.value))}>
            {brushes.map((b, i) => (
              <IonSegmentButton key={b.name} value={String(i)}><IonLabel>{b.name}</IonLabel></IonSegmentButton>
            ))}
          </IonSegment>
          <p className="footnote">マスをなぞって塗ります。「完了」で保存され、練習の正解に使われます。</p>
        </div>
      )}

      <IonList inset>
        <IonItem>
          <IonLabel>{spot.kind === 'rfi' ? 'オープン' : '3bet'}</IonLabel>
          <span slot="end" className="value">{stats.raise.toFixed(1)}%</span>
        </IonItem>
        {spot.kind !== 'rfi' && (
          <IonItem>
            <IonLabel>コール</IonLabel>
            <span slot="end" className="value">{stats.call.toFixed(1)}%</span>
          </IonItem>
        )}
        <IonItem lines={isCustomized(spotId) || dirty ? 'full' : 'none'}>
          <IonLabel>フォールド</IonLabel>
          <span slot="end" className="value">{(100 - stats.raise - stats.call).toFixed(1)}%</span>
        </IonItem>
        {(isCustomized(spotId) || dirty) && (
          <IonItem button detail={false} onClick={reset} lines="none">
            <IonLabel color="danger">初期のレンジに戻す</IonLabel>
          </IonItem>
        )}
      </IonList>
      <p className="footnote">6人卓・100bb の学習用の簡易レンジです（ソルバーの出力ではありません）。</p>
    </Page>
  );
}
