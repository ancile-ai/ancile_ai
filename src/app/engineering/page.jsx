import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CallToAction from "../../sections/CallToAction";
import { Cpu, Settings, CheckCircle, Shield, Code, Workflow } from "lucide-react";
import Operations from './../operations/page';

export default function Engineering() {
  const passiveCsUASFeatures = [
    "Passive digital LP/OP operation with no active emissions",
    "AI-enabled multi-modal sensor fusion for detection, localization, and classification",
    "COTS hardware baseline to support affordability, sustainment, and rapid fielding",
    "Sequential sensor activation to reduce power draw and extend endurance in austere environments",
    "Modular software architecture supporting future sensor and effector integrations",
  ];

  const partnerRoles = [
    {
      icon: Cpu,
      title: "Ancile AI Software Package",
      desc: "AI-enabled fusion software, detection and classification models, data architecture, and operational integration workflows.",
      color: "bg-sky-50 text-sky-700 border-sky-100",
    },
    {
      icon: Settings,
      title: "Tier 1 Defense Supplier",
      desc: "Hardware design, power architecture, manufacturability, and platform interface support for deployable node configurations.",
      color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
    {
      icon: Workflow,
      title: "R&D and Flight Test Partner",
      desc: "Flight testing, environmental data collection, and validation support to accelerate prototype maturity and transition.",
      color: "bg-amber-50 text-amber-700 border-amber-100",
    },
  ];

  const serviceTracks = [
    {
      icon: Code,
      title: "Texas Public Sector Subcontracting",
      bullets: [
        "Subcontract delivery support for prime contractors responding to Texas state opportunities",
        "VetHUB-aligned execution where veteran participation is a contract requirement",
        "Rapid staffing for software development, integration, and technical delivery tasks",
      ],
      color: "bg-burnt-orange-50 text-burnt-orange-700 border-burnt-orange-100",
    },
    {
      icon: Shield,
      title: "Defense Software and Integration",
      bullets: [
        "Mission software engineering across secure cloud, edge, and disconnected environments",
        "API and data integration for sensor, platform, and command-and-control ecosystems",
        "Delivery patterns optimized for reliability, auditability, and field operations",
      ],
      color: "bg-rose-50 text-rose-700 border-rose-100",
    },
    {
      icon: Cpu,
      title: "Drone and Applied AI R&D",
      bullets: [
        "Prototype development for sUAS sensing, fusion, and alerting workflows",
        "Applied AI model development and evaluation in operationally relevant conditions",
        "R&D support for pilots, demonstrations, and transition-ready technical baselines",
      ],
      color: "bg-indigo-50 text-indigo-700 border-indigo-100",
    },
  ];

  const quickStats = [
    { label: "Primary Focus", value: "Applied Research & Development" },
    { label: "Delivery Modes", value: "Product + Services" },
    { label: "Mission Focus", value: "Applied AI" },
  ];

  return (
    <div className="page-shell min-h-screen bg-transparent text-slate-900">
      <Header />
      <PageHero
        eyebrow="Engineering Capability"
        title="AI focused engineering services for defense, energy, and public sector applications."
        description="Ancile AI delivers software for a variety of applications, along with subcontract software delivery and integration support for operational work."
      >
        <div className="fade-up delay-1 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {quickStats.map((stat) => (
            <div key={stat.label} className="lift-card rounded-2xl border border-slate-200 bg-white/90 p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{stat.label}</p>
              <p className="font-display mt-2 text-xl font-semibold text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="fade-up delay-2 mt-8 flex flex-wrap gap-3">
          <a href="#product" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-burnt-orange-300 hover:text-burnt-orange-700">
            Passive sUAS Product
          </a>
          <a href="#services" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-burnt-orange-300 hover:text-burnt-orange-700">
            Service Tracks
          </a>
          <a href="#scope" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-burnt-orange-300 hover:text-burnt-orange-700">
            Engagement Scope
          </a>
        </div>
      </PageHero>

      <main className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8 lg:space-y-24 lg:py-24">
        <section id="product" className="fade-up">
          <div className="mb-10 max-w-4xl">
            <p className="section-eyebrow">Product</p>
            <h2 className="font-display mt-3 text-3xl text-slate-900 sm:text-4xl">
            sUAS: Passive Detection, Localization, and Classification
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              Ancile AI offers a passive sUAS solution, a software stack built around
              AI-enabled multi-modal sensor fusion on COTS hardware. The result
              is covert, persistent awareness for forward-deployed and
              perimeter environments, operating at the edge
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <article className="lift-card rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:col-span-3">
              <h3 className="font-display text-2xl text-slate-900">Operational Profile</h3>
              <p className="mt-3 text-slate-700">
                The software correlates asynchronous sensor inputs into
                targeting-grade tracks while staying low-observable and power
                conscious. It is designed for rapid setup and practical
                integration into existing operational systems.
              </p>
              <div className="mt-6 space-y-3">
                {passiveCsUASFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-burnt-orange-600" />
                    <p className="text-sm leading-6 text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>
            </article>

            <aside className="lift-card rounded-[2rem] border border-slate-200 bg-slate-50 p-8 lg:col-span-2">
              <h3 className="font-display text-2xl text-slate-900">System Priorities</h3>
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

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {partnerRoles.map((role) => (
              <div key={role.title} className="lift-card rounded-2xl border border-slate-200 bg-white p-6">
                <div className={`mb-4 inline-flex rounded-xl border p-3 ${role.color}`}>
                  <role.icon className="h-5 w-5" />
                </div>
                <h4 className="font-display text-lg text-slate-900">{role.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-700">{role.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-10 fade-up">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-burnt-orange-100/60 blur-3xl" />
          <div className="relative">
            <div className="mb-10 max-w-4xl">
              <p className="section-eyebrow">Services</p>
              <h2 className="font-display mt-3 text-3xl text-slate-900 sm:text-4xl">
                Subcontract Delivery and Defense R&D
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                We support prime integrators and public sector teams that need
                trusted technical execution. Service delivery is intentionally
                scoped to software, integration, and operational AI outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {serviceTracks.map((track) => (
                <article key={track.title} className="lift-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className={`mb-5 inline-flex rounded-xl border p-3 ${track.color}`}>
                    <track.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl text-slate-900">{track.title}</h3>
                  <div className="mt-4 space-y-3">
                    {track.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-burnt-orange-600" />
                        <p className="text-sm leading-6 text-slate-700">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="scope" className="fade-up">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8 text-center text-slate-100 shadow-xl sm:p-12">
            <Workflow className="mx-auto h-10 w-10 text-burnt-orange-300" />
            <h2 className="font-display mt-5 text-3xl sm:text-4xl">Focused Scope</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
              Engineering work is structured around software ownership, partner
              interfaces, and transition planning across passive sUAS, operational
              integration, and applied AI delivery.
            </p>
          </div>
        </section>
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
}

