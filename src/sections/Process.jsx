import { ClipboardCheck, DraftingCompass, Rocket, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Assess fit",
    copy: "We align on operational need, constraints, and whether the work belongs in product software, subcontract delivery, or applied R&D.",
  },
  {
    icon: DraftingCompass,
    title: "Define scope",
    copy: "The engagement is reduced to a tractable technical package with clear ownership, interfaces, and expected outputs.",
  },
  {
    icon: Rocket,
    title: "Build and integrate",
    copy: "Execution focuses on shipping usable software with clear interfaces, priorities, and deployment intent.",
  },
  {
    icon: ShieldCheck,
    title: "Validate and transition",
    copy: "Outputs are prepared for operational use, partner handoff, or the next maturity step in the program lifecycle.",
  },
];

const Process = () => {
  return (
    <section className="border-b border-slate-200 bg-[#f6f1e9] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-eyebrow">Operating Model</p>
            <h2 className="section-title mt-5 text-4xl sm:text-5xl">
              A straightforward operating model for operational delivery.
            </h2>
            <p className="section-copy mt-5 text-lg">
              We align on the operational need, define the technical package,
              execute against clear workstreams, and prepare outputs for
              operational use.
            </p>

            <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-white shadow-xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-burnt-orange-300">
                How We Work
              </p>
              <p className="font-display mt-3 text-2xl font-semibold">
                Clear scope, disciplined execution.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Programs move faster when ownership, interfaces, and expected
                outcomes are established early.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="lift-card rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex rounded-2xl bg-burnt-orange-50 p-3 text-burnt-orange-700">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-3xl text-slate-300">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-display mt-6 text-2xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
