"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Forside" },
  { href: "/produkter", label: "Produkter" },
  { href: "/priser", label: "Priser" },
  { href: "/om", label: "Om MCL" },
  { href: "/kontakt", label: "Kontakt" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand" aria-label="Morning Coffee Labs forside">
          <div className="brand-mark">
            <span>M</span>
          </div>
          <div className="brand-text">
            <span className="brand-title">Morning Coffee Labs</span>
            <span className="brand-subtitle">Digital struktur &amp; kaffe</span>
          </div>
        </Link>

        <nav className="site-nav" aria-label="Hovedmeny">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "nav-link--active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="site-nav-mobile-pill">
          <span>Nettside v1.0</span>
        </div>
      </div>
    </header>
  );
}
