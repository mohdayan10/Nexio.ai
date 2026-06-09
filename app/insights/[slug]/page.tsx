import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InsightCover from "@/components/InsightCover";
import { getPost, posts, sortedPosts, formatDate } from "@/lib/insights";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Not found — Nexio" };
  return {
    title: `${post.title} — Nexio`,
    description: post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/insights/${post.slug}`,
      type: "article",
    },
  };
}

export default function InsightArticle({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const more = sortedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-24 pt-32 md:pt-36">
        <article className="container-px">
          <div className="mx-auto max-w-3xl">
            <a href="/insights" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-800">
              <ArrowLeft className="h-4 w-4" /> All insights
            </a>

            <p className="mt-8 font-mono text-[11px] font-semibold tracking-wider text-slate-400">
              {formatDate(post.date)} • {post.read}
            </p>
            <h1 className="display mt-3 text-4xl leading-[1.1] text-[#14171f] sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-lg text-slate-500">{post.excerpt}</p>

            <InsightCover palette={post.palette} seed={post.seed} className="mt-10 h-64 rounded-2xl sm:h-80" />

            <div className="mt-10">
              {post.body.map((block, i) =>
                block.startsWith("## ") ? (
                  <h2 key={i} className="mt-10 text-2xl font-semibold text-[#14171f]">
                    {block.slice(3)}
                  </h2>
                ) : (
                  <p key={i} className="mt-5 text-[17px] leading-relaxed text-slate-600">
                    {block}
                  </p>
                )
              )}
            </div>

            {post.sources && post.sources.length > 0 && (
              <div className="mt-12 border-t border-slate-200 pt-6">
                <p className="label-mono">Sources</p>
                <ul className="mt-3 space-y-2">
                  {post.sources.map((s) => (
                    <li key={s.url}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] text-blue-700 underline-offset-2 hover:underline"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-14 rounded-2xl bg-[#14171f] p-8 text-white">
              <h3 className="text-2xl font-semibold">See it on your own workflows</h3>
              <p className="mt-2 max-w-md text-white/70">
                Talk to our team about deploying purpose-built agents across your customer and employee experiences.
              </p>
              <a href="/contact" className="btn-ko mt-6 w-fit border-white/20 bg-white/10 text-white hover:bg-white/20 px-5 py-3">
                Get a demo <span className="dot" />
              </a>
            </div>
          </div>
        </article>

        {/* more posts */}
        <div className="container-px mt-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="display text-2xl text-[#14171f]">More insights</h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-3">
              {more.map((p) => (
                <a key={p.slug} href={`/insights/${p.slug}`} className="group block">
                  <InsightCover palette={p.palette} seed={p.seed} className="h-32 rounded-xl" />
                  <h3 className="mt-3 text-base font-semibold leading-snug text-[#14171f] group-hover:text-blue-700">{p.title}</h3>
                  <p className="mt-1.5 font-mono text-[10px] font-semibold tracking-wider text-slate-400">{formatDate(p.date)}</p>
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
