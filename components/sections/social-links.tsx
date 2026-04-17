import {
  ArrowUpRight,
  AtSign,
  CircleUserRound,
  ContactRound,
  Globe,
  PanelsTopLeft,
} from "lucide-react"

import { profileData } from "@/lib/data/profile"
import type { SocialIconName } from "@/lib/types/portfolio"

const iconMap: Record<SocialIconName, typeof PanelsTopLeft> = {
  github:   PanelsTopLeft,
  linkedin: ContactRound,
  mail:     AtSign,
  globe:    Globe,
  facebook: CircleUserRound,
}

const linkAccents = [
  "bg-white",
  "bg-xxx-violet-200",
  "bg-white",
  "bg-xxx-pink-200",
  "bg-white",
] as const

export function SocialLinksSection() {
  return (
    <div id="contact" className="brutal-card brutal-section-cyan h-full overflow-hidden p-5 sm:p-7">

      <div className="max-w-xl">
        <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-black">
          Contact surfaces
        </p>
        <h2 className="mt-3 font-heading text-3xl leading-[0.95] tracking-tight text-black sm:text-4xl md:text-5xl">
          Hire-focused channels.{" "}
          <span className="inline-block bg-black px-3 py-1 leading-none text-xxx-cyan-200">
            Direct access.
          </span>
        </h2>
        <p className="mt-4 text-lg font-medium leading-relaxed text-black">
          Primary conversion stays simple in v1: direct contact and profile links instead of a backend form that adds friction without stronger value.
        </p>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
        {profileData.socials.map((link, i) => {
          const Icon = iconMap[link.icon]
          const bg = linkAccents[i % linkAccents.length]

          return (
            <a
              key={link.href}
              href={link.href}
              className={`brutal-hover brutal-chip ${bg} group block min-w-0 p-4 sm:p-5`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex size-11 items-center justify-center border-2 border-black bg-black text-white">
                    <Icon className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-black uppercase tracking-[0.1em] text-black">
                      {link.label}
                    </p>
                    <p className="break-all font-mono text-[0.64rem] font-black uppercase tracking-[0.14em] text-black">
                      {link.handle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="mt-1 size-4 shrink-0 text-black transition-transform duration-75 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <p className="mt-4 text-base font-medium leading-relaxed text-black wrap-anywhere">
                {link.description}
              </p>
            </a>
          )
        })}
      </div>

    </div>
  )
}
