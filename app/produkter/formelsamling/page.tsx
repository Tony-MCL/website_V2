import { Button } from "../../../components/Button";
import { Section } from "../../../components/Section";

export default function FormelsamlingPage() {
  return (
    <>
      <Section>
        <div className="product-layout">
          <div>
            <p className="section-eyebrow">DIGITAL FORMELSAMLING</p>
            <h1 className="page-heading">Formler for elektro &amp; kraft</h1>
            <p className="page-intro">
              MCLs formelsamling er bygget for praktisk bruk i prosjekter,
              anlegg og hverdagssituasjoner – med fokus på tydelig struktur og
              ren visning på både mobil og PC.
            </p>

            <ul className="simple-list">
              <li>Kategorier og underkapitler som speiler faglig hverdag.</li>
              <li>Fokus på NEK 400 og typiske beregninger i elektro og kraft.</li>
              <li>Visuelt rolig oppsett med tydelig input og resultat.</li>
            </ul>

            <div className="product-meta-grid">
              <div className="product-meta-item">
                <div className="product-meta-label">Status</div>
                <div className="product-meta-value">Kommer før jul</div>
                <p className="text-muted">
                  Første versjon publiseres som egen app og kobles til denne
                  nettsiden når den er klar.
                </p>
              </div>
              <div className="product-meta-item">
                <div className="product-meta-label">Plattform</div>
                <div className="product-meta-value">Nettleser først</div>
                <p className="text-muted">
                  Designet for å være behagelig å bruke på mobil, men fullt
                  brukbar på større skjermer.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem" }}>
              <Button href="#" variant="primary">
                Åpne appen (kommer) →
              </Button>
              <Button href="/priser" variant="ghost">
                Se pris og tilpasning
              </Button>
            </div>
          </div>

          <div className="surface surface--soft">
            <div className="surface-inner">
              <p className="section-eyebrow">SKJERMBILDER</p>
              <p className="section-description">
                Formelsamlingen vil ha faste seksjoner, tydelig input og output,
                og en konsistent MCL-layout. Under er en illustrasjon av
                komponenter – ikke endelig design.
              </p>

              <div
                style={{
                  marginTop: "1rem",
                  display: "grid",
                  gap: "0.8rem"
                }}
              >
                <div className="hero-metric-card">
                  <div className="hero-metric-label">Eksempel</div>
                  <div className="hero-metric-value">
                    Spenningsfall i kabel
                  </div>
                  <div className="hero-metric-sub">
                    Input på én side, resultat og vurdering på den andre – ingen
                    skjult logikk.
                  </div>
                </div>
                <div className="hero-metric-card">
                  <div className="hero-metric-label">Skjermbilder</div>
                  <div className="hero-metric-sub">
                    Faktiske skjermbilder legges inn her når appen er i stabil
                    versjon. Nettsiden er klar for dette allerede nå.
                  </div>
                </div>
              </div>

              <p className="text-muted" style={{ marginTop: "1rem" }}>
                Formelsamlingen er også tenkt som grunnlag for{" "}
                <strong>tilpassede formelsamlinger</strong> for bedrifter, med
                egne kategorier, språk og firmaprofil.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
