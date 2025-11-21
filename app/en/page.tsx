import Link from "next/link";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";

export default function HomePageEn() {
  return (
    <>
      <section className="section">
        <div className="container hero">
          <div>
            <p className="section-eyebrow">MORNING COFFEE LABS</p>
            <h1 className="hero-heading">Digital tools for professionals</h1>
            <p className="hero-subheading">
              This is where focused, tidy digital tools are built – first to make
              my own work easier, and increasingly to simplify everyday work
              for many others.
            </p>

            <div className="hero-badges">
              <Link
                href="/en/produkter/formelsamling"
                className="hero-badge hero-badge-link"
              >
                Formula collection · coming before Christmas
              </Link>

              <Link
                href="/en/produkter/progress"
                className="hero-badge hero-badge-link"
              >
                Manage Progress · launching in January
              </Link>

              <Link
                href="/en/produkter"
                className="hero-badge hero-badge-link"
              >
                More small tools on the way
              </Link>
            </div>

            <p className="hero-secondary-text">
              Challenges → Ideas → Solutions is more than a slogan – it is the
              driving force behind Morning Coffee Labs.
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
                  <div className="hero-metric-label">Formula collection</div>
                  <div className="hero-metric-value">
                    Electrical &amp; power · v1.0
                  </div>
                  <div className="hero-metric-sub">
                    Focused on practical calculations and a clean presentation.
                  </div>
                </div>
                <div className="hero-metric-card">
                  <div className="hero-metric-label">Progress</div>
                  <div className="hero-metric-value">Manage Progress</div>
                  <div className="hero-metric-sub">
                    Gantt-inspired overview without project-management overkill.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="produkter"
        eyebrow="TOOLS"
        title="Tools that are small in scope, big in impact"
        description="Morning Coffee Labs builds small, precise tools. Each app has a clear purpose – and a shared interface philosophy across platforms."
      >
        <div className="card-grid">
          <article className="card">
            <h3>Digital formula collection</h3>
            <p>
              A focused, mobile-friendly formula collection for electrical and
              power engineering. Categories, clear structure and direct use in
              field work and projects.
            </p>
            <div className="card-footer">
              <span className="card-tag">Coming before Christmas</span>
              <Button href="/en/produkter/formelsamling" variant="ghost">
                Read more →
              </Button>
            </div>
          </article>

          <article className="card">
            <h3>Manage Progress</h3>
            <p>
              A lightweight progress planner, inspired by Gantt – but designed
              for real-world projects, not just project offices.
            </p>
            <div className="card-footer">
              <span className="card-tag">Launching in January</span>
              <Button href="/en/produkter/progress" variant="ghost">
                Read more →
              </Button>
            </div>
          </article>

          <article className="card">
            <h3>More apps coming</h3>
            <p>
              We have a growing idea bank for tools around inspection, logging,
              documentation and structure. This site will be the hub.
            </p>
            <div className="card-footer">
              <span className="card-tag">In planning</span>
              <span className="text-muted">
                Check back for new releases.
              </span>
            </div>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="WHAT MAKES US DIFFERENT?"
        title="Coffee, craft and structure – in the same cup"
        description="Morning Coffee Labs is built on a simple idea: digital tools should feel as tidy as a well-structured panel or progress plan."
      >
        <div className="feature-grid">
          <div className="feature-card">
            <h3 className="feature-card-title">Clear interfaces</h3>
            <p className="feature-card-body">
              We prioritise overview: clear sections, consistent buttons and a
              calm coffee-inspired palette – not flashing dashboards.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-card-title">Built from practice</h3>
            <p className="feature-card-body">
              The tools are inspired by real project needs – not hypothetical
              scenarios.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-card-title">Modern technology</h3>
            <p className="feature-card-body">
              The site and apps are built on modern web tech, ready for license
              handling, payments and further extensions.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
