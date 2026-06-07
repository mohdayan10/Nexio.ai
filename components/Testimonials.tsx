"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    name: "Morgan Stanley",
    quote:
      "What I was really trying to solve was how to give 15–20 minutes back each day to our financial advisors. That extra time lets them reach out to customers more quickly, more effectively, or even make one additional phone call — and that's a real revenue driver for us.",
  },
  {
    name: "Pfizer",
    quote:
      "Since we started with Nexio, we've deployed 60 AI agents across the enterprise—covering research, development, medical, commercial, and manufacturing across global markets and multiple languages. We needed a scalable platform, and these agents will only continue to become more intelligent.",
  },
  {
    name: "Mphasis",
    quote:
      "We are proud to be a strategic implementation partner of Nexio, and we feel especially confident knowing that Nexio's foundation on AWS, delivering unmatched reliability and scalability.",
  },
  {
    name: "Microsoft",
    quote:
      "Our strategic partnership with Nexio marks a significant milestone in our mission to accelerate enterprise AI transformation. By integrating Nexio's advanced conversational and GenAI capabilities with Microsoft's robust cloud and AI services, we are enabling enterprises to adopt AI at scale and with enterprise-grade security.",
  },
  {
    name: "AMD",
    quote:
      "In the months since, employees across the company are engaging with people-related processes more efficiently — improving satisfaction across the board.",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="bg-[#eef2f7] py-20 md:py-28">
      <div className="container-px">
        <Reveal className="flex items-start justify-between">
          <div>
            <h2 className="display text-4xl text-[#14171f] sm:text-5xl">Customer testimonials</h2>
            <p className="mt-3 text-lg text-slate-500">Discover how organizations deliver AI value with Nexio.</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button onClick={() => scroll(-1)} className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow ring-1 ring-slate-200 hover:bg-slate-50" aria-label="Previous">
              <ChevronLeft className="h-5 w-5 text-slate-700" />
            </button>
            <button onClick={() => scroll(1)} className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow ring-1 ring-slate-200 hover:bg-slate-50" aria-label="Next">
              <ChevronRight className="h-5 w-5 text-slate-700" />
            </button>
          </div>
        </Reveal>

        <div ref={ref} className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((t) => (
            <figure key={t.name} className="w-[340px] shrink-0 snap-start rounded-2xl bg-white p-7 shadow-sm">
              <figcaption className="text-2xl font-semibold text-[#14171f]">{t.name}</figcaption>
              <blockquote className="mt-10 text-[15px] leading-relaxed text-slate-600">{t.quote}</blockquote>
            </figure>
          ))}
        </div>

        <Reveal className="mt-8">
          <a href="#cta" className="btn-k px-5 py-3">More customer stories <span className="dot" /></a>
        </Reveal>
      </div>
    </section>
  );
}
