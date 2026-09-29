"use client";

import Image from "next/image";
import { Scale } from "lucide-react";
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";

export default function TeamSection() {
  const attorneys = [
    {
      name: "Declan Miller",
      role: "Senior Litigator",
      image: "/images/lawyer-1.jpg",
    },
    {
      name: "Layla Alexander",
      role: "Corporate Attorney",
      image: "/images/lawyer-2.jpg",
    },
    {
      name: "Farazad Khan",
      role: "Criminal Defense Lead",
      image: "/images/lawyer-3.jpg",
    },
    {
      name: "Derry Nabila",
      role: "Family Law Counsel",
      image: "/images/lawyer-4.jpg",
    },
  ];

  return (
    <section id="team" className="py-20 md:py-28 bg-[#0B1426] text-white relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-5 pointer-events-none select-none">
        <Scale className="w-[600px] h-[600px] text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="h-[2px] w-6 bg-[#C59139]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#E5B263] uppercase">
              ATTORNEYS
            </span>
            <span className="h-[2px] w-6 bg-[#C59139]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Exceptional Legal Lawyers, <br />
            <span className="text-[#D4A359]">Proven Results</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {attorneys.map((lawyer) => (
            <div
              key={lawyer.name}
              className="group bg-white rounded-md overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-[#C59139]"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <Image
                  src={lawyer.image}
                  alt={lawyer.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0C182B] border-2 border-[#C59139] flex items-center justify-center shadow-lg">
                  <Scale className="w-5 h-5 text-[#E5B263]" />
                </div>
              </div>

              <div className="pt-8 pb-6 px-6 text-center text-slate-800">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-1 group-hover:text-[#C59139] transition-colors">
                  {lawyer.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mb-5">
                  {lawyer.role}
                </p>

                <div className="flex items-center justify-center gap-3 pt-3 border-t border-slate-100">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#C59139] hover:border-[#C59139] transition-all"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#C59139] hover:border-[#C59139] transition-all"
                    aria-label="Twitter"
                  >
                    <TwitterIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#C59139] hover:border-[#C59139] transition-all"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#C59139] hover:border-[#C59139] transition-all"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </a>
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
