import type { D1Database } from '@cloudflare/workers-types';

/** Bindings and secrets available to the API (wrangler.toml + `wrangler pages secret put`). */
export interface Env {
  DB: D1Database;
  /** OAuth client ID from Google Cloud Console (public). */
  GOOGLE_CLIENT_ID: string;
  /** e.g. https://holdemlab.pages.dev — used for CSRF checks and Stripe return URLs. */
  APP_ORIGIN: string;
  STRIPE_SECRET_KEY?: string;
  STRIPE_WEBHOOK_SECRET?: string;
  STRIPE_PRICE_MONTHLY?: string;
  STRIPE_PRICE_YEARLY?: string;
  /** Billing portal configuration id (bpc_...), created by `npm run setup`. */
  STRIPE_PORTAL_CONFIGURATION?: string;
  /** "1" enables /api/auth/dev on localhost only (local testing without Google). Never set in production. */
  DEV_LOGIN?: string;
}

export interface SessionUser {
  id: string;
  email: string;
  display_name: string | null;
}
