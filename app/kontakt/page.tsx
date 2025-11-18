import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

export default function KontaktPage() {
  return (
    <>
      <Section
        eyebrow="KONTAKT"
        title="Ta kontakt med Morning Coffee Labs"
        description="Har du spørsmål, innspill eller ønsker om tilpassede verktøy? Bruk skjemaet eller send en e-post."
      >
        <div className="product-layout">
          <div>
            <h1 className="page-heading">Vi hører gjerne fra deg</h1>
            <p className="page-intro">
              Enten du er i et kraftverk, på et rådgivningskontor eller ute på
              anlegg – vi er interessert i behov, idéer og tilbakemeldinger
              rundt verktøyene våre.
            </p>

            <form
              className="contact-form"
              action="mailto:kontakt@placeholder.mcl"
              method="post"
              encType="text/plain"
            >
              <div className="field-group">
                <label htmlFor="navn" className="field-label">
                  Navn
                </label>
                <input
                  id="navn"
                  name="Navn"
                  type="text"
                  className="input"
                  placeholder="Skriv inn navnet ditt"
                />
              </div>

              <div className="field-group">
                <label htmlFor="epost" className="field-label">
                  E-post
                </label>
                <input
                  id="epost"
                  name="E-post"
                  type="email"
                  className="input"
                  placeholder="din.epost@eksempel.no"
                />
              </div>

              <div className="field-group">
                <label htmlFor="melding" className="field-label">
                  Melding
                </label>
                <textarea
                  id="melding"
                  name="Melding"
                  className="textarea"
                  placeholder="Fortell kort hva du lurer på, eller hvilket verktøy du er interessert i."
                />
              </div>

              <div style={{ marginTop: "0.3rem" }}>
                <Button type="submit" variant="primary">
                  Send melding via e-post →
                </Button>
              </div>

              <p className="text-muted">
                Dette skjemaet bruker <code>mailto:</code> og åpner e-postklienten
                din. Når MCL er klar med egen backend eller integrasjon mot f.eks.
                Google Forms, kan denne siden oppdateres uten strukturelle endringer.
              </p>
            </form>
          </div>

          <div className="surface surface--soft">
            <div className="surface-inner">
              <p className="section-eyebrow">ANDRE MÅTER Å NÅ OSS PÅ</p>
              <p className="section-description">
                Nettsiden blir etter hvert koblet mot flere kanaler. Inntil da er
                e-post en enkel vei inn.
              </p>

              <ul className="about-list">
                <li>
                  <strong>Produktspørsmål:</strong> Formelsamling, ManageProgress
                  og andre MCL-apper.
                </li>
                <li>
                  <strong>Tilpasninger:</strong> Egen formelsamling, firmaprofil
                  eller integrasjon med eksisterende verktøy.
                </li>
                <li>
                  <strong>Idéer:</strong> Har du et hull mellom Excel og store
                  systemer? Kanskje det er en fremtidig MCL-app.
                </li>
              </ul>

              <p className="text-muted" style={{ marginTop: "1.2rem" }}>
                E-postadressene som brukes her er placeholders. Når MCL har egen
                domene-struktur og e-post, kan tekst og lenker oppdateres uten å
                endre layout.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
