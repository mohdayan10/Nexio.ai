"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Search, Code2 } from "lucide-react";
import type { IconType } from "react-icons";
import { SiSalesforce, SiSlack, SiGmail, SiHubspot, SiOpenai, SiNotion } from "react-icons/si";
import Reveal from "./Reveal";

const TICK_MS = 80;
const CYCLE = 72;

const SEARCH = "Banking Automation";
const CHIPS = ["Banking Automation", "KYC & Onboarding", "Banking Virtual Assistant", "Loan Processing Automation"];
const LOGOS: { name: string; color: string; Icon: IconType }[] = [
  { name: "Salesforce", color: "#00A1E0", Icon: SiSalesforce },
  { name: "Slack", color: "#4A154B", Icon: SiSlack },
  { name: "Gmail", color: "#EA4335", Icon: SiGmail },
  { name: "HubSpot", color: "#FF7A59", Icon: SiHubspot },
  { name: "OpenAI", color: "#000000", Icon: SiOpenai },
  { name: "Notion", color: "#111111", Icon: SiNotion },
];
const CODE = [
  "def sync_replies(thread):",
  "    ctx = agent.load(thread)",
  "    reply = llm.run(",
  "        prompt=ctx.prompt,",
  "        tools=[crm, email],",
  "    )",
  "    return reply.send()",
];

/** Looping tick driver that only runs while `active`. */
function useLoopTick(active: boolean) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setTick((t) => (t + 1) % CYCLE), TICK_MS);
    return () => clearInterval(id);
  }, [active]);
  return tick;
}

/** Start the loop once the section scrolls into view; pause when it leaves. */
function useInView<T extends Element>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export default function ThreeCards() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const tick = useLoopTick(inView);

  return (
    <section id="cards" className="wash pb-20 pt-4">
      <div ref={ref} className="container-px">
        <div className="grid gap-5 md:grid-cols-3">
          <Reveal>
            <Card title="Pre-built Applications" desc="Use applications for Banking, Healthcare, Retail, HR, IT, and Recruiting today.">
              <PrebuiltAnim tick={tick} />
            </Card>
          </Reveal>

          <Reveal delay={80}>
            <Card title="Application Accelerators" desc="Leverage our Marketplace of pre-built AI agents, templates, and integrations.">
              <AcceleratorAnim tick={tick} />
            </Card>
          </Reveal>

          <Reveal delay={160}>
            <Card title="Tailored Applications" desc="Design / build applications on our Agent Platform across all enterprise use cases.">
              <TailoredAnim tick={tick} />
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Card 1: search typewriter + staggered chips ---------- */
function PrebuiltAnim({ tick }: { tick: number }) {
  const typed = Math.max(0, Math.min(SEARCH.length, tick - 5));
  const text = SEARCH.slice(0, typed);
  const typing = tick >= 5 && typed < SEARCH.length;
  const done = typed >= SEARCH.length;
  const labelShown = tick > 26;
  const chipBase = 28;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5">
        <Search className="h-4 w-4 shrink-0 text-slate-400" />
        <span className="text-sm font-medium text-slate-700">
          {text || <span className="text-slate-400">Search by industry use case</span>}
          {(typing || done) && (
            <span className={`ml-px inline-block h-4 w-px translate-y-[2px] bg-slate-500 ${typing ? "animate-pulse-soft" : "opacity-0"}`} />
          )}
        </span>
      </div>

      <p className={`mt-5 text-xs font-medium text-slate-500 transition-opacity duration-500 ${labelShown ? "opacity-100" : "opacity-0"}`}>
        Matching industry-ready applications
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {CHIPS.map((t, i) => {
          const shown = tick > chipBase + i * 4;
          return (
            <span
              key={t}
              className={`rounded-full border border-slate-200 px-2.5 py-1 text-[11px] text-slate-600 transition-all duration-500 ${
                shown ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"
              }`}
            >
              {t}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Card 2: skeletons + swatch picker + progress bar ---------- */
function AcceleratorAnim({ tick }: { tick: number }) {
  const ringIdx = tick >= 20 && tick < 34 ? Math.floor((tick - 20) / 3) % LOGOS.length : -1;
  const progress = Math.max(0, Math.min(1, (tick - 36) / 16));
  const processing = tick >= 36;

  return (
    <div className="space-y-2.5">
      <Skeleton shown={tick > 3} />

      <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        <div className="flex gap-1.5">
          {LOGOS.map(({ name, color, Icon }, i) => {
            const shown = tick > 9 + i * 2;
            return (
              <span
                key={name}
                title={name}
                className={`flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 ${
                  shown ? "scale-100 opacity-100" : "scale-50 opacity-0"
                } ${ringIdx === i ? "ring-2 ring-offset-1 ring-slate-400" : "ring-0"}`}
              >
                <Icon className="h-4 w-4" style={{ color }} />
              </span>
            );
          })}
        </div>
        <p className="mt-3 text-[11px] font-medium text-slate-500">{processing ? "Processing" : "Select"}</p>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-slate-100">
          <div className="h-full rounded-full bg-slate-800 transition-[width] duration-200 ease-linear" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>

      <Skeleton shown={tick > 14} />
    </div>
  );
}

/* ---------- Card 3: code lines reveal one-by-one ---------- */
function TailoredAnim({ tick }: { tick: number }) {
  const lineStart = 6;
  const lineStep = 3;
  const visibleLines = Math.max(0, Math.floor((tick - lineStart) / lineStep));

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-slate-100 px-3 py-2">
        {["#f87171", "#fbbf24", "#34d399"].map((c) => (
          <span key={c} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
        ))}
      </div>
      <div className="flex gap-3 p-3">
        <div className="select-none font-mono text-[10px] leading-relaxed text-slate-300">
          {CODE.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <pre className="flex-1 overflow-hidden py-px font-mono text-[10px] leading-relaxed text-slate-600">
          {CODE.map((line, i) => {
            const shown = i < visibleLines;
            const isCurrent = i === visibleLines;
            return (
              <div key={i} className={`transition-all duration-300 ${shown ? "translate-x-0 opacity-100" : "translate-x-1 opacity-0"}`}>
                {line || " "}
                {isCurrent && tick > lineStart && <span className="ml-px inline-block h-3 w-px translate-y-[2px] bg-slate-500 animate-pulse-soft" />}
              </div>
            );
          })}
        </pre>
      </div>
      <div className="flex justify-center border-t border-slate-100 py-2">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
          <Code2 className="h-3.5 w-3.5" /> Code
        </span>
      </div>
    </div>
  );
}

function Card({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white/60 p-6 shadow-sm backdrop-blur transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold text-[#14171f]">{title}</h3>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow ring-1 ring-slate-200">
          <ArrowRight className="h-4 w-4 text-slate-700" />
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-500">{desc}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function Skeleton({ shown }: { shown: boolean }) {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-500 ${shown ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"}`}>
      <div className="flex gap-2">
        <span className="h-2 w-8 rounded bg-rose-200" />
        <span className="h-2 w-10 rounded bg-emerald-200" />
      </div>
      <div className="mt-2.5 space-y-1.5">
        <div className="h-1.5 w-3/4 rounded bg-slate-100" />
        <div className="h-1.5 w-2/3 rounded bg-slate-100" />
      </div>
    </div>
  );
}
