/**
 * Static-color version of the brand mark for image generation (Apple icon
 * and the Open Graph card). `next/og` renders JSX through Satori, which does
 * not understand Tailwind classes, so colors and size are passed explicitly.
 * The on-page mark lives in src/components/Logo.jsx.
 */
export function BrandMarkStatic({ size = 256, ink = "#45454b" }) {
  return (
    <svg
      width={size}
      height={size * (300 / 314)}
      viewBox="0 0 314 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M46 252 L102 206" stroke={ink} strokeWidth="24" strokeLinecap="round" />
      <path d="M268 252 L212 206" stroke="#d75519" strokeWidth="24" strokeLinecap="round" />
      <rect x="131" y="8" width="52" height="52" rx="14" fill="#d75519" />
      <rect x="91" y="82" width="52" height="52" rx="14" fill="#e28a5f" />
      <rect x="171" y="82" width="52" height="52" rx="14" fill={ink} />
      <rect x="12" y="156" width="52" height="52" rx="14" fill="#e28a5f" />
      <rect x="78" y="156" width="92" height="52" rx="16" fill={ink} />
      <rect x="184" y="156" width="52" height="52" rx="14" fill="#d75519" />
      <rect x="250" y="156" width="52" height="52" rx="14" fill={ink} />
      <rect x="12" y="240" width="52" height="52" rx="14" fill={ink} />
      <rect x="250" y="240" width="52" height="52" rx="14" fill="#d75519" />
    </svg>
  );
}
