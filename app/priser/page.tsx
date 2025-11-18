import { Button } from "../../components/Button";
import { Section } from "../../components/Section";

export default function PriserPage() {
  return (
    <>
      <Section
        eyebrow="PRISER"
        title="Enkle modeller i første omgang"
        description="MCL starter med åpne, gratisverktøy. Etter hvert vil vi tilby lisensiert tilgang og tilpassede løsninger der det gir mening."
      >
        <h1 className="page-heading">Pris og lisensstruktur</h1>
        <p className="page-intro">
          Nettsiden er klar for fremtidig lisenshåndtering og betaling, men i
          versjon 1.0 fokuserer vi på åpne verktøy og dialog. Når lisensmodellen
          er klar, blir denne siden oppdatert med konkrete nivåer.
        </p>

        <div className="price-grid">
          {/* Gratisversjoner */}
          <div className="price-block">
            <h2 className="price-title">Gratisversjoner</h2>
            <p className="price-body">
              De første MCL-verktøyene vil være gratis å bruke, uten innlogging
              og uten å lagre persondata. Målet er å gjøre det lett å teste
              verktøyene i praksis.
            </p>
            <p className="price-highlight">
              • Gratis å bruke – ingen konto nødvendig. <br />
              • Fokus på faglig nytte og tilbakemeldinger.
            </p>
            <p className="text-muted">
              Når lisensfunksjonalitet kommer på plass, vil den bygges inn på
              denne nettsiden som en naturlig del av strukturen – ikke som et
              pålimt tillegg.
            </p>
          </div>

          {/* Tilpassede formelsamlinger */}
          <div className="price-block">
            <h2 className="price-title">Tilpassede formelsamlinger</h2>
            <p className="price-body">
              For bedrifter og fagmiljøer som ønsker egen formelsamling med
              bedriftsspesifikke formler, språk og struktur, vil MCL kunne
              tilby tilpassede versjoner.
            </p>
            <p className="price-highlight">
              Pris avtales basert på omfang, vedlikehold og ønsket tilpasning.
            </p>
            <Button
              href="mailto:kontakt@placeholder.mcl?subject=Forespørsel%20om%20tilpasset%20formelsamling"
              variant="primary"
            >
              Be om tilbud på tilpasning →
            </Button>
            <p className="text-muted" style={{ marginTop: "0.7rem" }}>
              E-postadressen er en placeholder – erstatt med faktisk MCL-adresse
              når den er klar.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="VIDERE"
        title="Lisens og betaling i neste fase"
        description="Nettsiden er bygget med tanke på at lisenshåndtering og betaling kan legges til uten å endre grunnstrukturen."
      >
        <p className="text-muted">
          I neste fase vil vi kunne introdusere:
        </p>
        <ul className="simple-list">
          <li>Lisensnivå for små og mellomstore bedrifter.</li>
          <li>Tilgangsstyring pr. bruker eller pr. fagområde.</li>
          <li>Integrasjon mot betalingsløsninger som passer norske forhold.</li>
        </ul>
      </Section>
    </>
  );
}
