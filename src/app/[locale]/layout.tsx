import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { profile } from "@/content/profile";
import { dirFor, isLocale, locales, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/seo";
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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  if (!isLocale(value)) return {};
  const locale = value as Locale;
  const title = profile.seo.title[locale];
  const description = profile.seo.description[locale];
  const canonical = `${siteUrl}/${locale}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical,
      languages: { en: `${siteUrl}/en`, fa: `${siteUrl}/fa`, "x-default": `${siteUrl}/en` },
    },
    openGraph: {
      type: "profile",
      url: canonical,
      title,
      description,
      locale: locale === "fa" ? "fa_IR" : "en_US",
      alternateLocale: locale === "fa" ? ["en_US"] : ["fa_IR"],
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: profile.identity.name[locale] }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
    robots: { index: true, follow: true },
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

