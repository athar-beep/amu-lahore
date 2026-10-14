# Àmú Lahore

Intimate French fine dining — Gulberg II, Lahore. Next.js 15 App Router + TypeScript + Tailwind 3.

## Run
```sh
npm install
npm run dev      # http://localhost:3000
npm run typecheck
npm run build
```

## Where to change things
- Contact/links/menus/gallery/hero slides: `lib/site.ts`
- Photos (all local, verified): `public/images/` + sources in `content-sources.md`
- Hero motion (30s crossfade + drifts): `.hero-slide` keyframes in `app/globals.css`
- Tokens: `app/globals.css` + `tailwind.config.ts`
- Sections: `components/Header|Hero|MenuTabs|Story|Chef|Gallery|Visit|ReserveForm|Footer|StickyBar.tsx`
- Page order: `app/page.tsx`
- Metadata/JSON-LD/fonts: `app/layout.tsx`

## Client verification needed before launch
Chef bios + portraits, full tasting courses + brunch descriptions/prices, Rs 7,000++ meaning, exact service times, map pin, parking/cards/dress code, reviews/press, Instagram URL, approved photography (see `content-sources.md`).

## Notes
- Reservation form hands off to WhatsApp (`wa.me/923008180918`); nothing is auto-booked or stored.
- Print stylesheet provides the “Print Menu” action; no PDF is linked until a real file exists.
- Skills read (38/38, Oct 2026): all SKILL.md inventoried; applied deeply where needed (a11y, typography, component-search/registry, web-animation + review-animations, vercel patterns, performance, seo-audit); Three.js/WebGL + locomotive-scroll + heavy GSAP explicitly excluded per restraint/perf brief.
