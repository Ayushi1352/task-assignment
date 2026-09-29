"use client";

import { useState } from "react";
import Link from "next/link";
import { Scale, Phone, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Practice", href: "#practice" },
    { name: "Case", href: "#practice" },
    { name: "Team", href: "#team" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#07090E]/95 backdrop-blur-md border-b border-[#1E293B]/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full border-2 border-[#C59139] flex items-center justify-center bg-gradient-to-br from-[#1E293B] to-[#0B1325] shadow-md group-hover:border-[#E5B263] transition-all">
              <span className="font-cinzel text-lg font-bold text-[#C59139] tracking-tighter">
                LJ
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#E5B263] transition-colors">
                LAWJUSTICE
              </span>
              <span className="text-[9px] tracking-[0.3em] text-[#C59139] font-semibold uppercase -mt-0.5">
                LAW FIRM
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-slate-200 hover:text-[#C59139] transition-colors relative py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden sm:flex items-center">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-full bg-[#C59139] flex items-center justify-center text-[#0B1325] group-hover:scale-110 transition-transform shadow-md">
                <Phone className="w-4 h-4 fill-current text-[#0B1325]" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                  Call Us
                </span>
                <span className="text-sm font-bold text-white group-hover:text-[#C59139] transition-colors tracking-wide">
                  (+123) 456-7890
                </span>
              </div>
            </a>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:+1234567890"
              className="p-2 rounded-full bg-[#C59139] text-[#0B1325]"
              aria-label="Call Us"
            >
              <Phone className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1120] border-b border-[#1E293B] px-5 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top">
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-slate-200 hover:text-[#C59139] hover:bg-[#C59139]/10 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-[#1E293B]">
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-3 w-full py-3 rounded-md bg-[#C59139] text-[#0B1325] font-bold text-sm hover:bg-[#D4A359] transition-all shadow-lg"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>(+123) 456-7890</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
