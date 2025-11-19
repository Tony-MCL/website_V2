import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

export default function ProdukterPage() {
  return (
    <>
      <Section
        eyebrow="PRODUKTER"
        title="Verktøyene i Morning Coffee Labs"
        description="Morning Coffee Labs bygger små, fokuserte verktøy som skal være enkle å ta i bruk og enkle å stole på. Her finner du en nærmere beskrivelse av de første verktøyene – og et gløtt på det som kommer videre."
      >
        <p className="page-intro">
          Felles for alle verktøyene er samme filosofi: tydelig struktur, rolig
          grensesnitt og funksjon først. Du skal slippe tunge systemer og
          unødvendig støy – verktøyene skal hjelpe deg å komme videre, ikke
          bremse deg.
        </p>
      </Section>

      {/* Digital formelsamling */}
      <Section
        eyebrow="DIGITAL FORMELSAMLING"
        title="Formler for fagfolk – klar, ryddig og mobilvennlig"
      >
        <div className="product-layout">
          <article>
            <h3 className="page-heading">Digital formelsamling</h3>
            <p className="page-intro">
              Den digitale formelsamlingen er bygget for praktisk bruk i
              prosjekter, på anlegg og i hverdagen. I stedet for å lete i
              PDF-er, bøker eller usikre kilder, får du en ryddig, strukturert
              oversikt med fokus på virkelige beregninger.
            </p>
            <ul className="simple-list">
              <li>
                Kategorier og struktur som gjenspeiler hvordan du faktisk jobber.
              </li>
              <li>
                Fokus på forståelige visninger fremfor ren teori og symbolkaos.
              </li>
              <li>
                Bygget for mobil og PC – like nyttig på kontoret som i felt.
              </li>
            </ul>
            <div style={{ marginTop: "1.2rem" }}>
              <Button href="/kontakt" variant="primary">
                Meld interesse
              </Button>
            </div>
          </article>

          <div className="product-meta-grid">
            <div className="product-meta-item">
              <div className="product-meta-label">Status</div>
              <div className="product-meta-value">Under utvikling</div>
            </div>
            <div className="product-meta-item">
              <div className="product-meta-label">Planlagt lansering</div>
              <div className="product-meta-value">Før jul</div>
            </div>
            <div className="product-meta-item">
              <div className="product-meta-label">Plattformer</div>
              <div className="product-meta-value">Nettleser (PC og mobil)</div>
            </div>
            <div className="product-meta-item">
              <div className="product-meta-label">Typiske brukere</div>
              <div className="product-meta-value">
                Fagfolk, prosjektingeniører, montører og studenter.
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Manage Progress */}
      <Section
        eyebrow="PLANLEGGING & FREMDRIFT"
        title="Manage Progress – oversikt uten prosjektstyrings-overkill"
      >
        <div className="product-layout">
          <article>
            <h3 className="page-heading">Manage Progress</h3>
            <p className="page-intro">
              Manage Progress er et lettvekts planleggingsverktøy inspirert av
              Gantt-diagrammer, men bygget for faktisk, daglig bruk. Målet er å
              gi deg en tydelig tidslinje og kontroll på milepæler uten at du
              må inn i et stort prosjektverktøy.
            </p>
            <ul className="simple-list">
              <li>
                Fokus på det viktigste: oppgaver, avhengigheter og fremdrift.
              </li>
              <li>
                Designet for små og mellomstore prosjekter – uavhengig av
                bransje.
              </li>
              <li>
                Samme rolig MCL-grensesnitt som resten av verktøyene.
              </li>
            </ul>
            <div style={{ marginTop: "1.2rem" }}>
              <Button href="/kontakt" variant="secondary">
                Få beskjed ved lansering
              </Button>
            </div>
          </article>

          <div className="product-meta-grid">
            <div className="product-meta-item">
              <div className="product-meta-label">Status</div>
              <div className="product-meta-value">I design og prototyping</div>
            </div>
            <div className="product-meta-item">
              <div className="product-meta-label">Planlagt lansering</div>
              <div className="product-meta-value">Tidlig på nyåret</div>
            </div>
            <div className="product-meta-item">
              <div className="product-meta-label">Bruksområde</div>
              <div className="product-meta-value">
                Planlegging, fremdriftsstyring og oversikt – på tvers av fag og
                bransjer.
              </div>
            </div>
            <div className="product-meta-item">
              <div className="product-meta-label">Tilpasning</div>
              <div className="product-meta-value">
                Kan tilpasses ulike fagmiljøer gjennom struktur, ikke kompleksitet.
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Fremtidige verktøy */}
      <Section
        eyebrow="VIDERE PLANER"
        title="Et lite laboratorium for flere verktøy"
        description="Morning Coffee Labs er ikke én app, men et lite laboratorium for idéer. Noen blir til produkter, andre blir interne verktøy – alle har samme mål: å gjøre arbeidshverdagen mer oversiktlig."
      >
        <ul className="simple-list">
          <li>
            Verktøy for inspeksjon, logging og struktur rundt tekniske anlegg.
          </li>
          <li>
            Små, fokuserte løsninger som binder sammen informasjon og praksis.
          </li>
          <li>
            Felles visuell og funksjonell standard på tvers av alle verktøy.
          </li>
        </ul>
        <div style={{ marginTop: "1.2rem" }}>
          <p className="text-muted" style={{ marginBottom: "0.6rem" }}>
            Har du et konkret behov eller en idé til et verktøy du savner? Ta
            gjerne kontakt – mange gode løsninger starter med én enkel
            utfordring.
          </p>
          <Button href="/kontakt" variant="primary">
            Ta kontakt
          </Button>
        </div>
      </Section>
    </>
  );
}
