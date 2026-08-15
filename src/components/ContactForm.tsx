"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

export default function ContactForm({ locale }: { locale: Locale }) {
  const [state, setState] = useState<"idle" | "pending" | "success" | "error" | "not-configured">("idle");
  async function submit(formData: FormData) {
    setState("pending");
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(formData)) });
    if (response.ok) setState("success"); else { const data = await response.json().catch(() => ({})); setState(data.error === "not_configured" ? "not-configured" : "error"); }
  }
  const fa = locale === "fa";
  return (
    <form action={submit} className="contact-form">
      <input type="hidden" name="locale" value={locale} />
      <label className="honeypot">Company<input name="company" tabIndex={-1} autoComplete="off" /></label>
      <label><span>{fa ? "نام" : "Name"}</span><input required minLength={2} name="name" autoComplete="name" /></label>
      <label><span>{fa ? "ایمیل" : "Email"}</span><input required type="email" name="email" autoComplete="email" /></label>
      <label className="message-field"><span>{fa ? "پیام" : "Message"}</span><textarea required minLength={12} name="message" rows={3} /></label>
      <button className="button button-dark" disabled={state === "pending"}>{state === "pending" ? (fa ? "در حال ارسال…" : "Sending…") : (fa ? "ارسال پیام" : "Send enquiry")}</button>
      <p className="form-status" aria-live="polite">{state === "success" && (fa ? "پیام شما ارسال شد." : "Your message has been sent.")}{state === "not-configured" && (fa ? "ارسال آنلاین هنوز فعال نیست؛ لطفاً از ایمیل استفاده کنید." : "Online delivery is not configured yet; please use email.")}{state === "error" && (fa ? "ارسال انجام نشد. دوباره تلاش کنید." : "Delivery failed. Please try again.")}</p>
    </form>
  );
}

