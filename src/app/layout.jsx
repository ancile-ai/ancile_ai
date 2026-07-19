import { Space_Grotesk, Manrope } from "next/font/google";
import "../index.css";
import { ContactModalProvider } from "../context/ContactModalContext";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata = {
  title: "Ancile — Passive sUAS Detection, Subcontract Delivery, Applied AI",
  description:
    "Service-disabled veteran-owned (SDVOSB) software company delivering passive sUAS detection, subcontract engineering and integration, and applied AI for public sector, energy, and defense missions.",
  icons: {
    icon: [{ url: "/images/logo/ancile-mark.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${bodyFont.className} bg-stone-50 text-slate-950 antialiased`}
      >
        <ContactModalProvider>{children}</ContactModalProvider>
      </body>
    </html>
  );
}
