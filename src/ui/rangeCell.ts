import type { CellStyle } from './HandGrid';
import { foldFreq, type Freq } from '../domain/poker/ranges';
import { ACTION_COLORS } from './Legend';

export function rangeCell(f: Freq | undefined): CellStyle {
  if (!f) return { segments: [] };
  return {
    segments: [
      { color: ACTION_COLORS.raise, frac: f.raise },
      { color: ACTION_COLORS.call, frac: f.call },
      { color: ACTION_COLORS.fold, frac: foldFreq(f) },
    ],
  };
}

export function weightCell(w: number | undefined, color = 'var(--ion-color-primary)'): CellStyle {
  return { segments: w ? [{ color, frac: w }] : [] };
}
