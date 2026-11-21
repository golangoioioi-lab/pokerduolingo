// Hands-on lesson blocks: the learner plays, taps and paints. Answers come from
// domain/content/interactive.ts (hand evaluator), never from hand-written keys.
import { useEffect, useMemo, useRef, useState } from 'react';
import type { Block, Street } from '../domain/content/types';
import {
  bestFive, handName, isBestFive, isStrongestFirst, orderScores, outsOf, paintScore, paintTarget, scoreOf, winners,
} from '../domain/content/interactive';
import { RANKS, SUIT_SYMBOLS, cardStr, parseCard } from '../domain/poker/cards';
import { spotById } from '../domain/poker/ranges';
import PlayingCard from './PlayingCard';
import HandGrid from './HandGrid';
import { Inline } from './BlockView';
import { answerFx, sfx } from './fx';

type B<T extends Block['t']> = Extract<Block, { t: T }>;
type OnAnswer = ((ok: boolean) => void) | undefined;

/** Calls onAnswer once. */
function useOnce(onAnswer: OnAnswer) {
  const done = useRef(false);
  return (ok: boolean, el?: Element | null) => {
    if (done.current) return;
    done.current = true;
    answerFx(el ?? null, ok);
    onAnswer?.(ok);
  };
}

const Card = ({ c, size = 'md', cls = '' }: { c: string; size?: 'sm' | 'md' | 'lg'; cls?: string }) => (
  <span className={`ia-card ${cls}`}><PlayingCard card={parseCard(c)} size={size} /></span>
);
const Back = ({ size = 'md' }: { size?: 'md' | 'lg' }) => <span className={`pcard pcard-${size} pcard-back`} aria-label="伏せたカード" />;

function Shell({ label, q, children }: { label: string; q?: string; children: React.ReactNode }) {
  return (
    <div className="lb-quiz ia">
      <div className="lb-quiz-label">{label}</div>
      {q && <div className="lb-quiz-q"><Inline text={q} /></div>}
      {children}
    </div>
  );
}

function Result({ ok, title, text }: { ok: boolean; title?: string; text?: string }) {
  return (
    <div className={`lb-quiz-explain ${ok ? 'good' : 'bad'}`}>
      <b className="verdict-pop">{title ?? (ok ? '正解！' : 'おしい')}</b> {text && <Inline text={text} />}
    </div>
  );
}

// ───────────────────────────────────────────────────────────── play
const STREETS: Street[] = ['プリフロップ', 'フロップ', 'ターン', 'リバー'];

function Play({ b, onAnswer }: { b: B<'play'>; onAnswer: OnAnswer }) {
  const [si, setSi] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [misses, setMisses] = useState(0);
  const [end, setEnd] = useState(false);
  const finish = useOnce(onAnswer);
  const rootRef = useRef<HTMLDivElement>(null);

  const step = b.steps[si];
  const board = b.steps.slice(0, si + 1).flatMap((s) => s.board ?? []);
  const fresh = new Set(step.board ?? []);
  const showdown = end && !!b.villainCards && board.length === 5;
  const sd = useMemo(() => {
    if (!b.villainCards || board.length !== 5) return null;
    const h = scoreOf([...b.heroCards, ...board]);
    const v = scoreOf([...b.villainCards, ...board]);
    return { h, v, res: h > v ? 'win' : h < v ? 'lose' : 'tie' };
  }, [b, board]);
  const needsPick = !!step.options?.length && picked === null;
  // The story's line folds when some decision's only correct answers are folds: then there is no showdown to win or lose.
  const heroFolds = b.steps.some((s) => s.options?.length && s.options.filter((o) => o.good).every((o) => o.label.includes('フォールド')));

  const next = () => {
    sfx.tap();
    if (si < b.steps.length - 1) { setSi(si + 1); setPicked(null); return; }
    setEnd(true);
    finish(misses === 0, rootRef.current);
  };

  return (
    <Shell label="ハンドを体験" q={b.title}>
      <div className="pl" ref={rootRef}>
        <ol className="pl-streets" aria-label="ストリート">
          {STREETS.map((s) => (
            <li key={s} className={s === step.street ? 'on' : STREETS.indexOf(s) < STREETS.indexOf(step.street) ? 'past' : ''}>{s}</li>
          ))}
        </ol>
        <div className="pl-felt">
          {b.villain && (
            <div className="pl-seat opp">
              <span className="pl-pos">{b.villain}</span>
              <span className="pl-hole">
                {showdown ? b.villainCards!.map((c) => <Card key={c} c={c} cls="flip" />) : <><Back /><Back /></>}
              </span>
            </div>
          )}
          <div className="pl-center">
            <div className="pl-board">
              {board.map((c) => <Card key={c} c={c} cls={fresh.has(c) && !end ? 'deal' : ''} />)}
              {Array.from({ length: 5 - board.length }, (_, i) => <span key={i} className="pl-slot" />)}
            </div>
            <div className="pl-pot">ポット {step.pot}bb</div>
          </div>
          <div className="pl-seat me">
            <span className="pl-hole">{b.heroCards.map((c) => <Card key={c} c={c} size="lg" />)}</span>
            <span className="pl-pos">{b.hero}（あなた）</span>
          </div>
        </div>

        {!end && (
          <>
            <div className="pl-say" key={si}><Inline text={step.say} /></div>
            {step.options && (
              <>
                <div className="pl-q"><Inline text={step.q ?? ''} /></div>
                <div className="pl-opts">
                  {step.options.map((o, k) => {
                    const cls = picked === null ? '' : o.good ? 'correct' : k === picked ? 'wrong' : 'dim';
                    return (
                      <button key={k} className={`pl-opt ${cls}`} disabled={picked !== null} onClick={(e) => {
                        setPicked(k);
                        if (!o.good) setMisses((m) => m + 1);
                        answerFx(e.currentTarget, o.good);
                      }}>{o.label}</button>
                    );
                  })}
                </div>
                {picked !== null && (
                  <Result ok={step.options[picked].good} title={step.options[picked].good ? 'いい判断' : 'ここは別の手'}
                    text={step.options[picked].good ? step.options[picked].why : `${step.options[picked].why} ${step.options.filter((o) => o.good).map((o) => `**${o.label}**：${o.why}`).join(' ')}`} />
                )}
              </>
            )}
            {!needsPick && (
              <button className="pl-next" onClick={next}>
                {si < b.steps.length - 1
                  ? b.steps[si + 1].street === step.street ? '続ける' : `${b.steps[si + 1].street}へ`
                  : b.villainCards ? 'ショーダウン' : 'ハンド終了'}
              </button>
            )}
          </>
        )}

        {end && (
          <div className="pl-end">
            {showdown && sd && (heroFolds ? (
              <div className="pl-result">
                <b>相手の手札</b>
                <span>相手 {handName(sd.v)} ／ あなた {handName(sd.h)}（降りたので勝負はなし）</span>
              </div>
            ) : (
              <div className={`pl-result ${sd.res}`}>
                <b>{sd.res === 'win' ? 'あなたの勝ち' : sd.res === 'lose' ? '相手の勝ち' : '引き分け'}</b>
                <span>あなた {handName(sd.h)} ／ 相手 {handName(sd.v)}</span>
              </div>
            ))}
            <div className="pl-score">{misses === 0 ? '判断はすべて正解' : `判断ミス ${misses}回`}</div>
            {b.outro && <p className="lb-p"><Inline text={b.outro} /></p>}
          </div>
        )}
      </div>
    </Shell>
  );
}

// ───────────────────────────────────────────────────────────── pick5
function Pick5({ b, onAnswer }: { b: B<'pick5'>; onAnswer: OnAnswer }) {
  const all = [...b.hand, ...b.board];
  const [sel, setSel] = useState<string[]>([]);
  const [ok, setOk] = useState<boolean | null>(null);
  const best = useMemo(() => bestFive(all), [b]); // eslint-disable-line react-hooks/exhaustive-deps
  const finish = useOnce(onAnswer);
  const shown = ok === false ? best.sets[0] : sel;
  const toggle = (c: string) => {
    if (ok !== null) return;
    sfx.tap();
    setSel((s) => (s.includes(c) ? s.filter((x) => x !== c) : s.length < 5 ? [...s, c] : s));
  };
  const pickRow = (cards: string[], label: string) => (
    <div className="q-vis-part">
      <div className="ia-row">
        {cards.map((c) => (
          <button key={c} className={`ia-tap${shown.includes(c) ? ' on' : ''}${ok === false && sel.includes(c) && !shown.includes(c) ? ' wrong' : ''}`} onClick={() => toggle(c)} disabled={ok !== null}>
            <PlayingCard card={parseCard(c)} size="md" />
          </button>
        ))}
      </div>
      <span className="muted small">{label}</span>
    </div>
  );
  return (
    <Shell label="最強の5枚" q={b.q ?? '手札とボードの7枚から、いちばん強い5枚をタップしてください'}>
      <div className="q-visual">{pickRow(b.hand, 'あなた')}{pickRow(b.board, 'ボード')}</div>
      {ok === null ? (
        <button className="est-go" disabled={sel.length !== 5} onClick={(e) => { const r = isBestFive(all, sel); setOk(r); finish(r, e.currentTarget); }}>
          {sel.length === 5 ? 'これで決定' : `あと ${5 - sel.length} 枚`}
        </button>
      ) : (
        <Result ok={ok} text={`いちばん強いのは **${handName(best.score)}**。${ok ? '' : '持ち上がっている5枚が正解です。'}${b.explain ? ' ' + b.explain : ''}`} />
      )}
    </Shell>
  );
}

// ───────────────────────────────────────────────────────────── showdown
function Showdown({ b, onAnswer }: { b: B<'showdown'>; onAnswer: OnAnswer }) {
  const win = useMemo(() => winners(b.board, b.players), [b]);
  const [pick, setPick] = useState<number | null>(null); // -1 = split
  const finish = useOnce(onAnswer);
  const correct = win.length > 1 ? -1 : win[0];
  const choose = (k: number, el: Element) => { if (pick !== null) return; setPick(k); finish(k === correct, el); };
  return (
    <Shell label="どっちが勝つ？" q={b.q ?? '勝つのはどれ？ タップしてください'}>
      <div className="q-visual"><div className="q-vis-part"><div className="ia-row">{b.board.map((c) => <Card key={c} c={c} />)}</div><span className="muted small">ボード</span></div></div>
      <div className="sd-players">
        {b.players.map((p, k) => {
          const isWin = win.includes(k);
          const cls = pick === null ? '' : isWin ? 'correct' : k === pick ? 'wrong' : 'dim';
          return (
            <button key={k} className={`sd-player lb-opt ${cls}`} disabled={pick !== null} onClick={(e) => choose(k, e.currentTarget)}>
              <span className="ia-row">{p.cards.map((c) => <Card key={c} c={c} />)}</span>
              <span className="sd-label">{p.label}</span>
              {pick !== null && <span className="sd-hand">{handName(scoreOf([...p.cards, ...b.board]))}{isWin && (win.length > 1 ? '（引き分け）' : ' の勝ち')}</span>}
            </button>
          );
        })}
      </div>
      <button className={`lb-opt sd-split ${pick === null ? '' : correct === -1 ? 'correct' : pick === -1 ? 'wrong' : 'dim'}`} disabled={pick !== null} onClick={(e) => choose(-1, e.currentTarget)}>引き分け</button>
      {pick !== null && <Result ok={pick === correct} text={b.explain} />}
    </Shell>
  );
}

// ───────────────────────────────────────────────────────────── outs
function Outs({ b, onAnswer }: { b: B<'outs'>; onAnswer: OnAnswer }) {
  const outs = useMemo(() => new Set(outsOf(b.hand, b.board, b.target)), [b]);
  const seen = new Set([...b.hand, ...b.board]);
  const [sel, setSel] = useState<Set<string>>(new Set());
  const [done, setDone] = useState(false);
  const finish = useOnce(onAnswer);
  const hits = [...sel].filter((c) => outs.has(c)).length;
  const ok = done && hits === outs.size && sel.size === outs.size;
  const toggle = (c: string) => {
    if (done) return;
    sfx.tap();
    setSel((s) => { const n = new Set(s); if (n.has(c)) n.delete(c); else n.add(c); return n; });
  };
  return (
    <Shell label="アウツをタップ" q={b.q ?? `次の1枚で **${b.target}以上** になるカードを全部タップしてください`}>
      <div className="q-visual">
        <div className="q-vis-part"><div className="ia-row">{b.hand.map((c) => <Card key={c} c={c} />)}</div><span className="muted small">あなた</span></div>
        <div className="q-vis-part"><div className="ia-row">{b.board.map((c) => <Card key={c} c={c} />)}</div><span className="muted small">ボード</span></div>
      </div>
      <div className="deck" role="group" aria-label="残りのカード">
        {[0, 1, 2, 3].map((s) => (
          <div key={s} className={`deck-row suit-${s}`}>
            {Array.from({ length: 13 }, (_, k) => 12 - k).map((r) => {
              const c = cardStr(r * 4 + s);
              const isSeen = seen.has(c);
              const on = sel.has(c);
              const cls = isSeen ? 'seen' : !done ? (on ? 'on' : '') : outs.has(c) ? (on ? 'hit' : 'miss') : on ? 'extra' : '';
              return (
                <button key={c} className={`deck-card ${cls}`} disabled={isSeen || done} onClick={() => toggle(c)} aria-label={c} aria-pressed={on}>
                  <span>{RANKS[r] === 'T' ? '10' : RANKS[r]}</span><span>{SUIT_SYMBOLS[s]}</span>
                </button>
              );
            })}
          </div>
        ))}
      </div>
      {!done ? (
        <button className="est-go" disabled={sel.size === 0} onClick={(e) => {
          setDone(true);
          const good = [...sel].every((c) => outs.has(c)) && sel.size === outs.size;
          finish(good, e.currentTarget);
        }}>答え合わせ（{sel.size}枚）</button>
      ) : (
        <>
          <div className="deck-legend"><span><i className="hit" />正解</span><span><i className="miss" />見落とし</span><span><i className="extra" />アウツではない</span></div>
          <Result ok={ok} title={ok ? `正解！ アウツは ${outs.size} 枚` : `アウツは ${outs.size} 枚`} text={b.explain} />
        </>
      )}
    </Shell>
  );
}

// ───────────────────────────────────────────────────────────── order
function Order({ b, onAnswer }: { b: B<'order'>; onAnswer: OnAnswer }) {
  const scores = useMemo(() => orderScores(b.hands, b.board), [b]);
  const [order, setOrder] = useState<number[]>([]);
  const [ok, setOk] = useState<boolean | null>(null);
  const finish = useOnce(onAnswer);
  const ranked = [...scores.keys()].sort((x, y) => scores[y] - scores[x]);
  const tap = (k: number) => {
    if (ok !== null) return;
    sfx.tap();
    setOrder((o) => { const at = o.indexOf(k); return at >= 0 ? o.slice(0, at) : [...o, k]; });
  };
  return (
    <Shell label="強い順に並べる" q={b.q ?? '強い順にタップしてください（もう一度タップで取り消し）'}>
      {b.board && <div className="q-visual"><div className="q-vis-part"><div className="ia-row">{b.board.map((c) => <Card key={c} c={c} />)}</div><span className="muted small">ボード</span></div></div>}
      <div className="ord">
        {b.hands.map((h, k) => {
          const n = order.indexOf(k);
          const truth = ranked.indexOf(k);
          const right = ok !== null && scores[k] === scores[ranked[n]];
          return (
            <button key={k} className={`ord-item lb-opt ${ok === null ? (n >= 0 ? 'on' : '') : right ? 'correct' : 'wrong'}`} disabled={ok !== null} onClick={() => tap(k)}>
              <span className="ord-num">{n >= 0 ? n + 1 : ''}</span>
              <span className="ia-row">{h.cards.map((c) => <Card key={c} c={c} />)}</span>
              <span className="ord-label">
                {h.label}
                {ok !== null && <small>{handName(scores[k])}・{truth + 1}番目</small>}
              </span>
            </button>
          );
        })}
      </div>
      {ok === null ? (
        <button className="est-go" disabled={order.length !== b.hands.length} onClick={(e) => { const r = isStrongestFirst(scores, order); setOk(r); finish(r, e.currentTarget); }}>
          {order.length === b.hands.length ? '答え合わせ' : `あと ${b.hands.length - order.length} つ`}
        </button>
      ) : <Result ok={ok} text={b.explain} />}
    </Shell>
  );
}

// ───────────────────────────────────────────────────────────── rapid
function Rapid({ b, onAnswer }: { b: B<'rapid'>; onAnswer: OnAnswer }) {
  const [k, setK] = useState(0);
  const [res, setRes] = useState<boolean[]>([]);
  const [flash, setFlash] = useState<'good' | 'bad' | null>(null);
  const [streak, setStreak] = useState(0);
  const finish = useOnce(onAnswer);
  const pass = b.pass ?? 80;
  const done = res.length === b.items.length && flash === null;
  const item = b.items[Math.min(k, b.items.length - 1)];
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const answer = (a: 0 | 1, el: Element) => {
    if (flash) return;
    const ok = a === item.answer;
    answerFx(el, ok);
    setRes((r) => [...r, ok]);
    setStreak((s) => (ok ? s + 1 : 0));
    setFlash(ok ? 'good' : 'bad');
    if (ok) timer.current = window.setTimeout(() => goOn(), 450);
  };
  const goOn = () => {
    setFlash(null);
    setK((x) => x + 1);
  };
  const score = res.filter(Boolean).length;
  const pct = Math.round((score / b.items.length) * 100);
  useEffect(() => { if (done) finish(pct >= pass); }, [done]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Shell label="スピード判定" q={b.q}>
      <div className="rp-dots">{b.items.map((_, i) => <i key={i} className={i < res.length ? (res[i] ? 'good' : 'bad') : i === k ? 'now' : ''} />)}</div>
      {!done ? (
        <>
          <div className={`rp-card ${flash ?? ''}`} key={k}>
            {item.cards && <div className="ia-row big">{item.cards.map((c) => <Card key={c} c={c} size="lg" />)}</div>}
            {item.board && <div className="ia-row">{item.board.map((c) => <Card key={c} c={c} />)}</div>}
            {item.text && <div className="rp-text"><Inline text={item.text} /></div>}
            {streak >= 3 && <span className="rp-streak">{streak} 連続</span>}
          </div>
          {flash === 'bad' ? (
            <div className="rp-why">
              <Result ok={false} title={`正解は「${b.choices[item.answer]}」`} text={item.why} />
              <button className="pl-next" onClick={goOn}>次へ</button>
            </div>
          ) : (
            <div className="rp-btns">
              {b.choices.map((c, i) => <button key={i} className={`rp-btn c${i}`} onClick={(e) => answer(i as 0 | 1, e.currentTarget)}>{c}</button>)}
            </div>
          )}
        </>
      ) : (
        <Result ok={pct >= pass} title={`${score} / ${b.items.length} 正解`} text={pct >= pass ? 'クリア。' : `${pass}%以上でクリアです。復習でもう一度出ます。`} />
      )}
    </Shell>
  );
}

// ───────────────────────────────────────────────────────────── paint
function Paint({ b, onAnswer }: { b: B<'paint'>; onAnswer: OnAnswer }) {
  const target = useMemo(() => paintTarget(b.spot), [b.spot]);
  const [painted, setPainted] = useState<Set<string>>(new Set());
  const [done, setDone] = useState(false);
  const mode = useRef(true);
  const finish = useOnce(onAnswer);
  const pass = b.pass ?? 75;
  const score = paintScore(target, painted);
  const spot = spotById(b.spot);
  const cell = (l: string) => {
    const on = painted.has(l);
    if (!done) return { segments: on ? [{ color: 'var(--ink)', frac: 1 }] : [] };
    const t = target.has(l);
    if (t && on) return { segments: [{ color: 'var(--app-call)', frac: 1 }] };
    if (t) return { segments: [{ color: '#ff9f0a', frac: 1 }] };
    if (on) return { segments: [{ color: 'var(--app-raise)', frac: 1 }] };
    return { segments: [] };
  };
  return (
    <Shell label="レンジを塗る" q={b.q ?? `**${spot.name}**：オープンするハンドを指でなぞって塗ってください`}>
      <div className={`paint${done ? ' done' : ''}`}>
        <HandGrid cell={cell} compact onPaint={done ? undefined : (l, first) => {
          setPainted((p) => {
            const n = new Set(p);
            if (first) mode.current = !n.has(l);
            if (mode.current) n.add(l); else n.delete(l);
            return n;
          });
        }} />
      </div>
      <div className="paint-meta">
        <span>{painted.size} 種類を塗った</span>
        {!done && painted.size > 0 && <button className="dg-reset" onClick={() => setPainted(new Set())}>消す</button>}
      </div>
      {!done ? (
        <button className="est-go" disabled={painted.size === 0} onClick={(e) => { setDone(true); finish(score >= pass, e.currentTarget); }}>答え合わせ</button>
      ) : (
        <>
          <div className="deck-legend"><span><i className="hit" />一致</span><span><i className="miss" />塗り忘れ</span><span><i className="extra" />塗りすぎ</span></div>
          <Result ok={score >= pass} title={`一致率 ${score}%`} text={score >= pass ? 'アプリのレンジ表とほぼ同じです。' : `${pass}%以上で合格。オレンジの所が塗り忘れ、赤が塗りすぎです。`} />
        </>
      )}
    </Shell>
  );
}

export function HandsOn({ block, onAnswer }: { block: Block; onAnswer?: (ok: boolean) => void }) {
  switch (block.t) {
    case 'play': return <Play b={block} onAnswer={onAnswer} />;
    case 'pick5': return <Pick5 b={block} onAnswer={onAnswer} />;
    case 'showdown': return <Showdown b={block} onAnswer={onAnswer} />;
    case 'outs': return <Outs b={block} onAnswer={onAnswer} />;
    case 'order': return <Order b={block} onAnswer={onAnswer} />;
    case 'rapid': return <Rapid b={block} onAnswer={onAnswer} />;
    case 'paint': return <Paint b={block} onAnswer={onAnswer} />;
    default: return null;
  }
}

