export const locales = ["en", "fa"] as const;
export type Locale = (typeof locales)[number];

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export const dirFor = (locale: Locale) => (locale === "fa" ? "rtl" : "ltr");

