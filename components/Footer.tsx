"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  const isEnglish = pathname.startsWith("/en");
  const base = isEnglish ? "/en" : "";

  const mainText = isEnglish
    ? `© ${year} Morning Coffee Labs. All rights reserved.`
    : `© ${year} Morning Coffee Labs. Alle rettigheter forbeholdes.`;

  const tagline = isEnglish
    ? "Digital tools for technical work."
    : "Digitale verktøy for elektro & kraft.";

  const aboutLabel = isEnglish ? "About MCL" : "Om MCL";
  const contactLabel = isEnglish ? "Contact" : "Kontakt";

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>{mainText}</div>
        <div className="footer-links">
          <span className="footer-link">{tagline}</span>
          <Link href={`${base}/om`} className="footer-link">
            {aboutLabel}
          </Link>
          <Link href={`${base}/kontakt`} className="footer-link">
            {contactLabel}
          </Link>
        </div>
      </div>
    </footer>
  );
}
