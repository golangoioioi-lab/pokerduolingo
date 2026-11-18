import type { Plan } from './account';

// Prices are set per deployment (tax included, JPY). Until they are decided the UI shows
// placeholders, so a build without them must not be published.
const env = (v: unknown) => (v ? Number(v) : null);

export interface PlanInfo {
  id: Plan;
  name: string;
  /** Price per period in JPY, tax included; null = not decided yet. */
  price: number | null;
  period: string; // 月 / 年
  cycle: string; // 1か月 / 1年
}

export const PLANS: Record<Plan, PlanInfo> = {
  monthly: { id: 'monthly', name: '月額プラン', price: env(import.meta.env.VITE_PRICE_MONTHLY_JPY), period: '月', cycle: '1か月' },
  yearly: { id: 'yearly', name: '年額プラン', price: env(import.meta.env.VITE_PRICE_YEARLY_JPY), period: '年', cycle: '1年' },
};

export const yen = (n: number | null) => (n === null ? '[未定]円' : `${n.toLocaleString('ja-JP')}円`);

/** "月額 980円（税込）" */
export const priceLabel = (p: PlanInfo) => `${p.period}額 ${yen(p.price)}（税込）`;
