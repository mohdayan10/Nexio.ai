export type Source = { label: string; url: string };

export type Post = {
  slug: string;
  title: string;
  /** ISO date, used for sorting + metadata */
  date: string;
  /** estimated read time, e.g. "6 MIN" */
  read: string;
  /** tailwind gradient classes for the cover (legacy fallback) */
  grad: string;
  /** vivid color palette for the fluid gradient-mesh cover */
  palette: [string, string, string];
  /** arrangement seed for cover variety */
  seed: number;
  excerpt: string;
  /** body paragraphs; strings starting with "## " render as subheadings */
  body: string[];
  /** real sources the figures in the article are drawn from */
  sources?: Source[];
  featured?: boolean;
};

export const posts: Post[] = [
  {
    slug: "the-production-gap",
    title: "The production gap: agents are everywhere in demos, rare in production",
    date: "2026-06-02",
    read: "6 MIN",
    grad: "from-sky-300 via-blue-500 to-indigo-700",
    palette: ["#60a5fa", "#6366f1", "#1e3a8a"],
    seed: 0,
    featured: true,
    excerpt:
      "Around 80% of new enterprise apps now ship with an agent. Only ~31% of enterprises actually run one in production. The distance between those two numbers is the whole game.",
    body: [
      "There's a number that captures the state of enterprise AI in 2026 better than any benchmark: roughly 80% of enterprise applications shipped or updated in the first quarter of 2026 embedded at least one AI agent — up from about a third in 2024. And yet only around 31% of enterprises have a single agent actually running in production.",
      "That gap — between agents that demo and agents that operate — is where most of the real work now lives.",
      "## Reliability replaced novelty",
      "The conversation has shifted. Many of enterprise AI's recent breakthroughs haven't been about raw capability; they've been about getting agents to run dependably once real traffic hits them. Teams report that the hardest part of shipping an agentic workflow isn't intelligence — it's secure, reliable access to production systems, handling edge cases, and integrating with software that predates the AI era. Nearly half of teams (46%) name integration with existing systems as their single biggest obstacle.",
      "## What closes the gap",
      "The pattern among teams that cross into production is unglamorous: cut unnecessary model calls, replace probabilistic checks with deterministic ones where you can, and hold the agent to a real SLA. One platform reported cutting latency 70% simply by going from four LLM calls to two before the first response token, and swapping model-based input safety checks for deterministic rule filters.",
      "An agent that dazzles in a demo and is absent from production isn't an asset. The 31% figure — not the 80% — is the one worth chasing.",
    ],
    sources: [
      { label: "Arcade.dev — State of AI Agents 2026", url: "https://www.arcade.dev/blog/5-takeaways-2026-state-of-ai-agents-claude/" },
      { label: "Salesforce — 8 Ways AI Agents Are Evolving in 2026", url: "https://www.salesforce.com/blog/ai-agent-trends-2026/" },
      { label: "Databricks — Enterprise AI agent trends", url: "https://www.databricks.com/blog/enterprise-ai-agent-trends-top-use-cases-governance-evaluations-and-more" },
    ],
  },
  {
    slug: "evals-decide-which-agents-survive",
    title: "Evaluations, not intelligence, decide which agents survive",
    date: "2026-05-21",
    read: "6 MIN",
    grad: "from-orange-300 to-violet-400",
    palette: ["#fb923c", "#c084fc", "#7c3aed"],
    seed: 1,
    excerpt:
      "Agents without automated evals were rolled back 47% of the time. With full eval coverage, 9%. The differentiator in 2026 isn't the model — it's the test harness.",
    body: [
      "If you want to predict whether an enterprise agent will still be running a year from now, don't look at which model it uses. Look at whether anyone is testing it.",
      "The numbers are stark: agents deployed without automated evaluations saw a 47% rollback rate over the prior year. Agents with full evaluation coverage saw 9%. Same class of models, wildly different survival rates.",
      "## Evals are an adoption multiplier",
      "This isn't only about quality — it's about how much you can ship at all. Organizations that use evaluation tooling move nearly six times more AI systems into production than those that don't, and organizations with governance tooling get over twelve times more projects live. The teams that measure are the teams that scale.",
      "## The governance gap is real",
      "The catch: only about 21% of organizations have a mature governance model for autonomous agents, and more than half cite data quality as their biggest blocker. Gartner expects over 40% of agentic AI projects to be cancelled or stalled by 2027 — largely due to evaluation drift, governance gaps, and rework nobody measured.",
      "Intelligence gets an agent to its first correct answer. Evaluation is what keeps it correct on the ten-thousandth — and what lets you change it without holding your breath.",
    ],
    sources: [
      { label: "Databricks — Governance + evaluations", url: "https://www.databricks.com/blog/enterprise-ai-agent-trends-top-use-cases-governance-evaluations-and-more" },
      { label: "Agentic AI Institute — Enterprise Adoption 2026", url: "https://agenticaiinstitute.org/agentic-ai-enterprise-adoption-2026-governance-gap/" },
      { label: "DigitalApplied — Agentic AI Statistics 2026", url: "https://www.digitalapplied.com/blog/agentic-ai-statistics-2026-definitive-collection-150-data-points" },
    ],
  },
  {
    slug: "mcp-won-the-tool-layer",
    title: "MCP won the tool layer. A2A is winning agent-to-agent.",
    date: "2026-05-08",
    read: "7 MIN",
    grad: "from-emerald-400 to-fuchsia-500",
    palette: ["#34d399", "#22d3ee", "#d946ef"],
    seed: 2,
    excerpt:
      "The protocol wars are mostly settled. MCP passed 97 million downloads with every major lab on board; Google's A2A went to the Linux Foundation with 50+ partners. Here's the stack that's emerging.",
    body: [
      "For two years, every vendor wanted to own the way agents connect to tools and to each other. In 2026 that question has largely resolved — not into one winner, but into a small, complementary stack.",
      "## MCP owns the tool layer",
      "The Model Context Protocol, introduced by Anthropic in late 2024, has effectively won the agent-to-tool layer: roughly 97 million downloads and adoption across Anthropic, OpenAI, Google, and Microsoft. When the four labs that compete on everything else agree on one thing, that thing becomes infrastructure.",
      "## A2A owns coordination",
      "Above the tool layer sits agent-to-agent coordination. Google's A2A protocol — donated to the Linux Foundation in mid-2025 with 50-plus partners including AWS, Microsoft, Salesforce, and SAP — has become the leading standard for agents discovering each other's capabilities and delegating work across vendor boundaries.",
      "## The four-protocol stack",
      "The emerging consensus is that a complete enterprise agent stack uses several protocols together: MCP for tool access, A2A for agent coordination, and transaction-oriented protocols (ACP, UCP) for commerce. The practical takeaway for anyone building today is simple: bet on the open standards, not a single vendor's walled garden.",
    ],
    sources: [
      { label: "DigitalApplied — MCP Adoption Statistics 2026", url: "https://www.digitalapplied.com/blog/mcp-adoption-statistics-2026-model-context-protocol" },
      { label: "Wikipedia — Model Context Protocol", url: "https://en.wikipedia.org/wiki/Model_Context_Protocol" },
      { label: "arXiv — Survey of agent interoperability protocols", url: "https://arxiv.org/pdf/2505.02279" },
    ],
  },
  {
    slug: "seven-frontier-models-78-days",
    title: "Seven frontier models in 78 days: why your agent platform can't marry a model",
    date: "2026-04-28",
    read: "6 MIN",
    grad: "from-sky-200 to-cyan-400",
    palette: ["#7dd3fc", "#38bdf8", "#2563eb"],
    seed: 3,
    excerpt:
      "Between February and April 2026, Anthropic, OpenAI, and Google shipped seven frontier models in 78 days. If your agents are hard-wired to one, you're rebuilding every quarter.",
    body: [
      "The release cadence at the frontier has gone from yearly to nearly monthly. Between February and April 2026, the three leading labs collectively shipped seven frontier models in just 78 days.",
      "The headline releases tell the story: Anthropic's Claude Opus 4.7 landed in April reporting an 87.6% score on SWE-bench Verified; OpenAI's GPT-5.5 followed roughly a week later, built explicitly for long-horizon agentic tasks; Google's Gemini 3.1 Pro shipped in February with a focus on multimodal reasoning.",
      "## The implication for builders",
      "When the best model for a given task can change every few weeks, hard-wiring an agent to one provider is a standing liability. The platforms that age well treat the model as a swappable component — routing each task to whichever model is currently best, and re-running their evaluation suite whenever they switch, rather than rebuilding the agent from scratch.",
      "## Capability is converging on 'worker'",
      "There's a second signal in the releases: every one leaned hard into agentic capability — long-running multi-step tasks, computer use, autonomous tool navigation. The industry framing has shifted from models as chatbots to models as workers. Designing for that means designing for autonomy, oversight, and the ability to swap the engine underneath without disrupting the work.",
    ],
    sources: [
      { label: "TeamDay.ai — Frontier AI Models 2026", url: "https://www.teamday.ai/blog/frontier-ai-models-february-2026" },
      { label: "Job Security Meter — Frontier AI Model Releases 2026", url: "https://jobsecuritymeter.com/guides/frontier-ai-models-2026" },
    ],
  },
  {
    slug: "171-percent-roi-production",
    title: "171% ROI — but only for the agents that reach production",
    date: "2026-04-15",
    read: "6 MIN",
    grad: "from-orange-200 to-amber-400",
    palette: ["#fdba74", "#fb7185", "#f59e0b"],
    seed: 4,
    excerpt:
      "The agent market is racing toward $12B and McKinsey clocks 5.8x ROI in 14 months — yet only 25% of AI initiatives hit their numbers. The averages hide a brutal split.",
    body: [
      "The economics of enterprise agents in 2026 are genuinely good — and genuinely bimodal. The global AI agents market is on track for roughly $11–12 billion this year, growing 44–46% annually, and McKinsey reports a 5.8x return on AI investment within 14 months of production deployment.",
      "Then the other numbers: only about 25% of AI initiatives deliver their expected ROI, and just 16% reach enterprise-wide scale.",
      "## The averages lie",
      "The reconciliation is that the wins are concentrated. Agents that actually reach production deliver an average 171% ROI (around 192% in the US) — but only about 41% of rollouts cross positive ROI within twelve months, and roughly 19% never reach payback at all. The failures usually aren't a bad model; they're evaluation drift, governance gaps, and unmeasured rework.",
      "## Where the proven returns are",
      "The areas with reliable 2026 ROI are unglamorous and specific: customer service, e-commerce, finance automation, and software engineering. The lesson isn't 'do more agents' — it's pick a workflow finance can measure, instrument it, and get it across the line. The ROI lives on the production side of the gap, and nowhere else.",
    ],
    sources: [
      { label: "DigitalApplied — AI Agent Productivity & ROI 2026", url: "https://www.digitalapplied.com/blog/ai-agent-productivity-statistics-2026-roi-data-points" },
      { label: "OneReach.ai — Agentic AI Stats 2026", url: "https://onereach.ai/blog/agentic-ai-adoption-rates-roi-market-trends/" },
      { label: "Azumo — 60+ AI Agent Statistics for 2026", url: "https://azumo.com/artificial-intelligence/ai-insights/ai-agent-statistics" },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function sortedPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** "2026-05-15" -> "MAY 15, 2026" */
export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00")
    .toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    .toUpperCase();
}
