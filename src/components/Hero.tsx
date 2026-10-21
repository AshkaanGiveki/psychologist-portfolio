"use client";

import Image from "next/image";
import { ArrowDown, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { profile } from "@/content/profile";
import type { Locale } from "@/lib/i18n";
import { BrainLine, BotanicalLine } from "./ScientificArt";
import { MaskedHeading } from "./react-bits/MaskedHeading";
import { StrokeText } from "./react-bits/StrokeText";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLElement>(null);
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;
  const h = profile.hero;

  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (navigator.webdriver) return;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero-eyebrow", { opacity: 0, y: 8, duration: .45 }, .12)
      .from(".masked-heading > span", { yPercent: 105, duration: .8 }, .22)
      .from(".stroke-text", { opacity: 0, y: 16, duration: .75 }, .35)
      .from(".portrait-frame", { clipPath: "inset(0 0 100% 0 round 22px)", scale: 1.025, y: 16, duration: 1 }, .42)
      .from(".scientific-art path", { strokeDasharray: 600, strokeDashoffset: 600, duration: 1.1 }, .52)
      .from(".hero-copy", { opacity: 0, y: 10, duration: .55 }, .6)
      .from(".floating-card", { opacity: 0, y: 14, stagger: .1, duration: .5 }, .7)
      .from(".hero-actions > *", { opacity: 0, y: 8, stagger: .1, duration: .45 }, .82);

    gsap.to(".hero-title", { y: -18, ease: "none", scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".portrait-frame", { y: -26, ease: "none", scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".sage-plane", { y: 12, ease: "none", scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true } });

    if (matchMedia("(pointer: fine) and (min-width: 900px)").matches) {
      const portraitX = gsap.quickTo(".portrait-frame", "x", { duration: .7, ease: "power3.out" });
      const portraitY = gsap.quickTo(".portrait-frame", "y", { duration: .7, ease: "power3.out" });
      const artX = gsap.quickTo(".scientific-art", "x", { duration: .7, ease: "power3.out" });
      const artY = gsap.quickTo(".scientific-art", "y", { duration: .7, ease: "power3.out" });
      const onMove = (e: PointerEvent) => { const x = e.clientX / innerWidth - .5; const y = e.clientY / innerHeight - .5; portraitX(x * 4); portraitY(y * 4); artX(x * 12); artY(y * 12); };
      ref.current?.addEventListener("pointermove", onMove);
      return () => ref.current?.removeEventListener("pointermove", onMove);
    }
  }, { scope: ref });

  return (
    <section id="home" ref={ref} className="hero section-shell">
      <div className="hero-grid">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">{h.eyebrow[locale]}</p>
          <h1 className="hero-title">
            <MaskedHeading>{h.lead[locale]}</MaskedHeading>
            <StrokeText>{h.stroke[locale]}</StrokeText>
          </h1>
          <p className="hero-copy">{h.body[locale]}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">{h.primaryCta[locale]}<Arrow size={17} /></a>
            <a className="text-button" href="/cv/haniyeh-ahmadi-cv.pdf" download><ArrowDown size={18} />{h.secondaryCta[locale]}</a>
          </div>
          <div className="hero-credential"><span className="mini-portrait"><Image src="/images/haniyeh/source.jpg" alt="" fill sizes="48px" /></span><span>{locale === "fa" ? "دکترای علوم شناختی · روان‌شناسی بالینی · دانشگاه تهران" : "Ph.D. Cognitive Science · Clinical psychology · University of Tehran"}</span></div>
        </div>
        <div className="hero-visual">
          <div className="sage-plane" />
          <div className="portrait-frame">
            <picture><source media="(max-width: 720px)" srcSet="/images/haniyeh/hero-mobile.webp" /><Image src="/images/haniyeh/hero-desktop.webp" alt={locale === "fa" ? "پرتره حرفه‌ای هانیه احمدی" : "Professional portrait of Haniyeh Ahmadi"} fill priority sizes="(max-width: 720px) 90vw, 56vw" /></picture>
          </div>
          <BrainLine className="scientific-art brain-art" />
          <BotanicalLine className="scientific-art botanical-art" />
          <aside className="floating-card focus-card"><span className="brain-medallion">⌁</span><h2>{h.focusLabel[locale]}</h2><ul>{h.focus.map(item => <li key={item.en}>{item[locale]}</li>)}</ul></aside>
          <div className="floating-card micro-card"><BrainLine /><span>{h.micro[locale]}</span></div>
        </div>
      </div>
    </section>
  );
}
