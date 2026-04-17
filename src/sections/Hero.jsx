"use client";

import Link from "next/link";
import { ArrowRight, Radar, Shield, Workflow, Wrench } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";

const proofPoints = [
  {
    title: "Passive sUAS Detection",
    copy: "Researched and developed C-sUAS software built around multi-modal sensor fusion with field-testing scheduled Q3FY26. In partnerhsip with a Tier-1 defense contractor.",
    icon: Radar,
  },
  {
    title: "Subcontract Execution",
    copy: "Veteran-owned AI engineering support for prime-led public sector, energy, and defense work.",
    icon: Wrench,
  },
  {
    title: "Applied Mission AI",
    copy: "Integration, evaluation, and transition support for operationally relevant AI systems.",
    icon: Workflow,
  },
];

const Hero = () => {
  const { openModal } = useContactModal();

  return (
    <section className="page-shell relative overflow-hidden border-b border-slate-200">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-stone-50 to-[#f5ece4]" />
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-burnt-orange-200/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5.5rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
        <div className="fade-up">
          <p className="section-eyebrow">
            <Shield className="h-4 w-4" />
            SDVOSB • AI Consulting and Solutions
          </p>

          <h1 className="section-title mt-6 max-w-4xl text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
            Applied AI & software engineering for operational program support.
          </h1>

          <p className="section-copy mt-6 max-w-2xl text-lg sm:text-xl">
            Ancile AI provides operational software
            and integration support for public sector, energy, and defense programs.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/engineering"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Explore Engineering Capabilities
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-burnt-orange-300 hover:text-burnt-orange-700"
            >
              Discuss Program Fit
            </button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Primary Focus", value: "Applied Research & Development" },
              { label: "Delivery Model", value: "Product + Services" },
              { label: "Contracting Fit", value: "Prime Teaming" },
            ].map((item) => (
              <div key={item.label} className="lift-card rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                <p className="font-display mt-2 text-lg font-semibold text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up delay-1">
          <div className="panel-strong rounded-[2rem] p-5 sm:p-6">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-burnt-orange-300">
                Capability Profile
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold">
                Focused delivery for defined operational needs.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Ancile supports programs that need product software, integration
                support, or applied AI execution shaped by operational
                constraints.
              </p>
            </div>

            <div className="mt-4 space-y-3">
              {proofPoints.map((item) => (
                <div
                  key={item.title}
                  className="lift-card rounded-[1.5rem] border border-slate-200 bg-white p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-burnt-orange-50 p-3 text-burnt-orange-700">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display text-lg font-semibold text-slate-900">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-7 text-slate-600">{item.copy}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
