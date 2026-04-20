import { testimonialsData } from "@/lib/data/testimonials"
import { GlassCard } from "@/components/ui/glass-card"
import { BrutalTag } from "@/components/ui/brutal-tag"

const accentColors = {
  violet: "brutal-section-violet",
  cyan: "brutal-section-cyan",
  lime: "brutal-section-lime",
  yellow: "brutal-section-yellow",
  pink: "brutal-section-pink",
} as const

export function TestimonialsSection() {
  return (
    <section className="relative">
      <div className="mb-6 max-w-xl space-y-3">
        <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-foreground/70">
          What people say
        </p>
        <h2 className="font-heading text-3xl leading-[0.95] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Testimonials.{" "}
          <span className="inline-block bg-foreground px-3 py-1 leading-none text-background">
            Real feedback.
          </span>
        </h2>
        <p className="text-lg font-medium leading-relaxed text-foreground/80">
          What collaborators and clients say about working together on real projects.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonialsData.map((testimonial, index) => (
          <GlassCard
            key={testimonial.id}
            accent={testimonial.color}
            size="md"
            className={`reveal visible animate-fade-in-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="space-y-5">
              <div className="space-y-4">
                <svg
                  className="size-6 text-foreground/40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-base font-medium leading-relaxed text-foreground">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              <div className="flex items-center gap-3 border-t-2 border-current pt-4">
                <div className="flex size-10 shrink-0 items-center justify-center border-2 border-current bg-transparent font-heading text-sm font-bold">
                  {testimonial.avatar}
                </div>
                <div className="min-w-0">
                  <p className="font-heading text-sm font-bold leading-tight text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-xs font-medium leading-relaxed text-foreground/70">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}