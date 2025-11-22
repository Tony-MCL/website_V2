"use client";

import { FormEvent, useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { db } from "../../lib/firebaseClient";

export default function KontaktPage() {
  const [navn, setNavn] = useState("");
  const [epost, setEpost] = useState("");
  const [melding, setMelding] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!melding.trim()) {
      setErrorMessage("Skriv gjerne noen ord før du sender.");
      setSuccessMessage(null);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      await addDoc(collection(db, "contactMessages"), {
        name: navn.trim() || null,
        email: epost.trim() || null,
        message: melding.trim(),
        source: "mcl-website",
        createdAt: serverTimestamp()
      });

      setSuccessMessage(
        "Takk for meldingen! Den er lagret i systemet, og jeg tar kontakt så snart jeg kan."
      );
      setNavn("");
      setEpost("");
      setMelding("");
    } catch (err) {
      console.error("Kunne ikke lagre melding:", err);
      setErrorMessage(
        "Noe gikk galt under sendingen. Prøv gjerne igjen om litt, eller send e-post direkte."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Section
        eyebrow="KONTAKT"
        title="Ta kontakt med Morning Coffee Labs"
        description="Har du spørsmål, innspill eller ønsker om tilpassede verktøy? Bruk skjemaet – meldingen lagres nå direkte i MCL-backend, klar til oppfølging."
      >
        <div className="product-layout">
          <div>
            <h1 className="page-heading">Vi hører gjerne fra deg</h1>
            <p className="page-intro">
              Enten du er i et kraftverk, på et rådgivningskontor eller ute på
              anlegg – vi er interessert i behov, idéer og tilbakemeldinger
              rundt verktøyene våre.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field-group">
                <label htmlFor="navn" className="field-label">
                  Navn
                </label>
                <input
                  id="navn"
                  name="navn"
                  type="text"
                  className="input"
                  placeholder="Skriv inn navnet ditt"
                  value={navn}
                  onChange={(e) => setNavn(e.target.value)}
                />
              </div>

              <div className="field-group">
                <label htmlFor="epost" className="field-label">
                  E-post
                </label>
                <input
                  id="epost"
                  name="epost"
                  type="email"
                  className="input"
                  placeholder="din.epost@eksempel.no"
                  value={epost}
                  onChange={(e) => setEpost(e.target.value)}
                />
              </div>

              <div className="field-group">
                <label htmlFor="melding" className="field-label">
                  Melding
                </label>
                <textarea
                  id="melding"
                  name="melding"
                  className="textarea"
                  placeholder="Fortell kort hva du lurer på, eller hvilket verktøy du er interessert i."
                  value={melding}
                  onChange={(e) => setMelding(e.target.value)}
                />
              </div>

              <div style={{ marginTop: "0.3rem" }}>
                <Button type="submit" variant="primary">
                  {isSubmitting ? "Sender …" : "Send melding →"}
                </Button>
              </div>

              {successMessage && (
                <p className="text-muted" style={{ marginTop: "0.6rem" }}>
                  {successMessage}
                </p>
              )}
              {errorMessage && (
                <p
                  className="text-muted"
                  style={{
                    marginTop: "0.6rem",
                    color: "var(--mcl-error)"
                  }}
                >
                  {errorMessage}
                </p>
              )}

              <p className="text-muted" style={{ marginTop: "0.8rem" }}>
                Meldingen lagres i MCL sitt backend-arkiv. Senere kan dette
                kobles mot kunderegister og statistikk uten å endre skjemaet.
              </p>
            </form>
          </div>

          <div className="surface surface--soft">
            <div className="surface-inner">
              <p className="section-eyebrow">ANDRE MÅTER Å NÅ OSS PÅ</p>
              <p className="section-description">
                Nettsiden blir etter hvert koblet mot flere kanaler. Inntil da
                er dette skjemaet og e-post en enkel vei inn.
              </p>

              <ul className="about-list">
                <li>
                  <strong>Produktspørsmål:</strong> Formelsamling, Manage
                  Progress og andre MCL-apper.
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
                Ønsker du heller å sende direkte e-post, kan du bruke adressen
                du setter opp for MCL. Når domene og e-post er på plass, kan vi
                legge inn en klikkbar lenke her uten å endre strukturen.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
