"use client";

import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Usługi", href: "#uslugi" },
  { label: "Cennik", href: "#cennik" },
  { label: "Dlaczego my", href: "#dlaczego" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-3 sm:py-4">
        <Link href="/" className="flex items-center gap-2 sm:gap-3" aria-label="Daily Shine">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f5b301]/80 bg-[#f5b301]/10 text-sm font-black italic text-[#f5b301] shadow-[0_0_22px_rgba(245,179,1,0.18)] sm:h-11 sm:w-11 sm:text-lg">
            DS
          </div>
          <div className="leading-none text-black">
            <div className="text-[0.6rem] font-semibold tracking-[0.28em] text-[#121212] sm:text-[0.78rem] sm:tracking-[0.42em]">
              DAILY
            </div>
            <div className="text-sm font-bold tracking-[0.18em] text-black sm:text-lg sm:tracking-[0.24em]">SHINE</div>
          </div>
        </Link>

        <nav
          aria-label="Główna nawigacja"
          className="hidden items-center gap-8 md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-[0.18em] text-black/70 transition hover:text-[#121212]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="tel:+48794566787"
            className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#333]"
          >
            <PhoneCall className="h-4 w-4" />
            Zadzwoń
          </a>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setMobileOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white md:hidden"
        >
          {mobileOpen ? <X className="h-4 w-4 text-black" /> : <Menu className="h-4 w-4 text-black" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/10 bg-white md:hidden">
          <nav className="section-shell flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg border border-black/10 px-3 py-2 text-sm font-medium uppercase tracking-[0.18em] text-black/80 transition hover:border-black/20 hover:bg-black/5"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+48794566787"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-black px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white"
            >
              <PhoneCall className="h-4 w-4" />
              Zadzwoń
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
