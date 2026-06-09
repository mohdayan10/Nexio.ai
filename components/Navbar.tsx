"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const nav = [
  { label: "Agent Platform { Artemis }", caret: true, href: "#apps" },
  { label: "Agentic AI Apps", caret: true, href: "#apps" },
  { label: "Agent Marketplace", caret: false, href: "#cards" },
  { label: "More", caret: true, href: "#cta" },
];

export function Wordmark() {
  return (
    <a
      href="#top"
      className="font-serif text-2xl font-semibold italic tracking-tight text-[#14171f]"
    >
      nexio
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-px pt-3">
        <nav className="flex h-14 items-center justify-between rounded-2xl bg-white px-5 shadow-sm ring-1 ring-slate-200/70">
          <Wordmark />

          <div className="hidden items-center gap-7 lg:flex">
            {nav.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="inline-flex items-center gap-1 text-[15px] font-medium text-slate-700 transition-colors hover:text-black"
              >
                {l.label}
                {l.caret && <ChevronDown className="h-4 w-4 text-slate-400" />}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <a href="/contact" className="text-[15px] font-medium text-slate-800 hover:text-black">
              Sign in
            </a>
            <a href="/contact" className="btn-k">
              Get in touch
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
          <div className="mt-2 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200/70 lg:hidden">
            {nav.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {l.label}
              </a>
            ))}
            <a href="/contact" onClick={() => setOpen(false)} className="btn-k mt-2 w-full justify-center">
              Get in touch
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
