import PlayingCard from './PlayingCard';
import { POSITIONS, type Position, type Spot } from '../domain/poker/ranges';
import type { Card } from '../domain/poker/cards';

interface Props {
  spot: Spot;
  heroCards: [Card, Card];
}

export default function PokerTable({ spot, heroCards }: Props) {
  const heroIdx = POSITIONS.indexOf(spot.hero);
  const openerIdx = spot.opener ? POSITIONS.indexOf(spot.opener) : -1;

  const state = (p: Position, i: number): { label: string; cls: string; bet?: string } => {
    if (p === spot.hero) return { label: 'あなた', cls: 'hero', bet: p === 'SB' ? '0.5' : p === 'BB' ? '1' : undefined };
    if (i === openerIdx) return { label: 'レイズ', cls: 'opener', bet: '2.5' };
    // Seats that acted before hero (in preflop order) and are not the opener folded.
    const acted = i < heroIdx;
    const blind = p === 'SB' ? '0.5' : p === 'BB' ? '1' : undefined;
    if (acted) return { label: 'フォールド', cls: 'folded', bet: blind };
    return { label: '', cls: 'waiting', bet: blind };
  };

  return (
    <div className="table-wrap">
      <div className="felt">
        <div className="pot">
          ポット {(1.5 + (openerIdx >= 0 ? 2.5 - (spot.opener === 'SB' ? 0.5 : 0) : 0)).toFixed(1)}bb
        </div>
        {POSITIONS.map((p, i) => {
          const angle = ((90 + 60 * (i - heroIdx)) * Math.PI) / 180;
          const x = 50 + 44 * Math.cos(angle);
          const y = 50 + 42 * Math.sin(angle);
          // Hero's chip sits beside the seat so it isn't hidden by the hole cards.
          const isHero = p === spot.hero;
          const bx = isHero ? x + 12 : 50 + 26 * Math.cos(angle);
          const by = isHero ? y : 50 + 24 * Math.sin(angle);
          const s = state(p, i);
          return (
            <div key={p}>
              <div className={`seat ${s.cls}`} style={{ left: `${x}%`, top: `${y}%` }}>
                <div className="seat-pos">
                  {p}
                  {p === 'BTN' && <span className="dealer">D</span>}
                </div>
                {s.label && <div className="seat-state">{s.label}</div>}
              </div>
              {s.bet && (
                <div className="bet" style={{ left: `${bx}%`, top: `${by}%` }}>
                  {s.bet}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="hero-cards">
        <PlayingCard card={heroCards[0]} size="lg" />
        <PlayingCard card={heroCards[1]} size="lg" />
      </div>
    </div>
  );
}
