export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-[#f5ece3]">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-burnt-orange-200/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="fade-up">
          <p className="section-eyebrow">{eyebrow}</p>
          <h1 className="font-display mt-6 max-w-4xl text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-10">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
