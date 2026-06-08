import { Linkedin, Youtube, MessageSquare, Globe, ChevronDown } from "lucide-react";

const groups = [
  {
    title: "Pre-built Applications",
    links: ["Banking", "Healthcare", "Retail", "Recruiting", "HR", "IT"],
  },
  {
    title: "Nexio Agent Platform",
    links: ["Platform Overview", "AI for Service", "AI for Work", "Agent Marketplace"],
  },
  {
    title: "Industries",
    links: ["Healthcare (Payer)", "Healthcare (Provider)"],
  },
];

const groups2 = [
  {
    title: "Company",
    links: ["About Nexio", "Leadership", "Customer Stories", "Partners", "Analyst Recognition", "Newsroom"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Blog", "Whitepapers", "Webinars", "AI Research Reports", "AI Glossary", "Videos", "Generative AI 101", "Responsive AI framework", "CXO Toolkit"],
  },
  {
    title: "Get Involved",
    links: ["Events", "Support", "Academy", "Community", "Careers"],
  },
];

export default function Footer() {
  return (
    <footer className="wash">
      <div className="container-px py-16">
        {/* top row */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
            <span className="flex items-center gap-0.5 text-2xl font-bold tracking-tight text-[#14171f]">
              nexio<span className="ml-1 rounded-[6px] bg-[#14171f] px-1.5 py-0.5 text-base leading-none text-white">.ai</span>
            </span>
            <span className="text-slate-500">Agentic AI applications for the enterprise</span>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700">
            <Globe className="h-4 w-4" /> English <ChevronDown className="h-4 w-4 text-slate-400" />
          </button>
        </div>

        <div className="my-8 border-t border-dashed border-slate-300" />

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1fr_1.1fr]">
          {groups.map((g) => (
            <FooterCol key={g.title} {...g} />
          ))}

          {/* Let's work together */}
          <div className="rounded-2xl border border-slate-200 bg-white/40 p-6">
            <MessageSquare className="h-6 w-6 text-slate-700" />
            <h4 className="mt-4 text-2xl font-semibold text-[#14171f]">Let&apos;s work together</h4>
            <p className="mt-2 text-sm text-slate-500">Get answers and a customized quote for your projects</p>
            <a href="/contact" className="btn-ko mt-5 px-4 py-2.5">Submit RFP <span className="dot" /></a>
            <p className="mt-8 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">Follow us on</p>
            <div className="mt-3 flex gap-2">
              {[Linkedin, Youtube, MessageSquare].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#14171f] text-white hover:bg-black" aria-label="Social">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr_1fr_1.1fr]">
          {groups2.map((g) => (
            <FooterCol key={g.title} {...g} />
          ))}
        </div>

        <div className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-400">
          © {new Date().getFullYear()} Nexio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-[15px] text-slate-700 transition-colors hover:text-black">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
