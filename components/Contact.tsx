import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="cta" className="py-16">
      <div className="container-px">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-[#14171f] p-8 text-white">
              <div>
                <h3 className="text-2xl font-semibold">Accelerate time-to-value from AI</h3>
                <p className="mt-3 max-w-sm text-white/70">
                  Talk to our team about deploying purpose-built agents across your
                  customer and employee experiences.
                </p>
              </div>
              <a href="#cta" className="btn-ko mt-8 w-fit border-white/20 bg-white/10 text-white hover:bg-white/20 px-5 py-3">
                Get a demo <span className="dot" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#14171f]">
                  Start using {"{ "}<span className="italic">Artemis</span>{" }"} today
                </h3>
                <p className="mt-3 max-w-sm text-slate-500">
                  The AI-programmable platform for the agentic enterprise. Build,
                  deploy, and govern agents with certainty.
                </p>
              </div>
              <a href="#cta" className="btn-k mt-8 w-fit px-5 py-3">
                Get in touch <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
