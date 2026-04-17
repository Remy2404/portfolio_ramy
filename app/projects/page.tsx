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
    <main className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 px-4 pb-20 pt-6 sm:px-6 lg:px-8 2xl:max-w-[1680px]">
      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <GlassCard size="xl" accent="slate" glow="medium">
          <p className="text-faint font-mono text-[0.72rem] uppercase tracking-[0.28em]">
            Project archive
          </p>
          <h1 className="text-strong mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            Deep technical writeups, not screenshot-level portfolio filler.
          </h1>
          <p className="text-body mt-4 max-w-3xl text-base leading-8">
            These case studies are curated from the public GitHub body of work and expanded into clearer engineering narratives. The goal is to show decision-making, architecture range, and product thinking rather than dumping repository links.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-cyan-300 px-6 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-none hover:bg-cyan-200"
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
              className="glass-chip text-strong h-12 rounded-full px-6 text-sm font-semibold uppercase tracking-[0.18em] hover:bg-white/90 dark:hover:bg-white/[0.08]"
            >
              <Link href="/">Back home</Link>
            </Button>
          </div>
        </GlassCard>

        <GlassCard size="lg" accent="cyan" glow="medium">
          <div className="space-y-5">
            <div className="text-strong flex items-center gap-3">
              <div className="glass-chip text-accent flex size-10 items-center justify-center rounded-full">
                <Layers3 className="size-4" />
              </div>
              <div>
                <p className="text-faint font-mono text-[0.68rem] uppercase tracking-[0.24em]">
                  Snapshot
                </p>
                <p className="text-sm font-semibold">Curated from public GitHub work</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              <div className="glass-subcard rounded-[24px] p-4">
                <p className="text-faint font-mono text-[0.68rem] uppercase tracking-[0.22em]">
                  Case studies
                </p>
                <p className="text-strong mt-2 text-3xl font-semibold tracking-[-0.05em]">
                  {projects.length}
                </p>
              </div>
              <div className="glass-subcard rounded-[24px] p-4">
                <p className="text-faint font-mono text-[0.68rem] uppercase tracking-[0.22em]">
                  Skill tracks
                </p>
                <p className="text-strong mt-2 text-3xl font-semibold tracking-[-0.05em]">
                  {skillCategories.length}
                </p>
              </div>
              <div className="glass-subcard rounded-[24px] p-4">
                <p className="text-faint font-mono text-[0.68rem] uppercase tracking-[0.22em]">
                  Source date
                </p>
                <p className="text-strong mt-2 text-sm font-semibold leading-6">
                  {siteConfig.sourceSnapshotDate}
                </p>
              </div>
            </div>

            <div className="glass-subcard rounded-[24px] p-4">
              <div className="text-strong flex items-center gap-2">
                <Sparkles className="text-accent size-4" />
                <p className="text-sm font-semibold">What the writeups emphasize</p>
              </div>
              <p className="text-soft mt-2 text-sm leading-6">
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
                      <span className="glass-chip text-soft rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em]">
                      {project.status}
                    </span>
                    {project.updatedLabel ? (
                      <span className="text-faint font-mono text-[0.68rem] uppercase tracking-[0.22em]">
                        {project.updatedLabel}
                      </span>
                    ) : null}
                  </div>

                  <h2 className="text-strong mt-5 text-3xl font-semibold tracking-[-0.05em]">
                    {project.title}
                  </h2>
                  <p className="text-body mt-3 text-base leading-8">
                    {project.summary}
                  </p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-faint font-mono text-[0.72rem] uppercase tracking-[0.24em]">
                        Problem
                      </p>
                      <p className="text-body mt-2 text-sm leading-7">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <p className="text-faint font-mono text-[0.72rem] uppercase tracking-[0.24em]">
                        Solution direction
                      </p>
                      <p className="text-body mt-2 text-sm leading-7">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <p className="text-faint font-mono text-[0.72rem] uppercase tracking-[0.24em]">
                        Outcome
                      </p>
                      <p className="text-body mt-2 text-sm leading-7">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-subcard space-y-5 rounded-[28px] p-5">
                  <div>
                    <p className="text-faint font-mono text-[0.72rem] uppercase tracking-[0.24em]">
                      Role
                    </p>
                    <p className="text-body mt-2 text-sm leading-7">
                      {project.role}
                    </p>
                  </div>

                  <div>
                    <p className="text-faint font-mono text-[0.72rem] uppercase tracking-[0.24em]">
                      Stack
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="glass-chip text-soft rounded-full px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-faint font-mono text-[0.72rem] uppercase tracking-[0.24em]">
                      Highlights
                    </p>
                    <div className="mt-3 space-y-3">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex gap-3">
                          <span className="mt-2 size-2 rounded-full bg-cyan-300" />
                          <p className="text-body text-sm leading-6">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={project.repoUrl}
                      className="text-strong inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                    >
                      Repository
                      <ArrowUpRight className="size-4" />
                    </a>
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        className="text-faint inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
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
