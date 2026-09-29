"use client";

import Image from "next/image";
import Link from "next/link";
import { Scale, Gavel, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFFFFF] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative h-[380px] sm:h-[480px] md:h-[540px] rounded-lg overflow-hidden shadow-2xl border-4 border-slate-100">
                <Image
                  src="/images/about.jpg"
                  alt="Law office library with scales of justice and legal books"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#C59139]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#C59139] uppercase">
                ABOUT US
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.2]">
              We Are Here To Fight <br />
              Against <span className="text-[#C59139]">Any Violence</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our experienced attorneys provide compassionate yet tenacious representation in court.
              We believe in upholding the law with unwavering integrity and fighting tirelessly for
              our clients' rights across both federal and state jurisdictions.
            </p>

            <div className="flex items-start gap-4 pt-2">
              <div className="w-12 h-12 rounded-full bg-[#FAF5ED] border border-[#C59139]/40 flex items-center justify-center shrink-0">
                <Scale className="w-6 h-6 text-[#C59139]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">
                  Reliable and Credible
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Decades of proven legal expertise with a relentless focus on client success,
                  transparent counsel, and ethical practice.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF5ED] border border-[#C59139]/40 flex items-center justify-center shrink-0">
                <Gavel className="w-6 h-6 text-[#C59139]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">
                  Legal Protection
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Comprehensive legal shielding and aggressive defense strategies safeguarding your
                  financial standing, reputation, and civil liberties.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-sm bg-[#C59139] text-[#08101E] font-bold text-sm hover:bg-[#D4A359] transition-all shadow-md hover:-translate-y-0.5"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
