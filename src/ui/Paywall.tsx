import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import {
  IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonModal, IonNote, IonRouterLink, IonTitle, IonToolbar,
  useIonRouter, useIonToast,
} from '@ionic/react';
import { bookOutline, infiniteOutline, statsChartOutline, gridOutline, syncOutline } from 'ionicons/icons';
import { useAccount, type Plan } from '../services/account';
import { PLANS, priceLabel, yen } from '../services/pricing';
import { COURSES } from '../domain/content/catalog';

const LESSON_COUNT = COURSES.reduce((n, c) => n + c.lessons.length, 0);

const REASONS: Record<string, string> = {
  lesson: 'このレッスンは Pro で読めます',
  quota: '今日の無料の練習問題を使い切りました',
  spot: 'このスポットの練習は Pro で使えます',
  ranges: 'レンジ表の編集は Pro で使えます',
  stats: '8日以上前の成績は Pro で見られます',
  plan: 'すべてのコースと練習を、制限なく',
};

const FEATURES = [
  { icon: bookOutline, title: `全${LESSON_COUNT}レッスン`, sub: `${COURSES.length}コースすべてを読める` },
  { icon: infiniteOutline, title: '練習が無制限', sub: 'vs オープンを含む全8スポット' },
  { icon: gridOutline, title: 'レンジ表の編集', sub: '自分の戦略で練習できる' },
  { icon: statsChartOutline, title: '全期間の成績分析', sub: '苦手ハンドを長期で追える' },
  { icon: syncOutline, title: '端末間で同期', sub: 'スマホとPCで続きから' },
];

/**
 * Items the final confirmation screen must show before a subscription is ordered
 * (特定商取引法 12条の6: 分量・対価・支払時期と方法・提供時期・申込みの撤回/解除).
 */
export function subscriptionTerms(plan: Plan): [string, string][] {
  const p = PLANS[plan];
  return [
    ['商品', `Holdem Lab Pro（${p.name}）`],
    ['価格', priceLabel(p)],
    ['契約期間', `${p.cycle}ごとの自動更新。解約するまで、${p.cycle}ごとに ${yen(p.price)}（税込）が請求されます。`],
    ['支払時期', `申込み時に初回分をお支払いいただきます。以降は${p.cycle}ごと、申込日と同じ日付に請求します。`],
    ['支払方法', 'クレジットカード'],
    ['提供時期', '決済完了後、すぐにご利用いただけます。'],
    ['解約方法', 'マイページ ＞ プラン ＞「プランを管理」から、いつでも手続きできます。次回の更新日の前日までに解約すると、以降の請求は発生しません。'],
    ['解約後', 'お支払い済みの期間の終わりまで Pro をご利用いただけます。期間途中の解約による日割り返金はありません。'],
    ['申込みの撤回', '通信販売のため、クーリング・オフ制度は適用されません。'],
  ];
}

const Ctx = createContext<(reason: keyof typeof REASONS) => void>(() => {});

export const usePaywall = () => useContext(Ctx);

export function PaywallProvider({ children }: { children: ReactNode }) {
  const [reason, setReason] = useState<string | null>(null);
  const [confirming, setConfirming] = useState<Plan | null>(null);
  const open = useCallback((r: keyof typeof REASONS) => { setConfirming(null); setReason(r); }, []);
  const { purchase, user, demo } = useAccount();
  const [toast] = useIonToast();
  const router = useIonRouter();

  const close = () => { setReason(null); setConfirming(null); };

  const choose = (plan: Plan) => {
    if (!demo && !user) {
      close();
      router.push('/me/account');
      toast({ message: '購入にはログインが必要です', duration: 2500, position: 'top' });
      return;
    }
    setConfirming(plan);
  };

  const order = async (plan: Plan) => {
    const { error } = await purchase(plan);
    if (error) toast({ message: error, duration: 2500, position: 'top' });
    else if (demo) {
      close();
      toast({ message: 'デモ：Pro を有効にしました（請求は発生しません）', duration: 2000, position: 'top' });
    }
  };

  return (
    <Ctx.Provider value={open}>
      {children}
      <IonModal isOpen={reason !== null} onDidDismiss={close}>
        <IonHeader>
          <IonToolbar>
            {confirming && (
              <IonButtons slot="start">
                <IonButton onClick={() => setConfirming(null)}>戻る</IonButton>
              </IonButtons>
            )}
            <IonTitle>{confirming ? '申込み内容の確認' : 'Holdem Lab Pro'}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={close}>閉じる</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        {confirming ? (
          <IonContent className="grouped">
            <p className="page-intro">以下の内容をご確認のうえ、お申し込みください。</p>
            <IonList inset>
              {subscriptionTerms(confirming).map(([k, v]) => (
                <IonItem key={k}>
                  <IonLabel className="ion-text-wrap terms-row">
                    <span className="terms-key">{k}</span>
                    <span className="terms-val">{v}</span>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
            <div className="paywall-actions">
              <IonButton expand="block" className="btn-large" onClick={() => order(confirming)}>
                上記に同意して申し込む
              </IonButton>
              <IonNote className="paywall-note">
                申込みボタンを押すと決済画面に移ります。お申し込みにより
                <IonRouterLink routerLink="/me/legal/terms" onClick={close}>利用規約</IonRouterLink>
                に同意したものとみなします。販売事業者の情報は
                <IonRouterLink routerLink="/me/legal/tokushoho" onClick={close}>特定商取引法に基づく表記</IonRouterLink>
                をご覧ください。
                {demo && ' 現在はデモモードのため、実際の請求は発生しません。'}
              </IonNote>
            </div>
          </IonContent>
        ) : (
          <IonContent className="grouped">
            <div className="paywall-head">
              <div className="paywall-badge">PRO</div>
              <h1>{REASONS[reason ?? 'plan']}</h1>
            </div>
            <IonList inset>
              {FEATURES.map((f) => (
                <IonItem key={f.title} lines="full">
                  <IonIcon icon={f.icon} slot="start" color="primary" aria-hidden="true" />
                  <IonLabel>
                    <h3>{f.title}</h3>
                    <p>{f.sub}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
            <div className="paywall-actions">
              <IonButton expand="block" className="btn-large" onClick={() => choose('yearly')}>
                年額プラン　{yen(PLANS.yearly.price)}／年
              </IonButton>
              <IonButton expand="block" fill="clear" onClick={() => choose('monthly')}>
                月額プラン　{yen(PLANS.monthly.price)}／月
              </IonButton>
              <IonNote className="paywall-note">
                価格は税込です。自動更新のサブスクリプションで、いつでも解約できます。次の画面で契約内容をご確認いただけます。
              </IonNote>
            </div>
          </IonContent>
        )}
      </IonModal>
    </Ctx.Provider>
  );
}
