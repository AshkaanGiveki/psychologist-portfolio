import { Brain, ChartPolar, FlowerLotus, Pulse, WaveSine } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/content/profile";
import type { Locale } from "@/lib/i18n";
import { ScrollReveal } from "./motion/ScrollReveal";

const icons = [WaveSine, Pulse, Brain, FlowerLotus, ChartPolar];

export default function Expertise({ locale }: { locale: Locale }) {
  return (
    <section id="research" className="expertise section bordered-section">
      <div className="section-shell expertise-layout">
        <div className="side-heading"><p className="eyebrow">{locale === "fa" ? "تمرکز پژوهشی" : "Research focus"}</p><h2 className="section-title">{locale === "fa" ? "حوزه‌های تخصص" : "Areas of expertise"}</h2><span /></div>
        <ScrollReveal className="expertise-grid" stagger={.08}>
          {profile.researchAreas.map((item, index) => { const Icon = icons[index]; return <article className="expertise-card" key={item.key}><Icon className="domain-icon" size={42} weight="thin" /><h3>{item.title[locale]}</h3><p>{item.text[locale]}</p></article>; })}
        </ScrollReveal>
      </div>
    </section>
  );
}
