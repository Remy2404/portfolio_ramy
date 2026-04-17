import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Mail, Sparkles } from "lucide-react"

import { StaggerGroup, StaggerItem } from "@/components/motion/stagger"
import { BrutalTag } from "@/components/ui/brutal-tag"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config/site"
import { profileData } from "@/lib/data/profile"
import { projects } from "@/lib/data/projects"
import { skillCategories } from "@/lib/data/skills"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies across AI assistants, finance platforms, and commerce interfaces by Ramy.",
}

// Map GlassAccent → Neo Brutalism section color
const accentMap: Record<string, string> = {
  violet:  "brutal-section-violet",
  cyan:    "brutal-section-cyan",
  emerald: "brutal-section-lime",
  amber:   "brutal-section-yellow",
  slate:   "bg-white",
}

// Map GlassAccent → BrutalTag highlight color for the inline heading span
const highlightMap: Record<string, string> = {
  violet:  "bg-xxx-violet-200",
  cyan:    "bg-xxx-cyan-200",
  emerald: "bg-xxx-lime-200",
  amber:   "bg-xxx-yellow-200",
  slate:   "bg-xxx-yellow-300",
}

// Map status → BrutalTag color
const statusColorMap: Record<string, string> = {
  Live:          "yellow",
  Production:    "lime",
  "In Progress": "cyan",
  Research:      "violet",
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 px-4 pb-24 pt-6 sm:px-6 lg:px-8 2xl:max-w-[1680px]">

      {/* ── Page Header ── */}
      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">

        {/* Left: Hero copy */}
        <div className="brutal-card brutal-section-violet p-7">
          <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-black">
            Project archive
          </p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl leading-[0.95] tracking-tight text-black sm:text-5xl">
            Deep technical writeups,{" "}
            <span className="inline-block bg-black px-3 py-1 leading-none text-xxx-yellow-300">
              not screenshot filler.
            </span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg font-medium leading-relaxed text-black">
            These case studies come from the public GitHub body of work — expanded into clear engineering narratives showing decision-making, architecture range, and product thinking.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild variant="default" size="lg">
              <a href={profileData.primaryCta.href}>
                Contact Ramy
                <Mail className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Back home</Link>
            </Button>
          </div>
        </div>

        {/* Right: Stats panel */}
        <div className="brutal-card bg-black p-7">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center border-2 border-xxx-yellow-300 bg-xxx-yellow-300">
              <Sparkles className="size-4 text-black" />
            </div>
            <div>
              <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-white">
                Snapshot
              </p>
              <p className="text-sm font-black text-white">
                Curated from public GitHub work
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
            <div className="brutal-chip bg-xxx-yellow-300 p-4">
              <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-black">
                Case studies
              </p>
              <p className="mt-2 font-heading text-4xl text-black">
                {projects.length}
              </p>
            </div>
            <div className="brutal-chip bg-white p-4">
              <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-black">
                Skill tracks
              </p>
              <p className="mt-2 font-heading text-4xl text-black">
                {skillCategories.length}
              </p>
            </div>
            <div className="brutal-chip bg-xxx-violet-200 p-4">
              <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-black">
                Source date
              </p>
              <p className="mt-2 text-sm font-black leading-relaxed text-black">
                {siteConfig.sourceSnapshotDate}
              </p>
            </div>
          </div>

          <div className="brutal-chip mt-4 bg-white p-4">
            <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-black">
              What writeups cover
            </p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-black">
              Problem framing, role, stack, implementation highlights, and real product direction.
            </p>
          </div>
        </div>
      </section>

      {/* ── Project Cards ── */}
      <StaggerGroup className="grid gap-6">
        {projects.map((project) => {
          const sectionBg   = accentMap[project.accent]   ?? "bg-white"
          const highlightBg = highlightMap[project.accent] ?? "bg-xxx-yellow-300"
          const tagColor    = statusColorMap[project.status] ?? "yellow"

          return (
            <StaggerItem key={project.slug}>
              <article
                id={project.slug}
                className={cn("brutal-card p-7", sectionBg)}
              >
                <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                  {/* ── Left: Main content ── */}
                  <div className="flex flex-col gap-6">

                    {/* Status + date */}
                    <div className="flex flex-wrap items-center gap-3">
                      <BrutalTag
                        color={tagColor as Parameters<typeof BrutalTag>[0]["color"]}
                        size="sm"
                        shadow
                      >
                        {project.status}
                      </BrutalTag>
                      {project.updatedLabel ? (
                        <span className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-black">
                          {project.updatedLabel}
                        </span>
                      ) : null}
                    </div>

                    {/* Title */}
                    <div>
                      <h2 className="font-heading text-4xl leading-[0.95] tracking-tight text-black sm:text-5xl">
                        {project.title}
                      </h2>
                      <p className="mt-4 text-lg font-medium leading-relaxed text-black">
                        {project.summary}
                      </p>
                    </div>

                    {/* Problem / Solution / Outcome */}
                    <div className="space-y-5">
                      <div className="border-l-4 border-black pl-4">
                        <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-black">
                          Problem
                        </p>
                        <p className="mt-2 text-base font-medium leading-relaxed text-black">
                          {project.problem}
                        </p>
                      </div>

                      <div className="border-l-4 border-black pl-4">
                        <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-black">
                          Solution
                        </p>
                        <p className="mt-2 text-base font-medium leading-relaxed text-black">
                          {project.description}
                        </p>
                      </div>

                      <div className="border-l-4 border-black pl-4">
                        <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-black">
                          Impact
                        </p>
                        <p className="mt-2 text-base font-medium leading-relaxed text-black">
                          {project.outcome}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ── Right: Details panel ── */}
                  <div className="brutal-chip bg-black p-5 flex flex-col gap-6">

                    {/* Role */}
                    <div>
                      <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-white">
                        Role
                      </p>
                      <p className="mt-2 text-base font-medium leading-relaxed text-white">
                        {project.role}
                      </p>
                    </div>

                    {/* Stack */}
                    <div>
                      <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-white">
                        Stack
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="border-2 border-xxx-yellow-300 bg-black px-2 py-0.5 font-mono text-[0.62rem] font-black uppercase tracking-[0.12em] text-xxx-yellow-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div>
                      <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-white">
                        Key highlights
                      </p>
                      <div className="mt-3 space-y-3">
                        {project.highlights.map((highlight) => (
                          <div key={highlight} className="flex gap-3">
                            <span className="mt-2 size-2 shrink-0 bg-xxx-yellow-300" />
                            <p className="text-sm font-medium leading-relaxed text-white">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
                      <Button asChild variant="accent" size="sm" className="w-full sm:w-auto">
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          Repository
                          <ArrowUpRight className="size-4" />
                        </a>
                      </Button>
                      {project.demoUrl ? (
                        <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            Live demo
                            <ArrowUpRight className="size-4" />
                          </a>
                        </Button>
                      ) : null}
                    </div>
                  </div>

                </div>
              </article>
            </StaggerItem>
          )
        })}
      </StaggerGroup>

    </main>
  )
}
