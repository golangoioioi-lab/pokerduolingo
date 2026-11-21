import './theme/loop.css';
import './theme/fx.css';
import './theme/diagrams.css';
import './theme/interactive.css';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Navigate, Route, useLocation } from 'react-router-dom';
import { book, construct, person, flash } from 'ionicons/icons';
import { AccountProvider } from './services/account';
import { PaywallProvider } from './ui/Paywall';
import Onboarding from './ui/Onboarding';
import { GlossaryProvider } from './ui/Glossary';
import LearnHome from './pages/learn/LearnHome';
import CourseDetail from './pages/learn/CourseDetail';
import LessonPlayer from './pages/learn/LessonPlayer';
import ReviewSession from './pages/learn/ReviewSession';
import PracticeHome from './pages/practice/PracticeHome';
import PracticeSession from './pages/practice/PracticeSession';
import ToolsHome from './pages/tools/ToolsHome';
import RangeViewer from './pages/tools/RangeViewer';
import EquityCalc from './pages/tools/EquityCalc';
import MeHome from './pages/me/MeHome';
import Stats from './pages/me/Stats';
import BadgesPage from './pages/me/BadgesPage';
import PlanPage from './pages/me/PlanPage';
import SettingsPage from './pages/me/SettingsPage';
import AccountPage from './pages/me/AccountPage';
import LegalPage from './pages/me/LegalPage';
import { lazy, Suspense } from 'react';
const DiagramGallery = import.meta.env.DEV ? lazy(() => import('./pages/dev/DiagramGallery')) : null;

/** Full-screen flows hide the tab bar, like iOS apps do for focused tasks. */
const IMMERSIVE = [/^\/lesson\//, /^\/practice\/session/, /^\/review/];

function Tabs() {
  const { pathname } = useLocation();
  const hideTabs = IMMERSIVE.some((r) => r.test(pathname));
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/learn" element={<LearnHome />} />
        <Route path="/learn/course/:courseId" element={<CourseDetail />} />
        <Route path="/lesson/:lessonId" element={<LessonPlayer />} />
        <Route path="/review" element={<ReviewSession />} />
        <Route path="/practice" element={<PracticeHome />} />
        <Route path="/practice/session" element={<PracticeSession />} />
        <Route path="/tools" element={<ToolsHome />} />
        <Route path="/tools/ranges" element={<RangeViewer />} />
        <Route path="/tools/equity" element={<EquityCalc />} />
        <Route path="/me" element={<MeHome />} />
        <Route path="/me/stats" element={<Stats />} />
        <Route path="/me/badges" element={<BadgesPage />} />
        <Route path="/me/plan" element={<PlanPage />} />
        <Route path="/me/settings" element={<SettingsPage />} />
        <Route path="/me/account" element={<AccountPage />} />
        <Route path="/me/legal/:doc" element={<LegalPage />} />
        {/* Always a Route element: IonRouterOutlet crashes on null children. */}
        <Route path="/dev/diagrams" element={DiagramGallery ? <Suspense><DiagramGallery /></Suspense> : <Navigate to="/learn" replace />} />
        <Route path="/" element={<Navigate to="/learn" replace />} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" style={hideTabs ? { display: 'none' } : undefined}>
        <IonTabButton tab="learn" href="/learn">
          <IonIcon icon={book} aria-hidden="true" />
          <IonLabel>学ぶ</IonLabel>
        </IonTabButton>
        <IonTabButton tab="practice" href="/practice">
          <IonIcon icon={flash} aria-hidden="true" />
          <IonLabel>練習</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tools" href="/tools">
          <IonIcon icon={construct} aria-hidden="true" />
          <IonLabel>ツール</IonLabel>
        </IonTabButton>
        <IonTabButton tab="me" href="/me">
          <IonIcon icon={person} aria-hidden="true" />
          <IonLabel>マイページ</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}

export default function App() {
  return (
    <IonApp>
      <AccountProvider>
        <IonReactRouter>
          <PaywallProvider>
            <GlossaryProvider>
              <Tabs />
              <Onboarding />
            </GlossaryProvider>
          </PaywallProvider>
        </IonReactRouter>
      </AccountProvider>
    </IonApp>
  );
}
