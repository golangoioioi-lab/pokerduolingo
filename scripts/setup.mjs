#!/usr/bin/env node
// One-command production setup for Holdem Lab (Cloudflare Pages + D1 + Google sign-in + Stripe).
//
//   npm run setup            run everything (safe to re-run: finished steps are skipped)
//   npm run setup -- --check only check that the tools are installed
//
// What still needs you: logging in to Cloudflare (browser opens), pasting the Google client ID,
// and typing the Stripe secret key. Secrets are read with hidden input and piped straight to
// Cloudflare (`wrangler pages secret put`); they are never printed or written to disk.
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import readline from 'node:readline';

const ROOT = join(import.meta.dirname, '..');
const PROJECT = 'holdem-lab';
const DB_NAME = 'holdem-lab';
const WEBHOOK_EVENTS = [
  'checkout.session.completed',
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted',
];
const isWin = process.platform === 'win32';

// ---------------------------------------------------------------- output
const c = { b: (s) => `\x1b[1m${s}\x1b[0m`, g: (s) => `\x1b[32m${s}\x1b[0m`, y: (s) => `\x1b[33m${s}\x1b[0m`, r: (s) => `\x1b[31m${s}\x1b[0m`, d: (s) => `\x1b[2m${s}\x1b[0m` };
let stepNo = 0;
const step = (t) => console.log(`\n${c.b(`[${++stepNo}] ${t}`)}`);
const ok = (t) => console.log(`  ${c.g('✓')} ${t}`);
const info = (t) => console.log(`  ${c.d(t)}`);
const warn = (t) => console.log(`  ${c.y('!')} ${t}`);
const fail = (t) => { console.error(`\n${c.r('✗')} ${t}`); process.exit(1); };

// ---------------------------------------------------------------- processes
/** Runs a command. `input` is written to stdin (used for secrets); output is captured unless `show`. */
function run(cmd, args, { show = false, input, env } = {}) {
  const r = spawnSync(cmd, args, {
    cwd: ROOT,
    shell: isWin, // needed to launch npx.cmd / npm.cmd on Windows
    encoding: 'utf8',
    input,
    stdio: show ? 'inherit' : input !== undefined ? ['pipe', 'pipe', 'pipe'] : ['inherit', 'pipe', 'pipe'],
    env: { ...process.env, ...env },
  });
  const err = r.stderr ?? '';
  // Windows: wrangler can hit a libuv assertion while exiting after the command already succeeded.
  const code = r.status !== 0 && /UV_HANDLE_CLOSING/.test(err) && !/ERROR|✘/.test(err + (r.stdout ?? '')) ? 0 : (r.status ?? 1);
  return { code, out: r.stdout ?? '', err };
}
const wrangler = (args, opts) => run('npx', ['wrangler', ...args], opts);
/** Parses wrangler's JSON output. Trusts the JSON over the exit code: on Windows wrangler can
 *  crash on exit (libuv assertion) after printing a valid result. */
function wranglerJson(args) {
  const r = wrangler([...args, '--json']);
  const start = r.out.search(/[[{]/);
  if (start < 0) return null;
  const text = r.out.slice(start);
  const end = Math.max(text.lastIndexOf('}'), text.lastIndexOf(']'));
  try { return JSON.parse(text.slice(0, end + 1)); } catch { return null; }
}
function openUrl(url) {
  const opener = isWin ? ['cmd', ['/c', 'start', '', url]] : process.platform === 'darwin' ? ['open', [url]] : ['xdg-open', [url]];
  spawnSync(opener[0], opener[1], { stdio: 'ignore' });
}

// ---------------------------------------------------------------- prompts
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
const ask = (q, def = '') => new Promise((res) => rl.question(`  ${q}${def ? c.d(` [${def}]`) : ''}: `, (a) => res(a.trim() || def)));
const confirm = async (q, def = false) => /^y/i.test(await ask(`${q} (y/n)`, def ? 'y' : 'n'));
/** Hidden input: typed characters are not echoed. */
function askSecret(q) {
  return new Promise((res) => {
    const out = rl.output;
    const write = out.write.bind(out);
    out.write = (s) => (s.includes(q) ? write(s) : undefined); // mute echo after the prompt
    rl.question(`  ${q}: `, (a) => { out.write = write; write('\n'); res(a.trim()); });
  });
}

// ---------------------------------------------------------------- config files
const TOML = join(ROOT, 'wrangler.toml');
const readToml = () => readFileSync(TOML, 'utf8');
function setTomlValue(key, value) {
  const s = readToml();
  const re = new RegExp(`^(${key}\\s*=\\s*)".*"`, 'm');
  if (!re.test(s)) fail(`wrangler.toml: ${key} not found`);
  writeFileSync(TOML, s.replace(re, `$1"${value}"`));
}
const tomlValue = (key) => readToml().match(new RegExp(`^${key}\\s*=\\s*"(.*)"`, 'm'))?.[1] ?? '';

const ENV_PROD = join(ROOT, '.env.production.local');
function readEnvFile(p) {
  if (!existsSync(p)) return {};
  return Object.fromEntries(readFileSync(p, 'utf8').split(/\r?\n/).filter((l) => /^\w+=/.test(l)).map((l) => [l.slice(0, l.indexOf('=')), l.slice(l.indexOf('=') + 1)]));
}
function writeEnvFile(p, vars) {
  const merged = { ...readEnvFile(p), ...vars };
  writeFileSync(p, `# Written by npm run setup — public values only (no secrets).\n${Object.entries(merged).map(([k, v]) => `${k}=${v}`).join('\n')}\n`);
}

/** Pipes a secret into Cloudflare without printing it. */
function putSecret(name, value) {
  const r = wrangler(['pages', 'secret', 'put', name, '--project-name', PROJECT], { input: `${value}\n` });
  if (r.code !== 0) fail(`Cloudflare に ${name} を登録できませんでした:\n${r.err || r.out}`);
  ok(`${name} を登録`);
}

// ================================================================ steps
async function checkTools() {
  step('ツールの確認');
  const [major] = process.versions.node.split('.').map(Number);
  if (major < 20) fail(`Node.js 20 以上が必要です（現在 ${process.versions.node}）`);
  ok(`Node.js ${process.versions.node}`);
  const w = wrangler(['--version']);
  if (w.code !== 0) fail('wrangler が見つかりません。先に npm install を実行してください');
  ok(`wrangler ${w.out.trim().split('\n').pop()}`);
}

async function cloudflareLogin() {
  step('Cloudflare にログイン');
  const loggedIn = (m) => m && m.loggedIn !== false;
  let me = wranglerJson(['whoami']);
  if (!loggedIn(me)) {
    info('ブラウザが開きます。Cloudflare にログインして「Allow」を押してください（アカウントがなければ作成）。');
    wrangler(['login'], { show: true });
    me = wranglerJson(['whoami']);
    if (!loggedIn(me)) fail('ログインを確認できませんでした。もう一度 npm run setup を実行してください');
  }
  ok(`ログイン済み: ${me.email ?? me.accounts?.[0]?.name ?? 'Cloudflare'}`);
}

async function database() {
  step('データベース（D1）');
  let db = (wranglerJson(['d1', 'list']) ?? []).find((d) => d.name === DB_NAME);
  if (!db) {
    const r = wrangler(['d1', 'create', DB_NAME]);
    if (r.code !== 0) fail(`D1 を作成できませんでした:\n${r.err || r.out}`);
    db = (wranglerJson(['d1', 'list']) ?? []).find((d) => d.name === DB_NAME);
    if (!db) fail('作成した D1 が見つかりません');
    ok(`作成: ${DB_NAME}`);
  } else ok(`既存: ${DB_NAME}`);
  const id = db.uuid ?? db.database_id ?? db.id;
  if (tomlValue('database_id') !== id) { setTomlValue('database_id', id); ok('wrangler.toml に database_id を記入'); }

  const env = { CI: '1' }; // skip "Ok to proceed?" prompts
  let r = wrangler(['d1', 'migrations', 'apply', DB_NAME, '--remote'], { env });
  if (r.code !== 0) fail(`テーブルを作成できませんでした:\n${r.err || r.out}`);
  ok('テーブルを最新に');
  r = run('node', ['scripts/build-seed.mjs']);
  if (r.code !== 0) fail(`レッスンデータを作れませんでした:\n${r.err}`);
  r = wrangler(['d1', 'execute', DB_NAME, '--remote', '--file', 'seed/lessons.sql'], { env });
  if (r.code !== 0) fail(`レッスンを登録できませんでした:\n${r.err || r.out}`);
  ok('レッスン本文を登録');
}

async function pagesProject() {
  step('公開先（Cloudflare Pages）');
  const find = () => (wranglerJson(['pages', 'project', 'list']) ?? []).find((p) => (p.name ?? p['Project Name']) === PROJECT);
  let p = find();
  if (!p) {
    const r = wrangler(['pages', 'project', 'create', PROJECT, '--production-branch', 'main']);
    if (r.code !== 0) fail(`Pages プロジェクトを作成できませんでした:\n${r.err || r.out}`);
    p = find();
    ok(`作成: ${PROJECT}`);
  } else ok(`既存: ${PROJECT}`);
  const sub = p?.subdomain ?? p?.['Project Domains']?.split(',')[0]?.trim() ?? `${PROJECT}.pages.dev`;
  const origin = `https://${sub.replace(/^https?:\/\//, '')}`;
  if (tomlValue('APP_ORIGIN') !== origin) { setTomlValue('APP_ORIGIN', origin); ok(`APP_ORIGIN = ${origin}`); }
  return origin;
}

async function google(origin) {
  step('Google ログイン');
  let id = tomlValue('GOOGLE_CLIENT_ID');
  if (id) { ok('設定済み'); return id; }
  console.log(`
  Google の画面で「OAuth クライアント ID」を作ります（ここだけ手作業です）:
    1. 開いたページで プロジェクトを作成（または選択）
    2. 「OAuth 同意画面」: アプリ名とメールを入力、対象は「外部」
    3. 「認証情報を作成」→「OAuth クライアント ID」→ 種類「ウェブ アプリケーション」
    4. 承認済みの JavaScript 生成元に次の2つを追加:
         ${c.b(origin)}
         ${c.b('http://localhost:8788')}
    5. 作成後に表示される「クライアント ID」をコピー`);
  if (await confirm('ブラウザで Google Cloud を開きますか', true)) openUrl('https://console.cloud.google.com/apis/credentials');
  id = await ask('クライアント ID を貼り付け（空のまま Enter でスキップ）');
  if (!id) { warn('スキップしました。ログインなしで公開されます（あとで npm run setup で設定できます）'); return ''; }
  if (!/\.apps\.googleusercontent\.com$/.test(id)) warn('形式が想定と違います（…apps.googleusercontent.com）。そのまま使います');
  setTomlValue('GOOGLE_CLIENT_ID', id);
  ok('wrangler.toml に記入');
  return id;
}

async function stripeSetup(origin) {
  step('決済（Stripe）');
  const secrets = new Set((wranglerJson(['pages', 'secret', 'list', '--project-name', PROJECT]) ?? []).map((s) => s.name));
  const configured = ['STRIPE_SECRET_KEY', 'STRIPE_PRICE_MONTHLY', 'STRIPE_PRICE_YEARLY', 'STRIPE_WEBHOOK_SECRET'].every((n) => secrets.has(n));
  if (configured && !(await confirm('Stripe は設定済みです。設定し直しますか'))) { ok('設定済み'); return readEnvFile(ENV_PROD); }

  console.log(`
  Stripe の「シークレットキー」を使って、商品・価格・Webhook・解約画面を自動で作ります。
  キーは ${c.b('https://dashboard.stripe.com/test/apikeys')} の「シークレットキー」（sk_test_…）。
  入力は画面に表示されず、Cloudflare に直接登録されます。`);
  const key = await askSecret('シークレットキー（空のまま Enter でスキップ）');
  if (!key) { warn('スキップしました。課金なしで公開されます'); return {}; }
  if (!/^(sk|rk)_(test|live)_/.test(key)) fail('シークレットキーの形式ではありません（sk_test_ / sk_live_ で始まります）');
  const live = key.includes('_live_');
  if (live && !(await confirm(c.y('本番モードの鍵です。実際に課金されます。続けますか')))) process.exit(1);

  const prev = readEnvFile(ENV_PROD);
  const monthly = Number(await ask('月額の価格（円・税込）', prev.VITE_PRICE_MONTHLY_JPY));
  const yearly = Number(await ask('年額の価格（円・税込）', prev.VITE_PRICE_YEARLY_JPY));
  if (!(monthly > 0 && yearly > 0)) fail('価格を数字で入力してください');

  const { default: Stripe } = await import('stripe');
  const stripe = new Stripe(key);
  try { await stripe.balance.retrieve(); } catch (e) { fail(`Stripe に接続できませんでした: ${e.message}`); }
  ok(`Stripe に接続（${live ? '本番' : 'テスト'}モード）`);

  // product
  const products = await stripe.products.list({ limit: 100, active: true });
  let product = products.data.find((p) => p.metadata?.app === 'holdem-lab');
  if (!product) product = await stripe.products.create({ name: 'Holdem Lab Pro', metadata: { app: 'holdem-lab' } });
  ok(`商品: ${product.name}`);

  // prices (JPY is zero-decimal: unit_amount is in yen)
  const prices = (await stripe.prices.list({ product: product.id, active: true, limit: 100 })).data;
  const priceFor = async (interval, amount) => {
    const found = prices.find((p) => p.currency === 'jpy' && p.recurring?.interval === interval && p.unit_amount === amount);
    if (found) return found;
    for (const old of prices.filter((p) => p.recurring?.interval === interval)) await stripe.prices.update(old.id, { active: false });
    return stripe.prices.create({ product: product.id, currency: 'jpy', unit_amount: amount, recurring: { interval }, tax_behavior: 'inclusive' });
  };
  const pm = await priceFor('month', monthly);
  const py = await priceFor('year', yearly);
  ok(`価格: 月額 ${monthly}円 / 年額 ${yearly}円`);

  // customer portal (cancel at period end, card update, invoices)
  const portals = await stripe.billingPortal.configurations.list({ limit: 100, active: true });
  let portal = portals.data.find((p) => p.metadata?.app === 'holdem-lab');
  if (!portal) {
    portal = await stripe.billingPortal.configurations.create({
      metadata: { app: 'holdem-lab' },
      business_profile: { headline: 'Holdem Lab Pro の管理' },
      features: {
        subscription_cancel: { enabled: true, mode: 'at_period_end' },
        payment_method_update: { enabled: true },
        invoice_history: { enabled: true },
      },
      default_return_url: `${origin}/me/plan`,
    });
  }
  ok('解約・支払い方法の管理画面');

  // webhook (its signing secret is only shown once, at creation)
  const url = `${origin}/api/billing/webhook`;
  const hooks = await stripe.webhookEndpoints.list({ limit: 100 });
  const existing = hooks.data.find((h) => h.url === url);
  let webhookSecret = null;
  if (existing && (!secrets.has('STRIPE_WEBHOOK_SECRET') || (await confirm('Webhook を作り直して署名シークレットを再登録しますか')))) {
    await stripe.webhookEndpoints.del(existing.id);
  }
  if (!existing || !(await stripe.webhookEndpoints.list({ limit: 100 })).data.some((h) => h.url === url)) {
    const hook = await stripe.webhookEndpoints.create({ url, enabled_events: WEBHOOK_EVENTS, description: 'Holdem Lab entitlements' });
    webhookSecret = hook.secret;
    ok(`Webhook: ${url}`);
  } else ok('Webhook: 既存のものを使用');

  putSecret('STRIPE_SECRET_KEY', key);
  putSecret('STRIPE_PRICE_MONTHLY', pm.id);
  putSecret('STRIPE_PRICE_YEARLY', py.id);
  putSecret('STRIPE_PORTAL_CONFIGURATION', portal.id);
  if (webhookSecret) putSecret('STRIPE_WEBHOOK_SECRET', webhookSecret);
  return { VITE_PRICE_MONTHLY_JPY: String(monthly), VITE_PRICE_YEARLY_JPY: String(yearly) };
}

async function deploy(clientEnv) {
  step('ビルドして公開');
  writeEnvFile(ENV_PROD, { VITE_BACKEND: 'cloudflare', VITE_BUNDLE_PRO_CONTENT: 'false', ...clientEnv });
  ok('.env.production.local を更新（公開してよい値のみ）');
  const r = run('node', ['scripts/deploy.mjs', '--skip-db'], { show: true });
  if (r.code !== 0) fail('公開に失敗しました（上のログを確認してください）');
}

// ================================================================ main
const checkOnly = process.argv.includes('--check');
console.log(c.b('\nHoldem Lab セットアップ'));
await checkTools();
if (checkOnly) { rl.close(); console.log(`\n${c.g('ツールは揃っています。')} 続きは ${c.b('npm run setup')} で。`); process.exit(0); }
await cloudflareLogin();
await database();
const origin = await pagesProject();
const googleId = await google(origin);
const prices = await stripeSetup(origin);
await deploy({ ...(googleId ? { VITE_GOOGLE_CLIENT_ID: googleId } : {}), ...prices });
rl.close();

console.log(`
${c.g(c.b('公開しました:'))} ${c.b(origin)}

  次にやること:
   1. スマホでそのURLを開き、Google でログイン → Pro を購入
      ${c.d('テスト用カード 4242 4242 4242 4242 / 期限は未来の日付 / CVC は任意の3桁')}
   2. 以降の更新は ${c.b('npm run deploy')} だけ（GitHub に置けば push で自動公開: docs/公開手順.md）
`);
