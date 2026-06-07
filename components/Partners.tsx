import Reveal from "./Reveal";

export default function Partners() {
  return (
    <section id="partners" className="bg-[#eef2f7] py-20 md:py-28">
      <div className="container-px">
        <Reveal>
          <h2 className="display text-3xl text-[#14171f] sm:text-4xl">Strategic partners: Microsoft and AWS</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-500">
            We work with the world&apos;s largest platforms. Check your provider for more
            information or start building via their marketplaces.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Microsoft */}
          <Reveal>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-xl bg-[#0a0a14]">
                <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_60%,rgba(120,200,80,0.5),transparent_55%),radial-gradient(120%_120%_at_20%_40%,rgba(80,120,240,0.5),transparent_55%)]" />
                <div className="relative flex items-center gap-3">
                  <span className="grid grid-cols-2 gap-0.5">
                    <span className="h-5 w-5 bg-[#f25022]" />
                    <span className="h-5 w-5 bg-[#7fba00]" />
                    <span className="h-5 w-5 bg-[#00a4ef]" />
                    <span className="h-5 w-5 bg-[#ffb900]" />
                  </span>
                  <span className="text-3xl font-semibold text-white">Microsoft</span>
                </div>
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-600">
                Deploy the Nexio Agent Platform and AI solutions within Microsoft
                environments including <b>Azure AI Foundry</b>, <b>Microsoft Teams</b>,{" "}
                <b>Microsoft 365 Copilot</b>, and <b>Microsoft Copilot Studio</b> to see AI
                value faster from your AI business use cases.
              </p>
              <div className="mt-6 flex gap-2">
                <a href="#cta" className="btn-k">Read more <span className="dot" /></a>
                <a href="#cta" className="btn-ko">Azure Marketplace <span className="dot" /></a>
              </div>
            </div>
          </Reveal>

          {/* AWS */}
          <Reveal delay={80}>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-xl bg-[#0a0a14]">
                <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_85%_85%,rgba(200,50,180,0.55),transparent_55%),radial-gradient(120%_120%_at_30%_30%,rgba(90,40,200,0.55),transparent_55%)]" />
                <div className="relative flex flex-col items-center">
                  <span className="text-4xl font-bold text-white">aws</span>
                  <svg viewBox="0 0 60 18" className="mt-1 h-3 w-16 text-[#ff9900]" fill="none">
                    <path d="M2 10 C 18 18, 42 18, 58 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M52 6 L58 10 L52 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-600">
                The Nexio Agent Platform and AI solutions are integrated with AWS
                services including <b>Amazon Bedrock</b>, <b>Amazon Q</b> and{" "}
                <b>Amazon Connect</b> to accelerate the deployment of AWS AI tools across
                business use cases.
              </p>
              <div className="mt-6 flex gap-2">
                <a href="#cta" className="btn-k">Read more <span className="dot" /></a>
                <a href="#cta" className="btn-ko">AWS Marketplace <span className="dot" /></a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
