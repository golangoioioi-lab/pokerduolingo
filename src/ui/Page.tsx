import type { ReactNode } from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

interface Props {
  title: string;
  /** Where the back button goes when there is no history (deep link). */
  back?: string;
  backText?: string;
  end?: ReactNode;
  /** iOS large title that collapses into the toolbar on scroll. */
  large?: boolean;
  /** Small line under the large title. */
  subtitle?: string;
  children: ReactNode;
}

/** Standard iOS screen: translucent nav bar, large title, grouped background. */
export default function Page({ title, back, backText, end, large = true, subtitle, children }: Props) {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          {back && (
            <IonButtons slot="start">
              <IonBackButton defaultHref={back} text={backText ?? '戻る'} />
            </IonButtons>
          )}
          <IonTitle>{title}</IonTitle>
          {end && <IonButtons slot="end">{end}</IonButtons>}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="grouped">
        {large && (
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{title}</IonTitle>
            </IonToolbar>
          </IonHeader>
        )}
        {large && subtitle && <p className="large-subtitle">{subtitle}</p>}
        {children}
      </IonContent>
    </IonPage>
  );
}
