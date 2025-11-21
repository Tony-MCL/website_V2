import Link from "next/link";
import { Section } from "../../../../components/Section";
import { hallOfFame } from "../../../idebank/ideas";

export default function HallOfFamePageEn() {
  return (
    <>
      <Section
        eyebrow="IDEA BANK"
        title="Hall of Fame"
        description="People who have contributed ideas that turned into real tools in the Morning Coffee Labs universe."
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

        <Link href="/en/idebank" className="btn btn-secondary">
          Back to the idea bank
        </Link>
      </Section>
    </>
  );
}
