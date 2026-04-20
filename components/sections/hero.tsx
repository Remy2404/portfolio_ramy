import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profileData } from "@/lib/data/profile";

const statAccents = [
  "brutal-section-cyan",
  "brutal-section-lime",
  "brutal-section-pink",
] as const;

export function HeroSection() {
  return (
    <div className="brutal-card brutal-section-violet relative overflow-hidden p-5 sm:min-h-[30rem] sm:p-7 md:min-h-[34rem] md:p-10">
      <div className="relative grid gap-8 md:grid-cols-[minmax(0,1.08fr)_minmax(17rem,0.92fr)] md:items-start lg:gap-10 xl:grid-cols-[minmax(0,1.3fr)_minmax(18rem,0.9fr)]">
        {/* ── Left: Identity + CTA ── */}
        <div className="space-y-6 sm:space-y-8 md:pr-4">
          {/* Availability */}
          <div className="inline-flex max-w-full flex-wrap items-center gap-2 border-2 border-black bg-xxx-yellow-300 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.24em] text-black shadow-[3px_3px_0px_0px_#000]">
            <span className="size-2 rounded-full bg-black" />
            {profileData.availability}
          </div>

          <div className="space-y-5 sm:space-y-6">
            {/* Location */}
            <p className="flex flex-wrap items-center gap-2 font-mono text-[0.68rem] font-black uppercase tracking-[0.34em] text-black">
              <MapPin className="size-3.5" />
              Based in {profileData.location}
            </p>

            {/* Heading */}
            <h1 className="max-w-2xl text-[clamp(1rem,9vw,4.75rem)] font-heading leading-[1.1] tracking-tight text-black sm:text-6xl sm:leading-[1.05] md:text-7xl lg:text-8xl xl:text-5xl">
              Premium{" "}
              <span className="inline-block align-baseline bg-black px-2 py-[0.05em] leading-none text-xxx-yellow-300">
                interfaces,
              </span>{" "}
              reliable APIs, <br className="hidden sm:block" />
              and AI workflows{" "}
              <span className="inline-block align-baseline bg-xxx-yellow-300 px-2 py-[0.05em] leading-none text-black">
                built to ship.
              </span>
            </h1>

            {/* Body */}
            <p className="max-w-2xl text-lg font-medium leading-relaxed text-black">
              {profileData.headline} {profileData.bio}
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap md:max-w-md">
            <Button
              asChild
              variant="default"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a href={profileData.primaryCta.href}>
                {profileData.primaryCta.label}
                <ArrowRight className="size-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href={profileData.secondaryCta.href}>
                {profileData.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </div>

        {/* ── Right: Stats + Focus ── */}
        <div className="grid min-w-0 gap-4 overflow-hidden md:pl-4 lg:pl-6 sm:grid-cols-2 sm:auto-rows-fr md:grid-cols-1 md:auto-rows-auto">
          {profileData.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`brutal-chip brutal-hover flex min-w-0 flex-col overflow-hidden p-5 ${statAccents[i % statAccents.length]}`}
            >
              <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-black">
                {stat.label}
              </p>

              <p className="mt-3 font-heading text-5xl tracking-tight text-black">
                {stat.value}
              </p>

              <p className="mt-2 text-sm font-medium leading-relaxed text-black">
                {stat.detail}
              </p>
            </div>
          ))}

          {/* Focus Card */}
          <div className="brutal-chip brutal-hover min-w-0 overflow-hidden bg-black p-5 sm:col-span-2 md:col-span-1">
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
                  <p className="text-sm font-black text-white">{area.title}</p>

                  <p className="text-sm font-medium leading-relaxed text-white">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
