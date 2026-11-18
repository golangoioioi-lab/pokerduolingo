/** Inline text supports **bold**. Rendered as typed blocks — never as raw HTML. */
export type Block =
  | { t: 'h'; text: string }
  | { t: 'p'; text: string }
  | { t: 'list'; items: string[]; ordered?: boolean }
  | { t: 'tip'; text: string; title?: string }
  | { t: 'warn'; text: string; title?: string }
  | { t: 'formula'; text: string; note?: string }
  | { t: 'table'; head: string[]; rows: string[][] }
  | { t: 'cards'; hands: { label?: string; cards: string[] }[]; board?: string[]; caption?: string }
  | { t: 'range'; spot: string; caption?: string }
  /** Multiple choice. Optional visuals: `hand`/`board` shown with the question; `optionCards[i]` turns option i into a tappable picture of cards (options[i] stays as its label). */
  | { t: 'quiz'; q: string; options: string[]; answer: number; explain: string; hand?: string[]; board?: string[]; optionCards?: string[][] }
  /** Slider question: drag to estimate a number; correct if within ±tolerance of answer. */
  | { t: 'estimate'; q: string; min: number; max: number; step?: number; unit?: string; answer: number; tolerance: number; explain: string; hand?: string[]; board?: string[] }
  | { t: 'try'; text: string; tab: 'train' | 'ranges' | 'equity' }
  // ── Diagrams (numbers that can be derived are computed by the renderer, see diagrams.ts) ──
  /** Pot vs. effective stack per street (bb). SPR is computed. */
  | { t: 'pot'; steps: { label: string; pot: number; stack: number }[]; caption?: string }
  /** Equity bars. pct must sum to 100 (±1). */
  | { t: 'equity'; players: { label: string; cards?: string[]; pct: number }[]; board?: string[]; caption?: string }
  /** Pot odds: `pot` = pot BEFORE the bet, `bet` = amount to call. Required equity = bet / (pot + 2·bet) is computed. `equity` = your real equity in %. */
  | { t: 'odds'; pot: number; bet: number; equity: number; caption?: string }
  /** 6-max table. Positions in order UTG, HJ, CO, BTN, SB, BB (omit seats you don't need). */
  | { t: 'seats'; seats: Seat[]; pot?: number; board?: string[]; caption?: string }
  /** Highlight hand classes on the 13×13 grid; combos are counted minus `dead` cards (blockers / board). */
  | { t: 'combos'; groups: { label: string; hands: string[] }[]; dead?: string[]; caption?: string }
  /** Street-by-street hand history. */
  | { t: 'timeline'; steps: { street: Street; board?: string[]; pot?: number; actions: string[] }[]; caption?: string }
  /** Decision tree: each option's EV is computed from outcomes (prob sums to 1) unless `ev` is given. Units: `unit` (default bb). */
  | { t: 'tree'; unit?: string; root: string; options: { label: string; ev?: number; outcomes?: { label: string; prob: number; value: number }[]; note?: string }[]; caption?: string }
  /** Side-by-side comparison of two hands / boards / lines. */
  | { t: 'compare'; left: CompareSide; right: CompareSide; caption?: string };

export type Position = 'UTG' | 'HJ' | 'CO' | 'BTN' | 'SB' | 'BB';
export type Street = 'プリフロップ' | 'フロップ' | 'ターン' | 'リバー' | 'ショーダウン';
export interface Seat { pos: Position; hero?: boolean; action?: string; bet?: number; folded?: boolean; cards?: string[] }
export interface CompareSide { title: string; cards?: string[]; board?: string[]; points: string[]; verdict?: 'good' | 'bad' | 'neutral' }

export type Tier = 'free' | 'pro';

export interface LessonMeta {
  id: string;
  title: string;
  minutes: number;
  summary: string;
  tier: Tier;
}

export interface LessonBody {
  id: string;
  blocks: Block[];
}

export interface Course {
  id: string;
  title: string;
  level: '初心者' | '初級' | '中級' | '上級' | '全レベル';
  symbol: string;
  description: string;
  lessons: LessonMeta[];
}
