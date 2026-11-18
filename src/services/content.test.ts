import { describe, expect, it } from 'vitest';
import { COURSES } from '../domain/content/catalog';
import type { LessonBody } from '../domain/content/types';
import { SPOTS } from '../domain/poker/ranges';
import { parseCard } from '../domain/poker/cards';

const free = import.meta.glob<{ default: LessonBody }>('../domain/content/lessons/free/*.ts', { eager: true });
const pro = import.meta.glob<{ default: LessonBody }>('../domain/content/lessons/pro/*.ts', { eager: true });
const bodies = [...Object.values(free), ...Object.values(pro)].map((m) => m.default);

describe('content catalog', () => {
  const metas = COURSES.flatMap((c) => c.lessons);

  it('starts with the beginner course and has unique ids', () => {
    expect(COURSES[0].level).toBe('初心者');
    expect(new Set(COURSES.map((c) => c.id)).size).toBe(COURSES.length);
    expect(new Set(metas.map((m) => m.id)).size).toBe(metas.length);
  });

  it('every lesson has a body in the folder matching its tier', () => {
    for (const m of metas) {
      const body = (m.tier === 'free' ? free : pro)[`../domain/content/lessons/${m.tier}/${m.id}.ts`];
      expect(body, m.id).toBeTruthy();
      expect(body.default.id).toBe(m.id);
      expect(body.default.blocks.length, m.id).toBeGreaterThan(2);
    }
  });

  it('no orphan lesson files', () => {
    expect(bodies.length).toBe(metas.length);
  });

  it('every course has at least one free lesson to try', () => {
    for (const c of COURSES) expect(c.lessons.some((l) => l.tier === 'free'), c.id).toBe(true);
  });
});

describe('lesson blocks are well-formed', () => {
  const spotIds = new Set(SPOTS.map((s) => s.id));

  it('quiz answers point at a real option', () => {
    for (const body of bodies)
      for (const b of body.blocks)
        if (b.t === 'quiz') {
          expect(b.options.length, body.id).toBeGreaterThanOrEqual(2);
          expect(Number.isInteger(b.answer) && b.answer >= 0 && b.answer < b.options.length, `${body.id}: ${b.q}`).toBe(true);
        }
  });

  it('card strings are valid and never repeated within one picture', () => {
    for (const body of bodies)
      for (const b of body.blocks) {
        if (b.t !== 'cards') continue;
        const all = [...b.hands.flatMap((h) => h.cards), ...(b.board ?? [])];
        for (const c of all) expect(parseCard(c), `${body.id}: bad card "${c}"`).not.toBeNull();
        expect(new Set(all).size, `${body.id}: duplicate card in ${all.join(' ')}`).toBe(all.length);
        if (b.board) expect(b.board.length, `${body.id}: board size`).toBeLessThanOrEqual(5);
      }
  });

  it('range blocks reference existing spots', () => {
    for (const body of bodies)
      for (const b of body.blocks) if (b.t === 'range') expect(spotIds.has(b.spot), `${body.id}: ${b.spot}`).toBe(true);
  });

  it('table rows match the header width', () => {
    for (const body of bodies)
      for (const b of body.blocks)
        if (b.t === 'table') for (const r of b.rows) expect(r.length, `${body.id}: ${r.join('|')}`).toBe(b.head.length);
  });

  it('try links point at a real tab', () => {
    for (const body of bodies)
      for (const b of body.blocks) if (b.t === 'try') expect(['train', 'ranges', 'equity']).toContain(b.tab);
  });
});

describe('diagram blocks', () => {
  it('every diagram block is valid', async () => {
    const { validateDiagram } = await import('../domain/content/diagrams');
    const problems = bodies.flatMap((body) => body.blocks.flatMap((b) => validateDiagram(b).map((m) => `${body.id}: ${m}`)));
    expect(problems).toEqual([]);
  });
});
