import { ArrowUpRight, CheckCircle, FileText, Mail, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Careers | Ancile",
  description:
    "Interested in working with Ancile? Send your resume to hr@ancile.io to be considered for future opportunities.",
};

const resumeItems = [
  "Your resume or a link to your LinkedIn profile",
  "A brief note on the work you are interested in",
  "Relevant experience in mission software, systems integration, or applied AI",
];

export default function CareersPage() {
  return (
    <div className="page-shell min-h-screen bg-transparent">
      <Header />
      <PageHero
        eyebrow="Careers"
        title="Stay in touch with Ancile."
        description="We do not have open roles right now. If you are interested in future opportunities, we would still like to hear from you."
      />

      <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
          <Reveal>
            <article className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-2xl bg-slate-900 p-3 text-white">
                  <Send className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-burnt-orange-200 bg-burnt-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-burnt-orange-700">
                  Future opportunities
                </span>
              </div>
              <h2 className="font-display mt-6 max-w-xl text-3xl text-slate-900 sm:text-4xl">
                Interested in working with us?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Send your resume to our team. We keep strong candidates in mind as
                new work and team needs take shape.
              </p>
              <a
                href="mailto:hr@ancile.io"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-burnt-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-burnt-orange-700"
              >
                <Mail className="h-4 w-4" />
                Send your resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-4 text-sm text-slate-500">
                Or email <a className="font-semibold text-slate-800 underline decoration-burnt-orange-300 underline-offset-4 hover:text-burnt-orange-700" href="mailto:hr@ancile.io">hr@ancile.io</a> directly.
              </p>
              <div className="mt-auto border-t border-slate-200 pt-6">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Current status
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  No open roles at this time. We welcome future-interest resumes.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <aside className="h-full rounded-[2rem] border border-slate-800 bg-slate-950 p-8 text-white shadow-sm sm:p-10">
              <span className="inline-flex rounded-2xl bg-white/10 p-3 text-burnt-orange-300">
                <FileText className="h-6 w-6" />
              </span>
              <p className="mt-6 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-burnt-orange-300">
                Application details
              </p>
              <h2 className="font-display mt-4 text-3xl text-white sm:text-4xl">
                What to include
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                A short introduction helps us understand where you could be a fit.
              </p>
              <ul className="mt-7 space-y-5 border-t border-white/10 pt-7">
                {resumeItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
                    <CheckCircle className="mt-1 h-4 w-4 flex-none text-burnt-orange-300" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-7 text-slate-400">
                We review inquiries as opportunities arise. Please do not send
                sensitive personal information beyond what is appropriate for a
                resume.
              </p>
            </aside>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
