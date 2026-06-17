import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CallToAction from "@/sections/CallToAction";
import { CheckCircle, Shield, Users, Workflow } from "lucide-react";

const companyPoints = [
  "Service-disabled veteran-owned (SDVOSB) software company with a deliberately focused scope",
  "A passive sUAS detection product built on multi-modal sensor fusion",
  "Subcontract engineering, integration, and sustainment for prime-led public sector and defense programs",
  "Applied AI — agentic, edge, and physical — delivered with governance and evals",
];

const values = [
  {
    title: "Clear Scope",
    desc: "We work best when the operational need, interfaces, and delivery responsibilities are defined.",
  },
  {
    title: "Operational Fit",
    desc: "Software has to work in the environments where it will actually be used, not only in a demo setting.",
  },
  {
    title: "Delivery Discipline",
    desc: "Programs move faster when execution, change control, and handoff expectations are established early.",
  },
];

const teamPoints = [
  "Backgrounds across defense, software engineering, and operational-oriented technical delivery",
  "Experience with security-conscious systems and operationally constrained environments",
  "Focus on building software that can be integrated, fielded, and sustained",
];

export default function AboutPage() {
  return (
    <div className="page-shell min-h-screen bg-transparent">
      <Header />
      <PageHero
        eyebrow="About Ancile AI"
        title="Mission software company built for focused delivery."
        description="Ancile AI is a service-disabled veteran-owned (SDVOSB) software company working in three lanes: passive sUAS detection, subcontract delivery, and applied AI for public sector and defense missions."
      />

      <main className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8 lg:space-y-24 lg:py-24">
        <section>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <article className="lift-card rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="section-eyebrow">Company Profile</p>
              <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
                What we do
              </h2>
              <div className="mt-6 space-y-4">
                {companyPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-4.5 w-4.5 flex-shrink-0 text-burnt-orange-600" />
                    <p className="text-sm leading-7 text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="lift-card rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-xl">
              <div className="rounded-2xl bg-white/10 p-3 w-fit">
                <Shield className="h-5 w-5 text-burnt-orange-300" />
              </div>
              <h2 className="font-display mt-5 text-3xl sm:text-4xl">
                Why the company exists
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                The company was built to support software efforts where operational
                constraints, deployment realities, and execution discipline
                matter as much as the code itself.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-[#f8f5ef] p-6 sm:p-10">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">How We Work</p>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
              Principles that shape delivery.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <article
                key={item.title}
                className="lift-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="lift-card rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="rounded-2xl bg-burnt-orange-50 p-3 w-fit text-burnt-orange-700">
                <Users className="h-5 w-5" />
              </div>
              <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
                Team background
              </h2>
              <div className="mt-6 space-y-4">
                {teamPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-4.5 w-4.5 flex-shrink-0 text-burnt-orange-600" />
                    <p className="text-sm leading-7 text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="lift-card rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="rounded-2xl bg-burnt-orange-50 p-3 w-fit text-burnt-orange-700">
                <Workflow className="h-5 w-5" />
              </div>
              <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
                Why “Ancile”
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-700">
                The name references the Roman shield associated with protection.
                For us, it reflects software built to support awareness,
                decision-making, and resilience in the field.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                The point is not symbolism for its own sake. It is a reminder
                that software should strengthen the mission it supports.
              </p>
            </article>
          </div>
        </section>
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
}
