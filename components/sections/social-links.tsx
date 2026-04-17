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
      accent="cyan"
      glow="medium"
      size="lg"
      className="h-full"
    >
      <div className="max-w-xl">
        <p className="text-faint font-mono text-[0.7rem] uppercase tracking-[0.28em]">
          Contact surfaces
        </p>
        <h2 className="text-strong mt-3 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">
          Hire-focused channels with direct access to work, profile, and conversation
        </h2>
        <p className="text-body mt-3 text-sm leading-7">
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
              className="glass-subcard group min-w-0 rounded-[28px] p-4 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-white/14 hover:bg-white/[0.06] sm:p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="glass-chip text-soft flex size-11 items-center justify-center rounded-full">
                    <Icon className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-strong text-sm font-semibold">
                      {link.label}
                    </p>
                    <p className="text-faint break-all font-mono text-[0.64rem] uppercase tracking-[0.14em]">
                      {link.handle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="text-faint mt-1 size-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>

              <p className="text-soft mt-4 text-sm leading-6">
                {link.description}
              </p>
            </a>
          )
        })}
      </div>
    </GlassCard>
  )
}
