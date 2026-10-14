"use client";

/** Fires the global reservation-dialog open event. */
export function openReserve() {
  window.dispatchEvent(new CustomEvent("amu:reserve"));
}

/**
 * Glass CTA that opens the reservation dialog instead of navigating.
 * Use everywhere a "Reserve a Table" action appears.
 */
export default function ReserveButton({
  children = "Reserve a Table",
  className = "btn btn-glass-ink",
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        openReserve();
      }}
    >
      {children}
    </button>
  );
}
