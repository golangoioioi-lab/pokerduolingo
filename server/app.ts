import { Hono } from 'hono';
import type Stripe from 'stripe';
import type { Env } from './env';
import { currentUser, endSession, hasActivePro, startSession, upsertGoogleUser, verifyGoogleIdToken } from './auth';
import { cryptoProvider, customerFor, stripeFor, syncSubscription } from './billing';

type App = { Bindings: Env };
export const app = new Hono<App>().basePath('/api');

const LESSON_ID = /^[a-z0-9-]{1,64}$/;
const isLocal = (url: string) => ['localhost', '127.0.0.1'].includes(new URL(url).hostname);

// ---- CSRF: state-changing requests must come from our own origin. ----
// The session cookie is SameSite=Lax; this adds an explicit Origin check on top.
app.use('*', async (c, next) => {
  if (c.req.method === 'GET' || c.req.method === 'HEAD' || c.req.path === '/api/billing/webhook') return next();
  const origin = c.req.header('Origin');
  const allowed = new Set([c.env.APP_ORIGIN, new URL(c.req.url).origin]);
  if (!origin || !allowed.has(origin)) return c.json({ error: 'bad-origin' }, 403);
  return next();
});

app.use('*', async (c, next) => {
  await next();
  c.header('Cache-Control', 'no-store');
});

// ---- auth ----
app.post('/auth/google', async (c) => {
  const { credential } = await c.req.json<{ credential?: string }>().catch(() => ({ credential: undefined }));
  if (!credential) return c.json({ error: 'missing-credential' }, 400);
  try {
    const g = await verifyGoogleIdToken(credential, c.env.GOOGLE_CLIENT_ID);
    await startSession(c, await upsertGoogleUser(c.env, g));
    return c.json({ ok: true });
  } catch {
    return c.json({ error: 'invalid-credential' }, 401);
  }
});

/** Local testing only: sign in without Google. Requires DEV_LOGIN=1 AND a localhost request. */
app.post('/auth/dev', async (c) => {
  if (c.env.DEV_LOGIN !== '1' || !isLocal(c.req.url)) return c.json({ error: 'not-found' }, 404);
  const { email } = await c.req.json<{ email?: string }>().catch(() => ({ email: undefined }));
  if (!email) return c.json({ error: 'missing-email' }, 400);
  await startSession(c, await upsertGoogleUser(c.env, { sub: `dev:${email}`, email, name: email.split('@')[0] }));
  return c.json({ ok: true });
});

app.post('/auth/logout', async (c) => {
  await endSession(c);
  return c.json({ ok: true });
});

// ---- account ----
app.get('/me', async (c) => {
  const user = await currentUser(c);
  if (!user) return c.json({ user: null, isPro: false });
  const pro = await hasActivePro(c.env, user.id);
  return c.json({ user: { email: user.email, displayName: user.display_name ?? '' }, isPro: pro.active, periodEnd: pro.periodEnd });
});

app.patch('/me', async (c) => {
  const user = await currentUser(c);
  if (!user) return c.json({ error: 'unauthorized' }, 401);
  const { displayName } = await c.req.json<{ displayName?: unknown }>().catch(() => ({ displayName: undefined }));
  if (typeof displayName !== 'string') return c.json({ error: 'bad-request' }, 400);
  const clean = displayName.trim().slice(0, 30) || null;
  await c.env.DB.prepare('UPDATE users SET display_name = ? WHERE id = ?').bind(clean, user.id).run();
  return c.json({ ok: true, displayName: clean ?? '' });
});

/** Account deletion: cancel billing first so a deleted user is never charged again. */
app.delete('/me', async (c) => {
  const user = await currentUser(c);
  if (!user) return c.json({ error: 'unauthorized' }, 401);
  const ent = await c.env.DB.prepare('SELECT stripe_subscription_id FROM entitlements WHERE user_id = ?').bind(user.id)
    .first<{ stripe_subscription_id: string | null }>();
  if (ent?.stripe_subscription_id) {
    try {
      await stripeFor(c.env).subscriptions.cancel(ent.stripe_subscription_id);
    } catch (e) {
      if ((e as { code?: string }).code !== 'resource_missing') return c.json({ error: 'cancel-failed' }, 502);
    }
  }
  await c.env.DB.batch([
    c.env.DB.prepare('DELETE FROM attempts WHERE user_id = ?').bind(user.id),
    c.env.DB.prepare('DELETE FROM progress WHERE user_id = ?').bind(user.id),
    c.env.DB.prepare('DELETE FROM entitlements WHERE user_id = ?').bind(user.id),
    c.env.DB.prepare('DELETE FROM sessions WHERE user_id = ?').bind(user.id),
    c.env.DB.prepare('DELETE FROM users WHERE id = ?').bind(user.id),
  ]);
  await endSession(c);
  return c.json({ ok: true });
});

// ---- progress sync ----
app.get('/progress', async (c) => {
  const user = await currentUser(c);
  if (!user) return c.json({ error: 'unauthorized' }, 401);
  const { results } = await c.env.DB.prepare('SELECT lesson_id FROM progress WHERE user_id = ?').bind(user.id).all<{ lesson_id: string }>();
  return c.json({ lessonIds: results.map((r) => r.lesson_id) });
});

app.post('/progress', async (c) => {
  const user = await currentUser(c);
  if (!user) return c.json({ error: 'unauthorized' }, 401);
  const { lessonIds } = await c.req.json<{ lessonIds?: unknown }>().catch(() => ({ lessonIds: undefined }));
  if (!Array.isArray(lessonIds) || lessonIds.length > 1000 || !lessonIds.every((x) => typeof x === 'string' && LESSON_ID.test(x))) {
    return c.json({ error: 'bad-request' }, 400);
  }
  const now = Date.now();
  if (lessonIds.length) {
    await c.env.DB.batch(lessonIds.map((id) =>
      c.env.DB.prepare('INSERT OR IGNORE INTO progress (user_id, lesson_id, completed_at) VALUES (?, ?, ?)').bind(user.id, id, now)));
  }
  return c.json({ ok: true });
});

app.post('/attempts', async (c) => {
  const user = await currentUser(c);
  if (!user) return c.json({ error: 'unauthorized' }, 401);
  const b = await c.req.json<Record<string, unknown>>().catch(() => ({} as Record<string, unknown>));
  const ok = typeof b.spot === 'string' && b.spot.length <= 32 && typeof b.hand === 'string' && b.hand.length <= 4
    && (b.action === 'fold' || b.action === 'call' || b.action === 'raise') && typeof b.correct === 'boolean';
  if (!ok) return c.json({ error: 'bad-request' }, 400);
  const t = typeof b.t === 'number' && b.t > 0 && b.t <= Date.now() + 60000 ? b.t : Date.now();
  await c.env.DB.prepare('INSERT INTO attempts (user_id, spot, hand, action, correct, created_at) VALUES (?, ?, ?, ?, ?, ?)')
    .bind(user.id, b.spot, b.hand, b.action, b.correct ? 1 : 0, t).run();
  return c.json({ ok: true });
});

// ---- paid content ----
app.get('/lessons/:id', async (c) => {
  const id = c.req.param('id');
  if (!LESSON_ID.test(id)) return c.json({ error: 'not-found' }, 404);
  const row = await c.env.DB.prepare('SELECT tier, blocks FROM lesson_content WHERE lesson_id = ?').bind(id)
    .first<{ tier: string; blocks: string }>();
  if (!row) return c.json({ error: 'not-found' }, 404);
  if (row.tier === 'pro') {
    const user = await currentUser(c);
    if (!user) return c.json({ error: 'unauthorized' }, 401);
    if (!(await hasActivePro(c.env, user.id)).active) return c.json({ error: 'pro-required' }, 403);
  }
  return c.body(`{"blocks":${row.blocks}}`, 200, { 'Content-Type': 'application/json' });
});

// ---- billing ----
app.post('/billing/checkout', async (c) => {
  const user = await currentUser(c);
  if (!user) return c.json({ error: 'unauthorized' }, 401);
  const { plan } = await c.req.json<{ plan?: string }>().catch(() => ({ plan: undefined }));
  const price = plan === 'monthly' ? c.env.STRIPE_PRICE_MONTHLY : plan === 'yearly' ? c.env.STRIPE_PRICE_YEARLY : undefined;
  if (!price) return c.json({ error: 'bad-plan' }, 400);
  if ((await hasActivePro(c.env, user.id)).active) return c.json({ error: 'already-pro' }, 409);
  const stripe = stripeFor(c.env);
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    customer: await customerFor(c.env, stripe, user.id, user.email),
    line_items: [{ price, quantity: 1 }],
    client_reference_id: user.id,
    subscription_data: { metadata: { user_id: user.id } },
    success_url: `${c.env.APP_ORIGIN}/me/plan?checkout=success`,
    cancel_url: `${c.env.APP_ORIGIN}/me/plan?checkout=cancel`,
  });
  return c.json({ url: session.url });
});

app.post('/billing/portal', async (c) => {
  const user = await currentUser(c);
  if (!user) return c.json({ error: 'unauthorized' }, 401);
  const row = await c.env.DB.prepare('SELECT stripe_customer_id FROM entitlements WHERE user_id = ?').bind(user.id)
    .first<{ stripe_customer_id: string | null }>();
  if (!row?.stripe_customer_id) return c.json({ error: 'no-customer' }, 404);
  const session = await stripeFor(c.env).billingPortal.sessions.create({
    customer: row.stripe_customer_id,
    return_url: `${c.env.APP_ORIGIN}/me/plan`,
    // Created by `npm run setup`; without it Stripe uses the account's default portal settings.
    ...(c.env.STRIPE_PORTAL_CONFIGURATION ? { configuration: c.env.STRIPE_PORTAL_CONFIGURATION } : {}),
  });
  return c.json({ url: session.url });
});

/** Stripe -> entitlements. Authenticated by the Stripe signature, not by a session. */
app.post('/billing/webhook', async (c) => {
  const signature = c.req.header('stripe-signature');
  if (!signature || !c.env.STRIPE_WEBHOOK_SECRET) return c.text('bad request', 400);
  const body = await c.req.text();
  const stripe = stripeFor(c.env);
  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(body, signature, c.env.STRIPE_WEBHOOK_SECRET, undefined, cryptoProvider);
  } catch {
    return c.text('invalid signature', 400);
  }
  const seen = await c.env.DB.prepare('SELECT id FROM stripe_events WHERE id = ?').bind(event.id).first();
  if (seen) return c.text('ok');
  try {
    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted':
        await syncSubscription(c.env, event.data.object as Stripe.Subscription);
        break;
      case 'checkout.session.completed': {
        const s = event.data.object as Stripe.Checkout.Session;
        if (s.subscription) await syncSubscription(c.env, await stripe.subscriptions.retrieve(String(s.subscription)));
        break;
      }
    }
  } catch {
    return c.text('sync failed', 500); // Stripe retries non-2xx
  }
  await c.env.DB.prepare('INSERT OR IGNORE INTO stripe_events (id, created_at) VALUES (?, ?)').bind(event.id, Date.now()).run();
  return c.text('ok');
});

app.notFound((c) => c.json({ error: 'not-found' }, 404));
app.onError((err, c) => {
  console.error(err);
  return c.json({ error: 'server-error' }, 500);
});
