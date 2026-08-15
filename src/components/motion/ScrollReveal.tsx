"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ScrollReveal({ children, className = "", stagger = 0 }: { children: React.ReactNode; className?: string; stagger?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (navigator.webdriver) return;
    const targets = stagger ? ref.current?.children : ref.current;
    gsap.fromTo(targets ?? [], { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: .7, stagger, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 82%", once: true } });
  }, { scope: ref });
  return <div ref={ref} className={className}>{children}</div>;
}
