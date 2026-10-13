import { Space_Grotesk, Manrope } from "next/font/google";
import "../index.css";
import { ContactModalProvider } from "../context/ContactModalContext";
import JsonLd from "../components/JsonLd";
import {
  ORG_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  organizationJsonLd,
  websiteJsonLd,
} from "../lib/site";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const defaultTitle = `${SITE_NAME} — ${SITE_TAGLINE}`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: ORG_NAME,
  keywords: [
    "passive sUAS detection",
    "small drone detection",
    "drone detection software",
    "sensor fusion",
    "SDVOSB",
    "service-disabled veteran-owned small business",
    "defense subcontractor",
    "government subcontracting",
    "applied AI",
    "agentic AI",
    "edge AI",
    "physical AI",
    "CMMC-compliant",
    "JCP certified",
    "Texas VetHUB",
  ],
  category: "technology",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: defaultTitle,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  formatDetection: { email: false, address: false, telephone: false },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport = {
  themeColor: "#f7f4ee",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${bodyFont.className} bg-stone-50 text-slate-950 antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <ContactModalProvider>{children}</ContactModalProvider>
      </body>
    </html>
  );
}
