import { useEffect, useRef } from 'react';
import { ALL_HANDS } from '../domain/poker/cards';

export interface CellStyle {
  /** Stacked color segments (fractions should sum ≤ 1; the rest shows the base color). */
  segments: { color: string; frac: number }[];
  text?: string;
}

interface Props {
  cell: (label: string) => CellStyle;
  highlight?: string | null;
  /** Called for each cell touched while painting (pointer down + drag). */
  onPaint?: (label: string, first: boolean) => void;
  onHover?: (label: string | null) => void;
  compact?: boolean;
}

function background(segments: CellStyle['segments']): string {
  let pos = 0;
  const stops: string[] = [];
  for (const s of segments) {
    if (s.frac <= 0) continue;
    const end = Math.min(100, pos + s.frac * 100);
    stops.push(`${s.color} ${pos}% ${end}%`);
    pos = end;
  }
  if (pos < 100) stops.push(`var(--app-cell-empty) ${pos}% 100%`);
  return `linear-gradient(to right, ${stops.join(', ')})`;
}

export default function HandGrid({ cell, highlight, onPaint, onHover, compact }: Props) {
  const painting = useRef(false);
  const last = useRef<string | null>(null);

  useEffect(() => {
    const stop = () => {
      painting.current = false;
      last.current = null;
    };
    window.addEventListener('pointerup', stop);
    window.addEventListener('pointercancel', stop);
    return () => {
      window.removeEventListener('pointerup', stop);
      window.removeEventListener('pointercancel', stop);
    };
  }, []);

  const labelAt = (x: number, y: number) => {
    const el = document.elementFromPoint(x, y) as HTMLElement | null;
    return el?.closest<HTMLElement>('[data-hand]')?.dataset.hand ?? null;
  };

  return (
    <div
      className={`hand-grid${onPaint ? ' paintable' : ''}${compact ? ' compact' : ''}`}
      onPointerDown={(e) => {
        const l = labelAt(e.clientX, e.clientY);
        if (l) onHover?.(l);
        if (!onPaint || !l) return;
        e.preventDefault();
        painting.current = true;
        last.current = l;
        onPaint(l, true);
      }}
      onPointerMove={(e) => {
        const l = labelAt(e.clientX, e.clientY);
        onHover?.(l);
        if (!painting.current || !onPaint || !l || l === last.current) return;
        // Fill any cells skipped by a fast pointer move.
        const from = ALL_HANDS.indexOf(last.current ?? l);
        const to = ALL_HANDS.indexOf(l);
        const [r0, c0] = [Math.floor(from / 13), from % 13];
        const [r1, c1] = [Math.floor(to / 13), to % 13];
        const steps = Math.max(Math.abs(r1 - r0), Math.abs(c1 - c0));
        for (let s = 1; s <= steps; s++) {
          const r = Math.round(r0 + ((r1 - r0) * s) / steps);
          const c = Math.round(c0 + ((c1 - c0) * s) / steps);
          onPaint(ALL_HANDS[r * 13 + c], false);
        }
        last.current = l;
      }}
      onPointerLeave={(e) => { if (e.pointerType === 'mouse') onHover?.(null); }}
    >
      {ALL_HANDS.map((label) => {
        const c = cell(label);
        return (
          <div
            key={label}
            data-hand={label}
            className={`hand-cell${label === highlight ? ' highlight' : ''}`}
            style={{ background: background(c.segments) }}
          >
            <span className="hand-cell-label">{label}</span>
            {c.text && <span className="hand-cell-sub">{c.text}</span>}
          </div>
        );
      })}
    </div>
  );
}
