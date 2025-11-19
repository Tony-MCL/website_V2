import { Hero } from "../components/Hero";
import { Button } from "../components/Button";
import { Section } from "../components/Section";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="KORT OM MCL"
        title="Et digitalt verksted bygget på idéer, struktur og kaffe"
      >
        <p className="page-intro">
          Morning Coffee Labs er et lite digitalt verksted skapt over
          morgenkaffen – først for å gjøre mitt eget arbeid enklere, og etter
          hvert for å gjøre hverdagen bedre også for andre. Det som startet som
          et personlig hobbyprosjekt, er nå på vei til å bli et
          enkeltmannsforetak med tydelige, kommersielle ambisjoner.
        </p>
        <p className="page-intro">
          Jeg tror på et enkelt prinsipp: <strong>Challenges → Ideas → Solutions</strong>.
          Utfordringer er ikke problemer – de er starten på alt som kan
          forbedres. Med erfaring fra prosjekter, tekniske miljøer og praktiske
          behov bygger jeg verktøy som gjør hverdagen litt ryddigere, litt mer
          oversiktlig og mye mer effektiv.
        </p>
      </Section>

      <Section
        eyebrow="VERKTØYENE"
        title="En liten sniktitt på det vi bygger"
        description="De første verktøyene i Morning Coffee Labs-familien er allerede under utvikling. Her er en kort smakebit – mer detaljer finner du på produktsidene."
      >
        <div className="card-grid">
          <article className="card">
            <h3>Digital formelsamling</h3>
            <p>
              En klar og mobilvennlig formelsamling for fagfolk, bygget for
              virkelige prosjekter – ikke bare teoribøker.
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
              Et lettvekts planleggingsverktøy som gir oversikt uten støy,
              inspirert av Gantt men tilpasset faktiske arbeidsflyter – uavhengig
              av bransje.
            </p>
            <div className="card-footer">
              <span className="card-tag">Lanseres i januar</span>
              <Button href="/produkter/progress" variant="ghost">
                Les mer →
              </Button>
            </div>
          </article>
        </div>

        <div style={{ marginTop: "1.3rem" }}>
          <p className="text-muted" style={{ marginBottom: "0.6rem" }}>
            Flere små-verktøy er på vei. Morning Coffee Labs er et laboratorium
            – nye idéer testes fortløpende, og løsninger formes av faktiske
            behov.
          </p>
          <Button href="/produkter" variant="secondary">
            Se alle verktøyene
          </Button>
        </div>
      </Section>
    </>
  );
}
