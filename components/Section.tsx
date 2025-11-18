import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children
}: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="container">
        {(eyebrow || title || description) && (
          <header className="section-header">
            {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
            {title && <h2 className="section-title">{title}</h2>}
            {description && (
              <p className="section-description">{description}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
