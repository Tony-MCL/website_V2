import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

export default function OmPage() {
  return (
    <>
      <Section
        eyebrow="OM MCL"
        title="Fra morgenkaffe og hobbyprosjekt til digitalt verksted"
      >
        <div className="about-grid">
          <div>
            <p className="page-intro">
              Morning Coffee Labs startet helt enkelt: over morgenkaffen, med et
              ønske om å gjøre eget arbeid enklere, mer oversiktlig og mindre
              preget av tunge verktøy. Etter hvert som idéene vokste, ble
              hobbyprosjektet til et mer strukturert laboratorium for digitale
              verktøy – nå på vei mot et fullt ut kommersielt enkeltmannsforetak.
            </p>
            <p className="page-intro">
              Jeg har bakgrunn fra tekniske miljøer og prosjekter, særlig innen
              elektro og kraft, men verktøyene jeg bygger er ikke låst til én
              bransje. Grunnideen er at gode arbeidsflater, ryddig struktur og
              forutsigbar funksjon er universelt nyttig – uansett om du jobber
              på anlegg, kontor eller noe midt imellom.
            </p>
            <p className="page-intro">
              Jeg er grunnleggende optimist: jeg ser utfordringer før jeg ser
              problemer, og jeg har mer tro på tydelige strukturer enn på
              kompliserte systemer. Det er denne tankegangen som har gitt
              payoff i mottoet:
              <br />
              <strong>Challenges → Ideas → Solutions.</strong>
            </p>
          </div>

          <div>
            <ul className="about-list">
              <li>
                <strong>Challenges:</strong> Virkelige utfordringer i prosjekter og
                drift er utgangspunktet – ikke hypotetiske use-cases.
              </li>
              <li>
                <strong>Ideas:</strong> Ideer testes raskt i små, kontrollerte
                prototyper før noe blir til et produkt.
              </li>
              <li>
                <strong>Solutions:</strong> Verktøyene skal være konkrete, tydelige
                og mulig å ta i bruk uten lange kurs eller tunge manualer.
              </li>
            </ul>
            <p className="text-muted" style={{ marginTop: "0.8rem" }}>
              Jeg har aldri egentlig “møtt en fremmed” – bare potensielt nye
              samarbeidspartnere og faglige sparringspartnere. Derfor er MCL også
              et sted for dialog: innspill, ønsker og idéer tas imot med åpne
              armer.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="HVORDAN JEG JOBBER"
        title="Små, gjennomtenkte steg – og mye fokus på struktur"
        description="Morning Coffee Labs skal ikke bli et massivt systemhus. Ambisjonen er å bygge få, gode verktøy som kan stå på egne ben, men samtidig følge en felles standard for struktur, design og brukervennlighet."
      >
        <ul className="simple-list">
          <li>
            Jeg prioriterer rolig, konsistent grensesnitt fremfor visuelle
            effekter som stjeler oppmerksomheten.
          </li>
          <li>
            Verktøyene bygges iterativt – med bevisste versjoner og milepæler,
            slik at brukere kan følge utviklingen.
          </li>
          <li>
            Bakover-kompatibilitet og forutsigbarhet veier tungt: det skal være
            trygt å ta i bruk et MCL-verktøy.
          </li>
          <li>
            Tilbakemeldinger fra faktiske brukssituasjoner betyr mer enn
            hypotetiske behovslister.
          </li>
        </ul>
        <div style={{ marginTop: "1.2rem" }}>
          <p className="text-muted" style={{ marginBottom: "0.6rem" }}>
            Hvis du kjenner deg igjen i denne måten å jobbe på, eller ser
            potensialet for MCL-verktøy i din hverdag, er du veldig velkommen
            til å ta kontakt.
          </p>
          <Button href="/kontakt" variant="secondary">
            Ta kontakt
          </Button>
        </div>
      </Section>
    </>
  );
}
