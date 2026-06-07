"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const rail = [
  { label: "Pre-built Applications", badge: false },
  { label: "Application Accelerators", badge: false },
  { label: "Tailored Applications", badge: false },
  { label: "Agent Platform { Artemis }", badge: true },
];

type Card = {
  industry: string;
  desc: string;
  guide?: string;
  chat: { who: "bot" | "user"; text: string }[];
  extra?: React.ReactNode;
};

const cards: Card[] = [
  {
    industry: "Banking",
    desc: "Coordinate self-service and agent support with shared context, consistency, and built-in compliance.",
    guide: "Banking",
    chat: [
      { who: "bot", text: "Hi Olivia, I see you recently filed a fraud claim for a transaction of $250 from Hiking World. Are you contacting us about this?" },
      { who: "user", text: "Yes, that's right. But I can't use my debit card." },
      { who: "bot", text: "Got it! We're already taking action on your fraud claim. Your card has been canceled for security reasons. A new card has been issued." },
    ],
  },
  {
    industry: "Healthcare",
    desc: "Enable 24/7 patient and member self-service and reduce staff burden with HIPAA-compliant intelligent assistance.",
    guide: "Healthcare",
    chat: [
      { who: "bot", text: "First off, is the claim for yourself or another person under your plan?" },
      { who: "user", text: "Its my Mother" },
      { who: "bot", text: "Just to confirm, this is for your Mother Amanda?" },
    ],
  },
  {
    industry: "Retail",
    desc: "Frictionless shopping and optimized operations with instant, personalized support at every touchpoint.",
    guide: "Retail",
    chat: [
      { who: "user", text: "I need a new faucet for my bathroom" },
      { who: "bot", text: "Absolutely! The Design House Ashland 2-Handled Utility Faucet in Satin Nickel is a fantastic choice for your bathroom upgrade." },
    ],
    extra: (
      <div className="mt-3 grid grid-cols-2 gap-2">
        {[["Ashland Utility Faucet", "$53.81"], ["ZAP Floral Faucet", "$33.57"]].map(([n, p]) => (
          <div key={n} className="rounded-lg border border-slate-200 bg-white p-2">
            <div className="h-12 rounded bg-slate-100" />
            <p className="mt-1.5 text-[10px] leading-tight text-slate-600">{n}</p>
            <p className="text-[11px] font-bold text-slate-800">{p}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    industry: "IT",
    desc: "Resolve incidents, reduce ticket volume, and deliver 24/7 IT support.",
    chat: [
      { who: "user", text: "What is the status on my ticket - RITM0012057?" },
      { who: "bot", text: "Transferring to: \"IT Support\" agent" },
      { who: "user", text: "Show ticket number RITM0012057" },
      { who: "bot", text: "Please wait while I fetch the ticket details." },
    ],
  },
  {
    industry: "HR",
    desc: "Automate, resolve, and reduce employee queries and manual workload.",
    chat: [
      { who: "bot", text: "Feedback pending from Lana Ray — JR 27: PM" },
    ],
    extra: (
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-[10px] font-medium text-slate-500">🔔 Alerts</p>
          <p className="mt-2 text-[10px] text-slate-600">Time to hire</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-[10px] font-medium text-slate-500">Offer acceptance rate</p>
          <p className="mt-1 text-lg font-bold text-slate-800">85% <span className="text-[10px] font-semibold text-emerald-600">↑10%</span></p>
        </div>
      </div>
    ),
  },
  {
    industry: "Recruiting",
    desc: "Automate screening, accelerate hiring, and engage top talent.",
    chat: [
      { who: "user", text: "Create a job description for a Product Marketing Manager" },
      { who: "bot", text: "Here is the job description generated for the Product Marketing Manager role with Job ID: 22" },
    ],
  },
];

export default function AgenticApps() {
  const [active, setActive] = useState(0);

  return (
    <section id="apps" className="wash py-20 md:py-28">
      <div className="container-px">
        <Reveal>
          <h2 className="display max-w-3xl text-4xl leading-[1.08] text-[#14171f] sm:text-5xl">
            Drive faster business outcomes in customer service and employee productivity.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* left rail */}
          <div>
            <p className="mb-3 inline-flex items-center gap-1 text-sm text-slate-500">
              Use tabs to explore more <ChevronDown className="h-4 w-4" />
            </p>
            <div className="space-y-2.5">
              {rail.map((r, i) => (
                <button
                  key={r.label}
                  onClick={() => setActive(i)}
                  className={`flex w-full items-center justify-between rounded-lg border px-4 py-3.5 text-left font-mono text-[11px] font-semibold uppercase tracking-[0.1em] transition-all ${
                    active === i
                      ? "border-[#14171f] bg-[#14171f] text-white"
                      : "border-slate-300 bg-white text-slate-600 hover:border-slate-400"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {r.label}
                    {r.badge && (
                      <span className="rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 px-1.5 py-0.5 text-[8px] font-bold text-[#0d0f0c]">
                        NEW
                      </span>
                    )}
                  </span>
                  {active === i && <span className="dot" />}
                </button>
              ))}
            </div>
          </div>

          {/* right content */}
          <div>
            <Reveal>
              <h3 className="text-3xl font-semibold text-[#14171f]">Use purpose-built agentic AI applications</h3>
              <p className="mt-3 max-w-2xl text-slate-500">
                We solve the most urgent industry and enterprise challenges with regulation-approved applications.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {cards.map((c, i) => (
                <Reveal key={c.industry} delay={(i % 2) * 70}>
                  <AppCard card={c} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppCard({ card }: { card: Card }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h4 className="text-xl font-semibold text-[#14171f]">
        AI for <span className="text-blue-600">{card.industry}</span>
      </h4>
      <p className="mt-3 text-sm leading-relaxed text-slate-500">{card.desc}</p>
      <div className="mt-5 flex gap-2">
        <a href="#cta" className="btn-k">Learn more <span className="dot" /></a>
        {card.guide && <a href="#cta" className="btn-ko">Guide: {card.guide}</a>}
      </div>

      <div className="mt-6 space-y-2.5">
        {card.chat.map((m, i) => (
          <div key={i} className={`flex ${m.who === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug ${
                m.who === "user"
                  ? "bg-slate-100 text-slate-800"
                  : "border border-slate-200 bg-white text-slate-700 shadow-sm"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {card.extra}
      </div>
    </div>
  );
}
