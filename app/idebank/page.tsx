import { Button } from "../../components/Button";

export default function IdebankPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="page-heading">Idébank</h1>
        <p className="page-intro">
          Har du en idé til et lite, fokusert verktøy som kunne gjort
          arbeidshverdagen enklere – for deg selv eller andre? Dette er stedet
          å legge den igjen.
        </p>

        <div className="surface surface--soft">
          <div className="surface-inner">
            <h2 className="section-title" style={{ marginTop: 0 }}>
              Slik er tanken
            </h2>
            <p className="section-description" style={{ marginBottom: "1.2rem" }}>
              Morning Coffee Labs er bygget rundt små, presise verktøy. Mange av
              de beste ideene kommer ikke nødvendigvis fra meg – men fra folk som
              står midt i prosjekter, anlegg og hverdagens små irritasjonsmomenter.
            </p>

            <ul className="simple-list">
              <li>
                Du beskriver kort utfordringen og hvilken type verktøy du ser for deg.
              </li>
              <li>
                Jeg vurderer om ideen passer inn i MCL-universet og hvordan den kan
                realiseres.
              </li>
              <li>
                Hvis ideen din blir til en app eller et produkt, får du en{" "}
                <strong>års lisens</strong> til en valgfri MCL-app som takk.
              </li>
            </ul>

            <p className="text-muted" style={{ marginTop: "1.2rem" }}>
              Denne siden er foreløpig en enkel plassholder. Senere kommer et
              dedikert skjema for idéinnsending – med litt mer struktur.
              Inntil videre kan du bruke kontaktskjemaet.
            </p>

            <div style={{ marginTop: "1.4rem" }}>
              <Button href="/kontakt" variant="primary">
                Del en idé via kontaktskjemaet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
