"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogSection() {
  const articles = [
    {
      date: "20",
      month: "OCT",
      author: "Admin",
      comments: "12 Comments",
      title: "How to Select an Appropriate Attorney for Your Case?",
      image: "/images/blog-1.jpg",
      excerpt:
        "Key considerations, track record assessments, and critical questions to ask before retaining legal counsel to guarantee robust advocacy.",
    },
    {
      date: "18",
      month: "OCT",
      author: "Admin",
      comments: "08 Comments",
      title: "Understanding the nuances of modern corporate contracts",
      image: "/images/blog-2.jpg",
      excerpt:
        "Crucial indemnification clauses, non-competes, and risk-mitigation provisions every corporate leader must scrutinize closely.",
    },
    {
      date: "15",
      month: "OCT",
      author: "Admin",
      comments: "15 Comments",
      title: "Crucial element of the classic constitutional laws",
      image: "/images/blog-3.jpg",
      excerpt:
        "An in-depth examination of foundational jurisprudence and how landmark appellate court decisions continue to defend civil equities.",
    },
  ];

  return (
    <section id="blog" className="py-20 md:py-28 bg-[#FFFFFF] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="h-[2px] w-6 bg-[#C59139]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#C59139] uppercase">
              OUR BLOG
            </span>
            <span className="h-[2px] w-6 bg-[#C59139]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Latest News & Articles
          </h2>

          <div className="flex items-center justify-center gap-3 py-1">
            <span className="h-[1px] w-12 bg-[#C59139]/50" />
            <span className="w-2 h-2 rotate-45 bg-[#C59139]" />
            <span className="h-[1px] w-12 bg-[#C59139]/50" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((post) => (
            <article
              key={post.title}
              className="group bg-white border border-slate-200/90 hover:border-[#C59139] rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs rounded-sm px-3 py-1.5 text-center shadow-md border border-slate-200">
                    <span className="block font-serif text-lg font-bold text-slate-900 leading-none">
                      {post.date}
                    </span>
                    <span className="block text-[10px] font-bold text-[#C59139] uppercase tracking-wider mt-0.5">
                      {post.month}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{post.comments}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 group-hover:text-[#C59139] transition-colors leading-snug">
                    <Link href="#blog">{post.title}</Link>
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <Link
                  href="#blog"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#C59139] hover:text-[#9C6E21] uppercase tracking-wider group"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
