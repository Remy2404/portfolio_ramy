import {
  ArrowUpRight,
  AtSign,
  CircleUserRound,
  ContactRound,
  Globe,
  PanelsTopLeft,
} from "lucide-react"

import { GlassCard } from "@/components/ui/glass-card"
import { profileData } from "@/lib/data/profile"
import type { SocialIconName } from "@/lib/types/portfolio"

const iconMap: Record<SocialIconName, typeof PanelsTopLeft> = {
  github: PanelsTopLeft,
  linkedin: ContactRound,
  mail: AtSign,
  globe: Globe,
  facebook: CircleUserRound,
}

export function SocialLinksSection() {
  return (
    <GlassCard
      id="contact"
      accent="violet"
      glow="medium"
      size="lg"
      className="h-full"
    >
      <div className="max-w-xl">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-slate-500 dark:text-violet-200/75">
          Contact surfaces
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-3xl dark:text-white">
          Hire-focused channels with direct access to work, profile, and conversation
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
          Primary conversion stays simple in v1: direct contact and profile links instead of a backend form that adds friction without stronger value.
        </p>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
        {profileData.socials.map((link) => {
          const Icon = iconMap[link.icon]

          return (
            <a
              key={link.href}
              href={link.href}
              className="group min-w-0 rounded-[28px] border border-white/18 bg-white/70 p-4 shadow-[0_18px_55px_-34px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-white/30 sm:p-5 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_18px_60px_-36px_rgba(0,0,0,0.82)] dark:hover:border-white/16"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/80 text-slate-800 shadow-[0_14px_30px_-18px_rgba(15,23,42,0.28)] dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-100">
                    <Icon className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">
                      {link.label}
                    </p>
                    <p className="break-all font-mono text-[0.64rem] uppercase tracking-[0.14em] text-slate-500 dark:text-slate-500">
                      {link.handle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="mt-1 size-4 shrink-0 text-slate-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-600 dark:text-slate-400 dark:group-hover:text-cyan-200" />
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {link.description}
              </p>
            </a>
          )
        })}
      </div>
    </GlassCard>
  )
}
