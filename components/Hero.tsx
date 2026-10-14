import { HERO_SLIDES, SITE } from "@/lib/site";
import ReserveButton from "./ReserveButton";

/**
 * Cinematic hero: three photographic layers in a continuous 30s crossfade,
 * each drifting at its own rate (transform/opacity only). Reduced-motion
 * visitors get the single opening frame, static.
 */
export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink" aria-labelledby="hero-h">
      <div className="absolute inset-0" aria-hidden="true">
        {HERO_SLIDES.map((s, i) => (
          <div key={s.src} className="hero-slide" data-i={i}>
            <img
              src={s.src}
              alt=""
              width={s.width}
              height={s.height}
              style={{ objectPosition: s.position }}
              fetchPriority={i === 0 ? "high" : undefined}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
        {/* Neutral legibility scrims only (imagery skill §6): lower-third fade + soft top for header. */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/30" />
      </div>

      <div className="container relative pb-24 pt-16 md:pb-28">
        <p className="hero-enter text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cream/85">
          Gulberg II · Lahore
        </p>
        <h1
          id="hero-h"
          className="hero-enter-2 mt-4 max-w-[14ch] font-display text-cream text-[clamp(2.6rem,7vw+1rem,5.2rem)] leading-[1.02]"
        >
          Less is More.{" "}
          <em className="hero-title-accent not-italic font-semibold">It&apos;s All About Food.</em>
        </h1>
        <p className="hero-enter-3 mt-5 max-w-[54ch] text-lg text-cream/85">{SITE.heroSub}</p>
        <div className="hero-enter-3 mt-8 flex flex-wrap gap-3">
          <ReserveButton className="btn btn-glass-light" />
          <a
            href="#menus"
            className="btn btn-glass-light"
          >
            Explore the Menus
          </a>
        </div>
        <p className="hero-enter-3 mt-6 text-[0.95rem] text-cream/75">
          <a className="font-semibold text-cream underline underline-offset-4 tabular-nums" href={SITE.phoneHref}>
            {SITE.phoneDisplay}
          </a>
          <span className="mx-2" aria-hidden="true">·</span>
          {SITE.servicePattern}
        </p>
        <p className="mt-8 text-xs uppercase tracking-[0.14em] text-cream/50">
          Illustrative photography — Àmú&apos;s room & dishes confirmed on enquiry
        </p>
      </div>
    </section>
  );
}
