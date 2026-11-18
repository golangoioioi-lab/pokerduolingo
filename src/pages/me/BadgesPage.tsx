import Page from '../../ui/Page';
import { BADGES, useGame } from '../../services/game';

export default function BadgesPage() {
  const g = useGame();
  const owned = new Set(g.badges);
  const max = Math.max(g.goal, ...g.week.map((d) => d.xp));

  return (
    <Page title="実績" back="/me" backText="マイページ">
      <div className="section">
        <div className="tiles">
          <div className="tile"><span className="tile-num">{g.level}</span><span className="tile-label">レベル</span></div>
          <div className="tile"><span className="tile-num">{g.total}</span><span className="tile-label">合計 XP</span></div>
          <div className="tile"><span className="tile-num">{g.streak}</span><span className="tile-label">連続日数</span></div>
        </div>
        <div className="grid-card">
          <div className="grid-card-head">直近7日の XP</div>
          <div className="week-chart" role="img" aria-label={`直近7日の XP: ${g.week.map((d) => d.xp).join(', ')}`}>
            {g.week.map((d) => (
              <div key={d.day} className="week-col">
                <div className="week-bar">
                  <span className={d.xp >= g.goal ? 'hit' : ''} style={{ height: `${max ? (d.xp / max) * 100 : 0}%` }} />
                  <i style={{ bottom: `${(g.goal / max) * 100}%` }} aria-hidden="true" />
                </div>
                <span className="week-label">{Number(d.day.slice(-2))}</span>
              </div>
            ))}
          </div>
          <p className="grid-card-sub">線は1日の目標（{g.goal} XP）</p>
        </div>
      </div>

      <h2 className="section-title">Badges ・ {owned.size}/{BADGES.length}</h2>
      <div className="badge-grid">
        {BADGES.map((b) => (
          <div key={b.id} className={`badge${owned.has(b.id) ? ' on' : ''}`}>
            <span className="badge-coin" aria-hidden="true">{b.mark}</span>
            <b>{b.title}</b>
            <small>{b.sub}</small>
          </div>
        ))}
      </div>
    </Page>
  );
}
