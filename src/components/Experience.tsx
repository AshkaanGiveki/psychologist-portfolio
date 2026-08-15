"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { profile } from "@/content/profile";
import type { Locale } from "@/lib/i18n";
import { BrainLine } from "./ScientificArt";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Experience({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (navigator.webdriver) return;
    const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: "top 78%", once: true } });
    tl.from(".timeline-line", { scaleX: 0, transformOrigin: locale === "fa" ? "right" : "left", duration: 1, ease: "power3.out" })
      .from(".timeline-item", { opacity: .55, y: 8, stagger: .1, duration: .55, ease: "power3.out" }, .2)
      .from(".timeline-node", { scale: .75, stagger: .1, duration: .35 }, .25);
  }, { scope: ref });

  return (
    <section id="experience" ref={ref} className="experience section bordered-section">
      <div className="section-shell">
        <div className="section-heading"><div><p className="eyebrow">{locale === "fa" ? "تجربه" : "Experience"}</p><h2 className="section-title">{locale === "fa" ? "مسیر حرفه‌ای من" : "My professional journey"}</h2></div><BrainLine /></div>
        <div className="timeline"><div className="timeline-line" />{profile.experience.map(item => <article className="timeline-item" key={item.date.en}><span className="timeline-node" /><time>{item.date[locale]}</time><h3>{item.role[locale]}</h3><h4>{item.place[locale]}</h4><p>{item.detail[locale]}</p></article>)}</div>
      </div>
    </section>
  );
}
