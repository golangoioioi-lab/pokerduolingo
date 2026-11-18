import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { GLOSSARY_BY_ID, type GlossaryEntry } from '../domain/content/glossary';

// One shared popover for the whole app. Terms call show()/hide(); the provider positions
// the card next to the term and closes it on outside tap, scroll, resize or Escape.

interface Shown { entry: GlossaryEntry; rect: DOMRect; anchor: HTMLElement }
interface Api {
  show: (id: string, anchor: HTMLElement) => void;
  hideSoon: () => void;
  cancelHide: () => void;
  hide: () => void;
  isOpenFor: (anchor: HTMLElement) => boolean;
}

const Ctx = createContext<Api | null>(null);
const LONG_PRESS_MS = 420;
const HOVER_DELAY_MS = 180;

export function GlossaryProvider({ children }: { children: ReactNode }) {
  const [shown, setShown] = useState<Shown | null>(null);
  const hideTimer = useRef<number | undefined>(undefined);
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ left: number; top: number; above: boolean } | null>(null);

  const hide = useCallback(() => { window.clearTimeout(hideTimer.current); setShown(null); }, []);
  const api: Api = {
    show: (id, anchor) => {
      const entry = GLOSSARY_BY_ID.get(id);
      if (!entry) return;
      window.clearTimeout(hideTimer.current);
      setShown({ entry, rect: anchor.getBoundingClientRect(), anchor });
    },
    hideSoon: () => { window.clearTimeout(hideTimer.current); hideTimer.current = window.setTimeout(() => setShown(null), 160); },
    cancelHide: () => window.clearTimeout(hideTimer.current),
    hide,
    isOpenFor: (anchor) => shown?.anchor === anchor,
  };

  // Place the card below the term, or above when there is no room; keep it on screen.
  useLayoutEffect(() => {
    if (!shown || !cardRef.current) { setPos(null); return; }
    const card = cardRef.current.getBoundingClientRect();
    const { rect } = shown;
    const margin = 12;
    const above = rect.bottom + 8 + card.height > window.innerHeight - margin && rect.top - 8 - card.height > margin;
    const left = Math.min(Math.max(margin, rect.left + rect.width / 2 - card.width / 2), window.innerWidth - card.width - margin);
    setPos({ left, top: above ? rect.top - 8 - card.height : rect.bottom + 8, above });
  }, [shown]);

  useEffect(() => {
    if (!shown) return;
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (cardRef.current?.contains(t) || shown.anchor.contains(t)) return;
      hide();
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') hide(); };
    const onMove = () => hide();
    window.addEventListener('pointerdown', onDown, true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('wheel', onMove, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('resize', onMove);
    return () => {
      window.removeEventListener('pointerdown', onDown, true);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('wheel', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('resize', onMove);
    };
  }, [shown, hide]);

  return (
    <Ctx.Provider value={api}>
      {children}
      {shown && createPortal(
        <div
          ref={cardRef}
          id="glossary-popover"
          role="tooltip"
          className={`gloss-card${pos ? ' in' : ''}${pos?.above ? ' above' : ''}`}
          style={pos ? { left: pos.left, top: pos.top } : { left: -9999, top: 0 }}
          onPointerEnter={api.cancelHide}
          onPointerLeave={(e) => e.pointerType === 'mouse' && api.hideSoon()}
        >
          <div className="gloss-head">
            <span className="gloss-term">{shown.entry.term}</span>
            {shown.entry.en && <span className="gloss-en">{shown.entry.en}</span>}
          </div>
          <p className="gloss-def">{shown.entry.def}</p>
        </div>,
        document.body,
      )}
    </Ctx.Provider>
  );
}

/** An underlined glossary term. Hover / click on desktop, long-press on touch, focus via keyboard. */
export function Term({ id, children }: { id: string; children: ReactNode }) {
  const api = useContext(Ctx);
  const ref = useRef<HTMLSpanElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const start = useRef<{ x: number; y: number } | null>(null);
  const longPressed = useRef(false);

  if (!api) return <>{children}</>;
  const open = () => ref.current && api.show(id, ref.current);
  const clear = () => { window.clearTimeout(timer.current); start.current = null; };

  return (
    <span
      ref={ref}
      className="term"
      tabIndex={0}
      aria-describedby={ref.current && api.isOpenFor(ref.current) ? 'glossary-popover' : undefined}
      onPointerEnter={(e) => {
        if (e.pointerType !== 'mouse') return;
        api.cancelHide();
        timer.current = window.setTimeout(open, HOVER_DELAY_MS);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType !== 'mouse') return;
        window.clearTimeout(timer.current);
        api.hideSoon();
      }}
      onPointerDown={(e) => {
        if (e.pointerType === 'mouse') return;
        longPressed.current = false;
        start.current = { x: e.clientX, y: e.clientY };
        timer.current = window.setTimeout(() => {
          longPressed.current = true;
          navigator.vibrate?.(8);
          open();
        }, LONG_PRESS_MS);
      }}
      onPointerMove={(e) => {
        // Cancel the long-press if the finger starts scrolling.
        if (start.current && Math.hypot(e.clientX - start.current.x, e.clientY - start.current.y) > 10) clear();
      }}
      onPointerUp={clear}
      onPointerCancel={clear}
      onContextMenu={(e) => e.preventDefault()}
      onClick={(e) => {
        if (longPressed.current) { e.preventDefault(); longPressed.current = false; return; }
        if (ref.current && api.isOpenFor(ref.current)) api.hide(); else open();
      }}
      onFocus={(e) => { if (e.currentTarget.matches(':focus-visible')) open(); }}
      onBlur={() => api.hideSoon()}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
      }}
    >
      {children}
    </span>
  );
}
