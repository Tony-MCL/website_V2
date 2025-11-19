import { Hero } from "../components/Hero";
import { Button } from "../components/Button";
import { Section } from "../components/Section";

export default function HomePage() {
  return (
    <>
      <Hero />

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
            <h3>ManageProgress</h3>
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
        description="Morning Coffee Labs er bygget rundt en enkel idé: digitale verktøy skal føles like ryddige som et godt oppsatt fordeling- eller fremdriftsoppsett."
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
              MCL henvender seg til elektro-, kraft- og tekniske miljøer. Fokus
              er på bruksscenarier som faktisk oppstår på anlegg, i prosjekter
              og i møte med standarder.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-card-title">Moderne teknologi</h3>
            <p className="feature-card-body">
              Nettsiden og appene er bygget på moderne web-teknologi, klar for
              lisenshåndtering, betaling og videre utvidelser når vi tar neste
              steg.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="OM MCL"
        title="Morning Coffee Labs i korte trekk"
        description="Et lite laboratorium for digitale verktøy, startet med et behov for bedre struktur og en forkjærlighet for god kaffe."
      >
        <div className="feature-grid">
          <div className="feature-card">
            <h3 className="feature-card-title">Fra praksis til produkt</h3>
            <p className="feature-card-body">
              Prosjekter i kraftverk, elektro og automasjon har inspirert
              verktøyene. Vi bygger ut fra faktiske behov, ikke hypotetiske
              use-cases.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-card-title">Kaffe + struktur</h3>
            <p className="feature-card-body">
              Navnet Morning Coffee Labs handler om roen før dagen starter:
              få oversikt, strukturere, og så gjennomføre. Det er akkurat det
              verktøyene våre skal bidra til.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-card-title">Nettsiden som nav</h3>
            <p className="feature-card-body">
              Denne nettsiden er hovedportalen for appene, lisenshåndtering og
              fremtidige betalingsløsninger. Versjon 1.0 fokuserer på å presentere
              produktene på en tydelig måte.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
