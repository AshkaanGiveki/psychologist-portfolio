import { profile } from "@/content/profile";
import type { Locale } from "@/lib/i18n";
import { LogoLoop } from "./react-bits/LogoLoop";

export default function MethodsLogoLoop({ locale }: { locale: Locale }) {
  const title = locale === "fa" ? "روش‌ها، فناوری‌ها و ابزارها" : "Methods, technologies & tools";
  return <section id="methods" className="methods bordered-section"><div className="section-shell"><p className="eyebrow">{title}</p><LogoLoop items={profile.tools} label={title} /><p className="methods-note">{locale === "fa" ? "سنجش · تحلیل · مداخله" : "Assessing · Analysing · Intervening"}</p></div></section>;
}

