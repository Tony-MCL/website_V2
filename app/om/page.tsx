import { Section } from "../../components/Section";

export default function OmPage() {
  return (
    <>
      <Section
        eyebrow="OM MCL"
        title="Morning Coffee Labs · filosofi og retning"
        description="MCL er et lite laboratorium for digitale verktøy – med fokus på elektro, kraft og tekniske fag. Nettsiden du ser nå er versjon 1.0 av hovednavet."
      >
        <div className="about-grid">
          <div>
            <h1 className="page-heading">Hvorfor Morning Coffee Labs?</h1>
            <p className="page-intro">
              Mange fagverktøy er enten for tunge, for generelle eller for lite
              tilpasset hvordan arbeid faktisk utføres. Morning Coffee Labs
              ble til som en respons på dette – med et ønske om verktøy som
              både føles profesjonelle og menneskelige.
            </p>

            <ul className="about-list">
              <li>
                <strong>Kaffe + struktur:</strong> Navnet handler om den rolige
                morgenstunden – der man får oversikt, legger en plan og så
                gjennomfører. MCL-verktøyene skal gi den samme følelsen.
              </li>
              <li>
                <strong>Fag før pynt:</strong> Vi bygger først og fremst for
                elektro, kraft og tekniske fag. Designet er rolig, moderne og
                uten unødvendig støy.
              </li>
              <li>
                <strong>Små, målrettede apper:</strong> Hver app har et tydelig
                formål. Formelsamlingen handler om beregninger. ManageProgress
                handler om fremdrift. Ingen alt-i-ett-løsninger.
              </li>
            </ul>
          </div>

          <div className="surface surface--soft">
            <div className="surface-inner">
              <p className="section-eyebrow">HVEM LAGER VI FOR?</p>
              <p className="section-description">
                Verktøyene er bygget for fagfolk som liker system, men ikke vil
                bruke halve dagen på å lære et verktøy.
              </p>

              <ul className="about-list">
                <li>Elektro- og kraftingeniører.</li>
                <li>Prosjektledere i tekniske prosjekter.</li>
                <li>Teknikere og montører som jobber ute på anlegg.</li>
                <li>
                  Fagmiljøer som ønsker struktur rundt dokumentasjon, formelsamling
                  og fremdrift – uten store systemer.
                </li>
              </ul>

              <p className="section-description" style={{ marginTop: "1.2rem" }}>
                Vi jobber iterativt, i små steg. Først nettside, så formelsamling,
                så fremdrift – og videre derfra. Denne siden er ment å være
                stabilt fundament vi kan bygge videre på.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
