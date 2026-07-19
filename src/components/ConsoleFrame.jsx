/**
 * Signature product-surface frame — a dark "operator console" window with a
 * chrome bar, status pill, and a soft accent glow. Houses any showcase visual
 * so capability pages get Linear-style product moments without app screenshots.
 */
export default function ConsoleFrame({
  label = "ancile · passive fusion",
  status = "PASSIVE",
  children,
  className = "",
}) {
  return (
    <div className={`console-frame ${className}`}>
      <div className="console-bar">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-2 font-mono text-[11px] tracking-wide text-slate-400">
          {label}
        </span>
        {status ? (
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.18em] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {status}
          </span>
        ) : null}
      </div>
      <div className="console-glow" />
      <div className="relative">{children}</div>
    </div>
  );
}
