import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import { RadarMotif, PipelineMotif, GraphMotif } from "../../components/LaneMotifs";
import CallToAction from "../../sections/CallToAction";
import {
  ArrowRight,
  CheckCircle,
  ClipboardList,
  Hammer,
  LifeBuoy,
  Radar,
  Boxes,
  BrainCircuit,
} from "lucide-react";

const featuredLane = {
  icon: Radar,
  motif: RadarMotif,
  title: "Passive sUAS Detection",
  href: "/engineering",
  copy: "A passive small-drone detection product built on multi-modal sensor fusion and low-SWaP, COTS hardware.",
  bullets: [
    "Detection, localization, and classification of Group 1–2 drones",
    "Fully passive operation with active-alerting optionality",
    "COTS baseline for affordability and rapid fielding",
  ],
};

const secondaryLanes = [
  {
    icon: Boxes,
    motif: PipelineMotif,
    title: "Subcontract Delivery",
    href: "/delivery",
    copy: "SDVOSB subcontract engineering, integration, and sustainment for prime-led programs.",
    bullets: [
      "Texas VetHUB-aligned execution for set-aside requirements",
      "Secure cloud, edge, and disconnected delivery",
      "CMMC-compliant, JCP-certified",
    ],
  },
  {
    icon: BrainCircuit,
    motif: GraphMotif,
    title: "Applied AI & R&D",
    href: "/applied-ai",
    copy: "Agentic, edge, and physical AI with the governance and evals needed to field it.",
    bullets: [
      "Agentic workflows with human-in-the-loop control",
      "Edge inference for denied and disconnected sites",
      "Sensor fusion, forecasting, and anomaly detection",
    ],
  },
];

const lifecycle = [
  {
    icon: ClipboardList,
    phase: "Scope",
    title: "Plan before building.",
    desc: "We assess the mission need, current systems, data, and constraints — then sequence pilots, integrations, and fieldable increments. Risk, compliance, and teaming roles are settled up front.",
  },
  {
    icon: Hammer,
    phase: "Build",
    title: "Deliver a defined package.",
    desc: "Execution focuses on shipping usable software with clear interfaces, ownership, and deployment intent across the three lanes — not demos that stall at the prototype.",
  },
  {
    icon: LifeBuoy,
    phase: "Sustain",
    title: "Hold up in the field.",
    desc: "After fielding we support monitoring, change control, and sustainment, and prepare outputs for partner handoff or the next maturity step in the program.",
  },
];

export const metadata = {
  title: "Capabilities Overview | Ancile",
  description:
    "Three focused lanes — passive sUAS detection, subcontract delivery, and applied AI — run through one scope-build-sustain engagement model.",
};

export default function Overview() {
  return (
    <div className="page-shell min-h-screen bg-transparent">
      <Header />
      <PageHero
        eyebrow="Overview"
        title="Three lanes, one focused delivery model."
        description="Ancile is a service-disabled veteran-owned (SDVOSB) software company. We work in three lanes — a passive sUAS detection product, subcontract delivery for primes, and applied AI — and run every engagement through the same scope-build-sustain model."
      />

      <main>
        {/* Capability lanes — bento */}
        <section className="border-b border-slate-200 bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Capability lanes" title="What we deliver." />

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-6 lg:grid-rows-2">
            <Reveal className="lg:col-span-4 lg:row-span-2">
              <Link
                href={featuredLane.href}
                className="lift-card group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-[#fff7f1] via-white to-[#f6efe6] p-8 shadow-sm"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-burnt-orange-500/25">
                  <featuredLane.motif />
                </div>
                <div className="relative flex items-center gap-3">
                  <span className="inline-flex rounded-2xl bg-slate-900 p-3 text-white">
                    <featuredLane.icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-burnt-orange-200 bg-burnt-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-burnt-orange-700">
                    Flagship product
                  </span>
                </div>
                <h3 className="font-display relative mt-6 text-3xl font-semibold text-slate-900">
                  {featuredLane.title}
                </h3>
                <p className="relative mt-3 max-w-md text-[0.95rem] leading-7 text-slate-600">
                  {featuredLane.copy}
                </p>
                <div className="relative mt-6 space-y-3">
                  {featuredLane.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4.5 w-4.5 flex-shrink-0 text-burnt-orange-600" />
                      <p className="text-sm leading-6 text-slate-700">{bullet}</p>
                    </div>
                  ))}
                </div>
                <span className="relative mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-burnt-orange-700">
                  Explore the product
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>

            {secondaryLanes.map((lane, index) => (
              <Reveal key={lane.title} delay={120 + index * 90} className="lg:col-span-2">
                <Link
                  href={lane.href}
                  className="lift-card group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-[#fcfbf8] p-7 shadow-sm"
                >
                  <div className="pointer-events-none absolute -right-4 bottom-2 h-20 w-32 text-slate-300/60">
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
                  <div className="relative mt-4 space-y-2">
                    {lane.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-2.5">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-burnt-orange-600" />
                        <p className="text-[0.8rem] leading-5 text-slate-600">{bullet}</p>
                      </div>
                    ))}
                  </div>
                  <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-burnt-orange-700">
                    Explore lane
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          </div>
        </section>

      {/* How we engage — dark cinematic band */}
      <section className="band-dark relative overflow-hidden border-y border-slate-800/60">
        <div className="aurora-dark pointer-events-none absolute inset-0" />
        <div className="soft-grid-dark pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-eyebrow">How we engage</p>
            <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
              The same model runs across every lane.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Strategy and sustainment aren&apos;t separate offerings — they&apos;re
              the front and back ends of how we deliver.
            </p>
          </div>

          <div className="relative mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block" />
            {lifecycle.map((step, index) => (
              <Reveal key={step.phase} delay={index * 110} className="relative">
                <div className="flex items-center gap-4">
                  <span className="relative z-10 inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-burnt-orange-500 to-burnt-orange-700 font-display text-lg font-semibold text-white shadow-lg shadow-burnt-orange-900/40">
                    0{index + 1}
                  </span>
                  <step.icon className="h-6 w-6 text-burnt-orange-300" />
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-burnt-orange-300">
                  {step.phase}
                </p>
                <h3 className="font-display mt-2 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="section-eyebrow">Why it works</p>
                <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
                  Focus makes execution clearer.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Our work is defined by deployment constraints, integration
                  dependencies, and environments where software has to perform —
                  not just pass a demo. A narrow scope is what lets us deliver in
                  secure and disconnected conditions.
                </p>
              </div>

              <Link
                href="/engineering"
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-burnt-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-burnt-orange-700"
              >
                See the product
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
        </div>
      </section>
      </main>

      <CallToAction />
      <Footer />
    </div>
  );
}
