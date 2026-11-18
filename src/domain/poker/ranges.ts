import { ALL_HANDS, RANKS, comboCount, labelFor } from './cards';

export type Action = 'fold' | 'call' | 'raise';
export type Position = 'UTG' | 'HJ' | 'CO' | 'BTN' | 'SB' | 'BB';
export const POSITIONS: Position[] = ['UTG', 'HJ', 'CO', 'BTN', 'SB', 'BB'];

/** Action frequencies for one hand class. fold = 1 - raise - call. */
export interface Freq {
  raise: number;
  call: number;
}
export type RangeMap = Record<string, Freq>;
/** Plain weighted range: label -> weight (0..1). */
export type Weights = Record<string, number>;

export const ACTION_LABEL: Record<Action, string> = { fold: 'フォールド', call: 'コール', raise: 'レイズ' };

export const foldFreq = (f: Freq | undefined) => (f ? Math.max(0, 1 - f.raise - f.call) : 1);
export const freqOf = (f: Freq | undefined, a: Action) =>
  a === 'fold' ? foldFreq(f) : f ? f[a] : 0;

// ---- Range notation parser --------------------------------------------
// Supports: AA, 77+, 99-66, AKs, A2s+, A5s-A2s, KTo+, AK (both), weights "A5o:0.5"
export function parseRange(text: string): Weights {
  const out: Weights = {};
  for (const raw of text.split(/[,\s]+/)) {
    const tok = raw.trim();
    if (!tok) continue;
    const [body, wStr] = tok.split(':');
    const w = wStr === undefined ? 1 : Math.max(0, Math.min(1, parseFloat(wStr)));
    if (Number.isNaN(w)) continue;
    for (const label of expandToken(body)) out[label] = w;
  }
  return out;
}

function expandToken(body: string): string[] {
  const m = /^([2-9TJQKA])([2-9TJQKA])([so]?)(\+?)(?:-([2-9TJQKA])([2-9TJQKA])([so]?))?$/i.exec(body);
  if (!m) return [];
  const a = RANKS.indexOf(m[1].toUpperCase());
  const b = RANKS.indexOf(m[2].toUpperCase());
  const kind = m[3].toLowerCase();
  const plus = m[4] === '+';
  const kinds = kind ? [kind === 's'] : [true, false];
  const res: string[] = [];

  if (a === b) {
    let lo = a;
    let hi = a;
    if (plus) hi = 12;
    if (m[5]) {
      const c = RANKS.indexOf(m[5].toUpperCase());
      lo = Math.min(a, c);
      hi = Math.max(a, c);
    }
    for (let r = lo; r <= hi; r++) res.push(labelFor(r, r, false));
    return res;
  }

  const hi = Math.max(a, b);
  let kLo = Math.min(a, b);
  let kHi = kLo;
  if (plus) kHi = hi - 1;
  if (m[5]) {
    const c2 = RANKS.indexOf(m[6].toUpperCase());
    kLo = Math.min(kLo, c2);
    kHi = Math.max(Math.min(a, b), c2);
  }
  for (let k = kLo; k <= kHi; k++) for (const s of kinds) res.push(labelFor(hi, k, s));
  return res;
}

/** Compact text for a weighted range (inverse of parseRange). */
export function rangeToString(w: Weights): string {
  const parts: string[] = [];
  const fmt = (s: string, weight: number) => (weight >= 1 ? s : `${s}:${+weight.toFixed(2)}`);
  const get = (l: string) => w[l] ?? 0;

  // pairs
  let r = 12;
  while (r >= 0) {
    const l = labelFor(r, r, false);
    const wt = get(l);
    if (wt <= 0) { r--; continue; }
    let end = r;
    while (end - 1 >= 0 && get(labelFor(end - 1, end - 1, false)) === wt) end--;
    const top = labelFor(r, r, false);
    const bot = labelFor(end, end, false);
    parts.push(fmt(r === 12 && end !== r ? `${bot}+` : end === r ? top : `${top}-${bot}`, wt));
    r = end - 1;
  }
  // suited / offsuit
  for (let hi = 12; hi >= 1; hi--) {
    for (const suited of [true, false]) {
      let k = hi - 1;
      while (k >= 0) {
        const wt = get(labelFor(hi, k, suited));
        if (wt <= 0) { k--; continue; }
        let end = k;
        while (end - 1 >= 0 && get(labelFor(hi, end - 1, suited)) === wt) end--;
        const top = labelFor(hi, k, suited);
        const bot = labelFor(hi, end, suited);
        parts.push(fmt(k === hi - 1 && end !== k ? `${bot}+` : end === k ? top : `${top}-${bot}`, wt));
        k = end - 1;
      }
    }
  }
  return parts.join(', ');
}

export function weightsPercent(w: Weights): number {
  let combos = 0;
  for (const l of ALL_HANDS) combos += (w[l] ?? 0) * comboCount(l);
  return (combos / 1326) * 100;
}

export function rangeStats(r: RangeMap) {
  let raise = 0;
  let call = 0;
  for (const l of ALL_HANDS) {
    const f = r[l];
    if (!f) continue;
    raise += f.raise * comboCount(l);
    call += f.call * comboCount(l);
  }
  return { raise: (raise / 1326) * 100, call: (call / 1326) * 100 };
}

/** Build a RangeMap from a raise range and an optional "continue" (raise + call) range. */
function build(raise: string, cont?: string): RangeMap {
  const r = parseRange(raise);
  const c = cont ? parseRange(cont) : {};
  const out: RangeMap = {};
  for (const l of ALL_HANDS) {
    const rf = r[l] ?? 0;
    const cf = Math.max(0, (c[l] ?? 0) - rf);
    if (rf > 0 || cf > 0) out[l] = { raise: rf, call: Math.min(cf, 1 - rf) };
  }
  return out;
}

// ---- Spots -------------------------------------------------------------
export interface Spot {
  id: string;
  name: string;
  hero: Position;
  opener?: Position;
  kind: 'rfi' | 'vsOpen';
  actions: Action[];
  description: string;
  defaultRange: RangeMap;
}

// NOTE: these are simplified, hand-written approximations of typical 6-max 100bb
// strategies for study purposes — not solver output.
export const SPOTS: Spot[] = [
  {
    id: 'rfi-utg', name: 'UTG オープン', hero: 'UTG', kind: 'rfi', actions: ['fold', 'raise'],
    description: '全員フォールドで回ってきません。最初のアクション（2.5bbオープン）',
    defaultRange: build('55+,22-44:0.5,A2s+,K9s+,Q9s+,J9s+,T9s,98s,87s:0.5,76s:0.5,65s:0.5,ATo+,KJo+,QJo:0.5'),
  },
  {
    id: 'rfi-hj', name: 'HJ オープン', hero: 'HJ', kind: 'rfi', actions: ['fold', 'raise'],
    description: 'UTGがフォールド。2.5bbでオープンするか？',
    defaultRange: build('22+,A2s+,K7s+,Q9s+,J9s+,T8s+,98s,87s,76s,65s,54s:0.5,A9o+,KTo+,QTo+,JTo:0.5'),
  },
  {
    id: 'rfi-co', name: 'CO オープン', hero: 'CO', kind: 'rfi', actions: ['fold', 'raise'],
    description: 'UTG・HJがフォールド。2.5bbでオープンするか？',
    defaultRange: build('22+,A2s+,K4s+,Q8s+,J8s+,T8s+,97s+,86s+,75s+,65s,54s,A7o+,A5o,KTo+,QTo+,JTo,K9o:0.5,T9o:0.5'),
  },
  {
    id: 'rfi-btn', name: 'BTN オープン', hero: 'BTN', kind: 'rfi', actions: ['fold', 'raise'],
    description: 'COまで全員フォールド。2.5bbでオープンするか？',
    defaultRange: build('22+,A2s+,K2s+,Q2s+,J4s+,T6s+,96s+,85s+,74s+,63s+,53s+,43s,A2o+,K8o+,Q9o+,J9o+,T8o+,98o,87o:0.5,K7o-K5o:0.5,Q8o:0.5'),
  },
  {
    id: 'rfi-sb', name: 'SB オープン', hero: 'SB', kind: 'rfi', actions: ['fold', 'raise'],
    description: 'BTNまで全員フォールド。BBに対して3bbでレイズするか？（レイズorフォールド戦略）',
    defaultRange: build('22+,A2s+,K2s+,Q4s+,J6s+,T6s+,96s+,85s+,75s+,64s+,54s,A2o+,K8o+,Q9o+,J9o+,T9o,98o:0.5'),
  },
  {
    id: 'btn-vs-co', name: 'BTN vs CO', hero: 'BTN', opener: 'CO', kind: 'vsOpen', actions: ['fold', 'call', 'raise'],
    description: 'COが2.5bbオープン。BTNで3bet / コール / フォールド？',
    defaultRange: build(
      'TT+,AQs+,AKo,AJs:0.5,ATs:0.3,A5s-A4s,KQs:0.5,KJs:0.3,QJs:0.3,AQo:0.5,99:0.3,K9s:0.3,76s:0.3,65s:0.3',
      '22+,A2s+,K9s+,Q9s+,J9s+,T8s+,98s,87s,76s,65s,54s:0.5,ATo+,KJo+,QJo:0.5',
    ),
  },
  {
    id: 'sb-vs-btn', name: 'SB vs BTN', hero: 'SB', opener: 'BTN', kind: 'vsOpen', actions: ['fold', 'call', 'raise'],
    description: 'BTNが2.5bbオープン。SBで3bet / コール / フォールド？（基本は3betかフォールド）',
    defaultRange: build('88+,A8s+,A5s-A3s,KTs+,QTs+,JTs,T9s:0.5,98s:0.5,AJo+,KQo,77:0.5'),
  },
  {
    id: 'bb-vs-btn', name: 'BB vs BTN', hero: 'BB', opener: 'BTN', kind: 'vsOpen', actions: ['fold', 'call', 'raise'],
    description: 'BTNが2.5bbオープン、SBフォールド。BBで3bet / コール / フォールド？',
    defaultRange: build(
      'QQ+,AKs,AKo,AQs,JJ:0.5,TT:0.3,AJs:0.5,KQs:0.5,A5s-A3s,K9s:0.4,Q9s:0.3,J9s:0.3,T8s:0.3,76s:0.3,65s:0.3,A9o:0.3,KJo:0.3',
      '22+,A2s+,K2s+,Q2s+,J4s+,T6s+,95s+,85s+,74s+,63s+,52s+,42s+,A2o+,K5o+,Q8o+,J8o+,T8o+,97o+,87o,76o:0.5',
    ),
  },
];

export const spotById = (id: string) => SPOTS.find((s) => s.id === id)!;

/** Weighted range of hands that take a given set of actions (e.g. "BTN open" = raise). */
export function spotToWeights(r: RangeMap, actions: Action[]): Weights {
  const out: Weights = {};
  for (const l of ALL_HANDS) {
    let w = 0;
    for (const a of actions) w += freqOf(r[l], a);
    if (w > 0) out[l] = Math.min(1, +w.toFixed(3));
  }
  return out;
}
