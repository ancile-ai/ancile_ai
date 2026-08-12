import { Check } from "lucide-react";

/**
 * Alternating feature row: supporting visual on one side, copy on the other.
 * `reverse` flips the order so a page can zig-zag down the screen.
 */
export default function ShowcaseRow({
  eyebrow,
  title,
  copy,
  bullets = [],
  visual,
  reverse = false,
  footer,
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      <div className={`min-w-0 ${reverse ? "lg:order-2" : ""}`}>
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h3 className="section-title mt-5 text-3xl sm:text-4xl">{title}</h3>
        {copy ? <p className="section-copy mt-4 text-lg">{copy}</p> : null}
        {bullets.length ? (
          <ul className="mt-7 space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-burnt-orange-50 text-burnt-orange-700">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-[0.95rem] leading-6 text-slate-700">{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {footer ? <div className="mt-8">{footer}</div> : null}
      </div>
      <div className={`min-w-0 ${reverse ? "lg:order-1" : ""}`}>{visual}</div>
    </div>
  );
}
