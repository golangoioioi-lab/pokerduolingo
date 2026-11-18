import { spotById, type RangeMap } from '../domain/poker/ranges';
import { load, save } from './storage';

const KEY = 'hl.customRanges.v1';

export function loadCustomRanges(): Record<string, RangeMap> {
  return load<Record<string, RangeMap>>(KEY, {});
}

/** The range used for a spot: the user's edit if any, else the default. */
export function getSpotRange(id: string): RangeMap {
  return loadCustomRanges()[id] ?? spotById(id).defaultRange;
}

export function isCustomized(id: string): boolean {
  return id in loadCustomRanges();
}

export function saveSpotRange(id: string, range: RangeMap | null) {
  const all = loadCustomRanges();
  if (range) all[id] = range;
  else delete all[id];
  save(KEY, all);
}
