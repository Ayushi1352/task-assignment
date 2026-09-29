"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "David Ross",
      role: "Managing Director, Apex Capital",
      image: "/images/client-1.jpg",
      quote:
        "The legal team's dedication and deep expertise turned an overwhelming corporate dispute into a clear victory. I could not have asked for more articulate and tenacious advocates.",
    },
    {
      name: "Helena Mitchell",
      role: "Founder, Mitchell Biotech",
      image: "/images/client-2.jpg",
      quote:
        "Their strategic insight in regulatory compliance saved our company millions. Transparent, highly responsive, and exceptionally professional through every stage of litigation.",
    },
    {
      name: "Marcus Sterling",
      role: "Private Client, Estate Law",
      image: "/images/client-3.jpg",
      quote:
        "Compassionate, attentive, and fiercely protective of our family's rights. They delivered the resolution and peace of mind we desperately needed during a challenging season.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#08101E] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 pointer-events-none select-none">
        <Image
          src="/images/hero-bg.jpg"
          alt="Courtroom background"
          fill
          sizes="100vw"
          className="object-cover object-center filter grayscale"
        />
        <div className="absolute inset-0 bg-[#08101E]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="h-[2px] w-6 bg-[#C59139]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#E5B263] uppercase">
              TESTIMONIALS
            </span>
            <span className="h-[2px] w-6 bg-[#C59139]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Testimonials
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Discover how our dedicated representation and courtroom advocacy helped our clients achieve justice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-[#0C172B]/90 border border-[#C59139]/35 hover:border-[#C59139] rounded-md p-8 backdrop-blur-md shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#162544] border border-[#C59139]/40 flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-[#E5B263]" />
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C59139] text-[#C59139]" />
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#C59139] shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-white">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-12">
          <span className="w-3 h-3 rounded-full bg-[#C59139]" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
        </div>
      </div>
    </section>
  );
}
