import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InsightCover from "@/components/InsightCover";
import { sortedPosts, formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "AI Insights — Nexio",
  description:
    "Field notes on building, shipping, and operating enterprise AI agents — from the team behind the Nexio agent platform.",
  alternates: { canonical: "/insights" },
};

export default function InsightsIndex() {
  const all = sortedPosts();
  const featured = all.find((p) => p.featured) ?? all[0];
  const rest = all.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-24 pt-32 md:pt-36">
        <div className="container-px">
          <p className="label-mono">AI Insights</p>
          <h1 className="display mt-4 max-w-2xl text-4xl text-[#14171f] sm:text-5xl">
            Field notes on building agents that hold up.
          </h1>

          {/* featured + list, matching the homepage format */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* featured */}
            <a href={`/insights/${featured.slug}`} className="group block overflow-hidden rounded-2xl">
              <InsightCover palette={featured.palette} seed={featured.seed} className="h-[460px] rounded-2xl" contentClassName="flex flex-col justify-end p-6">
                <div className="rounded-xl bg-white/70 p-5 backdrop-blur transition-colors group-hover:bg-white/85">
                  <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-500">
                    {formatDate(featured.date)} • {featured.read}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold leading-snug text-[#14171f]">{featured.title}</h2>
                </div>
              </InsightCover>
            </a>

            {/* list */}
            <div className="flex flex-col justify-between gap-5">
              {rest.map((p) => (
                <a key={p.slug} href={`/insights/${p.slug}`} className="group flex items-center gap-5">
                  <InsightCover palette={p.palette} seed={p.seed} className="h-24 w-36 shrink-0 rounded-xl" />
                  <div>
                    <h3 className="text-xl font-semibold leading-snug text-[#14171f] group-hover:text-blue-700">{p.title}</h3>
                    <p className="mt-2 font-mono text-[11px] font-semibold tracking-wider text-slate-400">
                      {formatDate(p.date)} • {p.read}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
