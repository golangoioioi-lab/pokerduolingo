import { useEffect, useRef, useState } from 'react';
import {
  IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonPage, IonProgressBar, IonSpinner, IonTitle, IonToolbar, useIonRouter,
} from '@ionic/react';
import { close } from 'ionicons/icons';
import { Question } from '../../ui/BlockView';
import { isQuestion, type QuestionBlock } from '../../domain/content/diagrams';
import Celebration from '../../ui/Celebration';
import { findLesson, getLessonBody } from '../../services/content';
import { canOpenLesson } from '../../services/access';
import { useAccount } from '../../services/account';
import { dueCards, recordQuiz } from '../../services/review';
import { XP, award, getGame, haptic, type AwardResult } from '../../services/game';

type QuizBlock = QuestionBlock;
interface Item { lessonId: string; lessonTitle: string; index: number; quiz: QuizBlock }

export default function ReviewSession() {
  const { isPro } = useAccount();
  const router = useIonRouter();
  const contentRef = useRef<HTMLIonContentElement>(null);
  const [items, setItems] = useState<Item[] | null>(null);
  const [i, setI] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [reward, setReward] = useState<AwardResult | null>(null);

  useEffect(() => {
    (async () => {
      const out: Item[] = [];
      for (const c of dueCards()) {
        const f = findLesson(c.lessonId);
        if (!f || !canOpenLesson(f.lesson, isPro)) continue;
        try {
          const b = (await getLessonBody(f.lesson))[c.index];
          if (b && isQuestion(b)) out.push({ lessonId: c.lessonId, lessonTitle: f.lesson.title, index: c.index, quiz: b });
        } catch { /* unavailable offline: skip */ }
      }
      setItems(out);
    })();
  }, [isPro]);

  const exit = () => (router.canGoBack() ? router.goBack() : router.push('/learn', 'back'));
  const item = items?.[i];

  const next = () => {
    if (!items) return;
    if (i < items.length - 1) {
      setI(i + 1);
      setAnswered(false);
      contentRef.current?.scrollToTop(150);
    } else {
      setReward(award(correct * XP.reviewCorrect, 'reviews', correct));
      haptic([20, 40, 20]);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={exit} aria-label="閉じる"><IonIcon slot="icon-only" icon={close} /></IonButton>
          </IonButtons>
          <IonTitle>復習</IonTitle>
        </IonToolbar>
        <IonProgressBar value={reward ? 1 : items?.length ? i / items.length : 0} />
      </IonHeader>

      <IonContent ref={contentRef} className="lesson-content">
        {!items ? (
          <div className="center-state"><IonSpinner /></div>
        ) : items.length === 0 ? (
          <div className="center-state">
            <h2>今は復習する問題がありません</h2>
            <p>レッスンのクイズに答えると、忘れかけたころにここへ戻ってきます。</p>
            <IonButton onClick={exit}>戻る</IonButton>
          </div>
        ) : reward ? (
          <Celebration title="復習" reward={reward} game={getGame()} correct={correct} total={items.length} />
        ) : item && (
          <div className="lesson-body">
            <p className="review-from">{item.lessonTitle} から</p>
            <Question
              key={`${item.lessonId}#${item.index}`}
              block={item.quiz}
              onAnswer={(ok) => {
                setAnswered(true);
                recordQuiz(item.lessonId, item.index, ok);
                if (ok) setCorrect((n) => n + 1);
                haptic(ok ? 12 : [30, 40, 30]);
              }}
            />
          </div>
        )}
      </IonContent>

      {items && items.length > 0 && (
        <IonFooter>
          <IonToolbar className="lesson-footer">
            <div className="footer-row">
              {reward ? (
                <IonButton className="grow" onClick={exit}>完了</IonButton>
              ) : (
                <IonButton className="grow" disabled={!answered} onClick={next}>
                  {!answered ? '答えを選んでください' : i === items.length - 1 ? '結果を見る' : '次へ'}
                </IonButton>
              )}
            </div>
          </IonToolbar>
        </IonFooter>
      )}
    </IonPage>
  );
}
