/**
 * Ancile mark — an "A" monogram of evenly spaced rounded node tiles. The two
 * feet sit under the outer nodes and connect up to the crossbar with straight
 * diagonal traces (the legs of the A). Echoes the site's sensor-node motif.
 *
 * `tone="dark"` lightens the charcoal nodes so the mark reads on dark surfaces.
 */
const ORANGE = "#d75519";
const SALMON = "#e28a5f";
const CHARCOAL_LIGHT_BG = "#45454b";
const CHARCOAL_DARK_BG = "#cbd5e1";

export function AncileMark({ className = "", tone = "light" }) {
  const charcoal = tone === "dark" ? CHARCOAL_DARK_BG : CHARCOAL_LIGHT_BG;

  return (
    <svg
      viewBox="0 0 314 300"
      className={className}
      role="img"
      aria-label="Ancile"
      fill="none"
    >
      {/* diagonal leg traces (drawn under the tiles) */}
      <path d="M46 252 L102 206" stroke={charcoal} strokeWidth="24" strokeLinecap="round" />
      <path d="M268 252 L212 206" stroke={ORANGE} strokeWidth="24" strokeLinecap="round" />

      {/* node tiles */}
      <rect x="131" y="8" width="52" height="52" rx="14" fill={ORANGE} />
      <rect x="91" y="82" width="52" height="52" rx="14" fill={SALMON} />
      <rect x="171" y="82" width="52" height="52" rx="14" fill={charcoal} />
      <rect x="12" y="156" width="52" height="52" rx="14" fill={SALMON} />
      <rect x="78" y="156" width="92" height="52" rx="16" fill={charcoal} />
      <rect x="184" y="156" width="52" height="52" rx="14" fill={ORANGE} />
      <rect x="250" y="156" width="52" height="52" rx="14" fill={charcoal} />
      <rect x="12" y="240" width="52" height="52" rx="14" fill={charcoal} />
      <rect x="250" y="240" width="52" height="52" rx="14" fill={ORANGE} />
    </svg>
  );
}

export default function Logo({
  className = "",
  markClassName = "h-9 w-auto",
  showWordmark = true,
  wordmarkClassName,
  tone = "light",
}) {
  const wordmarkColor =
    wordmarkClassName ?? (tone === "dark" ? "text-white" : "text-slate-900");

  // `flex w-fit` (not inline-flex) so the lockup never flows inline with an
  // adjacent inline-flex element such as `.section-eyebrow`.
  return (
    <span className={`flex w-fit items-center gap-2.5 ${className}`}>
      <AncileMark className={markClassName} tone={tone} />
      {showWordmark ? (
        <span
          className={`font-display text-2xl font-semibold tracking-tight ${wordmarkColor}`}
        >
          Ancile
        </span>
      ) : null}
    </span>
  );
}
