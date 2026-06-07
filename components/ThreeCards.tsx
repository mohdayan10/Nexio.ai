import { ArrowRight, Search, Code2 } from "lucide-react";
import Reveal from "./Reveal";

export default function ThreeCards() {
  return (
    <section id="cards" className="wash pb-20 pt-4">
      <div className="container-px">
        <div className="grid gap-5 md:grid-cols-3">
          {/* Pre-built */}
          <Reveal>
            <Card title="Pre-built Applications" desc="Use applications for Banking, Healthcare, Retail, HR, IT, and Recruiting today.">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5">
                  <Search className="h-4 w-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-700">Banking Automation</span>
                </div>
                <p className="mt-5 text-xs font-medium text-slate-500">Matching industry-ready applications</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Banking Automation", "KYC & Onboarding", "Banking Virtual Assistant", "Loan Processing Automation"].map((t) => (
                    <span key={t} className="rounded-full border border-slate-200 px-2.5 py-1 text-[11px] text-slate-600">{t}</span>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Accelerators */}
          <Reveal delay={80}>
            <Card title="Application Accelerators" desc="Leverage our Marketplace of pre-built AI agents, templates, and integrations.">
              <div className="space-y-2.5">
                <Skeleton />
                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="flex gap-1.5">
                    {["#f97316", "#22c55e", "#ef4444", "#3b82f6"].map((c) => (
                      <span key={c} className="h-5 w-5 rounded-md" style={{ background: c }} />
                    ))}
                  </div>
                  <p className="mt-3 text-[11px] font-medium text-slate-500">Select</p>
                </div>
                <Skeleton />
              </div>
            </Card>
          </Reveal>

          {/* Tailored */}
          <Reveal delay={160}>
            <Card title="Tailored Applications" desc="Design / build applications on our Agent Platform across all enterprise use cases.">
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center gap-1.5 border-b border-slate-100 px-3 py-2">
                  {["#f87171", "#fbbf24", "#34d399"].map((c) => (
                    <span key={c} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
                  ))}
                </div>
                <div className="flex gap-3 p-3">
                  <div className="font-mono text-[10px] leading-relaxed text-slate-300">
                    {Array.from({ length: 8 }).map((_, i) => <div key={i}>{i + 1}</div>)}
                  </div>
                  <div className="flex-1 space-y-1.5 py-1">
                    {[60, 40, 75, 30, 55].map((w, i) => (
                      <div key={i} className="h-1.5 rounded bg-slate-100" style={{ width: `${w}%` }} />
                    ))}
                  </div>
                </div>
                <div className="flex justify-center border-t border-slate-100 py-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                    <Code2 className="h-3.5 w-3.5" /> Code
                  </span>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
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

function Skeleton() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
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
