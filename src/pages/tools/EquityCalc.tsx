import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import {
  IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonModal, IonSegment, IonSegmentButton,
  IonSelect, IonSelectOption, IonSpinner, IonTextarea, IonTitle, IonToolbar,
} from '@ionic/react';
import Page from '../../ui/Page';
import PlayingCard from '../../ui/PlayingCard';
import HandGrid from '../../ui/HandGrid';
import { weightCell } from '../../ui/rangeCell';
import { handCombos, makeCard, type Card } from '../../domain/poker/cards';
import type { EquityPlayer, EquityRequest, EquityResult } from '../../domain/poker/equity';
import { SPOTS, parseRange, rangeToString, spotToWeights, weightsPercent } from '../../domain/poker/ranges';
import { getSpotRange } from '../../services/customRanges';

type Slot = Card | null;
interface PlayerInput { mode: 'hand' | 'range'; cards: [Slot, Slot]; range: string }
type Target = { kind: 'player'; i: number; j: number } | { kind: 'board'; j: number };

const COLORS = ['var(--ion-color-primary)', 'var(--ion-color-warning)', 'var(--app-indigo)', 'var(--ion-color-success)', 'var(--ion-color-danger)', 'var(--ion-color-medium)'];
const newPlayer = (mode: PlayerInput['mode'] = 'hand'): PlayerInput => ({ mode, cards: [null, null], range: '' });

export default function EquityCalc() {
  const [players, setPlayers] = useState<PlayerInput[]>([newPlayer(), newPlayer('range')]);
  const [board, setBoard] = useState<Slot[]>([null, null, null, null, null]);
  const [target, setTarget] = useState<Target | null>(null);
  const [gridFor, setGridFor] = useState<number | null>(null);
  const [result, setResult] = useState<EquityResult | null>(null);
  const [running, setRunning] = useState(false);
  const worker = useRef<Worker | null>(null);
  const paintMode = useRef<'add' | 'remove'>('add');

  useEffect(() => () => worker.current?.terminate(), []);

  const used = useMemo(() => {
    const s = new Set<Card>();
    for (const p of players) if (p.mode === 'hand') for (const c of p.cards) if (c !== null) s.add(c);
    for (const c of board) if (c !== null) s.add(c);
    return s;
  }, [players, board]);

  const update = (i: number, patch: Partial<PlayerInput>) => {
    setPlayers((ps) => ps.map((p, k) => (k === i ? { ...p, ...patch } : p)));
    setResult(null);
  };

  const setCard = (t: Target, c: Slot) => {
    setResult(null);
    if (t.kind === 'board') setBoard((b) => b.map((x, k) => (k === t.j ? c : x)));
    else setPlayers((ps) => ps.map((p, k) => (k === t.i ? { ...p, cards: p.cards.map((x, j) => (j === t.j ? c : x)) as [Slot, Slot] } : p)));
  };

  const pick = (c: Card) => {
    if (!target) return;
    setCard(target, c);
    if (target.kind === 'board') {
      const nb = board.map((x, k) => (k === target.j ? c : x));
      const nj = nb.findIndex((x, k) => x === null && k > target.j);
      setTarget(nj >= 0 && target.j < 2 ? { kind: 'board', j: nj } : null);
    } else if (target.j === 0 && players[target.i].cards[1] === null) setTarget({ kind: 'player', i: target.i, j: 1 });
    else setTarget(null);
  };

  const problem = (() => {
    const n = board.filter((c) => c !== null).length;
    if (board.some((c, i) => c === null && board.slice(i + 1).some((x) => x !== null))) return 'ボードは左から順に選んでください';
    if (n > 0 && n < 3) return 'ボードは 0・3・4・5 枚のいずれかです';
    for (const [i, p] of players.entries()) {
      if (p.mode === 'hand' && p.cards.some((c) => c === null)) return `プレイヤー ${i + 1} のハンドを2枚選んでください`;
      if (p.mode === 'range' && Object.keys(parseRange(p.range)).length === 0) return `プレイヤー ${i + 1} のレンジを入力してください`;
    }
    return null;
  })();

  const run = () => {
    if (problem) return;
    worker.current?.terminate();
    const w = new Worker(new URL('../../domain/poker/equity.worker.ts', import.meta.url), { type: 'module' });
    worker.current = w;
    const req: EquityRequest = {
      players: players.map((p): EquityPlayer => {
        if (p.mode === 'hand') return { type: 'hand', cards: p.cards as [Card, Card] };
        const combos: [Card, Card, number][] = [];
        for (const [label, wt] of Object.entries(parseRange(p.range))) for (const [a, b] of handCombos(label)) combos.push([a, b, wt]);
        return { type: 'range', combos };
      }),
      board: board.filter((c): c is Card => c !== null),
      dead: [],
      iterations: 150_000,
    };
    setRunning(true);
    w.onmessage = (e: MessageEvent<{ done: boolean; result: EquityResult }>) => {
      setResult(e.data.result);
      if (e.data.done) { setRunning(false); w.terminate(); }
    };
    w.postMessage(req);
  };

  const current = target ? (target.kind === 'board' ? board[target.j] : players[target.i].cards[target.j]) : null;
  const gridWeights = gridFor !== null ? parseRange(players[gridFor].range) : {};

  return (
    <Page title="勝率計算" back="/tools" backText="ツール">
      <div className="list-header">ボード</div>
      <IonList inset>
        <IonItem lines="none">
          <div className="card-row padded">
            {board.map((c, j) => (
              <PlayingCard key={j} card={c} onClick={() => setTarget({ kind: 'board', j })} placeholder={j < 3 ? 'F' : j === 3 ? 'T' : 'R'} />
            ))}
          </div>
          {board.some((c) => c !== null) && (
            <IonButton slot="end" fill="clear" onClick={() => { setBoard([null, null, null, null, null]); setResult(null); }}>クリア</IonButton>
          )}
        </IonItem>
      </IonList>

      {players.map((p, i) => {
        const eq = result && !result.error ? result.equity[i] : null;
        return (
          <Fragment key={i}>
          <div className="list-header with-action">
            <span><span className="player-dot" style={{ background: COLORS[i] }} />プレイヤー {i + 1}</span>
            {players.length > 2 && (
              <button className="text-action danger" onClick={() => { setPlayers((ps) => ps.filter((_, k) => k !== i)); setResult(null); }}>削除</button>
            )}
          </div>
          <IonList inset>
            <IonItem>
              <IonSegment value={p.mode} onIonChange={(e) => update(i, { mode: e.detail.value as PlayerInput['mode'] })}>
                <IonSegmentButton value="hand"><IonLabel>ハンド</IonLabel></IonSegmentButton>
                <IonSegmentButton value="range"><IonLabel>レンジ</IonLabel></IonSegmentButton>
              </IonSegment>
            </IonItem>
            {p.mode === 'hand' ? (
              <IonItem>
                <div className="card-row padded">
                  {p.cards.map((c, j) => <PlayingCard key={j} card={c} onClick={() => setTarget({ kind: 'player', i, j })} />)}
                </div>
              </IonItem>
            ) : (
              <>
                <IonItem>
                  <IonTextarea
                    label="レンジ" labelPlacement="stacked" autoGrow value={p.range}
                    placeholder="例: 22+, A2s+, KTs+, ATo+"
                    onIonInput={(e) => update(i, { range: e.detail.value ?? '' })}
                  />
                </IonItem>
                <IonItem>
                  <IonSelect label="プリセット" interface="action-sheet" placeholder="選択" cancelText="キャンセル" value={null}
                    onIonChange={(e) => {
                      const [id, kind] = String(e.detail.value).split('|');
                      if (!id) return;
                      update(i, { range: rangeToString(spotToWeights(getSpotRange(id), [kind as 'raise' | 'call'])) });
                    }}>
                    {SPOTS.flatMap((s) => s.kind === 'rfi'
                      ? [<IonSelectOption key={s.id} value={`${s.id}|raise`}>{s.name}</IonSelectOption>]
                      : [<IonSelectOption key={s.id + 'r'} value={`${s.id}|raise`}>{s.name}：3bet</IonSelectOption>,
                        <IonSelectOption key={s.id + 'c'} value={`${s.id}|call`}>{s.name}：コール</IonSelectOption>])}
                  </IonSelect>
                </IonItem>
                <IonItem button detail onClick={() => setGridFor(i)}>
                  <IonLabel>表で選ぶ</IonLabel>
                  <span slot="end" className="value">{weightsPercent(parseRange(p.range)).toFixed(1)}%</span>
                </IonItem>
              </>
            )}
            {eq !== null && result && (
              <IonItem lines="none">
                <IonLabel>
                  <div className="eq-num" style={{ color: COLORS[i] }}>{(eq * 100).toFixed(2)}%</div>
                  <div className="meter"><span style={{ width: `${eq * 100}%`, background: COLORS[i] }} /></div>
                  <p>勝ち {(result.win[i] * 100).toFixed(2)}%　引き分け {(result.tie[i] * 100).toFixed(2)}%</p>
                </IonLabel>
              </IonItem>
            )}
          </IonList>
          </Fragment>
        );
      })}

      <div className="section">
        <IonButton expand="block" className="btn-large" disabled={!!problem || running} onClick={run}>
          {running ? <IonSpinner name="dots" /> : '計算する'}
        </IonButton>
        {players.length < 6 && (
          <IonButton expand="block" fill="clear" onClick={() => { setPlayers((ps) => [...ps, newPlayer()]); setResult(null); }}>プレイヤーを追加</IonButton>
        )}
        <p className="footnote">
          {problem ?? (result?.error ? result.error
            : result ? (result.exact ? `全 ${result.samples.toLocaleString()} 通りを計算（正確な値）` : `${result.samples.toLocaleString()} 回のシミュレーション`)
            : 'ハンドだけなら全通り計算、レンジを含む場合は15万回のシミュレーションです。')}
        </p>
      </div>

      <IonModal isOpen={target !== null} onDidDismiss={() => setTarget(null)} initialBreakpoint={0.6} breakpoints={[0, 0.6, 0.9]}>
        <IonContent className="ion-padding">
          <div className="picker">
            {[0, 1, 2, 3].map((s) => (
              <div key={s} className="picker-row">
                {Array.from({ length: 13 }, (_, k) => 12 - k).map((r) => {
                  const c = makeCard(r, s);
                  const off = used.has(c);
                  return (
                    <div key={c} className={off ? 'picker-off' : ''}>
                      <PlayingCard card={c} size="sm" onClick={off ? undefined : () => pick(c)} />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          {current !== null && target && (
            <IonButton expand="block" fill="clear" color="danger" onClick={() => { setCard(target, null); setTarget(null); }}>このカードを外す</IonButton>
          )}
        </IonContent>
      </IonModal>

      <IonModal isOpen={gridFor !== null} onDidDismiss={() => setGridFor(null)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{gridFor !== null ? `${weightsPercent(gridWeights).toFixed(1)}% のハンド` : ''}</IonTitle>
            <IonButtons slot="start"><IonButton onClick={() => gridFor !== null && update(gridFor, { range: '' })}>全消去</IonButton></IonButtons>
            <IonButtons slot="end"><IonButton strong onClick={() => setGridFor(null)}>完了</IonButton></IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p className="footnote">なぞって追加・削除</p>
          {gridFor !== null && (
            <HandGrid
              cell={(l) => weightCell(gridWeights[l], COLORS[gridFor])}
              onPaint={(label, first) => {
                setPlayers((ps) => ps.map((p, k) => {
                  if (k !== gridFor) return p;
                  const w = { ...parseRange(p.range) };
                  if (first) paintMode.current = w[label] ? 'remove' : 'add';
                  if (paintMode.current === 'add') w[label] = 1; else delete w[label];
                  return { ...p, range: rangeToString(w) };
                }));
                setResult(null);
              }}
            />
          )}
        </IonContent>
      </IonModal>
    </Page>
  );
}
