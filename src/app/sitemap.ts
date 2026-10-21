import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/seo";

const lastModified = new Date("2026-10-21T00:00:00.000Z");
const languageAlternates = {
  en: `${siteUrl}/en`,
  fa: `${siteUrl}/fa`,
  "x-default": `${siteUrl}/en`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: { languages: languageAlternates },
  }));
}

