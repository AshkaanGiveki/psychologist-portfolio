"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

const links = {
  en: [["Home", "home"], ["About", "about"], ["Experience", "experience"], ["Research", "research"], ["Work", "work"], ["Methods", "methods"], ["Contact", "contact"]],
  fa: [["خانه", "home"], ["درباره", "about"], ["تجربه", "experience"], ["پژوهش", "research"], ["فعالیت‌ها", "work"], ["روش‌ها", "methods"], ["تماس", "contact"]],
} as const;

export default function Header({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;
  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 24);
    onScroll(); addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <a href="#home" className="brand" aria-label="Haniyeh Ahmadi home"><span>H<small>A</small></span><b>{locale === "fa" ? "هانیه احمدی" : "Haniyeh Ahmadi"}</b></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links[locale].map(([label, id], i) => <a key={id} className={i === 0 ? "active" : ""} href={`#${id}`}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <Link href={`/${locale === "fa" ? "en" : "fa"}`} className="locale-link" hrefLang={locale === "fa" ? "en" : "fa"}>{locale === "fa" ? "EN" : "فا"}</Link>
          <a href="#contact" className="connect-link">{locale === "fa" ? "شروع همکاری" : "Let’s connect"}<Arrow size={16} /></a>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <List />}</button>
        </div>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links[locale].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}</nav>}
    </header>
  );
}

