import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IonButton, IonIcon, IonSpinner, useIonToast } from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import Page from '../../ui/Page';
import { useAccount } from '../../services/account';
import { usePaywall } from '../../ui/Paywall';
import { FREE_DAILY_QUESTIONS, FREE_STATS_DAYS } from '../../services/access';

const ROWS: [string, string, string][] = [
  ['初心者・初級コース', 'すべて', 'すべて'],
  ['その他のコース', '各コース最初の1〜2本', 'すべて'],
  ['プリフロップ練習', `1日${FREE_DAILY_QUESTIONS}問`, '無制限'],
  ['vs オープンの練習', '—', '○'],
  ['レンジ表の編集', '—', '○'],
  ['成績の分析', `${FREE_STATS_DAYS}日`, '全期間'],
  ['端末間の同期', '—', '○'],
];

type Confirm = 'idle' | 'checking' | 'success' | 'pending';

export default function PlanPage() {
  const { isPro, demo, user, manageSubscription, refresh } = useAccount();
  const paywall = usePaywall();
  const [toast] = useIonToast();
  const [params, setParams] = useSearchParams();
  const [confirm, setConfirm] = useState<Confirm>('idle');
  const started = useRef(false);

  // Back from Stripe Checkout. Pro is granted only by the webhook, so poll the
  // entitlement for a short while instead of trusting this URL parameter.
  useEffect(() => {
    if (params.get('checkout') !== 'success' || started.current) return;
    started.current = true;
    setParams({}, { replace: true });
    setConfirm('checking');
    let cancelled = false;
    (async () => {
      for (let i = 0; i < 10 && !cancelled; i++) {
        if (await refresh()) { setConfirm('success'); return; }
        await new Promise((r) => setTimeout(r, 1500));
      }
      if (!cancelled) setConfirm('pending');
    })();
    return () => { cancelled = true; };
  }, [params, refresh, setParams]);

  const manage = async () => {
    const { error } = await manageSubscription();
    if (error) toast({ message: error, duration: 2500, position: 'top' });
  };

  const restore = async () => {
    const ok = await refresh();
    toast({ message: ok ? 'Pro を確認しました' : 'このアカウントに有効な Pro の購入は見つかりませんでした', duration: 2500, position: 'top' });
  };

  return (
    <Page title="プラン" back="/me" backText="マイページ">
      {confirm !== 'idle' && (
        <div className="section">
          <div className="confirm-card">
            {confirm === 'checking' && <><IonSpinner /><span>購入を確認しています…</span></>}
            {confirm === 'success' && <><span className="confirm-check"><IonIcon icon={checkmark} /></span><span>Pro になりました。ありがとうございます。</span></>}
            {confirm === 'pending' && <span>支払いは完了しています。反映に時間がかかっているため、少し待ってから「購入を復元」を押してください。</span>}
          </div>
        </div>
      )}

      <div className="section">
        <div className="plan-now">
          <span className="plan-eyebrow">Current plan</span>
          <span className="plan-name">{isPro ? 'Pro' : 'Free'}</span>
        </div>
      </div>

      <h2 className="section-title">Compare</h2>
      <div className="compare">
        <div className="compare-row compare-head"><span /><span>Free</span><span>Pro</span></div>
        {ROWS.map(([name, free, pro]) => (
          <div key={name} className="compare-row">
            <span className="compare-name">{name}</span>
            <span className="compare-free">{free}</span>
            <span className="compare-pro">{pro}</span>
          </div>
        ))}
      </div>

      <div className="section">
        {isPro ? (
          !demo && <IonButton expand="block" fill="outline" className="btn-large btn-oauth-outline" onClick={manage}>プランを管理（解約・支払い方法・領収書）</IonButton>
        ) : (
          <IonButton expand="block" className="btn-large" onClick={() => paywall('plan')}>Pro にアップグレード</IonButton>
        )}
        {!demo && user && <IonButton expand="block" fill="clear" onClick={restore}>購入を復元</IonButton>}
        <p className="footnote">解約はいつでもできます。解約後も、支払い済みの期間の終わりまで Pro を使えます。</p>
      </div>
    </Page>
  );
}
