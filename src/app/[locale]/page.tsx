import { notFound } from "next/navigation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MethodsLogoLoop from "@/components/MethodsLogoLoop";
import SelectedWork from "@/components/SelectedWork";
import { profile } from "@/content/profile";
import { isLocale, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/seo";

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const locale = value as Locale;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: profile.identity.name.en, inLanguage: ["en", "fa"] },
      { "@type": "ProfilePage", "@id": `${siteUrl}/${locale}/#profile`, url: `${siteUrl}/${locale}`, name: profile.seo.title[locale], inLanguage: locale, mainEntity: { "@id": `${siteUrl}/#person` } },
      { "@type": "Person", "@id": `${siteUrl}/#person`, name: profile.identity.name.en, alternateName: profile.identity.name.fa, jobTitle: profile.identity.role.en, email: `mailto:${profile.contact.emails[0]}`, telephone: profile.contact.phone, alumniOf: { "@type": "CollegeOrUniversity", name: "University of Tehran" }, knowsLanguage: ["Persian", "English", "Turkish"], sameAs: profile.socials.map(s => s.href) },
    ],
  };
  return <><Header locale={locale} /><main><Hero locale={locale} /><About locale={locale} /><Experience locale={locale} /><Expertise locale={locale} /><SelectedWork locale={locale} /><MethodsLogoLoop locale={locale} /><Contact locale={locale} /></main><Footer locale={locale} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /></>;
}
