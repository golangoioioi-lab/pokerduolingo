import { useState } from 'react';
import { IonButton, IonContent, IonIcon, IonModal, useIonRouter } from '@ionic/react';
import { checkmarkCircle, ellipseOutline } from 'ionicons/icons';
import { LEVELS, finishOnboarding, isOnboarded, type Level } from '../services/onboarding';
import { GOALS, loadGoal, setGoal } from '../services/game';
import { isDemoMode } from '../services/backend';
import { COURSES } from '../domain/content/catalog';

const LESSON_COUNT = COURSES.reduce((n, c) => n + c.lessons.length, 0);

/** First-launch flow: what the app is → experience level → start (optionally sign up). */
export default function Onboarding() {
  const [open, setOpen] = useState(() => !isOnboarded());
  const [step, setStep] = useState(0);
  const [level, setLevel] = useState<Level>('new');
  const [goal, setGoalState] = useState(loadGoal);
  const router = useIonRouter();

  const done = (signup: boolean) => {
    finishOnboarding(level);
    setGoal(goal);
    setOpen(false);
    router.push(signup ? '/me/account' : '/learn', 'root');
  };

  return (
    <IonModal isOpen={open} canDismiss={!open} className="onboarding">
      <IonContent className="onboarding-content">
        <div className="ob">
          <div className="ob-dots" aria-hidden="true">
            {[0, 1, 2, 3].map((i) => <span key={i} className={i === step ? 'on' : ''} />)}
          </div>

          {step === 0 && (
            <div className="ob-body">
              <div className="ob-mark" aria-hidden="true">♠</div>
              <p className="ob-eyebrow">Holdem Lab</p>
              <h1 className="ob-title">ポーカーの戦略を、<br />1日5分から。</h1>
              <p className="ob-text">短いレッスンで考え方を学び、実戦形式の練習で身につける。初心者から上級者まで、{COURSES.length}コース・{LESSON_COUNT}レッスン。</p>
            </div>
          )}

          {step === 1 && (
            <div className="ob-body">
              <p className="ob-eyebrow">Step 1</p>
              <h1 className="ob-title">ポーカーの経験は？</h1>
              <p className="ob-text">おすすめのコースから始めます。あとで自由に変えられます。</p>
              <div className="ob-options" role="radiogroup">
                {LEVELS.map((l) => (
                  <button key={l.id} role="radio" aria-checked={level === l.id}
                    className={`ob-option${level === l.id ? ' on' : ''}`} onClick={() => setLevel(l.id)}>
                    <span>
                      <span className="ob-option-title">{l.title}</span>
                      <span className="ob-option-sub">{l.sub}</span>
                    </span>
                    <IonIcon icon={level === l.id ? checkmarkCircle : ellipseOutline} aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="ob-body">
              <p className="ob-eyebrow">Step 2</p>
              <h1 className="ob-title">1日の目標は？</h1>
              <p className="ob-text">目標を達成した日が続くほど、連続記録が伸びます。あとで変えられます。</p>
              <div className="ob-options" role="radiogroup">
                {GOALS.map((g) => (
                  <button key={g.xp} role="radio" aria-checked={goal === g.xp}
                    className={`ob-option${goal === g.xp ? ' on' : ''}`} onClick={() => setGoalState(g.xp)}>
                    <span>
                      <span className="ob-option-title">{g.label}</span>
                      <span className="ob-option-sub">{g.sub}・{g.xp} XP</span>
                    </span>
                    <IonIcon icon={goal === g.xp ? checkmarkCircle : ellipseOutline} aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="ob-body">
              <p className="ob-eyebrow">Step 3</p>
              <h1 className="ob-title">準備ができました</h1>
              <p className="ob-text">
                {isDemoMode
                  ? '学習データはこの端末に保存されます。'
                  : 'アカウントを作ると、スマホと PC で続きから学べます。あとからでも作れます。'}
              </p>
            </div>
          )}

          <div className="ob-actions">
            {step < 3 ? (
              <IonButton expand="block" className="btn-large" onClick={() => setStep(step + 1)}>
                {step === 0 ? 'はじめる' : '次へ'}
              </IonButton>
            ) : isDemoMode ? (
              <IonButton expand="block" className="btn-large" onClick={() => done(false)}>学習を始める</IonButton>
            ) : (
              <>
                <IonButton expand="block" className="btn-large" onClick={() => done(true)}>アカウントを作成</IonButton>
                <IonButton expand="block" fill="clear" onClick={() => done(false)}>あとで</IonButton>
              </>
            )}
            {step > 0 && step < 3 && <IonButton expand="block" fill="clear" onClick={() => setStep(step - 1)}>戻る</IonButton>}
          </div>
        </div>
      </IonContent>
    </IonModal>
  );
}
