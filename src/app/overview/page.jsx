import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CallToAction from "../../sections/CallToAction";
import {
  ArrowRight,
  CheckCircle,
  ClipboardList,
  Cpu,
  Hammer,
  LifeBuoy,
  Radar,
  Shield,
} from "lucide-react";

const lanes = [
  {
    icon: Radar,
    title: "Passive sUAS Detection",
    href: "/engineering",
    copy: "A passive small-drone detection product built on multi-modal sensor fusion and low-SWaP, COTS hardware.",
    bullets: [
      "Detection, localization, and classification of Group 1–2 drones",
      "Fully passive operation with active-alerting optionality",
      "COTS baseline for affordability and rapid fielding",
    ],
  },
  {
    icon: Shield,
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
    icon: Cpu,
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

export default function Overview() {
  return (
    <div className="page-shell min-h-screen bg-transparent">
      <Header />
      <PageHero
        eyebrow="Overview"
        title="Three lanes, one focused delivery model."
        description="Ancile AI is a service-disabled veteran-owned (SDVOSB) software company. We work in three lanes — a passive sUAS detection product, subcontract delivery for primes, and applied AI — and run every engagement through the same scope-build-sustain model."
      />

      <main className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8 lg:space-y-24 lg:py-24">
        <section className="fade-up">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Capability Lanes</p>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
              What we deliver.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {lanes.map((lane) => (
              <article
                key={lane.title}
                className="lift-card flex flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex rounded-2xl bg-burnt-orange-50 p-3 text-burnt-orange-700">
                    <lane.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-slate-900">
                    {lane.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{lane.copy}</p>

                <div className="mt-6 space-y-3">
                  {lane.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-4.5 w-4.5 flex-shrink-0 text-burnt-orange-600" />
                      <p className="text-sm leading-6 text-slate-700">{bullet}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={lane.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-burnt-orange-700 transition hover:text-burnt-orange-800"
                >
                  Explore lane
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-[#f8f5ef] p-6 sm:p-10 fade-up">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">How We Engage</p>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
              The same model runs across every lane.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              Strategy and sustainment aren&apos;t separate offerings — they&apos;re
              the front and back ends of how we deliver.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {lifecycle.map((step, index) => (
              <article
                key={step.phase}
                className="lift-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex rounded-2xl bg-slate-900 p-3 text-white">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-3xl text-slate-300">0{index + 1}</span>
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-burnt-orange-700">
                  {step.phase}
                </p>
                <h3 className="font-display mt-2 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="fade-up">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="section-eyebrow">
                  Why It Works
                </p>
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

              <a
                href="/engineering"
                className="inline-flex items-center gap-2 rounded-full bg-burnt-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-burnt-orange-700"
              >
                See the product
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
}
