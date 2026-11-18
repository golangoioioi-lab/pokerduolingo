import Stripe from 'stripe';
import type { Env } from './env';

export function stripeFor(env: Env): Stripe {
  if (!env.STRIPE_SECRET_KEY) throw new Error('stripe-not-configured');
  // Workers have no Node http module: use fetch. No apiVersion: the SDK pins its own.
  return new Stripe(env.STRIPE_SECRET_KEY, { httpClient: Stripe.createFetchHttpClient() });
}

export const cryptoProvider = Stripe.createSubtleCryptoProvider();

const ACTIVE = new Set(['active', 'trialing']);

/** Mirrors a Stripe subscription into the entitlements table. The only place Pro is granted. */
export async function syncSubscription(env: Env, sub: Stripe.Subscription) {
  const userId = sub.metadata?.user_id;
  if (!userId) return;
  // The account may have been deleted already (we cancel on deletion): nothing to update.
  const user = await env.DB.prepare('SELECT id FROM users WHERE id = ?').bind(userId).first();
  if (!user) return;
  const item = sub.items.data[0];
  const periodEnd = item?.current_period_end ? item.current_period_end * 1000 : null;
  await env.DB.prepare(
    `INSERT INTO entitlements (user_id, plan, active, current_period_end, stripe_customer_id, stripe_subscription_id, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT (user_id) DO UPDATE SET plan = excluded.plan, active = excluded.active,
       current_period_end = excluded.current_period_end, stripe_customer_id = excluded.stripe_customer_id,
       stripe_subscription_id = excluded.stripe_subscription_id, updated_at = excluded.updated_at`,
  ).bind(
    userId,
    item?.price.recurring?.interval === 'year' ? 'yearly' : 'monthly',
    ACTIVE.has(sub.status) ? 1 : 0,
    periodEnd,
    typeof sub.customer === 'string' ? sub.customer : sub.customer.id,
    sub.id,
    Date.now(),
  ).run();
}

export async function customerFor(env: Env, stripe: Stripe, userId: string, email: string): Promise<string> {
  const row = await env.DB.prepare('SELECT stripe_customer_id FROM entitlements WHERE user_id = ?').bind(userId)
    .first<{ stripe_customer_id: string | null }>();
  if (row?.stripe_customer_id) return row.stripe_customer_id;
  const customer = await stripe.customers.create({ email, metadata: { user_id: userId } });
  await env.DB.prepare(
    `INSERT INTO entitlements (user_id, stripe_customer_id, updated_at) VALUES (?, ?, ?)
     ON CONFLICT (user_id) DO UPDATE SET stripe_customer_id = excluded.stripe_customer_id, updated_at = excluded.updated_at`,
  ).bind(userId, customer.id, Date.now()).run();
  return customer.id;
}
