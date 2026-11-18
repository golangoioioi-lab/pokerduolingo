import { describe, expect, it } from 'vitest';
import { mergeDone } from './sync';

describe('progress merge', () => {
  it('keeps the union and uploads only what the server lacks', () => {
    const { merged, toUpload } = mergeDone(['a', 'b', 'c'], ['b', 'd']);
    expect(merged.sort()).toEqual(['a', 'b', 'c', 'd']);
    expect(toUpload.sort()).toEqual(['a', 'c']);
  });
  it('first sign-in on a fresh device pulls everything', () => {
    expect(mergeDone([], ['x', 'y'])).toEqual({ merged: ['x', 'y'], toUpload: [] });
  });
});
