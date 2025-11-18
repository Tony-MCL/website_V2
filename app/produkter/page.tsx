import { Button } from "../../components/Button";
import { Section } from "../../components/Section";

export default function ProdukterPage() {
  return (
    <>
      <Section
        eyebrow="PRODUKTER"
        title="App-familien til Morning Coffee Labs"
        description="Her samler vi dagens og fremtidige verktøy. Nettsiden er designet for å kunne utvides etter hvert som nye apper kommer på plass."
      >
        <div className="product-layout">
          <div>
            <h1 className="page-heading">Formelsamling &amp; fremdrift</h1>
            <p className="page-intro">
              Første generasjon MCL-apper er to fokusområder:
              en digital formelsamling for elektro og kraft, og et
              fremdriftsverktøy som gir oversikt uten tung prosjektmetodikk.
            </p>
            <ul className="simple-list">
              <li>Felles MCL-design og struktur på tvers av apper.</li>
              <li>Bygget for tekniske fagfolk – ikke bare IT-miljøer.</li>
              <li>Klar for senere integrasjon mot lisens og betaling.</li>
            </ul>
          </div>
          <div className="surface surface--soft">
            <div className="surface-inner">
              <div className="product-meta-grid">
                <div className="product-meta-item">
                  <div className="product-meta-label">App 1</div>
                  <div className="product-meta-value">Digital formelsamling</div>
                  <p className="text-muted">
                    Praktisk, mobilvennlig formelsamling med struktur for elektro
                    og kraft.
                  </p>
                  <Button
                    href="/produkter/formelsamling"
                    variant="secondary"
                  >
                    Gå til produktside →
                  </Button>
                </div>
                <div className="product-meta-item">
                  <div className="product-meta-label">App 2</div>
                  <div className="product-meta-value">ManageProgress</div>
                  <p className="text-muted">
                    Oversiktlig fremdriftsplan for prosjekter – enkel nok til å
                    bli brukt hver dag.
                  </p>
                  <Button href="/produkter/progress" variant="secondary">
                    Gå til produktside →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="VIDERE"
        title="Flere verktøy kommer etter hvert"
        description="Nettsiden er strukturert for å kunne ta imot flere apper, både innen dokumentasjon, inspeksjon og prosjektstøtte."
      >
        <p className="text-muted">
          Når nye produkter lanseres vil de få egne produktsider her under
          <strong> /produkter</strong>. Hver app vil følge samme MCL-tema, med
          fokus på ryddighet, god lesbarhet og kjente navigasjonsmønstre.
        </p>
      </Section>
    </>
  );
}
