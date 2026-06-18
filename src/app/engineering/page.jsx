import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CallToAction from "../../sections/CallToAction";
import { Cpu, Settings, CheckCircle, Workflow, Radar } from "lucide-react";

export const metadata = {
  title: "Passive sUAS Detection | Ancile AI",
  description:
    "Ancile AI's passive sUAS product detects, localizes, and classifies small drones using multi-modal sensor fusion on COTS hardware, developed with a Tier-1 defense partner.",
};

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

        <section id="architecture" className="fade-up">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">System Architecture</p>
            <h2 className="font-display mt-3 text-3xl text-slate-900 sm:text-4xl">
              A modular fusion platform — not a fixed sensor stack.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              The product is the fusion software. Passive sensors are modular
              inputs — RF, EO/IR, and acoustic today, extensible tomorrow — and
              the tracks it produces hand off to the systems you already operate.
            </p>
          </div>

          <div className="lift-card rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-8">
            <div className="relative">
              <div className="overflow-x-auto">
              <svg
                viewBox="0 0 1120 340"
                className="h-auto w-full min-w-[820px]"
                role="img"
                aria-label="Modular passive sensor inputs (for example RF, electro-optical/infrared, and acoustic, plus additional modalities) feed an AI sensor-fusion software core that turns asynchronous signals into detection, localization, and classification tracks, which then integrate with existing C2 and operator systems. Fully passive, on COTS edge hardware."
              >
                <defs>
                  <marker id="suasArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M0 0 L10 5 L0 10 z" fill="#d75519" />
                  </marker>
                  <marker id="suasArrowSlate" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M0 0 L10 5 L0 10 z" fill="#94a3b8" />
                  </marker>
                  <filter id="coreGlow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="12" />
                  </filter>
                </defs>

                {/* connectors — even gaps between every stage */}
                <path d="M276 168 L 372 168" fill="none" stroke="#94a3b8" strokeWidth="2.5" markerEnd="url(#suasArrowSlate)" />
                <path d="M598 168 L 694 168" fill="none" stroke="#d75519" strokeWidth="3" markerEnd="url(#suasArrow)" />
                <path d="M884 168 L 980 168" fill="none" stroke="#94a3b8" strokeWidth="2.5" markerEnd="url(#suasArrowSlate)" />

                {/* animated signal packets traveling along each stage */}
                <circle className="flow-dot" cx="276" cy="168" r="4.5" fill="#d75519" />
                <circle className="flow-dot" cx="598" cy="168" r="4.5" fill="#d75519" style={{ animationDelay: "0.6s" }} />
                <circle className="flow-dot" cx="884" cy="168" r="4.5" fill="#d75519" style={{ animationDelay: "1.2s" }} />

                {/* modular sensor input group */}
                <rect x="40" y="48" width="236" height="240" rx="18" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                <text x="62" y="86" fontSize="15" fontWeight="700" fill="#0f172a">Passive sensor inputs</text>
                <text x="62" y="106" fontSize="11.5" fill="#64748b">modular · sensor-agnostic</text>
                <g>
                  <rect x="62" y="120" width="192" height="34" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="76" y="142" fontSize="12" fill="#334155">RF — passive signals</text>
                  <rect x="62" y="162" width="192" height="34" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="76" y="184" fontSize="12" fill="#334155">EO / IR — optical &amp; thermal</text>
                  <rect x="62" y="204" width="192" height="34" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="76" y="226" fontSize="12" fill="#334155">Acoustic — audio signature</text>
                  <rect x="62" y="246" width="192" height="32" rx="10" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                  <text x="76" y="266" fontSize="11.5" fill="#94a3b8">+ additional modalities</text>
                </g>

                {/* fusion software core */}
                <rect className="core-pulse" x="360" y="94" width="250" height="148" rx="26" fill="#e8762f" filter="url(#coreGlow)" />
                <rect x="372" y="106" width="226" height="124" rx="20" fill="#fdf4ee" stroke="#d75519" strokeWidth="2.5" />
                <text x="485" y="138" textAnchor="middle" fontSize="9.5" fontWeight="700" letterSpacing="1.2" fill="#d75519">THE SOFTWARE CORE</text>
                <text x="485" y="166" textAnchor="middle" fontSize="20" fontWeight="700" fill="#b8460f">AI Sensor Fusion</text>
                <text x="485" y="190" textAnchor="middle" fontSize="11.5" fill="#57534e">asynchronous correlation</text>
                <text x="485" y="206" textAnchor="middle" fontSize="11.5" fill="#57534e">at the edge</text>

                {/* track output */}
                <rect x="694" y="106" width="190" height="124" rx="18" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                <text x="789" y="130" textAnchor="middle" fontSize="13" fontWeight="600" fill="#0f172a">Targeting-grade tracks</text>
                <rect x="716" y="144" width="146" height="20" rx="10" fill="#fdf0e8" />
                <text x="789" y="158" textAnchor="middle" fontSize="12" fontWeight="600" fill="#9a3412">Detect</text>
                <rect x="716" y="170" width="146" height="20" rx="10" fill="#fdf0e8" />
                <text x="789" y="184" textAnchor="middle" fontSize="12" fontWeight="600" fill="#9a3412">Localize</text>
                <rect x="716" y="196" width="146" height="20" rx="10" fill="#fdf0e8" />
                <text x="789" y="210" textAnchor="middle" fontSize="12" fontWeight="600" fill="#9a3412">Classify</text>

                {/* downstream consumer */}
                <rect x="980" y="122" width="140" height="92" rx="18" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5" />
                <text x="1050" y="158" textAnchor="middle" fontSize="13" fontWeight="600" fill="#0f172a">Existing C2 /</text>
                <text x="1050" y="176" textAnchor="middle" fontSize="13" fontWeight="600" fill="#0f172a">operator systems</text>
                <text x="1050" y="196" textAnchor="middle" fontSize="10" fill="#64748b">integration-ready</text>

                {/* footer labels */}
                <circle cx="46" cy="318" r="4" fill="#d75519" />
                <text x="60" y="322" fontSize="12.5" fill="#475569">Fully passive — no active emissions</text>
                <circle cx="600" cy="318" r="4" fill="#d75519" />
                <text x="614" y="322" fontSize="12.5" fill="#475569">Runs on COTS edge hardware</text>
              </svg>
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent sm:hidden" />
            </div>
            <p className="mt-3 text-center text-xs text-slate-400 sm:hidden">Swipe to see the full flow →</p>
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
