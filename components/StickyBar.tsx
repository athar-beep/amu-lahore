import { SITE } from "@/lib/site";
import ReserveButton from "./ReserveButton";

/** Mobile sticky call/reserve bar: glass, safe-area aware, hidden in print. */
export default function StickyBar() {
  return (
    <div
      className="no-print fixed inset-x-0 bottom-0 z-40 border-t border-white/20 bg-ink/45 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 p-3">
        <a href={SITE.phoneHref} className="btn btn-glass !min-h-[3rem] tabular-nums">
          Call
        </a>
        <ReserveButton className="btn btn-glass-light !min-h-[3rem]">
          Reserve
        </ReserveButton>
      </div>
    </div>
  );
}
