import { Button } from "../../../components/Button";

export default function IdeaBankPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="page-heading">Idea bank</h1>
        <p className="page-intro">
          Do you have an idea for a small, focused tool that could make everyday
          work easier – for yourself or for others? This is where to leave it.
        </p>

        <div className="surface surface--soft">
          <div className="surface-inner">
            <h2 className="section-title" style={{ marginTop: 0 }}>
              How it&apos;s meant to work
            </h2>
            <p className="section-description" style={{ marginBottom: "1.2rem" }}>
              Morning Coffee Labs is built around small, precise tools. Many of
              the best ideas don&apos;t necessarily come from me – but from people
              who live in projects, plants and everyday little annoyances.
            </p>

            <ul className="simple-list">
              <li>
                You briefly describe the challenge and what kind of tool you have in mind.
              </li>
              <li>
                I consider whether the idea fits the MCL universe and how it could
                be realised.
              </li>
              <li>
                If your idea becomes an app or product, you&apos;ll receive a{" "}
                <strong>one-year license</strong> for any MCL app as a thank you.
              </li>
            </ul>

            <p className="text-muted" style={{ marginTop: "1.2rem" }}>
              This page is currently a simple placeholder. A dedicated idea
              submission form will be added later. For now, feel free to use the
              contact form to share your thoughts.
            </p>

            <div style={{ marginTop: "1.4rem" }}>
              <Button href="/en/kontakt" variant="primary">
                Share an idea via the contact form
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
