import { useState } from 'react';
import {
  IonButton, IonIcon, IonItem, IonLabel, IonList, IonNote, IonToggle, useIonRouter, useIonViewWillEnter,
} from '@ionic/react';
import { lockClosed } from 'ionicons/icons';
import Page from '../../ui/Page';
import GameBar from '../../ui/GameBar';
import { SPOTS } from '../../domain/poker/ranges';
import { useAccount } from '../../services/account';
import { canPracticeSpot, remainingQuestions, FREE_DAILY_QUESTIONS, dayKey } from '../../services/access';
import { loadPracticeSettings, savePracticeSettings, type PracticeSettings } from '../../services/practice';
import { loadHistory } from '../../services/history';
import { usePaywall } from '../../ui/Paywall';

export default function PracticeHome() {
  const { isPro } = useAccount();
  const paywall = usePaywall();
  const router = useIonRouter();
  const [settings, setSettings] = useState<PracticeSettings>(loadPracticeSettings);
  const [remaining, setRemaining] = useState(() => remainingQuestions(isPro));
  const [today, setToday] = useState({ total: 0, correct: 0 });

  useIonViewWillEnter(() => {
    setRemaining(remainingQuestions(isPro));
    const key = dayKey();
    const h = loadHistory().filter((r) => dayKey(new Date(r.t)) === key);
    setToday({ total: h.length, correct: h.filter((r) => r.correct).length });
  }, [isPro]);

  const update = (s: PracticeSettings) => {
    setSettings(s);
    savePracticeSettings(s);
  };
  const usable = settings.spots.filter((id) => canPracticeSpot(SPOTS.find((s) => s.id === id)!, isPro));

  const start = () => {
    if (remainingQuestions(isPro) <= 0) return paywall('quota');
    router.push('/practice/session');
  };

  return (
    <Page title="練習">
      <div className="section">
        <GameBar />
        <div className="summary-card">
          <div className="summary-cell">
            <span className="summary-num">{today.total}</span>
            <span className="summary-label">今日の回答</span>
          </div>
          <div className="summary-cell">
            <span className="summary-num">{today.total ? `${Math.round((today.correct / today.total) * 100)}%` : '—'}</span>
            <span className="summary-label">正解率</span>
          </div>
          <div className="summary-cell">
            <span className="summary-num">{isPro ? '∞' : remaining}</span>
            <span className="summary-label">{isPro ? '残り' : `残り / ${FREE_DAILY_QUESTIONS}問`}</span>
          </div>
        </div>
        <IonButton expand="block" className="btn-large" disabled={usable.length === 0} onClick={start}>
          プリフロップ練習を始める
        </IonButton>
      </div>

      <div className="list-header">オープン（前が全員フォールド）</div>

      <IonList inset>
        {SPOTS.filter((s) => s.kind === 'rfi').map((s) => (
          <SpotRow key={s.id} id={s.id} name={s.name} settings={settings} update={update} locked={false} />
        ))}
      </IonList>

      <div className="list-header">オープンに対して</div>

      <IonList inset>
        {SPOTS.filter((s) => s.kind === 'vsOpen').map((s) => (
          <SpotRow key={s.id} id={s.id} name={s.name} settings={settings} update={update}
            locked={!canPracticeSpot(s, isPro)} onLocked={() => paywall('spot')} />
        ))}
      </IonList>

      <IonList inset>
        <IonItem>
          <IonToggle checked={settings.focus} onIonChange={(e) => update({ ...settings, focus: e.detail.checked })}>
            <IonLabel>
              判断が分かれるハンド中心
              <p>明らかなフォールドを減らして出題</p>
            </IonLabel>
          </IonToggle>
        </IonItem>
      </IonList>
    </Page>
  );
}

function SpotRow({ id, name, settings, update, locked, onLocked }: {
  id: string; name: string; settings: PracticeSettings; update: (s: PracticeSettings) => void; locked: boolean; onLocked?: () => void;
}) {
  if (locked) {
    return (
      <IonItem button detail={false} onClick={onLocked}>
        <IonLabel>{name}</IonLabel>
        <IonNote slot="end" className="pro-tag">PRO</IonNote>
        <IonIcon slot="end" icon={lockClosed} color="medium" aria-hidden="true" />
      </IonItem>
    );
  }
  const on = settings.spots.includes(id);
  return (
    <IonItem>
      <IonToggle
        checked={on}
        onIonChange={(e) => {
          const spots = e.detail.checked ? [...settings.spots, id] : settings.spots.filter((x) => x !== id);
          update({ ...settings, spots });
        }}
      >
        {name}
      </IonToggle>
    </IonItem>
  );
}
