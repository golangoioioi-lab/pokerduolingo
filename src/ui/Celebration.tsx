import { useEffect, useState } from 'react';
import { IonIcon } from '@ionic/react';
import { flame, ribbon } from 'ionicons/icons';
import { levelOf, type AwardResult, type GameState } from '../services/game';
import { celebrate, reducedMotion, sfx } from './fx';

interface Props {
  title: string;
  reward: AwardResult;
  game: GameState;
  correct: number;
  total: number;
}

const RING = 200;
const STROKE = 12;
const R = (RING - STROKE) / 2;
const C = 2 * Math.PI * R;

/**
 * Counts XP into the level ring: starts slow and speeds up (ease-in), one tick sound per XP,
 * wraps around on a level-up, and ends with a bell.
 */
function useXpFill(from: number, gain: number, onLevelUp: () => void) {
  const [xp, setXp] = useState(reducedMotion() ? from + gain : from);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (reducedMotion() || gain <= 0) { setXp(from + gain); return; }

    const duration = Math.min(2200, Math.max(1100, 700 + gain * 35));
    const tickEvery = Math.max(1, Math.ceil(gain / 40)); // cap at ~40 ticks
    const startLevel = levelOf(from).level;
    let lastShown = from;
    let lastLevel = startLevel;
    let raf = 0;
    const t0 = performance.now() + 250; // a short beat before it starts

    const step = (now: number) => {
      const p = Math.min(1, Math.max(0, (now - t0) / duration));
      const eased = Math.pow(p, 2.4); // slow → fast
      const v = Math.round(from + gain * eased);
      if (v !== lastShown) {
        if ((v - from) % tickEvery === 0) sfx.tick(eased);
        const lv = levelOf(v).level;
        if (lv > lastLevel) {
          lastLevel = lv;
          setFlash(true);
          setTimeout(() => setFlash(false), 600);
          onLevelUp();
        }
        lastShown = v;
        setXp(v);
      }
      if (p < 1) raf = requestAnimationFrame(step);
      else sfx.ding();
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { xp, flash };
}

/** End-of-lesson screen: XP rolling into the level ring, accuracy, streak, new badges. */
export default function Celebration({ title, reward, game, correct, total }: Props) {
  const acc = total ? Math.round((correct / total) * 100) : null;
  const startXp = game.total - reward.xp;
  const [leveled, setLeveled] = useState(false);

  const { xp, flash } = useXpFill(startXp, reward.xp, () => {
    setLeveled(true);
    sfx.levelUp();
    celebrate('levelup');
  });
  const lv = levelOf(xp);
  const done = xp >= game.total;

  useEffect(() => {
    if (done && reward.goalReached && !reward.levelUp) celebrate('goal');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const headline = leveled ? `レベル ${lv.level} に到達`
    : done && reward.goalReached ? '今日の目標を達成'
    : acc === 100 ? 'ノーミスで完了'
    : 'レッスン完了';
  const frac = lv.span ? lv.into / lv.span : 0;

  return (
    <div className={`celebrate${leveled ? ' levelup' : ''}`}>
      <p className="cel-eyebrow">{title}</p>
      <h2 className="cel-title" key={headline}>{headline}</h2>

      <div className={`xp-ring${flash ? ' flash' : ''}`} role="img"
        aria-label={`${reward.xp} XP 獲得。レベル ${levelOf(game.total).level}、次のレベルまで ${levelOf(game.total).span - levelOf(game.total).into} XP`}>
        <svg width={RING} height={RING} viewBox={`0 0 ${RING} ${RING}`} aria-hidden="true">
          <circle className="xp-track" cx={RING / 2} cy={RING / 2} r={R} fill="none" strokeWidth={STROKE} />
          <circle
            className="xp-fill" cx={RING / 2} cy={RING / 2} r={R} fill="none" strokeWidth={STROKE} strokeLinecap="round"
            strokeDasharray={`${C * frac} ${C}`} transform={`rotate(-90 ${RING / 2} ${RING / 2})`}
          />
        </svg>
        <div className="xp-center">
          <span className="xp-gain">+{xp - startXp}<small>XP</small></span>
          <span className="xp-level" key={lv.level}>Lv {lv.level}</span>
        </div>
      </div>
      <p className="xp-next">次のレベルまで あと <b>{lv.span - lv.into}</b> XP</p>

      <div className="cel-stats">
        <div className="cel-stat" style={{ ['--d' as string]: '0.2s' }}>
          <b>{acc === null ? '—' : `${acc}%`}</b>
          <span>正答率</span>
        </div>
        <div className="cel-stat" style={{ ['--d' as string]: '0.3s' }}>
          <b className="cel-flame"><IonIcon icon={flame} aria-hidden="true" />{game.streak}</b>
          <span>日連続</span>
        </div>
        <div className="cel-stat" style={{ ['--d' as string]: '0.4s' }}>
          <b>{game.today}<small>/{game.goal}</small></b>
          <span>今日の XP</span>
        </div>
      </div>

      {reward.newBadges.length > 0 && done && (
        <div className="cel-badges">
          {reward.newBadges.map((b, i) => (
            <div key={b.id} className="cel-badge" style={{ ['--d' as string]: `${0.1 + i * 0.12}s` }}>
              <span className="badge-mark"><IonIcon icon={ribbon} aria-hidden="true" /></span>
              <span><b>実績を獲得：{b.title}</b><small>{b.sub}</small></span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
