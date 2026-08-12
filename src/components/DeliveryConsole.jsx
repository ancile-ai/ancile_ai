import ConsoleFrame from "./ConsoleFrame";

/**
 * Delivery signature visual: a prime-team integration board. Ancile takes a
 * defined slice of the technical work and stays accountable from scope through
 * sustainment. Framed as a console to match the rest of the site.
 */
const columns = [
  {
    title: "Scope",
    cards: [
      { label: "Interfaces defined", state: "done" },
      { label: "Teaming roles settled", state: "done" },
    ],
  },
  {
    title: "Build",
    cards: [
      { label: "Integration & APIs", state: "active" },
      { label: "Delivery on cadence", state: "active" },
    ],
  },
  {
    title: "Sustain",
    cards: [
      { label: "Monitoring", state: "queued" },
      { label: "Change control", state: "queued" },
    ],
  },
];

const stateDot = {
  done: "bg-emerald-400",
  active: "bg-burnt-orange-400",
  queued: "bg-slate-500",
};

export default function DeliveryConsole({ className = "" }) {
  return (
    <ConsoleFrame label="ancile · delivery" status="SDVOSB" className={className}>
      <div className="soft-grid-dark p-5 sm:p-6">
        <div className="grid grid-cols-3 gap-2.5">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="px-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                {column.title}
              </p>
              <div className="mt-2.5 space-y-2">
                {column.cards.map((card) => (
                  <div
                    key={card.label}
                    className="flex items-start gap-2 rounded-lg border border-white/5 bg-white/[0.04] px-2.5 py-2"
                  >
                    <span className={`mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${stateDot[card.state]}`} />
                    <span className="text-[11.5px] leading-[1.35] text-slate-200">
                      {card.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2 border-t border-white/5 pt-4">
          {["SDVOSB", "CMMC", "JCP", "CAGE 11BV7"].map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] tracking-wide text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </ConsoleFrame>
  );
}
