import { Sparkles } from "lucide-react"

import { GlassCard } from "@/components/ui/glass-card"
import { TechIconBadge } from "@/components/ui/tech-icon-badge"
import { skillCategories } from "@/lib/data/skills"

export function TechStackSection() {
  const workflowCategory = skillCategories.find((category) => category.id === "workflow")
  const visualCategories = skillCategories.filter((category) => category.id !== "workflow")

  return (
    <GlassCard id="stack" accent="cyan" glow="medium" size="lg">
      <div className="max-w-2xl">
        <p className="text-faint font-mono text-[0.7rem] uppercase tracking-[0.28em]">
          Tech stack
        </p>
        <h2 className="text-strong mt-3 text-3xl font-semibold tracking-[-0.05em]">
          Tools, platforms, and workflow patterns that show up repeatedly in the GitHub body of work
        </h2>
        <p className="text-body mt-3 text-sm leading-7">
          Curated from the public profile README, repository history, and current focus areas rather than a generic badge wall.
        </p>
      </div>

      <div className="mt-6 grid gap-4">
        {visualCategories.map((category) => (
          <section
            key={category.id}
            className="glass-subcard rounded-[28px] p-5"
          >
            <div>
              <h3 className="text-strong text-lg font-semibold tracking-[-0.03em]">
                {category.label}
              </h3>
              <p className="text-soft mt-1 text-sm leading-6">
                {category.summary}
              </p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {category.items
                .filter((item) => item.iconKey)
                .map((item) => (
                  <TechIconBadge
                    key={item.slug}
                    label={item.label}
                    iconKey={item.iconKey!}
                    description={item.description}
                  />
                ))}
            </div>
          </section>
        ))}

        {workflowCategory ? (
          <section className="glass-subcard rounded-[28px] p-5">
            <div className="text-strong flex items-center gap-3">
              <div className="glass-chip text-accent flex size-10 items-center justify-center rounded-full">
                <Sparkles className="size-4" />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.03em]">
                  {workflowCategory.label}
                </h3>
                <p className="text-soft text-sm">
                  {workflowCategory.summary}
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {workflowCategory.items.map((item) => (
                <div key={item.slug} className="flex gap-3">
                  <span className="mt-2 size-2 rounded-full bg-cyan-300" />
                  <div>
                    <p className="text-strong text-sm font-semibold">
                      {item.label}
                    </p>
                    <p className="text-soft mt-1 text-sm leading-6">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </GlassCard>
  )
}
