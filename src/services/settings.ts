import { load, save } from './storage';

export type Appearance = 'system' | 'light' | 'dark';
const KEY = 'hl.appearance.v1';

export const loadAppearance = (): Appearance => load<Appearance>(KEY, 'system');

const media = () => window.matchMedia('(prefers-color-scheme: dark)');

/** Ionic's dark palette is enabled by the `ion-palette-dark` class on <html>. */
export function applyAppearance(a: Appearance) {
  const dark = a === 'dark' || (a === 'system' && media().matches);
  document.documentElement.classList.toggle('ion-palette-dark', dark);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#000000' : '#f4f4f2');
}

export function setAppearance(a: Appearance) {
  save(KEY, a);
  applyAppearance(a);
}

export function watchSystemAppearance() {
  const m = media();
  const onChange = () => { if (loadAppearance() === 'system') applyAppearance('system'); };
  m.addEventListener('change', onChange);
  applyAppearance(loadAppearance());
}
