// Feedback effects: confetti, synthesized sounds, count-up numbers.
// All effects respect "reduce motion" and the in-app sound setting.
import confetti from 'canvas-confetti';
import { useEffect, useRef, useState } from 'react';
import { load, save } from '../services/storage';

const SOUND_KEY = 'hl.sound.v1';
export const soundOn = () => load<boolean>(SOUND_KEY, true);
export const setSoundOn = (v: boolean) => save(SOUND_KEY, v);

export const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

// Monochrome with the two "meaning" accents (gold, flame) — matches the visual style.
const PALETTE = ['#0a0a0a', '#ffffff', '#f5c518', '#ff7a1a', '#8e8e93'];
const PALETTE_DARK = ['#ffffff', '#f5c518', '#ff7a1a', '#8e8e93', '#d1d1d6'];
const colors = () => (document.documentElement.classList.contains('ion-palette-dark') ? PALETTE_DARK : PALETTE);

/** Small burst from an element (e.g. the option you just got right). */
export function burstFrom(el: Element | null, intensity = 1) {
  if (reducedMotion() || !el) return;
  const r = el.getBoundingClientRect();
  confetti({
    particleCount: Math.round(16 * intensity),
    spread: 50 + 10 * intensity,
    startVelocity: 18 + 6 * intensity,
    gravity: 1.1,
    ticks: 120,
    scalar: 0.8,
    origin: { x: (r.left + r.width / 2) / window.innerWidth, y: (r.top + r.height / 2) / window.innerHeight },
    colors: colors(),
    disableForReducedMotion: true,
  });
}

/** Confetti for the big moments only (level-up, daily goal, badge). Kept light. */
export function celebrate(kind: 'goal' | 'levelup') {
  if (reducedMotion()) return;
  const c = colors();
  const fire = (x: number, angle: number) =>
    confetti({ particleCount: 28, angle, spread: 55, startVelocity: 45, origin: { x, y: 0.8 }, colors: c, ticks: 180, scalar: 0.9, disableForReducedMotion: true });
  fire(0, 60);
  fire(1, 120);
  if (kind === 'levelup') {
    setTimeout(() => confetti({ particleCount: 30, spread: 120, startVelocity: 28, origin: { x: 0.5, y: 0.25 }, shapes: ['star'], colors: ['#f5c518', '#ffd95a'], scalar: 1.1, ticks: 220, disableForReducedMotion: true }), 300);
  }
}

// ---- synthesized sounds (Web Audio; no audio files) ----
let ctx: AudioContext | null = null;
function audio(): AudioContext | null {
  if (!soundOn()) return null;
  try {
    ctx ??= new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    if (ctx.state === 'suspended') void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

const VOLUME = 0.5; // overall level: kept low so sounds stay in the background

function tone(freq: number, start: number, dur: number, type: OscillatorType = 'sine', gain = 0.16) {
  gain *= VOLUME;
  const a = audio();
  if (!a) return;
  const t = a.currentTime + start;
  const o = a.createOscillator();
  const g = a.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(gain, t + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(a.destination);
  o.start(t);
  o.stop(t + dur + 0.02);
}

export const sfx = {
  /** Bright two-note chime, a little higher with each combo step. */
  correct(combo = 1) {
    const lift = Math.min(combo - 1, 6) * 0.06;
    tone(880 * (1 + lift), 0, 0.12, 'triangle');
    tone(1320 * (1 + lift), 0.07, 0.22, 'triangle');
  },
  wrong() {
    tone(196, 0, 0.18, 'square', 0.06);
    tone(147, 0.08, 0.26, 'square', 0.05);
  },
  /** Rising arpeggio. */
  complete() {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, i * 0.09, 0.35, 'triangle', 0.14));
  },
  /** Arpeggio + sustained chord. */
  levelUp() {
    [392, 523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, i * 0.08, 0.3, 'triangle', 0.13));
    [523.25, 659.25, 783.99].forEach((f) => tone(f, 0.45, 0.9, 'sine', 0.08));
  },
  tap() {
    tone(1200, 0, 0.05, 'sine', 0.05);
  },
  /** One short tick of the XP counter; pitch rises with progress (0..1). Fast ticks blur into a "drrrr". */
  tick(progress: number) {
    tone(520 + 700 * progress, 0, 0.03, 'square', 0.035);
  },
  /** Bell at the end of the count. */
  ding() {
    tone(1568, 0, 0.5, 'sine', 0.12);
    tone(2093, 0.03, 0.45, 'sine', 0.06);
  },
};

/** Animates a number from 0 (or its previous value) to `target`. */
export function useCountUp(target: number, ms = 900): number {
  const [v, setV] = useState(reducedMotion() ? target : 0);
  const from = useRef(0);
  useEffect(() => {
    if (reducedMotion()) { setV(target); return; }
    const start = performance.now();
    const a = from.current;
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / ms);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(a + (target - a) * eased));
      if (p < 1) raf = requestAnimationFrame(step);
      else from.current = target;
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return v;
}

/** Floating "+N XP" that rises from an element and fades. */
export function floatXp(el: Element | null, text: string) {
  if (reducedMotion() || !el) return;
  const r = el.getBoundingClientRect();
  const n = document.createElement('div');
  n.className = 'float-xp';
  n.textContent = text;
  n.style.left = `${r.left + r.width / 2}px`;
  n.style.top = `${r.top}px`;
  document.body.appendChild(n);
  n.addEventListener('animationend', () => n.remove());
}

// ---- combo: consecutive correct answers across quizzes and practice ----
let comboCount = 0;
export const combo = {
  hit: () => ++comboCount,
  miss: () => { comboCount = 0; },
  get: () => comboCount,
};

/** One call for "the user just answered": sound, confetti, combo text. Returns the combo count. */
export function answerFx(el: Element | null, ok: boolean): number {
  if (!ok) {
    combo.miss();
    sfx.wrong();
    return 0;
  }
  const c = combo.hit();
  sfx.correct(c);
  // Celebrate milestones only (5, 10, 15, ...); a plain correct answer stays quiet.
  if (c >= 5 && c % 5 === 0) {
    burstFrom(el, 1);
    floatXp(el, `${c} COMBO`);
  }
  return c;
}
