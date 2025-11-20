"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FlagNO } from "./flags/FlagNO";
import { FlagGB } from "./flags/FlagGB";

const LANG_STORAGE_KEY = "mcl-lang";

const navItems = [
  {
    id: "home",
    hrefNo: "/",
    hrefEn: "/en",
    labelNo: "Forside",
    labelEn: "Home"
  },
  {
    id: "produkter",
    hrefNo: "/produkter",
    hrefEn: "/en/produkter",
    labelNo: "Produkter",
    labelEn: "Tools"
  },
  {
    id: "priser",
    hrefNo: "/priser",
    hrefEn: "/en/priser",
    labelNo: "Priser",
    labelEn: "Pricing"
  },
  {
    id: "om",
    hrefNo: "/om",
    hrefEn: "/en/om",
    labelNo: "Om MCL",
    labelEn: "About MCL"
  },
  {
    id: "kontakt",
    hrefNo: "/kontakt",
    hrefEn: "/en/kontakt",
    labelNo: "Kontakt",
    labelEn: "Contact"
  }
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const isEnglish = pathname.startsWith("/en");
  const currentLang: "no" | "en" = isEnglish ? "en" : "no";

  function handleLanguageChange(lang: "no" | "en") {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    }

    if (lang === currentLang) return;

    if (lang === "en") {
      if (!pathname.startsWith("/en")) {
        const target = pathname === "/" ? "/en" : `/en${pathname}`;
        router.push(target);
      }
    } else {
      // tilbake til norsk
      if (pathname.startsWith("/en")) {
        const withoutPrefix = pathname.replace(/^\/en/, "") || "/";
        router.push(withoutPrefix);
      }
    }
  }

  function handleLanguageToggle() {
    const next = currentLang === "no" ? "en" : "no";
    handleLanguageChange(next);
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link
          href={isEnglish ? "/en" : "/"}
          className="brand"
          aria-label="Morning Coffee Labs forside"
        >
          <img
            src={`${basePath}/images/mcl-logo.png`}
            alt="Morning Coffee Labs – Challenges → Ideas → Solutions"
            className="brand-logo"
          />
        </Link>

        <nav className="site-nav" aria-label="Hovedmeny">
          {navItems.map((item) => {
            const baseHref = isEnglish ? item.hrefEn : item.hrefNo;
            const isHome = item.id === "home";

            const isActive = isHome
              ? pathname === baseHref
              : pathname === baseHref || pathname.startsWith(`${baseHref}/`);

            const label = isEnglish ? item.labelEn : item.labelNo;

            return (
              <Link
                key={item.id}
                href={baseHref}
                className={`nav-link ${isActive ? "nav-link--active" : ""}`}
              >
                {label}
              </Link>
            );
          })}

          {/* Språk-toggle med diagonalt delt flagg */}
          <button
  type="button"
  className={`nav-link lang-toggle ${
    currentLang === "en" ? "lang-toggle--en" : "lang-toggle--no"
  }`}
  onClick={handleLanguageToggle}
  aria-label={
    currentLang === "no"
      ? "Bytt språk til engelsk"
      : "Switch language to Norwegian"
  }
>
  <span className="lang-flag" aria-hidden="true">
    <span className="lang-flag-half lang-flag-half--left">
      {currentLang === "no" ? (
        <FlagNO className="lang-flag-svg" />
      ) : (
        <FlagGB className="lang-flag-svg" />
      )}
    </span>
    <span className="lang-flag-half lang-flag-half--right">
      {currentLang === "no" ? (
        <FlagGB className="lang-flag-svg" />
      ) : (
        <FlagNO className="lang-flag-svg" />
      )}
    </span>
  </span>
</button>
        </nav>

        <div className="site-nav-mobile-pill">
          <span>Nettside v1.0</span>
        </div>
      </div>
    </header>
  );
}
