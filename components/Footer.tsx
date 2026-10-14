import { NAV, SITE } from "@/lib/site";
import ReserveButton from "./ReserveButton";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-cream" aria-label="Footer">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl">Àmú</p>
          <p className="mt-2 max-w-[40ch] text-cream/70">{SITE.tagline}</p>
          <address className="mt-4 not-italic text-cream/80">{SITE.address}</address>
          <p className="mt-1 text-cream/70">{SITE.servicePattern} · times by confirmation</p>
        </div>
        <nav aria-label="Sections">
          <p className="text-xs uppercase tracking-[0.16em] text-cream/55">Sections</p>
          <ul className="mt-3 space-y-2">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="hover:underline underline-offset-4">{n.label}</a></li>
            ))}
            <li><ReserveButton className="hover:underline underline-offset-4 p-0" /></li>
          </ul>
        </nav>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-cream/55">Contact</p>
          <ul className="mt-3 space-y-2">
            <li><a href={SITE.phoneHref} className="tabular-nums hover:underline">Call {SITE.phoneDisplay}</a></li>
            <li><a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp enquiry</a></li>
            <li><a href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">Get directions</a></li>
          </ul>
          <p className="mt-4 text-xs text-cream/50">Social links appear here once the official account is confirmed.</p>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="container flex flex-wrap items-center justify-between gap-3 py-5 text-sm text-cream/60">
          <p>© {new Date().getFullYear()} Àmú Lahore. All rights reserved.</p>
          <p>Menus, hours and prices only as confirmed by the house.</p>
        </div>
        <div className="border-t border-cream/10">
          <p className="container py-4 text-xs leading-relaxed text-cream/45">
            Photography is illustrative editorial stock, not Àmú&apos;s room, dishes or team — via{" "}
            <a className="underline underline-offset-2" href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>
            {" "}(Shakshuka by{" "}
            <a className="underline underline-offset-2" href="https://commons.wikimedia.org/w/index.php?curid=22272907" target="_blank" rel="noopener noreferrer">Robert Judge, CC BY 2.0</a>
            {"; "}fish tacos by{" "}
            <a className="underline underline-offset-2" href="https://commons.wikimedia.org/w/index.php?curid=92753932" target="_blank" rel="noopener noreferrer">FranHogan, CC BY-SA 4.0</a>
            , via Wikimedia Commons). Full list in content-sources.md.
          </p>
        </div>
      </div>
    </footer>
  );
}
