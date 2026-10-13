import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "./JsonLd";
import { breadcrumbJsonLd } from "../lib/site";

/**
 * Shared sub-page hero. Cinematic warm-gradient canvas with aurora + grain,
 * an optional right-hand `visual` (console / diagram), and a full-width slot
 * below for supporting content (`children`).
 *
 * When `breadcrumbs` is supplied, it renders an accessible breadcrumb trail
 * and the matching BreadcrumbList JSON-LD so search engines show the site
 * hierarchy in results.
 *
 * breadcrumbs: [{ name: "Home", path: "/" }, { name: "About", path: "/about" }]
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  visual,
}) {
  const hasVisual = Boolean(visual);

  return (
    <section className="page-shell relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-stone-50 to-[#f5ece4]">

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {breadcrumbs?.length ? (
          <>
            <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
            <nav aria-label="Breadcrumb" className="fade-up mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
                {breadcrumbs.map((crumb, index) => {
                  const isLast = index === breadcrumbs.length - 1;
                  return (
                    <li key={crumb.path} className="flex items-center gap-1.5">
                      {index > 0 ? (
                        <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                      ) : null}
                      {isLast ? (
                        <span aria-current="page" className="font-semibold text-slate-800">
                          {crumb.name}
                        </span>
                      ) : (
                        <Link
                          href={crumb.path}
                          className="rounded transition hover:text-burnt-orange-700"
                        >
                          {crumb.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </>
        ) : null}

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
