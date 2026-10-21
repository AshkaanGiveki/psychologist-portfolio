export type Localized = { en: string; fa: string };

const l = (en: string, fa: string): Localized => ({ en, fa });

export const profile = {
  identity: {
    name: l("Haniyeh Ahmadi", "هانیه احمدی"),
    shortName: "HA",
    role: l(
      "Cognitive neuroscientist, cognitive rehabilitation specialist & clinical neuroscience researcher",
      "پژوهشگر علوم اعصاب شناختی و متخصص بازتوانی شناختی",
    ),
    location: l("Tehran, Iran", "تهران، ایران"),
  },
  hero: {
    eyebrow: l("Cognitive neuroscience, assessment & rehabilitation", "علوم اعصاب شناختی، ارزیابی و بازتوانی"),
    lead: l("From brain\ninsights", "از شناخت مغز"),
    stroke: l("to better\nlives.", "تا زندگی بهتر"),
    body: l(
      "I am a cognitive neuroscientist and cognitive rehabilitation specialist connecting clinical assessment, brain mapping, EEG/ERP and evidence-informed rehabilitation across neurological and mental-health settings in Tehran.",
      "من پژوهشگر علوم اعصاب شناختی و متخصص بازتوانی شناختی هستم و ارزیابی بالینی، نقشه‌برداری مغز، EEG/ERP و بازتوانی مبتنی بر شواهد را در حوزه سلامت مغز و روان در تهران به هم پیوند می‌دهم.",
    ),
    primaryCta: l("Explore my work", "مرور فعالیت‌ها"),
    secondaryCta: l("Download CV", "دریافت رزومه"),
    focusLabel: l("Focus areas", "حوزه‌های تمرکز"),
    focus: [
      l("EEG / ERP", "EEG / ERP"),
      l("Neuromodulation", "تحریک غیرتهاجمی مغز"),
      l("Cognitive rehabilitation", "بازتوانی شناختی"),
      l("Aging & cognition", "سالمندی و شناخت"),
    ],
    micro: l("Research and clinical practice", "پژوهش و کار بالینی"),
  },
  about: {
    eyebrow: l("About me", "درباره من"),
    title: l(
      "Turning careful observation into meaningful care",
      "از مشاهده‌ی دقیق تا مراقبتی معنادار",
    ),
    body: l(
      "I am a cognitive neuroscientist and cognitive rehabilitation specialist with a background in clinical psychology and cognitive science. My work spans EEG and ERP recording and interpretation, QEEG-informed brain mapping, psychometric and cognitive assessment, neuromodulation, and the design of individualized cognitive rehabilitation protocols.",
      "مسیر حرفه‌ای من از روان‌شناسی بالینی آغاز شد و در علوم اعصاب شناختی و بازتوانی شناختی ادامه پیدا کرد. امروز در زمینه ثبت و تفسیر EEG و ERP، نقشه مغزی مبتنی بر QEEG، ارزیابی شناختی و روان‌سنجی، نورومدولیشن و طراحی پروتکل‌های فردمحور بازتوانی شناختی فعالیت می‌کنم.",
    ),
    principles: [
      l("Evidence-informed practice", "کار مبتنی بر شواهد"),
      l("Human-centered rehabilitation", "بازتوانی انسان‌محور"),
      l("Interdisciplinary thinking", "نگاه میان‌رشته‌ای"),
      l("Careful assessment", "ارزیابی دقیق"),
    ],
    videoTitle: l("Introduction portrait", "معرفی هانیه احمدی"),
    videoUnavailable: l("Introduction video coming soon", "ویدئوی معرفی به‌زودی"),
  },
  education: [
    {
      date: l("2022–Present", "۱۴۰۱–اکنون"),
      degree: l("Ph.D. Cognitive Science", "دکترای علوم شناختی"),
      place: l("University of Tehran", "دانشگاه تهران"),
      detail: l(
        "Doctoral studies in cognitive science, with a focus on cognitive assessment, brain mapping and rehabilitation.",
        "تحصیل در مقطع دکترا در رشته علوم شناختی با تمرکز بر ارزیابی شناختی، نقشه‌برداری مغز و بازتوانی.",
      ),
    },
    {
      date: l("2019–2022", "۱۳۹۸–۱۴۰۱"),
      degree: l("M.Sc. Cognitive Science — Cognitive Rehabilitation", "کارشناسی ارشد علوم شناختی — بازتوانی شناختی"),
      place: l("University of Tehran", "دانشگاه تهران"),
      detail: l(
        "Thesis compared TMS with and without cognitive rehabilitation in patients with bipolar disorder.",
        "پایان‌نامه با موضوع مقایسه‌ی اثربخشی TMS با و بدون بازتوانی شناختی در افراد مبتلا به اختلال دوقطبی.",
      ),
    },
    {
      date: l("2014–2018", "۱۳۹۳–۱۳۹۷"),
      degree: l("B.Sc. Clinical Psychology", "کارشناسی روان‌شناسی بالینی"),
      place: l("University of Tehran", "دانشگاه تهران"),
      detail: l(
        "Project on memory and executive function across the transition from adulthood to old age.",
        "پروژه‌ای درباره‌ی حافظه و کارکردهای اجرایی در گذار از بزرگسالی به سالمندی.",
      ),
    },
  ],
  experience: [
    {
      date: l("Apr 2024 — Present", "فروردین ۱۴۰۳ — اکنون"),
      role: l("Research Assistant", "دستیار پژوهشی"),
      place: l("Institute for Research in Fundamental Sciences (IPM)", "پژوهشگاه دانش‌های بنیادی (IPM)"),
      detail: l(
        "Researching 40 Hz tACS protocols using anterior-posterior and bihemispheric prefrontal montages in healthy older adults.",
        "همکاری در پژوهش پروتکل ۴۰ هرتز tACS با مونتاژهای پیشانی پس‌سری و پیش‌پیشانی دو‌نیم‌کره‌ای در سالمندان سالم.",
      ),
    },
    {
      date: l("Nov 2023 — Present", "آبان ۱۴۰۲ — اکنون"),
      role: l("Psychologist", "روان‌شناس"),
      place: l("Shahriar Residential Mental Health Treatment Center", "مرکز درمان و نگهداری سلامت روان شهریار"),
      detail: l(
        "Providing cognitive rehabilitation to support patients’ cognitive performance.",
        "ارائه‌ی بازتوانی شناختی با هدف بهبود عملکرد شناختی مراجعان.",
      ),
    },
    {
      date: l("Feb 2022 — Present", "بهمن ۱۴۰۰ — اکنون"),
      role: l("Head of Brain Mapping, Diagnosis & Assessment", "مدیر بخش نقشه مغزی، تشخیص و ارزیابی"),
      place: l("Atieh Clinical Neuroscience Center", "مرکز علوم اعصاب بالینی آتیه"),
      detail: l(
        "Developing and applying rTMS, tDCS and cognitive-training protocols informed by QEEG and psychometric assessment.",
        "طراحی و اجرای پروتکل‌های rTMS، tDCS و تمرین شناختی با تکیه بر QEEG و ارزیابی‌های روان‌سنجی.",
      ),
    },
    {
      date: l("2019 — 2022", "۱۳۹۸ — ۱۴۰۱"),
      role: l("EEG/ERP Technician, Analyst & Lab Manager", "تکنسین و تحلیل‌گر EEG/ERP و مدیر اجرایی آزمایشگاه"),
      place: l("Atieh Clinical Neuroscience Center", "مرکز علوم اعصاب بالینی آتیه"),
      detail: l(
        "Recorded and analyzed EEG/ERP data, reviewed clinical reports, trained recording staff and supported laboratory equipment and R&D work.",
        "ثبت و تحلیل داده‌های EEG/ERP، مرور گزارش‌های بالینی، آموزش نیروهای ثبت سیگنال و پشتیبانی فنی و پژوهشی آزمایشگاه.",
      ),
    },
  ],
  researchAreas: [
    { key: "eeg", title: l("EEG / ERP", "EEG / ERP"), text: l("Recording, preprocessing, analysis and clinical interpretation.", "ثبت، پیش‌پردازش، تحلیل و تفسیر بالینی سیگنال.") },
    { key: "signal", title: l("Neuromodulation", "تحریک مغزی"), text: l("rTMS, TMS, tDCS and tACS protocols in clinical and research settings.", "کار با پروتکل‌های rTMS، TMS، tDCS و tACS در درمان و پژوهش.") },
    { key: "brain", title: l("Brain Mapping", "نقشه‌برداری مغز"), text: l("QEEG-informed assessment and treatment planning.", "ارزیابی و برنامه‌ریزی درمان با تکیه بر QEEG.") },
    { key: "rehab", title: l("Rehabilitation", "بازتوانی شناختی"), text: l("Cognitive training and individualized rehabilitation protocols.", "تمرین‌های شناختی و طراحی پروتکل متناسب با نیاز فرد.") },
    { key: "aging", title: l("Aging & Cognition", "سالمندی و شناخت"), text: l("Memory, executive function and cognitive support in later life.", "حافظه، کارکردهای اجرایی و حمایت شناختی در سالمندی.") },
  ],
  selectedWork: [
    {
      type: l("Master’s thesis", "پایان‌نامه‌ی کارشناسی ارشد"),
      title: l("TMS with and without cognitive rehabilitation in bipolar disorder", "TMS با و بدون بازتوانی شناختی در اختلال دوقطبی"),
      meta: l("University of Tehran · 2019–2022", "دانشگاه تهران · ۱۳۹۸–۱۴۰۱"),
      icon: "rings",
    },
    {
      type: l("Research project", "پروژه‌ی پژوهشی"),
      title: l("40 Hz tACS montages in healthy older adults", "بررسی مونتاژهای ۴۰ هرتز tACS در سالمندان سالم"),
      meta: l("IPM · 2024–Present", "پژوهشگاه دانش‌های بنیادی · ۱۴۰۳–اکنون"),
      icon: "wave",
    },
    {
      type: l("Applied EEG project", "پروژه‌ی کاربردی EEG"),
      title: l("Wearable EEG for real-time driver drowsiness detection", "EEG پوشیدنی برای تشخیص برخط خواب‌آلودگی راننده"),
      meta: l("Bonda Innovation Center · 2022", "مرکز نوآوری بُندا · ۱۴۰۰–۱۴۰۱"),
      icon: "profile",
    },
  ],
  tools: ["EEG", "ERP", "QEEG", "rTMS", "tDCS", "tACS", "MATLAB", "R", "SPSS", "EEGLAB", "ERPLAB", "Neuroguide", "WinEEG", "EEG Studio", "CANTAB", "RehaCom"],
  publications: [],
  contact: {
    eyebrow: l("Let’s work together", "برای همکاری"),
    title: l("Better outcomes begin with careful understanding.", "نتیجه‌ی بهتر، از فهم دقیق آغاز می‌شود."),
    body: l(
      "I welcome thoughtful research, clinical and interdisciplinary conversations.",
      "برای گفت‌وگو درباره‌ی همکاری‌های پژوهشی، بالینی و میان‌رشته‌ای در دسترس هستم.",
    ),
    emails: ["ahmadi.hanie@alumni.ut.ac.ir", "ahmadi.hanie123@gmail.com"],
    phone: "+98 936 923 9161",
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/haniyeh-ahmadi-segazi" },
  ],
  seo: {
    title: l("Haniyeh Ahmadi | Cognitive Neuroscientist & Cognitive Rehabilitation Specialist", "هانیه احمدی | پژوهشگر علوم اعصاب شناختی و متخصص بازتوانی شناختی"),
    description: l(
      "Official portfolio of Haniyeh Ahmadi, a cognitive neuroscientist and cognitive rehabilitation specialist in Tehran working across EEG/ERP, QEEG brain mapping, cognitive assessment, psychometrics, neuromodulation and evidence-informed rehabilitation.",
      "وب‌سایت رسمی هانیه احمدی، پژوهشگر علوم اعصاب شناختی و متخصص بازتوانی شناختی در تهران؛ فعال در حوزه‌های نقشه مغزی و QEEG، EEG/ERP، ارزیابی شناختی و روان‌سنجی، نورومدولیشن و بازتوانی مبتنی بر شواهد.",
    ),
  },
} as const;

export type Profile = typeof profile;

