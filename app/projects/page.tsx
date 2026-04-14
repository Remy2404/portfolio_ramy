import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Layers3, Mail, Sparkles } from "lucide-react"

import { StaggerGroup, StaggerItem } from "@/components/motion/stagger"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { siteConfig } from "@/lib/config/site"
import { profileData } from "@/lib/data/profile"
import { projects } from "@/lib/data/projects"
import { skillCategories } from "@/lib/data/skills"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies across AI assistants, finance platforms, and commerce interfaces by Ramy.",
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <GlassCard size="xl" accent="slate" glow="medium">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-slate-500 dark:text-cyan-200/75">
            Project archive
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl dark:text-white">
            Deep technical writeups, not screenshot-level portfolio filler.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700 dark:text-slate-300">
            These case studies are curated from the public GitHub body of work and expanded into clearer engineering narratives. The goal is to show decision-making, architecture range, and product thinking rather than dumping repository links.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-slate-950 px-6 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_24px_55px_-28px_rgba(34,211,238,0.55)] hover:bg-slate-900 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
            >
              <a href={profileData.primaryCta.href}>
                Contact Ramy
                <Mail className="size-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-white/25 bg-white/70 px-6 text-sm font-semibold uppercase tracking-[0.18em] text-slate-800 hover:bg-white dark:border-white/12 dark:bg-white/[0.05] dark:text-slate-100 dark:hover:bg-white/[0.08]"
            >
              <Link href="/">Back home</Link>
            </Button>
          </div>
        </GlassCard>

        <GlassCard size="lg" accent="cyan" glow="medium">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-slate-950 dark:text-white">
              <div className="flex size-10 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/10 text-cyan-700 dark:text-cyan-200">
                <Layers3 className="size-4" />
              </div>
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                  Snapshot
                </p>
                <p className="text-sm font-semibold">Curated from public GitHub work</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              <div className="rounded-[24px] border border-white/18 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.04]">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-500">
                  Case studies
                </p>
                <p className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white">
                  {projects.length}
                </p>
              </div>
              <div className="rounded-[24px] border border-white/18 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.04]">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-500">
                  Skill tracks
                </p>
                <p className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white">
                  {skillCategories.length}
                </p>
              </div>
              <div className="rounded-[24px] border border-white/18 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.04]">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-500">
                  Source date
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-950 dark:text-white">
                  {siteConfig.sourceSnapshotDate}
                </p>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/18 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.04]">
              <div className="flex items-center gap-2 text-slate-950 dark:text-white">
                <Sparkles className="size-4 text-cyan-600 dark:text-cyan-300" />
                <p className="text-sm font-semibold">What the writeups emphasize</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Problem framing, role, stack, implementation highlights, and real product direction.
              </p>
            </div>
          </div>
        </GlassCard>
      </section>

      <StaggerGroup className="grid gap-6">
        {projects.map((project) => (
          <StaggerItem key={project.slug}>
            <GlassCard
              id={project.slug}
              size="lg"
              accent={project.accent}
              glow="medium"
            >
              <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/18 bg-white/70 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200">
                      {project.status}
                    </span>
                    {project.updatedLabel ? (
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-500">
                        {project.updatedLabel}
                      </span>
                    ) : null}
                  </div>

                  <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-300">
                    {project.summary}
                  </p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-500">
                        Problem
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-500">
                        Solution direction
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-500">
                        Outcome
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 rounded-[28px] border border-white/18 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.04]">
                  <div>
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-500">
                      Role
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                      {project.role}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-500">
                      Stack
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/18 bg-white/80 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-500">
                      Highlights
                    </p>
                    <div className="mt-3 space-y-3">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex gap-3">
                          <span className="mt-2 size-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.85)]" />
                          <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={project.repoUrl}
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition-colors hover:text-cyan-700 dark:text-white dark:hover:text-cyan-200"
                    >
                      Repository
                      <ArrowUpRight className="size-4" />
                    </a>
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-200"
                      >
                        Live experience
                        <ArrowUpRight className="size-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </main>
  )
}
