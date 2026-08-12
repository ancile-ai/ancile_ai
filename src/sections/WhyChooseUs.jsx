import { Blocks, ShieldCheck, Users, Waypoints } from "lucide-react";

const proofCards = [
  {
    icon: Blocks,
    title: "Defined Scope",
    copy: "Engagements work best when the technical package is clearly defined across software, integration, and operational outcomes.",
  },
  {
    icon: Users,
    title: "Prime Teaming Support",
    copy: "The model fits prime-led public sector, energy, and defense programs that need a veteran-owned technical delivery partner.",
  },
  {
    icon: ShieldCheck,
    title: "Mission Constraints",
    copy: "The work is framed around low-signature deployment, field operations, auditability, and practical integration paths.",
  },
  {
    icon: Waypoints,
    title: "Transition Awareness",
    copy: "Work is structured to move from prototype through validation, partner handoff, and operational use.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="border-b border-slate-200 bg-[#f8f5ef] py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="section-eyebrow">Why Ancile</p>
          <h2 className="section-title mt-5 text-4xl sm:text-5xl">
            A delivery model built for defined missions.
          </h2>
          <p className="section-copy mt-5 max-w-xl text-lg">
            Ancile AI combines a passive sUAS detection product, subcontract
            engineering and integration, and applied AI in one focused model
            suited to public sector, energy, and defense programs.
          </p>

          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              What You Get
            </p>
            <p className="mt-3 font-display text-2xl font-semibold text-slate-900">
              Focused scope. Clear fit. Measurable delivery.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We engage where software, integration, and operational execution
              requirements are clearly defined and outcomes matter.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {proofCards.map((card) => (
            <article
              key={card.title}
              className="lift-card rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="inline-flex rounded-2xl bg-burnt-orange-50 p-3 text-burnt-orange-700">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display mt-4 text-xl font-semibold text-slate-900">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
