/**
 * Compact sensor-fusion diagram: modular passive inputs converge into the
 * software core, which emits targeting-grade tracks. Light-framed companion to
 * the dark TrackConsole — reuses the flow-dot motion from the fusion pipeline.
 */
const inputs = [
  { y: 46, label: "RF" },
  { y: 124, label: "EO / IR" },
  { y: 202, label: "Acoustic" },
];

const stages = [
  { y: 120, label: "Detect" },
  { y: 150, label: "Localize" },
  { y: 180, label: "Classify" },
];

const CORE_CY = 149;

export default function FusionMini() {
  return (
    <svg
      viewBox="0 0 520 300"
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
          <path
            key={input.y}
            d={`M166 ${input.y + 25} C 202 ${input.y + 25}, 206 ${CORE_CY}, 238 ${CORE_CY}`}
          />
        ))}
      </g>

      {/* input chips */}
      {inputs.map((input) => (
        <g key={input.label}>
          <rect x="14" y={input.y} width="152" height="50" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
          <circle cx="38" cy={input.y + 25} r="4.5" fill="#d75519" />
          <text x="56" y={input.y + 30} fontSize="13.5" fill="#334155" fontWeight="500">
            {input.label}
          </text>
        </g>
      ))}
      <text x="14" y="278" fontSize="11.5" fill="#94a3b8">
        passive · modular · sensor-agnostic
      </text>

      {/* fusion core */}
      <rect className="core-pulse" x="238" y="101" width="140" height="96" rx="24" fill="#e8762f" filter="url(#fmGlow)" />
      <rect x="238" y="101" width="140" height="96" rx="22" fill="#fdf4ee" stroke="#d75519" strokeWidth="2.25" />
      <text x="308" y="132" textAnchor="middle" fontSize="9" fontWeight="700" letterSpacing="1.2" fill="#d75519">
        THE SOFTWARE CORE
      </text>
      <text x="308" y="158" textAnchor="middle" fontSize="19" fontWeight="700" fill="#b8460f">
        AI Fusion
      </text>
      <text x="308" y="177" textAnchor="middle" fontSize="11" fill="#78716c">
        at the edge
      </text>

      {/* output connector */}
      <path d="M378 149 L 400 149" fill="none" stroke="#d75519" strokeWidth="2.5" markerEnd="url(#fmArrow)" />
      <circle className="flow-dot" cx="378" cy="149" r="4" fill="#d75519" />

      {/* tracks output */}
      <rect x="406" y="82" width="104" height="134" rx="16" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="458" y="107" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#0f172a">
        Tracks
      </text>
      {stages.map((stage) => (
        <g key={stage.label}>
          <rect x="416" y={stage.y} width="84" height="22" rx="11" fill="#fdf0e8" />
          <text x="458" y={stage.y + 15} textAnchor="middle" fontSize="10" fontWeight="600" fill="#9a3412">
            {stage.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
