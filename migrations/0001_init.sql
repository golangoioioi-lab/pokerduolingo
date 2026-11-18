-- Holdem Lab on Cloudflare D1 (SQLite). Timestamps are Unix epoch milliseconds.
-- The browser never talks to D1: every read and write goes through functions/api,
-- which checks the session and the entitlement itself.

CREATE TABLE users (
  id            TEXT PRIMARY KEY,              -- random UUID
  google_sub    TEXT NOT NULL UNIQUE,          -- Google account id ("sub" claim)
  email         TEXT NOT NULL,
  display_name  TEXT,
  created_at    INTEGER NOT NULL
);

-- Only a SHA-256 hash of the session token is stored, so a DB leak does not leak sessions.
CREATE TABLE sessions (
  token_hash  TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  expires_at  INTEGER NOT NULL,
  created_at  INTEGER NOT NULL
);
CREATE INDEX sessions_user ON sessions (user_id);

-- Written only by the Stripe webhook.
CREATE TABLE entitlements (
  user_id                 TEXT PRIMARY KEY REFERENCES users (id) ON DELETE CASCADE,
  plan                    TEXT CHECK (plan IN ('monthly', 'yearly')),
  active                  INTEGER NOT NULL DEFAULT 0,
  current_period_end      INTEGER,
  stripe_customer_id      TEXT UNIQUE,
  stripe_subscription_id  TEXT UNIQUE,
  updated_at              INTEGER NOT NULL
);

CREATE TABLE progress (
  user_id       TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  lesson_id     TEXT NOT NULL,
  completed_at  INTEGER NOT NULL,
  PRIMARY KEY (user_id, lesson_id)
);

CREATE TABLE attempts (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id     TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  spot        TEXT NOT NULL,
  hand        TEXT NOT NULL,
  action      TEXT NOT NULL CHECK (action IN ('fold', 'call', 'raise')),
  correct     INTEGER NOT NULL,
  created_at  INTEGER NOT NULL
);
CREATE INDEX attempts_user_created ON attempts (user_id, created_at DESC);

-- Lesson bodies. Pro rows are served only to users with an active entitlement.
CREATE TABLE lesson_content (
  lesson_id  TEXT PRIMARY KEY,
  course_id  TEXT NOT NULL,
  tier       TEXT NOT NULL CHECK (tier IN ('free', 'pro')),
  blocks     TEXT NOT NULL,                    -- JSON
  version    INTEGER NOT NULL DEFAULT 1
);

-- Processed Stripe events, so a retried webhook is applied once.
CREATE TABLE stripe_events (
  id          TEXT PRIMARY KEY,
  created_at  INTEGER NOT NULL
);
