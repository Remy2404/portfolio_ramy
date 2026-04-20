"use client"

import {
  Mail,
  Globe,
  ArrowRight,
} from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import { contactData } from "@/lib/data/contact"
import { GlassCard } from "@/components/ui/glass-card"
import { BrutalTag } from "@/components/ui/brutal-tag"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ElementType> = {
  mail: Mail,
  globe: Globe,
  github: FaGithub,
  linkedin: FaLinkedin,
}

const buttonVariants = {
  primary: "bg-secondary text-secondary-foreground border-2 border-border brutal-hover-xl",
  secondary: "bg-primary text-primary-foreground border-2 border-border brutal-hover-xl",
  outline: "bg-transparent text-foreground border-2 border-border brutal-hover-xl",
}

export function ContactSection() {
  return (
    <section className="relative">
      <div className="mb-6 max-w-xl space-y-3">
        <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-foreground/70">
          Get in touch
        </p>
        <h2 className="font-heading text-3xl leading-[0.95] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Let's build.{" "}
          <span className="inline-block bg-foreground px-3 py-1 leading-none text-background">
            Start the conversation.
          </span>
        </h2>
        <p className="text-lg font-medium leading-relaxed text-foreground/80">
          {contactData.tagline}
        </p>
      </div>

      <GlassCard
        accent="lime"
        size="xl"
        className="animate-fade-in-up"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <p className="text-lg font-medium leading-relaxed text-foreground">
              {contactData.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {contactData.ctas.map((cta, index) => {
              const Icon = iconMap[cta.icon]
              const variantClasses = buttonVariants[cta.variant]

              return (
                <a
                  key={cta.label}
                  href={cta.href}
                  target={cta.href.startsWith("http") ? "_blank" : undefined}
                  rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={cn(
                    variantClasses,
                    "inline-flex items-center gap-2 px-5 py-3 font-heading text-sm font-bold uppercase tracking-wide",
                    "focus-ring-inset"
                  )}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <Icon className="size-4" />
                  {cta.label}
                  {cta.variant === "primary" && (
                    <ArrowRight className="size-4" />
                  )}
                </a>
              )
            })}
          </div>
        </div>
      </GlassCard>
    </section>
  )
}