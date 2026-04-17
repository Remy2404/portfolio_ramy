import Link from "next/link"
import { ArrowUpRight, PanelsTopLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BrutalTag } from "@/components/ui/brutal-tag"
import { featuredProjects, projectBentoItems } from "@/lib/data/projects"
import { cn } from "@/lib/utils"

const cardAccents = [
  "bg-xxx-violet-200",
  "bg-xxx-cyan-200",
  "bg-xxx-orange-200",
  "bg-xxx-pink-200",
] as const

const statusColors = {
  "Live":        "yellow",
  "Production":  "lime",
  "In Progress": "cyan",
  "Research":    "violet",
} as const

export function FeaturedProjectsSection() {
  const layoutProjects = projectBentoItems
    .map((item) => ({
      layout: item,
      project: featuredProjects.find((p) => p.slug === item.id),
    }))
    .filter(
      (entry): entry is {
        layout: (typeof projectBentoItems)[number]
        project: (typeof featuredProjects)[number]
      } => Boolean(entry.project)
    )

  return (
    <div className="brutal-card bg-white p-7">

      {/* Header row */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-2xl">
          <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-black">
            Selected work
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-[0.95] tracking-tight text-black sm:text-5xl">
            Projects with{" "}
            <span className="inline-block bg-black px-3 py-1 leading-none text-xxx-violet-200">
              product &amp; systems
            </span>{" "}
            range.
          </h2>
          <p className="mt-3 text-lg font-medium leading-relaxed text-black">
            Four curated builds chosen to show interface craft, backend rigor, and AI-oriented experimentation.
          </p>
        </div>

        <Button asChild variant="default" size="sm">
          <Link href="/projects">All case studies</Link>
        </Button>
      </div>

      {/* Project cards grid */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {layoutProjects.map(({ layout, project }, i) => {
          const primary = layout.priority === "primary"
          const bg = cardAccents[i % cardAccents.length]

          return (
            <article
              key={project.slug}
              className={cn(
                "brutal-hover brutal-chip flex h-full flex-col p-5",
                bg,
                layout.area,
                layout.minHeight
              )}
            >
              {/* Card header */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <BrutalTag
                    color={statusColors[project.status] ?? "yellow"}
                    size="xs"
                    shadow
                  >
                    {project.status}
                  </BrutalTag>
                  {project.updatedLabel ? (
                    <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-black">
                      {project.updatedLabel}
                    </p>
                  ) : null}
                </div>

                <a
                  href={project.repoUrl}
                  className="flex size-10 items-center justify-center border-2 border-black bg-black text-white transition-colors hover:bg-white hover:text-black"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <PanelsTopLeft className="size-4" />
                </a>
              </div>

              {/* Card body */}
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-xl font-black uppercase tracking-[-0.02em] text-black">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-lg leading-relaxed text-black">
                    {primary ? project.description : project.summary}
                  </p>
                </div>

                {primary ? (
                  <div className="space-y-2 border-l-2 border-black pl-3">
                    {project.highlights.slice(0, 2).map((highlight) => (
                      <p key={highlight} className="text-base font-medium leading-relaxed text-black">
                        {highlight}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="border-2 border-black bg-white px-2 py-0.5 font-mono text-[0.6rem] font-black uppercase tracking-[0.12em] text-black"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card footer */}
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <Link
                  href={`/projects#${project.slug}`}
                  className="inline-flex items-center gap-2 border-b-2 border-black text-sm font-black uppercase tracking-[0.1em] text-black hover:border-transparent"
                >
                  Case study
                  <ArrowUpRight className="size-4" />
                </Link>
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    className="inline-flex items-center gap-2 border-b-2 border-black text-sm font-black uppercase tracking-[0.1em] text-black transition-colors hover:border-transparent"
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
    </div>
  )
}
