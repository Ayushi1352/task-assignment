"use client";

import { Scale, Handshake } from "lucide-react";

export default function FeatureCards() {
  const cards = [
    {
      id: 1,
      type: "dark",
      iconType: "scale",
      bgImage: "/images/hero-bg.jpg",
      line1: "Strategic Legal",
      line2: "Excellence",
      description:
        "We deliver strategic legal solutions with precision and insight, protecting your rights and achieving the best possible outcomes.",
    },
    {
      id: 2,
      type: "dark",
      iconType: "handshake",
      bgImage: "/images/handshake.jpg",
      line1: "Trusted Guidance,",
      line2: "Personalized Solutions",
      description:
        "We take the time to understand your unique needs and provide tailored legal strategies with clear communication and dedicated support.",
    },
    {
      id: 3,
      type: "gold",
      iconType: "shield-star",
      bgImage: "/images/trophy.jpg",
      line1: "Proven Results,",
      line2: "Lasting Impact",
      description:
        "Our track record of success reflects our commitment to excellence, integrity, and achieving results that truly make a difference.",
    },
  ];

  return (
    <section className="relative z-20 bg-white pt-14 sm:pt-16 md:pt-20 pb-10 sm:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => {
            const isGold = card.type === "gold";

            return (
              <div
                key={card.id}
                className={`relative overflow-hidden rounded-[22px] p-8 sm:p-9 lg:p-10 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between ${
                  isGold
                    ? "bg-[#e5a93b] text-[#1a2332]"
                    : "bg-[#0b1626] text-white border border-[#1e2d42]/60"
                }`}
                style={{
                  backgroundImage: isGold
                    ? `linear-gradient(135deg, rgba(230, 169, 59, 0.93) 0%, rgba(222, 158, 42, 0.88) 100%), url("${card.bgImage}")`
                    : `linear-gradient(135deg, rgba(11, 22, 38, 0.94) 0%, rgba(11, 22, 38, 0.82) 100%), url("${card.bgImage}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center right",
                }}
              >
                <div>
                  {/* Top Round Icon Container */}
                  <div className="mb-6">
                    {card.iconType === "scale" && (
                      <div className="w-14 h-14 rounded-full border border-[#e5a93b]/70 bg-[#0e1c2e]/80 flex items-center justify-center shadow-md">
                        <Scale className="w-7 h-7 text-[#e5a93b]" strokeWidth={1.8} />
                      </div>
                    )}

                    {card.iconType === "handshake" && (
                      <div className="w-14 h-14 rounded-full border border-[#e5a93b]/70 bg-[#0e1c2e]/80 flex items-center justify-center shadow-md">
                        <Handshake className="w-7 h-7 text-[#e5a93b]" strokeWidth={1.8} />
                      </div>
                    )}

                    {card.iconType === "shield-star" && (
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <svg
                          className="w-7 h-7 text-[#e5a93b]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <polygon
                            points="12 8 13.2 11 16.5 11.3 14 13.5 14.8 17 12 15.2 9.2 17 10 13.5 7.5 11.3 10.8 11 12 8"
                            fill="currentColor"
                            stroke="none"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Title (Playfair Display / Serif) */}
                  <h3
                    className={`font-serif text-2xl sm:text-[25px] font-bold leading-[1.25] tracking-tight ${
                      isGold ? "text-[#1a2332]" : "text-white"
                    }`}
                  >
                    {card.line1} <br />
                    {card.line2}
                  </h3>

                  {/* Short Accent Divider Line */}
                  <div
                    className={`w-9 h-[2.5px] rounded-full my-4 ${
                      isGold ? "bg-white/80" : "bg-[#e5a93b]"
                    }`}
                  />

                  {/* Description Paragraph */}
                  <p
                    className={`text-sm sm:text-[14.5px] leading-relaxed ${
                      isGold ? "text-[#1a2332]/90 font-medium" : "text-[#b0bccb]"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
