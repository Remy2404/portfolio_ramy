import { philosophyData } from "@/lib/data/philosophy"
import { GlassCard } from "@/components/ui/glass-card"

const accentVariants = ["violet", "cyan", "lime", "yellow"] as const

export function PhilosophySection() {
  return (
    <section className="relative">
      <div className="mb-6 max-w-xl space-y-3">
        <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-foreground/70">
          How I work
        </p>
        <h2 className="font-heading text-3xl leading-[0.95] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Philosophy.{" "}
          <span className="inline-block bg-foreground px-3 py-1 leading-none text-background">
            Guiding principles.
          </span>
        </h2>
        <p className="text-lg font-medium leading-relaxed text-foreground/80">
          The beliefs that shape how I approach building software and working with teams.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {philosophyData.map((item, index) => (
          <GlassCard
            key={item.principle}
            accent={accentVariants[index % accentVariants.length]}
            size="md"
            className="reveal visible animate-fade-in-up"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="space-y-3">
              <h3 className="readable-title text-xl text-accent-surface">
                {item.principle}
              </h3>
              <p className="text-base font-medium leading-relaxed text-accent-surface-muted">
                {item.description}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
