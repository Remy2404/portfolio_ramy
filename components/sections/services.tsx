"use client"

import { Code2, Server, Sparkles, Boxes, SearchCheck } from "lucide-react"

import { servicesData } from "@/lib/data/services"
import { cn } from "@/lib/utils"

const iconMap = {
  frontend: Code2,
  backend: Server,
  "ai-workflows": Sparkles,
  fullstack: Boxes,
  "technical-review": SearchCheck,
}

const accentClasses = {
  violet: {
    bg: "bg-xxx-violet-200",
  },
  cyan: {
    bg: "bg-xxx-cyan-200",
  },
  lime: {
    bg: "bg-xxx-lime-200",
  },
  yellow: {
    bg: "bg-xxx-yellow-200",
  },
  pink: {
    bg: "bg-xxx-pink-200",
  },
}

export function ServicesSection() {
  return (
    <section className="relative">
      <div className="mb-6 max-w-xl space-y-3">
        <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-foreground/70">
          What I do
        </p>
        <h2 className="font-heading text-3xl leading-[0.95] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Services I Offer.{" "}
          <span className="inline-block bg-foreground px-3 py-1 leading-none text-background">
            Ready to ship.
          </span>
        </h2>
        <p className="text-lg font-medium leading-relaxed text-foreground/80">
          From frontend polish to backend rigor and AI workflows — building production-ready systems that solve real problems.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => {
          const Icon = iconMap[service.id as keyof typeof iconMap]
          const accent = accentClasses[service.accent]

          return (
            <div
              key={service.id}
              className={cn(
                "brutal-card group flex flex-col p-6 animate-fade-in-up",
                accent.bg
              )}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Icon */}
              <div
                className={cn(
                  "mb-5 flex size-12 items-center justify-center border-2 border-black bg-white",
                  "transition-transform duration-200 group-hover:scale-110 group-hover:rotate-3"
                )}
              >
                <Icon className="size-6 text-black" strokeWidth={2.5} />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col">
                <h3 className="readable-title text-xl text-black">
                  {service.title}
                </h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-black">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="mt-5 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 border-l-2 border-black pl-3"
                    >
                      <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-black" />
                      <span className="text-sm font-medium leading-relaxed text-black">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover effect indicator */}
              <div className="mt-6 flex items-center gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <span className="h-px flex-1 bg-black" />
                <span className="font-mono text-[0.65rem] font-black uppercase tracking-widest text-black">
                  Available
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
