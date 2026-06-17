import Link from "next/link";
import { ArrowRight, Cpu, LineChart, Shield } from "lucide-react";

const offerings = [
  {
    icon: Shield,
    title: "Passive sUAS Detection",
    copy: "A passive small-drone detection product — detection, localization, classification, and a low signature.",
    bullets: ["Fully passive", "COTS baseline", "Upgrade-ready architecture"],
    href: "/engineering",
  },
  {
    icon: Cpu,
    title: "Subcontract Delivery",
    copy: "SDVOSB engineering, integration, and sustainment for prime-led public sector and defense programs.",
    bullets: ["Veteran-owned set-aside fit", "Integration support", "Rapid staffing"],
    href: "/delivery",
  },
  {
    icon: LineChart,
    title: "Applied AI & R&D",
    copy: "Agentic, edge, and physical AI — prototyped, evaluated, and transitioned for the mission.",
    bullets: ["Agentic workflows", "Edge inference", "Sensor fusion"],
    href: "/applied-ai",
  },
];

const Industries = () => {
  return (
    <section className="border-b border-slate-200 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Offerings</p>
            <h2 className="section-title mt-5 text-4xl sm:text-5xl">
              Capability areas aligned to operational needs.
            </h2>
            <p className="section-copy mt-4 text-lg">
              Ancile AI works in three complementary lanes: a passive sUAS
              detection product, subcontract engineering and integration
              delivery, and applied AI and R&D.
            </p>
          </div>

          <Link
            href="/overview"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-burnt-orange-300 hover:text-burnt-orange-700"
          >
            View Capability Overview
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {offerings.map((offering) => (
            <article
              key={offering.title}
              className="lift-card rounded-[2rem] border border-slate-200 bg-[#fcfbf8] p-6 shadow-sm"
            >
              <div className="inline-flex rounded-2xl bg-slate-900 p-3 text-white">
                <offering.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display mt-5 text-2xl font-semibold text-slate-900">
                {offering.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{offering.copy}</p>

              <div className="mt-6 space-y-2">
                {offering.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-burnt-orange-600" />
                    {bullet}
                  </div>
                ))}
              </div>

              <Link
                href={offering.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-burnt-orange-700 transition hover:text-burnt-orange-800"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
