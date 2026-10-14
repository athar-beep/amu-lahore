import Reveal from "./Reveal";

export default function Chef() {
  return (
    <section id="chef" className="scroll-mt-20 overflow-hidden border-t border-ink/10 bg-ink text-cream" aria-labelledby="chef-h">
      <div className="container grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow !text-brass">Chef & sourcing</p>
          <h2 id="chef-h" className="mt-3 text-[clamp(1.9rem,3.5vw+1rem,3rem)]">
            Shahnawaz Khan & Shah Ali
          </h2>
          <p className="mt-4 max-w-[56ch] text-lg text-cream/80">
            The kitchen is led by brothers Shahnawaz Khan and Shah Ali — Shahnawaz
            cooking guests&apos; meals himself, Shah Ali on pastry and bread-making
            (as noted in 2018 press). Full biographies and approved portraits are
            published here once the restaurant confirms them.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="hairline !border-cream/15 pt-4">
              <p className="font-display text-lg">What we can say today</p>
              <p className="mt-1 text-sm text-cream/65">Tasting Friday–Saturday; brunch Saturday–Sunday. Seasonal, limited, by enquiry.</p>
            </div>
            <div className="hairline !border-cream/15 pt-4">
              <p className="font-display text-lg">Awaiting confirmation</p>
              <p className="mt-1 text-sm text-cream/65">Credentials, farm and dairy sourcing, approved portraits.</p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <figure className="overflow-hidden rounded-2xl">
            <img
              src="/images/hero-plating.jpg"
              alt="Hands preparing fresh herbs and salmon on a kitchen board"
              width={1600}
              height={1067}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-cream/50">
              Mise en place — illustrative kitchen photography, not the Àmú team
            </figcaption>
          </figure>
          <blockquote className="glass-dark mt-6 rounded-2xl p-6 font-display text-xl leading-snug text-cream/90">
            “Cooking very little, but very well — and letting the room stay quiet enough to taste it.”
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
