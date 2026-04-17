import Link from "next/link"

import { ModeToggle } from "@/components/theme/mode-toggle"
import { Button } from "@/components/ui/button"
import { profileData } from "@/lib/data/profile"

const navigation = [
  { label: "Home",     href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Stack",    href: "/#stack" },
  { label: "Contact",  href: "/#contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-black bg-xxx-yellow-200 dark:border-white dark:bg-black">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1680px]">
        <div className="flex h-16 items-center justify-between gap-3 sm:gap-4">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.22em] text-black dark:text-white"
          >
            <span className="flex size-9 items-center justify-center border-2 border-black bg-black text-[0.7rem] font-black text-white shadow-[2px_2px_0px_0px_#000] dark:border-white dark:bg-white dark:text-black dark:shadow-[2px_2px_0px_0px_#fff]">
              RM
            </span>
            <span className="hidden sm:inline">Ramy</span>
          </Link>

          {/* Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-black uppercase tracking-[0.22em] text-black underline-offset-4 hover:underline dark:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ModeToggle />
            <Button asChild variant="default" size="sm">
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
