import { IonItem, IonLabel, IonList, IonNote } from '@ionic/react';
import Page from '../../ui/Page';
import { useAccount } from '../../services/account';
import { usePaywall } from '../../ui/Paywall';
import { PAID_PLANS } from '../../services/backend';

export default function MeHome() {
  const { isPro, user, demo } = useAccount();
  const paywall = usePaywall();

  return (
    <Page title="マイページ">
      {PAID_PLANS && <IonList inset>
        {isPro ? (
          <IonItem routerLink="/me/plan" detail>
            <div slot="start" className="app-icon tint-yellow" aria-hidden="true">★</div>
            <IonLabel><h3>Pro を利用中</h3><p>プランの確認・管理</p></IonLabel>
          </IonItem>
        ) : (
          <IonItem button detail onClick={() => paywall('plan')}>
            <div slot="start" className="app-icon tint-yellow" aria-hidden="true">★</div>
            <IonLabel><h3>Pro にアップグレード</h3><p>全コースと練習を制限なく</p></IonLabel>
          </IonItem>
        )}
      </IonList>}

      <IonList inset>
        <IonItem routerLink="/me/stats" detail>
          <div slot="start" className="app-icon tint-green" aria-hidden="true">▲</div>
          <IonLabel>成績</IonLabel>
        </IonItem>
        <IonItem routerLink="/me/badges" detail>
          <div slot="start" className="app-icon tint-yellow" aria-hidden="true">★</div>
          <IonLabel>実績</IonLabel>
        </IonItem>
        {PAID_PLANS && <IonItem routerLink="/me/plan" detail>
          <div slot="start" className="app-icon tint-indigo" aria-hidden="true">¥</div>
          <IonLabel>プラン</IonLabel>
        </IonItem>}
        <IonItem routerLink="/me/settings" detail>
          <div slot="start" className="app-icon tint-gray" aria-hidden="true">⚙</div>
          <IonLabel>設定</IonLabel>
        </IonItem>
        <IonItem routerLink="/me/account" detail>
          <div slot="start" className="app-icon tint-blue" aria-hidden="true">@</div>
          <IonLabel>アカウント</IonLabel>
          <IonNote slot="end">{demo ? 'デモ' : user ? 'ログイン中' : '未ログイン'}</IonNote>
        </IonItem>
      </IonList>

      <IonList inset>
        <IonItem routerLink="/me/legal/terms" detail><IonLabel>利用規約</IonLabel></IonItem>
        <IonItem routerLink="/me/legal/privacy" detail><IonLabel>プライバシーポリシー</IonLabel></IonItem>
        {PAID_PLANS && <IonItem routerLink="/me/legal/tokushoho" detail><IonLabel>特定商取引法に基づく表記</IonLabel></IonItem>}
      </IonList>
      <p className="footnote center">Holdem Lab 0.1.0</p>
    </Page>
  );
}
