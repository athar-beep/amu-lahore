import { SITE } from "@/lib/site";
import Reveal from "./Reveal";

export default function Visit() {
  return (
    <section id="visit" className="scroll-mt-20 overflow-hidden border-t border-ink/10 bg-card/60" aria-labelledby="visit-h">
      <div className="container py-16 md:py-24">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Visit</p>
            <h2 id="visit-h" className="mt-3 text-[clamp(1.9rem,3.5vw+1rem,3rem)]">Find the house.</h2>
            <address className="mt-5 font-display text-2xl not-italic leading-snug">
              {SITE.address}
            </address>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-glass-ink">Get Directions</a>
            <a href={SITE.phoneHref} className="btn btn-glass">Call the house</a>
          </div>
          </Reveal>
          <Reveal>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/12 bg-ink/10">
              {[
                ["Tasting dinner", "Friday–Saturday"],
                ["Brunch", "Saturday–Sunday"],
                ["Exact times", "By confirmation"],
                ["Phone", SITE.phoneDisplay],
              ].map(([k, v]) => (
                <div key={k} className="bg-card p-5">
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted">{k}</dt>
                  <dd className="mt-1 font-display text-lg">
                    {k === "Phone" ? (
                      <a href={SITE.phoneHref} className="tabular-nums underline underline-offset-4">{v}</a>
                    ) : v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <Reveal className="mt-10">
          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <figure className="glass overflow-hidden rounded-2xl">
              <img
                src="/images/hero-interior.jpg"
                alt="Set restaurant dining room with tables and chairs"
                width={1920}
                height={1280}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
            <div className="glass flex flex-col justify-between rounded-2xl p-7">
              <div>
                <p className="eyebrow">Getting here</p>
                <p className="mt-2 font-display text-xl leading-snug">6-A Canal Park, Gulberg II, Lahore</p>
                <p className="mt-2 text-sm text-muted">Tap below to open directions in your maps app.</p>
              </div>
              <div className="mt-6 grid gap-2">
                <a href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-glass-ink w-full">Open in Maps</a>
                <a href={SITE.phoneHref} className="btn btn-glass w-full tabular-nums">Call {SITE.phoneDisplay}</a>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.14em] text-muted">
            Dining-room study — illustrative photography · parking, cards & dress code once confirmed
          </p>
        </Reveal>
      </div>
    </section>
  );
}
