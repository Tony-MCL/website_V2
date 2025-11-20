import { HeroEn } from "../../components/HeroEn";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

export default function HomePageEn() {
  return (
    <>
      <HeroEn />

      <Section
        eyebrow="ABOUT MCL"
        title="A small digital workshop built on ideas, structure and morning coffee"
      >
        <p className="page-intro">
          Morning Coffee Labs is a small digital workshop created over morning
          coffee – first to make work easier and more structured, and eventually
          to make everyday life better for others as well. What started as a
          personal hobby project is now on its way to becoming a one-person
          business with clear commercial ambitions.
        </p>
        <p className="page-intro">
          <strong>Challenges → Ideas → Solutions</strong> is more than a tagline –
          it is the core philosophy behind Morning Coffee Labs. Challenges are
          not problems, but the starting point for everything that can be
          improved. That mindset is behind every solution developed here:
          tools that make everyday work a bit tidier, more predictable and much
          more efficient.
        </p>
      </Section>

      <Section
        eyebrow="TOOLS"
        title="A small preview of what we’re building"
        description="The first tools in the Morning Coffee Labs family are already in development. Here’s a quick preview – you’ll find more details on the product pages."
      >
        <div className="card-grid">
          <article className="card">
            <h3>Digital formula library</h3>
            <p>
              A clear, mobile-friendly formula library for professionals, built
              for real projects – not just theory.
            </p>
            <div className="card-footer">
              <span className="card-tag">Coming before Christmas</span>
              <Button href="/en/produkter" variant="ghost">
                Read more →
              </Button>
            </div>
          </article>

          <article className="card">
            <h3>Manage Progress</h3>
            <p>
              A lightweight planning tool that gives you clarity without noise,
              inspired by Gantt but adapted to real-world workflows –
              independent of industry.
            </p>
            <div className="card-footer">
              <span className="card-tag">Launching in January</span>
              <Button href="/en/produkter" variant="ghost">
                Read more →
              </Button>
            </div>
          </article>
        </div>

        <div style={{ marginTop: "1.3rem" }}>
          <p className="text-muted" style={{ marginBottom: "0.6rem" }}>
            More small tools are on the way. Morning Coffee Labs is a lab – new
            ideas are tested continuously, and solutions are shaped by real
            needs.
          </p>
          <Button href="/en/produkter" variant="secondary">
            See all tools
          </Button>
        </div>
      </Section>
    </>
  );
}
