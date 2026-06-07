import Reveal from "./Reveal";

const featured = {
  date: "MAY 15, 2026",
  title: "Configured, not coded. The engineering discipline gap in agent development",
  grad: "from-sky-300 via-blue-500 to-indigo-700",
};

const list = [
  { date: "MAY 15, 2026", read: "", title: "Can Today's AI Agents Survive Their Own Runtime?", grad: "from-orange-300 to-violet-400" },
  { date: "FEBRUARY 20, 2026", read: "8 MIN", title: "What's new in AI for Work: features that drive enterprise productivity", grad: "from-emerald-400 to-fuchsia-500" },
  { date: "JANUARY 16, 2026", read: "6 MIN", title: "Parallel Agent Processing", grad: "from-sky-200 to-cyan-400" },
  { date: "JANUARY 12, 2026", read: "", title: "The AI productivity paradox: why employees are moving faster than enterprises", grad: "from-orange-200 to-amber-400" },
];

export default function Insights() {
  return (
    <section id="insights" className="py-20 md:py-28">
      <div className="container-px">
        <Reveal className="flex items-center justify-between">
          <h2 className="display text-4xl text-[#14171f] sm:text-5xl">AI Insights</h2>
          <a href="#cta" className="btn-ko px-5 py-3">View all <span className="dot" /></a>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* featured */}
          <Reveal>
            <a href="#" className="group block overflow-hidden rounded-2xl">
              <div className={`relative flex h-[460px] flex-col justify-end bg-gradient-to-br ${featured.grad} p-6`}>
                <div className="rounded-xl bg-white/70 p-5 backdrop-blur">
                  <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-500">{featured.date} •</p>
                  <h3 className="mt-2 text-2xl font-semibold leading-snug text-[#14171f]">{featured.title}</h3>
                </div>
              </div>
            </a>
          </Reveal>

          {/* list */}
          <div className="flex flex-col justify-between gap-5">
            {list.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <a href="#" className="group flex items-center gap-5">
                  <div className={`h-24 w-32 shrink-0 rounded-xl bg-gradient-to-br ${a.grad}`} />
                  <div>
                    <h3 className="text-xl font-semibold leading-snug text-[#14171f] group-hover:text-blue-700">{a.title}</h3>
                    <p className="mt-2 font-mono text-[11px] font-semibold tracking-wider text-slate-400">
                      {a.date} •{a.read && <> {a.read}</>}
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
