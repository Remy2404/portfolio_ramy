import { Sparkles } from "lucide-react"

import { TechIconBadge } from "@/components/ui/tech-icon-badge"
import { skillCategories } from "@/lib/data/skills"

const categoryAccents = [
  "bg-white",
  "bg-xxx-violet-200",
  "bg-white",
  "bg-xxx-orange-200",
] as const

export function TechStackSection() {
  const workflowCategory = skillCategories.find((c) => c.id === "workflow")
  const visualCategories  = skillCategories.filter((c) => c.id !== "workflow")

  return (
    <div id="stack" className="brutal-card brutal-section-lime p-7">

      <div className="max-w-2xl">
        <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-black">
          Tech stack
        </p>
        <h2 className="mt-3 font-heading text-4xl leading-[0.95] tracking-tight text-black sm:text-5xl">
          Tools &amp;{" "}
          <span className="inline-block bg-black px-3 py-1 leading-none text-xxx-lime-200">
            platforms
          </span>{" "}
          that show up in the work.
        </h2>
        <p className="mt-4 text-lg font-medium leading-relaxed text-black">
          Curated from the public profile README, repository history, and current focus areas — not a generic badge wall.
        </p>
      </div>

      <div className="mt-6 grid gap-4">
        {visualCategories.map((category, i) => (
          <section
            key={category.id}
            className={`brutal-chip ${categoryAccents[i % categoryAccents.length]} p-5`}
          >
            <h3 className="text-lg font-black uppercase tracking-[-0.01em] text-black">
              {category.label}
            </h3>
            <p className="mt-1 text-base font-medium leading-relaxed text-black">
              {category.summary}
            </p>

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

        {/* Workflow — reversed: black panel with lime accents */}
        {workflowCategory ? (
          <section className="brutal-chip bg-black p-5">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center border-2 border-xxx-lime-300 bg-xxx-lime-300">
                <Sparkles className="size-4 text-black" />
              </div>
              <div>
                <h3 className="text-lg font-black uppercase tracking-[-0.01em] text-white">
                  {workflowCategory.label}
                </h3>
                <p className="text-sm font-medium text-white">{workflowCategory.summary}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {workflowCategory.items.map((item) => (
                <div key={item.slug} className="flex gap-3">
                  <span className="mt-2 size-2 shrink-0 bg-xxx-lime-300" />
                  <div>
                    <p className="text-sm font-black text-white">{item.label}</p>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-white">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  )
}
