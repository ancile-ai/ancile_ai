/**
 * Renders one or more schema.org JSON-LD objects as a script tag.
 * Server component: no client JS is shipped for this. All data comes from
 * static builders in src/lib/site.js; `<` is escaped so a value can never
 * break out of the script element.
 */
export default function JsonLd({ data }) {
  const items = Array.isArray(data) ? data : [data];

  return items.map((item, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(item).replace(/</g, "\\u003c"),
      }}
    />
  ));
}
