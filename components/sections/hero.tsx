import Link from "next/link"
import { ArrowRight, MapPin, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { profileData } from "@/lib/data/profile"

export function HeroSection() {
  return (
    <GlassCard
      size="xl"
      accent="cyan"
      glow="strong"
      className="min-h-[30rem]"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative grid gap-8 xl:grid-cols-[1.35fr_0.85fr]">
        <div className="space-y-8">
          <div className="glass-chip text-accent inline-flex items-center gap-2 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em]">
            <span className="size-2 rounded-full bg-cyan-300" />
            {profileData.availability}
          </div>

          <div className="space-y-5">
            <p className="text-faint flex items-center gap-2 font-mono text-xs uppercase tracking-[0.34em]">
              <MapPin className="size-3.5" />
              Based in {profileData.location}
            </p>

            <h1 className="text-strong max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Premium interfaces,
              <span className="text-gradient block">reliable APIs,</span>
              and AI workflows built to ship.
            </h1>

            <p className="text-body max-w-2xl text-base leading-8">
              {profileData.headline} {profileData.bio}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-cyan-300 px-6 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-none hover:bg-cyan-200"
            >
              <a href={profileData.primaryCta.href}>
                {profileData.primaryCta.label}
                <ArrowRight className="size-4" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="glass-chip text-strong h-12 rounded-full px-6 text-sm font-semibold uppercase tracking-[0.18em] hover:bg-white/90 dark:hover:bg-white/[0.08]"
            >
              <Link href={profileData.secondaryCta.href}>
                {profileData.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {profileData.stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-subcard rounded-[28px] p-5"
            >
              <p className="text-faint font-mono text-[0.68rem] uppercase tracking-[0.24em]">
                {stat.label}
              </p>
              <p className="text-strong mt-3 text-3xl font-semibold tracking-[-0.06em]">
                {stat.value}
              </p>
              <p className="text-soft mt-2 text-sm leading-6">
                {stat.detail}
              </p>
            </div>
          ))}

          <div className="glass-subcard rounded-[28px] p-5">
            <div className="text-strong flex items-center gap-3">
              <div className="glass-chip text-accent flex size-10 items-center justify-center rounded-full">
                <Sparkles className="size-4" />
              </div>
              <div>
                <p className="text-faint font-mono text-[0.68rem] uppercase tracking-[0.24em]">
                  Current focus
                </p>
                <p className="text-sm font-semibold">Product polish with systems thinking</p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {profileData.focusAreas.map((area) => (
                <div key={area.title} className="space-y-1">
                  <p className="text-strong text-sm font-semibold">
                    {area.title}
                  </p>
                  <p className="text-soft text-sm leading-6">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
