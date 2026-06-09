import Reveal from "./Reveal";
import InsightCover from "./InsightCover";
import { sortedPosts, formatDate } from "@/lib/insights";

export default function Insights() {
  const all = sortedPosts();
  const featured = all.find((p) => p.featured) ?? all[0];
  const list = all.filter((p) => p.slug !== featured.slug).slice(0, 4);

  return (
    <section id="insights" className="py-20 md:py-28">
      <div className="container-px">
        <Reveal className="flex items-center justify-between">
          <h2 className="display text-4xl text-[#14171f] sm:text-5xl">AI Insights</h2>
          <a href="/insights" className="btn-ko px-5 py-3">View all <span className="dot" /></a>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* featured */}
          <Reveal>
            <a href={`/insights/${featured.slug}`} className="group block overflow-hidden rounded-2xl">
              <InsightCover palette={featured.palette} seed={featured.seed} className="h-[460px] rounded-2xl" contentClassName="flex flex-col justify-end p-6">
                <div className="rounded-xl bg-white/70 p-5 backdrop-blur transition-colors group-hover:bg-white/85">
                  <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-500">{formatDate(featured.date)} •</p>
                  <h3 className="mt-2 text-2xl font-semibold leading-snug text-[#14171f]">{featured.title}</h3>
                </div>
              </InsightCover>
            </a>
          </Reveal>

          {/* list */}
          <div className="flex flex-col justify-between gap-5">
            {list.map((a, i) => (
              <Reveal key={a.slug} delay={i * 60}>
                <a href={`/insights/${a.slug}`} className="group flex items-center gap-5">
                  <InsightCover palette={a.palette} seed={a.seed} className="h-24 w-32 shrink-0 rounded-xl" />
                  <div>
                    <h3 className="text-xl font-semibold leading-snug text-[#14171f] group-hover:text-blue-700">{a.title}</h3>
                    <p className="mt-2 font-mono text-[11px] font-semibold tracking-wider text-slate-400">
                      {formatDate(a.date)} •{a.read && <> {a.read}</>}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
