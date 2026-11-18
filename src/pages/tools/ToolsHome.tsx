import { IonItem, IonLabel, IonList } from '@ionic/react';
import Page from '../../ui/Page';

export default function ToolsHome() {
  return (
    <Page title="ツール">
      <IonList inset>
        <IonItem routerLink="/tools/ranges" detail>
          <div slot="start" className="app-icon tint-red" aria-hidden="true">▦</div>
          <IonLabel>
            <h3>レンジ表</h3>
            <p>ポジションごとの参加ハンド</p>
          </IonLabel>
        </IonItem>
        <IonItem routerLink="/tools/equity" detail>
          <div slot="start" className="app-icon tint-blue" aria-hidden="true">%</div>
          <IonLabel>
            <h3>勝率計算</h3>
            <p>ハンド同士・ハンド対レンジ</p>
          </IonLabel>
        </IonItem>
      </IonList>
    </Page>
  );
}
