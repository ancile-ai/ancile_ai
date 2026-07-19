import ConsoleFrame from "./ConsoleFrame";
import { Wrench, Layers, Workflow, Server, CheckCircle2, Shield, Cpu } from "lucide-react";

/**
 * Applied-AI signature visual: the modern "agent harness".
 * A swappable model sits at the center; the engineering value is the harness
 * of governable components wrapped around it. Icon-driven, framed as a console.
 */
const leftComponents = [
  { icon: Wrench, label: "Tools" },
  { icon: Layers, label: "Context" },
  { icon: Workflow, label: "Orchestration" },
];

const rightComponents = [
  { icon: Server, label: "Environment" },
  { icon: CheckCircle2, label: "Verification" },
  { icon: Shield, label: "Guardrails" },
];

function Pill({ icon: Icon, label }) {
  return (
    <span className="flex flex-shrink-0 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.05] px-2 py-1.5 sm:gap-2 sm:px-3 sm:py-2">
      <Icon className="h-3.5 w-3.5 flex-shrink-0 text-burnt-orange-300 sm:h-4 sm:w-4" />
      <span className="whitespace-nowrap text-[10.5px] text-slate-100 sm:text-[12px]">
        {label}
      </span>
    </span>
  );
}

export default function HarnessDiagram({ className = "" }) {
  return (
    <ConsoleFrame label="ancile · agent runtime" status="GOVERNED" className={className}>
      <div className="p-5 sm:p-6">
        <div className="overflow-x-auto pt-4">
          <div className="relative rounded-2xl border border-dashed border-white/20 px-2.5 pb-6 pt-7 sm:px-3">
            <span className="absolute -top-3 left-4 rounded-md border border-white/15 bg-[#141d31] px-2.5 py-1 font-mono text-[11px] font-semibold tracking-[0.22em] text-slate-100">
              HARNESS
            </span>

            <div className="flex items-center justify-center gap-1 sm:gap-2">
              <div className="flex flex-1 flex-col gap-3">
                {leftComponents.map((c) => (
                  <span key={c.label} className="flex w-full items-center">
                    <Pill {...c} />
                    <span className="ml-1 h-px flex-1 bg-white/20 sm:ml-2" />
                  </span>
                ))}
              </div>

              <div className="relative flex-shrink-0">
                <div className="core-pulse absolute -inset-2.5 rounded-2xl bg-burnt-orange-500/25 blur-lg" />
                <div className="relative flex w-[76px] flex-col items-center rounded-xl border border-burnt-orange-500/50 bg-[#0c1220] px-2 py-3 text-center sm:w-[104px] sm:px-3 sm:py-4">
                  <Cpu className="h-6 w-6 text-burnt-orange-300 sm:h-7 sm:w-7" />
                  <p className="mt-1.5 text-[12px] font-semibold leading-tight text-white sm:mt-2 sm:text-[14px]">
                    Model
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-3">
                {rightComponents.map((c) => (
                  <span key={c.label} className="flex w-full items-center justify-end">
                    <span className="mr-1 h-px flex-1 bg-white/20 sm:mr-2" />
                    <Pill {...c} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 border-t border-white/5 pt-4">
          <span className="font-mono text-[11px] text-slate-400">agent</span>
          <span className="font-mono text-[11px] text-slate-500">=</span>
          <span className="font-mono text-[11px] text-slate-300">model</span>
          <span className="font-mono text-[11px] text-slate-500">+</span>
          <span className="rounded-md border border-burnt-orange-500/30 bg-burnt-orange-500/15 px-2 py-0.5 font-mono text-[11px] font-semibold text-burnt-orange-300">
            harness
          </span>
        </div>
      </div>
    </ConsoleFrame>
  );
}
