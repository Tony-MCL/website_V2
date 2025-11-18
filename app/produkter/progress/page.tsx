import { Button } from "../../../components/Button";
import { Section } from "../../../components/Section";

export default function ManageProgressPage() {
  return (
    <>
      <Section>
        <div className="product-layout">
          <div>
            <p className="section-eyebrow">MANAGEPROGRESS</p>
            <h1 className="page-heading">Fremdrift uten støy</h1>
            <p className="page-intro">
              ManageProgress er en fremdriftsflate inspirert av Gantt, men
              tunet for prosjekter innen elektro, kraft og tekniske disipliner –
              der en enkel, visuell plan ofte er det som faktisk brukes.
            </p>

            <ul className="simple-list">
              <li>Tabell + Gantt-inspirert visning i samme arbeidsflate.</li>
              <li>Fokus på oversikt, ikke kompliserte prosjektregler.</li>
              <li>Bygget for å fungere godt i møter og på skjermdeling.</li>
            </ul>

            <div className="product-meta-grid">
              <div className="product-meta-item">
                <div className="product-meta-label">Status</div>
                <div className="product-meta-value">Lanseres i januar</div>
                <p className="text-muted">
                  Første versjon gjøres tilgjengelig via nettsiden og kan senere
                  knyttes til lisensmodell.
                </p>
              </div>
              <div className="product-meta-item">
                <div className="product-meta-label">Bruksområde</div>
                <div className="product-meta-value">Prosjekt &amp; service</div>
                <p className="text-muted">
                  Tenkt brukt både i prosjekter og service-oppdrag der fremdrift
                  må være synlig for flere parter.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem" }}>
              <Button href="#" variant="primary">
                Åpne appen (kommer) →
              </Button>
              <Button href="/priser" variant="ghost">
                Se pris og lisensidéer
              </Button>
            </div>
          </div>

          <div className="surface surface--soft">
            <div className="surface-inner">
              <p className="section-eyebrow">SKJERMBILDER</p>
              <p className="section-description">
                ManageProgress vil få en rolig, strukturert tavle med tabell til
                venstre og tidslinje til høyre – i samme MCL-palett som resten.
              </p>

              <div
                style={{
                  marginTop: "1rem",
                  borderRadius: "14px",
                  border: "1px solid rgba(244,237,228,0.16)",
                  padding: "0.8rem 0.9rem",
                  background:
                    "linear-gradient(135deg, rgba(38,31,28,0.95), rgba(18,13,10,0.98))"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.75rem",
                    color: "var(--mcl-text-muted)",
                    marginBottom: "0.4rem"
                  }}
                >
                  <span>Aktiviteter</span>
                  <span>Kalender</span>
                </div>
                <div
                  style={{
                    height: "120px",
                    borderRadius: "10px",
                    border: "1px solid rgba(244,237,228,0.12)",
                    background:
                      "repeating-linear-gradient(to right, rgba(244,237,228,0.04), rgba(244,237,228,0.04) 1px, transparent 1px, transparent 20px)"
                  }}
                ></div>
                <p className="text-muted" style={{ marginTop: "0.7rem" }}>
                  Når appen er klar legges ekte skjermbilder inn her. Nettsiden
                  er allerede klar for dette uten strukturelle endringer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
