import Link from "next/link"
import { ArrowRight, MapPin, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { profileData } from "@/lib/data/profile"

const statAccents = [
  "brutal-section-cyan",
  "brutal-section-lime",
  "brutal-section-pink",
] as const

export function HeroSection() {
  return (
    <div className="brutal-card brutal-section-violet relative min-h-[30rem] overflow-hidden p-5 sm:p-7 md:p-10">
      <div className="relative grid gap-10 xl:grid-cols-[1.35fr_0.85fr]">

        {/* ── Left: Identity + CTA ── */}
        <div className="space-y-8">

          {/* Availability sticker */}
          <div className="inline-flex items-center gap-2 border-2 border-black bg-xxx-yellow-300 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.24em] text-black shadow-[3px_3px_0px_0px_#000]">
            <span className="size-2 rounded-full bg-black" />
            {profileData.availability}
          </div>

          <div className="space-y-6">

            {/* Location */}
            <p className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-[0.34em] text-black">
              <MapPin className="size-3.5" />
              Based in {profileData.location}
            </p>

            {/* Heading */}
            <h1 className="max-w-4xl font-heading text-5xl leading-[0.9] tracking-tight text-black sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              Premium{" "}
              <span className="inline-block bg-black px-3 py-1 leading-none text-xxx-yellow-300">
                interfaces,
              </span>{" "}
              reliable APIs,{" "}
              <br className="hidden sm:block" />
              and AI workflows{" "}
              <span className="inline-block bg-xxx-yellow-300 px-2 py-0.5 leading-none text-black">
                built to ship.
              </span>
            </h1>

            {/* Body */}
            <p className="max-w-2xl text-lg font-medium leading-relaxed text-black">
              {profileData.headline} {profileData.bio}
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="default" size="lg">
              <a href={profileData.primaryCta.href}>
                {profileData.primaryCta.label}
                <ArrowRight className="size-4" />
              </a>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href={profileData.secondaryCta.href}>
                {profileData.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </div>

        {/* ── Right: Stats + Focus ── */}
        <div className="grid min-w-0 gap-4 overflow-hidden">
          {profileData.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`brutal-chip min-w-0 overflow-hidden ${statAccents[i % statAccents.length]} brutal-hover p-5`}
            >
              <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-black">
                {stat.label}
              </p>

              <p className="mt-3 font-heading text-5xl tracking-tight text-black">
                {stat.value}
              </p>

              <p className="mt-2 text-base font-medium leading-relaxed text-black">
                {stat.detail}
              </p>
            </div>
          ))}

          {/* Focus card */}
          <div className="brutal-chip brutal-hover min-w-0 overflow-hidden bg-black p-5">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center border-2 border-xxx-yellow-300 bg-xxx-yellow-300">
                <Sparkles className="size-4 text-black" />
              </div>

              <div className="min-w-0 wrap-anywhere">
                <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-white">
                  Current focus
                </p>

                <p className="text-base font-black leading-snug text-white">
                  Product polish with systems thinking
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {profileData.focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="space-y-1 border-l-2 border-xxx-yellow-300 pl-3"
                >
                  <p className="text-sm font-black text-white">
                    {area.title}
                  </p>

                  <p className="text-sm font-medium leading-relaxed text-white wrap-anywhere">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}