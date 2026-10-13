import ConsoleFrame from "./ConsoleFrame";

/**
 * Applied-AI signature visual: the agent harness.
 * A swappable model sits at the center; the engineering value is the harness
 * of governable components wrapped around it. Typographic, no icons.
 */
const left = ["Tools", "Context", "Orchestration"];
const right = ["Environment", "Verification", "Guardrails"];

function Component({ label, index, align }) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <span className={`flex min-w-0 items-center ${align === "right" ? "flex-row-reverse" : ""}`}>
      <span
        className={`flex items-baseline gap-2 whitespace-nowrap ${align === "right" ? "flex-row-reverse" : ""}`}
      >
        <span className="harness-index font-mono text-[9.5px] text-burnt-orange-300">{n}</span>
        <span className="harness-label font-medium text-slate-100">{label}</span>
      </span>
      <span className="harness-line h-px flex-1 bg-white/30" aria-hidden="true" />
    </span>
  );
}

export default function HarnessDiagram({ className = "" }) {
  return (
    <ConsoleFrame label="ancile · agent runtime" status="GOVERNED" className={className}>
      <div className="soft-grid-dark p-5 sm:p-6">
        <div className="harness-box relative border border-dashed border-white/25 pb-7 pt-8 sm:pb-8 sm:pt-9">
          <span className="absolute -top-2 left-4 bg-[#0b1220] px-2 font-mono text-[10px] font-semibold tracking-[0.22em] text-slate-200">
            HARNESS
          </span>

          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-1">
            <div className="flex min-w-0 flex-col gap-4">
              {left.map((label, i) => (
                <Component key={label} label={label} index={i} align="left" />
              ))}
            </div>

            <div className="harness-model flex flex-col items-center justify-center border border-burnt-orange-500/60 bg-[#0c1220] px-2 py-5 text-center sm:py-7">
              <span className="font-mono text-[9px] tracking-[0.2em] text-burnt-orange-300">
                MODEL
              </span>
              <span className="mt-1 text-[11px] text-slate-400">swappable</span>
            </div>

            <div className="flex min-w-0 flex-col gap-4">
              {right.map((label, i) => (
                <Component key={label} label={label} index={i + 3} align="right" />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2 border-t border-white/5 pt-4 font-mono text-[11px]">
          <span className="text-slate-400">agent</span>
          <span className="text-slate-500">=</span>
          <span className="text-slate-300">model</span>
          <span className="text-slate-500">+</span>
          <span className="border border-burnt-orange-500/40 bg-burnt-orange-500/15 px-2 py-0.5 font-semibold text-burnt-orange-300">
            harness
          </span>
        </div>
      </div>
    </ConsoleFrame>
  );
}
