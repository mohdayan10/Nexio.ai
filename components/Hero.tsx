"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="ripple relative overflow-hidden pt-28 md:pt-36">
      {/* vertical side label */}
      <div className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 text-slate-400 xl:flex">
        <span className="text-xs [writing-mode:vertical-rl]">Explore our technology</span>
        <ChevronDown className="h-4 w-4" />
      </div>

      <div className="container-px">
        {/* hero copy */}
        <div className="mx-auto max-w-4xl pb-6 text-center">
          <h1 className="display animate-fade-up text-[2.6rem] leading-[1.05] text-[#14171f] sm:text-6xl md:text-[4.5rem]">
            Great experiences are built
            <br className="hidden sm:block" /> on a strong foundation.
          </h1>
          <p
            className="mx-auto mt-6 max-w-xl animate-fade-up text-lg text-slate-500 md:text-xl"
            style={{ animationDelay: "60ms" }}
          >
            AI agents ready for customers and employees.
            <br className="hidden sm:block" /> The only agent platform you can trust.
          </p>
          <div
            className="mt-8 flex animate-fade-up items-center justify-center gap-3"
            style={{ animationDelay: "120ms" }}
          >
            <a href="#cta" className="btn-k px-5 py-3">
              Get a demo <span className="dot" />
            </a>
            <a href="#gartner" className="btn-ko px-5 py-3">
              Analyst reports <span className="dot" />
            </a>
          </div>
        </div>

        {/* Artemis platform card */}
        <div className="mx-auto mt-12 max-w-6xl pb-16">
          <div className="relative overflow-hidden rounded-[28px] bg-[#0d0f0c] p-8 shadow-2xl md:p-12">
            {/* abstract green visual on the right */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[55%]">
              <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_75%_50%,rgba(120,220,90,0.55),transparent_70%)]" />
              <div className="absolute right-[12%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[conic-gradient(from_120deg,#bff05a,#39d2a0,#2bb0e8,#bff05a)] opacity-70 blur-2xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f0c] via-[#0d0f0c]/60 to-transparent" />
            </div>

            <div className="relative max-w-xl">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                The Nexio Agent Platform
              </p>
              <div className="mt-4 flex items-center gap-3">
                <h2 className="text-3xl font-semibold text-white md:text-4xl">
                  Meet {"{ "}<span className="italic">Artemis</span>{" }"}
                </h2>
                <span className="rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0d0f0c]">
                  New
                </span>
              </div>
              <p className="mt-4 max-w-md text-white/70">
                The AI-programmable platform for the agentic enterprise. The
                foundation for building AI agents for customer and employee
                experiences with certainty.
              </p>
            </div>

            <button
              className="absolute right-8 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0d0f0c] transition-transform hover:scale-105 md:right-12"
              aria-label="Explore Artemis"
            >
              <ArrowUpRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
