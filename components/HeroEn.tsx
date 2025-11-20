import { Button } from "./Button";

export function HeroEn() {
  return (
    <section className="section">
      <div className="container hero">
        <div>
          <p className="section-eyebrow">MORNING COFFEE LABS</p>
          <h1 className="hero-heading">Digital tools for professionals</h1>
          <p className="hero-subheading">
            This is where focused, tidy tools for technical work are built – with
            just as much love for structure as for coffee.
          </p>

          <div className="hero-badges">
            <span className="hero-badge">Formula library · coming before Christmas</span>
            <span className="hero-badge">
              Manage Progress · launching in January
            </span>
            <span className="hero-badge">More small tools on the way</span>
          </div>

          <div className="hero-actions">
            <Button href="/en/produkter" variant="primary">
              See the tools
            </Button>
            <Button href="/en/om" variant="secondary">
              Read more about MCL
            </Button>
          </div>

          <p className="hero-secondary-text">
            No accounts, no noise – just tools that help you get the work done
            properly.
          </p>
        </div>

        <div className="hero-visual">
          <div className="hero-panel">
            <div className="hero-panel-header">
              <span className="hero-panel-title">
                MCL · Workspace in dark mocha
              </span>
              <div className="hero-panel-dot-row">
                <div className="hero-panel-dot" />
                <div className="hero-panel-dot" />
                <div className="hero-panel-dot" />
              </div>
            </div>

            <div className="hero-panel-grid">
              <div className="hero-metric-card">
                <div className="hero-metric-label">Formula library</div>
                <div className="hero-metric-value">Electrical &amp; more · v1.0</div>
                <div className="hero-metric-sub">
                  Clear, mobile-friendly formulas built for real projects – not
                  just textbooks.
                </div>
              </div>
              <div className="hero-metric-card">
                <div className="hero-metric-label">Planning</div>
                <div className="hero-metric-value">Manage Progress</div>
                <div className="hero-metric-sub">
                  Lightweight planning with focus on clarity, not enterprise
                  project-management overload.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
