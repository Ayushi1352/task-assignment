"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      badge: "Welcome to Lawustice",
      line1: "Transforming Equity",
      line2: "With Precision And",
      line3: "Gentle Advocacy",
      description:
        "We provide trusted legal representation with a strategic approach, delivering clear guidance, strong advocacy, and reliable solutions for individuals and businesses seeking justice, protection, and long-term legal confidence.",
      ctaText: "Book Appointment",
      ctaLink: "#contact",
    },
    {
      badge: "Welcome to Lawustice",
      line1: "Dedicated Advocates",
      line2: "Standing For Your",
      line3: "Legal Rights",
      description:
        "Delivering relentless advocacy and high-level strategic counsel in complex civil, corporate, and constitutional matters with unwavering integrity and proven courtroom success.",
      ctaText: "Book Appointment",
      ctaLink: "#contact",
    },
    {
      badge: "Welcome to Lawustice",
      line1: "Strategic Counsel",
      line2: "With Excellence And",
      line3: "Unmatched Diligence",
      description:
        "Protecting your future with custom legal frameworks, attentive personal representation, and proven dispute resolution across all court jurisdictions.",
      ctaText: "Book Appointment",
      ctaLink: "#contact",
    },
  ];

  const current = slides[activeSlide];

  return (
    <section
      id="hero"
      className="relative min-h-[640px] md:min-h-[720px] lg:min-h-[780px] xl:min-h-[840px] flex items-center bg-[#07090E] overflow-hidden"
    >
      {/* Background Image: Mahogany Desk, Gavel, Scale, Law Books */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/hero-bg.jpg"
          alt="Judge gavel and scales of justice on mahogany desk in law library"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center"
        />

        {/* Gradient Overlays: Darkened on the left for crisp text contrast while keeping right side brass & wood vibrant */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090E] via-[#07090E]/85 via-45% to-[#07090E]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-[#07090E]/40" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24 md:pb-28">
        <div className="max-w-2xl space-y-6 md:space-y-7">
          {/* Badge: "Welcome to Lawustice" */}
          <div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-[4px] bg-[#3a2c1b]/80 border border-[#5a4224]/60 backdrop-blur-sm text-[#dfa647] text-xs sm:text-[13px] font-semibold tracking-normal shadow-sm">
              {current.badge}
            </span>
          </div>

          {/* Main Serif Heading matching screenshot */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-[56px] lg:text-[62px] xl:text-[68px] font-normal text-white tracking-normal leading-[1.12]">
            {current.line1} <br />
            {current.line2} <br />
            <span className="relative inline-block text-[#dfa647]">
              {current.line3}
              <span className="absolute left-0 -bottom-1 sm:-bottom-1.5 w-full h-[1.5px] sm:h-[2px] bg-[#dfa647]" />
            </span>
          </h1>

          {/* Subtitle Paragraph matching exact screenshot copy */}
          <p className="text-[#cbd2db] text-sm sm:text-[15px] md:text-base leading-[1.7] max-w-[540px]">
            {current.description}
          </p>

          {/* CTA Button: "Book Appointment →" */}
          <div className="pt-2">
            <Link
              href={current.ctaLink}
              className="inline-flex items-center gap-3 px-6 py-3 sm:px-7 sm:py-3.5 rounded-[4px] bg-[#dfa647] hover:bg-[#eab65b] text-[#16120b] font-semibold text-sm sm:text-[15px] transition-all duration-200 shadow-lg hover:shadow-[#dfa647]/25 hover:-translate-y-0.5 group"
            >
              <span>{current.ctaText}</span>
              <span className="text-base font-bold transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Pagination Indicators at Bottom Center matching screenshot */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex items-center justify-center gap-2.5 z-20">
        {slides.map((_, index) => {
          const isActive = activeSlide === index;
          return (
            <button
              key={index}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? "w-8 h-1.5 bg-[#dfa647]"
                  : "w-1.5 h-1.5 bg-white/80 hover:bg-white"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
