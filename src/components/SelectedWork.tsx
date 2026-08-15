import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/content/profile";
import type { Locale } from "@/lib/i18n";
import { ScrollReveal } from "./motion/ScrollReveal";
import { WorkArt } from "./ScientificArt";

export default function SelectedWork({ locale }: { locale: Locale }) {
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;
  return (
    <section id="work" className="work section bordered-section">
      <div className="section-shell">
        <div className="work-heading"><div><p className="eyebrow">{locale === "fa" ? "فعالیت‌های منتخب" : "Selected work"}</p><h2 className="section-title">{locale === "fa" ? "پژوهش‌ها و پروژه‌ها" : "Research & projects"}</h2></div><p>{locale === "fa" ? "گزیده‌ای از موضوعاتی که در پژوهش و کار حرفه‌ای دنبال کرده‌ام." : "A factual selection from academic and applied work."}</p></div>
        <ScrollReveal className="work-grid" stagger={.09}>
          {profile.selectedWork.map(item => <article className="work-card" key={item.title.en}><div className="work-copy"><span>{item.type[locale]}</span><h3>{item.title[locale]}</h3><p>{item.meta[locale]}</p></div><div className="work-art"><WorkArt kind={item.icon} /></div><span className="circle-arrow"><Arrow size={16} /></span></article>)}
        </ScrollReveal>
      </div>
    </section>
  );
}

