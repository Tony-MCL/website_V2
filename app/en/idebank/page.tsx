import Link from "next/link";
import { Section } from "../../../components/Section";
import { ideaPipeline, hallOfFame } from "../../idebank/ideas";

export default function IdeaBankPage() {
  return (
    <>
      <Section
        eyebrow="MORNING COFFEE LABS"
        title="Idea bank"
        description="A place to collect small, focused tool ideas – the kind that can quietly remove friction from everyday work."
      >
        <div className="idea-intro">
          <p>
            If there is a tool you wish existed – something that would save
            time, create better overview or remove a repetitive annoyance –
            this is where to leave that idea.
          </p>
          <p>
            Many of the best tools start as a single sentence over a morning
            coffee. Feel free to share those sentences here.
          </p>

          <Link href="/en/kontakt" className="btn btn-primary">
            Share an idea via the contact form
          </Link>
        </div>

        <h3 className="idea-subtitle">Ideas in the pipeline</h3>
        <p className="section-description">
          A selection of ideas being considered or already on the drawing board.
          The list will be updated as things mature.
        </p>

        <ul className="idea-list">
          {ideaPipeline.map((idea) => (
            <li key={idea.id} className="idea-item">
              <h4>{idea.title}</h4>
              {idea.description && <p>{idea.description}</p>}
              <span className={`idea-status status-${idea.status}`}>
                {idea.status === "pending" && "Under consideration"}
                {idea.status === "in-progress" && "In development"}
                {idea.status === "released" && "Released"}
              </span>
            </li>
          ))}
        </ul>

        <h3 className="idea-subtitle">Hall of Fame</h3>
        <p className="section-description">
          Whenever an idea from the idea bank becomes a real tool, I&apos;d like
          – with permission – to acknowledge that here. A small thank you to
          those helping shape MCL.
        </p>

        <ul className="hof-list">
          {hallOfFame.map((entry, idx) => (
            <li key={idx} className="hof-item">
              <strong>{entry.name}</strong> – {entry.contribution}{" "}
              <span className="hof-year">({entry.year})</span>
            </li>
          ))}
        </ul>

        <Link href="/en/idebank/hall-of-fame" className="btn btn-secondary">
          View full Hall of Fame
        </Link>
      </Section>
    </>
  );
}
