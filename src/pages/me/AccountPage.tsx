import { useState } from 'react';
import {
  IonInput, IonItem, IonLabel, IonList, IonNote, IonRouterLink, IonSpinner, useIonActionSheet, useIonAlert, useIonToast,
} from '@ionic/react';
import Page from '../../ui/Page';
import { useAccount } from '../../services/account';
import { DEV_LOGIN, PAID_PLANS } from '../../services/backend';
import GoogleSignInButton from '../../ui/GoogleSignInButton';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function AccountPage() {
  const { demo, user, displayName, isPro, signOut, deleteAccount, updateDisplayName } = useAccount();
  const [sheet] = useIonActionSheet();
  const [alert] = useIonAlert();
  const [toast] = useIonToast();

  if (demo) {
    return (
      <Page title="アカウント" back="/me" backText="マイページ">
        <IonList inset>
          <IonItem>
            <IonLabel className="ion-text-wrap">
              <h3>デモモードで動作中</h3>
              <p>サーバーに接続していないため、ログインはできません。学習データはこの端末の中だけに保存されます。</p>
            </IonLabel>
          </IonItem>
        </IonList>
        <p className="footnote">Cloudflare のバックエンドを設定すると、Google アカウントでのログインと購入が使えるようになります（docs/バックエンド構築手順.md）。</p>
      </Page>
    );
  }

  if (!user) return <SignIn />;

  const editName = () =>
    alert({
      header: '表示名',
      inputs: [{ name: 'name', value: displayName, placeholder: '30文字まで', attributes: { maxlength: 30 } }],
      buttons: [
        { text: 'キャンセル', role: 'cancel' },
        {
          text: '保存',
          handler: (v: { name: string }) => {
            void updateDisplayName(v.name).then(({ error }) => { if (error) void toast({ message: error, duration: 2500, position: 'top' }); });
          },
        },
      ],
    });

  const confirmDelete = () =>
    sheet({
      header: '退会すると、Pro の契約は解約され、学習記録を含むすべてのデータが削除されます。元に戻せません。',
      buttons: [
        {
          text: '退会する', role: 'destructive', handler: () => {
            void deleteAccount().then(({ error }) => toast({ message: error ?? '退会しました', duration: 2500, position: 'top' }));
          },
        },
        { text: 'キャンセル', role: 'cancel' },
      ],
    });

  const initial = (displayName || user.email || '?').slice(0, 1).toUpperCase();

  return (
    <Page title="アカウント" back="/me" backText="マイページ">
      <div className="profile-head">
        <div className="avatar" aria-hidden="true">{initial}</div>
        <div className="profile-name">{displayName || '名前未設定'}</div>
        <div className="profile-sub">{user.email}{PAID_PLANS && ` ・ ${isPro ? 'Pro' : '無料プラン'}`}</div>
      </div>

      <IonList inset>
        <IonItem button detail onClick={editName}>
          <IonLabel>表示名</IonLabel>
          <IonNote slot="end">{displayName || '未設定'}</IonNote>
        </IonItem>
        <IonItem>
          <IonLabel>メール</IonLabel>
          <IonNote slot="end">{user.email}</IonNote>
        </IonItem>
        {PAID_PLANS && <IonItem routerLink="/me/plan" detail>
          <IonLabel>プラン</IonLabel>
          <IonNote slot="end">{isPro ? 'Pro' : '無料'}</IonNote>
        </IonItem>}
      </IonList>

      <IonList inset>
        <IonItem button detail={false} onClick={signOut}><IonLabel>ログアウト</IonLabel></IonItem>
        <IonItem button detail={false} onClick={confirmDelete}><IonLabel color="danger">退会する</IonLabel></IonItem>
      </IonList>
      <p className="footnote">学習の進み具合は、ログイン中は自動でサーバーに保存され、他の端末でも続きから始められます。</p>
    </Page>
  );
}

function SignIn() {
  const { signInWithGoogle, devSignIn } = useAccount();
  const [toast] = useIonToast();
  const [busy, setBusy] = useState(false);
  const [email, setEmail] = useState('dev@example.com');

  const run = async (p: Promise<{ error?: string }>) => {
    setBusy(true);
    const { error } = await p;
    setBusy(false);
    if (error) void toast({ message: error, duration: 3000, position: 'top' });
  };

  return (
    <Page title="ログイン / 登録" back="/me" backText="マイページ">
      <p className="page-intro">
        Google アカウントでログインすると、購入と、スマホ・PC 間での進み具合の同期が使えます。初めての場合はそのままアカウントが作られます。
      </p>
      <div className="section signin">
        {busy ? <div className="signin-busy"><IonSpinner name="dots" /></div> : <GoogleSignInButton onCredential={(c) => void run(signInWithGoogle(c))} />}
        <p className="footnote">
          続行すると<IonRouterLink routerLink="/me/legal/terms">利用規約</IonRouterLink>と
          <IonRouterLink routerLink="/me/legal/privacy">プライバシーポリシー</IonRouterLink>に同意したものとみなされます。
          Google から受け取るのは、メールアドレスと名前だけです。
        </p>
      </div>

      {DEV_LOGIN && (
        <>
          <div className="list-header">開発用ログイン（ローカルのみ）</div>
          <IonList inset>
            <IonItem>
              <IonInput label="メール" type="email" value={email} onIonInput={(e) => setEmail(String(e.detail.value ?? ''))} />
            </IonItem>
            <IonItem button detail={false} disabled={busy || !EMAIL_RE.test(email)} onClick={() => void run(devSignIn(email))}>
              <IonLabel>このメールでログイン</IonLabel>
            </IonItem>
          </IonList>
        </>
      )}
    </Page>
  );
}
