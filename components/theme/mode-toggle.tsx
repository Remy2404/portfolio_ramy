"use client"

import { MoonStar, SunMedium } from "lucide-react"
import { useTheme } from "next-themes"

import { useHydrated } from "@/hooks/use-hydrated"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const hydrated = useHydrated()
  const isDark = hydrated ? resolvedTheme !== "light" : true

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="glass-chip text-strong h-10 rounded-full px-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] shadow-none hover:bg-white/90 dark:hover:bg-white/[0.07]"
    >
      <SunMedium className="text-accent size-3.5" />
      <MoonStar className="text-soft size-3.5" />
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </Button>
  )
}
