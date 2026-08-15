import { Atom, Heart, MagnifyingGlass, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/content/profile";
import type { Locale } from "@/lib/i18n";
import { BotanicalLine } from "./ScientificArt";
import IntroVideo from "./IntroVideo";
import { ScrollReveal } from "./motion/ScrollReveal";

const icons = [Atom, Heart, UsersThree, MagnifyingGlass];

export default function About({ locale }: { locale: Locale }) {
  const a = profile.about;
  return (
    <section id="about" className="about section bordered-section">
      <div className="section-shell about-grid">
        <ScrollReveal className="about-copy">
          <p className="eyebrow">{a.eyebrow[locale]}</p>
          <h2 className="section-title">{a.title[locale]}</h2>
          <p>{a.body[locale]}</p>
        </ScrollReveal>
        <ScrollReveal className="video-wrap"><IntroVideo locale={locale} /></ScrollReveal>
        <ScrollReveal className="principles" stagger={.09}>
          {a.principles.map((item, index) => { const Icon = icons[index]; return <div className="principle" key={item.en}><span><Icon size={22} weight="thin" /></span><p>{item[locale]}</p></div>; })}
        </ScrollReveal>
        <BotanicalLine className="about-botanical" />
      </div>
    </section>
  );
}

