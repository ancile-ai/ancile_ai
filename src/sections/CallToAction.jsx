"use client";

import Link from "next/link";
import { ArrowRight, Mail, Shield, Workflow } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";
import { AncileMark } from "../components/Logo";
import Reveal from "../components/Reveal";

const CallToAction = ({
  headline = "If the scope is real, the next step should be a technical conversation.",
  subcopy = "Reach out if you're pursuing a partnership, or need a CMMC-compliant, SDVOSB subcontract partner with mission software experience.",
}) => {
  const { openModal } = useContactModal();

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="band-dark relative overflow-hidden rounded-[2.5rem] border border-slate-800/60 shadow-2xl">
            <div className="aurora-dark pointer-events-none absolute inset-0" />
            <div className="soft-grid-dark pointer-events-none absolute inset-0 opacity-50" />
            <AncileMark
              tone="dark"
              className="pointer-events-none absolute -right-12 -top-12 h-64 w-auto opacity-[0.05]"
            />

            <div className="relative grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="px-6 py-12 sm:px-10 sm:py-14">
                <p className="section-eyebrow border-white/15 bg-white/10 text-white">
                  Program engagement
                </p>
                <h2 className="font-display mt-6 max-w-2xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl">
                  {headline}
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  {subcopy}
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={openModal}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-burnt-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-burnt-orange-900/40 transition hover:bg-burnt-orange-700"
                  >
                    Contact Ancile
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Review company profile
                  </Link>
                </div>
              </div>

              <div className="border-t border-white/10 bg-white/[0.03] px-6 py-12 sm:px-10 lg:border-l lg:border-t-0">
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-start gap-4">
                      <span className="rounded-xl bg-white/10 p-2.5 text-burnt-orange-300">
                        <Shield className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-display text-base font-semibold text-white">
                          Best fit
                        </p>
                        <p className="mt-1.5 text-sm leading-6 text-slate-300">
                          Teams that need a focused software partner for product,
                          integration, or operational-delivery work.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-start gap-4">
                      <span className="rounded-xl bg-white/10 p-2.5 text-burnt-orange-300">
                        <Workflow className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-display text-base font-semibold text-white">
                          Discussion topics
                        </p>
                        <p className="mt-1.5 text-sm leading-6 text-slate-300">
                          Product fit, teaming structure, integration scope, field
                          constraints, and execution model.
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="mailto:sales@ancile.io"
                    className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-burnt-orange-500/40 hover:bg-white/[0.08]"
                  >
                    <span className="rounded-xl bg-white/10 p-2.5 text-burnt-orange-300">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-burnt-orange-300">
                        Contact
                      </p>
                      <p className="font-display mt-1.5 text-base font-semibold text-white">
                        sales@ancile.io
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Shared intake for program and teaming inquiries.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CallToAction;
