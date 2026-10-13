import ConsoleFrame from "./ConsoleFrame";

/**
 * Delivery signature visual: a work-package ledger for a prime-led program.
 * Ancile takes a defined slice of the technical work and stays accountable
 * from scope through sustainment, so the board reads like a program tracker
 * rather than a generic kanban.
 */
const packages = [
  { id: "WP-01", label: "Interfaces & ICDs", phase: "SCOPE", pct: 100 },
  { id: "WP-02", label: "Teaming roles settled", phase: "SCOPE", pct: 100 },
  { id: "WP-03", label: "Integration & APIs", phase: "BUILD", pct: 64, active: true },
  { id: "WP-04", label: "Delivery on cadence", phase: "BUILD", pct: 40, active: true },
  { id: "WP-05", label: "Monitoring", phase: "SUSTAIN", pct: 0 },
  { id: "WP-06", label: "Change control", phase: "SUSTAIN", pct: 0 },
];

const phaseColor = {
  SCOPE: "text-emerald-300",
  BUILD: "text-burnt-orange-300",
  SUSTAIN: "text-slate-400",
};

export default function DeliveryConsole({ className = "" }) {
  return (
    <ConsoleFrame label="ancile · delivery" status="SDVOSB" className={className}>
      <div className="soft-grid-dark p-5 sm:p-6">
        <div className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-x-3 border-b border-white/10 pb-2 font-mono text-[9.5px] tracking-[0.18em] text-slate-500">
          <span>ID</span>
          <span>WORK PACKAGE</span>
          <span>PHASE</span>
          <span className="text-right">STATUS</span>
        </div>

        <div className="mt-1 divide-y divide-white/5">
          {packages.map((wp) => (
            <div
              key={wp.id}
              className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-x-3 py-2"
            >
              <span className="font-mono text-[11px] text-slate-400">{wp.id}</span>
              <span className={`truncate text-[11.5px] ${wp.active ? "text-white" : "text-slate-300"}`}>
                {wp.label}
              </span>
              <span className={`font-mono text-[9.5px] font-semibold tracking-wider ${phaseColor[wp.phase]}`}>
                {wp.phase}
              </span>
              <span className="flex items-center justify-end gap-2">
                <span className="h-1 w-10 bg-white/10" aria-hidden="true">
                  <span
                    className={`block h-full ${wp.pct === 100 ? "bg-emerald-400" : "bg-burnt-orange-400"}`}
                    style={{ width: `${wp.pct}%` }}
                  />
                </span>
                <span className="w-7 text-right font-mono text-[10px] text-slate-400">
                  {wp.pct === 0 ? "—" : `${wp.pct}%`}
                </span>
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/5 pt-4 font-mono text-[10px] tracking-wide text-slate-300">
          {["SDVOSB", "CMMC L2", "JCP", "CAGE 11BV7", "UEI Y465ERNPJ5M1"].map((tag) => (
            <span key={tag} className="flex items-center gap-1.5">
              <span className="h-1 w-1 bg-burnt-orange-400" aria-hidden="true" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </ConsoleFrame>
  );
}
