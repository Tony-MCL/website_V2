import Link from "next/link";
import { Button } from "../components/Button";
import { Section } from "../components/Section";

export default function HomePage() {
  return (
    <>
      <section className="section">
        <div className="container hero">
          <div>
            <p className="section-eyebrow">MORNING COFFEE LABS</p>
            <h1 className="hero-heading">Digitale verktøy for fagfolk</h1>
            <p className="hero-subheading">
              Her bygges fokuserte, ryddige digitale verktøy – først for å gjøre eget arbeid enklere, og etter hvert for å gjøre hverdagen enklere for mange flere.
            </p>

            <div className="hero-badges">
              <Link href="/produkter/formelsamling" className="hero-badge hero-badge-link">
                Formelsamling · kommer før jul
              </Link>

              <Link href="/produkter/progress" className="hero-badge hero-badge-link">
                Manage Progress · lanseres i januar
              </Link>

              <Link href="/produkter" className="hero-badge hero-badge-link">
                Flere små-verktøy på vei
              </Link>
            </div>

            <p className="hero-secondary-text">
              Challenges → Ideas → Solutions er mer enn et slagord – det er selve drivkraften bak Morning Coffee Labs.
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
                  <div className="hero-metric-value">Manage Progress</div>
                  <div className="hero-metric-sub">
                    Gantt-inspirert oversikt uten prosjektstyrings-overkill.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resten av siden forblir uendret */}
      <Section
        id="produkter"
        eyebrow="PRODUKTER"
        title="Verktøy som er små i omfang, men store i nytte"
        description="Morning Coffee Labs bygger små, presise verktøy. Hver app har et tydelig formål – og en grensesnittfilosofi som går igjen på tvers av plattformene."
      >
        <div className="card-grid">
          <article className="card">
            <h3>Digital formelsamling</h3>
            <p>
              En fokusert, mobilvennlig formelsamling for elektro og kraft.
              Kategorier, ryddig struktur og direkte bruk i felt og prosjekter.
            </p>
            <div className="card-footer">
              <span className="card-tag">Kommer før jul</span>
              <Button href="/produkter/formelsamling" variant="ghost">
                Les mer →
              </Button>
            </div>
          </article>

          <article className="card">
            <h3>Manage Progress</h3>
            <p>
              En lettvekts fremdriftsplan, inspirert av Gantt – men designet for
              faktiske prosjekter i elektro og kraft, ikke bare prosjektkontor.
            </p>
            <div className="card-footer">
              <span className="card-tag">Lanseres i januar</span>
              <Button href="/produkter/progress" variant="ghost">
                Les mer →
              </Button>
            </div>
          </article>

          <article className="card">
            <h3>Flere apper kommer</h3>
            <p>
              Vi har en voksende idébank for verktøy rundt inspeksjon, logging,
              dokumentasjon og struktur. Nettsiden blir navet for alt.
            </p>
            <div className="card-footer">
              <span className="card-tag">Under planlegging</span>
              <span className="text-muted">
                Følg med på siden for nye lanseringer.
              </span>
            </div>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="HVA GJØR OSS ANNERLEDES?"
        title="Kaffe, fag og struktur – i samme kopp"
        description="Morning Coffee Labs er bygget rundt en enkel idé: digitale verktøy skal føles like ryddige som et godt oppsatt fordelings- eller fremdriftsoppsett."
      >
        <div className="feature-grid">
          <div className="feature-card">
            <h3 className="feature-card-title">Ryddige grensesnitt</h3>
            <p className="feature-card-body">
              Vi prioriterer oversikt: tydelige seksjoner, konsistente knapper
              og en rolig fargepalett inspirert av kaffe – ikke blinkende
              dashbord.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-card-title">Bygget for fagfolk</h3>
            <p className="feature-card-body">
              Verktøyene er inspirert av faktiske behov i prosjekter – ikke
              hypotetiske scenarier.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-card-title">Moderne teknologi</h3>
            <p className="feature-card-body">
              Nettsiden og appene er bygget på moderne web-teknologi, klar for
              lisenshåndtering, betaling og videre utvidelser.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
