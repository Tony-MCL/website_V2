import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          © {year} Morning Coffee Labs. Alle rettigheter forbeholdes.
        </div>
        <div className="footer-links">
          <span className="footer-link">Digitale verktøy for elektro &amp; kraft.</span>
          <Link href="/om" className="footer-link">
            Om MCL
          </Link>
          <Link href="/kontakt" className="footer-link">
            Kontakt
          </Link>
        </div>
      </div>
    </footer>
  );
}
