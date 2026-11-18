#!/usr/bin/env node
// Everyday deploy: test → update database (tables + lesson bodies) → build → publish.
//   npm run deploy               full deploy
//   npm run deploy -- --skip-db  skip the database step (used by setup, which just did it)
// Requires `npm run setup` to have been run once (Cloudflare login, D1 id, .env.production.local).
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');
const isWin = process.platform === 'win32';
const skipDb = process.argv.includes('--skip-db');
const inCi = !!process.env.CI;

const run = (label, cmd, args, env = {}) => {
  console.log(`\n\x1b[1m▶ ${label}\x1b[0m`);
  const r = spawnSync(cmd, args, { cwd: ROOT, shell: isWin, stdio: ['inherit', 'inherit', 'pipe'], encoding: 'utf8', env: { ...process.env, CI: '1', ...env } });
  const err = r.stderr ?? '';
  process.stderr.write(err.split('\n').filter((l) => !l.includes('UV_HANDLE_CLOSING')).join('\n'));
  // Windows: wrangler can hit a libuv assertion while exiting after the command already succeeded.
  const benign = /UV_HANDLE_CLOSING/.test(err) && !/ERROR|✘/.test(err);
  if (r.status !== 0 && !benign) { console.error(`\n\x1b[31m✗ ${label} に失敗しました\x1b[0m`); process.exit(r.status ?? 1); }
};

const toml = readFileSync(join(ROOT, 'wrangler.toml'), 'utf8');
if (/database_id\s*=\s*"0{8}-/.test(toml)) {
  console.error('まだセットアップされていません。先に npm run setup を実行してください。');
  process.exit(1);
}
if (!inCi && !existsSync(join(ROOT, '.env.production.local'))) {
  console.error('.env.production.local がありません。先に npm run setup を実行してください。');
  process.exit(1);
}

run('テスト', 'npx', ['vitest', 'run']);
if (!skipDb) {
  run('データベースを更新', 'npx', ['wrangler', 'd1', 'migrations', 'apply', 'holdem-lab', '--remote']);
  run('レッスン本文を作成', 'node', ['scripts/build-seed.mjs']);
  run('レッスン本文を登録', 'npx', ['wrangler', 'd1', 'execute', 'holdem-lab', '--remote', '--file', 'seed/lessons.sql']);
}
run('ビルド', 'npm', ['run', 'build']);
run('公開', 'npx', ['wrangler', 'pages', 'deploy', 'dist', '--project-name', 'holdem-lab', '--branch', 'main', '--commit-dirty=true']);

const origin = toml.match(/^APP_ORIGIN\s*=\s*"(.*)"/m)?.[1];
console.log(`\n\x1b[32m\x1b[1m公開しました\x1b[0m ${origin ?? ''}`);
