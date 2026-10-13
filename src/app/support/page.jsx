import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import JsonLd from "../../components/JsonLd";
import { buildPageMetadata, serviceJsonLd } from "../../lib/site";
import DeliveryConsole from "../../components/DeliveryConsole";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import ShowcaseRow from "../../components/ShowcaseRow";
import { PipelineMotif } from "../../components/LaneMotifs";
import CallToAction from "../../sections/CallToAction";
import { Activity, Code, Monitor, Settings, Shield } from "lucide-react";

const featuredTrack = {
  icon: Code,
  title: "Texas Public Sector Subcontracting",
  copy: "Subcontract delivery for primes responding to Texas state opportunities, where veteran participation is a contract requirement.",
  bullets: [
    "Subcontract delivery for primes responding to Texas state opportunities",
    "VetHUB-aligned execution where veteran participation is a contract requirement",
    "Rapid staffing for software development, integration, and technical delivery",
  ],
};

const secondaryTracks = [
  {
    icon: Shield,
    title: "Defense Software & Integration",
    bullets: [
      "Mission software across secure cloud, edge, and disconnected environments",
      "API and data integration for sensor, platform, and C2 systems",
      "Delivery built for reliability, auditability, and field conditions",
    ],
  },
  {
    icon: Settings,
    title: "Sustainment & Field Support",
    bullets: [
      "Monitoring, change control, and release coordination after delivery",
      "Issue triage, defect prioritization, and documented handoff",
      "Tuning and recovery planning for systems already in the field",
    ],
  },
];

const sustainmentAreas = [
  {
    icon: Monitor,
    title: "Operational readiness",
    bullets: [
      "Deployment checklists and runbooks",
      "Interface validation and monitoring",
      "Clear roles and escalation paths",
    ],
  },
  {
    icon: Settings,
    title: "Sustainment support",
    bullets: [
      "Issue triage and defect prioritization",
      "Release planning and update coordination",
      "Documentation and handoff support",
    ],
  },
  {
    icon: Activity,
    title: "Performance & resilience",
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

export const metadata = buildPageMetadata({
  title: "SDVOSB Subcontract Support",
  description:
    "SDVOSB subcontract engineering, integration, and sustainment for prime-led public sector, energy, and defense programs. CMMC-compliant, JCP certified, Texas VetHUB-aligned. CAGE 11BV7.",
  path: "/support",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Subcontract Support", path: "/support" },
];

export default function Delivery() {
  return (
    <div className="page-shell min-h-screen bg-transparent">
      <Header />
      <main id="main-content">
        <JsonLd data={serviceJsonLd({ name: "SDVOSB Subcontract Engineering, Integration, and Sustainment", description: metadata.description, path: "/support", serviceType: "Government and defense software subcontracting" })} />
        <PageHero
          breadcrumbs={breadcrumbs}
          eyebrow="Delivery"
          title="Subcontract engineering, integration, and sustainment for your programs."
          description="A service-disabled veteran-owned (SDVOSB) delivery partner for primes that need trusted technical execution, scoped to software, integration, and the support that keeps systems running after fielding."
          visual={<DeliveryConsole />}
        >
          <div className="fade-up delay-2 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {credentials.map((item) => (
              <div
                key={item.label}
                className="lift-card rounded-lg border border-slate-200 bg-white/90 p-4 backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {item.label}
                </p>
                <p className="font-display mt-2 text-base font-semibold text-slate-900">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </PageHero>

        <div>
          {/* Delivery tracks — bento */}
          <section className="border-b border-slate-200 bg-white py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Delivery tracks"
                title="Three ways we plug into your team."
                copy="We take a defined slice of the technical work, deliver it on the prime's cadence, and stay accountable through fielding and sustainment."
              />

              <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-6 lg:grid-rows-2">
                <Reveal className="lg:col-span-4 lg:row-span-2">
                  <article className="lift-card relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-[#fff7f1] via-white to-[#f6efe6] p-8 shadow-sm">
                    <div className="pointer-events-none absolute -right-6 bottom-4 h-28 w-52 text-burnt-orange-500/20">
                      <PipelineMotif />
                    </div>
                    <div className="relative flex items-center gap-3">
                      <span className="rounded-md border border-burnt-orange-200 bg-burnt-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-burnt-orange-700">
                        Subcontracting goal alignment
                      </span>
                    </div>
                    <h3 className="font-display relative mt-6 text-2xl font-semibold text-slate-900 sm:text-3xl">
                      {featuredTrack.title}
                    </h3>
                    <p className="relative mt-3 max-w-md text-[0.95rem] leading-7 text-slate-600">
                      {featuredTrack.copy}
                    </p>
                    <div className="relative mt-6 space-y-3">
                      {featuredTrack.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3">
                          <span className="mt-[0.55rem] h-1.5 w-1.5 flex-shrink-0 bg-burnt-orange-600" aria-hidden="true" />
                          <p className="text-sm leading-6 text-slate-700">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                </Reveal>

                {secondaryTracks.map((track, index) => (
                  <Reveal
                    key={track.title}
                    delay={120 + index * 90}
                    className="lg:col-span-2"
                  >
                    <article className="lift-card flex h-full flex-col rounded-xl border border-slate-200 bg-[#fcfbf8] p-7 shadow-sm">
                      <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-burnt-orange-700">{`0${index + 2}`}</span>
                      <h3 className="font-display mt-3 text-xl font-semibold text-slate-900">
                        {track.title}
                      </h3>
                      <div className="mt-4 space-y-2.5">
                        {track.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-2.5">
                            <span className="mt-[0.55rem] h-1.5 w-1.5 flex-shrink-0 bg-burnt-orange-600" aria-hidden="true" />
                            <p className="text-[0.8rem] leading-5 text-slate-600">
                              {bullet}
                            </p>
                          </div>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Capability codes — dark cinematic band */}
          <section className="band-dark relative overflow-hidden border-y border-slate-800/60">
            <div className="aurora-dark pointer-events-none absolute inset-0" />
            <div className="soft-grid-dark pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <Reveal className="min-w-0">
                  <p className="section-eyebrow text-burnt-orange-300">
                    Capability codes
                  </p>
                  <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
                    Ready to drop into a solicitation.
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-slate-300">
                    Registration and set-aside details a contracting officer can
                    reference directly.
                  </p>
                </Reveal>

                <Reveal delay={120} className="min-w-0">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {procurementCodes.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-lg border border-white/10 bg-white/5 p-5"
                      >
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-burnt-orange-300">
                          {item.label}
                        </p>
                        <p className="font-display mt-2 text-base font-semibold text-white">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* After delivery — alternating showcase row */}
          <section className="border-b border-slate-200 bg-[#f8f5ef] py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Reveal>
                <ShowcaseRow
                  reverse
                  eyebrow="After delivery"
                  title="The work doesn't end at handoff."
                  copy="Fielded systems need monitoring, disciplined change control, and a clear support path. We stay engaged so performance holds up once the system is in real use."
                  visual={
                    <div className="panel-strong space-y-3 rounded-xl p-5 sm:p-6">
                      {sustainmentAreas.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-lg border border-slate-200 bg-white p-5"
                        >
                          <div className="flex items-center gap-3">
                            <h4 className="font-display text-base font-semibold text-slate-900">
                              {item.title}
                            </h4>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {item.bullets.map((bullet) => (
                              <span
                                key={bullet}
                                className="rounded-md border border-slate-200 bg-[#fcfbf8] px-2.5 py-1 text-[0.7rem] text-slate-600"
                              >
                                {bullet}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  }
                />
              </Reveal>
            </div>
          </section>

          {/* Closing statement */}
          <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Reveal>
                <div className="rounded-xl border border-slate-200 bg-[#fcfbf8] p-8 text-center shadow-sm sm:p-12">
                  <h2 className="font-display mt-6 text-3xl text-slate-900 sm:text-4xl">
                    A low-risk, ready subcontractor for compliance-driven work.
                  </h2>
                  <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                    SDVOSB status, CMMC compliance, and JCP certification let prime
                    teams meet subcontracting goals and security requirements without taking on
                    delivery risk.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-2">
                    {["SDVOSB", "CMMC-compliant", "JCP certified", "Texas VetHUB", "CAGE 11BV7"].map(
                      (chip) => (
                        <span
                          key={chip}
                          className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                        >
                          {chip}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </div>

        <CallToAction
          headline="Need an SDVOSB subcontractor who can actually deliver?"
          subcopy="We staff fast and stay accountable through fielding and sustainment, for primes responding to public sector, energy, and defense work."
        />
      </main>
      <Footer />
    </div>
  );
}
