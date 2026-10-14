"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { SITE, whatsappLink } from "@/lib/site";

type Errors = Partial<Record<"name" | "phone" | "service" | "date" | "guests", string>>;

/**
 * Reservation enquiry as a glass dialog (opened from any Reserve CTA),
 * keeping the page itself clean. Same validated WhatsApp hand-off as before:
 * nothing books automatically; the house confirms every table.
 */
export default function ReserveDialog() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "Chef's tasting — Fri–Sat", date: "", time: "", guests: "2", notes: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onOpen = () => {
      setOpen(true);
      setSent(false);
    };
    window.addEventListener("amu:reserve", onOpen);
    return () => window.removeEventListener("amu:reserve", onOpen);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  function set<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function validate(): Errors {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Please add your full name.";
    if (!/^[+\d][\d\s-]{6,15}$/.test(form.phone.trim())) e.phone = "Add a reachable phone, e.g. 0300-1234567.";
    if (!form.service) e.service = "Choose a service.";
    if (!form.date) e.date = "Pick a preferred date.";
    const g = Number(form.guests);
    if (!Number.isFinite(g) || g < 1 || g > 20) e.guests = "Guests must be 1–20. For larger parties, call us.";
    return e;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    const msg =
      `Assalam-o-Alaikum Àmú Lahore, I'd like to enquire about a table. ` +
      `Name: ${form.name.trim()}. Phone: ${form.phone.trim()}. ` +
      `Service: ${form.service}. Preferred date: ${form.date}. ` +
      `Preferred time: ${form.time || "flexible"}. Guests: ${form.guests}. ` +
      `Notes: ${form.notes.trim() || "—"}. ` +
      `Please let me know whether you have availability. Thank you.`;
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (!open) return null;

  const field = (id: string, label: string, control: React.ReactNode, err?: string) => (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">{label}</label>
      {control}
      {err && <p role="alert" className="mt-1 text-sm font-medium text-[#991b1b]">{err}</p>}
    </div>
  );

  return (
    <div
      className="no-print fixed inset-0 z-[90] flex items-end justify-center bg-ink/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="reserve-h"
        className="glass max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-t-3xl p-6 sm:rounded-3xl md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">Reservation enquiry</p>
            <h2 id="reserve-h" className="mt-1 font-display text-3xl text-ink">Ask for a table.</h2>
          </div>
          <button ref={closeRef} onClick={close} className="btn btn-glass !min-h-0 !px-4 !py-2 text-sm" aria-label="Close reservation dialog">
            Close
          </button>
        </div>
        <p className="mt-3 text-[0.95rem] text-ink-soft">
          This sends an enquiry over WhatsApp — it does not book automatically.
          Prefer to talk? <a href={SITE.phoneHref} className="font-semibold tabular-nums underline underline-offset-4">{SITE.phoneDisplay}</a>
        </p>
        {sent && (
          <p role="status" className="mt-4 rounded-2xl border border-olive/30 bg-olive/10 p-4 text-[0.95rem] text-ink">
            WhatsApp should have opened with your enquiry. If it didn&apos;t, call{" "}
            <a className="font-semibold underline" href={SITE.phoneHref}>{SITE.phoneDisplay}</a> and we&apos;ll take it from there.
          </p>
        )}
        <form onSubmit={onSubmit} noValidate className="mt-5" aria-describedby="reserve-help">
          <p id="reserve-help" className="text-sm text-muted">
            Pressing “Send via WhatsApp” opens WhatsApp with your message — you still need to press send there.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {field("r-name", "Full name",
              <input id="r-name" className="field" autoComplete="name" value={form.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name} />, errors.name)}
            {field("r-phone", "Phone",
              <input id="r-phone" className="field tabular-nums" autoComplete="tel" inputMode="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} aria-invalid={!!errors.phone} />, errors.phone)}
            {field("r-service", "Service",
              <select id="r-service" className="field" value={form.service} onChange={(e) => set("service", e.target.value)}>
                <option>Chef&apos;s tasting — Fri–Sat</option>
                <option>Brunch — Sat–Sun</option>
              </select>, errors.service)}
            {field("r-guests", "Guests (1–20)",
              <input id="r-guests" className="field tabular-nums" inputMode="numeric" value={form.guests} onChange={(e) => set("guests", e.target.value)} aria-invalid={!!errors.guests} />, errors.guests)}
            {field("r-date", "Preferred date",
              <input id="r-date" type="date" className="field" value={form.date} onChange={(e) => set("date", e.target.value)} aria-invalid={!!errors.date} />, errors.date)}
            {field("r-time", "Preferred time (optional)",
              <input id="r-time" type="time" className="field" value={form.time} onChange={(e) => set("time", e.target.value)} />)}
            <div className="sm:col-span-2">
              {field("r-notes", "Occasion / dietary note (optional)",
                <textarea id="r-notes" className="field min-h-20" value={form.notes} onChange={(e) => set("notes", e.target.value)} />)}
            </div>
          </div>
          <button type="submit" className="btn btn-glass-ink mt-5 w-full">Send via WhatsApp</button>
          <p className="mt-3 text-center text-sm text-muted">No details are stored here. Nothing is confirmed until the house replies.</p>
        </form>
      </div>
    </div>
  );
}
