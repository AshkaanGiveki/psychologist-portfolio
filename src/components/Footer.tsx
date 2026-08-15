import { ArrowUp, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/content/profile";
import type { Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  return <footer className="footer"><div className="section-shell footer-inner"><a href="#home" className="footer-brand"><b>HA</b><span>{profile.identity.name[locale]}</span></a><p>© {new Date().getFullYear()} {profile.identity.name[locale]}</p><div className="footer-actions">{profile.socials.map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}><LinkedinLogo size={18} /></a>)}<a href="#home" aria-label={locale === "fa" ? "بازگشت به بالا" : "Back to top"}><ArrowUp size={17} /></a></div></div></footer>;
}

