import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";
import Logo, { AncileMark } from "./Logo";

const capabilityLinks = [
  { href: "/overview", label: "Overview" },
  { href: "/engineering", label: "Passive sUAS Detection" },
  { href: "/support", label: "Subcontract Support" },
  { href: "/applied-ai", label: "Applied AI & R&D" },
];

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

const contracting = [
  { label: "Status", value: "SDVOSB · Veteran-owned" },
  { label: "CAGE", value: "11BV7" },
  { label: "UEI", value: "Y465ERNPJ5M1" },
  { label: "NAICS", value: "541511 · 541512 · 541519 · 518210" },
];

const Footer = () => {
  return (
    <footer className="band-dark relative overflow-hidden border-t border-slate-800/60">
      <div className="aurora-dark pointer-events-none absolute inset-0 opacity-70" />
      <div className="soft-grid-dark pointer-events-none absolute inset-0 opacity-50" />
      <AncileMark
        tone="dark"
        className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-auto opacity-[0.04]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div className="min-w-0">
            <Logo tone="dark" markClassName="h-9 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Service-disabled veteran-owned (SDVOSB) software company delivering
              passive sUAS detection, subcontract engineering and integration, and
              applied AI for public sector, energy, and defense missions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/company/ancile-ai/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-burnt-orange-500/40 hover:bg-white/10"
              >
                <ExternalLink className="h-4 w-4 text-burnt-orange-300" />
                LinkedIn
              </a>
              <a
                href="mailto:sales@ancile.io"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-burnt-orange-500/40 hover:bg-white/10"
              >
                <Mail className="h-4 w-4 text-burnt-orange-300" />
                sales@ancile.io
              </a>
            </div>
          </div>

          {/* Capabilities */}
          <div className="min-w-0">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Capabilities
            </p>
            <div className="mt-5 space-y-3">
              {capabilityLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="min-w-0">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Company
            </p>
            <div className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:sales@ancile.io"
                className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
              >
                Contact
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Contracting */}
          <div className="min-w-0">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contracting
            </p>
            <div className="mt-5 space-y-2.5">
              {contracting.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-burnt-orange-300">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Ancile. All rights reserved.</p>
          <p>
            Mission software for sUAS detection, applied AI, and subcontract
            delivery.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
