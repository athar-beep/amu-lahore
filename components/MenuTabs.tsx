"use client";
import { useState } from "react";
import { BRUNCH_ITEMS, SITE } from "@/lib/site";
import ReserveButton from "./ReserveButton";
import Reveal from "./Reveal";

const TABS = [
  { id: "tasting", label: "Friday–Saturday · Chef's Tasting" },
  { id: "brunch", label: "Saturday–Sunday · Brunch" },
] as const;

export default function MenuTabs() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("tasting");

  return (
    <section id="menus" className="scroll-mt-20 bg-ink text-cream" aria-labelledby="menus-h">
      <div className="container py-16 md:py-24">
        <Reveal>
          <p className="eyebrow !text-brass">Menus</p>
          <h2 id="menus-h" className="mt-3 max-w-[20ch] text-[clamp(1.9rem,3.5vw+1rem,3rem)]">
            Two services. Nothing else on the table.
          </h2>
          <p className="mt-3 max-w-[62ch] text-cream/75">
            Exact dishes and prices change with the season. Photographs show the style —
            call to confirm what&apos;s on before you visit.
          </p>
        </Reveal>

        <div role="tablist" aria-label="Services" className="mt-8 flex flex-wrap gap-2">
          {TABS.map((t) => {
            const selected = tab === t.id;
            return (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={selected}
                aria-controls={`panel-${t.id}`}
                onClick={() => setTab(t.id)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                    e.preventDefault();
                    setTab(tab === "tasting" ? "brunch" : "tasting");
                  }
                }}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  selected ? "bg-cream text-ink" : "border border-cream/30 text-cream hover:border-cream"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} className="mt-8">
          {tab === "tasting" ? (
            <div className="glass-dark grid gap-0 overflow-hidden rounded-3xl lg:grid-cols-2">
              <div className="relative min-h-72 lg:min-h-full">
                <img
                  src="/images/hero-table.jpg"
                  alt="Candlelit fine-dining table with a plated dish being served"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-8 md:p-10">
                <p className="font-display text-2xl">Chef&apos;s tasting</p>
                <p className="mt-2 text-cream/75">
                  A set progression served Friday and Saturday evenings — paced like a
                  dinner in someone&apos;s home. Courses are confirmed when you enquire;
                  the menu is written for print only once the restaurant approves it.
                </p>
                <ul className="mt-6 space-y-3 text-cream/85">
                  <li className="hairline !border-cream/15 pt-3">Course details — to be confirmed</li>
                  <li className="hairline !border-cream/15 pt-3">Price — to be confirmed</li>
                  <li className="hairline !border-cream/15 pt-3">Dietary / allergen notes — ask on call</li>
                </ul>
                <div className="no-print mt-8 flex flex-wrap gap-3">
                  <ReserveButton className="btn btn-glass-light !min-h-0 !px-5 !py-2.5 text-sm" />
                  <button onClick={() => window.print()} className="btn btn-glass-light !min-h-0 !px-5 !py-2.5 text-sm">
                    Print Menu
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {BRUNCH_ITEMS.map((m) => (
                  <article key={m.name} className="glass-dark group overflow-hidden rounded-2xl">
                    <div className="aspect-[16/10] overflow-hidden bg-cream/10">
                      <img
                        src={m.img}
                        alt={m.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-display text-lg leading-snug">{m.name}</h3>
                        <span className="shrink-0 text-[0.68rem] uppercase tracking-[0.14em] text-cream/55">
                          to confirm
                        </span>
                      </div>
                      {m.desc && <p className="mt-1.5 text-sm leading-relaxed text-cream/70">{m.desc}</p>}
                    </div>
                  </article>
                ))}
                <article className="glass flex flex-col justify-between rounded-2xl p-6 text-ink">
                  <div>
                    <p className="font-display text-xl">Good to know</p>
                    <ul className="mt-3 space-y-2 text-[0.95rem] text-ink-soft">
                      <li>Seasonal menu — please call to confirm.</li>
                      <li>Photos are illustrative, not the final plate.</li>
                      <li>{SITE.phoneDisplay} — we confirm every table.</li>
                    </ul>
                  </div>
                  <div className="no-print mt-6 flex flex-wrap gap-3">
                    <ReserveButton className="btn btn-glass-ink !min-h-0 !px-5 !py-2.5 text-sm" />
                    <button onClick={() => window.print()} className="btn btn-glass !min-h-0 !px-5 !py-2.5 text-sm">Print Menu</button>
                  </div>
                </article>
              </div>
              <p className="mt-4 text-sm text-cream/55">
                Dish names from the supplied brief; descriptions, availability and prices only after current-menu verification.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
