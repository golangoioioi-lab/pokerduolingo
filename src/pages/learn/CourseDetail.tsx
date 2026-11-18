import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { IonButton, IonIcon, IonRippleEffect, useIonRouter, useIonViewWillEnter } from '@ionic/react';
import { checkmark, chevronForward, lockClosed } from 'ionicons/icons';
import Page from '../../ui/Page';
import { COURSES } from '../../domain/content/catalog';
import { loadDone } from '../../services/content';
import { useAccount } from '../../services/account';
import { canOpenLesson } from '../../services/access';
import { usePaywall } from '../../ui/Paywall';

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = COURSES.find((c) => c.id === courseId);
  const [done, setDone] = useState<string[]>(loadDone);
  const { isPro } = useAccount();
  const paywall = usePaywall();
  const router = useIonRouter();
  useIonViewWillEnter(() => setDone(loadDone()));

  if (!course) return <Page title="コース" back="/learn" backText="学ぶ"><p className="empty-note">コースが見つかりません</p></Page>;

  const n = course.lessons.filter((l) => done.includes(l.id)).length;
  const minutes = course.lessons.reduce((a, l) => a + l.minutes, 0);
  const next = course.lessons.find((l) => !done.includes(l.id));
  const open = (id: string, ok: boolean) => (ok ? router.push(`/lesson/${id}`) : paywall('lesson'));

  return (
    <Page title={course.title} back="/learn" backText="学ぶ">
      <div className="section">
        <p className="course-lead">{course.description}</p>
        <div className="course-meta">
          <span><b>{course.lessons.length}</b> lessons</span>
          <span><b>{minutes}</b> min</span>
          <span><b>{n}</b> done</span>
        </div>
        <div className="bar thick"><span style={{ width: `${(n / course.lessons.length) * 100}%` }} /></div>
        {next && (
          <IonButton expand="block" className="btn-large" onClick={() => open(next.id, canOpenLesson(next, isPro))}>
            {n === 0 ? 'はじめる' : '続きから'}：{next.title}
          </IonButton>
        )}
      </div>

      <h2 className="section-title">Lessons</h2>
      <div className="cards">
        {course.lessons.map((l, i) => {
          const isDone = done.includes(l.id);
          const ok = canOpenLesson(l, isPro);
          return (
            <button key={l.id} className="course-card ion-activatable" onClick={() => open(l.id, ok)}>
              <span className={`lesson-num${isDone ? ' done' : ''}`} aria-label={isDone ? '完了' : undefined}>
                {isDone ? <IonIcon icon={checkmark} /> : String(i + 1).padStart(2, '0')}
              </span>
              <span className="course-main">
                <span className="course-title">{l.title}</span>
                <span className="lesson-sub">{l.summary}</span>
              </span>
              {ok ? (
                <span className="lesson-min">{l.minutes}分</span>
              ) : (
                <IonIcon icon={lockClosed} className="chev" aria-label="Pro" />
              )}
              {ok && <IonIcon icon={chevronForward} className="chev" aria-hidden="true" />}
              <IonRippleEffect />
            </button>
          );
        })}
      </div>
    </Page>
  );
}
