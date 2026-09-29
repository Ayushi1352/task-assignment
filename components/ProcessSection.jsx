"use client";

import Image from "next/image";

export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Initial Consult",
      image: "/images/process-1.jpg",
      desc: "We discuss your legal circumstances and evaluate your case thoroughly in a confidential setting.",
    },
    {
      step: "02",
      title: "Strategy & Plan",
      image: "/images/process-2.jpg",
      desc: "We formulate an airtight legal strategy and assemble essential evidence tailored to your goals.",
    },
    {
      step: "03",
      title: "Case Execution",
      image: "/images/process-3.jpg",
      desc: "Our dedicated attorneys advocate tirelessly on your behalf in high-stakes negotiations or trial.",
    },
    {
      step: "04",
      title: "Favorable Outcome",
      image: "/images/process-4.jpg",
      desc: "Securing the optimal settlement, verdict, or contract fulfillment to protect your future.",
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-[#FBF9F5] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="h-[2px] w-6 bg-[#C59139]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#C59139] uppercase">
              HOW IT WORKS
            </span>
            <span className="h-[2px] w-6 bg-[#C59139]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            A Clear Process, <br />
            Focused On <span className="text-[#C59139]">Your Success.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our client-centered approach ensures you are supported at every step of your legal
            journey, from initial consult to winning resolution.
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-4 gap-6 mb-10 relative">
          <div className="absolute top-1/2 left-16 right-16 h-[2px] border-t-2 border-dashed border-[#C59139]/50 -translate-y-1/2 z-0" />
          {steps.map((item) => (
            <div key={item.step} className="flex flex-col items-center relative z-10">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-[#C59139] flex items-center justify-center shadow-md text-[#C59139] font-serif font-bold text-lg hover:scale-110 transition-transform">
                {item.step}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group bg-white border border-slate-200/90 hover:border-[#C59139] rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="lg:hidden absolute top-3 left-3 w-8 h-8 rounded-full bg-[#C59139] text-[#08101E] font-bold text-xs flex items-center justify-center shadow">
                  {item.step}
                </div>
              </div>

              <div className="p-6 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2 group-hover:text-[#C59139] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
