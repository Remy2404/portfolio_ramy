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
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-slate-500 dark:text-cyan-200/75">
          Tech stack
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white">
          Tools, platforms, and workflow patterns that show up repeatedly in the GitHub body of work
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
          Curated from the public profile README, repository history, and current focus areas rather than a generic badge wall.
        </p>
      </div>

      <div className="mt-6 grid gap-4">
        {visualCategories.map((category) => (
          <section
            key={category.id}
            className="rounded-[28px] border border-white/18 bg-white/70 p-5 shadow-[0_18px_55px_-34px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_18px_60px_-36px_rgba(0,0,0,0.82)]"
          >
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950 dark:text-white">
                {category.label}
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
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
          <section className="rounded-[28px] border border-white/18 bg-white/70 p-5 shadow-[0_18px_55px_-34px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_18px_60px_-36px_rgba(0,0,0,0.82)]">
            <div className="flex items-center gap-3 text-slate-950 dark:text-white">
              <div className="flex size-10 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/10 text-cyan-700 dark:text-cyan-200">
                <Sparkles className="size-4" />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.03em]">
                  {workflowCategory.label}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {workflowCategory.summary}
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {workflowCategory.items.map((item) => (
                <div key={item.slug} className="flex gap-3">
                  <span className="mt-2 size-2 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(34,211,238,0.85)]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
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
