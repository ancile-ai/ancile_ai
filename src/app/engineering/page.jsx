import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CallToAction from "../../sections/CallToAction";
import { Cpu, Settings, CheckCircle, Workflow, Radar } from "lucide-react";

export default function Engineering() {
  const passiveSuasFeatures = [
    "Passive LP/OP operation with no active emissions to detect or jam",
    "Multi-modal sensor fusion for detection, localization, and classification",
    "COTS hardware baseline for affordability, sustainment, and rapid fielding",
    "Sequenced sensor activation to cut power draw and extend endurance in austere sites",
    "Modular software architecture ready for future sensor and effector integrations",
  ];

  const partnerRoles = [
    {
      icon: Cpu,
      title: "Ancile AI — Software Package",
      desc: "Fusion software, detection and classification models, data architecture, and the integration workflows that turn raw sensor feeds into usable tracks.",
      color: "bg-sky-50 text-sky-700 border-sky-100",
    },
    {
      icon: Settings,
      title: "Tier-1 Defense Supplier — Hardware",
      desc: "Hardware design, power architecture, manufacturability, and platform interfaces for deployable node configurations.",
      color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
    {
      icon: Workflow,
      title: "R&D & Flight-Test Partner",
      desc: "Flight testing, environmental data collection, and validation that accelerate prototype maturity and transition.",
      color: "bg-amber-50 text-amber-700 border-amber-100",
    },
  ];

  const quickStats = [
    { label: "Mission", value: "sUAS Detection" },
    { label: "Signature", value: "Fully Passive" },
    { label: "Maturity", value: "Field Test Q3 FY26" },
  ];

  return (
    <div className="page-shell min-h-screen bg-transparent text-slate-900">
      <Header />
      <PageHero
        eyebrow="Product"
        title="Passive detection, localization, and classification of small drones."
        description="Ancile AI's passive sUAS product is a software stack built around multi-modal sensor fusion on COTS hardware — covert, persistent awareness at the edge, developed with a Tier-1 defense partner and scheduled for field testing in Q3 FY26."
      >
        <div className="fade-up delay-1 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {quickStats.map((stat) => (
            <div key={stat.label} className="lift-card rounded-2xl border border-slate-200 bg-white/90 p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{stat.label}</p>
              <p className="font-display mt-2 text-xl font-semibold text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <main className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8 lg:space-y-24 lg:py-24">
        <section id="product" className="fade-up">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <article className="lift-card rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:col-span-3">
              <h2 className="font-display text-2xl text-slate-900">How it works</h2>
              <p className="mt-3 leading-relaxed text-slate-700">
                The software correlates asynchronous sensor inputs into
                targeting-grade tracks while staying low-observable and
                power-conscious. It is built for rapid setup and practical
                integration into the systems a team already fields.
              </p>
              <div className="mt-6 space-y-3">
                {passiveSuasFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-burnt-orange-600" />
                    <p className="text-sm leading-6 text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>
            </article>

            <aside className="lift-card rounded-[2rem] border border-slate-200 bg-slate-50 p-8 lg:col-span-2">
              <h2 className="font-display text-2xl text-slate-900">System priorities</h2>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Signature</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">Passive LP/OP operation</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Architecture</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">Modular and upgrade-ready</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Deployment</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">COTS hardware baseline</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="teaming" className="fade-up">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Teaming Model</p>
            <h2 className="font-display mt-3 text-3xl text-slate-900 sm:text-4xl">
              Responsibilities split cleanly across the team.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              Ancile owns the software and the data; our partners own the
              hardware and the flight testing. Each interface is defined so the
              system matures without ambiguity over who delivers what.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {partnerRoles.map((role) => (
              <div key={role.title} className="lift-card rounded-2xl border border-slate-200 bg-white p-6">
                <div className={`mb-4 inline-flex rounded-xl border p-3 ${role.color}`}>
                  <role.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg text-slate-900">{role.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{role.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="scope" className="fade-up">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
            <div className="mx-auto inline-flex rounded-2xl bg-burnt-orange-600 p-3 text-white">
              <Radar className="h-6 w-6" />
            </div>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">Built for the field, not the demo</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
              The product is shaped by deployment constraints — low signature,
              limited power, contested spectrum, and disconnected sites — so it
              performs where it is actually used, then transitions cleanly into a
              partner program.
            </p>
          </div>
        </section>
      </main>
      <CallToAction
        headline="Evaluating passive sUAS detection for your program?"
        subcopy="Let's talk sensor modalities, SWaP, and how the software fits your concept of operations."
      />
      <Footer />
    </div>
  );
}
