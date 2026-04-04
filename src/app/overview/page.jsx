import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CallToAction from "../../sections/CallToAction";
import { ArrowRight, CheckCircle, Code, Cpu, Shield, Workflow } from "lucide-react";

const lanes = [
  {
    icon: Shield,
    title: "GhostPost Product Software",
    copy: "Passive counter-small UAS software built around low-signature sensing, sensor fusion, and operational alerting workflows.",
    bullets: [
      "Passive LP/OP operation",
      "Detection, localization, and classification",
      "COTS-compatible deployment baseline",
    ],
  },
  {
    icon: Code,
    title: "Subcontract Delivery Support",
    copy: "Software engineering and mission integration support for prime contractors and program teams.",
    bullets: [
      "Texas public sector alignment",
      "Veteran-owned teaming support",
      "Defined workstream execution",
    ],
  },
  {
    icon: Cpu,
    title: "Applied AI and R&D",
    copy: "Prototype development, evaluation support, and transition-aware engineering in mission-relevant environments.",
    bullets: [
      "Counter-drone prototype support",
      "Model evaluation in operational context",
      "Partner-oriented integration paths",
    ],
  },
];

const partnerModel = [
  {
    icon: Cpu,
    title: "Ancile AI",
    desc: "Software package ownership: fusion models, data architecture, and integration workflows.",
  },
  {
    icon: Shield,
    title: "Defense Supplier",
    desc: "Hardware platform engineering, power design, and deployable system interfaces.",
  },
  {
    icon: Workflow,
    title: "Research Partner",
    desc: "Flight testing, environmental data capture, and operational validation support.",
  },
];

export default function Overview() {
  return (
    <div className="page-shell min-h-screen bg-transparent">
      <Header />
      <PageHero
        eyebrow="Capability Overview"
        title="A focused set of capabilities for mission programs."
        description="This overview shows where Ancile fits across product software, subcontract engineering, and applied AI support."
      />

      <main className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8 lg:space-y-24 lg:py-24">
        <section>
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Capability Lanes</p>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
              Capabilities aligned to program needs.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {lanes.map((lane) => (
              <article
                key={lane.title}
                className="lift-card rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="inline-flex rounded-2xl bg-burnt-orange-50 p-3 text-burnt-orange-700">
                  <lane.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-5 text-2xl font-semibold text-slate-900">
                  {lane.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{lane.copy}</p>

                <div className="mt-6 space-y-3">
                  {lane.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-4.5 w-4.5 flex-shrink-0 text-burnt-orange-600" />
                      <p className="text-sm leading-6 text-slate-700">{bullet}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-[#f8f5ef] p-6 sm:p-10">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Program Model</p>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
              Delivery works best when responsibilities are clearly split.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {partnerModel.map((item) => (
              <article
                key={item.title}
                className="lift-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="inline-flex rounded-2xl bg-slate-900 p-3 text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8 text-white shadow-xl sm:p-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="section-eyebrow border-white/15 bg-white/10 text-white">
                  Operational Scope
                </p>
                <h2 className="font-display mt-5 text-3xl sm:text-4xl">
                  Focus supports clearer execution.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  Customers and partners can quickly see where GhostPost,
                  subcontract delivery, and applied AI support fit within a
                  program, pursuit, or teaming structure.
                </p>
              </div>

              <a
                href="/engineering"
                className="inline-flex items-center gap-2 rounded-full bg-burnt-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-burnt-orange-700"
              >
                Go to Engineering
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
