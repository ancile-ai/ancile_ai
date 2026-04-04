"use client";

import Link from "next/link";
import { ArrowRight, Shield, Workflow } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";

const CallToAction = () => {
  const { openModal } = useContactModal();

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-950 text-white shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative px-6 py-10 sm:px-10 sm:py-12">
              <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-burnt-orange-500/20 blur-3xl" />
              <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-400/15 blur-3xl" />

              <div className="relative">
                <p className="section-eyebrow border-white/15 bg-white/10 text-white">
                  Program Engagement
                </p>
                <h2 className="font-display mt-5 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
                  If the scope is real, the next step should be a technical conversation.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Use the contact flow to discuss GhostPost adoption, prime
                  subcontract support, or mission-focused software delivery.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={openModal}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-burnt-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-burnt-orange-700"
                  >
                    Contact Ancile
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Review Company Profile
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 bg-white/5 px-6 py-10 sm:px-10 lg:border-l lg:border-t-0">
              <div className="space-y-4">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-white/10 p-3">
                      <Shield className="h-5 w-5 text-burnt-orange-300" />
                    </div>
                    <div>
                      <p className="font-display text-lg font-semibold">Best fit</p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        Teams that need a focused software partner for product,
                        integration, or mission-delivery work.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-white/10 p-3">
                      <Workflow className="h-5 w-5 text-burnt-orange-300" />
                    </div>
                    <div>
                      <p className="font-display text-lg font-semibold">Discussion topics</p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        Product fit, teaming structure, integration scope, field
                        constraints, and execution model.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-burnt-orange-300">
                    Contact
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">sales@ancile.io</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Shared intake for program discussions and teaming inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
