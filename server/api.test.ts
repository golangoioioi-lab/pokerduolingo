// End-to-end API tests: the real Hono app against a real (local) D1 database via Miniflare.
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { getPlatformProxy } from 'wrangler';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { SignJWT, exportJWK, generateKeyPair, createLocalJWKSet } from 'jose';
import Stripe from 'stripe';
import type { D1Database } from '@cloudflare/workers-types';
import { app } from './app';
import { setGoogleKeysForTest } from './auth';
import type { Env } from './env';

const ORIGIN = 'http://localhost:8788';
const CLIENT_ID = 'test-client.apps.googleusercontent.com';
const WEBHOOK_SECRET = 'whsec_test_secret';

let proxy: Awaited<ReturnType<typeof getPlatformProxy>>;
let env: Env;
let signKey: CryptoKey;

beforeAll(async () => {
  proxy = await getPlatformProxy({ persist: false });
  const DB = (proxy.env as { DB: unknown }).DB as D1Database;
  const schema = readFileSync(join(import.meta.dirname, '../migrations/0001_init.sql'), 'utf8')
    .split(';').map((s) => s.replace(/--.*$/gm, '').trim()).filter(Boolean);
  for (const stmt of schema) await DB.prepare(stmt).run();
  await DB.prepare("INSERT INTO lesson_content (lesson_id, course_id, tier, blocks) VALUES ('free-1', 'c', 'free', '[{\"t\":\"p\",\"text\":\"free\"}]')").run();
  await DB.prepare("INSERT INTO lesson_content (lesson_id, course_id, tier, blocks) VALUES ('pro-1', 'c', 'pro', '[{\"t\":\"p\",\"text\":\"secret\"}]')").run();
  env = {
    DB, GOOGLE_CLIENT_ID: CLIENT_ID, APP_ORIGIN: ORIGIN,
    STRIPE_SECRET_KEY: 'sk_test_dummy', STRIPE_WEBHOOK_SECRET: WEBHOOK_SECRET,
  };
  const { publicKey, privateKey } = await generateKeyPair('RS256');
  signKey = privateKey;
  setGoogleKeysForTest(createLocalJWKSet({ keys: [{ ...(await exportJWK(publicKey)), kid: 'k1', alg: 'RS256' }] }));
});
afterAll(async () => { setGoogleKeysForTest(null); await proxy?.dispose(); });
beforeEach(async () => {
  for (const t of ['attempts', 'progress', 'entitlements', 'sessions', 'stripe_events', 'users']) await env.DB.prepare(`DELETE FROM ${t}`).run();
});

const googleToken = (claims: Record<string, unknown>) =>
  new SignJWT({ email_verified: true, ...claims }).setProtectedHeader({ alg: 'RS256', kid: 'k1' })
    .setIssuer('https://accounts.google.com').setAudience(CLIENT_ID).setIssuedAt().setExpirationTime('5m').sign(signKey);

const call = (path: string, init: RequestInit & { cookie?: string } = {}, e: Partial<Env> = {}) => {
  const headers = new Headers(init.headers);
  if (init.method && init.method !== 'GET' && !headers.has('Origin')) headers.set('Origin', ORIGIN);
  if (init.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json');
  if (init.cookie) headers.set('Cookie', init.cookie);
  return app.request(`${ORIGIN}/api${path}`, { ...init, headers }, { ...env, ...e });
};
const cookieOf = (res: Response) => (res.headers.get('set-cookie') ?? '').split(';')[0];

async function signIn(sub = 'g-1', email = 'a@example.com') {
  const res = await call('/auth/google', { method: 'POST', body: JSON.stringify({ credential: await googleToken({ sub, email }) }) });
  expect(res.status).toBe(200);
  return cookieOf(res);
}
async function userId(cookie: string) {
  const me = await (await call('/me', { cookie })).json() as { user: { email: string } };
  return (await env.DB.prepare('SELECT id FROM users WHERE email = ?').bind(me.user.email).first<{ id: string }>())!.id;
}
const grantPro = (uid: string, periodEnd: number) =>
  env.DB.prepare('INSERT INTO entitlements (user_id, active, current_period_end, updated_at) VALUES (?, 1, ?, 0)').bind(uid, periodEnd).run();

describe('auth', () => {
  it('signs in with a valid Google token and sets a hardened session cookie', async () => {
    const res = await call('/auth/google', { method: 'POST', body: JSON.stringify({ credential: await googleToken({ sub: 'g-1', email: 'a@example.com', name: 'Aoi' }) }) });
    expect(res.status).toBe(200);
    const sc = res.headers.get('set-cookie')!;
    expect(sc).toMatch(/^__Host-hl_session=/);
    expect(sc).toMatch(/HttpOnly/i);
    expect(sc).toMatch(/Secure/i);
    expect(sc).toMatch(/SameSite=Lax/i);
    const me = await (await call('/me', { cookie: cookieOf(res) })).json();
    expect(me).toMatchObject({ user: { email: 'a@example.com', displayName: 'Aoi' }, isPro: false });
  });
  it('rejects tokens for another app, unverified emails and garbage', async () => {
    const wrongAud = await new SignJWT({ sub: 'x', email: 'x@e.com', email_verified: true }).setProtectedHeader({ alg: 'RS256', kid: 'k1' })
      .setIssuer('https://accounts.google.com').setAudience('someone-else').setExpirationTime('5m').sign(signKey);
    for (const credential of [wrongAud, await googleToken({ sub: 'x', email: 'x@e.com', email_verified: false }), 'not-a-jwt']) {
      expect((await call('/auth/google', { method: 'POST', body: JSON.stringify({ credential }) })).status).toBe(401);
    }
  });
  it('stores only a hash of the session token', async () => {
    const cookie = await signIn();
    const token = decodeURIComponent(cookie.split('=')[1]);
    const row = await env.DB.prepare('SELECT token_hash FROM sessions').first<{ token_hash: string }>();
    expect(row!.token_hash).not.toBe(token);
    expect(row!.token_hash).toMatch(/^[0-9a-f]{64}$/);
  });
  it('logout invalidates the session server-side', async () => {
    const cookie = await signIn();
    await call('/auth/logout', { method: 'POST', cookie });
    expect(await (await call('/me', { cookie })).json()).toMatchObject({ user: null });
  });
  it('dev login only works when enabled and on localhost', async () => {
    const body = JSON.stringify({ email: 'dev@example.com' });
    expect((await call('/auth/dev', { method: 'POST', body })).status).toBe(404);
    expect((await call('/auth/dev', { method: 'POST', body }, { DEV_LOGIN: '1' })).status).toBe(200);
    const remote = await app.request('https://holdemlab.example/api/auth/dev', {
      method: 'POST', body, headers: { Origin: 'https://holdemlab.example', 'Content-Type': 'application/json' },
    }, { ...env, DEV_LOGIN: '1', APP_ORIGIN: 'https://holdemlab.example' });
    expect(remote.status).toBe(404);
  });
});

describe('CSRF', () => {
  it('rejects state-changing requests from another origin or without Origin', async () => {
    const cookie = await signIn();
    const evil = await call('/me', { method: 'PATCH', cookie, body: JSON.stringify({ displayName: 'x' }), headers: { Origin: 'https://evil.example' } });
    expect(evil.status).toBe(403);
    const headers = new Headers({ 'Content-Type': 'application/json', Cookie: cookie });
    const noOrigin = await app.request(`${ORIGIN}/api/me`, { method: 'DELETE', headers }, env);
    expect(noOrigin.status).toBe(403);
  });
});

describe('paid content', () => {
  it('serves free lessons to anyone', async () => {
    const res = await call('/lessons/free-1');
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ blocks: [{ t: 'p', text: 'free' }] });
  });
  it('requires an active Pro entitlement for pro lessons', async () => {
    expect((await call('/lessons/pro-1')).status).toBe(401);
    const cookie = await signIn();
    expect((await call('/lessons/pro-1', { cookie })).status).toBe(403);
    await grantPro(await userId(cookie), Date.now() + 86400000);
    const ok = await call('/lessons/pro-1', { cookie });
    expect(ok.status).toBe(200);
    expect(JSON.stringify(await ok.json())).toContain('secret');
  });
  it('cuts off expired Pro', async () => {
    const cookie = await signIn();
    await grantPro(await userId(cookie), Date.now() - 1000);
    expect((await call('/lessons/pro-1', { cookie })).status).toBe(403);
    expect(await (await call('/me', { cookie })).json()).toMatchObject({ isPro: false });
  });
  it('rejects malformed lesson ids', async () => {
    expect((await call('/lessons/..%2F..%2Fetc')).status).toBe(404);
  });
});

describe('progress and attempts', () => {
  it('keeps each user’s data separate', async () => {
    const a = await signIn('g-a', 'a@example.com');
    const b = await signIn('g-b', 'b@example.com');
    await call('/progress', { method: 'POST', cookie: a, body: JSON.stringify({ lessonIds: ['rfi', 'outs'] }) });
    expect(await (await call('/progress', { cookie: a })).json()).toEqual({ lessonIds: expect.arrayContaining(['rfi', 'outs']) });
    expect(await (await call('/progress', { cookie: b })).json()).toEqual({ lessonIds: [] });
  });
  it('validates input', async () => {
    const cookie = await signIn();
    expect((await call('/progress', { method: 'POST', cookie, body: JSON.stringify({ lessonIds: ["x'; DROP TABLE users;--"] }) })).status).toBe(400);
    expect((await call('/attempts', { method: 'POST', cookie, body: JSON.stringify({ spot: 'rfi-btn', hand: 'AKo', action: 'shove', correct: true }) })).status).toBe(400);
    expect((await call('/attempts', { method: 'POST', cookie, body: JSON.stringify({ spot: 'rfi-btn', hand: 'AKo', action: 'raise', correct: true }) })).status).toBe(200);
  });
  it('requires sign-in', async () => {
    expect((await call('/progress')).status).toBe(401);
    expect((await call('/attempts', { method: 'POST', body: '{}' })).status).toBe(401);
  });
});

describe('billing webhook', () => {
  const stripe = new Stripe('sk_test_dummy');
  const subEvent = (uid: string, id: string, status = 'active', end = Math.floor(Date.now() / 1000) + 2592000) => JSON.stringify({
    id, object: 'event', type: 'customer.subscription.updated',
    data: { object: {
      id: 'sub_1', object: 'subscription', status, customer: 'cus_1', metadata: { user_id: uid },
      items: { data: [{ current_period_end: end, price: { recurring: { interval: 'year' } } }] },
    } },
  });
  const send = (payload: string, secret = WEBHOOK_SECRET) =>
    app.request(`${ORIGIN}/api/billing/webhook`, {
      method: 'POST', body: payload,
      headers: { 'stripe-signature': stripe.webhooks.generateTestHeaderString({ payload, secret }), 'Content-Type': 'application/json' },
    }, env);

  it('grants Pro from a correctly signed event', async () => {
    const cookie = await signIn();
    const uid = await userId(cookie);
    expect((await send(subEvent(uid, 'evt_1'))).status).toBe(200);
    expect(await (await call('/me', { cookie })).json()).toMatchObject({ isPro: true });
    expect((await call('/lessons/pro-1', { cookie })).status).toBe(200);
  });
  it('rejects events with a bad signature', async () => {
    const uid = await userId(await signIn());
    expect((await send(subEvent(uid, 'evt_2'), 'whsec_wrong')).status).toBe(400);
    expect(await env.DB.prepare('SELECT COUNT(*) n FROM entitlements').first<{ n: number }>()).toEqual({ n: 0 });
  });
  it('revokes Pro when the subscription is canceled, and ignores replays', async () => {
    const cookie = await signIn();
    const uid = await userId(cookie);
    await send(subEvent(uid, 'evt_3'));
    await send(subEvent(uid, 'evt_4', 'canceled'));
    expect(await (await call('/me', { cookie })).json()).toMatchObject({ isPro: false });
    await send(subEvent(uid, 'evt_3')); // replay of the old "active" event
    expect(await (await call('/me', { cookie })).json()).toMatchObject({ isPro: false });
  });
  it('users cannot grant themselves Pro through the API', async () => {
    const cookie = await signIn();
    const res = await call('/billing/webhook', { method: 'POST', cookie, body: subEvent(await userId(cookie), 'evt_5') });
    expect(res.status).toBe(400);
    expect(await (await call('/me', { cookie })).json()).toMatchObject({ isPro: false });
  });
});

describe('account deletion', () => {
  it('removes the user, their data and their sessions', async () => {
    const cookie = await signIn();
    await call('/progress', { method: 'POST', cookie, body: JSON.stringify({ lessonIds: ['rfi'] }) });
    expect((await call('/me', { method: 'DELETE', cookie })).status).toBe(200);
    for (const t of ['users', 'sessions', 'progress']) {
      expect(await env.DB.prepare(`SELECT COUNT(*) n FROM ${t}`).first<{ n: number }>()).toEqual({ n: 0 });
    }
    expect(await (await call('/me', { cookie })).json()).toMatchObject({ user: null });
  });
});
