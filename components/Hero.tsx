import { Button } from "./Button";

export function Hero() {
  return (
    <section className="section">
      <div className="container hero">
        <div>
          <p className="section-eyebrow">MORNING COFFEE LABS</p>
          <h1 className="hero-heading">Digitale verktøy for fagfolk</h1>
          <p className="hero-subheading">
            Vi bygger fokuserte, ryddige verktøy for elektro, kraft og andre
            tekniske fag – med like mye kjærlighet til struktur som til kaffe.
          </p>

          <div className="hero-badges">
            <span className="hero-badge">Formelsamling · kommer før jul</span>
            <span className="hero-badge">
              ManageProgress · lanseres i januar
            </span>
            <span className="hero-badge">Flere nisje-apper på vei</span>
          </div>

          <div className="hero-actions">
            <Button href="/produkter" variant="primary">
              Se appene
            </Button>
            <Button href="/om" variant="secondary">
              Følg utviklingen
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
                  Elektro &amp; kraft · v1.0
                </div>
                <div className="hero-metric-sub">
                  Fokus på NEK 400, praktiske beregninger og ren visning.
                </div>
              </div>
              <div className="hero-metric-card">
                <div className="hero-metric-label">Fremdrift</div>
                <div className="hero-metric-value">ManageProgress</div>
                <div className="hero-metric-sub">
                  Gantt-inspirert oversikt uten prosjektstyrings-overkill.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
