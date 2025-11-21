import Link from "next/link";
import { Section } from "../../components/Section";
import { ideaPipeline, hallOfFame } from "./ideas";

export default function IdebankPage() {
  return (
    <>
      <Section
        eyebrow="MORNING COFFEE LABS"
        title="Idébank"
        description="Her samles ideer til små, presise verktøy som kan gjøre arbeidshverdagen enklere. Både dine og mine."
      >
        <div className="idea-intro">
          <p>
            Har du en tanke om et verktøy som mangler? Noe som kunne spart deg
            tid, gitt bedre oversikt eller gjort hverdagen litt mindre tungvinn?
            Idébanken er stedet å legge det igjen.
          </p>
          <p>
            Mange av de beste verktøyene starter som en kort setning over
            morgenkaffen. Del gjerne de setningene her.
          </p>

          <Link href="/kontakt" className="btn btn-primary">
            Del en idé via kontaktskjemaet
          </Link>
        </div>

        <h3 className="idea-subtitle">Ideer på vei</h3>
        <p className="section-description">
          Noen utvalgte ideer jeg vurderer å bygge, eller som allerede er på
          tegnebrettet. Listen oppdateres etter hvert som ting modnes.
        </p>

        <ul className="idea-list">
          {ideaPipeline.map((idea) => (
            <li key={idea.id} className="idea-item">
              <h4>{idea.title}</h4>
              {idea.description && <p>{idea.description}</p>}
              <span className={`idea-status status-${idea.status}`}>
                {idea.status === "pending" && "Vurderes"}
                {idea.status === "in-progress" && "Under utvikling"}
                {idea.status === "released" && "Lansert"}
              </span>
            </li>
          ))}
        </ul>

        <h3 className="idea-subtitle">Hall of Fame</h3>
        <p className="section-description">
          Når en idé fra idébanken blir til et faktisk verktøy, ønsker jeg – med
          tillatelse – å gi litt ære tilbake her. En liten takk til de som har
          vært med å forme MCL.
        </p>

        <ul className="hof-list">
          {hallOfFame.map((entry, idx) => (
            <li key={idx} className="hof-item">
              <strong>{entry.name}</strong> – {entry.contribution}{" "}
              <span className="hof-year">({entry.year})</span>
            </li>
          ))}
        </ul>

        <Link href="/idebank/hall-of-fame" className="btn btn-secondary">
          Se full Hall of Fame
        </Link>
      </Section>
    </>
  );
}
