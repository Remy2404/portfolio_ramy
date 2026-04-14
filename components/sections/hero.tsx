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
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan-800 dark:text-cyan-200">
            <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            {profileData.availability}
          </div>

          <div className="space-y-5">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.34em] text-slate-600 dark:text-cyan-200/80">
              <MapPin className="size-3.5" />
              Based in {profileData.location}
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
              Premium interfaces,
              <span className="text-gradient block">reliable APIs,</span>
              and AI workflows built to ship.
            </h1>

            <p className="max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300">
              {profileData.headline} {profileData.bio}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-slate-950 px-6 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_24px_55px_-28px_rgba(34,211,238,0.55)] hover:bg-slate-900 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
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
              className="h-12 rounded-full border-white/30 bg-white/70 px-6 text-sm font-semibold uppercase tracking-[0.18em] text-slate-800 hover:bg-white dark:border-white/12 dark:bg-white/[0.05] dark:text-slate-100 dark:hover:bg-white/[0.08]"
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
              className="rounded-[28px] border border-white/20 bg-white/70 p-5 shadow-[0_18px_55px_-34px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_20px_65px_-36px_rgba(0,0,0,0.8)]"
            >
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
              <p className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-slate-950 dark:text-white">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {stat.detail}
              </p>
            </div>
          ))}

          <div className="rounded-[28px] border border-white/20 bg-white/70 p-5 shadow-[0_18px_55px_-34px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_20px_65px_-36px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-3 text-slate-950 dark:text-white">
              <div className="flex size-10 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/10 text-cyan-700 dark:text-cyan-200">
                <Sparkles className="size-4" />
              </div>
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                  Current focus
                </p>
                <p className="text-sm font-semibold">Product polish with systems thinking</p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {profileData.focusAreas.map((area) => (
                <div key={area.title} className="space-y-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {area.title}
                  </p>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
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
