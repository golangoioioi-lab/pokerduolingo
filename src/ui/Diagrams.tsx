// Renderers for the diagram blocks. All derived numbers come from domain/content/diagrams.ts.
import { Fragment, useState, type ReactNode } from 'react';
import type { Block, CompareSide, Position } from '../domain/content/types';
import { comboCount, gridCell, optionEv, requiredEquity, spr, RANKS } from '../domain/content/diagrams';
import { parseCard } from '../domain/poker/cards';
import PlayingCard from './PlayingCard';
import { Inline } from './BlockView';

type B<T extends Block['t']> = Extract<Block, { t: T }>;

const fmt = (n: number, d = 1) => (Number.isInteger(n) ? String(n) : n.toFixed(d));
const Cards = ({ cards, size = 'sm' }: { cards: string[]; size?: 'sm' | 'md' }) => (
  <span className="card-row dg-cards">{cards.map((c) => <PlayingCard key={c} card={parseCard(c)} size={size} />)}</span>
);

function Figure({ kind, caption, children }: { kind: string; caption?: string; children: ReactNode }) {
  return (
    <figure className={`lb-figure dg dgk-${kind}`}>
      {children}
      {caption && <figcaption><Inline text={caption} /></figcaption>}
    </figure>
  );
}

function PotDiagram({ b }: { b: B<'pot'> }) {
  const max = Math.max(...b.steps.map((s) => s.pot + s.stack));
  return (
    <Figure kind="pot" caption={b.caption}>
      <div className="dg-pot">
        {b.steps.map((s) => (
          <div key={s.label} className="dg-pot-col">
            <div className="dg-pot-bars">
              <div className="dg-pot-stack" style={{ height: `${(s.stack / max) * 100}%` }} title={`スタック ${s.stack}bb`} />
              <div className="dg-pot-pot" style={{ height: `${(s.pot / max) * 100}%` }} title={`ポット ${s.pot}bb`} />
            </div>
            <div className="dg-pot-num"><b>{fmt(s.pot)}</b><span>{fmt(s.stack)}</span></div>
            <div className="dg-label">{s.label}</div>
            <div className="dg-sub">SPR {s.stack === 0 ? '0' : fmt(spr(s.pot, s.stack))}</div>
          </div>
        ))}
      </div>
      <div className="dg-legend"><span><i className="sw-pot" />ポット</span><span><i className="sw-stack" />残りスタック（bb）</span></div>
    </Figure>
  );
}

function EquityDiagram({ b }: { b: B<'equity'> }) {
  return (
    <Figure kind="equity" caption={b.caption}>
      {b.board && <div className="dg-board"><span className="dg-sub">ボード</span><Cards cards={b.board} /></div>}
      <div className="dg-eq-bar">
        {b.players.map((p, i) => <div key={i} className={`dg-eq-seg s${i}`} style={{ width: `${p.pct}%` }}>{p.pct >= 12 && `${fmt(p.pct)}%`}</div>)}
      </div>
      <div className="dg-eq-rows">
        {b.players.map((p, i) => (
          <div key={i} className="dg-eq-row">
            <i className={`dg-dot s${i}`} />
            <span className="dg-eq-label">{p.label}</span>
            {p.cards && <Cards cards={p.cards} />}
            <b className="dg-num">{fmt(p.pct)}%</b>
          </div>
        ))}
      </div>
    </Figure>
  );
}

function OddsDiagram({ b: base }: { b: B<'odds'> }) {
  // The learner can drag the bet size and watch the required equity move.
  const [bet, setBet] = useState(base.bet);
  const b = { ...base, bet };
  const need = requiredEquity(b.pot, b.bet);
  const ok = b.equity >= need;
  const scale = Math.max(50, Math.ceil(Math.max(need, b.equity) / 10) * 10);
  return (
    <Figure kind="odds" caption={b.caption}>
      <div className="dg-odds-head">
        ポット <b>{fmt(b.pot)}</b> に <b>{fmt(b.bet)}</b> のベット → コール <b>{fmt(b.bet)}</b> で <b>{fmt(b.pot + 2 * b.bet)}</b> を取りに行く
      </div>
      <div className="dg-odds-row"><span>必要な勝率</span><div className="dg-track"><div className="dg-fill need" style={{ width: `${(need / scale) * 100}%` }} /></div><b className="dg-num">{need.toFixed(1)}%</b></div>
      <div className="dg-odds-row"><span>実際の勝率</span><div className="dg-track"><div className={`dg-fill ${ok ? 'good' : 'bad'}`} style={{ width: `${(b.equity / scale) * 100}%` }} /><i className="dg-mark" style={{ left: `${(need / scale) * 100}%` }} /></div><b className="dg-num">{fmt(b.equity)}%</b></div>
      <div className={`dg-verdict ${ok ? 'good' : 'bad'}`}>{ok ? 'コールで得（勝率が足りている）' : 'コールで損（勝率が足りない）'}</div>
      <label className="dg-odds-try">
        <span>ベット額を動かす</span>
        <input type="range" min={Math.max(0.5, b.pot * 0.1)} max={b.pot * 2} step={b.pot >= 10 ? 0.5 : 0.25} value={bet} onChange={(e) => setBet(Number(e.target.value))} />
        {bet !== base.bet && <button className="dg-reset" onClick={() => setBet(base.bet)}>戻す</button>}
      </label>
    </Figure>
  );
}

const SEAT_XY: Record<Position, [number, number]> = { UTG: [14, 30], HJ: [50, 8], CO: [86, 30], BTN: [86, 72], SB: [50, 94], BB: [14, 72] };

function SeatsDiagram({ b }: { b: B<'seats'> }) {
  const shown = new Map(b.seats.map((s) => [s.pos, s]));
  return (
    <Figure kind="seats" caption={b.caption}>
      <div className="dg-table">
        <div className="dg-felt">
          {b.board && <Cards cards={b.board} />}
          {b.pot !== undefined && <div className="dg-sub">ポット {fmt(b.pot)}bb</div>}
        </div>
        {(Object.keys(SEAT_XY) as Position[]).map((p) => {
          const s = shown.get(p);
          const [x, y] = SEAT_XY[p];
          const cls = !s ? 'empty' : s.hero ? 'me' : s.folded ? 'folded' : '';
          return (
            <div key={p} className={`dg-seat ${cls}`} style={{ left: `${x}%`, top: `${y}%` }}>
              <div className="dg-seat-pos">{p}{p === 'BTN' && <i className="dg-btn">D</i>}</div>
              {s?.cards && <Cards cards={s.cards} />}
              {s?.action && <div className="dg-seat-act">{s.action}{s.bet !== undefined && ` ${fmt(s.bet)}`}</div>}
            </div>
          );
        })}
      </div>
    </Figure>
  );
}

function CombosDiagram({ b }: { b: B<'combos'> }) {
  const owner = new Map<string, number>();
  b.groups.forEach((g, gi) => g.hands.forEach((h) => gridCell(h).forEach(({ r, c }) => owner.set(`${r},${c}`, gi))));
  const total = b.groups.reduce((a, g) => a + comboCount(g.hands, b.dead), 0);
  return (
    <Figure kind="combos" caption={b.caption}>
      {b.dead && b.dead.length > 0 && <div className="dg-board"><span className="dg-sub">見えているカード</span><Cards cards={b.dead} /></div>}
      <div className="dg-grid">
        {Array.from({ length: 169 }, (_, k) => {
          const r = Math.floor(k / 13), c = k % 13;
          const g = owner.get(`${r},${c}`);
          const label = r === c ? RANKS[r] + RANKS[c] : r < c ? RANKS[r] + RANKS[c] + 's' : RANKS[c] + RANKS[r] + 'o';
          return <div key={k} className={`dg-cell ${g !== undefined ? `on s${g}` : ''}`}>{label}</div>;
        })}
      </div>
      <div className="dg-eq-rows">
        {b.groups.map((g, i) => (
          <div key={i} className="dg-eq-row"><i className={`dg-dot s${i}`} /><span className="dg-eq-label">{g.label}</span><span className="dg-sub">{g.hands.join(' ')}</span><b className="dg-num">{comboCount(g.hands, b.dead)} コンボ</b></div>
        ))}
        {b.groups.length > 1 && <div className="dg-eq-row total"><span className="dg-eq-label">合計</span><b className="dg-num">{total} コンボ</b></div>}
      </div>
    </Figure>
  );
}

function TimelineDiagram({ b }: { b: B<'timeline'> }) {
  return (
    <Figure kind="timeline" caption={b.caption}>
      <ol className="dg-tl">
        {b.steps.map((s, i) => (
          <li key={i} className="dg-tl-step">
            <div className="dg-tl-head"><b>{s.street}</b>{s.pot !== undefined && <span className="dg-sub">ポット {fmt(s.pot)}bb</span>}</div>
            {s.board && <Cards cards={s.board} />}
            <ul className="dg-tl-acts">{s.actions.map((a, j) => <li key={j}><Inline text={a} plain /></li>)}</ul>
          </li>
        ))}
      </ol>
    </Figure>
  );
}

function TreeDiagram({ b }: { b: B<'tree'> }) {
  const evs = b.options.map(optionEv);
  const best = Math.max(...evs);
  return (
    <Figure kind="tree" caption={b.caption}>
      <div className="dg-tree-root"><Inline text={b.root} plain /></div>
      <div className="dg-tree">
        {b.options.map((o, i) => (
          <div key={i} className={`dg-branch ${evs[i] === best ? 'best' : ''}`}>
            <div className="dg-branch-head"><span>{o.label}</span><b className={`dg-num ${evs[i] >= 0 ? 'pos' : 'neg'}`}>EV {evs[i] >= 0 ? '+' : ''}{evs[i].toFixed(2)}{b.unit ?? 'bb'}</b></div>
            {o.outcomes && (
              <ul className="dg-outcomes">
                {o.outcomes.map((x, j) => (
                  <li key={j}><span>{x.label}</span><span className="dg-sub">{Math.round(x.prob * 100)}%</span><span className="dg-num">{x.value >= 0 ? '+' : ''}{fmt(x.value)}</span></li>
                ))}
              </ul>
            )}
            {o.note && <div className="dg-sub"><Inline text={o.note} plain /></div>}
          </div>
        ))}
      </div>
    </Figure>
  );
}

function Side({ s }: { s: CompareSide }) {
  return (
    <div className={`dg-side ${s.verdict ?? ''}`}>
      <div className="dg-side-title">{s.title}</div>
      {(s.cards || s.board) && (
        <div className="dg-side-cards">{s.cards && <Cards cards={s.cards} />}{s.board && <Cards cards={s.board} />}</div>
      )}
      <ul>{s.points.map((p, i) => <li key={i}><Inline text={p} plain /></li>)}</ul>
    </div>
  );
}

function CompareDiagram({ b }: { b: B<'compare'> }) {
  return (
    <Figure kind="compare" caption={b.caption}>
      <div className="dg-compare"><Side s={b.left} /><div className="dg-vs">vs</div><Side s={b.right} /></div>
    </Figure>
  );
}

export function DiagramView({ block }: { block: Block }) {
  switch (block.t) {
    case 'pot': return <PotDiagram b={block} />;
    case 'equity': return <EquityDiagram b={block} />;
    case 'odds': return <OddsDiagram b={block} />;
    case 'seats': return <SeatsDiagram b={block} />;
    case 'combos': return <CombosDiagram b={block} />;
    case 'timeline': return <TimelineDiagram b={block} />;
    case 'tree': return <TreeDiagram b={block} />;
    case 'compare': return <CompareDiagram b={block} />;
    default: return <Fragment />;
  }
}
