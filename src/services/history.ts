import { load, save } from './storage';
import { api, isSignedIn } from './backend';
import type { Action, Freq } from '../domain/poker/ranges';

export interface TrainingRecord {
  t: number; // timestamp
  spot: string;
  hand: string; // class label e.g. "AJo"
  cards: string; // e.g. "AsJd"
  action: Action;
  freq: Freq;
  correct: boolean;
}

const KEY = 'hl.history.v1';
const MAX = 5000;

export function loadHistory(): TrainingRecord[] {
  return load<TrainingRecord[]>(KEY, []);
}

export function addRecord(r: TrainingRecord) {
  const h = loadHistory();
  h.push(r);
  if (h.length > MAX) h.splice(0, h.length - MAX);
  save(KEY, h);
  void syncAttempt(r);
}

/** Best-effort copy to the server when signed in; local history stays the source for the UI. */
async function syncAttempt(r: TrainingRecord) {
  if (!isSignedIn()) return;
  await api('/attempts', { method: 'POST', body: { spot: r.spot, hand: r.hand, action: r.action, correct: r.correct, t: r.t } });
}

export function clearHistory() {
  save(KEY, []);
}
