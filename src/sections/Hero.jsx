"use client";

import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";
import TrackConsole from "../components/TrackConsole";

const credentials = [
  { label: "Status", value: "SDVOSB" },
  { label: "Security", value: "CMMC-compliant - Level 2" },
  { label: "Certification", value: "JCP Certified" },
  { label: "CAGE", value: "11BV7" },
];

const Hero = () => {
  const { openModal } = useContactModal();

  return (
    <section className="page-shell relative overflow-hidden border-b border-slate-200">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-stone-50 to-[#f5ece4]" />
      <div className="aurora-wash pointer-events-none absolute inset-0" />
      <div className="grain-overlay" />

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="fade-up min-w-0">
            <p className="section-eyebrow">
              <Shield className="h-4 w-4" />
              SDVOSB • Mission Software &amp; Applied AI
            </p>

            <h1 className="section-title mt-6 max-w-4xl text-5xl leading-[0.98] sm:text-6xl lg:text-[4.3rem]">
              Mission software and <span className="text-gradient">applied AI</span> for public sector, energy, and defense.
            </h1>

            <p className="section-copy mt-6 max-w-2xl text-lg sm:text-xl">
              Ancile is a service-disabled veteran-owned software company
              working in three focused lanes: passive sUAS detection, subcontract
              delivery, and applied AI.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/overview"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Explore Capabilities
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
          </div>

          <div className="fade-up delay-1 min-w-0">
            <TrackConsole />
          </div>
        </div>

        {/* Trust strip — certifications as a credibility band. */}
        <div className="fade-up delay-2 mt-14 flex flex-wrap items-center gap-x-8 gap-y-5 rounded-2xl border border-slate-200 bg-white/70 px-6 py-5 backdrop-blur">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Qualified to contract
          </span>
          <div className="hidden h-8 w-px bg-slate-200 sm:block" />
          <dl className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {credentials.map((item) => (
              <div key={item.label} className="flex flex-col">
                <dt className="text-[0.7rem] font-semibold uppercase tracking-wider text-slate-400">
                  {item.label}
                </dt>
                <dd className="font-display text-base font-semibold text-slate-900">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
