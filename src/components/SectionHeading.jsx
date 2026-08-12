/**
 * Consistent section header: eyebrow + display title + supporting copy.
 * Keeps typographic rhythm identical across every showcase section.
 */
export default function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  className = "",
  tone = "light",
}) {
  const centered = align === "center";
  const titleColor = tone === "dark" ? "text-white" : "";
  const copyColor = tone === "dark" ? "text-slate-300" : "";

  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className={`section-title mt-5 text-3xl sm:text-4xl lg:text-[2.7rem] ${titleColor}`}>
        {title}
      </h2>
      {copy ? (
        <p className={`section-copy mt-4 text-lg ${copyColor}`}>{copy}</p>
      ) : null}
    </div>
  );
}
