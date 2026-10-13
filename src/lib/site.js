/**
 * Single source of truth for site-wide SEO and structured-data values.
 * Everything that describes the company to search engines and AI crawlers
 * (Google, Bing, ChatGPT, Claude, Perplexity) should be derived from here so
 * the brand, identifiers, and descriptions stay consistent across pages.
 */

export const SITE_URL = "https://ancile.io";
export const SITE_NAME = "Ancile";
export const ORG_NAME = "Ancile AI";
export const SITE_TAGLINE =
  "Passive sUAS Detection, Subcontract Support, Applied AI";
export const SITE_DESCRIPTION =
  "Ancile is a service-disabled veteran-owned (SDVOSB) software company delivering passive sUAS detection, subcontract engineering and integration, and applied AI for public sector, energy, and defense missions.";

export const CONTACT_EMAIL = "sales@ancile.io";
export const CAREERS_EMAIL = "hr@ancile.io";
export const LINKEDIN_URL = "https://www.linkedin.com/company/ancile-ai/";
// Generated from the brand mark by src/app/apple-icon.jsx (180x180 PNG).
export const LOGO_PATH = "/apple-icon";

export const ORG_IDENTIFIERS = {
  cage: "11BV7",
  uei: "Y465ERNPJ5M1",
  naics: ["541511", "541512", "541519", "518210"],
  setAside: "SDVOSB",
};

export const CAPABILITY_LANES = [
  {
    path: "/engineering",
    label: "Passive sUAS Detection",
    description:
      "Passive small-drone (sUAS) detection, localization, and classification software built on multi-modal sensor fusion (RF, EO/IR, acoustic) running on COTS edge hardware. No active emissions.",
    type: "Product",
  },
  {
    path: "/support",
    label: "Subcontract Support",
    description:
      "SDVOSB subcontract engineering, integration, and sustainment for prime-led public sector, energy, and defense programs. CMMC-compliant, JCP certified, Texas VetHUB-aligned.",
    type: "Service",
  },
  {
    path: "/applied-ai",
    label: "Applied AI & R&D",
    description:
      "Agentic AI, edge AI, and physical AI delivered with the governance, evaluations, and observability needed to field them responsibly in secure and disconnected environments.",
    type: "Service",
  },
];

/** All indexable routes with sitemap hints. */
export const SITE_ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/overview", priority: 0.9, changeFrequency: "monthly" },
  { path: "/engineering", priority: 0.9, changeFrequency: "monthly" },
  { path: "/support", priority: 0.9, changeFrequency: "monthly" },
  { path: "/applied-ai", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.4, changeFrequency: "monthly" },
];

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

/**
 * Builds a complete Next.js `metadata` object for an inner page: canonical
 * URL, Open Graph, and Twitter card. The root layout supplies the
 * `%s | Ancile` title template, so `title` here is the page name only.
 */
export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
};

export function buildPageMetadata({ title, description, path }) {
  const url = absoluteUrl(path);
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      // Page-level openGraph replaces the root's, so the share card is re-attached here.
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/* ------------------------------------------------------------------ */
/* JSON-LD builders (schema.org)                                       */
/* ------------------------------------------------------------------ */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: ORG_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(LOGO_PATH),
    },
    description: SITE_DESCRIPTION,
    email: CONTACT_EMAIL,
    sameAs: [LINKEDIN_URL],
    areaServed: { "@type": "Country", name: "United States" },
    knowsAbout: [
      "Passive sUAS detection",
      "Small drone detection",
      "Multi-modal sensor fusion",
      "Defense software engineering",
      "Government subcontracting",
      "SDVOSB",
      "Agentic AI",
      "Edge AI",
      "Physical AI",
      "Applied artificial intelligence",
    ],
    naics: ORG_IDENTIFIERS.naics,
    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "CAGE",
        value: ORG_IDENTIFIERS.cage,
      },
      {
        "@type": "PropertyValue",
        propertyID: "UEI",
        value: ORG_IDENTIFIERS.uei,
      },
      {
        "@type": "PropertyValue",
        propertyID: "Set-Aside Status",
        value: "Service-Disabled Veteran-Owned Small Business (SDVOSB)",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CONTACT_EMAIL,
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        contactType: "recruiting",
        email: CAREERS_EMAIL,
        availableLanguage: "English",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Capabilities",
      itemListElement: CAPABILITY_LANES.map((lane) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": lane.type,
          name: lane.label,
          description: lane.description,
          url: absoluteUrl(lane.path),
        },
      })),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: ORG_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd({ name, description, path, serviceType }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "United States" },
    audience: {
      "@type": "Audience",
      audienceType:
        "Prime contractors, public sector agencies, energy operators, and defense programs",
    },
  };
}

export function productJsonLd({ name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url: absoluteUrl(path),
    category: "Small drone (sUAS) detection software",
    brand: { "@id": `${SITE_URL}/#organization` },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
  };
}

export function faqJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function webPageJsonLd({ name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}
