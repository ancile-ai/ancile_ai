import { Blocks, ShieldCheck, Users, Waypoints } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const proof = [
  {
    icon: Blocks,
    title: "Defined scope",
    copy: "Engagements work best when the technical package is clearly defined across software, integration, and operational outcomes.",
  },
  {
    icon: Users,
    title: "Prime teaming",
    copy: "A veteran-owned technical delivery partner that fits prime-led public sector, energy, and defense programs.",
  },
  {
    icon: ShieldCheck,
    title: "Mission constraints",
    copy: "Work framed around low-signature deployment, field operations, auditability, and practical integration paths.",
  },
  {
    icon: Waypoints,
    title: "Transition aware",
    copy: "Structured to move from prototype through validation, partner handoff, and operational use.",
  },
];

const Differentiators = () => {
  return (
    <section className="border-b border-slate-200 bg-[#faf7f1] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Why Ancile"
          title="A delivery model built for defined missions."
          copy="We engage where software, integration, and operational execution requirements are clearly defined — and where outcomes matter."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="lift-card h-full rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="inline-flex rounded-2xl bg-burnt-orange-50 p-3 text-burnt-orange-700">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
