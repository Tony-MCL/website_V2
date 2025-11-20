"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const LANG_STORAGE_KEY = "mcl-lang";

export function LanguageBootstrap() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Kun første side /, ikke rør undersider
    if (pathname !== "/") return;

    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (stored === "en") {
      // Bruker har valgt engelsk tidligere
      router.replace("/en");
      return;
    }
    if (stored === "no") {
      // Bruker har valgt norsk tidligere – gjør ingenting
      return;
    }

    // Ingen lagret preferanse → bruk nettleserspråk
    const navLang =
      navigator.language ||
      (navigator.languages && navigator.languages[0]) ||
      "";

    if (navLang.toLowerCase().startsWith("en")) {
      window.localStorage.setItem(LANG_STORAGE_KEY, "en");
      router.replace("/en");
    } else {
      window.localStorage.setItem(LANG_STORAGE_KEY, "no");
    }
  }, [pathname, router]);

  return null;
}
