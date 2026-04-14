import Link from "next/link"
import { ArrowUpRight, PanelsTopLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { featuredProjects, projectBentoItems } from "@/lib/data/projects"
import { cn } from "@/lib/utils"

const accentClasses = {
  cyan: "border-cyan-400/20 bg-cyan-400/10 text-cyan-700 dark:border-cyan-300/12 dark:bg-cyan-300/10 dark:text-cyan-100",
  violet:
    "border-violet-400/20 bg-violet-400/10 text-violet-700 dark:border-violet-300/12 dark:bg-violet-300/10 dark:text-violet-100",
  emerald:
    "border-emerald-400/20 bg-emerald-400/10 text-emerald-700 dark:border-emerald-300/12 dark:bg-emerald-300/10 dark:text-emerald-100",
  amber:
    "border-amber-400/20 bg-amber-400/10 text-amber-700 dark:border-amber-300/12 dark:bg-amber-300/10 dark:text-amber-100",
  slate:
    "border-slate-400/20 bg-slate-400/10 text-slate-700 dark:border-slate-300/12 dark:bg-slate-300/10 dark:text-slate-100",
}

export function FeaturedProjectsSection() {
  const layoutProjects = projectBentoItems
    .map((item) => ({
      layout: item,
      project: featuredProjects.find((project) => project.slug === item.id),
    }))
    .filter(
      (
        entry
      ): entry is {
        layout: (typeof projectBentoItems)[number]
        project: (typeof featuredProjects)[number]
      } => Boolean(entry.project)
    )

  return (
    <GlassCard accent="slate" glow="medium" size="lg">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-2xl">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-slate-500 dark:text-cyan-200/75">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white">
            Featured projects with product and systems range
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Four curated builds chosen to show interface craft, backend rigor, and AI-oriented experimentation.
          </p>
        </div>

        <Button
          asChild
          variant="outline"
          className="rounded-full border-white/25 bg-white/70 text-xs font-semibold uppercase tracking-[0.18em] text-slate-800 hover:bg-white dark:border-white/12 dark:bg-white/[0.05] dark:text-slate-100 dark:hover:bg-white/[0.08]"
        >
          <Link href="/projects">All case studies</Link>
        </Button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-2">
        {layoutProjects.map(({ layout, project }) => {
          const primary = layout.priority === "primary"

          return (
            <article
              key={project.slug}
              className={cn(
                "flex h-full flex-col rounded-[28px] border border-white/18 bg-white/70 p-5 shadow-[0_18px_55px_-34px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_18px_60px_-36px_rgba(0,0,0,0.82)]",
                layout.area,
                layout.minHeight
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <span
                    className={cn(
                      "inline-flex rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em]",
                      accentClasses[project.accent]
                    )}
                  >
                    {project.status}
                  </span>
                  {project.updatedLabel ? (
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-500">
                      {project.updatedLabel}
                    </p>
                  ) : null}
                </div>

                <a
                  href={project.repoUrl}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/18 bg-white/70 text-slate-700 transition-colors hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:text-cyan-200"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <PanelsTopLeft className="size-4" />
                </a>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {primary ? project.description : project.summary}
                  </p>
                </div>

                {primary ? (
                  <div className="space-y-2">
                    {project.highlights.slice(0, 2).map((highlight) => (
                      <p
                        key={highlight}
                        className="text-sm leading-6 text-slate-700 dark:text-slate-300"
                      >
                        {highlight}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/18 bg-white/70 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <Link
                  href={`/projects#${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-800 transition-colors hover:text-cyan-700 dark:text-slate-100 dark:hover:text-cyan-200"
                >
                  Case study
                  <ArrowUpRight className="size-4" />
                </Link>
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
            </article>
          )
        })}
      </div>
    </GlassCard>
  )
}
