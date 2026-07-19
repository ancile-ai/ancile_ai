import ConsoleFrame from "./ConsoleFrame";

/**
 * The site's signature visual: a representative passive-sUAS operator console.
 * A rotating passive scope resolves contacts into fused tracks, each moving
 * through the detect -> localize -> classify pipeline. Pure CSS/SVG motion,
 * reduced-motion safe, and clearly labelled illustrative (the product is
 * scheduled for field testing, not deployed).
 */

const tracks = [
  { id: "TRK-07", type: "Group 1 · rotary", detail: "1.2 km · 043°", stage: "CLASSIFY", strength: 5 },
  { id: "TRK-04", type: "Group 2 · fixed-wing", detail: "2.8 km · 111°", stage: "LOCALIZE", strength: 3 },
  { id: "TRK-02", type: "unresolved contact", detail: "3.6 km · 208°", stage: "DETECT", strength: 2 },
];

const stageStyles = {
  CLASSIFY: "bg-burnt-orange-500/15 text-burnt-orange-300 border-burnt-orange-500/30",
  LOCALIZE: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  DETECT: "border-white/10 bg-white/5 text-slate-300",
};

const blips = [
  { top: "32%", left: "66%", delay: "0s" },
  { top: "63%", left: "83%", delay: "1s" },
  { top: "80%", left: "34%", delay: "2s" },
];

const bearings = [
  { label: "N", top: "3%", left: "50%" },
  { label: "E", top: "50%", left: "95%" },
  { label: "S", top: "94%", left: "50%" },
  { label: "W", top: "50%", left: "3%" },
];

export default function TrackConsole({ className = "" }) {
  return (
    <ConsoleFrame className={className}>
      <div className="soft-grid-dark grid grid-cols-1 gap-5 p-5 sm:grid-cols-[1.05fr_0.95fr] sm:p-6">
        {/* Passive scope */}
        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-[290px]">
            {/* range rings */}
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-[17%] rounded-full border border-white/10" />
            <div className="absolute inset-[34%] rounded-full border border-white/[0.08]" />
            {/* crosshair */}
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/[0.07]" />
            <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/[0.07]" />
            {/* rotating passive beam */}
            <div className="radar-beam absolute inset-0 opacity-90" />
            {/* bearing ticks */}
            {bearings.map((b) => (
              <span
                key={b.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 font-mono text-[9px] tracking-widest text-slate-500"
                style={{ top: b.top, left: b.left }}
              >
                {b.label}
              </span>
            ))}
            {/* tracks */}
            {blips.map((blip, i) => (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: blip.top, left: blip.left }}
              >
                <span
                  className="radar-ping absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-burnt-orange-400/50"
                  style={{ animationDelay: blip.delay }}
                />
                <span className="relative block h-1.5 w-1.5 rounded-full bg-burnt-orange-400 shadow-[0_0_10px_2px_rgba(232,108,37,0.6)]" />
              </div>
            ))}
            {/* sensor node */}
            <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-burnt-orange-500 shadow-[0_0_0_4px_rgba(215,85,25,0.18)]" />
          </div>
          <p className="mt-3 text-center font-mono text-[10px] tracking-wide text-slate-500">
            passive scope · no active emissions
          </p>
        </div>

        {/* Track panel */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] tracking-[0.2em] text-slate-400">
              ACTIVE TRACKS
            </span>
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-slate-300">
              03
            </span>
          </div>

          <div className="mt-3 space-y-2.5">
            {tracks.map((track) => (
              <div
                key={track.id}
                className="rounded-xl border border-white/5 bg-white/[0.03] p-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[13px] font-medium text-white">
                    {track.id}
                  </span>
                  <span
                    className={`rounded-md border px-1.5 py-0.5 font-mono text-[9px] font-semibold tracking-wider ${stageStyles[track.stage]}`}
                  >
                    {track.stage}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <span className="truncate text-[11px] text-slate-400">
                    {track.type} · {track.detail}
                  </span>
                  <span className="flex flex-shrink-0 items-end gap-0.5">
                    {[0, 1, 2, 3, 4].map((n) => (
                      <span
                        key={n}
                        className={`w-1 rounded-full ${n < track.strength ? "bg-burnt-orange-400" : "bg-white/10"}`}
                        style={{ height: `${5 + n * 2}px` }}
                      />
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Signal fusion readout */}
          <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5">
            <span className="flex h-6 items-end gap-0.5">
              {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                <span
                  key={n}
                  className="signal-bar w-1 rounded-full bg-gradient-to-t from-burnt-orange-600 to-burnt-orange-300"
                  style={{ height: "100%", animationDelay: `${n * 0.12}s` }}
                />
              ))}
            </span>
            <div className="leading-tight">
              <p className="font-mono text-[10px] tracking-[0.18em] text-slate-400">
                SIGNAL FUSION
              </p>
              <p className="text-[11px] text-slate-300">
                Detect · Localize · Classify
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="border-t border-white/5 px-5 py-2.5 text-center font-mono text-[10px] tracking-wide text-slate-500 sm:px-6">
        Illustrative operator view — field testing scheduled Q3 FY26
      </p>
    </ConsoleFrame>
  );
}
