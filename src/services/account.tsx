import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { api, isDemoMode, PAID_PLANS, setSignedIn } from './backend';
import { load, save } from './storage';
import { syncProgress } from './sync';

export type Plan = 'monthly' | 'yearly';
type Result = { error?: string };

export interface AccountUser { email: string }

interface AccountState {
  user: AccountUser | null;
  displayName: string;
  isPro: boolean;
  /** When the current paid period ends (ms), if known. */
  periodEnd: number | null;
  loading: boolean;
  demo: boolean;
  /** Exchanges a Google Sign-In credential (ID token) for a session cookie. */
  signInWithGoogle: (credential: string) => Promise<Result>;
  /** Local development only (see DEV_LOGIN). */
  devSignIn: (email: string) => Promise<Result>;
  signOut: () => Promise<void>;
  updateDisplayName: (name: string) => Promise<Result>;
  /** Starts a purchase. Web: Stripe Checkout. Demo: toggles locally. */
  purchase: (plan: Plan) => Promise<Result>;
  manageSubscription: () => Promise<Result>;
  /** Cancels billing and deletes the account and all server data. */
  deleteAccount: () => Promise<Result>;
  /** Re-reads the account from the server. Returns whether Pro is active. */
  refresh: () => Promise<boolean>;
  /** Demo mode only. */
  setDemoPro: (v: boolean) => void;
}

interface MeResponse { user: { email: string; displayName: string } | null; isPro: boolean; periodEnd?: number | null }

const Ctx = createContext<AccountState | null>(null);
const DEMO_PRO_KEY = 'hl.demoPro.v1';
const NETWORK = '通信に失敗しました。時間をおいて再度お試しください';

export function AccountProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AccountUser | null>(null);
  const [displayName, setDisplayName] = useState('');
  const [isPro, setIsPro] = useState<boolean>(() => (isDemoMode ? load(DEMO_PRO_KEY, false) : false));
  const [periodEnd, setPeriodEnd] = useState<number | null>(null);
  const [loading, setLoading] = useState(!isDemoMode);

  // Pro comes only from the server, which reads the entitlement written by the Stripe webhook.
  const refresh = useCallback(async () => {
    if (isDemoMode) return load(DEMO_PRO_KEY, false);
    const res = await api<MeResponse>('/me');
    if (!res.ok || !res.data) return false;
    const me = res.data;
    setUser(me.user ? { email: me.user.email } : null);
    setDisplayName(me.user?.displayName ?? '');
    setIsPro(me.isPro);
    setPeriodEnd(me.periodEnd ?? null);
    setSignedIn(!!me.user);
    return me.isPro;
  }, []);

  useEffect(() => {
    if (isDemoMode) return;
    void refresh().then(() => syncProgress()).finally(() => setLoading(false));
  }, [refresh]);

  const afterSignIn = useCallback(async () => {
    await refresh();
    await syncProgress();
  }, [refresh]);

  const value = useMemo<AccountState>(() => ({
    user,
    displayName,
    // With paid plans off, everyone gets everything.
    isPro: isPro || !PAID_PLANS,
    periodEnd,
    loading,
    demo: isDemoMode,
    async signInWithGoogle(credential) {
      const res = await api('/auth/google', { method: 'POST', body: { credential } });
      if (!res.ok) return { error: res.status === 0 ? NETWORK : 'Google でのログインに失敗しました' };
      await afterSignIn();
      return {};
    },
    async devSignIn(email) {
      const res = await api('/auth/dev', { method: 'POST', body: { email } });
      if (!res.ok) return { error: '開発用ログインは使えません（DEV_LOGIN が無効）' };
      await afterSignIn();
      return {};
    },
    async signOut() {
      await api('/auth/logout', { method: 'POST' });
      setUser(null);
      setIsPro(false);
      setDisplayName('');
      setSignedIn(false);
    },
    async updateDisplayName(name) {
      const res = await api<{ displayName: string }>('/me', { method: 'PATCH', body: { displayName: name } });
      if (!res.ok || !res.data) return { error: NETWORK };
      setDisplayName(res.data.displayName);
      return {};
    },
    async purchase(plan) {
      if (isDemoMode) {
        save(DEMO_PRO_KEY, true);
        setIsPro(true);
        return {};
      }
      if (!user) return { error: 'ログインが必要です' };
      const res = await api<{ url: string }>('/billing/checkout', { method: 'POST', body: { plan } });
      if (res.status === 409) { await refresh(); return { error: 'すでに Pro をご利用中です' }; }
      if (!res.ok || !res.data?.url) return { error: '購入画面を開けませんでした' };
      window.location.assign(res.data.url);
      return {};
    },
    async manageSubscription() {
      if (isDemoMode) return { error: 'デモモードでは利用できません' };
      const res = await api<{ url: string }>('/billing/portal', { method: 'POST' });
      if (!res.ok || !res.data?.url) return { error: '管理画面を開けませんでした' };
      window.location.assign(res.data.url);
      return {};
    },
    async deleteAccount() {
      if (isDemoMode) return { error: 'デモモードでは利用できません' };
      const res = await api('/me', { method: 'DELETE' });
      if (!res.ok) return { error: '退会処理に失敗しました。時間をおいて再度お試しください' };
      setUser(null);
      setIsPro(false);
      setDisplayName('');
      setSignedIn(false);
      return {};
    },
    refresh,
    setDemoPro(v) {
      if (!isDemoMode) return;
      save(DEMO_PRO_KEY, v);
      setIsPro(v);
    },
  }), [user, displayName, isPro, periodEnd, loading, refresh, afterSignIn]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAccount(): AccountState {
  const v = useContext(Ctx);
  if (!v) throw new Error('useAccount must be used inside AccountProvider');
  return v;
}
