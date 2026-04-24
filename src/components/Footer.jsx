import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Mail } from "lucide-react";

const capabilityLinks = [
  { href: "/overview", label: "Overview" },
  { href: "/engineering", label: "Engineering" },
  { href: "/operations", label: "Operations" },
  { href: "/predictive-analytics", label: "Predictive Analytics" },
  { href: "/generative-ai", label: "Generative AI" },
  { href: "/strategy", label: "Strategy" },
];

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-[#f3eee6]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-sm">
            <Image
              src="/images/logo/ancile_company_name_logo_orange_color_transparant.svg"
              alt="Ancile AI"
              width={176}
              height={36}
            />
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-700">
              Veteran-owned operational software company focused on passive sUAS
              software, operational integration, and subcontract engineering support
              for public sector and defense programs.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/company/ancile-ai/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                <ExternalLink className="h-4 w-4 text-burnt-orange-600" />
                LinkedIn
              </a>
              <a
                href="mailto:sales@ancile.io"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                <Mail className="h-4 w-4 text-burnt-orange-600" />
                sales@ancile.io
              </a>
            </div>
          </div>

          <div>
            <p className="font-display text-lg font-semibold text-slate-900">Capabilities</p>
            <div className="mt-4 space-y-3">
              {capabilityLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-slate-700 transition hover:text-burnt-orange-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-lg font-semibold text-slate-900">Company</p>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <Link href="/" className="block transition hover:text-burnt-orange-700">
                Home
              </Link>
              <Link href="/about" className="block transition hover:text-burnt-orange-700">
                About
              </Link>
              <a
                href="mailto:sales@ancile.io"
                className="inline-flex items-center gap-2 transition hover:text-burnt-orange-700"
              >
                Contact
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-display text-lg font-semibold text-slate-900">Contracting</p>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div>
                <p className="font-semibold text-slate-900">Status</p>
                <p>SDVOSB and veteran-owned</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">CAGE</p>
                <p>11BV7</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">NAICS</p>
                <p>541511, 541512, 541519, 518210</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">UEID</p>
                <p>Y465ERNPJ5M1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Ancile AI. All rights reserved.</p>
          <p>Mission software for sUAS, applied AI, and subcontract delivery.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
