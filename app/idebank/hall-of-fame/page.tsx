import Link from "next/link";
import { Section } from "../../../components/Section";
import { hallOfFame } from "../ideas";

export default function HallOfFamePage() {
  return (
    <>
      <Section
        eyebrow="IDÉBANK"
        title="Hall of Fame"
        description="Bidragsytere som har delt ideer som har blitt til faktiske verktøy i Morning Coffee Labs-universet."
      >
        <ul className="hof-full-list">
          {hallOfFame.map((entry, idx) => (
            <li key={idx} className="hof-full-item">
              <h4>{entry.name}</h4>
              <p>{entry.contribution}</p>
              <span className="hof-year">{entry.year}</span>
            </li>
          ))}
        </ul>

        <Link href="/idebank" className="btn btn-secondary">
          Tilbake til idébanken
        </Link>
      </Section>
    </>
  );
}
