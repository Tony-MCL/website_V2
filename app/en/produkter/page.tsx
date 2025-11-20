import { Section } from "../../../components/Section";
import { Button } from "../../../components/Button";

export default function ProductsPageEn() {
  return (
    <>
      <Section
        eyebrow="PRODUCTS"
        title="Tools in the Morning Coffee Labs family"
        description="Morning Coffee Labs builds small, focused tools that are easy to adopt and easy to trust. Here you’ll find a closer description of the first tools – and a glimpse of what’s coming next."
      >
        <p className="page-intro">
          All tools share the same philosophy: clear structure, calm interfaces
          and function first. You should not have to fight heavy systems and
          unnecessary noise – the tools should help you move forward, not slow
          you down.
        </p>
      </Section>

      {/* Digital formula library */}
      <Section
        eyebrow="DIGITAL FORMULA LIBRARY"
        title="Formulas for professionals – clear, tidy and mobile-friendly"
      >
        <div className="product-layout">
          <article>
            <h3 className="page-heading">Digital formula library</h3>
            <p className="page-intro">
              The digital formula library is built for practical use in projects,
              on site and in day-to-day work. Instead of searching through PDFs,
              books or unreliable sources, you get a structured overview with a
              focus on real calculations.
            </p>
            <ul className="simple-list">
              <li>
                Categories and structure that mirror how you actually work.
              </li>
              <li>
                Focus on understandable presentation rather than pure theory and
                symbol chaos.
              </li>
              <li>
                Built for both mobile and desktop – equally useful in the office
                and in the field.
              </li>
            </ul>
            <div style={{ marginTop: "1.2rem" }}>
              <Button href="/en/kontakt" variant="primary">
                Register interest
              </Button>
            </div>
          </article>

          <div className="product-meta-grid">
            <div className="product-meta-item">
              <div className="product-meta-label">Status</div>
              <div className="product-meta-value">In development</div>
            </div>
            <div className="product-meta-item">
              <div className="product-meta-label">Planned launch</div>
              <div className="product-meta-value">Before Christmas</div>
            </div>
            <div className="product-meta-item">
              <div className="product-meta-label">Platforms</div>
              <div className="product-meta-value">
                Browser (desktop and mobile)
              </div>
            </div>
            <div className="product-meta-item">
              <div className="product-meta-label">Typical users</div>
              <div className="product-meta-value">
                Professionals, project engineers, technicians and students.
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Manage Progress */}
      <Section
        eyebrow="PLANNING & PROGRESS"
        title="Manage Progress – clarity without project-management overload"
      >
        <div className="product-layout">
          <article>
            <h3 className="page-heading">Manage Progress</h3>
            <p className="page-intro">
              Manage Progress is a lightweight planning tool inspired by Gantt
              charts, but built for everyday use. The goal is to give you a clear
              timeline and control over milestones without having to step into a
              heavy project-management system.
            </p>
            <ul className="simple-list">
              <li>
                Focus on the essentials: tasks, dependencies and progress.
              </li>
              <li>
                Designed for small and medium-sized projects – regardless of
                industry.
              </li>
              <li>
                The same calm MCL interface as the rest of the tools.
              </li>
            </ul>
            <div style={{ marginTop: "1.2rem" }}>
              <Button href="/en/kontakt" variant="secondary">
                Get notified at launch
              </Button>
            </div>
          </article>

          <div className="product-meta-grid">
            <div className="product-meta-item">
              <div className="product-meta-label">Status</div>
              <div className="product-meta-value">
                In design and prototyping
              </div>
            </div>
            <div className="product-meta-item">
              <div className="product-meta-label">Planned launch</div>
              <div className="product-meta-value">Early next year</div>
            </div>
            <div className="product-meta-item">
              <div className="product-meta-label">Use cases</div>
              <div className="product-meta-value">
                Planning, progress tracking and overview – across disciplines and
                industries.
              </div>
            </div>
            <div className="product-meta-item">
              <div className="product-meta-label">Adaptation</div>
              <div className="product-meta-value">
                Can be adapted to different domains through structure, not
                complexity.
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Future tools */}
      <Section
        eyebrow="FUTURE TOOLS"
        title="A small lab for more tools"
        description="Morning Coffee Labs is not a single app, but a small lab for ideas. Some become products, others remain internal tools – all with the same goal: to make workdays more manageable."
      >
        <ul className="simple-list">
          <li>
            Tools for inspection, logging and structure around technical work.
          </li>
          <li>
            Small, focused solutions that connect information and practice.
          </li>
          <li>
            A shared visual and functional standard across all tools.
          </li>
        </ul>
        <div style={{ marginTop: "1.2rem" }}>
          <p className="text-muted" style={{ marginBottom: "0.6rem" }}>
            If you have a concrete need or an idea for a tool you’re missing, feel
            free to reach out – many good solutions start with a single
            challenge.
          </p>
          <Button href="/en/kontakt" variant="primary">
            Get in touch
          </Button>
        </div>
      </Section>
    </>
  );
}
