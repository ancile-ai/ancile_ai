import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CallToAction from "../../sections/CallToAction";
import {
  Activity,
  CheckCircle,
  Code,
  Monitor,
  Settings,
  Shield,
  ShieldCheck,
} from "lucide-react";

const serviceTracks = [
  {
    icon: Code,
    title: "Texas Public Sector Subcontracting",
    bullets: [
      "Subcontract delivery for primes responding to Texas state opportunities",
      "VetHUB-aligned execution where veteran participation is a contract requirement",
      "Rapid staffing for software development, integration, and technical delivery",
    ],
    color: "bg-burnt-orange-50 text-burnt-orange-700 border-burnt-orange-100",
  },
  {
    icon: Shield,
    title: "Defense Software & Integration",
    bullets: [
      "Mission software across secure cloud, edge, and disconnected environments",
      "API and data integration for sensor, platform, and command-and-control systems",
      "Delivery built for reliability, auditability, and field conditions",
    ],
    color: "bg-rose-50 text-rose-700 border-rose-100",
  },
  {
    icon: Settings,
    title: "Sustainment & Field Support",
    bullets: [
      "Monitoring, change control, and release coordination after delivery",
      "Issue triage, defect prioritization, and documented handoff",
      "Tuning and recovery planning for systems already in the field",
    ],
    color: "bg-sky-50 text-sky-700 border-sky-100",
  },
];

const sustainmentAreas = [
  {
    icon: Monitor,
    title: "Operational Readiness",
    bullets: [
      "Deployment checklists and runbooks",
      "Interface validation and monitoring",
      "Clear roles and escalation paths",
    ],
  },
  {
    icon: Settings,
    title: "Sustainment Support",
    bullets: [
      "Issue triage and defect prioritization",
      "Release planning and update coordination",
      "Documentation and handoff support",
    ],
  },
  {
    icon: Activity,
    title: "Performance & Resilience",
    bullets: [
      "Alerting and fault-response planning",
      "Tuning for field conditions",
      "Recovery and continuity planning",
    ],
  },
];

const credentials = [
  { label: "Status", value: "SDVOSB · Veteran-owned" },
  { label: "Compliance", value: "CMMC-compliant · JCP certified" },
  { label: "Alignment", value: "Texas VetHUB" },
  { label: "CAGE", value: "11BV7" },
];

const procurementCodes = [
  { label: "Set-Aside", value: "SDVOSB" },
  { label: "CAGE Code", value: "11BV7" },
  { label: "UEI", value: "Y465ERNPJ5M1" },
  { label: "NAICS", value: "541511 · 541512 · 541519 · 518210" },
];

export const metadata = {
  title: "Subcontract Delivery | Ancile AI",
  description:
    "SDVOSB subcontract engineering, integration, and sustainment for prime-led public sector, energy, and defense programs. CMMC-compliant, JCP certified, Texas VetHUB-aligned.",
};

export default function Delivery() {
  return (
    <div className="page-shell min-h-screen bg-transparent">
      <Header />
      <PageHero
        eyebrow="Delivery"
        title="Subcontract engineering, integration, and sustainment for prime-led programs."
        description="A service-disabled veteran-owned (SDVOSB) delivery partner for primes that need trusted technical execution — scoped to software, integration, and the support that keeps systems running after fielding."
      >
        <div className="fade-up delay-1 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {credentials.map((item) => (
            <div key={item.label} className="lift-card rounded-2xl border border-slate-200 bg-white/90 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.label}</p>
              <p className="font-display mt-2 text-base font-semibold text-slate-900">{item.value}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <main className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8 lg:space-y-24 lg:py-24">
        <section className="fade-up">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Delivery Tracks</p>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
              Three ways we plug into a prime team.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              We take a defined slice of the technical work, deliver it on the
              prime&apos;s cadence, and stay accountable through fielding and
              sustainment.
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
        </section>

        <section className="fade-up">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-6 text-white shadow-xl sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-md">
                <p className="section-eyebrow border-white/15 bg-white/10 text-white">
                  Capability Codes
                </p>
                <h2 className="font-display mt-5 text-2xl sm:text-3xl">
                  Ready to drop into a solicitation.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Registration and set-aside details a contracting officer can
                  reference directly.
                </p>
              </div>

              <div className="grid w-full max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                {procurementCodes.map((item) => (
                  <div key={item.label} className="bg-slate-900 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </p>
                    <p className="font-display mt-2 text-base font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-[#f8f5ef] p-6 sm:p-10 fade-up">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">After Delivery</p>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
              The work doesn&apos;t end at handoff.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              Fielded systems need monitoring, disciplined change control, and a
              clear support path. We stay engaged so performance holds up once
              the system is in real use.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {sustainmentAreas.map((item) => (
              <article key={item.title} className="lift-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="inline-flex rounded-2xl bg-burnt-orange-50 p-3 text-burnt-orange-700">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
                <div className="mt-5 space-y-3">
                  {item.bullets.map((bullet) => (
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

        <section className="fade-up">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-burnt-orange-600 p-3 text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">
                  A low-risk subcontractor for compliance-driven work.
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                  SDVOSB status, CMMC compliance, and JCP certification let prime
                  teams meet set-aside and security requirements without taking
                  on delivery risk.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CallToAction
        headline="Need an SDVOSB subcontractor who can actually deliver?"
        subcopy="We staff fast and stay accountable through fielding and sustainment — for primes responding to public sector, energy, and defense work."
      />
      <Footer />
    </div>
  );
}
