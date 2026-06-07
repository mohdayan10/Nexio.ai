"use client";

import { useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] bg-[#14171f] text-white">
      <div className="container-px flex flex-wrap items-center justify-center gap-3 py-3 text-center text-xs sm:text-[13px]">
        <p className="text-white/80">
          We use cookies to allow us to remember you. To find out more about the cookies we use, see our{" "}
          <a href="#" className="font-semibold underline">Privacy Policy</a> and{" "}
          <a href="#" className="font-semibold underline">Cookie Policy</a>
        </p>
        <button
          onClick={() => setShow(false)}
          className="rounded-sm border border-white/30 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider hover:bg-white/10"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
