import Link from "next/link";
import { ArrowRight, Radar, Boxes, BrainCircuit } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { PipelineMotif, GraphMotif, RadarMotif } from "../components/LaneMotifs";

const secondaryLanes = [
  {
    icon: Boxes,
    motif: PipelineMotif,
    title: "Subcontract Delivery",
    copy: "SDVOSB engineering, integration, and sustainment for prime-led public sector, energy, and defense programs.",
    href: "/delivery",
  },
  {
    icon: BrainCircuit,
    motif: GraphMotif,
    title: "Applied AI & R&D",
    copy: "Agentic, edge, and physical AI — prototyped, evaluated, and transitioned for the mission.",
    href: "/applied-ai",
  },
];

const CapabilityLanes = () => {
  return (
    <section className="border-b border-slate-200 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Capabilities"
            title="Three focused lanes, one delivery model."
            copy="A passive sUAS detection product, subcontract engineering and integration, and applied AI — complementary lanes aligned to how public sector, energy, and defense programs actually buy."
          />
          <Link
            href="/overview"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-burnt-orange-300 hover:text-burnt-orange-700"
          >
            View capability overview
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-6 lg:grid-rows-2">
          {/* Flagship lane — large */}
          <Reveal className="lg:col-span-4 lg:row-span-2">
            <Link
              href="/engineering"
              className="lift-card group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-[#fff7f1] via-white to-[#f6efe6] p-8 shadow-sm"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-burnt-orange-500/25">
                <RadarMotif />
              </div>
              <div className="relative flex items-center gap-3">
                <span className="inline-flex rounded-2xl bg-slate-900 p-3 text-white">
                  <Radar className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-burnt-orange-200 bg-burnt-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-burnt-orange-700">
                  Flagship product
                </span>
              </div>
              <h3 className="font-display relative mt-6 text-3xl font-semibold text-slate-900">
                Passive sUAS Detection
              </h3>
              <p className="relative mt-3 max-w-md text-[0.95rem] leading-7 text-slate-600">
                A passive small-drone detection product — detection, localization,
                and classification with a low signature, built on multi-modal
                sensor fusion and a COTS hardware baseline.
              </p>
              <div className="relative mt-auto flex flex-wrap gap-2 pt-8">
                {["Fully passive", "COTS baseline", "Upgrade-ready architecture"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-burnt-orange-700">
                Explore the product
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>

          {/* Secondary lanes — stacked */}
          {secondaryLanes.map((lane, index) => (
            <Reveal
              key={lane.title}
              delay={120 + index * 90}
              className="lg:col-span-2"
            >
              <Link
                href={lane.href}
                className="lift-card group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-[#fcfbf8] p-7 shadow-sm"
              >
                <div className="pointer-events-none absolute -right-4 bottom-0 h-24 w-40 text-slate-300/60">
                  <lane.motif />
                </div>
                <span className="inline-flex w-fit rounded-2xl bg-slate-900 p-3 text-white">
                  <lane.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display relative mt-5 text-xl font-semibold text-slate-900">
                  {lane.title}
                </h3>
                <p className="relative mt-2 text-sm leading-6 text-slate-600">
                  {lane.copy}
                </p>
                <span className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-burnt-orange-700">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilityLanes;
