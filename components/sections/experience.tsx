"use client"

import { experienceData } from "@/lib/data/experience"
import { BrutalTag } from "@/components/ui/brutal-tag"

export function ExperienceSection() {
  const educationItems = experienceData.filter((item) => item.type === "education")
  const internshipItems = experienceData.filter((item) => item.type === "internship")

  return (
    <section className="relative">
      <div className="mb-8 max-w-xl space-y-3">
        <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-foreground/70">
          Background
        </p>
        <h2 className="font-heading text-3xl leading-[0.95] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Experience.{" "}
          <span className="inline-block bg-foreground px-3 py-1 leading-none text-background">
            Building momentum.
          </span>
        </h2>
        <p className="text-lg font-medium leading-relaxed text-foreground/80">
          Final-year engineering student with hands-on experience across frontend, backend, and AI systems.
        </p>
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <h3 className="mb-4 font-heading text-xl font-bold text-foreground">
          Education
        </h3>
        <div className="relative border-l-2 border-border/20 pl-6 md:pl-8">
          {educationItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in-up relative mb-6 last:mb-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[30px] md:-left-[34px] h-4 w-4 rounded-full border-2 border-border bg-background" />
              <div className="brutal-card p-5">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <div className="flex-1">
                    <h4 className="readable-title text-lg text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm font-medium leading-relaxed text-foreground/70">
                      {item.organization}
                    </p>
                  </div>
                  <BrutalTag color={item.accent} size="xs" shadow>
                    {item.startDate} - {item.endDate}
                  </BrutalTag>
                </div>
                <p className="text-base font-medium leading-relaxed text-foreground/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Internships Section */}
      <div>
        <h3 className="mb-4 font-heading text-xl font-bold text-foreground">
          Internships & Work
        </h3>
        <div className="relative border-l-2 border-border/20 pl-6 md:pl-8">
          {internshipItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in-up relative mb-6 last:mb-0"
              style={{ animationDelay: `${(index + educationItems.length) * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[30px] md:-left-[34px] h-4 w-4 rounded-full border-2 border-border bg-background" />
              <div className="brutal-card p-5">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <div className="flex-1">
                    <h4 className="readable-title text-lg text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm font-medium leading-relaxed text-foreground/70">
                      {item.organization}
                    </p>
                  </div>
                  <BrutalTag color={item.accent} size="xs" shadow>
                    {item.startDate} - {item.endDate}
                  </BrutalTag>
                </div>
                <p className="text-base font-medium leading-relaxed text-foreground/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
