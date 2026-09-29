"use client";

import { Award, Briefcase, Users, Trophy } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "110+",
      label: "Expert Attorneys",
      desc: "Dedicated legal minds across multiple state & federal jurisdictions",
    },
    {
      icon: Briefcase,
      value: "900+",
      label: "Successful Cases",
      desc: "Favorable courtroom verdicts, settlements, and dispute resolutions",
    },
    {
      icon: Award,
      value: "850+",
      label: "Satisfied Clients",
      desc: "Individuals and multinational enterprises trusting our legal counsel",
    },
    {
      icon: Trophy,
      value: "965+",
      label: "Awards & Honors",
      desc: "Recognized nationally by top legal associations and publications",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FBF9F5] text-slate-800 relative overflow-hidden">
      <div className="absolute left-6 top-0 bottom-0 w-28 opacity-5 pointer-events-none hidden md:block border-r-4 border-double border-slate-900" />
      <div className="absolute right-6 top-0 bottom-0 w-28 opacity-5 pointer-events-none hidden md:block border-l-4 border-double border-slate-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Built On Experience, <br />
            Driven By <span className="text-[#C59139]">Results</span>
          </h2>

          <div className="flex items-center justify-center gap-3 py-1">
            <span className="h-[1px] w-12 bg-[#C59139]/50" />
            <span className="w-2 h-2 rotate-45 bg-[#C59139]" />
            <span className="h-[1px] w-12 bg-[#C59139]/50" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our numbers reflect our relentless pursuit of justice, meticulous preparation, and
            uncompromising dedication to securing triumphant results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white border border-slate-200/90 hover:border-[#C59139] rounded-md p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center justify-between"
              >
                <div className="w-14 h-14 rounded-full bg-[#FAF5ED] border border-[#C59139]/40 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#C59139]" />
                </div>

                <div className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-2">
                  {stat.value}
                </div>

                <h3 className="text-sm font-bold text-slate-800 tracking-wide mb-2 uppercase">
                  {stat.label}
                </h3>

                <p className="text-slate-500 text-xs leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
