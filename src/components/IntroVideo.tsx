"use client";

import Image from "next/image";
import { Play } from "@phosphor-icons/react";
import type { Locale } from "@/lib/i18n";
import { profile } from "@/content/profile";

export default function IntroVideo({ locale }: { locale: Locale }) {
  const label = profile.about.videoUnavailable[locale];
  return (
    <figure className="intro-video" aria-label={profile.about.videoTitle[locale]}>
      <Image src="/images/haniyeh/intro-poster.webp" alt={profile.about.videoTitle[locale]} fill sizes="(max-width: 800px) 100vw, 42vw" />
      <button className="play-button" type="button" disabled title={label} aria-label={label}><Play size={30} weight="fill" /></button>
      <figcaption><span>00:00</span><span className="video-track" /><span>{locale === "fa" ? "ویدئو موجود نیست" : "Poster preview"}</span></figcaption>
    </figure>
  );
}

