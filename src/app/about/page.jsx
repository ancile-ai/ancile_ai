import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/sections/CallToAction";
import { CheckCircle, Shield, Users, Workflow } from "lucide-react";

const companyPoints = [
  "Service-disabled veteran-owned (SDVOSB) software company with a deliberately focused scope",
  "A passive sUAS detection product built on multi-modal sensor fusion",
  "Subcontract engineering, integration, and sustainment for your public sector, energy, and defense programs",
  "Applied AI — agentic, edge, and physical — delivered with governance and evals",
];

const values = [
  {
    title: "Clear scope",
    desc: "We work best when the operational need, interfaces, and delivery responsibilities are defined.",
  },
  {
    title: "Operational fit",
    desc: "Software has to work in the environments where it will actually be used, not only in a demo setting.",
  },
  {
    title: "Delivery discipline",
    desc: "Programs move faster when execution, change control, and handoff expectations are established early.",
  },
];

const teamPoints = [
  "Backgrounds across defense, software engineering, and operational-oriented technical delivery",
  "Experience with security-conscious systems and operationally constrained environments",
  "Focus on building software that can be integrated, fielded, and sustained",
];

export const metadata = {
  title: "About | Ancile",
  description:
    "Ancile is a service-disabled veteran-owned (SDVOSB) software company delivering passive sUAS detection, subcontract delivery, and applied AI for public sector, energy, and defense missions.",
};

export default function AboutPage() {
  return (
    <div className="page-shell min-h-screen bg-transparent">
      <Header />
      <PageHero
        eyebrow="About Ancile"
        title="Mission software company built for focused delivery."
        description="Ancile is a service-disabled veteran-owned (SDVOSB) software company working in three lanes: passive sUAS detection, subcontract delivery, and applied AI for public sector, energy, and defense missions."
      />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="section-eyebrow">Company profile</p>
            <h2 className="font-display mt-5 text-3xl text-slate-900 sm:text-4xl">
              What we do
            </h2>
            <div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {companyPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-4.5 w-4.5 flex-shrink-0 text-burnt-orange-600" />
                  <p className="text-sm leading-7 text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </main>

      {/* Why the company exists — dark cinematic band */}
      <section className="band-dark relative overflow-hidden border-y border-slate-800/60">
        <div className="aurora-dark pointer-events-none absolute inset-0" />
        <div className="soft-grid-dark pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="mx-auto inline-flex rounded-2xl bg-white/10 p-3 text-burnt-orange-300">
              <Shield className="h-6 w-6" />
            </span>
            <h2 className="font-display mx-auto mt-6 max-w-3xl text-3xl font-semibold text-white sm:text-4xl lg:text-[2.7rem]">
              Software should strengthen the mission it supports.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              The company was built to support software efforts where
              operational constraints, deployment realities, and execution
              discipline matter as much as the code itself. The name references
              the Roman shield associated with protection — a reminder that the
              work exists to support awareness, decision-making, and resilience
              in the field.
            </p>
          </Reveal>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <section>
          <SectionHeading
            align="center"
            eyebrow="How we work"
            title="Principles that shape delivery."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <article className="lift-card h-full rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
                  <h3 className="font-display text-2xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <article className="lift-card h-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="inline-flex rounded-2xl bg-burnt-orange-50 p-3 text-burnt-orange-700">
                    <Users className="h-5 w-5" />
                  </span>
                  <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">
                    Team background
                  </h2>
                </div>
                <div className="mt-6 space-y-4">
                  {teamPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-4.5 w-4.5 flex-shrink-0 text-burnt-orange-600" />
                      <p className="text-sm leading-7 text-slate-700">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={100}>
              <article className="lift-card h-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="inline-flex rounded-2xl bg-burnt-orange-50 p-3 text-burnt-orange-700">
                    <Workflow className="h-5 w-5" />
                  </span>
                  <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">
                    Why “Ancile”
                  </h2>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-700">
                  The name references the Roman shield associated with
                  protection. For us, it reflects software built to support
                  awareness, decision-making, and resilience in the field.
                </p>
              </article>
            </Reveal>
          </div>
        </section>
      </main>

      <CallToAction />
      <Footer />
    </div>
  );
}
