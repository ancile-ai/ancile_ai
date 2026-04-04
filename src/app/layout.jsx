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
  title: "Ancile AI - Mission Software",
  description:
    "Veteran-owned mission software company focused on GhostPost counter-small UAS fusion software and subcontract engineering support for public sector and defense programs.",
  icons: {
    icon: [
      {
        url: "/images/logo/ancile_logo_orange_white_circle_transparent.png",
        sizes: "180x180",
      },
    ],
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
