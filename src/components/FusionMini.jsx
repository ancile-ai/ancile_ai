import ConsoleFrame from "./ConsoleFrame";

/**
 * Flagship fusion visual: three live passive-sensor lanes (RF strip, EO/IR
 * frames, acoustic waveform) stream into a correlation node, and a single
 * track card on the right fills in field by field as evidence accumulates:
 * bearing, range, class, confidence. Loops every 9 s. Pure CSS motion;
 * reduced-motion users get the finished, fully resolved track.
 */

// Deterministic pseudo-random so server and client render identically.
function seq(seed, n, min, max) {
  const out = [];
  let x = seed;
  for (let i = 0; i < n; i += 1) {
    x = (x * 1103515245 + 12345) % 2147483648;
    out.push(min + (x / 2147483648) * (max - min));
  }
  return out;
}

const RF_BARS = seq(7, 56, 3, 20).map((h, i) => ({
  h: Math.round(h),
  hit: i % 14 === 5 || i % 14 === 6,
}));

const EO_FRAMES = Array.from({ length: 22 }, (_, i) => ({ hit: i % 11 === 7 }));

const WAVE = seq(3, 72, -1, 1).map((v, i) => {
  const burst = i % 24 >= 9 && i % 24 <= 13 ? 2.4 : 1;
  return Math.round(v * 6 * burst * 10) / 10;
});
const WAVE_PATH = WAVE.map((v, i) => `${i === 0 ? "M" : "L"}${i * 8} ${14 + v}`).join(" ");
const WAVE_HITS = [9, 33, 57].map((start) => ({
  d: WAVE.slice(start, start + 5)
    .map((v, i) => `${i === 0 ? "M" : "L"}${(start + i) * 8} ${14 + v}`)
    .join(" "),
}));

function RfLane() {
  return (
    <div className="flex h-7 items-end gap-[3px]" style={{ width: 480 }}>
      {RF_BARS.map((b, i) => (
        <span
          key={i}
          className={`w-[5px] flex-none ${b.hit ? "bg-burnt-orange-400" : "bg-slate-500/60"}`}
          style={{ height: b.h }}
        />
      ))}
    </div>
  );
}

function EoLane() {
  return (
    <div className="flex h-7 items-center gap-[6px]" style={{ width: 480 }}>
      {EO_FRAMES.map((f, i) => (
        <span
          key={i}
          className={`h-4 w-4 flex-none border ${
            f.hit ? "border-burnt-orange-400 bg-burnt-orange-500/40" : "border-slate-500/50"
          }`}
        />
      ))}
    </div>
  );
}

function AcousticLane() {
  return (
    <svg width="576" height="28" viewBox="0 0 576 28" className="block h-7 flex-none" aria-hidden="true">
      <path d={WAVE_PATH} fill="none" stroke="rgba(148,163,184,0.6)" strokeWidth="1.25" />
      {WAVE_HITS.map((h) => (
        <path key={h.d} d={h.d} fill="none" stroke="#f0913f" strokeWidth="1.75" />
      ))}
    </svg>
  );
}

const lanes = [
  { label: "RF", sub: "passive DF", Lane: RfLane, dur: "16s" },
  { label: "EO / IR", sub: "frames", Lane: EoLane, dur: "22s" },
  { label: "ACOUSTIC", sub: "signature", Lane: AcousticLane, dur: "19s" },
];

const fields = [
  { k: "BEARING", v: "043°", src: "RF + acoustic", lock: "lock-1" },
  { k: "RANGE", v: "1.2 km", src: "triangulated", lock: "lock-2" },
  { k: "CLASS", v: "Group 1 · rotary", src: "EO / IR confirm", lock: "lock-3" },
];

export default function FusionMini() {
  return (
    <ConsoleFrame label="ancile · fusion engine" status="CORRELATING">
      <div className="fusion-grid soft-grid-dark grid gap-5 p-5 sm:p-6">
        {/* Sensor lanes */}
        <div className="min-w-0">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="font-mono text-[11px] tracking-[0.2em] text-slate-400">PASSIVE INPUTS</span>
            <span className="font-mono text-[10px] text-slate-500">async · unsynced clocks</span>
          </div>
          <div className="mt-3 space-y-3">
            {lanes.map(({ label, sub, Lane, dur }) => (
              <div key={label} className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-center gap-3">
                <div className="leading-tight">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-slate-200">{label}</p>
                  <p className="font-mono text-[9px] text-slate-500">{sub}</p>
                </div>
                <div className="relative overflow-hidden border-y border-white/5 py-1">
                  <div className="sig-track flex" style={{ animationDuration: dur }}>
                    <Lane />
                    <Lane />
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[#0a1020] to-transparent" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-[#0a1020] to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Correlation node */}
        <div className="fusion-node flex items-center justify-center">
          <div className="flex flex-col items-center border border-burnt-orange-500/60 bg-[#0c1220] px-4 py-3 text-center">
            <span className="font-mono text-[9px] tracking-[0.22em] text-burnt-orange-300">CORRELATE</span>
            <span className="mt-1.5 flex items-end gap-0.5" aria-hidden="true">
              {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                <span
                  key={n}
                  className="signal-bar h-4 w-1 bg-burnt-orange-400"
                  style={{ animationDelay: `${n * 0.12}s` }}
                />
              ))}
            </span>
            <span className="mt-1.5 font-mono text-[9px] text-slate-400">3 in · 1 out</span>
          </div>
        </div>

        {/* Track card */}
        <div className="min-w-0 border border-white/10 bg-white/[0.03]">
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
            <span className="font-mono text-[12px] font-medium text-white">TRK-07</span>
            <span className="relative h-4 w-20 font-mono text-[9px] font-semibold tracking-wider" aria-live="off">
              <span className="stage-detect absolute inset-0 text-right text-slate-300">DETECT</span>
              <span className="stage-localize absolute inset-0 text-right text-sky-300">LOCALIZE</span>
              <span className="stage-classify absolute inset-0 text-right text-burnt-orange-300">CLASSIFY</span>
            </span>
          </div>
          <div className="divide-y divide-white/5">
            {fields.map((f) => (
              <div key={f.k} className={`${f.lock} grid grid-cols-[4.5rem_minmax(0,1fr)] items-baseline gap-2 px-3 py-2`}>
                <span className="font-mono text-[9.5px] tracking-[0.16em] text-slate-500">{f.k}</span>
                <span className="min-w-0">
                  <span className="block truncate text-[13px] font-semibold text-white">{f.v}</span>
                  <span className="block font-mono text-[9px] text-slate-500">← {f.src}</span>
                </span>
              </div>
            ))}
            <div className="px-3 py-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9.5px] tracking-[0.16em] text-slate-500">CONFIDENCE</span>
                <span className="conf-value font-mono text-[11px] text-white" />
              </div>
              <div className="mt-1.5 h-1 w-full bg-white/10">
                <div className="conf-bar h-full bg-burnt-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="border-t border-white/5 px-5 py-2.5 text-center font-mono text-[10px] tracking-wide text-slate-500 sm:px-6">
        Illustrative · three unsynchronized sensors, one correlated track
      </p>
    </ConsoleFrame>
  );
}
