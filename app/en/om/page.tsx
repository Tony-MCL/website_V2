import { Section } from "../../../components/Section";
import { Button } from "../../../components/Button";

export default function AboutPageEn() {
  return (
    <>
      <Section
        eyebrow="ABOUT MCL"
        title="From morning coffee and hobby project to digital workshop"
      >
        <div className="about-grid">
          <div>
            <p className="page-intro">
              Morning Coffee Labs started in a simple way: over morning coffee,
              with a desire to make work more manageable, more structured and
              less dominated by heavy tools. As the ideas grew, the hobby project
              turned into a more structured lab for digital tools – now on its
              way to becoming a fully commercial one-person company.
            </p>
            <p className="page-intro">
              My background is in technical environments and projects, especially
              within electrical and power-related work – but the tools I build are
              not locked to a single industry. The core idea is that good
              workspaces, clear structure and predictable behaviour are useful
              everywhere – whether you work on site, in an office or somewhere in
              between.
            </p>
            <p className="page-intro">
              I’m fundamentally optimistic: I see challenges before I see
              problems, and I believe more in clear structure than in complex
              systems. That way of thinking has crystallised into the motto:
              <br />
              <strong>Challenges → Ideas → Solutions.</strong>
            </p>
          </div>

          <div>
            <ul className="about-list">
              <li>
                <strong>Challenges:</strong> Real-world challenges in projects and
                operations are the starting point – not hypothetical use-cases.
              </li>
              <li>
                <strong>Ideas:</strong> Ideas are tested quickly in small,
                controlled prototypes before anything becomes a product.
              </li>
              <li>
                <strong>Solutions:</strong> Tools should be concrete, clear and
                possible to adopt without long courses or thick manuals.
              </li>
            </ul>
            <p className="text-muted" style={{ marginTop: "0.8rem" }}>
              I’ve never really “met a stranger” – only potential new
              collaborators and sparring partners. That’s why MCL is also a place
              for dialogue: feedback, wishes and ideas are always welcome.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="HOW I WORK"
        title="Small, deliberate steps – with a lot of focus on structure"
        description="Morning Coffee Labs is not meant to become a massive software house. The ambition is to build a few good tools that can stand on their own, while following a shared standard for structure, design and usability."
      >
        <ul className="simple-list">
          <li>
            Calm, consistent interfaces are prioritised over visual effects that
            steal attention.
          </li>
          <li>
            Tools are built iteratively – with deliberate versions and
            milestones, so users can follow the development.
          </li>
          <li>
            Backwards compatibility and predictability matter: it should feel
            safe to adopt an MCL tool.
          </li>
          <li>
            Feedback from real use is valued higher than long hypothetical
            requirement lists.
          </li>
        </ul>
        <div style={{ marginTop: "1.2rem" }}>
          <p className="text-muted" style={{ marginBottom: "0.6rem" }}>
            If you recognise yourself in this way of working, or see potential
            for MCL tools in your everyday life, you’re very welcome to get in
            touch.
          </p>
          <Button href="/en/kontakt" variant="secondary">
            Get in touch
          </Button>
        </div>
      </Section>
    </>
  );
}
