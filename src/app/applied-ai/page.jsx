import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import HarnessDiagram from "../../components/HarnessDiagram";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import { GraphMotif, PipelineMotif, RadarMotif } from "../../components/LaneMotifs";
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
    motif: GraphMotif,
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
    motif: PipelineMotif,
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
    motif: RadarMotif,
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
    title: "Tracing & observability",
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

export const metadata = {
  title: "Applied AI & R&D | Ancile",
  description:
    "Agentic, edge, and physical AI for the mission — built with the governance, evaluations, and observability needed to field it responsibly.",
};

export default function AppliedAI() {
  return (
    <div className="page-shell min-h-screen bg-transparent">
      <Header />
      <PageHero
        eyebrow="Applied AI & R&D"
        title="Agentic, edge, and physical AI built to run in the real world."
        description="We move past the chatbot era into systems that plan, use tools, and act. The model is the commodity — reliability comes from the harness engineered around it: tools, context, verification, and guardrails."
        visual={<HarnessDiagram />}
      />

      <main>
        {/* Focus areas */}
        <section className="border-b border-slate-200 bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Focus areas"
              title="Three areas where applied AI is moving fastest in 2026."
              copy="Each lane feeds the others — perception work sharpens the sUAS product, and edge constraints shape how we build agents."
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {lanes.map((lane, index) => (
                <Reveal key={lane.title} delay={index * 90}>
                  <article className="lift-card relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-[#fcfbf8] p-7 shadow-sm">
                    <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 text-burnt-orange-500/15">
                      <lane.motif />
                    </div>
                    <span className="relative inline-flex w-fit rounded-2xl bg-slate-900 p-3 text-white">
                      <lane.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display relative mt-5 text-2xl font-semibold text-slate-900">
                      {lane.title}
                    </h3>
                    <p className="relative mt-2 text-sm font-medium leading-6 text-burnt-orange-700">
                      {lane.tagline}
                    </p>
                    <div className="relative mt-6 space-y-3">
                      {lane.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-burnt-orange-600" />
                          <p className="text-sm leading-6 text-slate-600">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* The control layer — dark cinematic band */}
        <section className="band-dark relative overflow-hidden border-y border-slate-800/60">
          <div className="aurora-dark pointer-events-none absolute inset-0" />
          <div className="soft-grid-dark pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="section-eyebrow border-white/15 bg-white/10 text-white">
                Harness engineering
              </p>
              <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
                The model is the easy part. The harness is the work.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                A capable model is now a commodity you can swap out. What makes an
                agent reliable in the field is everything engineered around it —
                tool orchestration, context management, verification, and
                guardrails. That control layer is what we build, evaluate, and
                govern.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {controls.map((item, index) => (
                <Reveal key={item.title} delay={index * 90}>
                  <article className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                    <span className="inline-flex rounded-2xl bg-white/10 p-3 text-burnt-orange-300">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display mt-5 text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {item.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment posture */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="rounded-[2rem] border border-slate-200 bg-[#fcfbf8] p-8 text-center shadow-sm sm:p-12">
                <span className="mx-auto inline-flex rounded-2xl bg-burnt-orange-600 p-3 text-white">
                  <Lock className="h-6 w-6" />
                </span>
                <h2 className="font-display mt-6 text-3xl text-slate-900 sm:text-4xl">
                  Private by default, open-weight when control demands it.
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  For sensitive missions we design for self-hosted and open-weight
                  deployment, so data and models stay inside the boundary — and the
                  R&amp;D feeds directly back into the sUAS product.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-2">
                  {["Self-hosted", "Open-weight", "In-boundary data", "Air-gap capable"].map(
                    (chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
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
      </main>

      <CallToAction
        headline="Have an agentic, edge, or physical-AI problem that has to ship?"
        subcopy="We build the governance, evals, and observability that make these systems safe to field — not just demo."
      />
      <Footer />
    </div>
  );
}
