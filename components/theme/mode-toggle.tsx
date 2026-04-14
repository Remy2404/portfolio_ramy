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
      className="h-10 rounded-full border-white/20 bg-white/70 px-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-700 shadow-[0_16px_40px_-28px_rgba(14,116,144,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-100 dark:shadow-[0_18px_45px_-30px_rgba(34,211,238,0.35)]"
    >
      <SunMedium className="size-3.5 text-cyan-600 dark:text-cyan-300" />
      <MoonStar className="size-3.5 text-slate-500 dark:text-slate-200" />
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </Button>
  )
}
