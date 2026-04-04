import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CallToAction from "../../sections/CallToAction";
import {
  CheckCircle,
  ClipboardList,
  Route,
  Shield,
  Target,
  Waypoints,
} from "lucide-react";

const planningAreas = [
  {
    icon: ClipboardList,
    title: "Capability Assessment",
    desc: "Assess the mission need, current systems, data availability, and operational constraints before committing to a technical path.",
  },
  {
    icon: Route,
    title: "Roadmap Definition",
    desc: "Translate program goals into a practical sequence of pilots, integrations, and fieldable software increments.",
  },
  {
    icon: Shield,
    title: "Risk and Compliance Planning",
    desc: "Address deployment constraints, approval needs, and security considerations early in the program lifecycle.",
  },
  {
    icon: Waypoints,
    title: "Transition Planning",
    desc: "Prepare for sustainment, partner handoff, and adoption in operational environments instead of stopping at prototype delivery.",
  },
];

const engagements = [
  {
    title: "Program Scoping",
    bullets: [
      "Mission need and use-case definition",
      "Data, integration, and deployment assessment",
      "Workstream boundaries and ownership",
    ],
  },
  {
    title: "Technical Planning",
    bullets: [
      "Architecture and integration sequencing",
      "Prototype-to-production decision points",
      "Validation and transition milestones",
    ],
  },
  {
    title: "Teaming Alignment",
    bullets: [
      "Prime contractor support structures",
      "Partner role definition",
      "Execution and reporting expectations",
    ],
  },
];

export default function Strategy() {
  return (
    <div className="page-shell min-h-screen bg-transparent">
      <Header />
      <PageHero
        eyebrow="Strategy"
        title="Technical strategy for mission software programs."
        description="We help customers and prime teams define scope, sequence technical work, and plan for deployment in environments where integration, security, and operational fit matter."
      />

      <main className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8 lg:space-y-24 lg:py-24">
        <section>
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Planning Areas</p>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
              Strategy work should clarify delivery, not delay it.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {planningAreas.map((item) => (
              <article
                key={item.title}
                className="lift-card rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="inline-flex rounded-2xl bg-burnt-orange-50 p-3 text-burnt-orange-700">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-5 text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-[#f8f5ef] p-6 sm:p-10">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Engagement Models</p>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
              Support for scoped planning and partner execution.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {engagements.map((item) => (
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
            <Target className="h-10 w-10 text-burnt-orange-300" />
            <h2 className="font-display mt-5 text-3xl sm:text-4xl">
              Better planning reduces execution risk.
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Strategy support is most useful when it reduces ambiguity around
              scope, interfaces, sequencing, and operational adoption.
            </p>
          </div>
        </section>
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
}
