/**
 * Compact sensor-fusion diagram: modular passive inputs converge into the
 * software core, which emits targeting-grade tracks. Light-framed companion to
 * the dark TrackConsole — reuses the flow-dot motion from the fusion pipeline.
 */
export default function FusionMini() {
  const inputs = [
    { y: 46, label: "RF" },
    { y: 118, label: "EO / IR" },
    { y: 190, label: "Acoustic" },
  ];

  return (
    <svg
      viewBox="0 0 500 280"
      className="h-auto w-full"
      role="img"
      aria-label="Passive RF, electro-optical/infrared, and acoustic inputs converge into an AI fusion software core that outputs detection, localization, and classification tracks."
    >
      <defs>
        <marker id="fmArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#d75519" />
        </marker>
        <filter id="fmGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      {/* convergence lines */}
      <g fill="none" stroke="#cbd5e1" strokeWidth="1.75">
        {inputs.map((input) => (
          <path key={input.y} d={`M164 ${input.y + 22} C 210 ${input.y + 22}, 210 140, 248 140`} />
        ))}
      </g>

      {/* input chips */}
      {inputs.map((input) => (
        <g key={input.label}>
          <rect x="20" y={input.y} width="144" height="44" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
          <circle cx="42" cy={input.y + 22} r="4" fill="#d75519" />
          <text x="58" y={input.y + 27} fontSize="13" fill="#334155" fontWeight="500">{input.label}</text>
        </g>
      ))}
      <text x="20" y="255" fontSize="11" fill="#94a3b8">passive · modular · sensor-agnostic</text>

      {/* fusion core */}
      <rect className="core-pulse" x="250" y="96" width="128" height="88" rx="22" fill="#e8762f" filter="url(#fmGlow)" />
      <rect x="250" y="96" width="128" height="88" rx="20" fill="#fdf4ee" stroke="#d75519" strokeWidth="2.25" />
      <text x="314" y="130" textAnchor="middle" fontSize="9" fontWeight="700" letterSpacing="1.2" fill="#d75519">THE SOFTWARE CORE</text>
      <text x="314" y="152" textAnchor="middle" fontSize="17" fontWeight="700" fill="#b8460f">AI Fusion</text>
      <text x="314" y="170" textAnchor="middle" fontSize="10.5" fill="#78716c">at the edge</text>

      {/* output connector */}
      <path d="M378 140 L 420 140" fill="none" stroke="#d75519" strokeWidth="2.5" markerEnd="url(#fmArrow)" />
      <circle className="flow-dot" cx="378" cy="140" r="4" fill="#d75519" />

      {/* tracks output */}
      <rect x="420" y="104" width="66" height="72" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="453" y="124" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#0f172a">Tracks</text>
      <rect x="430" y="132" width="46" height="12" rx="6" fill="#fdf0e8" />
      <rect x="430" y="148" width="46" height="12" rx="6" fill="#fdf0e8" />
      <rect x="430" y="164" width="46" height="8" rx="4" fill="#fdf0e8" opacity="0.6" />
    </svg>
  );
}
