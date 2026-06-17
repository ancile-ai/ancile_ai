import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CallToAction from "../../sections/CallToAction";
import {
  Activity,
  Bot,
  CheckCircle,
  Cpu,
  Eye,
  Lock,
  Radar,
  ShieldCheck,
} from "lucide-react";

const lanes = [
  {
    icon: Bot,
    title: "Agentic AI",
    tagline: "Systems that plan, use tools, and act — with a human in the loop.",
    bullets: [
      "Tool-using agents for bounded, multi-step mission tasks",
      "Retrieval and knowledge assistants over manuals, policies, and ops data",
      "Approval gates and escalation for actions that can't run unattended",
    ],
  },
  {
    icon: Cpu,
    title: "Edge AI",
    tagline: "Inference at the tactical edge — denied, disconnected, low-SWaP.",
    bullets: [
      "Distilled and quantized models sized for embedded and edge hardware",
      "Offline-capable inference for disconnected and contested environments",
      "Private and open-weight deployment when data can't leave the boundary",
    ],
  },
  {
    icon: Radar,
    title: "Physical AI",
    tagline: "Perception and autonomy across real-world sensors.",
    bullets: [
      "Multi-modal sensor fusion for detection, localization, and classification",
      "Perception models tuned for noisy, real-world signal conditions",
      "Forecasting and anomaly detection for decision support and readiness",
    ],
  },
];

const controls = [
  {
    icon: ShieldCheck,
    title: "Governance & HITL",
    desc: "Approval gates, role-aware access, and human review for workflows that can't run fully unattended.",
  },
  {
    icon: Eye,
    title: "Tracing & Observability",
    desc: "Visibility into prompts, tool calls, and agent decisions so teams can inspect and improve every run.",
  },
  {
    icon: CheckCircle,
    title: "Evaluations",
    desc: "Task-specific evals that measure quality, reliability, and regressions before broader rollout.",
  },
  {
    icon: Activity,
    title: "Monitoring",
    desc: "Ongoing monitoring for drift, failure patterns, and workflow health after deployment.",
  },
];

export default function AppliedAI() {
  return (
    <div className="page-shell min-h-screen bg-transparent">
      <Header />
      <PageHero
        eyebrow="Lane 3 — Applied AI & R&D"
        title="Agentic, edge, and physical AI built to run in the real world."
        description="We move past the chatbot era into systems that plan and act, run at the tactical edge, and reason over real sensor data — with the governance, evals, and observability needed to field them responsibly."
      />

      <main className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8 lg:space-y-24 lg:py-24">
        <section className="fade-up">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Focus Areas</p>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
              Three areas where applied AI is moving fastest in 2026.
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
                <p className="mt-2 text-sm font-medium leading-6 text-slate-500">
                  {lane.tagline}
                </p>
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

        <section className="rounded-[2rem] border border-slate-200 bg-[#f8f5ef] p-6 sm:p-10 fade-up">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">The Differentiator</p>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
              Most teams can build an agent. Few can govern one.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Three in four organizations want agentic AI, but only about one in
              five have a mature way to govern it. We build the control layer —
              governance, evals, observability — that makes these systems safe to
              field.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {controls.map((item) => (
              <article
                key={item.title}
                className="lift-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="inline-flex rounded-2xl bg-burnt-orange-50 p-3 text-burnt-orange-700">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-4 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="fade-up">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8 text-white shadow-xl sm:p-10">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-white/10 p-3">
                <Lock className="h-5 w-5 text-burnt-orange-300" />
              </div>
              <div>
                <h2 className="font-display text-3xl sm:text-4xl">
                  Private by default, open-weight when control demands it.
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                  For sensitive missions we design for self-hosted and
                  open-weight deployment, so data and models stay inside the
                  boundary — and the R&D feeds directly back into the sUAS
                  product.
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
