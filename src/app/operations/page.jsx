import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CallToAction from "../../sections/CallToAction";
import {
  Activity,
  AlertTriangle,
  CheckCircle,
  Monitor,
  Settings,
  Shield,
} from "lucide-react";

const areas = [
  {
    icon: Monitor,
    title: "System Monitoring",
    desc: "Operational visibility across application health, integration points, and deployment status.",
  },
  {
    icon: Settings,
    title: "Configuration and Change Control",
    desc: "Controlled updates, interface changes, and release practices aligned to operational needs.",
  },
  {
    icon: Shield,
    title: "Security and Reliability Support",
    desc: "Operational support that accounts for resilience, recoverability, and deployment constraints.",
  },
  {
    icon: Activity,
    title: "Performance Review",
    desc: "Ongoing assessment of how software behaves in the field and where tuning is required.",
  },
];

const workstreams = [
  {
    title: "Operational Readiness",
    bullets: [
      "Deployment checklists and runbooks",
      "Interface validation and monitoring",
      "Role and escalation clarity",
    ],
  },
  {
    title: "Sustainment Support",
    bullets: [
      "Issue triage and defect prioritization",
      "Release planning and update coordination",
      "Documentation and handoff support",
    ],
  },
  {
    title: "Performance and Resilience",
    bullets: [
      "Alerting and fault response planning",
      "System tuning for field conditions",
      "Recovery and continuity considerations",
    ],
  },
];

export default function Operations() {
  return (
    <div className="page-shell min-h-screen bg-transparent">
      <Header />
      <PageHero
        eyebrow="Operations"
        title="Operational support for operational software and deployed systems."
        description="We support customers and partners who need software sustainment, deployment discipline, and operational visibility after delivery."
      />

      <main className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8 lg:space-y-24 lg:py-24">
        <section>
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Core Areas</p>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
              Operations support built around field use and operational continuity.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {areas.map((item) => (
              <article
                key={item.title}
                className="lift-card rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="inline-flex rounded-2xl bg-burnt-orange-50 p-3 text-burnt-orange-700">
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

        <section className="rounded-[2rem] border border-slate-200 bg-[#f8f5ef] p-6 sm:p-10">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Workstreams</p>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
              Typical support areas after delivery.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {workstreams.map((item) => (
              <article
                key={item.title}
                className="lift-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>
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

        <section>
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8 text-white shadow-xl sm:p-10">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-white/10 p-3">
                <AlertTriangle className="h-5 w-5 text-burnt-orange-300" />
              </div>
              <div>
                <h2 className="font-display text-3xl sm:text-4xl">
                  Sustained performance depends on disciplined operations.
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                  Mission systems need monitoring, controlled change management,
                  and clear support pathways after deployment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
}
