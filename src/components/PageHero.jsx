/**
 * Shared sub-page hero. Cinematic warm-gradient canvas with aurora + grain,
 * an optional right-hand `visual` (console / diagram), and a full-width slot
 * below for supporting content (`children`).
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  visual,
}) {
  const hasVisual = Boolean(visual);

  return (
    <section className="page-shell relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-stone-50 to-[#f5ece4]">
      <div className="aurora-wash pointer-events-none absolute inset-0" />
      <div className="grain-overlay" />
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-burnt-orange-200/25 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div
          className={
            hasVisual
              ? "grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
              : ""
          }
        >
          <div className="fade-up min-w-0">
            <p className="section-eyebrow">{eyebrow}</p>
            <h1 className="section-title mt-6 max-w-4xl text-4xl leading-[1.03] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {description ? (
              <p className="section-copy mt-6 max-w-3xl text-lg sm:text-xl">
                {description}
              </p>
            ) : null}
          </div>

          {hasVisual ? (
            <div className="fade-up delay-1 min-w-0">{visual}</div>
          ) : null}
        </div>

        {children ? (
          <div className="fade-up delay-2 mt-12">{children}</div>
        ) : null}
      </div>
    </section>
  );
}
