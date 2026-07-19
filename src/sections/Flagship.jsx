import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import ShowcaseRow from "../components/ShowcaseRow";
import FusionMini from "../components/FusionMini";

const Flagship = () => {
  return (
    <section className="border-b border-slate-200 bg-[#f8f5ef] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <ShowcaseRow
            eyebrow="The flagship, up close"
            title="Fusion is the product."
            copy="The passive sensors are modular inputs. The value is the software that correlates asynchronous RF, EO/IR, and acoustic signals into targeting-grade tracks — at the edge, on COTS hardware, with no active emissions to detect or jam."
            bullets={[
              "Multi-modal sensor fusion — RF, EO/IR, and acoustic today; extensible tomorrow",
              "Asynchronous correlation into detection, localization, and classification",
              "Runs at the edge on an affordable COTS hardware baseline",
              "Integration-ready tracks for the C2 and operator systems you already field",
            ]}
            visual={
              <div className="panel-strong rounded-[2rem] p-4 sm:p-6">
                <FusionMini />
              </div>
            }
            footer={
              <Link
                href="/engineering"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                See the full architecture
                <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Flagship;
