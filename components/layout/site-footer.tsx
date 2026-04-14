import Link from "next/link"

import { siteConfig } from "@/lib/config/site"
import { socialLinks } from "@/lib/data/socials"

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-white/10 pb-10 pt-8">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-4 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 2xl:max-w-[1680px] dark:text-slate-400">
        <div className="space-y-2">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300/80">
            Curated GitHub snapshot
          </p>
          <p className="max-w-2xl text-sm leading-7">
            Designed in Next.js 16 with a local content model sourced from public GitHub data. Snapshot date:{" "}
            {siteConfig.sourceSnapshotDate}.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {socialLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
