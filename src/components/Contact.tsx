import { Envelope, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/content/profile";
import type { Locale } from "@/lib/i18n";
import { BotanicalLine } from "./ScientificArt";
import ContactForm from "./ContactForm";
import { ScrollReveal } from "./motion/ScrollReveal";

export default function Contact({ locale }: { locale: Locale }) {
  const c = profile.contact;
  return (
    <section id="contact" className="contact section bordered-section">
      <div className="section-shell contact-grid">
        <ScrollReveal className="contact-copy"><p className="eyebrow">{c.eyebrow[locale]}</p><h2 className="section-title">{c.title[locale]}</h2><p>{c.body[locale]}</p><a className="button button-dark" href={`mailto:${c.emails[0]}`}>{locale === "fa" ? "ارسال ایمیل" : "Get in touch"}</a></ScrollReveal>
        <ScrollReveal className="contact-center"><div className="contact-details"><a href={`mailto:${c.emails[0]}`}><Envelope size={19} weight="thin" /><span>{c.emails[0]}</span></a><div><MapPin size={19} weight="thin" /><span>{profile.identity.location[locale]}</span></div><a href={`tel:${c.phone.replaceAll(" ", "")}`}><Phone size={19} weight="thin" /><span dir="ltr">{c.phone}</span></a></div><ContactForm locale={locale} /></ScrollReveal>
        <ScrollReveal className="contact-quote"><BotanicalLine /><blockquote>{locale === "fa" ? "مغز، ظرفیت شگفت‌انگیزی برای سازگاری دارد؛ کار ما این است که مسیر آن را دقیق‌تر ببینیم." : "The brain has a remarkable capacity to adapt. Our work begins by understanding its path."}</blockquote><span>Haniyeh Ahmadi</span></ScrollReveal>
      </div>
    </section>
  );
}

