import Reveal from "./Reveal";

export default function Story() {
  return (
    <section id="story" className="scroll-mt-20 overflow-hidden border-t border-ink/10 bg-card/60" aria-labelledby="story-h">
      <div className="container grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-2xl bg-stone">
            <img
              src="/images/interior-2.jpg"
              alt="Warm restaurant dining room with set tables and glowing open kitchen"
              width={1280}
              height={853}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.14em] text-muted">
            The room, set for the evening — illustrative photography
          </p>
        </Reveal>
        <Reveal>
          <p className="eyebrow">Our story</p>
          <h2 id="story-h" className="mt-3 text-[clamp(1.9rem,3.5vw+1rem,3rem)]">
            A private house with the soul of a French table.
          </h2>
          <div className="mt-5 grid gap-5 text-[1.05rem] leading-relaxed text-ink-soft">
            <p>
              Àmú is a small, deliberate room in Gulberg II — set for a few guests at a
              time, paced like a dinner in someone&apos;s home rather than a busy floor.
            </p>
            <p>
              Evenings are built around a chef&apos;s tasting; weekends add a slower
              brunch. Menus follow the season — call ahead and we&apos;ll confirm
              what&apos;s on.
            </p>
          </div>
          <p className="mt-5 border-l-2 border-brass pl-4 text-[0.95rem] italic text-ink-soft">
            As noted in 2018 press: a 1970s Gulberg house, side entrance with a
            gold-plated Àmú plaque, and stacked apples scenting the shelves —
            “entering their own house.”
          </p>
          <dl className="mt-8 grid grid-cols-3 gap-4" aria-label="House notes">
            {[
              ["Intimate", "Limited seats, unhurried courses."],
              ["Considered", "Few dishes, done properly."],
              ["Personal", "Every table confirmed directly."],
            ].map(([t, d]) => (
              <div key={t} className="glass rounded-2xl p-5">
                <p className="font-display text-xl">{t}</p>
                <p className="mt-1 text-sm text-muted">{d}</p>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
