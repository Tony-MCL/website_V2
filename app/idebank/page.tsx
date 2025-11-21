import Link from "next/link";
import { Section } from "@/components/Section";
import { ideaPipeline, hallOfFame } from "./ideas";

export default function IdeaBankPage() {
  return (
    <main>
      <Section
        eyebrow="Morning Coffee Labs"
        title="Idébank"
        description="Her kan du se hvilke ideer som vurderes, hvilke som er under arbeid, og sende inn dine egne forslag."
      >
        <div className="idea-intro">
          <p>
            En god idé kan bli til et nytt verktøy hos Morning Coffee Labs. Hvis
            du har et behov, et savn eller et smart forslag – send det gjerne inn!
          </p>

          <Link href="/kontakt" className="btn btn-primary">
            Send inn idé
          </Link>
        </div>

        <h3 className="idea-subtitle">Ideer på vei</h3>
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
        <p>
          Ideer som blir til reelle verktøy blir feiret her – med tillatelse fra
          bidragsyterne.
        </p>

        <ul className="hof-list">
          {hallOfFame.map((item, idx) => (
            <li key={idx} className="hof-item">
              <strong>{item.name}</strong> – {item.contribution} ({item.year})
            </li>
          ))}
        </ul>

        <Link href="/idebank/hall-of-fame" className="btn btn-secondary">
          Se alle bidragsytere
        </Link>
      </Section>
    </main>
  );
}
