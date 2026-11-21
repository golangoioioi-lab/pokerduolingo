import { Fragment, useMemo, useState, type ReactNode } from 'react';
import type { Block } from '../domain/content/types';
import PlayingCard from './PlayingCard';
import HandGrid from './HandGrid';
import Legend from './Legend';
import { rangeCell } from './rangeCell';
import { parseCard } from '../domain/poker/cards';
import { rangeStats, spotById } from '../domain/poker/ranges';
import { getSpotRange } from '../services/customRanges';
import { splitTerms } from '../domain/content/glossary';
import { Term } from './Glossary';
import { answerFx } from './fx';
import { DiagramView } from './Diagrams';
import { HandsOn } from './Interactive';
import type { QuestionBlock } from '../domain/content/diagrams';

/** Plain text with glossary terms underlined. */
function Terms({ text }: { text: string }) {
  return (
    <>
      {splitTerms(text).map((s, i) =>
        s.id ? <Term key={i} id={s.id}>{s.text}</Term> : <Fragment key={i}>{s.text}</Fragment>,
      )}
    </>
  );
}

/** Render inline **bold** markup; poker terms get glossary popovers unless `plain`. */
export function Inline({ text, plain }: { text: string; plain?: boolean }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  const body = (s: string) => (plain ? s : <Terms text={s} />);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? <strong key={i}>{body(p.slice(2, -2))}</strong> : <Fragment key={i}>{body(p)}</Fragment>,
      )}
    </>
  );
}

/** Deterministic shuffle seeded by the question text (same order every time for the same question). */
function shuffledOrder(n: number, seedText: string): number[] {
  let h = 2166136261;
  for (let i = 0; i < seedText.length; i++) h = Math.imul(h ^ seedText.charCodeAt(i), 16777619);
  const rnd = () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296;
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

const CardRow = ({ cards, size = 'md' }: { cards: string[]; size?: 'sm' | 'md' }) => (
  <div className="card-row">{cards.map((c) => <PlayingCard key={c} card={parseCard(c)} size={size} />)}</div>
);

/** Hand / board shown above a question. */
function QuestionVisual({ hand, board }: { hand?: string[]; board?: string[] }) {
  if (!hand && !board) return null;
  return (
    <div className="q-visual">
      {hand && <div className="q-vis-part"><CardRow cards={hand} /><span className="muted small">あなた</span></div>}
      {board && <div className="q-vis-part"><CardRow cards={board} /><span className="muted small">ボード</span></div>}
    </div>
  );
}

function Verdict({ ok, explain }: { ok: boolean; explain: string }) {
  return (
    <div className={`lb-quiz-explain ${ok ? 'good' : 'bad'}`}>
      <b className="verdict-pop">{ok ? '正解！' : '不正解'}</b> <Inline text={explain} />
    </div>
  );
}

export function Quiz({ block, onAnswer }: { block: Extract<Block, { t: 'quiz' }>; onAnswer?: (correct: boolean) => void }) {
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;
  // Shuffle option order (stable per question) so the right answer's position carries no hint.
  const order = useMemo(() => shuffledOrder(block.options.length, block.q), [block]);
  const visual = !!block.optionCards;
  return (
    <div className="lb-quiz">
      <div className="lb-quiz-label">問題</div>
      <div className="lb-quiz-q"><Inline text={block.q} /></div>
      <QuestionVisual hand={block.hand} board={block.board} />
      <div className={`lb-quiz-options${visual ? ' visual' : ''}`}>
        {order.map((i) => {
          const o = block.options[i];
          let cls = 'lb-opt';
          if (answered && i === block.answer) cls += ' correct';
          else if (answered && i === picked) cls += ' wrong';
          return (
            <button key={i} className={cls} disabled={answered} onClick={(e) => {
              const ok = i === block.answer;
              setPicked(i);
              answerFx(e.currentTarget, ok);
              onAnswer?.(ok);
            }}>
              {visual && <CardRow cards={block.optionCards![i]} />}
              <span>{o}</span>
            </button>
          );
        })}
      </div>
      {answered && <Verdict ok={picked === block.answer} explain={block.explain} />}
    </div>
  );
}

export function Estimate({ block, onAnswer }: { block: Extract<Block, { t: 'estimate' }>; onAnswer?: (correct: boolean) => void }) {
  const step = block.step ?? 1;
  const unit = block.unit ?? '';
  const [v, setV] = useState(() => Math.round((block.min + block.max) / 2 / step) * step);
  const [done, setDone] = useState<boolean | null>(null);
  const pos = (x: number) => `${((x - block.min) / (block.max - block.min)) * 100}%`;
  return (
    <div className="lb-quiz">
      <div className="lb-quiz-label">見積もり</div>
      <div className="lb-quiz-q"><Inline text={block.q} /></div>
      <QuestionVisual hand={block.hand} board={block.board} />
      <div className="est">
        <div className="est-value">{v}<small>{unit}</small></div>
        <div className="est-track">
          {done !== null && (
            <i className="est-zone" style={{ left: pos(Math.max(block.min, block.answer - block.tolerance)), width: `calc(${pos(Math.min(block.max, block.answer + block.tolerance))} - ${pos(Math.max(block.min, block.answer - block.tolerance))})` }} />
          )}
          <input type="range" min={block.min} max={block.max} step={step} value={v} disabled={done !== null}
            onChange={(e) => setV(Number(e.target.value))} aria-label="値を選ぶ" />
        </div>
        <div className="est-scale"><span>{block.min}{unit}</span><span>{block.max}{unit}</span></div>
        {done === null ? (
          <button className="est-go" onClick={(e) => {
            const ok = Math.abs(v - block.answer) <= block.tolerance;
            setDone(ok);
            answerFx(e.currentTarget, ok);
            onAnswer?.(ok);
          }}>これで答える</button>
        ) : (
          <div className="est-answer">正解は <b>{block.answer}{unit}</b>（±{block.tolerance}{unit} で正解）</div>
        )}
      </div>
      {done !== null && <Verdict ok={done} explain={block.explain} />}
    </div>
  );
}

export function Question({ block, onAnswer }: { block: QuestionBlock; onAnswer?: (correct: boolean) => void }) {
  if (block.t === 'quiz') return <Quiz block={block} onAnswer={onAnswer} />;
  if (block.t === 'estimate') return <Estimate block={block} onAnswer={onAnswer} />;
  return <HandsOn block={block} onAnswer={onAnswer} />;
}

export default function BlockView({ block, goTab, onAnswer }: { block: Block; goTab: (tab: string) => void; onAnswer?: (correct: boolean) => void }) {
  let content: ReactNode = null;
  switch (block.t) {
    case 'h':
      return <h2 className="lb-h">{block.text}</h2>;
    case 'p':
      return <p className="lb-p"><Inline text={block.text} /></p>;
    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul';
      return (
        <Tag className="lb-list">
          {block.items.map((it, i) => <li key={i}><Inline text={it} /></li>)}
        </Tag>
      );
    }
    case 'tip':
    case 'warn':
      return (
        <div className={`lb-callout ${block.t}`}>
          <div className="lb-callout-title">{block.title ?? (block.t === 'tip' ? 'ポイント' : '注意')}</div>
          <Inline text={block.text} />
        </div>
      );
    case 'formula':
      return (
        <div className="lb-formula">
          <div className="lb-formula-main">{block.text}</div>
          {block.note && <div className="muted small">{block.note}</div>}
        </div>
      );
    case 'table':
      return (
        <div className="lb-table-wrap">
          <table className="table lb-table">
            <thead><tr>{block.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {block.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}><Inline text={c} /></td>)}</tr>)}
            </tbody>
          </table>
        </div>
      );
    case 'cards':
      content = (
        <div className="lb-cards">
          {block.hands.map((h, i) => (
            <div key={i} className="lb-hand">
              <div className="card-row">{h.cards.map((c) => <PlayingCard key={c} card={parseCard(c)} size="md" />)}</div>
              {h.label && <div className="muted small">{h.label}</div>}
            </div>
          ))}
          {block.board && (
            <div className="lb-hand">
              <div className="card-row lb-board">{block.board.map((c) => <PlayingCard key={c} card={parseCard(c)} size="md" />)}</div>
              <div className="muted small">ボード</div>
            </div>
          )}
        </div>
      );
      return <figure className="lb-figure">{content}{block.caption && <figcaption><Inline text={block.caption} /></figcaption>}</figure>;
    case 'range': {
      const spot = spotById(block.spot);
      const range = getSpotRange(block.spot);
      const st = rangeStats(range);
      return (
        <figure className="lb-figure">
          <div className="lb-range-head">
            <b>{spot.name}</b>
            <span className="muted small">
              {spot.kind === 'rfi' ? `オープン ${st.raise.toFixed(1)}%` : `3bet ${st.raise.toFixed(1)}% / コール ${st.call.toFixed(1)}%`}
            </span>
          </div>
          <div className="lb-range-grid">
            <HandGrid cell={(l) => rangeCell(range[l])} compact />
          </div>
          <Legend showCall={spot.kind !== 'rfi'} />
          {block.caption && <figcaption><Inline text={block.caption} /></figcaption>}
        </figure>
      );
    }
    case 'quiz':
      return <Quiz block={block} onAnswer={onAnswer} />;
    case 'estimate':
      return <Estimate block={block} onAnswer={onAnswer} />;
    case 'try':
      return (
        <button className="lb-try" onClick={() => goTab(block.tab)}>
          <span>{block.text}</span>
          <span className="lb-try-go">{block.tab === 'train' ? '練習する' : block.tab === 'equity' ? '計算する' : '見る'}</span>
        </button>
      );
    case 'play': case 'pick5': case 'showdown': case 'outs': case 'order': case 'rapid': case 'paint':
      return <HandsOn block={block} onAnswer={onAnswer} />;
    default:
      return <DiagramView block={block} />;
  }
}
