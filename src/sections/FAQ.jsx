import { ChevronDown } from "lucide-react";
import JsonLd from "../components/JsonLd";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { faqJsonLd } from "../lib/site";

/**
 * Plain-language answers to the questions buyers, contracting officers, and
 * AI answer engines ask most. The same content is emitted as FAQPage JSON-LD
 * so Google and LLM crawlers can quote it directly.
 */
export const faqItems = [
  {
    question: "What does Ancile do?",
    answer:
      "Ancile is a service-disabled veteran-owned (SDVOSB) software company working in three focused lanes: a passive sUAS (small drone) detection product, subcontract engineering and integration for prime-led programs, and applied AI including agentic, edge, and physical AI. We serve public sector, energy, and defense missions.",
  },
  {
    question: "Is Ancile an SDVOSB, and what are its contracting identifiers?",
    answer:
      "Yes. Ancile is a Service-Disabled Veteran-Owned Small Business (SDVOSB). CAGE code 11BV7, UEI Y465ERNPJ5M1, NAICS 541511, 541512, 541519, and 518210. The company is CMMC-compliant, JCP certified, and Texas VetHUB-aligned.",
  },
  {
    question: "What is passive sUAS detection?",
    answer:
      "Passive sUAS detection identifies small drones without emitting any signal of its own, so the system is hard to detect or jam. Ancile's software fuses passive sensor inputs such as RF, EO/IR, and acoustic feeds on COTS edge hardware to detect, localize, and classify Group 1–2 drones, then hands tracks to existing C2 and operator systems.",
  },
  {
    question: "How does Ancile work with prime contractors?",
    answer:
      "Ancile takes a defined slice of the technical package as an SDVOSB subcontractor, delivers it on the prime's cadence, and stays accountable through fielding and sustainment. Typical work includes mission software, API and data integration across secure cloud, edge, and disconnected environments, and post-delivery monitoring and change control.",
  },
  {
    question: "What kinds of applied AI does Ancile build?",
    answer:
      "Agentic AI with human-in-the-loop approval gates, edge AI using distilled and quantized models for low-SWaP and disconnected sites, and physical AI such as sensor fusion, perception, forecasting, and anomaly detection. Every system ships with governance, evaluations, tracing, and monitoring so it can be fielded responsibly.",
  },
  {
    question: "How do I start a conversation with Ancile?",
    answer:
      "Email sales@ancile.io or use the contact form on this site. Share the program need, timeline, and where you need support, and we will follow up to discuss fit, teaming structure, and scope.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-b border-slate-200 bg-[#f8f5ef] py-24"
    >
      <JsonLd data={faqJsonLd(faqItems)} />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={<span id="faq-heading">Straight answers for program and contracting teams.</span>}
          copy="The questions we hear most from primes, contracting officers, and mission owners evaluating a focused software partner."
        />

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <Reveal key={item.question} delay={index * 60}>
              <details className="faq-item rounded-xl border border-slate-200 bg-white px-6 py-2 shadow-sm transition hover:border-burnt-orange-200">
                <summary className="flex items-center justify-between gap-4 py-4 font-display text-lg font-semibold text-slate-900">
                  <span>{item.question}</span>
                  <ChevronDown className="faq-chevron h-5 w-5 flex-shrink-0 text-slate-400" aria-hidden="true" />
                </summary>
                <p className="pb-5 text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
