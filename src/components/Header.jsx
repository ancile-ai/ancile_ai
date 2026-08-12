"use client";

import { useEffect, useEffectEvent, useRef, useState } from "react";
import { BrainCircuit, Boxes, ChevronDown, LayoutGrid, Menu, Radar, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContactModal } from "../context/ContactModalContext";
import Logo from "./Logo";

const capabilityLinks = [
  { href: "/overview", icon: LayoutGrid, label: "Overview", desc: "Capability map and how we engage" },
  { href: "/engineering", icon: Radar, label: "Passive sUAS Detection", desc: "Low-signature small-drone detection software" },
  { href: "/support", icon: Boxes, label: "Subcontract Support", desc: "Engineering, integration, and sustainment for primes" },
  { href: "/applied-ai", icon: BrainCircuit, label: "Applied AI & R&D", desc: "Agentic, edge, and physical AI for the mission" },
];

const topLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const Header = () => {
  const pathname = usePathname();
  const { openModal } = useContactModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);
  const closeTimerRef = useRef(null);
  const closeNavigationMenus = useEffectEvent(() => {
    setIsMenuOpen(false);
    setIsCapabilitiesOpen(false);
  });

  useEffect(() => {
    closeNavigationMenus();
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const capabilitiesActive = capabilityLinks.some((item) =>
    pathname.startsWith(item.href)
  );

  const openCapabilities = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsCapabilitiesOpen(true);
  };

  const closeCapabilitiesWithDelay = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setIsCapabilitiesOpen(false);
      closeTimerRef.current = null;
    }, 180);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Ancile — home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {topLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div
            className="relative"
            onMouseEnter={openCapabilities}
            onMouseLeave={closeCapabilitiesWithDelay}
          >
            <button
              type="button"
              onClick={() => {
                if (isCapabilitiesOpen) {
                  closeCapabilitiesWithDelay();
                } else {
                  openCapabilities();
                }
              }}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                capabilitiesActive || isCapabilitiesOpen
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
              }`}
              aria-expanded={isCapabilitiesOpen}
              aria-haspopup="true"
            >
              Capabilities
              <ChevronDown
                className={`h-4 w-4 transition ${isCapabilitiesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isCapabilitiesOpen && (
              <div className="absolute right-0 top-full w-[38rem] pt-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl">
                  <div className="grid grid-cols-2 gap-2">
                    {capabilityLinks.map((item) => {
                      const active = pathname.startsWith(item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-start gap-3 rounded-2xl border px-4 py-4 transition ${
                            active
                              ? "border-burnt-orange-200 bg-burnt-orange-50"
                              : "border-transparent hover:border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          <span
                            className={`mt-0.5 inline-flex flex-shrink-0 rounded-xl p-2 transition ${
                              active
                                ? "bg-burnt-orange-100 text-burnt-orange-700"
                                : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            <item.icon className="h-4 w-4" />
                          </span>
                          <span className="min-w-0">
                            <span className="font-display block text-base font-semibold text-slate-900">
                              {item.label}
                            </span>
                            <span className="mt-1 block text-sm leading-6 text-slate-600">
                              {item.desc}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={openModal}
            className="rounded-full bg-burnt-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-burnt-orange-600/20 transition hover:bg-burnt-orange-700"
          >
            Get in Touch
          </button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-xl sm:px-6 lg:hidden">
          <div className="space-y-2">
            {topLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-slate-900 text-white"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 rounded-3xl border border-slate-200 bg-slate-50 p-3">
            <p className="px-2 pb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Capabilities
            </p>
            <div className="space-y-2">
              {capabilityLinks.map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-start gap-3 rounded-2xl px-4 py-3 transition ${
                      active
                        ? "bg-white text-slate-950 shadow-sm"
                        : "text-slate-700 hover:bg-white"
                    }`}
                  >
                    <span
                      className={`mt-0.5 inline-flex flex-shrink-0 rounded-xl p-2 ${
                        active
                          ? "bg-burnt-orange-100 text-burnt-orange-700"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="font-display block text-base font-semibold">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-slate-600">
                        {item.desc}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={openModal}
            className="mt-4 w-full rounded-full bg-burnt-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-burnt-orange-700"
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
