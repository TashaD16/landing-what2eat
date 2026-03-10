"use client";

import { useState, useEffect } from "react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/lang-context";
import { useTheme } from "@/lib/theme-context";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 transition-shadow",
        scrolled && "shadow-md dark:shadow-gray-800"
      )}
    >
      <div className="mx-auto max-w-6xl px-6 flex h-16 items-center justify-between">
        <a href="/" className="font-[family-name:var(--font-nunito)] text-2xl font-black text-primary">
          what2eat
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <li><a href="#features" className="hover:text-primary transition-colors">{t.nav.features}</a></li>
          <li><a href="#how-it-works" className="hover:text-primary transition-colors">{t.nav.howItWorks}</a></li>
          <li><a href="#pricing" className="hover:text-primary transition-colors">{t.nav.pricing}</a></li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-1.5 rounded text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setLang(lang === "en" ? "ru" : "en")}
            className="text-sm font-semibold text-primary border border-primary rounded px-2 py-0.5"
          >
            {lang === "en" ? "RU" : "EN"}
          </button>
          <a href="https://what2eat.com/login" className={buttonVariants({ size: "sm" })}>
            {t.nav.getStarted}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t dark:border-gray-800 bg-white dark:bg-gray-900 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700 dark:text-gray-300">
          <a href="#features" onClick={() => setMenuOpen(false)} className="hover:text-primary">{t.nav.features}</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="hover:text-primary">{t.nav.howItWorks}</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="hover:text-primary">{t.nav.pricing}</a>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-1.5 rounded text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "dark" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setLang(lang === "en" ? "ru" : "en")}
              className="text-sm font-semibold text-primary border border-primary rounded px-2 py-0.5 w-fit"
            >
              {lang === "en" ? "RU" : "EN"}
            </button>
          </div>
          <a href="https://what2eat.com/login" className={cn(buttonVariants(), "w-full text-center")}>
            {t.nav.getStarted}
          </a>
        </div>
      )}
    </nav>
  );
}
