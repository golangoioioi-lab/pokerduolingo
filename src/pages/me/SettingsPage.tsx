import { useState } from 'react';
import { IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonToggle, useIonActionSheet, useIonToast } from '@ionic/react';
import Page from '../../ui/Page';
import { loadAppearance, setAppearance, type Appearance } from '../../services/settings';
import { useAccount } from '../../services/account';
import { clearHistory } from '../../services/history';
import { save } from '../../services/storage';
import { GOALS, setGoal, useGame } from '../../services/game';
import { setSoundOn, sfx, soundOn } from '../../ui/fx';
import { PAID_PLANS } from '../../services/backend';

export default function SettingsPage() {
  const [appearance, setA] = useState<Appearance>(loadAppearance);
  const { demo, isPro, setDemoPro } = useAccount();
  const game = useGame();
  const [sound, setSound] = useState(soundOn);
  const [sheet] = useIonActionSheet();
  const [toast] = useIonToast();

  const resetData = () =>
    sheet({
      header: '学習の進み具合と練習の記録をすべて削除します。元に戻せません。',
      buttons: [
        {
          text: 'すべて削除', role: 'destructive', handler: () => {
            clearHistory();
            save('hl.lessonsDone.v1', []);
            for (const k of ['hl.xp.v1', 'hl.badges.v1', 'hl.counters.v1', 'hl.review.v1']) { try { localStorage.removeItem(k); } catch { /* storage blocked */ } }
            window.dispatchEvent(new CustomEvent('hl:game'));
            toast({ message: '削除しました', duration: 1500, position: 'top' });
          },
        },
        { text: 'キャンセル', role: 'cancel' },
      ],
    });

  return (
    <Page title="設定" back="/me" backText="マイページ">
      <div className="list-header">外観</div>
      <IonList inset>
        <IonRadioGroup value={appearance} onIonChange={(e) => { setA(e.detail.value); setAppearance(e.detail.value); }}>
          <IonItem><IonRadio value="system">自動（端末の設定に合わせる）</IonRadio></IonItem>
          <IonItem><IonRadio value="light">ライト</IonRadio></IonItem>
          <IonItem><IonRadio value="dark">ダーク</IonRadio></IonItem>
        </IonRadioGroup>
      </IonList>

      <div className="list-header">効果</div>
      <IonList inset>
        <IonItem>
          <IonToggle checked={sound} onIonChange={(e) => { setSound(e.detail.checked); setSoundOn(e.detail.checked); if (e.detail.checked) sfx.correct(); }}>
            <IonLabel>効果音<p>正解・完了・レベルアップの音</p></IonLabel>
          </IonToggle>
        </IonItem>
      </IonList>

      <div className="list-header">1日の目標</div>
      <IonList inset>
        <IonRadioGroup value={game.goal} onIonChange={(e) => setGoal(Number(e.detail.value))}>
          {GOALS.map((g) => (
            <IonItem key={g.xp}><IonRadio value={g.xp}>{g.label}（{g.xp} XP・{g.sub}）</IonRadio></IonItem>
          ))}
        </IonRadioGroup>
      </IonList>

      {demo && PAID_PLANS && (
        <>
        <div className="list-header">デモモード</div>
        <IonList inset>
          <IonItem>
            <IonToggle checked={isPro} onIonChange={(e) => setDemoPro(e.detail.checked)}>
              <IonLabel>Pro を有効にする<p>動作確認用。サーバー未接続時だけ表示されます</p></IonLabel>
            </IonToggle>
          </IonItem>
        </IonList>
        </>
      )}

      <IonList inset>
        <IonItem button detail={false} onClick={resetData}>
          <IonLabel color="danger">学習データをリセット</IonLabel>
        </IonItem>
      </IonList>
    </Page>
  );
}
