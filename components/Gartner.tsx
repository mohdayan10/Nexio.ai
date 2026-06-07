"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const tabs = ["Conversational AI Platforms", "Cognitive Search Platforms", "Generative AI Applications", "Generative AI Engineering"];

const dots = [
  { name: "Nexio", x: 64, y: 26, lead: true },
  { name: "Google", x: 80, y: 32 },
  { name: "Cognigy", x: 68, y: 40 },
  { name: "Boost.ai", x: 62, y: 46 },
  { name: "Yellow.ai", x: 50, y: 44 },
  { name: "DRUID AI", x: 46, y: 48 },
  { name: "IBM", x: 40, y: 49 },
  { name: "SoundHound AI", x: 63, y: 52 },
  { name: "Omilia", x: 64, y: 56 },
  { name: "Avaamo", x: 40, y: 60 },
  { name: "LivePerson", x: 46, y: 62 },
  { name: "PolyAI", x: 34, y: 66 },
  { name: "Sprinklr", x: 38, y: 72 },
];

export default function Gartner() {
  const [tab, setTab] = useState(0);

  return (
    <section id="gartner" className="wash py-20 md:py-28">
      <div className="container-px">
        <Reveal className="mb-12 flex flex-wrap gap-2">
          {tabs.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} className={`tab ${tab === i ? "tab-on" : "tab-off"}`}>
              {t}
            </button>
          ))}
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="display text-4xl leading-[1.1] text-[#14171f] sm:text-[2.75rem]">
              Nexio named a leader in Gartner® Magic Quadrant™
            </h2>
            <p className="mt-5 max-w-md text-slate-500">
              The Gartner® Magic Quadrant™ for Conversational AI Platforms now
              includes conversational AI agents and tools increasingly leveraging
              generative AI. This report guides application leaders in selecting
              conversational AI platforms for complex automation and multimodal
              interactions.
            </p>
            <a href="#cta" className="btn-k mt-8 px-5 py-3">Get access to the report <span className="dot" /></a>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
              <div className="relative aspect-[4/3] w-full">
                {/* quadrant labels */}
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  <div className="flex items-start justify-start p-2">Challengers</div>
                  <div className="flex items-start justify-end p-2">Leaders</div>
                  <div className="flex items-end justify-start p-2">Niche Players</div>
                  <div className="flex items-end justify-end p-2">Visionaries</div>
                </div>
                {/* axes */}
                <div className="absolute left-1/2 top-0 h-full w-px bg-slate-200" />
                <div className="absolute left-0 top-1/2 h-px w-full bg-slate-200" />

                {/* dots */}
                {dots.map((d) => (
                  <div key={d.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${d.x}%`, top: `${d.y}%` }}>
                    <span className={`block h-2.5 w-2.5 rounded-full ${d.lead ? "bg-blue-600 ring-4 ring-blue-200" : "bg-blue-500"}`} />
                    <span className={`absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] ${d.lead ? "font-bold text-blue-700" : "text-slate-500"}`}>
                      {d.name}
                    </span>
                  </div>
                ))}

                <span className="absolute -left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                  Ability to execute
                </span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                  Completeness of vision →
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[10px] text-slate-400">
                <span>As of June 2025</span>
                <span className="font-bold text-slate-500">Gartner</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
