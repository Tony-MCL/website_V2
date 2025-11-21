import Link from "next/link";
import { Section } from "@/components/Section";
import { hallOfFame } from "../ideas";

export default function HallOfFamePage() {
  return (
    <main>
      <Section
        eyebrow="Idébank"
        title="Hall of Fame"
        description="De som har bidratt med idéer som har blitt til verktøy hos MCL."
      >
        <ul className="hof-full-list">
          {hallOfFame.map((item, idx) => (
            <li key={idx} className="hof-full-item">
              <h4>{item.name}</h4>
              <p>{item.contribution}</p>
              <span className="hof-year">{item.year}</span>
            </li>
          ))}
        </ul>

        <Link href="/idebank" className="btn btn-secondary">
          Tilbake til idébanken
        </Link>
      </Section>
    </main>
  );
}
