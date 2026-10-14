"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { GALLERY } from "@/lib/site";
import Reveal from "./Reveal";

export default function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openAt = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setIdx(null);
    openAt.current?.focus();
  }, []);

  useEffect(() => {
    if (idx === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setIdx((v) => (v === null ? v : (v + 1) % GALLERY.length));
      if (e.key === "ArrowLeft") setIdx((v) => (v === null ? v : (v - 1 + GALLERY.length) % GALLERY.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [idx, close]);

  return (
    <section id="gallery" className="scroll-mt-20 border-t border-ink/10" aria-labelledby="gallery-h">
      <div className="container py-16 md:py-24">
        <Reveal>
          <p className="eyebrow">Gallery</p>
          <h2 id="gallery-h" className="mt-3 text-[clamp(1.9rem,3.5vw+1rem,3rem)]">The house, quietly.</h2>
          <p className="mt-3 max-w-[64ch] text-muted">
            Illustrative fine-dining photography in the Àmú spirit. Approved Àmú
            photographs replace these frames the moment the restaurant supplies them.
          </p>
        </Reveal>
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {GALLERY.map((g, i) => (
            <Reveal
              as="li"
              key={g.src}
              className={g.large ? "col-span-2" : ""}
            >
              <button
                onClick={(e) => { openAt.current = e.currentTarget; setIdx(i); }}
                className="group relative block w-full overflow-hidden rounded-xl bg-stone text-left"
                aria-label={`Open photo: ${g.caption}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  width={g.width}
                  height={g.height}
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
                    g.large ? "aspect-[16/9]" : "aspect-[4/5]"
                  }`}
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-3 pt-8 text-sm font-medium text-cream opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {g.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {idx !== null && (
        <div role="dialog" aria-modal="true" aria-label={`Photo viewer: ${GALLERY[idx].caption}`} className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4">
          <figure className="w-full max-w-3xl">
            <img
              src={GALLERY[idx].src}
              alt={GALLERY[idx].alt}
              className="max-h-[75vh] w-full rounded-xl object-contain bg-ink"
            />
            <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-3 text-cream">
              <span>{GALLERY[idx].caption} · {idx + 1} / {GALLERY.length}</span>
              <span className="flex gap-2">
                <button ref={closeRef} onClick={close} className="btn bg-cream !min-h-0 !px-5 !py-2.5 text-sm !text-ink">Close</button>
                <button onClick={() => setIdx((idx + 1) % GALLERY.length)} className="btn !min-h-0 !px-5 !py-2.5 text-sm border border-cream/40 !text-cream">Next</button>
                <button onClick={() => setIdx((idx - 1 + GALLERY.length) % GALLERY.length)} className="btn !min-h-0 !px-5 !py-2.5 text-sm border border-cream/40 !text-cream">Previous</button>
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
