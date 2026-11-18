import { createRemoteJWKSet, jwtVerify, type JWTVerifyGetKey } from 'jose';
import type { Context } from 'hono';
import { getCookie, setCookie, deleteCookie } from 'hono/cookie';
import type { Env, SessionUser } from './env';

export const SESSION_COOKIE = '__Host-hl_session';
const SESSION_DAYS = 30;

let googleKeys: JWTVerifyGetKey | null = null;
/** Tests can inject their own key set instead of Google's. */
export function setGoogleKeysForTest(keys: JWTVerifyGetKey | null) { googleKeys = keys; }

export interface GoogleIdentity { sub: string; email: string; name?: string }

/** Verifies a Google Sign-In ID token: signature, issuer, audience, expiry, verified email. */
export async function verifyGoogleIdToken(token: string, clientId: string): Promise<GoogleIdentity> {
  googleKeys ??= createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'));
  const { payload } = await jwtVerify(token, googleKeys, {
    issuer: ['accounts.google.com', 'https://accounts.google.com'],
    audience: clientId,
  });
  if (typeof payload.sub !== 'string' || typeof payload.email !== 'string' || payload.email_verified !== true) {
    throw new Error('unverified-email');
  }
  return { sub: payload.sub, email: payload.email, name: typeof payload.name === 'string' ? payload.name : undefined };
}

const hex = (buf: ArrayBuffer) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
export const sha256 = async (s: string) => hex(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s)));

function randomToken(): string {
  const b = crypto.getRandomValues(new Uint8Array(32));
  return btoa(String.fromCharCode(...b)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/** Finds or creates the user for a Google identity. */
export async function upsertGoogleUser(env: Env, g: GoogleIdentity): Promise<string> {
  const found = await env.DB.prepare('SELECT id FROM users WHERE google_sub = ?').bind(g.sub).first<{ id: string }>();
  if (found) {
    await env.DB.prepare('UPDATE users SET email = ? WHERE id = ?').bind(g.email, found.id).run();
    return found.id;
  }
  const id = crypto.randomUUID();
  await env.DB.prepare('INSERT INTO users (id, google_sub, email, display_name, created_at) VALUES (?, ?, ?, ?, ?)')
    .bind(id, g.sub, g.email, g.name?.slice(0, 30) ?? null, Date.now())
    .run();
  return id;
}

export async function startSession(c: Context<{ Bindings: Env }>, userId: string) {
  const token = randomToken();
  const now = Date.now();
  await c.env.DB.prepare('INSERT INTO sessions (token_hash, user_id, expires_at, created_at) VALUES (?, ?, ?, ?)')
    .bind(await sha256(token), userId, now + SESSION_DAYS * 86400000, now)
    .run();
  setCookie(c, SESSION_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'Lax',
    path: '/',
    maxAge: SESSION_DAYS * 86400,
  });
}

export async function endSession(c: Context<{ Bindings: Env }>) {
  const token = getCookie(c, SESSION_COOKIE);
  if (token) await c.env.DB.prepare('DELETE FROM sessions WHERE token_hash = ?').bind(await sha256(token)).run();
  deleteCookie(c, SESSION_COOKIE, { path: '/', secure: true });
}

export async function currentUser(c: Context<{ Bindings: Env }>): Promise<SessionUser | null> {
  const token = getCookie(c, SESSION_COOKIE);
  if (!token) return null;
  return c.env.DB.prepare(
    `SELECT u.id, u.email, u.display_name FROM sessions s JOIN users u ON u.id = s.user_id
     WHERE s.token_hash = ? AND s.expires_at > ?`,
  ).bind(await sha256(token), Date.now()).first<SessionUser>();
}

export async function hasActivePro(env: Env, userId: string, now = Date.now()): Promise<{ active: boolean; periodEnd: number | null }> {
  const row = await env.DB.prepare('SELECT active, current_period_end FROM entitlements WHERE user_id = ?')
    .bind(userId)
    .first<{ active: number; current_period_end: number | null }>();
  const active = !!row?.active && (row.current_period_end === null || row.current_period_end > now);
  return { active, periodEnd: row?.current_period_end ?? null };
}
