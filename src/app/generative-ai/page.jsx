import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CallToAction from "../../sections/CallToAction";
import {
  Activity,
  Bot,
  CheckCircle,
  Eye,
  FileText,
  Lock,
  MessageSquare,
  Network,
  Shield,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    icon: FileText,
    title: "RAG and Knowledge Systems",
    desc: "Connect models to internal documents, manuals, policies, and operational data with controlled retrieval.",
  },
  {
    icon: MessageSquare,
    title: "Workflow Assistants",
    desc: "Assistants designed for research, triage, document handling, and human-in-the-loop support tasks.",
  },
  {
    icon: Bot,
    title: "Agentic Workflows",
    desc: "Tool-using agents for bounded multi-step tasks where planning, auditability, and control are required.",
  },
  {
    icon: Lock,
    title: "Open-Weight and Private Deployment",
    desc: "Deployment patterns that support private environments, open-weight model options, access control, and system boundaries.",
  },
];

const solutionAreas = [
  {
    title: "Document and Knowledge Work",
    bullets: [
      "Document search and synthesis",
      "Policy and procedure assistants",
      "Technical manual question-answering",
    ],
  },
  {
    title: "Operational Workflow Support",
    bullets: [
      "Case and task triage",
      "Research and briefing support",
      "Structured output for downstream systems",
    ],
  },
  {
    title: "Controlled Automation",
    bullets: [
      "Human approval steps",
      "Bounded tool use and orchestration",
      "Logging and reviewable outputs",
    ],
  },
  {
    title: "Agentic Operations",
    bullets: [
      "Multi-step planning and execution",
      "Tool selection and stateful workflows",
      "Escalation to human review when needed",
    ],
  },
];

export default function GenerativeAI() {
  const differentiators = [
    {
      icon: Shield,
      title: "Governance and HITL",
      desc: "Approval gates, role-aware access, and human review points for workflows that cannot run fully unattended.",
    },
    {
      icon: Eye,
      title: "Tracing and Observability",
      desc: "Visibility into prompts, tool calls, agent decisions, and system behavior so teams can inspect and improve runs.",
    },
    {
      icon: CheckCircle,
      title: "Evaluations",
      desc: "Task-specific evals to measure quality, reliability, regressions, and readiness before broader rollout.",
    },
    {
      icon: Activity,
      title: "Monitoring",
      desc: "Ongoing monitoring for performance, drift, failure patterns, and workflow health after deployment.",
    },
  ];

  return (
    <div className="page-shell min-h-screen bg-transparent">
      <Header />
      <PageHero
        eyebrow="Generative AI"
        title="Generative AI systems for knowledge work, workflow support, and controlled automation."
        description="We build retrieval, assistant, agentic workflow, and automation patterns with governance, tracing, observability, and review requirements built into the design."
      />

      <main className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8 lg:space-y-24 lg:py-24">
        <section>
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Core Capabilities</p>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
              Applied generative AI built around task fit and deployment control.
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
            <p className="section-eyebrow">Solution Areas</p>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
              Typical ways generative AI is applied in operational environments.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {solutionAreas.map((item) => (
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
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Agentic Systems</p>
              <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
                More teams are moving beyond chat into tool-using systems.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Teams are increasingly looking for systems that can retrieve
                context, choose tools, take bounded actions, and hand work back
                to people with clear logs and review points. We design for that
                model when the workflow calls for more than a standalone chatbot.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Tool-Using Assistants",
                  desc: "Agents that can search, retrieve, summarize, and take scoped actions across approved tools.",
                },
                {
                  title: "Human Approval Loops",
                  desc: "Workflows that pause for review before sensitive actions, external changes, or final submission.",
                },
                {
                  title: "Open-Weight Options",
                  desc: "Architectures that can support self-hosted or private-model deployment when control requirements demand it.",
                },
                {
                  title: "Multi-Agent Coordination",
                  desc: "Specialized agents that divide work across research, retrieval, drafting, and operational execution tasks.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="lift-card rounded-[1.75rem] border border-slate-200 bg-[#fcfbf8] p-5"
                >
                  <div className="inline-flex rounded-2xl bg-burnt-orange-50 p-3 text-burnt-orange-700">
                    <Network className="h-5 w-5" />
                  </div>
                  <h3 className="font-display mt-4 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-[#f8f5ef] p-6 sm:p-10">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Differentiators</p>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
              The systems should be governable, inspectable, and measurable.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Agentic workflows matter, but a stronger differentiator is
              building systems with the operational controls needed to run them
              responsibly in real environments.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {differentiators.map((item) => (
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

        <section>
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8 text-white shadow-xl sm:p-10">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-white/10 p-3">
                <Workflow className="h-5 w-5 text-burnt-orange-300" />
              </div>
              <div>
                <h2 className="font-display text-3xl sm:text-4xl">
                  Strong deployments depend on bounded workflows and reviewable outputs.
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                  The objective is useful assistance that fits existing systems,
                  operating models, and approval paths.
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
