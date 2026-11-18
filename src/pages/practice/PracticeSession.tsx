import { useCallback, useEffect, useRef, useState } from 'react';
import {
  IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonRouter,
} from '@ionic/react';
import { chevronForward, close } from 'ionicons/icons';
import PokerTable from '../../ui/PokerTable';
import HandGrid from '../../ui/HandGrid';
import Legend from '../../ui/Legend';
import { rangeCell } from '../../ui/rangeCell';
import { Inline } from '../../ui/BlockView';
import { ACTION_LABEL, SPOTS, freqOf, type Action } from '../../domain/poker/ranges';
import { cardStr } from '../../domain/poker/cards';
import { explainHand } from '../../domain/content/explain';
import { useAccount } from '../../services/account';
import { canPracticeSpot, consumeQuestion, remainingQuestions } from '../../services/access';
import { deal, isCorrect, loadPracticeSettings, mainAction, type Question } from '../../services/practice';
import { addRecord } from '../../services/history';
import { usePaywall } from '../../ui/Paywall';
import { XP, award, haptic } from '../../services/game';
import { answerFx } from '../../ui/fx';

const pct = (x: number) => `${Math.round(x * 100)}%`;

export default function PracticeSession() {
  const { isPro } = useAccount();
  const paywall = usePaywall();
  const router = useIonRouter();
  const contentRef = useRef<HTMLIonContentElement>(null);

  const spotIds = useCallback(() => {
    const s = loadPracticeSettings();
    const ids = s.spots.filter((id) => canPracticeSpot(SPOTS.find((x) => x.id === id)!, isPro));
    return { ids: ids.length ? ids : SPOTS.filter((x) => x.kind === 'rfi').map((x) => x.id), focus: s.focus };
  }, [isPro]);

  const [q, setQ] = useState<Question>(() => { const s = spotIds(); return deal(s.ids, s.focus); });
  const [answer, setAnswer] = useState<Action | null>(null);
  const [session, setSession] = useState({ total: 0, correct: 0, streak: 0 });

  const freq = q.range[q.label];
  const actionName = (a: Action) => (a === 'raise' ? (q.spot.kind === 'rfi' ? 'レイズ' : '3bet') : ACTION_LABEL[a]);

  const respond = (a: Action) => {
    if (answer) return;
    if (remainingQuestions(isPro) <= 0) return paywall('quota');
    const ok = isCorrect(freq, a);
    consumeQuestion(isPro);
    award(ok ? XP.practiceCorrect : 0, 'practice');
    haptic(ok ? 12 : [30, 40, 30]);
    answerFx(document.querySelector(`.ion-page:not(.ion-page-hidden) .act-${a}`), ok);
    setAnswer(a);
    setSession((s) => ({ total: s.total + 1, correct: s.correct + (ok ? 1 : 0), streak: ok ? s.streak + 1 : 0 }));
    addRecord({
      t: Date.now(), spot: q.spot.id, hand: q.label, cards: q.cards.map(cardStr).join(''),
      action: a, freq: freq ?? { raise: 0, call: 0 }, correct: ok,
    });
  };

  const next = () => {
    if (remainingQuestions(isPro) <= 0) return paywall('quota');
    const s = spotIds();
    setAnswer(null);
    setQ(deal(s.ids, s.focus));
    contentRef.current?.scrollToTop(200);
  };

  // Keyboard shortcuts on desktop: F / C / R, Enter for next.
  const keyRef = useRef<(e: KeyboardEvent) => void>(() => {});
  keyRef.current = (e) => {
    const k = e.key.toLowerCase();
    if (!answer) {
      if (k === 'f') respond('fold');
      else if (k === 'c' && q.spot.actions.includes('call')) respond('call');
      else if (k === 'r') respond('raise');
    } else if (k === 'enter' || k === ' ') { e.preventDefault(); next(); }
  };
  useEffect(() => {
    const h = (e: KeyboardEvent) => keyRef.current(e);
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  const best = mainAction(freq);
  const chosenF = answer ? freqOf(freq, answer) : 0;
  const ok = answer ? isCorrect(freq, answer) : false;
  const verdict = !answer ? null
    : !ok ? { cls: 'bad', title: '不正解', msg: `${q.label} は「${actionName(best)}」が基本です。` }
    : chosenF >= 0.95 || answer === best ? { cls: 'good', title: '正解', msg: '' }
    : { cls: 'mixed', title: '正解（混合戦略）', msg: `${actionName(answer)} は ${pct(chosenF)} の頻度で選ばれます。` };
  const ex = answer ? explainHand(q.spot, q.label, freq) : null;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => (router.canGoBack() ? router.goBack() : router.push('/practice', 'back'))} aria-label="終了">
              <IonIcon slot="icon-only" icon={close} />
            </IonButton>
          </IonButtons>
          <IonTitle>{session.correct} / {session.total}</IonTitle>
          <IonButtons slot="end">
            <span key={session.streak} className={`streak${session.streak >= 5 ? ' hot' : ''}`}>{session.streak >= 5 ? `${session.streak} COMBO` : `連続 ${session.streak}`}</span>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent ref={contentRef} className="grouped">
        <div className="section">
          <div className="spot-line">
            <span className="spot-name">{q.spot.name}</span>
            <span className="spot-desc">{q.spot.description}</span>
          </div>
          <PokerTable spot={q.spot} heroCards={q.cards} />
        </div>

        {answer && verdict && ex && (
          <>
            <div className={`result-card ${verdict.cls}`}>
              <div className="result-head">
                <span className="result-title">{verdict.title}</span>
                <span className="result-hand">{q.label}</span>
              </div>
              {verdict.msg && <p className="result-msg">{verdict.msg}</p>}
              <div className="freq-bars">
                {q.spot.actions.map((a) => (
                  <div key={a} className={`freq-bar${a === answer ? ' chosen' : ''}`}>
                    <span className="freq-name">{actionName(a)}</span>
                    <span className="freq-track"><span className={`freq-fill fill-${a}`} style={{ width: pct(freqOf(freq, a)) }} /></span>
                    <span className="freq-val">{pct(freqOf(freq, a))}</span>
                  </div>
                ))}
              </div>
            </div>

            <IonList inset>
              <IonItem lines="none" className="explain-item">
                <IonLabel className="ion-text-wrap">
                  <h3>なぜ？</h3>
                  {ex.points.map((p, i) => <p key={i} className="explain-p"><Inline text={p} /></p>)}
                </IonLabel>
              </IonItem>
              <IonItem button detail routerLink={`/lesson/${ex.lesson.id}`}>
                <IonLabel color="primary">レッスン：{ex.lesson.title}</IonLabel>
              </IonItem>
            </IonList>

            <div className="grid-card">
              <div className="grid-card-head">{q.spot.name}</div>
              <HandGrid cell={(l) => rangeCell(q.range[l])} highlight={q.label} compact />
              <Legend showCall={q.spot.kind !== 'rfi'} />
            </div>
          </>
        )}
      </IonContent>

      <IonFooter>
        <IonToolbar className="action-footer">
          {!answer ? (
            <div className="footer-row">
              {q.spot.actions.map((a) => (
                <button key={a} className={`act act-${a}`} onClick={() => respond(a)}>{actionName(a)}</button>
              ))}
            </div>
          ) : (
            <div className="footer-row">
              <IonButton className="grow" onClick={next}>
                次の問題
                <IonIcon slot="end" icon={chevronForward} />
              </IonButton>
            </div>
          )}
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
}
