import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { setupIonicReact } from '@ionic/react';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.class.css';
import '@fontsource-variable/inter';
import './theme/variables.css';
import './theme/app.css';
import './theme/modern.css';

import App from './App';
import { watchSystemAppearance } from './services/settings';

// Always render the iOS look, also on Android and desktop browsers.
setupIonicReact({ mode: 'ios' });
watchSystemAppearance();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
