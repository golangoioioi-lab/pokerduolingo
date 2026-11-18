import { useMemo, useState } from 'react';
import { IonIcon, IonModal, useIonRouter, useIonToast, useIonViewWillEnter } from '@ionic/react';
import { checkmark, chevronDown, chevronForward, lockClosed, refresh, star } from 'ionicons/icons';
import Page from '../../ui/Page';
import GameBar from '../../ui/GameBar';
import { COURSES } from '../../domain/content/catalog';
import type { Course } from '../../domain/content/types';
import { ALL_LESSONS, loadDone } from '../../services/content';
import { useAccount } from '../../services/account';
import { canOpenLesson } from '../../services/access';
import { loadLevel, startCourseFor } from '../../services/onboarding';
import { isUnlocked, pathOffset } from '../../services/path';
import { dueCount } from '../../services/review';
import { haptic } from '../../services/game';
import { usePaywall } from '../../ui/Paywall';

const FOCUS_KEY = 'hl.focus.v1';
const LEVELS = ['初心者', '初級', '中級', '上級', '全レベル'] as const;

const progressOf = (c: Course, done: string[]) => c.lessons.filter((l) => done.includes(l.id)).length;

export default function LearnHome() {
  const [done, setDone] = useState<string[]>(loadDone);
  const [due, setDue] = useState(() => dueCount());
  const [picker, setPicker] = useState(false);
  const [focus, setFocusState] = useState<string | null>(() => { try { return localStorage.getItem(FOCUS_KEY); } catch { return null; } });
  const { isPro } = useAccount();
  const paywall = usePaywall();
  const router = useIonRouter();
  const [toast] = useIonToast();
  useIonViewWillEnter(() => { setDone(loadDone()); setDue(dueCount()); });

  // "Current" lesson: first unfinished lesson, starting from the course matching the chosen level.
  const start = startCourseFor(loadLevel());
  const current = useMemo(() => {
    const ordered = [...ALL_LESSONS.filter((x) => x.course.id === start), ...ALL_LESSONS];
    return ordered.find((x) => !done.includes(x.lesson.id));
  }, [done, start]);

  // The course shown as a path: the one the learner picked, else the one with the current lesson.
  const course = COURSES.find((c) => c.id === focus) ?? current?.course ?? COURSES[0];
  const ci = COURSES.indexOf(course);
  const nextCourse = COURSES.slice(ci + 1).find((c) => progressOf(c, done) < c.lessons.length);
  const n = progressOf(course, done);
  const complete = n === course.lessons.length;
  const currentInCourse = course.lessons.find((l, i) => !done.includes(l.id) && isUnlocked(course, i, done))?.id;

  const setFocus = (id: string) => {
    haptic();
    setFocusState(id);
    try { localStorage.setItem(FOCUS_KEY, id); } catch { /* private mode */ }
    setPicker(false);
  };

  const open = (id: string, unlocked: boolean, allowed: boolean) => {
    haptic();
    if (!unlocked) {
      toast({ message: 'ひとつ前のレッスンを終えると開きます', duration: 1800, position: 'top' });
      return;
    }
    if (!allowed) return paywall('lesson');
    router.push(`/lesson/${id}`);
  };

  return (
    <Page title="学ぶ">
      <div className="section">
        <GameBar />
        {due > 0 && (
          <button className="review-card" onClick={() => router.push('/review')}>
            <span className="review-icon"><IonIcon icon={refresh} aria-hidden="true" /></span>
            <span className="review-text">
              <b>復習 {due}問</b>
              <span>間違えた問題と、忘れかけの問題</span>
            </span>
            <IonIcon icon={chevronForward} className="chev" aria-hidden="true" />
          </button>
        )}
      </div>

      <section className="unit">
        <div className="unit-head active">
          <button className="unit-switch" onClick={() => { haptic(); setPicker(true); }} aria-label="コースを切り替える">
            <span className="unit-eyebrow">Unit {ci + 1} / {COURSES.length} ・ {course.level}</span>
            <span className="unit-title">{course.symbol} {course.title}<IonIcon icon={chevronDown} className="unit-chev" /></span>
          </button>
          <span className="unit-progress">
            <span className="bar"><span style={{ width: `${(n / course.lessons.length) * 100}%` }} /></span>
            <span>{n}/{course.lessons.length}</span>
          </span>
          <button className="unit-guide" onClick={() => router.push(`/learn/course/${course.id}`)}>一覧</button>
        </div>

        <ol className="path" aria-label={`${course.title}のレッスン`} key={course.id}>
          {course.lessons.map((l, i) => {
            const isDone = done.includes(l.id);
            const unlocked = isUnlocked(course, i, done);
            const allowed = canOpenLesson(l, isPro);
            const isCurrent = l.id === currentInCourse;
            const state = isDone ? 'done' : !unlocked ? 'locked' : isCurrent ? 'current' : 'open';
            return (
              <li key={l.id} className="path-step" style={{ transform: `translateX(${pathOffset(i)}px)`, animationDelay: `${Math.min(i, 12) * 30}ms` }}>
                {isCurrent && <span className="path-bubble">{n ? '続き' : 'スタート'}</span>}
                <button
                  className={`node node-${state}`}
                  onClick={() => open(l.id, unlocked, allowed)}
                  aria-label={`${l.title}（${isDone ? '完了' : !unlocked ? 'ロック中' : '開始できます'}）`}
                >
                  {isDone ? <IonIcon icon={checkmark} /> : !unlocked || !allowed ? <IonIcon icon={lockClosed} /> : <span>{i + 1}</span>}
                </button>
                <span className="node-caption">
                  {l.title}
                  {!allowed && <span className="node-pro">PRO</span>}
                </span>
              </li>
            );
          })}
          <li className="path-step path-end" style={{ transform: `translateX(${pathOffset(course.lessons.length)}px)` }}>
            <span className={`node node-trophy${complete ? ' done' : ''}`} aria-label={complete ? 'コース完了' : 'コース完了で獲得'}>
              <IonIcon icon={star} />
            </span>
          </li>
        </ol>

        {nextCourse && (
          <button className="next-course" onClick={() => setFocus(nextCourse.id)}>
            <span className="unit-eyebrow">次のコース</span>
            <span className="next-course-title">{nextCourse.symbol} {nextCourse.title}</span>
            <span className="lesson-sub">{nextCourse.description}</span>
            <IonIcon icon={chevronForward} className="chev" aria-hidden="true" />
          </button>
        )}
      </section>

      <IonModal isOpen={picker} onDidDismiss={() => setPicker(false)} initialBreakpoint={0.75} breakpoints={[0, 0.75, 1]} className="course-sheet">
        <div className="sheet-body">
          <h2 className="sheet-title">コースを選ぶ</h2>
          {LEVELS.map((lv) => {
            const list = COURSES.filter((c) => c.level === lv);
            if (!list.length) return null;
            return (
              <div key={lv} className="sheet-group">
                <div className="section-title">{lv}</div>
                <div className="cards">
                  {list.map((c) => {
                    const p = progressOf(c, done);
                    return (
                      <button key={c.id} className={`course-pick${c.id === course.id ? ' on' : ''}`} onClick={() => setFocus(c.id)}>
                        <span className="course-pick-sym">{p === c.lessons.length ? <IonIcon icon={checkmark} /> : c.symbol}</span>
                        <span className="course-main">
                          <span className="course-title">{c.title}</span>
                          <span className="lesson-sub">{c.lessons.length}レッスン ・ {p ? `${p}本完了` : c.description}</span>
                        </span>
                        <span className="pick-ring" style={{ ['--p' as string]: `${(p / c.lessons.length) * 360}deg` }} aria-hidden="true" />
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </IonModal>
    </Page>
  );
}
