"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const tabs = ["Banking", "Healthcare", "Retail", "Telecom + Media", "Business"];

const slides: Record<string, { title: string; trusted: string; logos: string[]; img: string }> = {
  Banking: {
    title: "Banks, Credit Unions, Financial Institutions",
    trusted: "Trusted by banking leaders:",
    logos: ["Assurant", "Morgan Stanley", "Sabadell", "London Stock Exchange", "Mashreq", "MetLife", "Huntington"],
    img: "from-slate-600 to-slate-800",
  },
  Healthcare: {
    title: "Payers, Providers, Life Sciences",
    trusted: "Trusted by healthcare leaders:",
    logos: ["Pfizer", "Palomar Health", "Bon Secours", "Cigna", "Elevance"],
    img: "from-cyan-700 to-slate-800",
  },
  Retail: {
    title: "Retailers, Brands, Marketplaces",
    trusted: "Trusted by retail leaders:",
    logos: ["Target", "IKEA", "Lowe's", "Carrefour", "H&M"],
    img: "from-amber-700 to-slate-800",
  },
  "Telecom + Media": {
    title: "Telecom, Media & Entertainment",
    trusted: "Trusted by telecom leaders:",
    logos: ["Vodafone", "AT&T", "Telstra", "Airtel", "Orange"],
    img: "from-violet-700 to-slate-800",
  },
  Business: {
    title: "Enterprises across every industry",
    trusted: "Trusted by business leaders:",
    logos: ["Microsoft", "AMD", "Mphasis", "Coca-Cola", "PepsiCo"],
    img: "from-emerald-700 to-slate-800",
  },
};

export default function Enterprises() {
  const [tab, setTab] = useState("Banking");
  const s = slides[tab];

  return (
    <section id="enterprises" className="py-20 md:py-28">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <h2 className="display text-4xl leading-[1.05] text-[#14171f] sm:text-5xl">
              We&apos;ve built our business by serving global enterprises
            </h2>
            <p className="mt-5 text-lg text-slate-500">
              <span className="font-semibold text-slate-700">Trust us,</span> we&apos;ve learned from the best.
            </p>
            <p className="mt-16 text-lg text-slate-500">
              Discover why hundreds of enterprises use Nexio.
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-6">
              <a href="#cta" className="btn-k px-5 py-3">Request a demo <span className="dot" /></a>
              <a href="#cta" className="btn-ko px-5 py-3">Let&apos;s talk</a>
            </div>
          </Reveal>

          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              {tabs.map((t) => (
                <button key={t} onClick={() => setTab(t)} className={`tab ${tab === t ? "tab-on" : "tab-off"}`}>
                  {t}
                </button>
              ))}
            </div>

            <div className={`relative h-[420px] overflow-hidden rounded-2xl bg-gradient-to-br ${s.img} p-8 text-white shadow-lg`}>
              <div className="absolute inset-0 bg-black/20" />
              <h3 className="relative max-w-sm text-3xl font-semibold leading-tight md:text-4xl">{s.title}</h3>
              <div className="absolute inset-x-6 bottom-6">
                <p className="text-xs font-medium text-white/80">{s.trusted}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.logos.map((l) => (
                    <span key={l} className="rounded-md bg-white/10 px-3 py-2 text-xs font-semibold backdrop-blur">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
