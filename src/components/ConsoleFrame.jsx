/**
 * Product-surface frame: a dark operator window with a mono title bar and a
 * live status readout. Houses the showcase visuals so capability pages get
 * product moments without app screenshots.
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
        <span className="h-1.5 w-1.5 flex-none bg-burnt-orange-500" aria-hidden="true" />
        <span className="font-mono text-[11px] tracking-wide text-slate-400">{label}</span>
        {status ? (
          <span className="ml-auto inline-flex items-center gap-2 font-mono text-[10px] font-semibold tracking-[0.18em] text-emerald-300">
            <span className="status-blink h-1.5 w-1.5 bg-emerald-400" aria-hidden="true" />
            {status}
          </span>
        ) : null}
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
