// The backend is this app's own /api (Cloudflare Pages Functions + D1).
// Without VITE_BACKEND=cloudflare the app runs in demo mode: everything stays on the device.

export const isDemoMode = import.meta.env.VITE_BACKEND !== 'cloudflare';

/** Paid plans on/off. Off (default) = every lesson and feature is free, and plan / Pro UI is hidden. */
export const PAID_PLANS = import.meta.env.VITE_PAID_PLANS === 'true';

/** Public OAuth client ID for "Sign in with Google". */
export const GOOGLE_CLIENT_ID = String(import.meta.env.VITE_GOOGLE_CLIENT_ID ?? '');

/** Local development only: allows /api/auth/dev sign-in (the server also requires DEV_LOGIN=1 and localhost). */
export const DEV_LOGIN = import.meta.env.DEV && import.meta.env.VITE_DEV_LOGIN === '1';

// Set by AccountProvider so background syncs skip requests that would only return 401.
let signedIn = false;
export const setSignedIn = (v: boolean) => { signedIn = v; };
export const isSignedIn = () => signedIn;

export interface ApiResult<T> { ok: boolean; status: number; data: T | null }

/** JSON call to /api. Same-origin cookies carry the session; the server checks Origin on writes. */
export async function api<T = unknown>(path: string, init: { method?: string; body?: unknown } = {}): Promise<ApiResult<T>> {
  if (isDemoMode) return { ok: false, status: 0, data: null };
  try {
    const res = await fetch(`/api${path}`, {
      method: init.method ?? 'GET',
      credentials: 'same-origin',
      headers: init.body !== undefined ? { 'Content-Type': 'application/json' } : undefined,
      body: init.body !== undefined ? JSON.stringify(init.body) : undefined,
    });
    const data = res.headers.get('Content-Type')?.includes('application/json') ? ((await res.json()) as T) : null;
    return { ok: res.ok, status: res.status, data };
  } catch {
    return { ok: false, status: 0, data: null }; // offline
  }
}
