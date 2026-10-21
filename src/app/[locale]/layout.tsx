import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { profile } from "@/content/profile";
import { dirFor, isLocale, locales, type Locale } from "@/lib/i18n";
import { seoKeywords, siteUrl } from "@/lib/seo";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = { themeColor: "#f6f1e8" };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  if (!isLocale(value)) return {};
  const locale = value as Locale;
  const title = profile.seo.title[locale];
  const description = profile.seo.description[locale];
  const canonical = `${siteUrl}/${locale}`;
  const keywords = seoKeywords[locale];

  return {
    metadataBase: new URL(siteUrl),
    applicationName: "Haniyeh Ahmadi",
    title,
    description,
    keywords: [...keywords],
    authors: [{ name: "Haniyeh Ahmadi", url: `${siteUrl}/${locale}` }],
    creator: "Haniyeh Ahmadi",
    publisher: "Haniyeh Ahmadi",
    category: locale === "fa" ? "علوم اعصاب شناختی و روانشناسی" : "Cognitive neuroscience and psychology",
    classification: "Professional portfolio and research profile",
    icons: { icon: "/images/haniyeh/Logo.ico" },
    alternates: {
      canonical,
      languages: { en: `${siteUrl}/en`, fa: `${siteUrl}/fa`, "x-default": `${siteUrl}/en` },
    },
    openGraph: {
      type: "profile",
      url: canonical,
      siteName: "Haniyeh Ahmadi",
      title,
      description,
      locale: locale === "fa" ? "fa_IR" : "en_US",
      alternateLocale: locale === "fa" ? ["en_US"] : ["fa_IR"],
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: profile.identity.name[locale] }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  return (
    <html lang={value} dir={dirFor(value)}>
      <body className={value === "fa" ? "font-fa" : "font-en"}>{children}</body>
    </html>
  );
}

