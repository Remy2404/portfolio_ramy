import Link from "next/link"

import { ModeToggle } from "@/components/theme/mode-toggle"
import { Button } from "@/components/ui/button"
import { profileData } from "@/lib/data/profile"

const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Stack", href: "/#stack" },
  { label: "Contact", href: "/#contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 lg:px-8 2xl:max-w-[1680px]">
        <div className="flex items-center justify-between gap-3 rounded-full border border-white/20 bg-white/75 px-3 py-3 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur-2xl sm:gap-4 sm:px-4 dark:border-white/10 dark:bg-slate-950/60 dark:shadow-[0_28px_80px_-44px_rgba(0,0,0,0.85)]">
          <Link
            href="/"
            className="flex items-center gap-3 text-sm font-semibold tracking-[0.28em] text-slate-900 uppercase dark:text-white"
          >
            <span className="inline-flex size-9 items-center justify-center rounded-full border border-cyan-400/35 bg-cyan-400/15 text-[0.7rem] text-cyan-700 shadow-[0_0_0_1px_rgba(34,211,238,0.12)] dark:text-cyan-200">
              RM
            </span>
            <span className="hidden sm:inline">Ramy</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-medium uppercase tracking-[0.22em] text-slate-600 transition-colors hover:text-cyan-700 dark:text-slate-300 dark:hover:text-cyan-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button
              asChild
              size="sm"
              className="h-10 rounded-full bg-slate-950 px-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_50px_-28px_rgba(34,211,238,0.55)] hover:bg-slate-900 sm:px-4 sm:text-[0.68rem] sm:tracking-[0.2em] dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
            >
              <a href={profileData.primaryCta.href}>
                <span className="sm:hidden">Hire</span>
                <span className="hidden sm:inline">{profileData.primaryCta.label}</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
