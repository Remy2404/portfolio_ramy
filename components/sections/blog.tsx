import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { blogPosts } from "@/lib/data/blog"
import { GlassCard } from "@/components/ui/glass-card"
import { BrutalTag } from "@/components/ui/brutal-tag"

export function BlogSection() {
  return (
    <section className="relative">
      <div className="mb-6 max-w-xl space-y-3">
        <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-foreground/70">
          Latest thoughts
        </p>
        <h2 className="font-heading text-3xl leading-[0.95] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Blog.{" "}
          <span className="inline-block bg-foreground px-3 py-1 leading-none text-background">
            Lessons learned.
          </span>
        </h2>
        <p className="text-lg font-medium leading-relaxed text-foreground/80">
          Writing about systems thinking, performance patterns, and building products that ship.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group/reveal"
          >
            <GlassCard
              size="md"
              interactive
              className="h-full reveal visible animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-full flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <BrutalTag color="lime" size="xs">
                      {post.category}
                    </BrutalTag>
                    <span className="font-mono text-[0.6rem] font-medium uppercase tracking-wider text-foreground/60">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold leading-tight text-foreground transition-colors group-hover/reveal:text-primary">
                    {post.title}
                  </h3>

                  <p className="text-sm font-medium leading-relaxed text-foreground/70">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-2 font-heading text-sm font-bold text-primary">
                  <span>Read more</span>
                  <ArrowRight className="size-4 transition-transform group-hover/reveal:translate-x-1" />
                </div>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </section>
  )
}