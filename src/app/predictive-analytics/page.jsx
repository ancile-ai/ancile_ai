import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CallToAction from "../../sections/CallToAction";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Radar,
  TrendingUp,
} from "lucide-react";

const capabilities = [
  {
    icon: TrendingUp,
    title: "Forecasting",
    desc: "Time-series and trend analysis for planning, sustainment, and operational readiness.",
  },
  {
    icon: AlertTriangle,
    title: "Anomaly Detection",
    desc: "Detection of unusual patterns across sensors, systems, workflows, and data feeds.",
  },
  {
    icon: BarChart3,
    title: "Decision Support Models",
    desc: "Models that help prioritize resources, evaluate risk, and improve planning decisions.",
  },
  {
    icon: Activity,
    title: "Performance Analytics",
    desc: "Analysis of system behavior and operational outcomes to support tuning and sustainment.",
  },
];

const useCases = [
  {
    title: "Sensor and Mission Data",
    bullets: [
      "Signal and trend analysis",
      "Operational anomaly identification",
      "Readiness and usage forecasting",
    ],
  },
  {
    title: "System Sustainment",
    bullets: [
      "Maintenance and reliability forecasting",
      "Failure pattern detection",
      "Performance baseline tracking",
    ],
  },
  {
    title: "Program Planning",
    bullets: [
      "Resource allocation support",
      "Risk and scenario analysis",
      "Execution and schedule visibility",
    ],
  },
];

export default function PredictiveAnalytics() {
  return (
    <div className="page-shell min-h-screen bg-transparent">
      <Header />
      <PageHero
        eyebrow="Predictive Analytics"
        title="Applied analytics for mission planning, system awareness, and risk reduction."
        description="We apply forecasting, anomaly detection, and decision-support models to operational data where timing, reliability, and signal quality matter."
      />

      <main className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8 lg:space-y-24 lg:py-24">
        <section>
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Core Capabilities</p>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
              Analytics grounded in operational data and practical decision-making.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
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
            <p className="section-eyebrow">Use Cases</p>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
              Typical areas where predictive analytics adds value.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {useCases.map((item) => (
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
                <Radar className="h-5 w-5 text-burnt-orange-300" />
              </div>
              <div>
                <h2 className="font-display text-3xl sm:text-4xl">
                  The goal is earlier signal and better planning.
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                  Predictive analytics is most useful when it helps operators,
                  engineers, and program teams act sooner and allocate resources
                  with more confidence.
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
