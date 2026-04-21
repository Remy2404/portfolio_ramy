"use client"

import { achievementsData } from "@/lib/data/achievements"

const accentStyles = {
  violet: "bg-xxx-violet-200",
  cyan: "bg-xxx-cyan-200",
  lime: "bg-xxx-lime-200",
  yellow: "bg-xxx-yellow-300",
}

function isCompactMetric(metric: string) {
  return /^[\d+]+$/.test(metric)
}

export function AchievementsSection() {
  return (
    <section className="relative">
      <div className="mb-6 max-w-xl space-y-3">
        <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-foreground/70">
          Milestones
        </p>
        <h2 className="font-heading text-3xl leading-[0.95] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Achievements.{" "}
          <span className="inline-block bg-foreground px-3 py-1 leading-none text-background">
            Measurable impact.
          </span>
        </h2>
        <p className="text-lg font-medium leading-relaxed text-foreground/80">
          Key metrics and milestones from building in public and shipping real products.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievementsData.map((achievement, index) => (
          <div
            key={achievement.id}
            className="brutal-card group relative flex flex-col p-5 brutal-hover"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Accent color fill at top */}
            <div
              className={`absolute inset-x-0 top-0 h-2 ${accentStyles[achievement.accent]}`}
            />

            <div className="mt-4 space-y-3">
              {/* Metric display */}
              <div
                className={
                  isCompactMetric(achievement.metric)
                    ? "font-heading text-5xl font-bold leading-none tracking-tight text-foreground"
                    : "readable-title text-3xl text-foreground sm:text-4xl"
                }
              >
                {achievement.metric}
              </div>

              {/* Label */}
              <h3 className="readable-title text-lg text-foreground">
                {achievement.label}
              </h3>

              {/* Description */}
              <p className="text-sm font-medium leading-relaxed text-foreground/70">
                {achievement.description}
              </p>
            </div>

            {/* Decorative corner accent */}
            <div
              className={`absolute bottom-0 right-0 h-4 w-4 ${accentStyles[achievement.accent]} opacity-50`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
