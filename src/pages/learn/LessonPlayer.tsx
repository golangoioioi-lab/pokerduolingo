import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonPage, IonProgressBar, IonSpinner, IonTitle, IonToolbar, useIonRouter,
} from '@ionic/react';
import { chevronBack, close, lockClosed } from 'ionicons/icons';
import BlockView from '../../ui/BlockView';
import { findLesson, getLessonBody, loadDone, markDone } from '../../services/content';
import { XP, award, getGame, haptic, type AwardResult } from '../../services/game';
import { recordQuiz } from '../../services/review';
import Celebration from '../../ui/Celebration';
import { useAccount } from '../../services/account';
import { canOpenLesson } from '../../services/access';
import { usePaywall } from '../../ui/Paywall';
import type { Block } from '../../domain/content/types';
import { isQuestion } from '../../domain/content/diagrams';

const TAB_ROUTES: Record<string, string> = { train: '/practice', ranges: '/tools/ranges', equity: '/tools/equity' };

/** One screen per heading; each quiz gets its own screen. */
function toSteps(blocks: Block[]): Block[][] {
  const steps: Block[][] = [];
  let cur: Block[] = [];
  const flush = () => { if (cur.length) steps.push(cur); cur = []; };
  for (const b of blocks) {
    if (b.t === 'h' || isQuestion(b)) flush();
    cur.push(b);
    if (isQuestion(b)) flush();
  }
  flush();
  const last = steps[steps.length - 1];
  if (steps.length > 1 && last.every((b) => b.t === 'try')) steps[steps.length - 2].push(...steps.pop()!);
  return steps;
}

export default function LessonPlayer() {
  const { lessonId = '' } = useParams();
  const found = findLesson(lessonId);
  const { isPro } = useAccount();
  const paywall = usePaywall();
  const router = useIonRouter();
  const contentRef = useRef<HTMLIonContentElement>(null);

  const [blocks, setBlocks] = useState<Block[] | null>(null);
  const [error, setError] = useState(false);
  const [i, setI] = useState(0);
  const [answered, setAnswered] = useState<Record<number, boolean>>({});
  const [finished, setFinished] = useState(false);
  // first-try correctness per quiz block index (for XP and spaced repetition)
  const [results, setResults] = useState<Record<number, boolean>>({});
  const [reward, setReward] = useState<AwardResult | null>(null);

  const allowed = found ? canOpenLesson(found.lesson, isPro) : false;

  useEffect(() => {
    setI(0); setAnswered({}); setFinished(false); setBlocks(null); setError(false); setResults({}); setReward(null);
    if (!found || !allowed) return;
    getLessonBody(found.lesson).then(setBlocks).catch((e: Error) => {
      // The server is the authority on Pro: if it says no, show the upgrade sheet instead of an error.
      if (e.message === 'pro-required') paywall('lesson');
      setError(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId, allowed]);

  const steps = useMemo(() => (blocks ? toSteps(blocks) : []), [blocks]);
  const courseHref = found ? `/learn/course/${found.course.id}` : '/learn';
  const exit = () => (router.canGoBack() ? router.goBack() : router.push(courseHref, 'back'));

  const go = (n: number) => {
    setI(n);
    contentRef.current?.scrollToTop(200);
  };
  const advance = () => {
    if (i < steps.length - 1) go(i + 1);
    else if (found) {
      const firstTime = !loadDone().includes(found.lesson.id);
      const quizzes = Object.values(results);
      const correct = quizzes.filter(Boolean).length;
      const perfect = quizzes.length > 0 && correct === quizzes.length;
      // Full XP the first time; a smaller amount for replays so reviewing still counts.
      const xp = firstTime
        ? XP.lesson + correct * XP.quizFirstTry + (perfect ? XP.perfectLesson : 0)
        : Math.round(XP.lesson / 2);
      void markDone(found.lesson.id);
      const r = award(xp, firstTime ? 'lessons' : undefined);
      if (firstTime && perfect) r.newBadges.push(...award(0, 'perfect').newBadges);
      setReward(r);
      haptic([20, 40, 20]);
      setFinished(true);
    }
  };

  const step = steps[i];
  const needsAnswer = !!step?.some(isQuestion) && !answered[i];
  const progress = finished ? 1 : steps.length ? i / steps.length : 0;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={exit} aria-label="閉じる">
              <IonIcon slot="icon-only" icon={close} />
            </IonButton>
          </IonButtons>
          <IonTitle>{found?.lesson.title ?? 'レッスン'}</IonTitle>
        </IonToolbar>
        <IonProgressBar value={progress} />
      </IonHeader>

      <IonContent ref={contentRef} className="lesson-content">
        {!found ? (
          <p className="empty-note">レッスンが見つかりません</p>
        ) : !allowed ? (
          <div className="center-state">
            <IonIcon icon={lockClosed} className="center-icon" aria-hidden="true" />
            <h2>{found.lesson.title}</h2>
            <p>このレッスンは Pro で読めます。</p>
            <IonButton onClick={() => paywall('lesson')}>Pro について見る</IonButton>
          </div>
        ) : error ? (
          <div className="center-state"><p>レッスンを読み込めませんでした。通信状況を確認してください。</p></div>
        ) : !blocks ? (
          <div className="center-state"><IonSpinner /></div>
        ) : finished && reward ? (
          <Celebration
            title={found.lesson.title}
            reward={reward}
            game={getGame()}
            correct={Object.values(results).filter(Boolean).length}
            total={Object.keys(results).length}
          />
        ) : (
          <div className="lesson-body">
            {i === 0 && <h1 className="lesson-title">{found.lesson.title}</h1>}
            {step.map((b, k) => (
              <BlockView
                key={`${lessonId}-${i}-${k}`}
                block={b}
                goTab={(t) => router.push(TAB_ROUTES[t] ?? '/practice')}
                onAnswer={(ok) => {
                  setAnswered((a) => ({ ...a, [i]: true }));
                  const idx = blocks.indexOf(b);
                  if (!(idx in results)) {
                    setResults((r) => ({ ...r, [idx]: ok }));
                    recordQuiz(found.lesson.id, idx, ok);
                    haptic(ok ? 12 : [30, 40, 30]);
                  }
                }}
              />
            ))}
          </div>
        )}
      </IonContent>

      {found && allowed && blocks && (
        <IonFooter>
          <IonToolbar className="lesson-footer">
            {finished ? (
              <div className="footer-row">
                <IonButton fill="clear" onClick={() => router.push(courseHref, 'back')}>コースに戻る</IonButton>
                {found.next && (
                  <IonButton className="grow" onClick={() => router.push(`/lesson/${found.next!.lesson.id}`, 'forward', 'replace')}>
                    次のレッスン
                  </IonButton>
                )}
              </div>
            ) : (
              <div className="footer-row">
                <IonButton fill="clear" disabled={i === 0} onClick={() => go(i - 1)} aria-label="前へ">
                  <IonIcon slot="icon-only" icon={chevronBack} />
                </IonButton>
                <IonButton className="grow" disabled={needsAnswer} onClick={advance}>
                  {needsAnswer ? '答えを選んでください' : i === steps.length - 1 ? '完了' : '次へ'}
                </IonButton>
              </div>
            )}
          </IonToolbar>
        </IonFooter>
      )}
    </IonPage>
  );
}
