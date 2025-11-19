import { Button } from "./Button";

export function Hero() {
  return (
    <section className="section">
      <div className="container hero">
        <div>
          <p className="section-eyebrow">MORNING COFFEE LABS</p>
          <h1 className="hero-heading">Digitale verktøy for fagfolk</h1>
          <p className="hero-subheading">
            Her bygges fokuserte, ryddige verktøy for tekniske fag – med like
            mye kjærlighet til struktur som til kaffe.
          </p>

          <div className="hero-badges">
            <span className="hero-badge">Formelsamling · kommer før jul</span>
            <span className="hero-badge">
              Manage Progress · lanseres i januar
            </span>
            <span className="hero-badge">Flere små-verktøy på vei</span>
          </div>

          <div className="hero-actions">
            <Button href="/produkter" variant="primary">
              Se verktøyene
            </Button>
            <Button href="/om" variant="secondary">
              Les mer om MCL
            </Button>
          </div>

          <p className="hero-secondary-text">
            Ingen kontoer, ingen støy – bare verktøy som hjelper deg å gjøre
            jobben skikkelig.
          </p>
        </div>

        <div className="hero-visual">
          <div className="hero-panel">
            <div className="hero-panel-header">
              <span className="hero-panel-title">
                MCL · Arbeidsflate i mørk mokka
              </span>
              <div className="hero-panel-dot-row">
                <div className="hero-panel-dot" />
                <div className="hero-panel-dot" />
                <div className="hero-panel-dot" />
              </div>
            </div>

            <div className="hero-panel-grid">
              <div className="hero-metric-card">
                <div className="hero-metric-label">Formelsamling</div>
                <div className="hero-metric-value">
                  Elektro &amp; mer · v1.0
                </div>
                <div className="hero-metric-sub">
                  Klar, mobilvennlig formelsamling bygget for virkelige
                  prosjekter – ikke bare teoribøker.
                </div>
              </div>
              <div className="hero-metric-card">
                <div className="hero-metric-label">Planlegging</div>
                <div className="hero-metric-value">Manage Progress</div>
                <div className="hero-metric-sub">
                  Lettvekts planleggingsverktøy med fokus på oversikt, ikke
                  prosjektstyrings-overkill.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
