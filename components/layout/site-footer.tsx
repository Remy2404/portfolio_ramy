import Link from "next/link"

import { siteConfig } from "@/lib/config/site"
import { socialLinks } from "@/lib/data/socials"

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-black bg-black dark:border-white">
      {/* Accent stripe */}
      <div className="h-2 w-full bg-xxx-yellow-300" />

      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 2xl:max-w-[1680px]">
        <div className="space-y-3">
          <p className="font-mono text-[0.72rem] font-black uppercase tracking-[0.28em] text-xxx-yellow-300">
            Curated GitHub snapshot
          </p>
          <p className="max-w-2xl text-base font-medium leading-relaxed text-white">
            Designed in Next.js 16 with Neo Brutalism. Local content model sourced from public GitHub data. Snapshot:{" "}
            {siteConfig.sourceSnapshotDate}.
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          {socialLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b-2 border-transparent text-xs font-black uppercase tracking-[0.2em] text-white transition-colors hover:border-xxx-yellow-300 hover:text-xxx-yellow-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
