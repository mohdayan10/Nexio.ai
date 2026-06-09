"use client";

import { Fragment } from "react";
import { ChevronDown } from "lucide-react";

function PlatformGlow() {
  return (
    <div className="absolute inset-0">
      {/* slowly rotating gradient core */}
      <div className="absolute right-[16%] top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-[conic-gradient(from_140deg,#bff05a,#39d2a0,#2bb0e8,#6d8bff,#bff05a)] opacity-80 blur-[40px] animate-spin-slow" />
      {/* drifting aurora blobs */}
      <div className="absolute right-[6%] top-[26%] h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(120,220,90,0.55),transparent_65%)] blur-2xl animate-aurora" />
      <div className="absolute right-[28%] bottom-[14%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(43,176,232,0.5),transparent_65%)] blur-2xl animate-aurora-slow" />
      {/* soft highlight ring */}
      <div className="absolute right-[20%] top-1/2 h-44 w-44 -translate-y-1/2 rounded-full ring-1 ring-white/15 animate-glow-pulse" />
    </div>
  );
}

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
          <h1 className="font-serif font-medium italic tracking-tight text-[2.6rem] leading-[1.08] text-[#14171f] sm:text-6xl md:text-[4.5rem]">
            <span className="block">
              {["Great", "experiences", "are", "built"].map((word, i) => (
                <Fragment key={word}>
                  <span
                    className="hero-word"
                    style={{ animationDelay: `${120 + i * 140}ms` }}
                  >
                    {word}
                  </span>{" "}
                </Fragment>
              ))}
            </span>
            <span className="block">
              {["on", "a", "strong", "foundation."].map((word, i) => (
                <Fragment key={word}>
                  <span
                    className="hero-word"
                    style={{ animationDelay: `${120 + (4 + i) * 140}ms` }}
                  >
                    {word}
                  </span>{" "}
                </Fragment>
              ))}
            </span>
          </h1>
          <p
            className="mx-auto mt-6 max-w-xl animate-fade-up text-lg text-slate-500 md:text-xl"
            style={{ animationDelay: "1500ms", animationFillMode: "both" }}
          >
            AI agents ready for customers and employees.
            <br className="hidden sm:block" /> The only agent platform you can trust.
          </p>
          <div
            className="mt-8 flex animate-fade-up items-center justify-center gap-3"
            style={{ animationDelay: "1680ms", animationFillMode: "both" }}
          >
            <a href="/contact" className="btn-k px-5 py-3">
              Get a demo <span className="dot" />
            </a>
            <a href="#cta" className="btn-ko px-5 py-3">
              Learn more <span className="dot" />
            </a>
          </div>
        </div>

        {/* Artemis platform card */}
        <div className="mx-auto mt-12 max-w-6xl pb-16">
          <div className="relative overflow-hidden rounded-[28px] bg-[#0d0f0c] p-8 shadow-2xl md:p-12">
            {/* glowing gradient orb visual on the right */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[58%]">
              <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_72%_50%,rgba(90,200,110,0.4),transparent_70%)]" />
              <PlatformGlow />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f0c] via-[#0d0f0c]/55 to-transparent" />
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

          </div>
        </div>
      </div>
    </section>
  );
}
