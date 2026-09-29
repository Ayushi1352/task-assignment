"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scale, FilePenLine, Gavel, Users, ArrowRight } from "lucide-react";

export default function PracticeAreas() {
  const [activeDot, setActiveDot] = useState(0);

  const practices = [
    {
      id: "civil",
      title: "Civil Litigation",
      icon: Scale,
      image: "/images/service-scales.jpg",
      description:
        "Effective legal representation in civil disputes to protect your rights and secure favorable outcomes.",
      link: "#contact",
    },
    {
      id: "contract",
      title: "Contract Drafting",
      icon: FilePenLine,
      image: "/images/service-contract.jpg",
      description:
        "Clear, precise, and legally sound contracts tailored to your business and personal needs.",
      link: "#contact",
    },
    {
      id: "criminal",
      title: "Criminal Defense",
      icon: Gavel,
      image: "/images/service-gavel.jpg",
      description:
        "Strategic defense and aggressive representation to protect your rights and your future.",
      link: "#contact",
    },
    {
      id: "family",
      title: "Family Law",
      icon: Users,
      image: "/images/service-lawyer.jpg",
      description:
        "Compassionate legal support for family matters, including divorce, custody, and more.",
      link: "#contact",
    },
  ];

  return (
    <section id="practice" className="py-20 md:py-28 bg-[#070d18] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="h-[2px] w-6 bg-[#d89f3c]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#d89f3c] uppercase">
              SERVICES
            </span>
            <span className="h-[2px] w-6 bg-[#d89f3c]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Comprehensive Legal Solutions <br />
            Tailored To <span className="text-[#d89f3c]">Your Needs</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We offer comprehensive legal representation across a wide spectrum of legal disciplines,
            ensuring dedicated expert guidance for both individuals and commercial enterprises.
          </p>
        </div>

        {/* 4 Cards Grid matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {practices.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-[#09111c] border border-[#d89f3c]/35 hover:border-[#d89f3c]/80 rounded-[18px] overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-2xl flex flex-col justify-between"
              >
                {/* Top Image Container */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden border-b border-[#d89f3c]/40">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09111c]/60 via-transparent to-black/20" />

                  {/* Circular Icon overlapping boundary */}
                  <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#0a121e] border-[1.5px] border-[#d89f3c]/75 flex items-center justify-center shadow-xl z-10 group-hover:border-[#d89f3c] transition-colors">
                    <Icon className="w-6 h-6 text-[#d89f3c]" strokeWidth={1.8} />
                  </div>
                </div>

                {/* Bottom Card Content */}
                <div className="pt-11 pb-8 px-6 text-center flex-1 flex flex-col items-center justify-between">
                  <div className="flex flex-col items-center w-full">
                    {/* Serif Title */}
                    <h3 className="font-serif text-2xl font-normal text-white mb-2.5 tracking-tight group-hover:text-[#d89f3c] transition-colors">
                      {item.title}
                    </h3>

                    {/* Short Gold Underline */}
                    <div className="w-7 h-[2px] bg-[#d89f3c] rounded-full mb-3.5" />

                    {/* Description Paragraph */}
                    <p className="text-[#a6b1c0] text-xs sm:text-[13px] leading-[1.65] max-w-[260px] mx-auto mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Learn More Link with Arrow */}
                  <Link
                    href={item.link}
                    className="inline-flex items-center justify-center gap-2 text-xs sm:text-[13px] font-semibold text-[#d89f3c] group-hover:text-[#f3c56e] transition-colors tracking-normal group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots matching screenshot */}
        <div className="flex items-center justify-center gap-2.5 mt-12">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveDot(idx)}
              aria-label={`Go to page ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeDot === idx
                  ? "w-2.5 h-2.5 bg-[#d89f3c]"
                  : "w-2.5 h-2.5 bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
