import { IonIcon } from '@ionic/react';
import { flame, flash } from 'ionicons/icons';
import { useGame } from '../services/game';
import ProgressRing from './ProgressRing';

/** Compact status row: streak · today's XP vs goal · level. */
export default function GameBar() {
  const g = useGame();
  const goalDone = g.today >= g.goal;
  return (
    <div className="gamebar" role="group" aria-label="今日の学習状況">
      <div className={`gb-item${g.aliveToday ? ' lit' : ''}`} title="連続学習日数">
        <IonIcon icon={flame} aria-hidden="true" />
        <b key={`s${g.streak}`}>{g.streak}</b>
        <span>日連続</span>
      </div>
      <div className={`gb-item${goalDone ? ' lit' : ''}`} title="今日の目標">
        <ProgressRing value={Math.min(1, g.today / g.goal)} size={22} stroke={3} />
        <b key={`t${g.today}`}>{g.today}</b>
        <span>/ {g.goal} XP</span>
      </div>
      <div className="gb-item" title="レベル">
        <IonIcon icon={flash} aria-hidden="true" />
        <span>Lv</span>
        <b key={`l${g.level}`}>{g.level}</b>
      </div>
    </div>
  );
}
