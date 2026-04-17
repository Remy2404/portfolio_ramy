import Link from "next/link"
import { ArrowUpRight, PanelsTopLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { featuredProjects, projectBentoItems } from "@/lib/data/projects"
import { cn } from "@/lib/utils"

const accentClasses = {
  cyan: "glass-chip text-soft",
  violet: "glass-chip text-soft",
  emerald: "glass-chip text-soft",
  amber: "glass-chip text-soft",
  slate: "glass-chip text-soft",
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
          <p className="text-faint font-mono text-[0.7rem] uppercase tracking-[0.28em]">
            Selected work
          </p>
          <h2 className="text-strong mt-3 text-3xl font-semibold tracking-[-0.05em]">
            Featured projects with product and systems range
          </h2>
          <p className="text-body mt-3 text-sm leading-7">
            Four curated builds chosen to show interface craft, backend rigor, and AI-oriented experimentation.
          </p>
        </div>

        <Button
          asChild
          variant="outline"
          className="glass-chip text-strong rounded-full text-xs font-semibold uppercase tracking-[0.18em] hover:bg-white/90 dark:hover:bg-white/[0.08]"
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
                "glass-subcard flex h-full flex-col rounded-[28px] p-5",
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
                    <p className="text-faint font-mono text-[0.68rem] uppercase tracking-[0.22em]">
                      {project.updatedLabel}
                    </p>
                  ) : null}
                </div>

                <a
                  href={project.repoUrl}
                  className="glass-chip text-soft inline-flex size-10 items-center justify-center rounded-full transition-colors hover:text-accent"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <PanelsTopLeft className="size-4" />
                </a>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-strong text-xl font-semibold tracking-[-0.04em]">
                    {project.title}
                  </h3>
                  <p className="text-soft mt-2 text-sm leading-7">
                    {primary ? project.description : project.summary}
                  </p>
                </div>

                {primary ? (
                  <div className="space-y-2">
                    {project.highlights.slice(0, 2).map((highlight) => (
                      <p
                        key={highlight}
                        className="text-body text-sm leading-6"
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
                        className="glass-chip text-soft rounded-full px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em]"
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
                  className="text-strong inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                >
                  Case study
                  <ArrowUpRight className="size-4" />
                </Link>
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
            </article>
          )
        })}
      </div>
    </GlassCard>
  )
}
