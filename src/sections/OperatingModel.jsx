import Reveal from "../components/Reveal";

const steps = [
  {
    title: "Assess fit",
    copy: "Align on the operational need, constraints, and whether the work belongs in software, subcontract delivery, or applied R&D.",
  },
  {
    title: "Define scope",
    copy: "Reduce the engagement to a tractable technical package with clear ownership, interfaces, and expected outputs.",
  },
  {
    title: "Build & integrate",
    copy: "Ship usable software with clear interfaces, priorities, and deployment intent.",
  },
  {
    title: "Validate & transition",
    copy: "Prepare outputs for operational use, partner handoff, or the next maturity step in the program lifecycle.",
  },
];

const OperatingModel = () => {
  return (
    <section className="band-dark relative overflow-hidden border-y border-slate-800/60">
      <div className="aurora-dark pointer-events-none absolute inset-0" />
      <div className="soft-grid-dark pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Operating model</p>
          <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
            A straightforward path from need to fielded capability.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Programs move faster when ownership, interfaces, and expected outcomes
            are set early. We align on the need, define the package, execute, and
            prepare the output for the field.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 110} className="border-t border-white/15 pt-6">
              <span className="font-mono text-sm font-semibold tracking-[0.2em] text-burnt-orange-300">
                0{index + 1}
              </span>
              <h3 className="font-display mt-5 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{step.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingModel;
