import ConsoleFrame from "./ConsoleFrame";

/**
 * The site's signature visual: a representative passive-sUAS operator console.
 *
 * The scope is passive, so there is no sweeping beam. The sensor node sits at
 * the center and resolves lines of bearing to each contact; signal travels
 * inward along each line. Contacts are plotted at the same bearing and range
 * shown in the track panel. Pure SVG/CSS motion, reduced-motion safe, and
 * labelled illustrative (the product is scheduled for field testing).
 */

const tracks = [
  { id: "TRK-07", type: "Group 1 · rotary", bearing: 43, km: 1.2, stage: "CLASSIFY", strength: 5 },
  { id: "TRK-04", type: "Group 2 · fixed-wing", bearing: 111, km: 2.8, stage: "LOCALIZE", strength: 3 },
  { id: "TRK-02", type: "unresolved contact", bearing: 208, km: 3.6, stage: "DETECT", strength: 2 },
];

const stageStyles = {
  CLASSIFY: "bg-burnt-orange-500/15 text-burnt-orange-300 border-burnt-orange-500/30",
  LOCALIZE: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  DETECT: "border-white/10 bg-white/5 text-slate-300",
};

// Scope geometry: 300x300 viewBox, 4 km full scale.
const C = 150;
const R_MAX = 132;
const KM_FULL = 4;

function polar(bearingDeg, km) {
  const r = (km / KM_FULL) * R_MAX;
  const a = (bearingDeg * Math.PI) / 180;
  return { x: C + r * Math.sin(a), y: C - r * Math.cos(a) };
}

function PassiveScope() {
  return (
    <svg
      viewBox="0 0 300 300"
      className="scope-svg mx-auto block w-full"
      role="img"
      aria-label="Passive scope: the sensor at center resolves lines of bearing to three contacts at 1.2, 2.8, and 3.6 kilometers."
    >
      {/* range rings at 1, 2, 3, 4 km */}
      {[1, 2, 3, 4].map((km) => (
        <circle
          key={km}
          cx={C}
          cy={C}
          r={(km / KM_FULL) * R_MAX}
          fill="none"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="1"
        />
      ))}
      {/* crosshair */}
      <line x1={C - R_MAX} y1={C} x2={C + R_MAX} y2={C} stroke="rgba(255,255,255,0.12)" />
      <line x1={C} y1={C - R_MAX} x2={C} y2={C + R_MAX} stroke="rgba(255,255,255,0.12)" />
      {/* range labels */}
      {[1, 2, 3].map((km) => (
        <text
          key={km}
          x={C + 4}
          y={C - (km / KM_FULL) * R_MAX - 3}
          fontSize="9"
          fontFamily="ui-monospace, Menlo, monospace"
          fill="rgba(148,163,184,0.85)"
        >
          {km} km
        </text>
      ))}
      {/* bearing ticks */}
      {[
        ["N", C, 10],
        ["E", 290, C + 3],
        ["S", C, 294],
        ["W", 10, C + 3],
      ].map(([label, x, y]) => (
        <text
          key={label}
          x={x}
          y={y}
          textAnchor="middle"
          fontSize="10"
          fontFamily="ui-monospace, Menlo, monospace"
          letterSpacing="1"
          fill="rgba(148,163,184,0.8)"
        >
          {label}
        </text>
      ))}

      {/* lines of bearing: signal flows inward to the passive sensor */}
      {tracks.map((t, i) => {
        const p = polar(t.bearing, t.km);
        return (
          <g key={t.id}>
            <line x1={p.x} y1={p.y} x2={C} y2={C} stroke="rgba(232,108,37,0.35)" strokeWidth="1" />
            <line
              className="bearing-ray"
              x1={p.x}
              y1={p.y}
              x2={C}
              y2={C}
              stroke="#e86c25"
              strokeWidth="1.5"
              strokeDasharray="3 9"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
            <circle
              className="radar-ping"
              cx={p.x}
              cy={p.y}
              r="9"
              fill="none"
              stroke="rgba(232,108,37,0.55)"
              strokeWidth="1"
              style={{ animationDelay: `${i}s` }}
            />
            <rect x={p.x - 3} y={p.y - 3} width="6" height="6" fill="#f0913f" />
            <text
              x={p.x + (p.x < C ? -9 : 9)}
              y={p.y + 3}
              textAnchor={p.x < C ? "end" : "start"}
              fontSize="9.5"
              fontFamily="ui-monospace, Menlo, monospace"
              fill="rgba(226,232,240,0.9)"
            >
              {t.id}
            </text>
          </g>
        );
      })}

      {/* sensor node */}
      <rect x={C - 4} y={C - 4} width="8" height="8" fill="#d75519" />
      <rect x={C - 8} y={C - 8} width="16" height="16" fill="none" stroke="rgba(215,85,25,0.45)" strokeWidth="1" />
    </svg>
  );
}

export default function TrackConsole({ className = "" }) {
  return (
    <ConsoleFrame className={className}>
      <div className="track-grid soft-grid-dark grid gap-5 p-5 sm:p-6">
        {/* Passive scope */}
        <div className="min-w-0">
          <PassiveScope />
          <p className="mt-2 text-center font-mono text-[10px] tracking-wide text-slate-500">
            passive scope · no emissions
          </p>
        </div>

        {/* Track table */}
        <div className="min-w-0">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="font-mono text-[11px] tracking-[0.2em] text-slate-400">
              ACTIVE TRACKS
            </span>
            <span className="font-mono text-[11px] text-slate-300">03</span>
          </div>

          <div className="divide-y divide-white/5">
            {tracks.map((track) => (
              <div
                key={track.id}
                className="grid grid-cols-[auto_minmax(0,1fr)_auto_auto] items-center gap-x-3 py-2.5"
              >
                <span className="font-mono text-[12px] font-medium text-white">{track.id}</span>
                <span className="truncate text-[11px] text-slate-400">
                  {track.type} · {track.km.toFixed(1)} km ·{" "}
                  {String(track.bearing).padStart(3, "0")}°
                </span>
                <span
                  className={`border px-1.5 py-0.5 font-mono text-[9px] font-semibold tracking-wider ${stageStyles[track.stage]}`}
                >
                  {track.stage}
                </span>
                <span className="flex items-end gap-0.5" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <span
                      key={n}
                      className={`w-1 ${n < track.strength ? "bg-burnt-orange-400" : "bg-white/10"}`}
                      style={{ height: `${5 + n * 2}px` }}
                    />
                  ))}
                </span>
              </div>
            ))}
          </div>

          {/* Signal fusion readout */}
          <div className="mt-3 flex items-center gap-3 border border-white/5 bg-white/[0.03] px-3 py-2.5">
            <span className="flex h-6 items-end gap-0.5" aria-hidden="true">
              {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                <span
                  key={n}
                  className="signal-bar w-1 bg-burnt-orange-400"
                  style={{ height: "100%", animationDelay: `${n * 0.12}s` }}
                />
              ))}
            </span>
            <div className="leading-tight">
              <p className="font-mono text-[10px] tracking-[0.18em] text-slate-400">SIGNAL FUSION</p>
              <p className="text-[11px] text-slate-300">Detect · Localize · Classify</p>
            </div>
          </div>
        </div>
      </div>

      <p className="border-t border-white/5 px-5 py-2.5 text-center font-mono text-[10px] tracking-wide text-slate-500 sm:px-6">
        Illustrative operator view · field testing scheduled Q4 FY26
      </p>
    </ConsoleFrame>
  );
}
