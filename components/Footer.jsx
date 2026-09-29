"use client";

import Link from "next/link";
import { Scale, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#060D1A] text-slate-300 relative overflow-hidden pt-20 pb-12 border-t border-slate-800/80">
      <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none select-none">
        <Scale className="w-[500px] h-[500px] text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-800/80">
          <div className="lg:col-span-4 space-y-6">
            <Link href="#hero" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full border-2 border-[#C59139] flex items-center justify-center bg-gradient-to-br from-[#1E293B] to-[#0B1325] shadow-md">
                <span className="font-cinzel text-lg font-bold text-[#C59139] tracking-tighter">
                  LJ
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-2xl font-bold tracking-wider text-white">
                  LAWJUSTICE
                </span>
                <span className="text-[9px] tracking-[0.3em] text-[#C59139] font-semibold uppercase -mt-0.5">
                  LAW FIRM
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We are committed to delivering rigorous, results-driven legal representation with
              uncompromising integrity, precision, and unwavering dedication to safeguarding your rights.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-slate-700 bg-[#0E1A30] flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#C59139] hover:border-[#C59139] transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-slate-700 bg-[#0E1A30] flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#C59139] hover:border-[#C59139] transition-all"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-slate-700 bg-[#0E1A30] flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#C59139] hover:border-[#C59139] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-slate-700 bg-[#0E1A30] flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#C59139] hover:border-[#C59139] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-b border-[#C59139]/40 pb-2 inline-block">
              Practice Areas
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="#practice" className="hover:text-[#D4A359] transition-colors flex items-center gap-2">
                  <span className="text-[#C59139] text-xs">›</span> Civil Litigation
                </Link>
              </li>
              <li>
                <Link href="#practice" className="hover:text-[#D4A359] transition-colors flex items-center gap-2">
                  <span className="text-[#C59139] text-xs">›</span> Corporate Law
                </Link>
              </li>
              <li>
                <Link href="#practice" className="hover:text-[#D4A359] transition-colors flex items-center gap-2">
                  <span className="text-[#C59139] text-xs">›</span> Criminal Defense
                </Link>
              </li>
              <li>
                <Link href="#practice" className="hover:text-[#D4A359] transition-colors flex items-center gap-2">
                  <span className="text-[#C59139] text-xs">›</span> Family & Custody Law
                </Link>
              </li>
              <li>
                <Link href="#practice" className="hover:text-[#D4A359] transition-colors flex items-center gap-2">
                  <span className="text-[#C59139] text-xs">›</span> Real Estate Disputes
                </Link>
              </li>
              <li>
                <Link href="#practice" className="hover:text-[#D4A359] transition-colors flex items-center gap-2">
                  <span className="text-[#C59139] text-xs">›</span> Tax & Wealth Advisory
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-b border-[#C59139]/40 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="#about" className="hover:text-[#D4A359] transition-colors flex items-center gap-2">
                  <span className="text-[#C59139] text-xs">›</span> About Us
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-[#D4A359] transition-colors flex items-center gap-2">
                  <span className="text-[#C59139] text-xs">›</span> Our Attorneys
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-[#D4A359] transition-colors flex items-center gap-2">
                  <span className="text-[#C59139] text-xs">›</span> How It Works
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-[#D4A359] transition-colors flex items-center gap-2">
                  <span className="text-[#C59139] text-xs">›</span> Testimonials
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-[#D4A359] transition-colors flex items-center gap-2">
                  <span className="text-[#C59139] text-xs">›</span> Latest News
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#D4A359] transition-colors flex items-center gap-2">
                  <span className="text-[#C59139] text-xs">›</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-b border-[#C59139]/40 pb-2 inline-block">
              Contact Info
            </h4>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0E1A30] border border-[#C59139]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#C59139]" />
                </div>
                <span>123 Justice Way, Suite 400, Manhattan, New York, NY 10001</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0E1A30] border border-[#C59139]/40 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#C59139]" />
                </div>
                <a href="tel:+1234567890" className="hover:text-[#D4A359] transition-colors">
                  (+123) 456-7890
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0E1A30] border border-[#C59139]/40 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#C59139]" />
                </div>
                <a href="mailto:contact@lawjustice.com" className="hover:text-[#D4A359] transition-colors">
                  contact@lawjustice.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 LAWJUSTICE Law Firm. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#C59139] transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#C59139] transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#C59139] transition-colors">
              Legal Disclaimer
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-[#0E1A30] border border-slate-700 hover:border-[#C59139] text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
