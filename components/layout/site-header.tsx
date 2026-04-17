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
        <div className="glass-card-surface flex items-center justify-between gap-3 rounded-full px-3 py-3 sm:gap-4 sm:px-4">
          <Link
            href="/"
            className="text-strong flex items-center gap-3 text-sm font-semibold tracking-[0.28em] uppercase"
          >
            <span className="glass-chip text-accent inline-flex size-9 items-center justify-center rounded-full text-[0.7rem]">
              RM
            </span>
            <span className="hidden sm:inline">Ramy</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-soft text-xs font-medium uppercase tracking-[0.22em] transition-colors hover:text-accent"
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
              className="h-10 rounded-full bg-cyan-300 px-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-none hover:bg-cyan-200 sm:px-4 sm:text-[0.68rem] sm:tracking-[0.2em]"
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
