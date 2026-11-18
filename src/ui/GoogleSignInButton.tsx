import { useEffect, useRef, useState } from 'react';
import { GOOGLE_CLIENT_ID } from '../services/backend';

// Minimal typing for Google Identity Services (https://developers.google.com/identity/gsi/web).
interface GsiButtonOptions { theme: string; size: string; shape: string; text: string; locale: string; width?: number; logo_alignment?: string }
interface Gsi {
  accounts: {
    id: {
      initialize: (o: { client_id: string; callback: (r: { credential: string }) => void; ux_mode?: string; itp_support?: boolean }) => void;
      renderButton: (el: HTMLElement, o: GsiButtonOptions) => void;
    };
  };
}
declare global { interface Window { google?: Gsi } }

const SRC = 'https://accounts.google.com/gsi/client';
let loading: Promise<void> | null = null;

function loadGsi(): Promise<void> {
  if (window.google?.accounts) return Promise.resolve();
  loading ??= new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => { loading = null; reject(new Error('gsi-load-failed')); };
    document.head.appendChild(s);
  });
  return loading;
}

/** Google's official "Sign in with Google" button. Calls onCredential with the ID token. */
export default function GoogleSignInButton({ onCredential }: { onCredential: (credential: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const cb = useRef(onCredential);
  cb.current = onCredential;
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID) return;
    let alive = true;
    loadGsi()
      .then(() => {
        if (!alive || !ref.current || !window.google) return;
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: (r) => cb.current(r.credential),
          itp_support: true,
        });
        const dark = document.documentElement.classList.contains('ion-palette-dark');
        window.google.accounts.id.renderButton(ref.current, {
          theme: dark ? 'filled_black' : 'outline',
          size: 'large',
          shape: 'pill',
          text: 'continue_with',
          locale: 'ja',
          logo_alignment: 'center',
          width: Math.min(360, ref.current.clientWidth || 320),
        });
      })
      .catch(() => alive && setFailed(true));
    return () => { alive = false; };
  }, []);

  if (!GOOGLE_CLIENT_ID) return <p className="footnote">Google ログインの設定（VITE_GOOGLE_CLIENT_ID）がまだありません。</p>;
  if (failed) return <p className="footnote">Google ログインを読み込めませんでした。通信状況を確認して、ページを再読み込みしてください。</p>;
  return <div ref={ref} className="google-btn" />;
}
