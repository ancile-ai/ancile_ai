/* Small line-art motifs used to distinguish the three capability lanes.
   Shared between the home bento and the overview page. `currentColor` driven. */

export function RadarMotif() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="100" cy="100" r="30" opacity="0.5" />
        <circle cx="100" cy="100" r="58" opacity="0.35" />
        <circle cx="100" cy="100" r="86" opacity="0.2" />
      </g>
      <path d="M100 100 L100 14 A86 86 0 0 1 168 62 Z" fill="currentColor" opacity="0.14" />
      <circle cx="148" cy="66" r="4" fill="currentColor" />
      <circle cx="70" cy="150" r="3" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export function PipelineMotif() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.5" opacity="0.4">
        <line x1="34" y1="60" x2="100" y2="60" />
        <line x1="100" y1="60" x2="166" y2="60" />
      </g>
      <circle cx="34" cy="60" r="9" fill="currentColor" opacity="0.85" />
      <rect x="90" y="50" width="20" height="20" rx="5" fill="currentColor" />
      <circle cx="166" cy="60" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function GraphMotif() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.5" opacity="0.4">
        <line x1="40" y1="30" x2="100" y2="70" />
        <line x1="160" y1="34" x2="100" y2="70" />
        <line x1="60" y1="96" x2="100" y2="70" />
      </g>
      <circle cx="100" cy="70" r="10" fill="currentColor" />
      <circle cx="40" cy="30" r="5" fill="currentColor" opacity="0.8" />
      <circle cx="160" cy="34" r="5" fill="currentColor" opacity="0.8" />
      <circle cx="60" cy="96" r="5" fill="currentColor" opacity="0.8" />
    </svg>
  );
}
